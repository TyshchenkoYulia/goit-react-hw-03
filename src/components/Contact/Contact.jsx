import "./Contact.module.css";

export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <button
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
