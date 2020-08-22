import axiosClient from './axiosClient';

const postsApi = {
  get: () => {
    const url = 'post';
    return axiosClient.get(url);
  },
  createPost: formData => {
    const url = 'post/create';
    return axiosClient.post(url, formData);
  },
  reaction: (postId, type) => {
    const url = `post/${postId}/reaction`;
    return axiosClient.post(url, { type });
  },
  comment: (postId, comment) => {
    const url = `post/${postId}/comment`;
    return axiosClient.post(url, { comment });
  },
};
export default postsApi;
