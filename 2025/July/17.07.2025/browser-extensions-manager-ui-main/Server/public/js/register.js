document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("register-form");
  const errorMessage = document.getElementById("error-message");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Hide any existing messages
    errorMessage.classList.add("hidden");
    successMessage.classList.add("hidden");

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
      await api.register(username, password);
      successMessage.textContent =
        "Registration successful! Redirecting to login...";
      successMessage.classList.remove("hidden");

      // Clear form
      form.reset();

      // Redirect to login page after 2 seconds
      window.location.href = "/login.html";
    } catch (error) {
      errorMessage.textContent =
        error.response?.data?.message ||
        "An error occurred during registration";
      errorMessage.classList.remove("hidden");
    }
  });
});
