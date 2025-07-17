document.addEventListener("DOMContentLoaded", async () => {
  const postContainer = document.getElementById("post-container");
  const errorMessage = document.getElementById("error-message");
  let currentUser = null;

  // Get post ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("id");

  if (!postId) {
    window.location.href = "/post-feed.html";
    return;
  }

  // Try to get current user if logged in
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const response = await api.getMe();
      currentUser = response.user;
    } catch (error) {
      console.error("Error fetching user:", error);
      localStorage.removeItem("token");
    }
  }

  // Update navigation based on auth status
  const navLinks = document.querySelector(".nav-links");
  if (currentUser) {
    navLinks.innerHTML = `
            <a href="/post-feed.html">Back to Posts</a>
            <a href="/add-post.html" class="btn btn-primary">Add Post</a>
            <a href="#" id="logout-btn">Logout</a>
        `;
    // Add logout handler
    document.getElementById("logout-btn").addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("token");
      window.location.reload();
    });
  } else {
    navLinks.innerHTML = `
            <a href="/post-feed.html">Back to Posts</a>
            <a href="/login.html">Login</a>
            <a href="/register.html">Register</a>
        `;
  }

  // Load post details
  try {
    const data = await api.getPost(postId);
    const post = data.post;

    postContainer.innerHTML = `
            <h2 class="post-title">${post.title}</h2>
            <p class="post-content">${post.content}</p>
            <div class="post-meta">
                ${
                  currentUser && post.authorId === currentUser.id
                    ? `
                    <a href="/edit-post.html?id=${post.id}" class="btn btn-primary">Edit</a>
                    <button onclick="deletePost('${post.id}')" class="btn btn-danger">Delete</button>
                `
                    : ""
                }
            </div>
        `;
  } catch (error) {
    errorMessage.textContent =
      error.response?.data?.message || "Error loading post";
    errorMessage.classList.remove("hidden");
  }

  // Delete post handler
  window.deletePost = async (postId) => {
    if (!confirm("Are you sure you want to delete this post?")) {
      return;
    }

    try {
      await api.deletePost(postId);
      window.location.href = "/post-feed.html";
    } catch (error) {
      errorMessage.textContent =
        error.response?.data?.message || "Error deleting post";
      errorMessage.classList.remove("hidden");
    }
  };
});
