import axiosClient from './axiosClient';

const userApi = {
  getMe: () => {
    const url = 'auth/me';
    return axiosClient.get(url);
  },
  login: currentUser => {
    const url = 'auth/login';
    return axiosClient.post(url, currentUser);
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
export default userApi;
