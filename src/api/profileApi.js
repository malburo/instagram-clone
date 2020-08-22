import axiosClient from './axiosClient';

const profileApi = {
  getProfile: username => {
    const url = `profile/${username}`;
    return axiosClient.get(url);
  },
  changeAvatar: (username, formData) => {
    const url = `profile/${username}/change-avatar`;
    return axiosClient.post(url, formData);
  },
};
export default profileApi;
