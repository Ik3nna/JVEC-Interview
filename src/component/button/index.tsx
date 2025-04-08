import React from 'react'
import styles from "./index.module.css"
import { ButtonProps } from '../componentType'

const Button: React.FC<ButtonProps & React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  content,
  onClick,
  ...rest
}) => {
  return (
    <div
      className={`${styles.btn} ${className}`}
      onClick={onClick}
      {...rest} // <== forward motion props like `variants`, `transition`, etc.
    >
      {content}
    </div>
  )
}

export default Button
