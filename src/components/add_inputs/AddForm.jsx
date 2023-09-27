import { useState } from 'react';
import { FormDiv, Button, Input } from './AddForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/filter/slice';

export const AddForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

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

    dispatch(addContact(name, number));

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
