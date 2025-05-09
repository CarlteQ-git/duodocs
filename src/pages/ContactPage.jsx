import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
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
} from "lucide-react"
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
      icon: <MapPin className="text-teal-600" size={24} />,
      title: "Our Address",
      details: ["PO BOX 1803, GPO NAIROBI", "CBD STREET, UTALI STREET", "BUILDING: UTALI HOUSE"],
    },
    {
      icon: <Clock className="text-teal-600" size={24} />,
      title: "Working Hours",
      details: ["Monday - Friday", "9:00AM - 5:00PM"],
    },
    {
      icon: <Phone className="text-teal-600" size={24} />,
      title: "Phone",
      details: ["+254708247412"],
    },
    {
      icon: <Mail className="text-teal-600" size={24} />,
      title: "Email",
      details: ["DUODOCS@GMAIL.COM"],
    },
  ]

  return (
    <div className="font-jost">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-blue-900 to-teal-900 text-white">
        <div className="container mx-auto px-4" ref={headerRef}>
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={fadeIn}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <div className="w-24 h-1 bg-teal-400 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
              We would love to hear from you. Feel free to reach out using the below details or fill out the contact
              form and we'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,64C840,53,960,43,1080,48C1200,53,1320,75,1380,85.3L1440,96L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Contact Info and Form Section */}
      <section className="py-20 bg-white">
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
                    href="#facebook"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-teal-500 hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="#twitter"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-teal-500 hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="#instagram"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-teal-500 hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="#linkedin"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-teal-500 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
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
                <div className="w-20 h-1 bg-teal-500 mb-8"></div>

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
                      className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
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
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Visit Us</h2>
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
            {/* Replace with actual Google Maps iframe */}
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
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
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
