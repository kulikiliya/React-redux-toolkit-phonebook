import React from 'react';
import { FilerInput } from './Filer.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filerData } from 'redux/filter/slice';
import { selectFilter } from 'redux/filter/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <label>
      Filter
      <FilerInput
        onChange={e => dispatch(filerData(e.target.value))}
        type="text"
        name="filter"
        value={filter}
      ></FilerInput>
    </label>
  );
};
