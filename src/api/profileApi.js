import axiosClient from './axiosClient';

const profileApi = {
  getPosts: username => {
    const url = `profile/${username}/posts`;
    return axiosClient.get(url);
  },
  changeAvatar: formData => {
    const url = 'profile/avatar';
    return axiosClient.post(url, formData);
  },
};
export default profileApi;
