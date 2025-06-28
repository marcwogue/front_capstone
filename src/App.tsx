import Navbar from "./components/ui/navbar"
import { Routes, Route } from "react-router-dom"
import Mome from "./components/pages/homer"
import PanierDetail from "./components/pages/card"
import Footer from "./components/ui/footer"
import Homee from "./components/pages/Home"
import ReservationForm from "./components/pages/reservation"
import ContactPage from "./components/pages/contact"
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Homee/>} />
        <Route path="/menu" element={<Mome />} />
        <Route path="/contact" element={<ContactPage/>} /> 
        <Route path="/register" element={<ReservationForm />} />
        <Route path="/cart" element={<PanierDetail />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
