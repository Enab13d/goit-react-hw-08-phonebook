import {
  DeleteBtn,
  Item,
  ContactBlock,
  ContactName,
  ContactNumber,
} from './Contact.styled';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsDeleting} from 'features/contacts/selectors';
import { deleteContact } from 'features/contacts/operations';
import { DeleteIcon } from './Contact.styled';
import { RotatingLines } from 'react-loader-spinner';
import { useRef } from 'react';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const isDeleting = useSelector(selectIsDeleting);
  const showSpinnerRef = useRef(false);

  const handleDeleteContact = e => {
    const contactId = e.currentTarget.id;
    if (contactId === id) {
      showSpinnerRef.current = true;
      dispatch(deleteContact(contactId));
    }
  };

  return (
    <Item key={id}>
      <ContactBlock>
        <ContactName>{name}</ContactName>
        <ContactNumber>{number}</ContactNumber>
      </ContactBlock>
      <DeleteBtn type="button" onClick={handleDeleteContact} id={id}>
        {isDeleting && showSpinnerRef.current ? (
          <RotatingLines strokeColor="white" width="20" />
        ) : (
          <DeleteIcon title="remove contact" />
        )}
      </DeleteBtn>
    </Item>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
