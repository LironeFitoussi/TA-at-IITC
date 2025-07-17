// Check if user is logged in
const token = localStorage.getItem("token");

// Get current page
const currentPage = window.location.pathname;
const protectedRoutes = ["/add-post.html", "/edit-post.html"];

// Only redirect if on a protected route
if (!token && protectedRoutes.some((route) => currentPage.includes(route))) {
  window.location.href = "/login.html";
}

// Handle logout if logout button exists
document.getElementById("logout-btn")?.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("token");
  window.location.href = "/login.html";
});
