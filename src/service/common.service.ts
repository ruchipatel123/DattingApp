import axios from 'axios';
const API_URL = 'https://valadate.merlin.dev.project-progress.net/';

const getQuestion = () => {
  return axios.get(API_URL + 'profile-question-list').then((response) => {
    return response.data;
  });
};

const commonService = {
  getQuestion,
};

export default commonService;
