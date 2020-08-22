import axiosClient from './axiosClient';

const authApi = {
  auth: () => {
    const url = `auth`;
    return axiosClient.get(url);
  },
  login: user => {
    const url = `auth/login`;
    return axiosClient.post(url, user);
  },
  register: user => {
    const url = 'auth/register';
    return axiosClient.post(url, user);
  },
  resetPassword: email => {
    const url = 'auth/reset';
    return axiosClient.post(url, email);
  },
  verifyMailResetPassword: token => {
    const url = `auth/reset/${token}`;
    return axiosClient.get(url);
  },
  newPassword: (token, newPassword) => {
    const url = `auth/reset/${token}`;
    return axiosClient.post(url, newPassword);
  },
};
export default authApi;
