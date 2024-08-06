import InputLayout from "../../layouts/inputs/InputLayout";
import WindowLayout from "../../layouts/window/WindowLayout";
import classes from "./sign_in.module.css";

export default function Sign_in() {
  return (
    <WindowLayout>
      <div className={classes.sign_in_container}>
        <InputLayout type="text" placeholder="User Name" />
        <InputLayout type="text" placeholder="Password" />
      </div>
    </WindowLayout>
  );
}
