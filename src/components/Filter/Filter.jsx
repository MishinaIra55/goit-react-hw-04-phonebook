import React from 'react';
import PropTypes from 'prop-types';
// import styles from '../ContactForm/ContactForm.module.css';
import styles from './Filter.module.css'

const Filter = ( {value, onChange}) => (
  <label className={styles.filter__label}>
   Find contacts by name
    <input
      className={styles.filter__input}
      type='text'
      value={value}
           onChange={onChange}/>
  </label>
)
export default Filter;

Filter.proTypes = {
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
}

