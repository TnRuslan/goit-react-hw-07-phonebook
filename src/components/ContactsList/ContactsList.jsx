import { Contact } from './Contact';
import css from './ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './../../redux/operations';

export const ContactsList = () => {
  const contacts = useSelector(state => state.myContacts.contacts.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filter = useSelector(state => state.myContacts.filter);
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
