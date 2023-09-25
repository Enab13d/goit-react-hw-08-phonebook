import { Wrapper } from 'components/App/App.styled';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { ToastContainer } from 'react-toastify';

const ContactsPage = () => {
  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm></ContactForm>
      <h2>Contacts</h2>
      <Filter />
      <ContactList></ContactList>
      <ToastContainer position="top-center" autoClose={2000} />
    </Wrapper>
  );
};

export default ContactsPage;