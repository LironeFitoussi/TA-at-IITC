const API_BASE_URL = "/api";

const api = {
  // Auth endpoints
  register: async (username, password) => {
    const response = await axios.post(`${API_BASE_URL}/auth/sign-up`, {
      username,
      password,
    });
    return response.data;
  },

  login: async (username, password) => {
    const response = await axios.post(`${API_BASE_URL}/auth/sign-in`, {
      username,
      password,
    });
    return response.data;
  },

  getMe: async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_BASE_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },

  // Posts endpoints
  getAllPosts: async () => {
    const response = await axios.get(`${API_BASE_URL}/posts`);
    return response.data;
  },

  getPost: async (postId) => {
    const response = await axios.get(`${API_BASE_URL}/posts/${postId}`);
    return response.data;
  },

  createPost: async (title, content) => {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      `${API_BASE_URL}/posts`,
      {
        title,
        content,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },

  updatePost: async (postId, title, content) => {
    const token = localStorage.getItem("token");
    const response = await axios.put(
      `${API_BASE_URL}/posts/${postId}`,
      {
        title,
        content,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },

  deletePost: async (postId) => {
    const token = localStorage.getItem("token");
    const response = await axios.delete(`${API_BASE_URL}/posts/${postId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
};
