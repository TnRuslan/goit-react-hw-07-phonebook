import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
import { useSelector } from 'react-redux';
import { selectError, selectStatusLoading } from 'redux/selectors';

export const App = () => {
  const error = useSelector(selectError);
  const isLoading = useSelector(selectStatusLoading);
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>

      <Form />

      <h2>Contacts:</h2>
      <Filter />
      {!error && isLoading && <p>Request in progress...</p>}
      <ContactsList />
    </div>
  );
};
