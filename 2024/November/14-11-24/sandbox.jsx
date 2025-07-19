let content;
if (user.isLoggedIn) {
  content = <button>Continue</button>;
} else {
  content = <button>Log In</button>;
}
return content;
