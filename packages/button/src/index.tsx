import React from "react"
import s from "./style.module.css"

type IProps = React.HTMLProps<HTMLButtonElement>

const Button: React.FC<IProps> = (props) => {
  return (
    <button
      {...(props as any)}
      className={[s.button, props.className].filter(Boolean).join(" ")}
    />
  )
}

export default Button
