import React, { useState } from "react";
import "./Login.css";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/user/login", {
        email,
        password,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }
  return (
    <>
      <div className="login">
        <div className="login_container">
          <h1>Login</h1>
          <form onSubmit={(e) => handleSubmit(e)} className="login_form">
            <label className="login_label">Enter email</label>
            <input
              onChange={handleChange}
              value={email}
              name="email"
              placeholder="abc@gmail.com"
              type="text"
              className="login_input"
            />
            <label className="login_label">Enter password</label>
            <input
              onChange={handleChange}
              value={password}
              name="password"
              placeholder="*********"
              type="password"
              className="login_input"
            />
            <button type="submit" className="login_button">
              Login
            </button>
          </form>
          <hr className="horizontal_line" />
          <button className="register_button">create your account</button>
        </div>
      </div>
    </>
  );
}

export default Login;
