import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom"
import Header from "@/component/header"
import Home from "@/pages/home"
import Footer from "@/component/footer"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Loader from "./component/loader"
import Placeholder from "./pages/placeholder"

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Loader />
        </motion.div>
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <BrowserRouter>
            <AnimatedWrapper>
              <Header />
            </AnimatedWrapper>

            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<Placeholder title="About" />} />
              <Route path="/services" element={<Placeholder title="Services" />} />
              <Route path="/contact" element={<Placeholder title="Contact" />} />
              <Route path="/" element={<Navigate replace to="/home" />} />
            </Routes>

            <AnimatedWrapper>
              <Footer />
            </AnimatedWrapper>
          </BrowserRouter>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default App


const AnimatedWrapper = ({ children, delay = 0.3, duration = 0.5 }: { children: React.ReactNode, delay?: number, duration?: number }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay, duration }}
  >
    {children}
  </motion.div>
)


