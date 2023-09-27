import {
  DeleteBtn,
  Item,
  ContactBlock,
  ContactName,
  ContactNumber,
} from './Contact.styled';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoading, selectContacts } from 'features/contacts/selectors';
import { deleteContact } from 'features/contacts/operations';
import { DeleteIcon } from './Contact.styled';
import { RotatingLines } from 'react-loader-spinner';
export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

  return (
    <Item key={id}>
      <ContactBlock>
        <ContactName>{name}</ContactName>
        <ContactNumber>{number}</ContactNumber>
      </ContactBlock>
      <DeleteBtn
        type="button"
        onClick={() => dispatch(deleteContact(id))}
        id={id}
      >
        {isLoading && contacts.length ? (
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
