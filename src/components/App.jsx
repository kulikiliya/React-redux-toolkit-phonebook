import React, { useEffect, useState } from 'react';
import { Contacts } from './contatcs/Contacts';
import { AddForm } from './add_inputs/AddForm';
import { Filter } from './filter/Fiter';
import { Wrapper } from './App.styled';
import { filterContacts } from './utility/filterItem';

export const App = () => {
  const [contacts, setContact] = useState(
    () =>
      JSON.parse(window.localStorage.getItem('Contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('Contacts', JSON.stringify(contacts));
  }, [contacts]);

  // useEffect(() => {
  //   const items = JSON.parse(window.localStorage.getItem('Contacts'));
  //   if (items?.length) {
  //     setContact(items);
  //   }
  // }, [contacts]);

  const handleAddContacts = (name, number, id) => {
    const item = { name, number, id };

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    setContact(prev => [...prev, item]);
  };

  const handleChangeFilter = filter => {
    setFilter(filter);
  };
  const handleDeleteTodo = id => {
    setContact(prev => prev.filter(item => item.id !== id));
  };

  const filteredData = filterContacts(contacts, filter);

  return (
    <>
      <Wrapper>
        <h1>Phonebook</h1>
        <AddForm addContacts={handleAddContacts} />
        <h2>Contacts</h2>
        <Filter takeData={handleChangeFilter} filterValue={filter} />
        <Contacts filter={filteredData} deleteData={handleDeleteTodo} />
      </Wrapper>
    </>
  );
};
