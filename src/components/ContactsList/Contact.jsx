import css from './ContactsList.module.css';
import { deleteContact } from 'redux/store';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './../../redux/operations';

export const Contact = ({ name, phone, id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <li className={css.contact__item}>
      <p>
        {name}: {phone}
      </p>
      <button
        className={css.contact__btn}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delet
      </button>
    </li>
  );
};
