import PropTypes from 'prop-types';

const ContactItem = ( { contact: { id, name, number }, onDelete } ) => {
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button type='button' onClick={()=>{onDelete(id)}}>Delete</button>
    </li>
  )
 }


 export default ContactItem;

ContactItem.proTypes = {
  onDelete: PropTypes.func.isRequired,
  contact:PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.string.isRequired,
      name:PropTypes.string.isRequired,
      number:PropTypes.number.isRequired,
    })
  )
}
