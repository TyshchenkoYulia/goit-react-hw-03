// import { useState } from 'react'
import ContactForm from "../ContactForm";
import SearchBox from "../SearchBox";
import ContactList from "../ContactList";
import "./App.css";

export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
