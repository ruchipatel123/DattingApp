import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setErrorMessage, setSuccessMessage } from './message';
import AuthService from '../service/auth.service';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';

const user = getCookie('token') ? getCookie('token') : {};
export const register = createAsyncThunk('user/register', async (args: any, thunkAPI) => {
  try {
    const data = await AuthService.register(args);
    if (data?.notify) thunkAPI.dispatch(setSuccessMessage(data?.notify ?? 'Success!'));
    return data.data;
  } catch (error) {
    if (error?.response?.data?.notify)
      thunkAPI.dispatch(setErrorMessage(error?.response?.data?.notify ?? 'Somthing went wrong!'));
    return thunkAPI.rejectWithValue(error);
  }
});

export const loginFacebook = createAsyncThunk('user/facebook-login', async ({}: any, thunkAPI) => {
  try {
    const data = await AuthService.loginWithFacebook();
    if (data?.notify) thunkAPI.dispatch(setSuccessMessage(data?.notify ?? 'Success!'));
    return data.data;
  } catch (error) {
    if (error?.response?.data?.notify)
      thunkAPI.dispatch(setErrorMessage(error?.response?.data?.notify ?? 'Somthing went wrong!'));
    return thunkAPI.rejectWithValue(error);
  }
});

export const loginFacebookCallback = createAsyncThunk(
  'user/facebook-login-callback',
  async (args: any, thunkAPI) => {
    try {
      const data = await AuthService.loginWithFacebookCallaback(args?.code ?? '');
      if (data?.notify) thunkAPI.dispatch(setSuccessMessage(data?.notify ?? 'Success!'));
      setCookie('token', data?.data?.token);
      return data.data;
    } catch (error) {
      if (error?.response?.data?.notify)
        thunkAPI.dispatch(setErrorMessage(error?.response?.data?.notify ?? 'Somthing went wrong!'));
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const completeMyProfile = createAsyncThunk(
  'user/complete-my-profile',
  async (args: any, thunkAPI) => {
    try {
      const data = await AuthService.completeMySocialProfile(args);
      if (data?.notify) thunkAPI.dispatch(setSuccessMessage(data?.notify ?? 'Success!'));
      deleteCookie('status');
      return data.data;
    } catch (error) {
      if (error?.response?.data?.notify)
        thunkAPI.dispatch(setErrorMessage(error?.response?.data?.notify ?? 'Somthing went wrong!'));
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk('user/login', async (args: any, thunkAPI) => {
  try {
    const data = await AuthService.login(args.username, args.password);
    setCookie('token', data?.data?.token);
    setCookie('user', data?.data?.user);
    if (data?.notify) thunkAPI.dispatch(setSuccessMessage(data?.notify ?? 'Success!'));
    return data.data;
  } catch (error) {
    deleteCookie('token');
    if (error?.response?.data?.notify)
      thunkAPI.dispatch(setErrorMessage(error?.response?.data?.notify ?? 'Somthing went wrong!'));
    return thunkAPI.rejectWithValue(error);
  }
});

export const me = createAsyncThunk('user/me', async (args: any, thunkAPI) => {
  try {
    const data = await AuthService.meData();
    if (data?.notify) thunkAPI.dispatch(setSuccessMessage(data?.notify ?? 'Success!'));
    return data?.data;
  } catch (error) {
    if (error?.response?.data?.notify)
      thunkAPI.dispatch(setErrorMessage(error?.response?.data?.notify ?? 'Somthing went wrong!'));
    return thunkAPI.rejectWithValue(error);
  }
});

export const forgetPassword = createAsyncThunk(
  'user/forget-password',
  async (args: any, thunkAPI) => {
    try {
      const response = await AuthService.forgetPassword({ email: args?.email });
      return response.data;
    } catch (error) {
      if (error?.response?.data?.notify)
        thunkAPI.dispatch(setErrorMessage(error?.response?.data?.notify ?? 'Somthing went wrong!'));
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
        thunkAPI.dispatch(setErrorMessage(error?.response?.data?.notify ?? 'Somthing went wrong!'));
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const verifyAccount = createAsyncThunk(
  'user/verify-account',
  async (args: any, thunkAPI) => {
    try {
      const response = await AuthService.verifyAccount({
        token: args.token,
      });
      return response.data;
    } catch (error) {
      if (error?.response?.data?.notify)
        thunkAPI.dispatch(setErrorMessage(error?.response?.data?.notify ?? 'Somthing went wrong!'));
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const checkEmail = createAsyncThunk('user/check-email', async (args: any, thunkAPI) => {
  try {
    const response = await AuthService.checkEmailExists(args.email);
    return response.data;
  } catch (error) {
    if (error?.response?.data?.notify)
      thunkAPI.dispatch(setErrorMessage(error?.response?.data?.notify ?? 'Somthing went wrong!'));
    return thunkAPI.rejectWithValue(error);
  }
});

export const logout = createAsyncThunk('user/logout', async (args: any, thunkAPI) => {
  try {
    const response = await AuthService.logout();
    if (response?.notify) thunkAPI.dispatch(setSuccessMessage(response?.notify ?? 'Success!'));
    deleteCookie('token');
    deleteCookie('user');
    return response?.data ?? null;
  } catch (error) {
    if (error?.response?.data?.notify)
      thunkAPI.dispatch(setErrorMessage(error?.response?.data?.notify ?? 'Somthing went wrong!'));
    return thunkAPI.rejectWithValue(error);
  }
});

export const inviteReferal = createAsyncThunk('invite/referal', async (args: any, thunkAPI) => {
  try {
    const response = await AuthService.inviteUserByEmailId(args);
    if (response?.notify) thunkAPI.dispatch(setSuccessMessage(response?.notify ?? 'Success!'));
    return response?.data ?? null;
  } catch (error) {
    if (error?.response?.data?.notify)
      thunkAPI.dispatch(setErrorMessage(error?.response?.data?.notify ?? 'Somthing went wrong!'));
    return thunkAPI.rejectWithValue(error);
  }
});

export const updateMyProfile = createAsyncThunk(
  'user/update-profile',
  async (args: any, thunkAPI) => {
    try {
      const data: any = await AuthService.updateProfile(args);
      if (data?.notify) thunkAPI.dispatch(setSuccessMessage(data?.notify ?? 'Success!'));
      return data?.data;
    } catch (error) {
      if (error?.response?.data?.notify)
        thunkAPI.dispatch(setErrorMessage(error?.response?.data?.notify ?? 'Somthing went wrong!'));
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateMyIceBreaker = createAsyncThunk(
  'user/update-icebreaker',
  async (args: any, thunkAPI) => {
    try {
      const data: any = await AuthService.updateIceBreaker(args);
      if (data?.notify) thunkAPI.dispatch(setSuccessMessage(data?.notify ?? 'Success!'));
      return data?.data;
    } catch (error) {
      if (error?.response?.data?.notify)
        thunkAPI.dispatch(setErrorMessage(error?.response?.data?.notify ?? 'Somthing went wrong!'));
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const uploadFileToUser = createAsyncThunk(
  'user/user-profile-image-update',
  async (args: any, thunkAPI) => {
    try {
      const data: any = await AuthService.uploadUserFile(args);
      if (data?.notify) thunkAPI.dispatch(setSuccessMessage(data?.notify ?? 'Success!'));
      return data?.data;
    } catch (error) {
      if (error?.response?.data?.notify)
        thunkAPI.dispatch(setErrorMessage(error?.response?.data?.notify ?? 'Somthing went wrong!'));
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const getInitialState = () => {
  return {
    isLoggedIn: getCookie('token') ? true : false,
    user: user,
  };
};
const initialState = getInitialState();
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state: any, action: any) => {
        state.isLoggedIn = false;
        state.user = action?.payload?.userdata ?? {};
      })
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
      .addCase(verifyAccount.fulfilled, (state: any, action: any) => {
        state.isLoggedIn = false;
        state.user = action.payload?.userdata ?? {};
      })
      .addCase(checkEmail.fulfilled, (state: any, action: any) => {
        state.isLoggedIn = false;
        state.user = action.payload?.userdata ?? {};
      })
      .addCase(logout.fulfilled, (state: any, action: any) => {
        state.isLoggedIn = false;
        state.user = action?.payload?.userdata ? action?.payload?.userdata : {};
      })
      .addCase(loginFacebook.fulfilled, (state: any, action: any) => {
        state.isLoggedIn = false;
        state.user = action?.payload?.userdata ? action?.payload?.userdata : {};
      })
      .addCase(loginFacebookCallback.fulfilled, (state: any, action: any) => {
        state.isLoggedIn = false;
        state.user = action?.payload?.userdata ? action?.payload?.userdata : {};
      })
      .addCase(inviteReferal.fulfilled, (state: any, action: any) => {
        state.user = action?.payload?.userdata ? action?.payload?.userdata : {};
      })
      .addCase(updateMyProfile.fulfilled, (state: any, action: any) => {
        state.user = action?.payload?.user ? action?.payload?.user : {};
      })
      .addCase(uploadFileToUser.fulfilled, (state: any, action: any) => {
        state.user = action?.payload?.user ? action?.payload?.user : {};
      })
      .addCase(updateMyIceBreaker.fulfilled, (state: any, action: any) => {
        state.user = action?.payload?.user ? action?.payload?.user : {};
      })
      .addCase(completeMyProfile.fulfilled, (state: any, action: any) => {
        state.user = action?.payload?.user ? action?.payload?.user : {};
      });
  },
});
const { reducer } = authSlice;
export default reducer;
