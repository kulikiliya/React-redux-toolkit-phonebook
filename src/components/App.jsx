import React from 'react';
import { Contacts } from './contatcs/Contacts';
import { AddForm } from './add_inputs/AddForm';
import { Filter } from './filter/Fiter';
import { Wrapper } from './App.styled';

export const App = () => {
  return (
    <>
      <Wrapper>
        <h1>Phonebook</h1>
        <AddForm />
        <h2>Contacts!</h2>
        <Filter />
        <Contacts />
      </Wrapper>
    </>
  );
};
