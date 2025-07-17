document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("add-post-form");
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Hide any existing error message
    errorMessage.classList.add("hidden");

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    try {
      await api.createPost(title, content);
      window.location.href = "/post-feed.html";
    } catch (error) {
      errorMessage.textContent =
        error.response?.data?.message || "Error creating post";
      errorMessage.classList.remove("hidden");
    }
  });
});
