import { useState } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import contactCard from "../../contacts.json";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import css from "./App.module.css";

export default function App() {
  const [contacts, setContacts] = useState(contactCard);
  const [search, setSearch] = useState("");

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const validation = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(7, "Too Long!")
      .required("Required"),
  });

  const initialValues = {
    id: nanoid(),
    name: "",
    telNumber: "",
  };

  const addUser = (newUser) => {
    setContacts((previewContact) => {
      return [...previewContact, newUser];
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
        value={initialValues}
        onAddUser={addUser}
        validation={validation}
      />
      <SearchBox value={search} onFilter={setSearch} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
