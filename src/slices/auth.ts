import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from './message';
import AuthService from '../service/auth.service';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';

const user = getCookie('token') ? getCookie('token') : {};
export const register = createAsyncThunk(
  'user/register',

  async (args: any, thunkAPI) => {
    try {
      const response = await AuthService.register(args.username, args.email, args.password);
      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk('user/login', async (args: any, thunkAPI) => {
  try {
    const data = await AuthService.login(args.username, args.password);
    setCookie('token', data?.data?.token);
    return data.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue(message);
  }
});

export const me = createAsyncThunk('user/me', async ({}, thunkAPI) => {
  try {
    // console.log(getCookie("token"));
    const data = await AuthService.meData(getCookie('token'));
    return data?.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue(message);
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
      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      //return thunkAPI.rejectWithValue();
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
      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      // return thunkAPI.rejectWithValue();
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
      .addCase(logout.fulfilled, (state: any, action: any) => {
        state.isLoggedIn = false;
        state.user = action?.payload?.userdata ? action?.payload?.userdata : {};
      });
  },
});

// [login.fulfilled]: (state, action) => {
//   state.isLoggedIn = true;
//   state.user = action.payload.user;
// },
// [login.rejected]: (state, action) => {
//   state.isLoggedIn = false;
//   state.user = null;
// },
// [logout.fulfilled]: (state, action) => {
//   state.isLoggedIn = false;
//   state.user = null;
// },
// [forgetPassword.fulfilled]: (state, action) => {
//   state.isLoggedIn = false;
// },
// [forgetPassword.rejected]: (state, action) => {
//   state.isLoggedIn = false;
// },
// [resetPasswordWithOtp.fulfilled]: (state, action) => {
//   state.isLoggedIn = false;
// },
// [resetPasswordWithOtp.rejected]: (state, action) => {
//   state.isLoggedIn = false;
// },
// [me.fulfilled]: (state, action) => {
//   state.isLoggedIn = true;
// },
// [me.rejected]: (state, action) => {
//   state.isLoggedIn = false;
// },
//   },
// });

const { reducer } = authSlice;
export default reducer;
