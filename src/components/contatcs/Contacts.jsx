import React from 'react';
import { ContainerDiv, Ul, Button } from './Contacts.styled';
import { deleteContact } from 'redux/filter/slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectContact, selectFilter } from 'redux/filter/selectors';
import { filterContacts } from 'components/contatcs/filterItem';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContact);
  const filter = useSelector(selectFilter);

  const data = filterContacts(contacts, filter);

  return (
    <ContainerDiv>
      <Ul>
        {data.map(item => (
          <li key={item.id}>
            {item.name}: {item.number}
            <Button onClick={() => dispatch(deleteContact(item.id))}>
              Delete
            </Button>
          </li>
        ))}
      </Ul>
    </ContainerDiv>
  );
};
