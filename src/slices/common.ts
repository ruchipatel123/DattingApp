import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import commonService from 'service/common.service';
import { setErrorMessage, setSuccessMessage } from './message';

export const getQuestionList = createAsyncThunk(
  'get/question-list',
  async (args: any, thunkAPI) => {
    try {
      const response = await commonService.getQuestion();
      if (response.notify) thunkAPI.dispatch(setSuccessMessage(response.data.message));
      return response.data;
    } catch (error) {
      if (error?.response?.data?.notify)
        thunkAPI.dispatch(setErrorMessage(error?.response?.data?.notify ?? 'Somthing went wrong!'));
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const commonSlice = createSlice({
  name: 'common',
  initialState: {
    questionList: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getQuestionList.fulfilled, (state: any, action: any) => {
      state.questionList = action.data;
    });
  },
});

const { reducer } = commonSlice;
export default reducer;
