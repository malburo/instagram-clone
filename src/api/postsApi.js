import axiosClient from './axiosClient';

const postsApi = {
  get: async () => {
    const url = 'post';
    const response = await axiosClient.get(url);
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
    const { postId, comment } = payload;
    const url = `post/${postId}/comment`;
    const response = await axiosClient.post(url, { comment });
    return response;
  },
};
export default postsApi;
