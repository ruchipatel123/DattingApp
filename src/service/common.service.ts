import axios from 'axios';
const API_URL = 'http://localhost/valadate-laravel-backend/public/';

const getQuestion = () => {
  return axios.get(API_URL + 'profile-question-list').then((response) => {
    return response.data;
  });
};

const commonService = {
  getQuestion,
};

export default commonService;
