import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm ';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export const App =() => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const localContacts = localStorage.getItem('contacts');
    if (localContacts) {
      const parseContacts = JSON.parse(localContacts);
      if (parseContacts) {
        setContacts( parseContacts);
      }
    }
  }, []);

  useEffect((prevState) => {
    if (contacts.length > 0) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts])

  const addForm = (data) => {
    const newContact = {
      id: nanoid(),
      ...data,
    };

    const contactData = contacts.find((user) => user.name === data.name);

    if (contactData) {
      alert(`${data.name} is already in contacts`);
      return false;
    } else {
      setContacts(prevState => {
        return [...prevState, newContact]
      })
     return true;
    }
  }

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getFilterContact = () => {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
  };

  const filterContact = () => {
    return (
      filter ? getFilterContact() : contacts
    )
  }

  const handleDeleteContact = (id) => {
    setContacts(prevState => (prevState.filter(contact => contact.id !== id)));
  }

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addForm} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={filterContact()} onDelete={handleDeleteContact}/>
    </>
  )
}

export default App;
