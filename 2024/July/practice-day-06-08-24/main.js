// console.log('main.js');

const userForm = document.querySelector("form");
// console.log(userForm);

userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(e);
    // console.log("Form submitted");
    const formData = new FormData(userForm);
    // console.log(formData.get("username"));
    // console.log(formData.get("password"));

    const object = Object.fromEntries(formData.entries());
    console.log(object);
});
