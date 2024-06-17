import React from "react";
import classes from './navbar.module.css'

export default function Navbar() {
  return (
    <nav className={classes.navbar}>
      <h1>Love-Li❤.</h1>
      <div className={classes.links}>
        <a href="/">About</a>
        <a href="/">Help </a>
        <a href="/create" className={classes.link_a}>
          Login
        </a>
      </div>
    </nav>
  );
}
