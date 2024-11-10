import React, { useState } from "react";
import classes from "./login.module.css";
import WindowLayout from "../../layouts/window/WindowLayout";
import InputLayout from "../../layouts/inputs/InputLayout";
import Button from "../../layouts/button/button";
import axios from "axios";

export default function Login() {
  const [couple_user_name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        couple_user_name,
        password,
      });
      setToken(response.data.token);
      alert("Login successful");
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <WindowLayout>
      <div className={classes.loginContainer}>
        <InputLayout
          type="text"
          placeholder="User Name"
          value={couple_user_name}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputLayout
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Login</Button>
      </div>
    </WindowLayout>
  );
}
