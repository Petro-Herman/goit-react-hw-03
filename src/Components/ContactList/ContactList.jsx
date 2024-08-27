import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

// export default function ContactList({ contacts, onDelete }) {
//   return <Contact />;
// }

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
}
