import { useState } from 'react';
import { FormDiv, Button, Input } from './AddForm.styled';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const AddForm = ({ addContacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInput = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const id = nanoid();

    addContacts(name, number, id);

    setName('');
    setNumber('');
  };

  return (
    <FormDiv onSubmit={handleSubmit}>
      <label>
        Name
        <Input
          onChange={handleInput}
          value={name}
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Phone
        <Input
          onChange={handleInput}
          value={number}
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <Button>Add contact</Button>
    </FormDiv>
  );
};

AddForm.propType = {
  addContacts: PropTypes.func,
};
