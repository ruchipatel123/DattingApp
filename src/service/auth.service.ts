import axios from 'axios';
const API_URL = 'https://valadate.merlin.dev.project-progress.net/';
const register = (username, email, password) => {
  return axios.post(API_URL + 'register', {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + 'login', {
      username: username,
      password,
    })
    .then((response) => {
      if (response?.data?.data?.accessToken) {
        localStorage.setItem('user', JSON.stringify(response?.data?.data));
      }
      return response.data;
    });
};

const logout = () => {
  return axios.post(API_URL + 'logout', {}).then((response) => {
    localStorage.removeItem('user');
    return response.data;
  });
};

const forgetPassword = ({ email }) => {
  return axios
    .post(API_URL + 'forget-password', {
      email,
    })
    .then((response) => {
      return response.data;
    });
};

const resetPasswordWithOtp = ({ token, password }) => {
  return axios
    .post(API_URL + token + '/reset-password', {
      token,
      password,
      password_confirmation: password,
    })
    .then((response) => {
      return response.data;
    });
};

const meData = () => {
  return axios.get(API_URL + 'me').then((response) => {
    return response.data;
  });
};

const authService = {
  register,
  login,
  logout,
  forgetPassword,
  resetPasswordWithOtp,
  meData,
};

export default authService;
