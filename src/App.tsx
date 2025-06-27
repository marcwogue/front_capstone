import {  LogIn, Mail, User, UserPlus } from "lucide-react"
import Navbar from "./components/ui/navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./components/pages/home"
import PanierDetail from "./components/pages/card"
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<User />} />
        <Route path="/contact" element={<Mail />} />  
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<UserPlus />} />
        <Route path="/cart" element={<PanierDetail />} />
      </Routes>
    </div>
  )
}

export default App
