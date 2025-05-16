import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingButton from './components/FloatingButton'
import Services from './pages/ServicePage'
import TeamPage from './pages/TeamPage'
import ContactPage from "./pages/ContactPage"
import ProductsPage from "./pages/ProductsPage"


function App() {

  return (
    <Router>
      <div className="font-jost">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
	        <Route path="/products" element={<ProductsPage />} />          
        </Routes>
        <FloatingButton />
      </div>
    </Router>
  )
}

export default App
