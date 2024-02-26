import axios from 'axios';

const API_URL = 'http://localhost/react-laravel-admin-api-new/public/admin/';

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
      //console.log(response?.data?.data, localStorage.getItem("user"));
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('user');
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
    .post(API_URL + 'reset-password-otp', {
      token,
      password,
    })
    .then((response) => {
      return response.data;
    });
};

const meData = (token) => {
  return axios
    .get(API_URL + 'me', {
      headers: { Authorization: 'Bearer ' + token },
    })
    .then((response) => {
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
