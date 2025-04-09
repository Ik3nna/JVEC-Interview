import styles from "./index.module.css"
import { Link } from 'react-router-dom'

const Placeholder = ({ title }: { title: string}) => {
  return (
    <main className={styles.container}>
        <h1>{title} Page</h1>
        <img src="/animation.gif" alt="animation" />
        <p>This page is currently under construction.</p>
        <Link to="/home" className={styles.homeBtn}>Go Back Home</Link>
    </main>
  )
}

export default Placeholder