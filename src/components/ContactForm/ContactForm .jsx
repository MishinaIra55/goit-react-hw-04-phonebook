// import React, { Component } from 'react';
//
// import styles from './ContactForm.module.css';
// import PropTypes from 'prop-types';
//
// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   }
//
//
//   handleInputChange = event => {
//     const {name, value} = event.target;
//     console.log('name', name);
//     console.log('value',value);
//     this.setState({
//       [name]: value
//     })
//   };
//
//   handleSubmit = event => {
//     event.preventDefault();
//
//     const checkName = this.props.addContact(this.state);
//
//     if(checkName) {
//       this.reset();
//     }
//   };
//
//   reset = () => {
//     this.setState( {
//       name: '',
//       number: '',
//     });
//   };
//
//   render() {
//     return(
//       <form onSubmit={this.handleSubmit} className={styles.form}>
//
//         <label>
//           Name
//           <input
//
//             className={styles.input}
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             value={this.state.name}
//             onChange={this.handleInputChange}
//           />
//         </label>
//
//         <label>
//           Number
//           <input
//
//             className={styles.input}
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             value={this.state.number}
//             onChange={this.handleInputChange}
//           />
//         </label>
//
//         <button type='submit' >Add contact</button>
//       </form>
//     );
//   }
// }

// export default ContactForm;
//
// ContactForm.proTypes = {
//   addContact:PropTypes.bool,
// }
//


import { useState } from 'react';
import styles from './ContactForm.module.css';
import PropTypes from 'prop-types';

export const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  const handleInputChange = ({ currentTarget: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };


  const handleSubmit = event => {
    event.preventDefault();

   const checkName = addContact({ name, number });

    if (checkName) {
      setName('');
      setNumber('');
    }
  };


  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>

        <label>
          Name
          <input

            className={styles.input}
            type='text'
            name='name'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Number
          <input

            className={styles.input}
            type='tel'
            name='number'
            pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
            title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
            required
            value={number}
            onChange={handleInputChange}
          />
        </label>

        <button type='submit'>Add contact</button>
      </form>
    </>
  );
};


ContactForm.proTypes = {
  addContact: PropTypes.bool,
};
