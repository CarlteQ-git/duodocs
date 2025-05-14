import { useState, useEffect, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import {
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react"
import Navbar from './Navbar'
import Footer from './Footer'
import Logo from '../assets/duodocs-logo-png-01.png';
import FishBasket from '../assets/basket-fish.jpg';
import FishNet from '../assets/fish-net.webp';
import Project1 from '../assets/project1.jpg';
import Project2 from '../assets/project2.jpg';
import Project3 from '../assets/project3.jpg';
import Setup from '../assets/setup.jpg'

export default function HomePage() {
  // Refs for scroll animations
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: false, amount: 0.5 })

  const servicesRef = useRef(null)
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 })

  const aboutRef = useRef(null)
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 })

  const missionRef = useRef(null)
  const missionInView = useInView(missionRef, { once: true, amount: 0.3 })

  const projectsRef = useRef(null)
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.2 })

  const testimonialsRef = useRef(null)
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.2 })

  // Hero section carousel
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    FishBasket,
    Project1,
    Project2,
    Project3,
    Setup
  ]

  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Initial check
    checkMobile()
    
    // Add event listener
    window.addEventListener('resize', checkMobile)
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile)
  }, [])


  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [images.length])

  // Enhanced slide variants for mobile carousel
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      transition: { 
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      },
    }),
  }

  // Service items data
  const serviceItems = [
    {
      image: FishBasket,
      imageAlt: "Wholesale Fish",
      tagline: "Premium Quality",
      title: "Wholesale Fish Catfish/Tilapia",
      description: "Fresh, high-quality fish for commercial and personal use, sourced from our sustainable farms.",
      link: "#wholesale"
    },
    {
      image: "https://media.istockphoto.com/id/1058824986/photo/animals.jpg?b=1&s=612x612&w=0&k=20&c=RxyjGFYHcPLiy09h4wQ35hXNd7Y2TI0bi6oDLd1ac1Q=",
      imageAlt: "Ornamental Fish",
      tagline: "Exotic Varieties",
      title: "Ornamental/Aquarium Fish",
      description: "Beautiful aquarium fish for hobbyists and businesses, with expert advice on care and maintenance.",
      link: "#ornamental"
    },
    {
      image: "https://images.pexels.com/photos/17757924/pexels-photo-17757924/free-photo-of-a-freshly-caught-trout-in-a-fishing-net-lying-on-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600",
      imageAlt: "Fishing Nets",
      tagline: "Professional Equipment",
      title: "Fishing Nets & Supplies",
      description: "Quality equipment for fish farming and harvesting, designed for durability and optimal performance.",
      link: "#supplies"
    }
  ]

  // Steps for How We Work section
  const workSteps = [
    {
      number: 1,
      title: "Research & Development",
      description:
        "We continuously invest in research and development to improve our fish farming techniques and enhance the quality of our products. Our team of aquaculture experts collaborates with research institutions to stay updated on the latest advancements in the field.",
    },
    {
      number: 2,
      title: "Breeding & Hatchery Operations",
      description:
        "Our breeding and hatchery operations focus on producing high-quality fingerlings under controlled and hygienic conditions, ensuring strong and healthy stocks.",
    },
    {
      number: 3,
      title: "Nursery Rearing",
      description:
        "Newly hatched fry are transferred to nursery ponds equipped with optimal environmental conditions for growth and development, with close monitoring of water quality and nutrition.",
    },
    {
      number: 4,
      title: "Grow-out Operation",
      description:
        "Fish juveniles are transferred to grow-out ponds, where they undergo further growth until reaching market size, using sustainable stocking densities and natural biological processes to maintain water quality.",
    },
    {
      number: 5,
      title: "Harvesting & Processing",
      description:
        "Fish are harvested at the peak of their growth using humane and efficient methods. Our processing plant adheres to strict hygiene and safety standards.",
    },
    {
      number: 6,
      title: "Packaging & Distribution",
      description:
        "Processed fish products are packaged in hygienic, eco-friendly materials to maintain freshness and quality, with logistics partners ensuring timely delivery.",
    },
    {
      number: 7,
      title: "Quality Assurance",
      description:
        "Our quality assurance protocols include regular water testing, product traceability systems, and adherence to international food safety standards (GAP, HACCP).",
    },
    {
      number: 8,
      title: "Environmental Stewardship",
      description:
        "We minimize our environmental footprint through water recycling, effluent treatment, and habitat restoration, operating in harmony with local ecosystems.",
    },
    {
      number: 9,
      title: "Community Engagement",
      description:
        "We engage local communities through outreach programs and educational initiatives to promote sustainable aquaculture practices and empower stakeholders.",
    },
    {
      number: 10,
      title: "Continuous Improvement",
      description:
        "We actively seek feedback from customers, employees, and stakeholders to drive innovation and ensure we remain at the forefront of the aquaculture industry.",
    },
  ]

  // Testimonial data
  const testimonials = [
    {
      name: "Wanjiru N.",
      role: "Seafood Distributor",
      quote:
        "Duodocs has transformed our catfish supply chain. Their quality and reliability are unmatched. We consistently receive fresh fish, and their team is always responsive to our needs. Highly recommended!",
    },
    {
      name: "Otieno J.",
      role: "Homeowner",
      quote:
        "Duodocs did an amazing job on my pond! The team was professional and attentive, making the entire process smooth. I now have a beautiful, eco-friendly space to enjoy. I couldn't be happier!",
    },
    {
      name: "Achieng' M.",
      role: "Local Farmer",
      quote:
        "Working with Duodocs for our water supply has been fantastic. They deliver on time, and the quality is excellent. Their friendly team is always ready to help. Highly recommend!",
    },
  ]


  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.8
      }
    },
  }

  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  // Direction of slide animation
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    setDirection(1) // Always slide from right to left for auto transitions
  }, [currentImage])

  // Counter animation for stats
  const Counter = ({ value, label, delay = 0 }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (statsInView) {
        let start = 0
        const end = Number.parseInt(value.toString().replace(/\D/g, ""))
        const duration = 2000
        const increment = end / (duration / 16)

        setTimeout(() => {
          const timer = setInterval(() => {
            start += increment
            setCount(Math.floor(start))
            if (start >= end) {
              clearInterval(timer)
              setCount(end)
            }
          }, 16)

          return () => clearInterval(timer)
        }, delay)
      }
    }, [statsInView, value, delay])


    return (
      <div className="text-center">
        <motion.div
          className="text-5xl md:text-6xl font-bold text-blue-400 mb-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={statsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, delay: delay / 1000 }}
        >
          {value.toString().includes("+") ? (
            <>{count}+</>
          ) : value.toString().includes("Years") ? (
            <>{count} Years</>
          ) : (
            <>{count}</>
          )}
        </motion.div>
        <p className="text-lg text-gray-600">{label}</p>
      </div>
    )
  }

  
  // Handle navigation
  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => 
      prev === 0 ? serviceItems.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => 
      prev === serviceItems.length - 1 ? 0 : prev + 1
    )
  }

  // Handle touch events for swipe functionality
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      handleNext()
    }
    
    if (touchStart - touchEnd < -50) {
      // Swipe right
      handlePrev()
    }
  }

  // Quote icon SVG
  const QuoteIcon = () => (
    <div className="mb-6">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18.3333 13.3333H8.33333V23.3333H18.3333V13.3333Z"
          stroke="#0D9488"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M31.6667 13.3333H21.6667V23.3333H31.6667V13.3333Z"
          stroke="#0D9488"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.33333 23.3333C8.33333 25.5435 9.21131 27.6631 10.7741 29.2259C12.3369 30.7887 14.4565 31.6667 16.6667 31.6667"
          stroke="#0D9488"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.6667 23.3333C21.6667 25.5435 22.5446 27.6631 24.1074 29.2259C25.6702 30.7887 27.7899 31.6667 30 31.6667"
          stroke="#0D9488"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )

  return (
    <div className="min-h-screen bg-white text-gray-800 font-jost">
      <Navbar />
      {/* Hero Section with Sliding Images */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence initial={false} custom={direction} mode="sync">
            <motion.div
              key={currentImage}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
            >
              <img 
                src={images[currentImage]} 
                alt={`DuoDocs hero ${currentImage + 1}`} 
                className="absolute min-w-full min-h-full object-cover"
              />
              
              {/* Enhanced Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90"></div>
              
              {/* Additional wavy gradient for more visual interest */}
              <div className="absolute inset-0 opacity-60 bg-gradient-to-br from-blue-900/40 via-transparent to-teal-900/30"></div>
              
              {/* Light rays effect overlay */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Dots - Enhanced */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentImage ? 1 : -1)
                  setCurrentImage(index)
                }}
                className="group relative"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  currentImage === index 
                    ? "bg-white scale-125" 
                    : "bg-white/50 scale-100 group-hover:bg-white/80"
                }`} />
                
                {currentImage === index && (
                  <motion.div 
                    className="absolute -inset-1 rounded-full border border-white/30"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1.5, opacity: 1 }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              variants={itemVariants}
              className="mb-6"
            >
              <img
                src={Logo}
                alt="DuoDocs Logo"
                className="w-96 h-auto mx-auto drop-shadow-xl"
              />
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold mb-8 tracking-wider text-shadow"
            >
              NURTURING ECOSYSTEMS WHILE NOURISHING COMMUNITIES.
            </motion.h2>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <a
                href="#shop"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-teal-500 hover:to-teal-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:translate-y-1 group shadow-lg shadow-blue-900/20"
              >
                Visit Our Shop
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                >
                  <ChevronRight className="ml-2" />
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <a href="#about" className="flex flex-col items-center text-white/80 hover:text-white transition-colors">
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

      {/* About Section */}
      <section id="about" className="py-24 bg-white" ref={aboutRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-col lg:flex-row items-center gap-12"
            variants={fadeIn}
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
          >
            <motion.div className="lg:w-1/2" variants={fadeIn}>
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-6">
                Pioneering <span className="text-blue-400">Sustainable</span> Fish Farming
              </h2>
              <div className="w-20 h-1 bg-gradient-to-br from-blue-900 to-teal-500 mb-8"></div>
              <p className="text-lg mb-8 text-gray-700 leading-relaxed">
                DuoDocs LTD is a Kenyan-based company specializing in all aspects of aquaculture and fishery services.
                With a focus on providing high-quality products and expert consultation, we cater to both small-scale
                and commercial fish farming ventures across Kenya.
              </p>
              <a
                href="#learn-more"
                className="group inline-flex items-center text-blue-400 font-medium hover:text-teal-800 transition-colors"
              >
                Learn more
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                >
                  <ArrowRight size={18} />
                </motion.div>
              </a>
            </motion.div>
            <motion.div className="lg:w-1/2" variants={fadeIn} transition={{ delay: 0.2 }}>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                
                <img
                  src={FishBasket}
                  alt="Fish basket"
                  className="w-full h-120 object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <span className="text-white font-medium">Premium Quality Fish</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50" ref={missionRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            variants={fadeIn}
            initial="hidden"
            animate={missionInView ? "visible" : "hidden"}
          >
            <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-6">Our Mission & Vision</h2>
            <div className="w-24 h-1 bg-gradient-to-br from-blue-900 to-teal-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-10 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              variants={fadeIn}
              initial="hidden"
              animate={missionInView ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-300 to-teal-200 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-500"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-blue-400">Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To produce premium quality fish products through sustainable aquaculture practices, while contributing
                to food security and economic development in Kenya.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl shadow-xl p-10 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              variants={fadeIn}
              initial="hidden"
              animate={missionInView ? "visible" : "hidden"}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-300 to-teal-200 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-400"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16l4-4-4-4"></path>
                    <path d="M8 12h8"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-blue-400">Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To be the leading partner for all aquaculture needs in Kenya, driving innovation and sustainability in
                fish farming practices.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-16"
            variants={fadeIn}
            initial="hidden"
            animate={missionInView ? "visible" : "hidden"}
            transition={{ delay: 0.6 }}
          >
            <a
              href="#shop"
              className="inline-flex items-center bg-blue-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-medium transition-all hover:translate-y-1"
            >
              Visit Our Shop
              <ChevronRight className="ml-2" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-blue-600/85 text-white" ref={servicesRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            variants={fadeIn}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            <h2 className="text-xl md:text-3xl font-bold mb-6">OUR SERVICES</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </motion.div>

          {/* Desktop View - Grid Layout */}
          {!isMobile && (
            <motion.div
              className="hidden md:grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate={servicesInView ? "visible" : "hidden"}
            >
              {serviceItems.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group"
                  variants={itemVariant}
                >
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6">
                        <span className="text-white font-medium">{service.tagline}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-200 mb-6">{service.description}</p>
                    <a href={service.link} className="text-gray-200 font-medium hover:text-teal-100 flex items-center group">
                      View Details
                      <span className="ml-2 transform transition-transform group-hover:translate-x-2">
                        <ArrowUpRight size={18} />
                      </span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Mobile View - Carousel */}
          {isMobile && (
            <motion.div 
              className="relative md:hidden"
              initial="hidden"
              animate={servicesInView ? "visible" : "hidden"}
              variants={fadeIn}
            >
              <div 
                className="overflow-hidden touch-pan-y"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <AnimatePresence initial={false} custom={direction} mode="sync">
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg mx-auto max-w-sm"
                  >
                    <div className="h-64 overflow-hidden relative">
                      <img
                        src={serviceItems[currentIndex].image}
                        alt={serviceItems[currentIndex].imageAlt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <div className="p-6">
                          <span className="text-white font-medium">{serviceItems[currentIndex].tagline}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-bold text-white mb-4">{serviceItems[currentIndex].title}</h3>
                      <p className="text-gray-200 mb-6">{serviceItems[currentIndex].description}</p>
                      <a href={serviceItems[currentIndex].link} className="text-gray-200 font-medium hover:text-teal-100 flex items-center group">
                        View Details
                        <span className="ml-2 transform transition-transform group-hover:translate-x-2">
                          <ArrowUpRight size={18} />
                        </span>
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-6">
                <button 
                  onClick={handlePrev}
                  className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors duration-300"
                  aria-label="Previous service"
                >
                  <ChevronLeft size={24} />
                </button>
                
                {/* Indicator Dots */}
                <div className="flex items-center space-x-2">
                  {serviceItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setDirection(index > currentIndex ? 1 : -1)
                        setCurrentIndex(index)
                      }}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        currentIndex === index ? "bg-white scale-125" : "bg-white/50"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={handleNext}
                  className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors duration-300"
                  aria-label="Next service"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </motion.div>
          )}

          <motion.div
            className="text-center mt-16"
            variants={fadeIn}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            transition={{ delay: 0.6 }}
          >
            <a
              href="/services"
              className="inline-flex items-center border-2 border-white hover:bg-white hover:text-teal-900 text-white px-8 py-4 rounded-full font-medium transition-colors"
            >
              View all services
              <ChevronRight className="ml-2" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* How We Work Section */}
      <section id="how-we-work" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-6">How We Work</h2>
            <div className="w-24 h-1 bg-gradient-to-br from-blue-900 to-teal-900 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700">
              Our approach to fish farming is guided by a comprehensive understanding of aquaculture principles and best
              practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {workSteps.map((step, index) => (
              <motion.div
                key={step.number}
                className="flex"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="flex-shrink-0 mr-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-200 to-teal-100 flex items-center justify-center text-blue-400 text-2xl font-bold">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section id="projects" className="py-24 bg-gray-50" ref={projectsRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            variants={fadeIn}
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
          >
            <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-6">Our Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-br from-blue-900 to-teal-900 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 mb-8">
              At DuoDocs Fish Farm, we are proud to introduce our latest project: a sustainable aquaculture initiative
              aimed at revolutionizing the way fish farming is conducted in Kenya.
            </p>
          </motion.div>

          {/* Desktop View - Grid Layout */}
          {!isMobile && (
            <motion.div
              className="hidden md:grid md:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="hidden"
              animate={projectsInView ? "visible" : "hidden"}
            >
              {[Project1, Project2, Project3].map((item, index) => (
                <motion.div
                  key={item}
                  className="group relative overflow-hidden rounded-2xl shadow-lg"
                  variants={itemVariant}
                  transition={{ delay: index * 0.2 }}
                >
                  <img
                    src={`${item}`}
                    alt={`Project ${item}`}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                    <p className="text-gray-200 mb-4">Sustainable aquaculture initiative in Kenya</p>
                    <a href={`#project-${item}`} className="inline-flex items-center text-teal-300 font-medium">
                      View Project <ArrowRight className="ml-2" size={16} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Mobile View - Carousel */}
          {isMobile && (
            <motion.div 
              className="relative md:hidden"
              initial="hidden"
              animate={projectsInView ? "visible" : "hidden"}
              variants={fadeIn}
            >
              <div 
                className="overflow-hidden touch-pan-y"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <AnimatePresence initial={false} custom={direction} mode="sync">
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="group relative overflow-hidden rounded-2xl shadow-lg mx-auto max-w-sm"
                  >
                    <img
                      src={[Project1, Project2, Project3][currentIndex]}
                      alt={`Project ${currentIndex + 1}`}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                      <p className="text-gray-200 mb-4">Sustainable aquaculture initiative in Kenya</p>
                      <a href={`#project-${currentIndex + 1}`} className="inline-flex items-center text-teal-300 font-medium">
                        View Project <ArrowRight className="ml-2" size={16} />
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Controls */}
              <div className="flex justify-between mt-6">
                <button 
                  onClick={handlePrev}
                  className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors duration-300 shadow-md"
                  aria-label="Previous project"
                >
                  <ChevronLeft size={24} />
                </button>
                
                {/* Indicator Dots */}
                <div className="flex items-center space-x-2">
                  {[Project1, Project2, Project3].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setDirection(index > currentIndex ? 1 : -1)
                        setCurrentIndex(index)
                      }}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        currentIndex === index 
                          ? "bg-blue-500 scale-125" 
                          : "bg-gray-300"
                      }`}
                      aria-label={`Go to project ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={handleNext}
                  className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors duration-300 shadow-md"
                  aria-label="Next project"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white" ref={statsRef}>
        <div className="container mx-auto px-4 text-blue-400">
          <div className="flex flex-wrap justify-center text-center gap-16">
            <Counter value="18" label="projects completed" delay={0} />
            <Counter value="2Years" label="of experience" delay={200} />
            <Counter value="100+" label="Happy clients" delay={400} />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50" ref={testimonialsRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            variants={fadeIn}
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
          >
            <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-6">Testimonials</h2>
            <div className="w-24 h-1 bg-gradient-to-br from-blue-900 to-teal-900 mx-auto"></div>
          </motion.div>

          {/* Desktop View - Grid Layout */}
          {!isMobile && (
            <motion.div
              className="hidden md:grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate={testimonialsInView ? "visible" : "hidden"}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-xl transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                  variants={itemVariant}
                >
                  <QuoteIcon />
                  <p className="text-gray-700 mb-8 leading-relaxed">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-200/80 to-teal-200/80 flex items-center justify-center">
                        <span className="text-blue-400 font-bold">
                          {testimonial.name.split(" ")[0][0]}
                          {testimonial.name.split(" ")[1][0]}
                        </span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Mobile View - Carousel */}
          {isMobile && (
            <motion.div 
              className="relative md:hidden"
              initial="hidden"
              animate={testimonialsInView ? "visible" : "hidden"}
              variants={fadeIn}
            >
              <div 
                className="overflow-hidden touch-pan-y px-4"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <AnimatePresence initial={false} custom={direction} mode="sync">
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="bg-white p-8 rounded-2xl shadow-xl mx-auto max-w-sm"
                  >
                    <QuoteIcon />
                    <p className="text-gray-700 mb-8 leading-relaxed">{testimonials[currentIndex].quote}</p>
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-200/80 to-teal-200/80 flex items-center justify-center">
                          <span className="text-blue-400 font-bold">
                            {testimonials[currentIndex].name.split(" ")[0][0]}
                            {testimonials[currentIndex].name.split(" ")[1][0]}
                          </span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-gray-800">{testimonials[currentIndex].name}</h4>
                        <p className="text-sm text-gray-600">{testimonials[currentIndex].role}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Controls */}
              <div className="flex justify-between mt-8">
                <button 
                  onClick={handlePrev}
                  className="bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full p-3 transition-colors duration-300 shadow-md"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={24} />
                </button>
                
                {/* Indicator Dots */}
                <div className="flex items-center space-x-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setDirection(index > currentIndex ? 1 : -1)
                        setCurrentIndex(index)
                      }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentIndex === index 
                          ? "bg-gradient-to-r from-blue-500 to-teal-500 scale-125" 
                          : "bg-gray-300"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={handleNext}
                  className="bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full p-3 transition-colors duration-300 shadow-md"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  )
}
