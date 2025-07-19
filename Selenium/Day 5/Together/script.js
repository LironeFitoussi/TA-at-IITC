document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const message = document.getElementById('message');
  
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent form from refreshing the page
  
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();
      const selection = document.getElementById('selection').value;
  
      // Basic credential check (hard-coded for demo purposes)
      if (username === "testuser" && password === "password") {
        message.style.color = "green";
        message.textContent = `Login successful! You chose: ${selection}.`;
      } else {
        message.style.color = "red";
        message.textContent = "Invalid credentials. Please try again.";
      }
    });
  });
  