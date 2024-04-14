import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import contactCard from "../../contacts.json";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import css from "./App.module.css";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedUsers = window.localStorage.getItem("saved-contact");

    if (savedUsers !== null) {
      return JSON.parse(savedUsers);
    }

    return contactCard;
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    window.localStorage.setItem("saved-contact", JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const userSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    telNumber: Yup.string()
      .min(7, "Too Short!")
      .max(10, "Too Long!")
      .required("Required"),
  });

  const initialValues = {
    // id: nanoid(),
    name: "",
    telNumber: "",
  };

  const addUser = (newUser) => {
    setContacts((previewContact) => {
      return [...previewContact, { ...newUser, id: nanoid() }];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((previewContact) => {
      return previewContact.filter((contact) => contact.id !== contactId);
    });
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm
        values={initialValues}
        onAddUser={addUser}
        validation={userSchema}
      />
      <SearchBox value={search} onFilter={setSearch} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
