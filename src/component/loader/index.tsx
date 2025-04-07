import React from "react"
import { motion } from "framer-motion"
import styles from "./index.module.css"

// assets
import logo from "@/assets/icons/logo.svg"

const Loader: React.FC = () => {
  return (
    <div className={styles.loadingContainer}>
      <motion.img
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
        src={logo} 
        alt="logo" 
      />
    </div>
  )
}

export default Loader
