import { useState } from "react";
import Button from "../../layouts/button/button";
import InputLayout from "../../layouts/inputs/InputLayout";
import WindowLayout from "../../layouts/window/WindowLayout";
import classes from "./sign_in.module.css";
import axios from "axios";

export default function Sign_in() {
  const [couple_user_name, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handelRegister = async () => {
    try {
      const response = await axios.post("http://localhost:5000/register", {
        couple_user_name,
        password,
      });
      alert(response.data.message);
    } catch (error) {
      alert("Registration failed: " + error);
    }
  };
  return (
    <WindowLayout>
      <div className={classes.sign_in_container}>
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
        <Button onClick={handelRegister}>create account</Button>
      </div>
    </WindowLayout>
  );
}
