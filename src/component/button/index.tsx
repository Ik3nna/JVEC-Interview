import React from 'react'
import styles from "./index.module.css"
import { ButtonProps } from '../componentType'

const Button: React.FC<ButtonProps & React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  onClick,
  ...rest
}) => {
  return (
    <div
      className={`${styles.btn} ${className}`}
      onClick={onClick}
      {...rest} // <== forward motion props like `variants`, `transition`, etc.
    >
      {children}
    </div>
  )
}

export default Button
