import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from './message';
import AuthService from '../service/auth.service';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';

const user = getCookie('token') ? getCookie('token') : {};
export const register = createAsyncThunk('user/register', async (args: any, thunkAPI) => {
  try {
    const response = await AuthService.register(args.username, args.email, args.password);
    thunkAPI.dispatch(setMessage(response.data.message));
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const login = createAsyncThunk('user/login', async (args: any, thunkAPI) => {
  try {
    const data = await AuthService.login(args.username, args.password);
    setCookie('token', data?.data?.token);
    return data.data;
  } catch (error) {
    deleteCookie('token');
    if (error?.response?.data?.notify)
      thunkAPI.dispatch(setMessage(error?.response?.data?.notify ?? 'Somthing went wrong!'));
    return thunkAPI.rejectWithValue(error);
  }
});

export const me = createAsyncThunk('user/me', async ({}, thunkAPI) => {
  try {
    const data = await AuthService.meData(getCookie('token'));
    return data?.data;
  } catch (error) {
    if (error?.response?.data?.notify)
      thunkAPI.dispatch(setMessage(error?.response?.data?.notify ?? 'Somthing went wrong!'));
    return thunkAPI.rejectWithValue(error);
  }
});

export const logout = createAsyncThunk('user/logout', async () => {
  await AuthService.logout();
  deleteCookie('token');
  return true;
});

export const forgetPassword = createAsyncThunk(
  'user/forget-password',
  async (args: any, thunkAPI) => {
    try {
      const response = await AuthService.forgetPassword({ email: args?.email });
      return response.data;
    } catch (error) {
      if (error?.response?.data?.notify)
        thunkAPI.dispatch(setMessage(error?.response?.data?.notify ?? 'Somthing went wrong!'));
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetPasswordWithOtp = createAsyncThunk(
  'user/reset-password',
  async (args: any, thunkAPI) => {
    try {
      const response = await AuthService.resetPasswordWithOtp({
        token: args.token,
        password: args.password,
      });
      return response.data;
    } catch (error) {
      if (error?.response?.data?.notify)
        thunkAPI.dispatch(setMessage(error?.response?.data?.notify ?? 'Somthing went wrong!'));
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const getInitialStage = () => {
  return {
    isLoggedIn: getCookie('token') ? true : false,
    user: user,
  };
};
const initialState = getInitialStage();
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state: any, action: any) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
      })
      .addCase(me.fulfilled, (state: any, action: any) => {
        // state.isLoggedIn = action.payload?.isLoggedIn;
        state.user = action.payload?.user;
      })
      .addCase(forgetPassword.fulfilled, (state: any, action: any) => {
        state.isLoggedIn = false;
        state.user = action.payload?.userdata ?? {};
      })
      .addCase(resetPasswordWithOtp.fulfilled, (state: any, action: any) => {
        state.isLoggedIn = false;
        state.user = action.payload?.userdata ?? {};
      })
      .addCase(logout.fulfilled, (state: any, action: any) => {
        state.isLoggedIn = false;
        state.user = action?.payload?.userdata ? action?.payload?.userdata : {};
      });
  },
});
const { reducer } = authSlice;
export default reducer;
