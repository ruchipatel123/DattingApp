import axios from 'axios';
import { deleteCookie } from 'cookies-next';
import moment from 'moment';
const API_URL = 'http://localhost/valadate-laravel-backend/public/';

const register = async (args) => {
  const objectKeys = Object.keys(args);
  const object = {};
  objectKeys.forEach((value) => {
    if (value.includes('question_')) {
      const keyval = value.split('__');
      if (keyval[1]?.includes('is_deal_breaker')) {
        object['question[' + keyval[1].split('_is_deal_breaker')[0] + '][is_deal_breaker]'] =
          args[value];
      } else {
        object['question[' + keyval[1] + ']'] = args[value];
      }
    } else if (value == 'dob') {
      object[value] = moment(args[value]).format('YYYY-MM-DD');
    } else {
      object[value] = args[value];
    }
  });
  return axios.post(API_URL + 'register', object).then((response) => {
    return response.data;
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
        localStorage.setItem('user', JSON.stringify(response?.data?.data?.user));
      }
      return response.data;
    });
};

const logout = () => {
  return axios
    .post(API_URL + 'logout', {})
    .then((response) => {
      localStorage.removeItem('user');
      return response.data;
    })
    .catch(() => {
      localStorage.removeItem('user');
      deleteCookie('token');
      //      return e;
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
const verifyAccount = ({ token }) => {
  return axios
    .post(API_URL + 'verify-account', {
      token,
    })
    .then((response) => {
      return response.data;
    });
};

const checkEmailExists = (email) => {
  return axios
    .post(API_URL + 'check-unique-email', {
      email: email,
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

const loginWithFacebook = () => {
  return axios.post(API_URL + 'login-facebook').then((response) => {
    return response.data;
  });
};

const loginWithFacebookCallaback = (code) => {
  return axios
    .post(API_URL + 'login-facebook-callback', { access_token: code })
    .then((response) => {
      return response.data;
    });
};

const inviteUserByEmailId = (args) => {
  return axios.post(API_URL + 'invite-referal', args).then((response) => {
    return response.data;
  });
};

const updateProfile = async (args) => {
  const objectKeys = Object.keys(args);
  const object = {};
  objectKeys.forEach((value) => {
    if (value.includes('question_')) {
      const keyval = value.split('__');
      if (keyval[1]?.includes('is_deal_breaker')) {
        object['question[' + keyval[1].split('_is_deal_breaker')[0] + '][is_deal_breaker]'] =
          args[value];
      } else {
        object['question[' + keyval[1] + ']'] = args[value];
      }
    } else if (value == 'dob') {
      object[value] = moment(args[value]).format('YYYY-MM-DD');
    } else {
      object[value] = args[value];
    }
  });
  return axios.post(API_URL + 'me', object).then((response: any) => {
    return response.data;
  });
};

const completeMySocialProfile = async (args) => {
  const objectKeys = Object.keys(args);
  const object = {};
  objectKeys.forEach((value) => {
    if (value.includes('question_')) {
      const keyval = value.split('__');
      if (keyval[1]?.includes('is_deal_breaker')) {
        object['question[' + keyval[1].split('_is_deal_breaker')[0] + '][is_deal_breaker]'] =
          args[value];
      } else {
        object['question[' + keyval[1] + ']'] = args[value];
      }
    } else if (value == 'dob') {
      object[value] = moment(args[value]).format('YYYY-MM-DD');
    } else {
      object[value] = args[value];
    }
  });
  return axios.post(API_URL + 'complete-social-profile', object).then((response: any) => {
    return response.data;
  });
};

const updateIceBreaker = async (args) => {
  return axios.post(API_URL + 'my-ice-breaker', args).then((response: any) => {
    return response.data;
  });
};

const uploadUserFile = async (args) => {
  return axios.post(API_URL + 'user-profile-image-update', args).then((response: any) => {
    return response.data;
  });
};
const authService = {
  register,
  login,
  logout,
  forgetPassword,
  resetPasswordWithOtp,
  verifyAccount,
  checkEmailExists,
  meData,
  loginWithFacebook,
  loginWithFacebookCallaback,
  inviteUserByEmailId,
  updateProfile,
  updateIceBreaker,
  uploadUserFile,
  completeMySocialProfile,
};

export default authService;
