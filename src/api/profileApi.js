import axiosClient from './axiosClient';

const profileApi = {
  getProfile: async payload => {
    const { username } = payload;
    const url = `profile/${username}`;
    const response = await axiosClient.get(url);
    return response;
  },
  changeAvatar: async payload => {
    const { username, formData } = payload;
    const url = `profile/${username}/change-avatar`;
    const response = await axiosClient.post(url, formData);
    return response;
  },
};
export default profileApi;
