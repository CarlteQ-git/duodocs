import { motion, useInView, AnimatePresence } from "framer-motion"
import {
  ChevronRight,
  Menu,
  X,
  Facebook,
  Twitter,
  Youtube,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
} from "lucide-react"

const FloatingButton = () => {
    return (
        <>
            {/* Floating Button */}
            <a
                href="#"
                className="fixed bottom-8 right-8 bg-teal-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-teal-500 transition-colors z-40 group"
                aria-label="Back to top"
            >
                <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                >
                <ChevronUp size={24} />
                </motion.div>
            </a>
        </>
    )
}

export default  FloatingButton;