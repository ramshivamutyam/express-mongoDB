import React from "react";
import { useState } from "react";
function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  function handleChange(event) {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "re-password") {
      setRePassword(value);
    }
  }
  return (
    <div className="signup">
      <div className="signup_container">
        <h1>Create account</h1>
        <form action="" className="signup_form">
          <label className="signup_label">Your name</label>
          <input
            name="name"
            onChange={handleChange}
            value={name}
            placeholder="Ex. John Smith"
            type="text"
            className="signup_input"
          />
          <label className="signup_label">Email</label>
          <input
            name="email"
            onChange={handleChange}
            value={email}
            placeholder="abc@gmail.com"
            type="text"
            className="signup_input"
          />
          <label className="signup_label">Password</label>
          <input
            name="password"
            onChange={handleChange}
            value={password}
            placeholder="*********"
            type="password"
            className="login_input"
          />
          <label className="signup_label">Re-enter password</label>
          <input
            name="re-password"
            onChange={handleChange}
            value={repassword}
            placeholder="*********"
            type="password"
            className="signup_input"
          />
          <button className="signup_button">create</button>
        </form>
        <hr className="horizontal_line" />
        <button>login here</button>
      </div>
    </div>
  );
}

export default Signup;
