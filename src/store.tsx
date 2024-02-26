import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authReducer from './slices/auth';
const reducer = {
  auth: authReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
