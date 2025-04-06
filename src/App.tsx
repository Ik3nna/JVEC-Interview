import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom"
import Header from "@/component/header"
import Home from "@/pages/home"
import Footer from "@/component/footer"

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
