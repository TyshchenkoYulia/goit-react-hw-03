import "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList({ onDelete }) {
  return (
    <div>
      <Contact onDelete={onDelete} />
    </div>
  );
}
