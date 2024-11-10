import React from "react";
import classes from "./navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={classes.navbar}>
      <h1>
        <a className={classes.logo} href="/">Love-Li❤.</a>
      </h1>
      <div className={classes.links}>
        <Link to="/about" className={classes.aboutAndHelp}>About</Link>
        <Link to="/help" className={classes.aboutAndHelp}>Help</Link>
        <Link to="/login" className={classes.createButton}>Login</Link>
      </div>
    </nav>
  );
}
