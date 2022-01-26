import React from 'react';
import app from "../config/firebase";

const HomeNavbar = () => {
    // app.auth().signOut()
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <nav className="navbar">
      <ul className="bars">
        <li>
          <a className="linked" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="linked" href="/cart">
            Cart
          </a>
        </li>
        <li>
          <a className="linked" href="/menu">
            Menu
          </a>
        </li>
        <li>
          <a className="linked" href="#" onClick={() => app.auth().signOut().then(() => {
            localStorage.removeItem("user")
            localStorage.removeItem("liked")
            localStorage.removeItem("items")
            window.location.href = "/login"
          })}>
            {user ? 'Logout' : 'Login'}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HomeNavbar;
