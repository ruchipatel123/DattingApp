import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authReducer from './slices/auth';
import messageReducer from './slices/message';
import commonReducer from './slices/common';
import axios from 'axios';
import { getCookie } from 'cookies-next';
axios.interceptors.request.use(
  (config) => {
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
    document.body.classList.add('loading-indicator');
    return config;
  },
  (error) => {
    document.body.classList.remove('loading-indicator');
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    // spinning hide
    // UPDATE: Add this code to hide global loading indicator
    document.body.classList.remove('loading-indicator');

    return response;
  },
  function (error) {
    document.body.classList.remove('loading-indicator');
    if (
      (error?.response?.status && error?.response?.status == 401) ||
      error?.response?.status == 403
    ) {
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
const reducer = {
  auth: authReducer,
  common: commonReducer,
  message: messageReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
