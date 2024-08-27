import css from "./Contact.module.css";

export default function Contact({ id, name, number, onDelete }) {
  return (
    <div className={css.wrap}>
      <div className={css.list}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button className={css.btnDel} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
