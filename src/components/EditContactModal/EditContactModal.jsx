import {  useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { editContact } from 'features/contacts/operations';
import { Overlay, ModalWindow, EditContactsForm, EditFormField, EditFormLabel, EditFormSubmitBtn} from './EditContactModal.styled';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';


export const EditContactModal = ({ id, name, number, onModalClose, onClick, expanded }) => {
  useEffect(() => {
    window.addEventListener('keydown', onModalClose);
    return () => {
      window.removeEventListener('keydown', onModalClose);
    };
  }, [onModalClose]);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const { name, number } = e.target.elements;
    const value = name.value;
    if (name.value === name.defaultValue && number.value === number.defaultValue) {
        return;
    }
    // const isContain = contacts
    //   ? contacts.some(
    //       contact => contact.name.toLowerCase() === value.toLowerCase()
    //     )
    //   : null;
    // if (isContain) {
    //   return notify(value);
    // }
    const contact = { name: value, number: number.value };
    dispatch(editContact({ id, contact }));
    toast.success(`Contact has been succesfully updated`, {
      autoClose: 1000,
    });
    e.target.reset();
  };
  return ReactDOM.createPortal(
    <Overlay onClick={onClick} id="overlay" expanded={expanded}>
      <ModalWindow >
      <EditContactsForm autoComplete="off" onSubmit={handleSubmit}>
        <EditFormLabel htmlFor="name"></EditFormLabel>
        <EditFormField
          type="text"
          name="name"
          id="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          defaultValue={name}
        />
        <EditFormLabel htmlFor="number"></EditFormLabel>
        <EditFormField
          type="tel"
          name="number"
          id="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          defaultValue={number}
        />
        <EditFormSubmitBtn type="submit">Edit</EditFormSubmitBtn>
        <EditFormSubmitBtn type="button" onClick={onClick} id="close-modal">
          Close Modal
        </EditFormSubmitBtn>
      </EditContactsForm>
      </ModalWindow>
    </Overlay>,
    document.querySelector('#modal-root')
  );
};

EditContactModal.propTypes = {
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };
