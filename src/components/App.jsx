import React from 'react';
import { Component } from 'react';

import { nanoid } from 'nanoid';


import ContactForm from './ContactForm/ContactForm ';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';


class App extends Component {
  state = {
    filter: '',
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  componentDidMount() {
    const localContacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(localContacts);

    if (parseContacts) {
      this.setState( { contacts: parseContacts});
    }
  }

  componentDidUpdate(prevProps, prevState) {

    if (this.state.contacts !==prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

//новый контакт для добавления
  addForm = data => {
    const newContact = {
      id: nanoid(),
      ...data,
    };

    const contactData =  this.state.contacts.find((user)=> user.name === data.name );

    if (contactData) {
      alert(`${data.name} is already in contacts`);
      return false;
    } else {
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
      return true;
    }
  };

  getFilterContact = () => {
    const { filter, contacts } = this.state;

    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
  };
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  handleDeleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  }
  render() {
    const { contacts, filter } = this.state;
    const filterContact = filter ? this.getFilterContact() : contacts;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addForm} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={filterContact} onDelete={this.handleDeleteContact}/>
      </>

    );
  };

}
export default App;
