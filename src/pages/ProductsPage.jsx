import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Filter, Search, ShoppingCart, Star, ChevronDown, ChevronUp, ArrowRight, Info, Check } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const ProductsPage = () => {
  // State for filters and search
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [priceRange, setPriceRange] = useState([0, 10000])
  const [showFilters, setShowFilters] = useState(false)
  const [sortOption, setSortOption] = useState("featured")
  const [viewMode, setViewMode] = useState("grid") // grid or list

  // Refs for scroll animations
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 })

  const productsRef = useRef(null)
  const productsInView = useInView(productsRef, { once: true, amount: 0.1 })

  const featuredRef = useRef(null)
  const featuredInView = useInView(featuredRef, { once: true, amount: 0.3 })

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
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  // Product categories
  const categories = [
    { id: "all", name: "All Products" },
    { id: "fingerlings", name: "Fingerlings" },
    { id: "fish-feed", name: "Fish Feed" },
    { id: "equipment", name: "Equipment" },
    { id: "nets", name: "Nets" },
    { id: "aquarium", name: "Aquarium" },
  ]

  // Product data
  const products = [
    {
      id: 1,
      name: "Tilapia Fingerlings",
      category: "fingerlings",
      price: 1500,
      image: "https://i.pinimg.com/736x/9a/41/d2/9a41d2a0bb867a5011e5ca96961c4f67.jpg",
      rating: 4.8,
      reviews: 124,
      description:
        "High-quality tilapia fingerlings bred in controlled environments for optimal growth and disease resistance.",
      featured: true,
      stock: "In Stock",
    },
    {
      id: 2,
      name: "Catfish Fingerlings",
      category: "fingerlings",
      price: 1800,
      image: "https://i.pinimg.com/736x/9b/83/bd/9b83bd53bb3634e4f31ede86761c05ee.jpg",
      rating: 4.7,
      reviews: 98,
      description:
        "Premium catfish fingerlings from our hatchery, known for fast growth rates and excellent survival rates.",
      featured: true,
      stock: "In Stock",
    },
    {
      id: 3,
      name: "Premium Fish Feed (5kg)",
      category: "fish-feed",
      price: 2500,
      image: "https://i.pinimg.com/736x/2f/b9/b1/2fb9b135942aca3142781393f56b023c.jpg",
      rating: 4.9,
      reviews: 156,
      description: "Nutritionally balanced fish feed formulated to promote healthy growth and enhance immune systems.",
      featured: true,
      stock: "In Stock",
    },
    {
      id: 4,
      name: "Starter Fish Feed (2kg)",
      category: "fish-feed",
      price: 1200,
      image: "https://via.placeholder.com/300x300?text=Starter+Fish+Feed",
      rating: 4.6,
      reviews: 87,
      description:
        "Specially formulated feed for young fish, rich in proteins and essential nutrients for early development.",
      featured: false,
      stock: "In Stock",
    },
    {
      id: 5,
      name: "Fishing Net (Small)",
      category: "nets",
      price: 3500,
      image: "https://i.pinimg.com/736x/d1/bf/73/d1bf7344f94aa2325d83ee33ad3a230e.jpg",
      rating: 4.5,
      reviews: 62,
      description:
        "Durable small fishing net ideal for small to medium ponds, made from high-quality materials for longevity.",
      featured: false,
      stock: "In Stock",
    },
    {
      id: 6,
      name: "Fishing Net (Large)",
      category: "nets",
      price: 5500,
      image: "https://i.pinimg.com/736x/71/15/35/711535734961d920676d1f052d96aba4.jpg",
      rating: 4.7,
      reviews: 45,
      description: "Heavy-duty large fishing net designed for commercial fish farming operations and large ponds.",
      featured: false,
      stock: "Low Stock",
    },
    {
      id: 7,
      name: "Water Quality Test Kit",
      category: "equipment",
      price: 4200,
      image: "https://i.pinimg.com/736x/eb/09/93/eb09937222ffcc5737a5f6bab44b5166.jpg",
      rating: 4.8,
      reviews: 73,
      description:
        "Comprehensive water testing kit to monitor pH, ammonia, nitrite, and dissolved oxygen levels in your fish pond.",
      featured: true,
      stock: "In Stock",
    },
    {
      id: 8,
      name: "Pond Aerator",
      category: "equipment",
      price: 8500,
      image: "https://i.pinimg.com/736x/7a/84/18/7a841884383e6c7c4715637e8c526a70.jpg",
      rating: 4.9,
      reviews: 58,
      description:
        "Energy-efficient pond aerator that increases oxygen levels in your pond, supporting higher fish densities.",
      featured: false,
      stock: "In Stock",
    },
    {
      id: 9,
      name: "Small Aquarium Kit (20L)",
      category: "aquarium",
      price: 6500,
      image: "https://i.pinimg.com/736x/22/57/90/22579036859af2c49924d57ac41fb5f2.jpg",
      rating: 4.6,
      reviews: 39,
      description:
        "Complete starter aquarium kit including tank, filter, lighting, and basic accessories for ornamental fish.",
      featured: false,
      stock: "In Stock",
    },
    {
      id: 10,
      name: "Large Aquarium Kit (100L)",
      category: "aquarium",
      price: 15000,
      image: "https://i.pinimg.com/736x/65/a7/bd/65a7bd687147c1e59194346e19bfd2d0.jpg",
      rating: 4.8,
      reviews: 27,
      description:
        "Premium large aquarium setup with advanced filtration system, LED lighting, and decorative elements.",
      featured: true,
      stock: "In Stock",
    },
    {
      id: 11,
      name: "Automatic Fish Feeder",
      category: "equipment",
      price: 4800,
      image: "https://via.placeholder.com/300x300?text=Automatic+Fish+Feeder",
      rating: 4.7,
      reviews: 42,
      description:
        "Programmable automatic fish feeder with adjustable portions and feeding times for consistent feeding.",
      featured: false,
      stock: "In Stock",
    },
    {
      id: 12,
      name: "Predator Net",
      category: "nets",
      price: 7200,
      image: "https://via.placeholder.com/300x300?text=Predator+Net",
      rating: 4.9,
      reviews: 31,
      description: "Heavy-duty protective netting to keep predators like birds away from your fish pond.",
      featured: false,
      stock: "In Stock",
    },
  ]

  // Filter products based on active category, search query, and price range
  const filteredProducts = products.filter((product) => {
    // Category filter
    if (activeCategory !== "all" && product.category !== activeCategory) {
      return false
    }

    // Search filter
    if (
      searchQuery &&
      !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !product.description.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }

    // Price filter
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false
    }

    return true
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "featured":
      default:
        return b.featured - a.featured
    }
  })

  // Featured products
  const featuredProducts = products.filter((product) => product.featured)

  // Handle search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  // Handle price range change
  const handlePriceChange = (e, index) => {
    const newRange = [...priceRange]
    newRange[index] = Number.parseInt(e.target.value)
    setPriceRange(newRange)
  }

  return (
    <div className="font-jost">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-blue-600/85 text-white">
        <div className="container mx-auto px-4" ref={headerRef}>
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={fadeIn}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Products</h1>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
              Discover our premium range of fish farming products, from high-quality fingerlings to essential equipment.
              Everything you need for successful aquaculture.
            </p>

            {/* Search Bar */}
            <div className="mt-12 max-w-xl mx-auto relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full px-5 py-4 pr-12 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:border-teal-300 transition-colors"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70" size={20} />
            </div>
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

      {/* Featured Products Section */}
      <section className="py-20 bg-white" ref={featuredRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            variants={fadeIn}
            initial="hidden"
            animate={featuredInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Featured Products</h2>
            <div className="w-24 h-1 bg-blue-600/85 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700">
              Our most popular and highest quality products, selected to meet your aquaculture needs.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={featuredInView ? "visible" : "hidden"}
          >
            {featuredProducts.slice(0, 4).map((product) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
                variants={itemVariant}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600/85 text-white text-xs font-bold px-2 py-1 rounded">
                    Featured
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-blue-400 text-xs font-bold px-2 py-1 rounded">
                    {product.stock}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(product.rating) ? "fill-yellow-400" : "fill-gray-200"}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description.substring(0, 100)}...</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-blue-400">KSh {product.price.toLocaleString()}</span>
                    <button className="bg-blue-600/85 hover:bg-teal-700 text-white px-4 py-0.5 rounded-lg transition-colors flex items-center">
                      <ShoppingCart size={18} className="mr-2" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <motion.button
              className="inline-flex items-center bg-blue-600/85 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Featured Products
              <ArrowRight className="ml-2" size={18} />
            </motion.button>
          </div>
        </div>
      </section>

      {/* All Products Section */}
      <section className="py-20 bg-gray-50" ref={productsRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            variants={fadeIn}
            initial="hidden"
            animate={productsInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">All Products</h2>
            <div className="w-24 h-1 bg-blue mx-auto mb-8"></div>
            <p className="text-lg text-gray-700">
              Browse our complete collection of high-quality aquaculture products.
            </p>
          </motion.div>

          {/* Filters and Sorting */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === category.id
                        ? "bg-blue-600/85 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <div className="relative">
                  <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-700"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                  <ChevronDown
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    size={16}
                  />
                </div>

                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`px-3 py-2 ${viewMode === "grid" ? "bg-blue-600/85 text-white" : "bg-white text-gray-700"}`}
                    aria-label="Grid view"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="3" width="7" height="7"></rect>
                      <rect x="14" y="3" width="7" height="7"></rect>
                      <rect x="14" y="14" width="7" height="7"></rect>
                      <rect x="3" y="14" width="7" height="7"></rect>
                    </svg>
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`px-3 py-2 ${viewMode === "list" ? "bg-blue-600/85 text-white" : "bg-white text-gray-700"}`}
                    aria-label="List view"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="8" y1="6" x2="21" y2="6"></line>
                      <line x1="8" y1="12" x2="21" y2="12"></line>
                      <line x1="8" y1="18" x2="21" y2="18"></line>
                      <line x1="3" y1="6" x2="3.01" y2="6"></line>
                      <line x1="3" y1="12" x2="3.01" y2="12"></line>
                      <line x1="3" y1="18" x2="3.01" y2="18"></line>
                    </svg>
                  </button>
                </div>

                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 flex items-center md:hidden"
                >
                  <Filter size={16} className="mr-2" />
                  Filters
                  {showFilters ? <ChevronUp size={16} className="ml-2" /> : <ChevronDown size={16} className="ml-2" />}
                </button>
              </div>
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="bg-white p-4 rounded-lg shadow-md mb-6 md:hidden">
                <h3 className="font-semibold text-gray-800 mb-3">Price Range</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Min: KSh {priceRange[0].toLocaleString()}</span>
                    <span className="text-sm text-gray-600">Max: KSh {priceRange[1].toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="20000"
                    step="500"
                    value={priceRange[0]}
                    onChange={(e) => handlePriceChange(e, 0)}
                    className="w-full"
                  />
                  <input
                    type="range"
                    min="0"
                    max="20000"
                    step="500"
                    value={priceRange[1]}
                    onChange={(e) => handlePriceChange(e, 1)}
                    className="w-full"
                  />
                </div>
              </div>
            )}

            <div className="flex flex-col md:flex-row gap-8">
              {/* Desktop Filters */}
              <div className="hidden md:block w-64 bg-white p-6 rounded-xl shadow-md h-fit">
                <h3 className="font-semibold text-gray-800 mb-4">Filters</h3>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-700 mb-3">Price Range</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Min: KSh {priceRange[0].toLocaleString()}</span>
                      <span className="text-sm text-gray-600">Max: KSh {priceRange[1].toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="20000"
                      step="500"
                      value={priceRange[0]}
                      onChange={(e) => handlePriceChange(e, 0)}
                      className="w-full"
                    />
                    <input
                      type="range"
                      min="0"
                      max="20000"
                      step="500"
                      value={priceRange[1]}
                      onChange={(e) => handlePriceChange(e, 1)}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-700 mb-3">Availability</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-blue-400 focus:ring-blue-500" defaultChecked />
                      <span className="ml-2 text-gray-700">In Stock</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-blue-400 focus:ring-blue-500" defaultChecked />
                      <span className="ml-2 text-gray-700">Low Stock</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-blue-400 focus:ring-blue-500" />
                      <span className="ml-2 text-gray-700">Out of Stock</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-700 mb-3">Rating</h4>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <label key={rating} className="flex items-center">
                        <input type="checkbox" className="rounded text-blue-400 focus:ring-blue-500" />
                        <span className="ml-2 flex items-center text-gray-700">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                            />
                          ))}
                          <span className="ml-1">{rating === 5 ? "only" : "& up"}</span>
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Products Grid/List */}
              <div className="flex-1">
                {sortedProducts.length === 0 ? (
                  <div className="bg-white rounded-xl p-8 text-center">
                    <Info size={48} className="mx-auto text-gray-400 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">No Products Found</h3>
                    <p className="text-gray-600 mb-6">
                      We couldn't find any products matching your current filters. Try adjusting your search criteria.
                    </p>
                    <button
                      onClick={() => {
                        setActiveCategory("all")
                        setSearchQuery("")
                        setPriceRange([0, 10000])
                      }}
                      className="inline-flex items-center bg-blue-600/85 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <Check size={18} className="mr-2" />
                      Reset Filters
                    </button>
                  </div>
                ) : viewMode === "grid" ? (
                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    animate={productsInView ? "visible" : "hidden"}
                  >
                    {sortedProducts.map((product) => (
                      <motion.div
                        key={product.id}
                        className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
                        variants={itemVariant}
                      >
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          {product.featured && (
                            <div className="absolute top-4 left-4 bg-blue-600/85 text-white text-xs font-bold px-2 py-1 rounded">
                              Featured
                            </div>
                          )}
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-blue-400 text-xs font-bold px-2 py-1 rounded">
                            {product.stock}
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center mb-2">
                            <div className="flex text-yellow-400 mr-2">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={16}
                                  className={i < Math.floor(product.rating) ? "fill-yellow-400" : "fill-gray-200"}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600">
                              {product.rating} ({product.reviews} reviews)
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                          <p className="text-gray-600 text-sm mb-4">{product.description.substring(0, 80)}...</p>
                          <div className="flex justify-between items-center">
                            <span className="text-xl font-bold text-blue-400">
                              KSh {product.price.toLocaleString()}
                            </span>
                            <button className="bg-blue-600/85 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center">
                              <ShoppingCart size={18} className="mr-2" />
                              Add
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    className="space-y-6"
                    variants={staggerContainer}
                    initial="hidden"
                    animate={productsInView ? "visible" : "hidden"}
                  >
                    {sortedProducts.map((product) => (
                      <motion.div
                        key={product.id}
                        className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl group"
                        variants={itemVariant}
                      >
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/3 h-64 md:h-auto relative overflow-hidden">
                            <img
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {product.featured && (
                              <div className="absolute top-4 left-4 bg-blue-600/85 text-white text-xs font-bold px-2 py-1 rounded">
                                Featured
                              </div>
                            )}
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-blue-400 text-xs font-bold px-2 py-1 rounded">
                              {product.stock}
                            </div>
                          </div>
                          <div className="md:w-2/3 p-6 flex flex-col">
                            <div className="flex items-center mb-2">
                              <div className="flex text-yellow-400 mr-2">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    size={16}
                                    className={i < Math.floor(product.rating) ? "fill-yellow-400" : "fill-gray-200"}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-gray-600">
                                {product.rating} ({product.reviews} reviews)
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                            <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description}</p>
                            <div className="flex justify-between items-center mt-4">
                              <span className="text-xl font-bold text-blue-400">
                                KSh {product.price.toLocaleString()}
                              </span>
                              <button className="bg-blue-600/85 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center">
                                <ShoppingCart size={18} className="mr-2" />
                                Add to Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* Pagination */}
                {sortedProducts.length > 0 && (
                  <div className="mt-12 flex justify-center">
                    <nav className="flex items-center space-x-2">
                      <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors">
                        Previous
                      </button>
                      <button className="px-4 py-2 rounded-lg bg-blue-600/85 text-white font-medium">1</button>
                      <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors">
                        2
                      </button>
                      <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors">
                        3
                      </button>
                      <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors">
                        Next
                      </button>
                    </nav>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-blue-600/85 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-6 py-12 md:p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help Choosing the Right Products?</h2>
              <p className="text-lg text-gray-100 max-w-2xl mx-auto mb-8">
                Our team of experts is ready to assist you in selecting the perfect products for your fish farming
                needs. Contact us for personalized recommendations.
              </p>
              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <a
                  href="/contact"
                  className="inline-flex items-center bg-white text-blue-400 hover:bg-gray-100 px-8 py-4 rounded-full font-medium transition-colors"
                >
                  Contact Our Experts
                  <ArrowRight className="ml-2" size={18} />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ProductsPage
