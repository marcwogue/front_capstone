import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/navbar";
import Footer from "./components/ui/footer";

// 🔹 Pages lazy-loaded
const Homee = lazy(() => import("./components/pages/Home"));
const Mome = lazy(() => import("./components/pages/homer"));
const PanierDetail = lazy(() => import("./components/pages/card"));
const ReservationForm = lazy(() => import("./components/pages/reservation"));
const ContactPage = lazy(() => import("./components/pages/contact"));

const App = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<div className="text-center p-10">Chargement...</div>}>
        <Routes>
          <Route path="/" element={<Homee />} />
          <Route path="/menu" element={<Mome />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/register" element={<ReservationForm />} />
          <Route path="/cart" element={<PanierDetail />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
