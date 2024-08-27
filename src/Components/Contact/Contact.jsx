import data from "../contact.json";

export default function Contact({contacts =[], onDelete}) {
return (
<ul>
    {contacts.map((contact) => (
        <li key={contact.id}>
        <Contact data={contact} onDelete={onDelete} />
      </li>
    ))}
</ul>
)
}