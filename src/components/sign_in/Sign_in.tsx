import Button from "../../layouts/button/button";
import InputLayout from "../../layouts/inputs/InputLayout";
import WindowLayout from "../../layouts/window/WindowLayout";
import classes from "./sign_in.module.css";

export default function Sign_in() {
  const handelClick = () => {
    console.log("button clicked");
  }

  return (
    <WindowLayout>
      <div className={classes.sign_in_container}>
        <InputLayout type="text" placeholder="User Name" />
        <InputLayout type="password" placeholder="Password" />
        <Button onClick={handelClick}>create account</Button>
      </div>
    </WindowLayout>
  );
}
