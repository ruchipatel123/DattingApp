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

export const getIcebreakerQuestionList = createAsyncThunk(
  'get/icebreaker-question-list',
  async (args: any, thunkAPI) => {
    try {
      const response = await commonService.getIcebreakerQuestion();
      if (response.notify) thunkAPI.dispatch(setSuccessMessage(response.data.message));
      return response.data;
    } catch (error) {
      if (error?.response?.data?.notify)
        thunkAPI.dispatch(setErrorMessage(error?.response?.data?.notify ?? 'Somthing went wrong!'));
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const uploadFile = createAsyncThunk('post/uploadFile', async (args: any, thunkAPI) => {
  try {
    const response = await commonService.uploadFileToServer(args);
    if (response.notify) thunkAPI.dispatch(setSuccessMessage(response.data.message));
    return response.data;
  } catch (error) {
    if (error?.response?.data?.notify)
      thunkAPI.dispatch(setErrorMessage(error?.response?.data?.notify ?? 'Somthing went wrong!'));
    return thunkAPI.rejectWithValue(error);
  }
});

const commonSlice = createSlice({
  name: 'common',
  initialState: {
    questionList: [],
    iceBreakerQuestionList: [],
    lastFile: {},
    relationShipStatus: [
      { id: '1', value: 'Long-Term Relationship' },
      { id: '2', value: 'Short-Term Fun' },
      { id: '3', value: 'Just Browsing' },
      { id: '0', value: 'Not Sure Yet' },
    ],
    genderList: [
      { id: '1', value: 'Male' },
      { id: '2', value: 'Female' },
      { id: '3', value: 'Non-Binary' },
      { id: '0', value: 'Prefer Not To Say' },
    ],
    lookingFor: [
      { id: '1', value: 'Male' },
      { id: '2', value: 'Female' },
      { id: '3', value: 'Non-Binary' },
      { id: '0', value: 'Any' },
    ],
    hasChildren: [
      { id: '1', value: 'Yes' },
      { id: '0', value: 'No' },
    ],
    optionft: [
      { id: '1', value: '1 ft' },
      { id: '2', value: '2 ft' },
      { id: '3', value: '3 ft' },
      { id: '4', value: '4 ft' },
      { id: '5', value: '5 ft' },
      { id: '6', value: '6 ft' },
      { id: '7', value: '7 ft' },
      { id: '8', value: '8 ft' },
      { id: '9', value: '9 ft' },
    ],
    optionin: [
      { id: '0', value: '0 in' },
      { id: '1', value: '1 in' },
      { id: '2', value: '2 in' },
      { id: '3', value: '3 in' },
      { id: '4', value: '4 in' },
      { id: '5', value: '5 in' },
      { id: '6', value: '6 in' },
      { id: '7', value: '7 in' },
      { id: '8', value: '8 in' },
      { id: '9', value: '9 in' },
      { id: '10', value: '10 in' },
      { id: '11', value: '11 in' },
      { id: '12', value: '12 in' },
    ],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuestionList.fulfilled, (state: any, action: any) => {
        state.questionList = action?.data?.profileQuestions || [];
      })
      .addCase(getIcebreakerQuestionList.fulfilled, (state: any, action: any) => {
        state.iceBreakerQuestionList = action?.data?.icebreakerQuestions || [];
      })
      .addCase(uploadFile.fulfilled, (state: any, action: any) => {
        state.lastFile = action.data;
      });
  },
});

const { reducer } = commonSlice;
export default reducer;
