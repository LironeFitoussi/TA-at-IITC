document.addEventListener("DOMContentLoaded", async () => {
  const postsContainer = document.getElementById("posts-container");
  const errorMessage = document.getElementById("error-message");
  let currentUser = null;

  // Try to get current user if logged in
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const data = await api.getMe();
      currentUser = data.user;
    } catch (error) {
      console.error("Error fetching user:", error);
      localStorage.removeItem("token");
    }
  }

  // Update navigation based on auth status
  const navLinks = document.querySelector(".nav-links");
  if (currentUser) {
    navLinks.innerHTML = `
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
      <a href="/login.html">Login</a>
      <a href="/register.html">Register</a>
    `;
  }

  // Load posts
  async function loadPosts() {
    try {
      const data = await api.getAllPosts();
      const posts = data.posts;

      postsContainer.innerHTML = posts
        .map(
          (post) => `
                <div class="card post">
                    <h2 class="post-title">
                        <a href="/post-details.html?id=${post.id}">${
            post.title
          }</a>
                    </h2>
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
                </div>
            `
        )
        .join("");
    } catch (error) {
      errorMessage.textContent =
        error.response?.data?.message || "Error loading posts";
      errorMessage.classList.remove("hidden");
    }
  }

  // Delete post handler
  window.deletePost = async (postId) => {
    if (!confirm("Are you sure you want to delete this post?")) {
      return;
    }

    try {
      await api.deletePost(postId);
      await loadPosts(); // Reload posts after deletion
    } catch (error) {
      errorMessage.textContent =
        error.response?.data?.message || "Error deleting post";
      errorMessage.classList.remove("hidden");
    }
  };

  // Initial load
  await loadPosts();
});
