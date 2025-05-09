import { Facebook, Twitter, Youtube, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import Logo from '../assets/duodocs-logo-png-01.png'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-teal-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="mb-6">
              {/* Replace with your actual logo */}
              <img src={Logo} alt="DuoDocs Logo" className="w-auto h-32" />
            </div>
            <p className="mb-6 text-gray-300 leading-relaxed">
              Our comprehensive range of services includes the provision of fingerlings, fish feeds, fishing nets,
              predator nets, scoop nets, fish pond construction and maintenance, aquarium setup, fish farming
              consultation, fish hatching, and the supply of mature catfish and fillets.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Important Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "Team", path: "/team" },
                { name: "Products", path: "/products" },
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
            <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
            <p className="mb-2 text-gray-300">duodocsfishfarm@gmail.com</p>
            <p className="mb-2 text-gray-300">CBD Street: Utalii Building</p>
            <p className="mb-6 text-gray-300">Mon-Fri 9:00AM – 5:00PM</p>

            <div className="flex space-x-4">
              <a
                href="#facebook"
                className="bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#twitter"
                className="bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#youtube"
                className="bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-sm text-gray-300">
          <p>Copyright © 2024 DuoDocs LTD. All Rights Reserved | Privacy Policy</p>
          <p className="mt-2">Developed by CariteQ</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
