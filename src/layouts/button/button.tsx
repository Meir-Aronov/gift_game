import classes from "./button.module.css";

// type ButtonProps = {
//     children?: string;
// } & React.ComponentProps<"button">

export default function button({
  children,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button className={classes.button} {...props}>
      {children}
    </button>
  );
}
