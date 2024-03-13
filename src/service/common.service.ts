import axios from 'axios';
const API_URL = 'https://valadate.merlin.dev.project-progress.net/';

const getQuestion = () => {
  return axios.get(API_URL + 'profile-question-list').then((response) => {
    return response.data;
  });
};
const getIcebreakerQuestion = () => {
  return axios.get(API_URL + 'icebreaker-question-list').then((response) => {
    return response.data;
  });
};

const uploadFileToServer = (args) => {
  const formData = new FormData();
  formData.append('image', args);
  return axios.post(API_URL + 'file-upload', formData).then((response) => {
    return response.data;
  });
};

const commonService = {
  getQuestion,
  getIcebreakerQuestion,
  uploadFileToServer,
};

export default commonService;
