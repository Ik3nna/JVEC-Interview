import React from 'react'
import styles from "./index.module.css"
import { ButtonProps } from '../componentType'

const Button: React.FC<ButtonProps> = ({ className, content, onClick }) => {
  return (
    <div className={`${styles.btn} ${className}`} onClick={onClick}>
        {content}
    </div>
  )
}

export default Button