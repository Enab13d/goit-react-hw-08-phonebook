import { List } from './ContactList.styled';
import { Contact } from '../Contact';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'features/contacts/operations';
import { selectContacts, selectIsLoading } from 'features/contacts/selectors';
import { getFilterValue } from 'features/filter/filterSlice';
import { Loader } from 'components/App/Loader/Loader';
import { useEffect } from 'react';
export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const filter = useSelector(getFilterValue);
  const contacts = useSelector(selectContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  
  const filteredContacts = contacts
    ? [...contacts].filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : [];
  
 
  return (
    <>
      {isLoading && !contacts.length && (
        <>
          <Loader />
        </>
      )}
      <List>
        {filteredContacts ?
         filteredContacts.map(({ name, number, id }) => {
              return (
                <Contact key={id} id={id} name={name} number={number}></Contact>
              );
            }) : null
          }
      </List>
    </>
  );
};
