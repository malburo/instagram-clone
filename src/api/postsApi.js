import axiosClient from './axiosClient';

const postsApi = {
  get: params => {
    const url = 'post';
    return axiosClient.get(url, { params });
  },
  createPost: payload => {
    const url = 'post/create';
    return axiosClient.post(url, payload);
  },
  reaction: payload => {
    const { postId, type } = payload;
    const url = `post/${postId}/reaction`;
    return axiosClient.post(url, { type });
  },
  comment: payload => {
    const { postId, content } = payload;
    const url = `post/${postId}/comment`;
    return axiosClient.post(url, { content });
  },
};
export default postsApi;
