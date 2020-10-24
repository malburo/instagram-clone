import axiosClient from './axiosClient';

const profileApi = {
  getProfile: payload => {
    const { username } = payload;
    const url = `profile/${username}`;
    return axiosClient.get(url);
  },
  changeAvatar: payload => {
    const { username, formData } = payload;
    const url = `profile/${username}/change-avatar`;
    return axiosClient.post(url, formData);
  },
};
export default profileApi;
