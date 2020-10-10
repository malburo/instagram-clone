import axiosClient from './axiosClient';

const accountApi = {
  editProfile: async payload => {
    const url = 'account/edit';
    const response = await axiosClient.post(url, payload);
    return response;
  },
  changePassword: async payload => {
    const url = 'account/password/change';
    const response = await axiosClient.post(url, payload);
    return response;
  },
};
export default accountApi;
