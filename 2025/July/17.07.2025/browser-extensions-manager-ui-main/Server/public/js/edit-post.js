document.addEventListener("DOMContentLoaded", async () => {
  const form = document.getElementById("edit-post-form");
  const errorMessage = document.getElementById("error-message");
  const titleInput = document.getElementById("title");
  const contentInput = document.getElementById("content");

  // Get post ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("id");

  if (!postId) {
    window.location.href = "/post-feed.html";
    return;
  }

  // Load post data
  try {
    const data = await api.getPost(postId);
    const post = data.post;

    // Fill form with post data
    titleInput.value = post.title;
    contentInput.value = post.content;
  } catch (error) {
    errorMessage.textContent =
      error.response?.data?.message || "Error loading post";
    errorMessage.classList.remove("hidden");
    return;
  }

  // Handle form submission
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Hide any existing error message
    errorMessage.classList.add("hidden");

    try {
      await api.updatePost(postId, titleInput.value, contentInput.value);
      window.location.href = `/post-details.html?id=${postId}`;
    } catch (error) {
      errorMessage.textContent =
        error.response?.data?.message || "Error updating post";
      errorMessage.classList.remove("hidden");
    }
  });
});
