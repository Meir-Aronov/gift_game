import classes from "./inputLayout.module.css"

type InputLayoutProps = {
    type: "text" | "number" | "checkbox"
    placeholder?: string;
} & React.InputHTMLAttributes<HTMLInputElement>

export default function InputLayout({type, placeholder}:InputLayoutProps) {
  return (
    <div className={classes.input_Layout_Container}>
      <input type={type} className={classes.input} placeholder={placeholder}/>
    </div>
  )
}
