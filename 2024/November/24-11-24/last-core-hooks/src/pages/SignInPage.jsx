import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [btnText, setBtnText] = useState("Submit");
  const [displayPassword, setDisplayPassword] = useState(false);

  const pswdRef = useRef();
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(pswdRef.current.value);
    setBtnText("Loading...");
    setTimeout(() => {
      alert("Succefully Signed in");
      setEmail("");
      pswdRef.current.value = "";
      setBtnText("Submit");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }, 3000);
  };

  return (
    <>
      <h1>Sign In FORM</h1>
      <form
        onSubmit={handleFormSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#A9A9A9",
          padding: "1.5rem",
          borderRadius: "10px",
        }}
      >
        {/* Email */}
        <label htmlFor="email">Email: </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
          id="email"
          name="email"
        />

        {/* Password */}
        <label htmlFor="password">Password: </label>
        <input
          ref={pswdRef}
          type={displayPassword ? "text" : "password"}
          id="password"
          name="password"
        />
        <label for="showPassword"> Show Password</label>
        <input
          type="checkbox"
          id="showPassword"
          name="showPassword"
          onClick={() => setDisplayPassword((currentState) => !currentState)}
        />
        <button type="submit">{btnText}</button>
      </form>
    </>
  );
};

export default SignInPage;
