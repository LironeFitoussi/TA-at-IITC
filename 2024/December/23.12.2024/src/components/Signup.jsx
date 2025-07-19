import { useRef } from "react";

const Signup = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    // e.preventDefault();

    const userForm = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    setTimeout(() => {
      alert("Form Successfully Submited!");
      console.log("Form: " + JSON.stringify(userForm));
    }, 3000);
  };
  
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
      }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" required ref={nameRef} />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required ref={emailRef} />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        required
        ref={passwordRef}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
