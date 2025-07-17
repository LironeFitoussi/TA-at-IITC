// import axios from "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";

const axiosInstance = axios.create({
  baseURL: "/api",
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

const api = {
  // Auth endpoints
  register: async (username, password) => {
    const response = await axiosInstance.post(`/auth/sign-up`, {
      username,
      password,
    });
    return response.data;
  },

  login: async (username, password) => {
    const response = await axiosInstance.post(`/auth/sign-in`, {
      username,
      password,
    });
    return response.data;
  },

  getMe: async () => {
    const response = await axiosInstance.get(`/auth/me`);
    return response.data;
  },

  // Posts endpoints
  getAllPosts: async () => {
    const response = await axiosInstance.get(`/posts`);
    return response.data;
  },

  getPost: async (postId) => {
    const response = await axiosInstance.get(`/posts/${postId}`);
    return response.data;
  },

  createPost: async (title, content) => {
    const response = await axiosInstance.post(`/posts`, {
      title,
      content,
    });
    return response.data;
  },

  updatePost: async (postId, title, content) => {
    const response = await axiosInstance.put(`/posts/${postId}`, {
      title,
      content,
    });
    return response.data;
  },

  deletePost: async (postId) => {
    const token = localStorage.getItem("token");
    const response = await axiosInstance.delete(`/posts/${postId}`);
    return response.data;
  },
};
