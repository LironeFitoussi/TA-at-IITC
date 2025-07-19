import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submiting Form...");

    const userForm = {
        name: name,
        email: email,
        password: password
    }
    setTimeout(() => {
      alert("Form Successfully Submited!");
      console.log("Form: " + JSON.stringify(userForm));
      
    }, 3000);
  };

  const handleChange = (e) => {
    if (e.target.name === "username") {
      setName(e.target.value);
    }

    if (e.target.name === "email") {
      setEmail(e.target.value);
    }

    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

//   console.log(name);
//   console.log(email);
//   console.log(password);
  
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
      }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        required
        onChange={handleChange}
        value={name}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        onChange={handleChange}
        value={email}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        required
        onChange={handleChange}
        value={password}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
