import React from 'react'
import styles from "./index.module.css"
import { ContainerProps } from '../componentType'

const Container: React.FC<ContainerProps> = ({ children, width, className }) => {
  return (
    <section 
      className={`
        ${styles.container}
        ${width === "small" ? 
          styles.small : 
          width === "medium" ? 
          styles.medium : 
          styles.large
        }
        ${className}
      `}
    >
      {children}
    </section>
  )
}

export default Container