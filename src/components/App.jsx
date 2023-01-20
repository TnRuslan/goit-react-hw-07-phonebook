import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>

      <Form />

      <h2>Contacts:</h2>
      <Filter />

      <ContactsList />
    </div>
  );
};
