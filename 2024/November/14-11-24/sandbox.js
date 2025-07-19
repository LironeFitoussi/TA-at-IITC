let btn = document.querySelector('button');
if (user.isLoggedIn) {
	btn.textContent = 'Continue';
} else {
	btn.textContent = 'Log In';
}
document.body.append(btn);