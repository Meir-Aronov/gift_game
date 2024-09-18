import classes from "./inputLayout.module.css"

export default function InputLayout({...props}:React.ComponentProps<"input">) {
  return (
    <div className={classes.input_Layout_Container}>
      <input {...props} className={classes.input}/>
    </div>
  )
}
