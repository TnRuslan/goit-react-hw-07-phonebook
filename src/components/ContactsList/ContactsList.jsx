import { Contact } from './Contact';
import css from './ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/operations';
import { selectContacts, selectFilter } from '../../redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filter = useSelector(selectFilter);
  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <ul className={css.contacts__list}>
      {filteredContacts.map(contact => {
        return (
          <Contact
            name={contact.name}
            number={contact.phone}
            key={contact.id}
            id={contact.id}
          />
        );
      })}
    </ul>
  );
};
