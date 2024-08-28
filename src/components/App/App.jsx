import { useEffect, useState } from "react";
// import Contact from "../Contact/Contact";
import ContactForm from "../ContactForm/ContactForm";
import data from "../contact.json";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

export default function App() {
  const fetchInitialContacts = () => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : data;
  };
  const [contacts, setContacts] = useState(fetchInitialContacts);
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  // useEffect(() => {
  //   const savedContacts = localStorage.getItem("contacts");
  //   if (!savedContacts) {
  //     localStorage.setItem("contacts", JSON.stringify(data));
  //   }
  // }, []);

  const addContact = (newContact) => {
    const isDuplicate = contacts.some(
      (contact) =>
        contact.name.toLowerCase() === newContact.name.toLowerCase ||
        contact.number === newContact.number
    );
    if (isDuplicate) {
      alert(
        `${newContact.name} or ${newContact.number} is already in contacts.`
      );
      return;
    }
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
      {/* <Contact /> */}
    </div>
  );
}
