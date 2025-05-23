import { Facebook, Instagram, ChevronRight } from "lucide-react"
import { FaTiktok } from "react-icons/fa6"
import { Link } from "react-router-dom"
import Logo from '../assets/duodocs logowhite-01.png'

const Footer = () => {
  // Get current year for copyright
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-blue-600/90 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="mb-4">
              <img src={Logo} alt="DuoDocs Logo" className="w-auto h-42" />
            </div>
            <p className="mb-2 text-gray-200 leading-relaxed">
              Our comprehensive range of services includes the provision of fingerlings, fish feeds, fishing nets,
              predator nets, scoop nets, fish pond construction and maintenance, aquarium setup, fish farming
              consultation, fish hatching, and the supply of mature catfish and fillets.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Important Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "Team", path: "/team" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:text-teal-300 transition-colors flex items-center group">
                    <span className="mr-2 transform transition-transform group-hover:translate-x-1">
                      <ChevronRight size={16} />
                    </span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Get in Touch</h3>
            <p className="mb-2 text-gray-200">duodocsfishfarm@gmail.com</p>
            <p className="mb-2 text-gray-200">CBD Street: Utalii Building</p>
            <p className="mb-6 text-gray-200">Mon-Fri 9:00AM – 5:00PM</p>

            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61558367348022" target='_blank' rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/duodocsfishfarms?igsh=M213endmMnY3MmN0" target='_blank' rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@duodocs?_t=8mX5PAbTHK1&_r=1" target='_blank' rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <FaTiktok size={20}/>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-4 pt-4 text-center text-sm text-gray-200">
          <p>&copy; {currentYear} DuoDocs LTD. All Rights Reserved | Privacy Policy</p>
          <p className="mt-2">Developed by CariteQ</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
