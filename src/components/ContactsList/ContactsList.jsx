import { Contact } from './Contact';
import css from './ContactsList.module.css';
import { useSelector } from 'react-redux';

export const ContactsList = () => {
  const contacts = useSelector(state => state.myContacts.contacts);

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
            number={contact.number}
            key={contact.id}
            id={contact.id}
          />
        );
      })}
    </ul>
  );
};
