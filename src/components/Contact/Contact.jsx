import {
  ContactActionBtn,
  Item,
  ContactBlock,
  ContactName,
  ContactNumber,
  EditIcon,
  ButtonHolder,
} from './Contact.styled';
import { EditContactModal } from 'components/EditContactModal/EditContactModal';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsDeleting } from 'features/contacts/selectors';
import { deleteContact } from 'features/contacts/operations';
import { DeleteIcon } from './Contact.styled';
import { RotatingLines } from 'react-loader-spinner';
import { useRef } from 'react';
import { useState } from 'react';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const isDeleting = useSelector(selectIsDeleting);
  const showSpinnerRef = useRef(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);

  const hideModal = () => setIsModalOpen(false);

  const onModalClose = e => {
    if (e.key === 'Escape') {
      hideModal();
    }
  };

  const handleDeleteContact = e => {
    if (e.currentTarget.id === id) {
      showSpinnerRef.current = true;
      dispatch(deleteContact(e.currentTarget.id));
    }
  };

  return (
    <>
      <Item key={id}>
        <ContactBlock>
          <ContactName>{name}</ContactName>
          <ContactNumber>{number}</ContactNumber>
        </ContactBlock>
        <ButtonHolder>
          <ContactActionBtn type="button" onClick={showModal}>
            <EditIcon title="edit contact" />
          </ContactActionBtn>
          <ContactActionBtn type="button" onClick={handleDeleteContact} id={id}>
            {isDeleting && showSpinnerRef.current ? (
              <RotatingLines strokeColor="white" width="20" />
            ) : (
              <DeleteIcon title="remove contact" />
            )}
          </ContactActionBtn>
        </ButtonHolder>
      </Item>
      <EditContactModal
          id={id}
          name={name}
          number={number}
          onModalClose={onModalClose}
          hideModal={hideModal}
          expanded={isModalOpen}
        />
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
