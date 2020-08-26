import axiosClient from './axiosClient';

const userApi = {
  getMe: async () => {
    const url = 'auth/me';
    const response = await axiosClient.get(url);
    return response.data;
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
