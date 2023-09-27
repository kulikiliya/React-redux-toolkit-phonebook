import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  contacts: [],
  filter: '',
};
const slice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: {
      prepare: (name, number) => {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },

      reducer: (state, action) => {
        const isExist = state.contacts.find(
          item => item.name === action.payload.name
        );
        if (!isExist) {
          state.contacts.push(action.payload);
        } else {
          alert('Already exist');
        }
      },
    },

    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        item => item.id !== action.payload
      );
    },

    filerData: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const contactReducer = slice.reducer;
export const { addContact, deleteContact, filerData } = slice.actions;
