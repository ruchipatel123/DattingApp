import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authReducer from './slices/auth';
import messageReducer from './slices/message';
import axios from 'axios';
import { getCookie } from 'cookies-next';
axios.interceptors.request.use((config) => {
  const authToken = getCookie('token');
  let header: any = config.headers;
  header = authToken
    ? {
        ...header,
        Accept: 'application/json',
        Authorization: 'Bearer ' + authToken,
      }
    : {
        ...header,
        Accept: 'application/json',
      };
  config.headers = header;
  return config;
});

const reducer = {
  auth: authReducer,
  message: messageReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
