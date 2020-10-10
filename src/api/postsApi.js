import axiosClient from './axiosClient';

const postsApi = {
  get: async params => {
    const url = 'post';
    const response = await axiosClient.get(url, { params });
    return response;
  },
  createPost: async payload => {
    const url = 'post/create';
    const response = await axiosClient.post(url, payload);
    return response;
  },
  reaction: async payload => {
    const { postId, type } = payload;
    const url = `post/${postId}/reaction`;
    const response = await axiosClient.post(url, { type });
    return response;
  },
  comment: async payload => {
    const { postId, content } = payload;
    const url = `post/${postId}/comment`;
    const response = await axiosClient.post(url, { content });
    return response;
  },
};
export default postsApi;
