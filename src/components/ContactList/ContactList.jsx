import React from 'react';
import PropTypes from 'prop-types';

import ContactItem from './ContactItem';

const ContactsList = ({ contacts, onDelete }) => (
  <ul >
    {contacts.map(item  => (
      <ContactItem key={item.id}  contact={item} onDelete={onDelete} />
    ))}
  </ul>
);

export default ContactsList;

ContactsList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
  onDelete: PropTypes.func.isRequired,
};
