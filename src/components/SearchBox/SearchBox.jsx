import css from "./SearchBox.module.css";
import { useId } from "react";

export default function SearchBox({ value, onFilter }) {
  const searchText = useId();
  return (
    <div className={css.container}>
      <label className={css.text} htmlFor="searchText">
        Find contacts by name
      </label>
      <input
        className={css.field}
        type="text"
        id={searchText}
        value={value}
        onChange={(event) => onFilter(event.target.value)}
      />
    </div>
  );
}
