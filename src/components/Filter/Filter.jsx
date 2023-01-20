import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/store';

export const Filter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const filterChange = e => {
    setFilter(e.currentTarget.value);
    dispatch(filterContacts(e.currentTarget.value));
  };

  return (
    <label>
      find contacts by name{' '}
      <input type="text" value={filter} onChange={filterChange} />
    </label>
  );
};
