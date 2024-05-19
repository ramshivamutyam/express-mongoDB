import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
function Home() {
  return (
    <div className="Home">
      <Link to="/login">
        <h2>Login</h2>
      </Link>
      <Link to="/signup">
        <h2>Signup</h2>
      </Link>
    </div>
  );
}

export default Home;
