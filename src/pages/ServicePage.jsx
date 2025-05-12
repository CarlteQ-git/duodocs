import { useState, useRef } from "react"
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
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-blue-900 to-teal-500 text-white">
        <div className="container mx-auto px-4" ref={headerRef}>
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={fadeIn}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <div className="w-24 h-1 bg-teal-400 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
              At DuoDocs LTD, we offer a wide range of services tailored to meet the diverse needs of fish farmers,
              whether small-scale or commercial ventures. Our services include the provision of fingerlings, fish feeds,
              fishing nets, pond construction and maintenance, aquarium setup, fish farming consultation, fish hatching,
              and the supply of mature catfish and fillets. Strategically located in Nairobi, Kenya, we serve clients
              nationwide, ensuring prompt and efficient delivery of products and services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fingerlings Section */}
      <section className="py-20 bg-gray-50" ref={fingerlingRef}>
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
                className="inline-flex items-center bg-gradient-to-r from-blue-900 to-teal-500 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-medium transition-all hover:translate-y-1 group"
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
                className="inline-flex items-center bg-gradient-to-r from-blue-900 to-teal-500 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-medium transition-all hover:translate-y-1 group"
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

      {/* Pond Construction Section */}
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
                className="inline-flex items-center bg-gradient-to-r from-blue-900 to-teal-500 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-medium transition-all hover:translate-y-1 group"
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

      {/* Water Supply Section */}
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
                className="inline-flex items-center bg-gradient-to-r from-blue-900 to-teal-500 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-medium transition-all hover:translate-y-1 group"
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

      {/* Aquarium Setup Section */}
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
                className="inline-flex items-center bg-gradient-to-r from-blue-900 to-teal-500 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-medium transition-all hover:translate-y-1 group"
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

      {/* FAQ Section */}
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
              className="inline-flex items-center bg-gradient-to-r from-blue-900 to-teal-500 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-medium transition-all hover:translate-y-1"
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
