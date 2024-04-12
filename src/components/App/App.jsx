import { useState } from "react";
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

  const deleteContact = (contactId) => {
    setContacts((previewContact) => {
      return previewContact.filter((contact) => contact.id !== contactId);
    });
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox value={search} onFilter={setSearch} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
