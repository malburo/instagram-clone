import axiosClient from './axiosClient';

const postsApi = {
  get: () => {
    const url = 'posts';
    return axiosClient.get(url);
  },
  createPost: formData => {
    const url = 'posts/create';
    return axiosClient.post(url, formData);
  },
  like: postId => {
    const url = 'likes/like';
    return axiosClient.post(url, { postId });
  },
  unlike: postId => {
    const url = 'likes/unlike';
    return axiosClient.post(url, { postId });
  },
  comment: (postId, comment) => {
    const url = 'comments/create';
    return axiosClient.post(url, { postId, comment });
  },
};
export default postsApi;
