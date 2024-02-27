import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setErrorMessage: (state, action) => {
      toast.error(action.payload);
      return { message: action.payload };
    },
    setSuccessMessage: (state, action) => {
      toast.success(action.payload);
      return { message: action.payload };
    },
    clearMessage: () => {
      return { message: '' };
    },
  },
});

const { reducer, actions } = messageSlice;

export const { setErrorMessage, setSuccessMessage, clearMessage } = actions;
export default reducer;
