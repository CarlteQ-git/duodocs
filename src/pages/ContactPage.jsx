import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  ChevronDown,
  ChevronUp,
  MapPin,
  Clock,
  Phone,
  Mail,
  Send,
  CheckCircle,
  Loader2,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight
} from "lucide-react"
import { FaTiktok } from "react-icons/fa6"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const ContactPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState("idle") // idle, submitting, success, error
  const [errors, setErrors] = useState({})

  // Refs for scroll animations
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 })

  const contactInfoRef = useRef(null)
  const contactInfoInView = useInView(contactInfoRef, { once: true, amount: 0.3 })

  const formRef = useRef(null)
  const formInView = useInView(formRef, { once: true, amount: 0.3 })

  const mapRef = useRef(null)
  const mapInView = useInView(mapRef, { once: true, amount: 0.3 })

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
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

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  // Validate form
  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setFormStatus("submitting")

    // Simulate API call
    setTimeout(() => {
      setFormStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus("idle")
      }, 5000)
    }, 1500)
  }

  // Contact info data
  const contactInfo = [
    {
      icon: <MapPin className="text-blue-600" size={24} />,
      title: "Our Address",
      details: ["PO BOX 1803, GPO NAIROBI", "CBD STREET, UTALI STREET", "BUILDING: UTALI HOUSE"],
    },
    {
      icon: <Clock className="text-blue-600" size={24} />,
      title: "Working Hours",
      details: ["Monday - Friday", "9:00AM - 5:00PM"],
    },
    {
      icon: <Phone className="text-blue-600" size={24} />,
      title: "Phone",
      details: ["+254708247412"],
    },
    {
      icon: <Mail className="text-blue-600" size={24} />,
      title: "Email",
      details: ["DUODOCS@GMAIL.COM"],
    },
  ]

  return (
    <div className="font-jost">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Using a reliable way to include the hero image */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://i.pinimg.com/736x/41/48/95/414895bccd4862ee3516defc06884ed1.jpg')" }}>
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
              Contact Us
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
              We would love to hear from you. Feel free to reach out using the below details or fill out the contact
              form and we'll get back to you as soon as possible.
            </motion.p>

            {/* CTA button with modern design and hover effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10"
            >
              <a
                href="#contact-form"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-teal-500 hover:to-teal-600 
                          text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:translate-y-1 
                          shadow-lg shadow-blue-900/20 group"
              >
                Get In Touch
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
          <a href="#contact-form" className="flex flex-col items-center text-white/80 hover:text-white transition-colors">
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
      
      {/* Contact Info and Form Section */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Info */}
            <motion.div
              className="lg:w-1/3"
              ref={contactInfoRef}
              variants={fadeInLeft}
              initial="hidden"
              animate={contactInfoInView ? "visible" : "hidden"}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h2>
              <div className="w-20 h-1 bg-teal-500 mb-8"></div>

              <motion.div
                className="space-y-8"
                variants={staggerContainer}
                initial="hidden"
                animate={contactInfoInView ? "visible" : "hidden"}
              >
                {contactInfo.map((item, index) => (
                  <motion.div key={index} className="flex" variants={itemVariant}>
                    <div className="flex-shrink-0 mr-4 w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <div className="mt-12">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=61558367348022" target='_blank' rel="noopener noreferrer"
                    className="bg-blue-400/10 hover:bg-blue-400/20 text-gray-900 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/duodocsfishfarms?igsh=M213endmMnY3MmN0" target='_blank' rel="noopener noreferrer"
                    className="bg-blue-400/10 hover:bg-blue-400/20 text-gray-900 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@duodocs?_t=8mX5PAbTHK1&_r=1" target='_blank' rel="noopener noreferrer"
                    className="bg-blue-400/10 hover:bg-blue-400/20 text-gray-900 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <FaTiktok size={20}/>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:w-2/3"
              ref={formRef}
              variants={fadeInRight}
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-900 to-teal-500"></div>

                {formStatus === "success" ? (
                  <motion.div
                    className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-600">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.name ? "border-red-500" : "border-gray-300"
                          } focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors`}
                          placeholder="John Doe"
                        />
                        {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                          Your Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.email ? "border-red-500" : "border-gray-300"
                          } focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors`}
                          placeholder="john@example.com"
                        />
                        {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                          placeholder="+254 700 000 000"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                          placeholder="How can we help you?"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.message ? "border-red-500" : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-none`}
                        placeholder="Please describe how we can assist you..."
                      ></textarea>
                      {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="inline-flex items-center justify-center bg-blue-600/95 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {formStatus === "submitting" ? (
                        <>
                          <Loader2 className="animate-spin mr-2" size={20} />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2" size={18} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50" ref={mapRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            variants={fadeIn}
            initial="hidden"
            animate={mapInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Visit Us</h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700">
              We're conveniently located in the heart of Nairobi's CBD. Come visit our office during business hours.
            </p>
          </motion.div>

          <motion.div
            className="rounded-2xl overflow-hidden shadow-xl h-[500px] relative"
            variants={fadeIn}
            initial="hidden"
            animate={mapInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8176213990313!2d36.81663!3d-1.284351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d0f3049a2d%3A0xada6f45a3d9f3a6c!2sUtalii%20House%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1651234567890!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DuoDocs Office Location"
            ></iframe>

            <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-md max-w-xs">
              <h3 className="font-bold text-gray-800 mb-2">DuoDocs LTD</h3>
              <p className="text-gray-600 text-sm">
                CBD STREET, UTALI STREET
                <br />
                BUILDING: UTALI HOUSE
                <br />
                NAIROBI, KENYA
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700">
              Find quick answers to common questions about our services and contact methods.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "What are your business hours?",
                  answer:
                    "Our office is open Monday through Friday from 9:00 AM to 5:00 PM. We are closed on weekends and public holidays.",
                },
                {
                  question: "How quickly do you respond to inquiries?",
                  answer:
                    "We strive to respond to all inquiries within 24 business hours. For urgent matters, we recommend calling our office directly.",
                },
                {
                  question: "Do you offer consultations for new fish farming projects?",
                  answer:
                    "Yes, we offer comprehensive consultations for new fish farming projects. Please contact us to schedule an appointment with one of our experts.",
                },
                {
                  question: "Can I visit your facilities before making a purchase?",
                  answer:
                    "We encourage potential clients to visit our facilities. Please contact us in advance to schedule a tour.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContactPage
