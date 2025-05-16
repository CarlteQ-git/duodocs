import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Pond from '../assets/pond-setup.jpg'
import Setup from '../assets/setup.jpg'

const Services = () => {
  const [activeQuestion, setActiveQuestion] = useState(null)
  
  // Refs for scroll animations
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 })
  const fingerlingRef = useRef(null)
  const fingerlingInView = useInView(fingerlingRef, { once: true, amount: 0.3 })
  const fishNetsRef = useRef(null)
  const fishNetsInView = useInView(fishNetsRef, { once: true, amount: 0.3 })
  const pondConstructionRef = useRef(null)
  const pondConstructionInView = useInView(pondConstructionRef, { once: true, amount: 0.3 })
  const waterSupplyRef = useRef(null)
  const waterSupplyInView = useInView(waterSupplyRef, { once: true, amount: 0.3 })
  const aquariumRef = useRef(null)
  const aquariumInView = useInView(aquariumRef, { once: true, amount: 0.3 })
  const faqRef = useRef(null)
  const faqInView = useInView(faqRef, { once: true, amount: 0.3 })
  
  // Force animation for header when component mounts
  useEffect(() => {
    // This ensures the header animations run on initial load
    const timer = setTimeout(() => {
      // Force rerender to trigger animations if needed
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }
  const fadeInRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }
  const fadeInLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
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
  
  // FAQ data
  const faqData = [
    {
      question: "What Services Does Duodocs Offer?",
      answer:
        "DuoDocs offers a comprehensive range of aquaculture services including fingerlings supply, fish feeds, fishing nets, pond construction and maintenance, aquarium setup, fish farming consultation, fish hatching, and the supply of mature catfish and fillets.",
    },
    {
      question: "Do You Offer Customized Pond Construction Services?",
      answer:
        "Yes, we provide fully customized pond construction services tailored to your specific needs, land characteristics, and farming goals. Our expert team handles everything from site assessment to final construction.",
    },
    {
      question: "Can You Help Design And Build A Custom Aquarium?",
      answer:
        "We specialize in designing and building custom aquariums for homes, offices, and commercial spaces. Our team will work with you to create a beautiful, functional aquatic environment that meets your aesthetic preferences and maintenance capabilities.",
    },
    {
      question: "What Kind Of Consultation Services Do You Offer?",
      answer:
        "We offer consultation services covering all aspects of fish farming, including site selection, species selection, pond design, water quality management, feeding regimes, disease prevention, and business planning for commercial ventures.",
    },
    {
      question: "Do You Offer Training For New Fish Farmers?",
      answer:
        "Yes, we provide comprehensive training programs for new fish farmers. These programs cover theoretical knowledge and practical skills needed to successfully establish and manage fish farming operations.",
    },
    {
      question: "How Do I Get A Quote For Your Services?",
      answer:
        "You can request a quote by contacting us through our website, email, or phone. For more accurate quotes, we recommend scheduling a site visit or consultation so we can better understand your specific needs.",
    },
    {
      question: "How Do I Maintain The Water Quality In My Fish Pond Or Aquarium?",
      answer:
        "Water quality maintenance involves regular testing, proper filtration, adequate aeration, and appropriate stocking densities. We provide detailed guidance on water quality management tailored to your specific setup.",
    },
    {
      question: "What Are The Payment Options Available At Duodocs?",
      answer:
        "We accept various payment methods including bank transfers, mobile money, and cash payments. For larger projects, we offer flexible payment plans. Please contact our customer service team for more details.",
    },
  ]
  
  const toggleQuestion = (index) => {
    if (activeQuestion === index) {
      setActiveQuestion(null)
    } else {
      setActiveQuestion(index)
    }
  }
  
  return (
    <div className="font-jost bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Using a more reliable way to include the hero image */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://i.pinimg.com/736x/f5/15/95/f5159526fe780e5d91a4046a442d16c4.jpg')" }}>
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
              Our Services
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
              At DuoDocs LTD, we offer a comprehensive range of aquaculture services tailored for both small-scale and 
              commercial fish farming operations. From fingerlings and specialized equipment to expert pond construction 
              and maintenance, we provide everything needed for successful aquatic ecosystems.
            </motion.p>
            
            {/* CTA button with modern design and hover effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10"
            >
              <a
                href="#services"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-teal-500 hover:to-teal-600 
                          text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:translate-y-1 
                          shadow-lg shadow-blue-900/20 group"
              >
                Explore Our Services
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
          <a href="#fingerlings" className="flex flex-col items-center text-white/80 hover:text-white transition-colors">
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

      {/* Fingerlings Section */}
      <section id="fingerlings" className="py-20 bg-gray-50"  ref={fingerlingRef}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              className="md:w-1/2"
              variants={fadeInRight}
              initial="hidden"
              animate={fingerlingInView ? "visible" : "hidden"}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Fingerlings</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-900 to-teal-500 mb-8"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We provide quality fingerlings sourced and bred according to the highest standards, contributing to
                sustainable aquaculture practices. Our fingerlings are carefully selected for optimal growth, disease
                resistance, and overall performance in various farming environments.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center bg-blue-600/90 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-medium transition-all hover:translate-y-1 group"
              >
                Get in Touch
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </motion.div>
            <motion.div
              className="md:w-1/2"
              variants={fadeInLeft}
              initial="hidden"
              animate={fingerlingInView ? "visible" : "hidden"}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/27180320/pexels-photo-27180320/free-photo-of-catched-fish-on-floor.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Person holding a basket of fingerlings"
                  className="w-full h-100 md:h-120 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fish Nets Section */}
      <section className="py-20 bg-white" ref={fishNetsRef}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <motion.div
              className="md:w-1/2"
              variants={fadeInLeft}
              initial="hidden"
              animate={fishNetsInView ? "visible" : "hidden"}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Fish Nets</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-900 to-teal-500 mb-8"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Durable nets designed specifically for efficient fish capture and management, enhancing operational
                efficiency. Our high-quality fishing nets are crafted from durable materials that withstand the rigors
                of regular use in aquaculture environments, ensuring longevity and reliable performance.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center bg-blue-600/90 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-medium transition-all hover:translate-y-1 group"
              >
                Learn More
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </motion.div>
            <motion.div
              className="md:w-1/2"
              variants={fadeInRight}
              initial="hidden"
              animate={fishNetsInView ? "visible" : "hidden"}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/17757924/pexels-photo-17757924/free-photo-of-a-freshly-caught-trout-in-a-fishing-net-lying-on-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Fish nets for aquaculture"
                  className="w-full h-100 md:h-120 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/** Pond Construction Section */}
      <section className="py-20 bg-gray-50" ref={pondConstructionRef}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              className="md:w-1/2"
              variants={fadeInRight}
              initial="hidden"
              animate={pondConstructionInView ? "visible" : "hidden"}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Pond Construction</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-900 to-teal-500 mb-8"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We provide expert guidance and support for successful pond construction projects, equipping clients with
                the knowledge and skills required to build sustainable and efficient ponds. Our services ensure that
                each pond is optimally designed for its specific purpose, promoting long-term ecological balance and
                operational success.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center bg-blue-600/90 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-medium transition-all hover:translate-y-1 group"
              >
                Request a Quote
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </motion.div>
            <motion.div
              className="md:w-1/2"
              variants={fadeInLeft}
              initial="hidden"
              animate={pondConstructionInView ? "visible" : "hidden"}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={Pond}
                  alt="Pond construction site"
                  className="w-full h-100 md:h-120 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/** Water Supply Section */}
      <section className="py-20 bg-white" ref={waterSupplyRef}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <motion.div
              className="md:w-1/2"
              variants={fadeInLeft}
              initial="hidden"
              animate={waterSupplyInView ? "visible" : "hidden"}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Water Supply</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-900 to-teal-500 mb-8"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our reliable water supply solutions are tailored to the specific needs of aquaculture setups, ensuring
                optimal conditions for fish health and growth. We implement sustainable water management practices that
                conserve resources while maintaining the ideal environment for your aquatic species.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center bg-blue-600/90 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-medium transition-all hover:translate-y-1 group"
              >
                Explore Solutions
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </motion.div>
            <motion.div
              className="md:w-1/2"
              variants={fadeInRight}
              initial="hidden"
              animate={waterSupplyInView ? "visible" : "hidden"}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://media.istockphoto.com/id/509183960/photo/water-storage-tanks-in-kenya.jpg?b=1&s=612x612&w=0&k=20&c=HG4pfa63xUyJmyuuQXf7c00jJDwoek-FU6SyegzFwOw="
                  alt="Water supply system for fish farming"
                  className="w-full h-100 md:h-120 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/** Aquarium Setup Section */}
      <section className="py-20 bg-gray-50" ref={aquariumRef}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              className="md:w-1/2"
              variants={fadeInRight}
              initial="hidden"
              animate={aquariumInView ? "visible" : "hidden"}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Aquarium Setup</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-900 to-teal-500 mb-8"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our customized aquarium installations cater to diverse settings, including homes, offices, and public
                spaces, providing aesthetically pleasing aquatic environments. We handle everything from design to
                installation, creating balanced ecosystems that are both beautiful and easy to maintain.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center bg-blue-600/90 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-medium transition-all hover:translate-y-1 group"
              >
                Design Your Aquarium
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </motion.div>
            <motion.div
              className="md:w-1/2"
              variants={fadeInLeft}
              initial="hidden"
              animate={aquariumInView ? "visible" : "hidden"}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={Setup}
                  alt="Custom aquarium setup"
                  className="w-full h-100 md:h-120 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/** FAQ Section */}
      <section className="py-20 bg-white" ref={faqRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            variants={fadeIn}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">FAQ</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-teal-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700">
              Find answers to commonly asked questions about our services and fish farming practices.
            </p>
          </motion.div>
          <motion.div
            className="max-w-3xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
          >
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                className="mb-4 border-b border-gray-200 pb-4"
                variants={itemVariant}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  className="flex justify-between items-center w-full text-left font-medium text-lg text-gray-800 py-3 focus:outline-none"
                  onClick={() => toggleQuestion(index)}
                >
                  {faq.question}
                  {activeQuestion === index ? (
                    <ChevronUp className="text-blue-500" size={20} />
                  ) : (
                    <ChevronDown className="text-blue-500" size={20} />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeQuestion === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-700 pb-4">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="text-center mt-12"
            variants={fadeIn}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
            transition={{ delay: 0.6 }}
          >
            <a
              href="/contact"
              className="inline-flex items-center bg-blue-600/90 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-medium transition-all hover:translate-y-1"
            >
              Contact Us
              <ArrowRight className="ml-2" size={18} />
            </a>
          </motion.div>
        </div>
      </section>
      <Footer /> 
    </div>
  )
}

export default Services