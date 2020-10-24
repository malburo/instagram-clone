import axiosClient from './axiosClient';

const accountApi = {
  editProfile: payload => {
    const url = 'account/edit';
    return axiosClient.post(url, payload);
  },
  changePassword: payload => {
    const url = 'account/password/change';
    return axiosClient.post(url, payload);
  },
};
export default accountApi;
