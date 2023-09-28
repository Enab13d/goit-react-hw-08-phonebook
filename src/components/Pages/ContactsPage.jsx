import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';

import { ContactsWrapper } from 'components/ContactForm/ContactForm.styled';

const ContactsPage = () => {
  return (

      <ContactsWrapper>
      <h1>Phonebook</h1>
      <ContactForm></ContactForm>
      <h2>Contacts</h2>
      <Filter />
        <ContactList></ContactList>

      </ContactsWrapper>

  );
};

export default ContactsPage;