import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";

export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <p className={css.name}>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p className={css.telNumber}>
          <BsTelephoneFill className={css.icon} />
          {number}
        </p>
      </div>

      <button
        className={css.btn}
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
