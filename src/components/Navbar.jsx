import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Logo from '../assets/duodocs-logo-png-01.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || location.pathname !== "/"
          ? "bg-white/95 text-gray-800 shadow-md backdrop-blur-sm"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto px-2 py-0 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold tracking-wider relative z-10">
            <img
              src={Logo}
              alt="DuoDocs Logo"
              className="w-auto h-18 transition-all duration-300"
            />
          </Link>
          <h1 className="hidden lg:block text-xl md:text-xl font-bold tracking-tight mb-2">
                DUODOCS <span className="text-blue-300">LTD</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Team", path: "/team" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`${
                scrolled || location.pathname !== "/"
                  ? "text-gray-800 hover:text-blue-300"
                  : "text-white hover:text-blue-200"
              } transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-400 after:transition-all hover:after:w-full ${
                location.pathname === item.path ? "after:w-full text-blue-300" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/shop"
            className={`${
              scrolled || location.pathname !== "/"
                ? "bg-blue-600/85 hover:bg-teal-700 text-white"
                : "bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
            } px-5 py-2 rounded-full font-medium transition-colors`}
          >
            Shop
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? (
            <X size={24} className={scrolled || location.pathname !== "/" ? "text-gray-800" : "text-white"} />
          ) : (
            <Menu size={24} className={scrolled || location.pathname !== "/" ? "text-gray-800" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden bg-white text-gray-800 px-4 py-6 absolute w-full shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "Team", path: "/team" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-gray-800 hover:text-blue-300 py-2 transition-colors font-medium border-b border-gray-100 ${
                    location.pathname === item.path ? "text-blue-300" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/shop"
                className="bg-blue-600 hover:bg-teal-700 text-white px-4 py-3 rounded-full font-medium transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
