import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, LinkedinIcon, MailIcon, PhoneIcon, ChevronDown, ChevronUp } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Kimani from "../assets/Kimani.png"
import George from "../assets/George.png"
import Edwin from "../assets/Edwin.png"
import Caleb from "../assets/caleb.png"

const TeamPage = () => {
  // Refs for scroll animations
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 })

  const teamRef = useRef(null)
  const teamInView = useInView(teamRef, { once: true, amount: 0.1 })

  const supportTeamRef = useRef(null)
  const supportTeamInView = useInView(supportTeamRef, { once: true, amount: 0.1 })

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  // Leadership team data
  const leadershipTeam = [
    {
      id: 1,
      name: "Dr. Joseph Kimani",
      role: "Founder & CEO",
      image: Kimani,
      quote: "We believe in fostering long-term partnerships with our clients, providing them with the resources and support they need to succeed. At DuoDocs LTD, we are not just a supplier, we are your trusted partner in aquaculture.",
      bio: "Dr. Kimani holds a Ph.D. in Aquaculture from the University of Nairobi and has over 15 years of experience in fish farming. His vision drives our company's commitment to sustainable aquaculture practices.",
    },
    {
      id: 3,
      name: "Dr. Mary Ndugu",
      role: "Managing Director",
      image: "https://beacon-of-strength-foundation.com/wp-content/uploads/2024/06/dr-mary-e1719692559315.webp",
      quote: "We dream, we act and deliver fine products as our goal.",
      bio: "With extensive experience in agricultural operations management, Dr. Ndugu ensures all aspects of our production meet the highest quality standards while maintaining operational efficiency."
    },
  ]

  // Support team data
  const supportTeam = [
    {
      id: 1,
      name: "Mr. George Otieno",
      role: "Managing Director",
      image: George,
    },
    {
      id: 2,
      name: "Mr. Edwin Agaro",
      role: "Sales Marketing",
      image: Edwin
    },
    {
      id: 3,
      name: "Mr. Caleb Okwach",
      role: "IT Consultant",
      image: Caleb
    },
  ]

  // Card hover state
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <div className="font-jost">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Using a reliable way to include the hero image */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://i.pinimg.com/736x/32/2e/84/322e842dceb4f7222eeac1da44034f48.jpg')" }}>
          </div>
                    
          {/* Gradient overlays - enhanced for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/70"></div>
          <div className="absolute inset-0 opacity-60 bg-gradient-to-b from-blue-900/50 via-transparent to-teal-900/40"></div>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
        </div>

        {/* Content container with improved positioning and styling */}
        <div
          ref={headerRef} 
          className="container relative z-10 mx-auto px-6 text-white"
        >
           <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={fadeIn}
            initial="hidden"
            animate="visible" // Force visibility regardless of headerInView
          >
            {/* Modernized heading with animated badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6 bg-gradient-to-r from-blue-600/90 to-teal-500/90 px-4 py-1 rounded-full"
            >
              <span className="text-sm font-medium tracking-wider uppercase">DuoDocs Aquaculture</span>
            </motion.div>

            {/* Main heading with modern styling */}
            <motion.h1 
              className="text-xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Meet The Team
            </motion.h1>

            {/* Modern separator with animation */}
            <motion.div 
              className="h-1 w-24 bg-blue-600/85 mx-auto mb-8 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.div>

            {/* Description text with improved styling */}
            <motion.p 
              className="text-lg md:text-xl text-blue-50 leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              At DuoDocs Fish Farm, our success is driven by the dedication, expertise, and passion of our talented team
              members. Each individual brings a unique set of skills and experiences to the table, contributing to our
              shared mission of producing premium quality fish products while promoting sustainability and innovation in
              aquaculture.
            </motion.p>

            {/* CTA button with modern design and hover effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10"
            >
              <a
                href="#team-members"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-teal-500 hover:to-teal-600 
                          text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:translate-y-1 
                          shadow-lg shadow-blue-900/20 group"
              >
                Meet Our Experts
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                >
                  <ArrowRight className="ml-2" size={18} />
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative floating elements for modern touch */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-teal-500/10 blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5]
            }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
          ></motion.div>
        </div>

        {/* Scroll indicator with animation */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <a href="#team-members" className="flex flex-col items-center text-white/80 hover:text-white transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
            >
              <ChevronDown size={24} />
            </motion.div>
          </a>
        </motion.div>
      </section>

      {/* Leadership Team Section */}
      <section id="team-members" className="py-20 bg-white" ref={teamRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            variants={fadeIn}
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-6">Leadership Team</h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700">
              Our leadership team brings decades of combined experience in aquaculture, business management, and
              sustainable farming practices.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 mx-auto md:grid-cols-3 gap-5 justify-center"
            variants={staggerContainer}
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
          >
            {leadershipTeam.map((member) => (
              <motion.div
                key={member.id}
                className="flex flex-col h-full"
                variants={itemVariant}
                onMouseEnter={() => setHoveredCard(member.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col">
                  <div className="relative">
                    {member.id === 1 || member.id === 3 ? (
                      <div className="relative h-[300px] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-teal-900/30"></div>
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full object-contain"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-r from-blue-900 to-teal-500 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-white text-center ${
                            hoveredCard === member.id ? "opacity-95" : "opacity-0"
                          }`}
                        >
                          <p className="text-lg leading-relaxed italic mb-4">"{member.quote}"</p>
                        </div>
                      </div>
                    ) : (
                      <div className="h-[400px] bg-gradient-to-r from-blue-900 to-teal-500 p-8 flex flex-col items-center justify-center text-white text-center">
                        <h3 className="text-2xl font-bold mb-6">{member.name}</h3>
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-40 h-34 rounded-full object-contain border-4 border-white/30"
                        />
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    {(member.id === 1 || member.id === 3) && (
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                    )}
                    
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Support Team Section */}
      <section className="py-20 bg-gray-50" ref={supportTeamRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            variants={fadeIn}
            initial="hidden"
            animate={supportTeamInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-6">Our Team</h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700">
              Behind every successful operation is a dedicated team of professionals committed to excellence. Meet the
              people who make our vision a reality.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={supportTeamInView ? "visible" : "hidden"}
          >
            {supportTeam.map((member) => (
              <motion.div
                key={member.id}
                className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
                variants={itemVariant}
              >
                <div className="flex flex-col sm:flex-row md:flex-col">
                  <div className="sm:w-1/3 md:w-full h-76 md:h-68 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/30 group-hover:opacity-0 transition-opacity duration-300"></div>
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 sm:w-2/3 md:w-full md:h-24 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                      <p className="text-blue-500 font-medium mb-4">{member.role}</p>
                    </div>
                    
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Our Team Section */}
      {/*<section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-900 to-teal-900 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-6 py-12 md:p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
              <p className="text-lg text-gray-100 max-w-2xl mx-auto mb-8">
                Are you passionate about sustainable aquaculture and innovative fish farming? We're always looking for
                talented individuals to join our growing team.
              </p>
              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <a
                  href="#careers"
                  className="inline-flex items-center bg-white text-teal-900 hover:bg-gray-100 px-8 py-4 rounded-full font-medium transition-colors"
                >
                  View Open Positions
                  <ArrowRight className="ml-2" size={18} />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>*/}

      <Footer />
    </div>
  )
}

export default TeamPage
