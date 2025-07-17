document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Hide any existing error message
    errorMessage.classList.add("hidden");

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
      const data = await api.login(username, password);

      // Store the token
      localStorage.setItem("token", data.token);

      // Redirect to posts page
      window.location.href = "/post-feed.html";
    } catch (error) {
      errorMessage.textContent =
        error.response?.data?.message || "An error occurred during login";
      errorMessage.classList.remove("hidden");
    }
  });

  // Check if user is already logged in
  const token = localStorage.getItem("token");
  if (token) {
    window.location.href = "/post-feed.html";
  }
});
