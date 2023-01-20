import css from './ContactsList.module.css';
import { deleteContact } from 'redux/store';
import { useDispatch } from 'react-redux';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.contact__item}>
      <p>
        {name}: {number}
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
