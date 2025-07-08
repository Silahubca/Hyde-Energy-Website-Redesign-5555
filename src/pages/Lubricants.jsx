import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';

const { FiZap, FiShield, FiTrendingUp, FiTruck, FiSettings, FiAward, FiStar, FiArrowRight, FiShoppingCart, FiPhone } = FiIcons;

const Lubricants = () => {
  const [selectedCategory, setSelectedCategory] = useState('Automotive');

  const productCategories = [
    {
      icon: FiTruck,
      title: 'Automotive Lubricants',
      description: 'Premium motor oils and automotive lubricants for passenger cars, motorcycles, and commercial vehicles.',
      products: ['Engine Oils', 'Transmission Fluids', 'Brake Fluids', 'Coolants', 'Gear Oils'],
      id: 'Automotive'
    },
    {
      icon: FiSettings,
      title: 'Industrial Lubricants',
      description: 'High-performance industrial lubricants for manufacturing, mining, and heavy equipment applications.',
      products: ['Hydraulic Oils', 'Compressor Oils', 'Turbine Oils', 'Metalworking Fluids', 'Greases'],
      id: 'Industrial'
    },
    {
      icon: FiZap,
      title: 'Marine Lubricants',
      description: 'Specialized marine lubricants designed for harsh maritime environments and marine engines.',
      products: ['Marine Engine Oils', 'Cylinder Oils', 'System Oils', 'Stern Tube Oils', 'Deck Machinery Oils'],
      id: 'Marine'
    },
    {
      icon: FiShield,
      title: 'Specialty Products',
      description: 'Specialized lubricants for specific applications and extreme operating conditions.',
      products: ['High-Temperature Oils', 'Food-Grade Lubricants', 'Bio-Lubricants', 'Cutting Oils', 'Process Oils'],
      id: 'Specialty'
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Hyde ATF',
      category: 'Automotive',
      description: 'Hyde ATF is a high-quality oil formulated to meet the needs of today\'s more compact transmissions. It is recommended for use in the automatic transmission system of cars, vans, trucks and tractors.',
      subtitle: 'Automatic Transmission Fluid',
      features: ['High-quality formulation', 'For compact transmissions', 'Used in cars, vans, trucks and tractors', 'Superior lubrication'],
      image: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751993102796-product%20images.jpg',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Luminor 2T',
      category: 'Automotive',
      description: 'This mineral-based oil offers superior performance and is designed to provide excellent lubrication for all two-stroke oil-injected and premix engines. It is NMMA Certified for service TC-W3 at the engine manufacturers recommended fuel/oil ratio. All two-stroke engines require a specific oil that satisfies the N.M.M.A. TC-WII or TC-W3 specifications.',
      subtitle: 'Mineral Air-Cooled Four-Stroke Engine Oil',
      features: ['Superior performance', 'Excellent lubrication', 'NMMA Certified for service TC-W3', 'For two-stroke engines'],
      image: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751993102796-product%20images.jpg',
      rating: 4.7
    },
    {
      id: 3,
      name: 'Luminor 4T 20W50SL',
      category: 'Automotive',
      description: 'It is a high-performance mineral engine oil suitable for air-cooled gasoline and LPG engines in motorbikes, power bikes, generators, and tricycles running 4-stroke engines fitted with or without turbochargers. It offers robust defence against wear, foam, and corrosion, while its low-temperature characteristics guarantee a seamless cold start.',
      subtitle: 'Mineral Air-Cooled Four-Stroke Engine Oil',
      features: ['High-performance mineral engine oil', 'For air-cooled gasoline and LPG engines', 'Defence against wear, foam, and corrosion', 'ACEA A3/B3, API SL/CF compliant'],
      image: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751993102796-product%20images.jpg',
      rating: 4.9
    },
    {
      id: 4,
      name: 'Luminor ZS9 5W-40SN',
      category: 'Automotive',
      description: 'Luminor ZS9 5W-40SN is an API SN high-performance fuel-saving engine oil based on 100% synthetic technology for use in the latest generation gasoline and diesel engines of passenger cars and light vans with or without turbochargers. A specially selected additive technology providing premium stay-in-grade performance with extended drain intervals exceeding 10,000 km.',
      subtitle: 'Fully Synthetic Passenger Car Motor Oil',
      features: ['100% synthetic technology', 'Fuel-saving formula', 'Extended drain intervals (10,000+ km)', 'For gasoline and diesel engines'],
      image: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751993102796-product%20images.jpg',
      rating: 4.6
    }
  ];

  const filteredProducts = selectedCategory === 'All' ? featuredProducts : featuredProducts.filter(product => product.category === selectedCategory);

  const brandValues = [
    {
      icon: FiZap,
      title: 'Power',
      description: 'Delivering exceptional performance and efficiency across all applications.',
      color: 'text-secondary-500'
    },
    {
      icon: FiShield,
      title: 'Protection',
      description: 'Advanced formulations that protect equipment and extend operational life.',
      color: 'text-primary-500'
    },
    {
      icon: FiTrendingUp,
      title: 'Performance',
      description: 'Consistent, reliable performance that meets and exceeds industry standards.',
      color: 'text-lime-500'
    }
  ];

  const applications = [
    {
      sector: 'Automotive',
      description: 'Passenger cars, trucks, motorcycles, and commercial vehicles',
      benefits: ['Fuel Economy', 'Engine Protection', 'Extended Drain Intervals', 'Emission Control']
    },
    {
      sector: 'Industrial',
      description: 'Manufacturing, mining, construction, and heavy equipment',
      benefits: ['Equipment Protection', 'Reduced Downtime', 'Cost Efficiency', 'Productivity Enhancement']
    },
    {
      sector: 'Marine',
      description: 'Commercial vessels, offshore platforms, and marine equipment',
      benefits: ['Corrosion Protection', 'Thermal Stability', 'Water Resistance', 'Environmental Compliance']
    },
    {
      sector: 'Aviation',
      description: 'Aircraft engines, hydraulic systems, and ground support equipment',
      benefits: ['High-Temperature Performance', 'Safety Standards', 'Reliability', 'Regulatory Compliance']
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 lg:pt-20"
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-navy-900 to-navy-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')` }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <SafeIcon icon={FiZap} className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hyde Energy <span className="text-secondary-500">Lubricants</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Premium lubricants delivering power, protection, and performance for automotive, industrial, and marine
              applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our premium lubricant solutions designed for superior performance.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === 'All'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Products
            </button>
            {productCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group h-full flex flex-col"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-xs font-medium mb-2">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-3 italic">{product.subtitle}</p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{product.description}</p>
                  <ul className="space-y-1 mb-4">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <SafeIcon
                          icon={FiShield}
                          className="w-4 h-4 text-primary-500 mt-0.5 mr-2 flex-shrink-0"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <button className="text-primary-500 hover:text-primary-600 font-medium text-sm flex items-center">
                      <span>View Details</span>
                      <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-1" />
                    </button>
                    <button className="flex items-center space-x-1 bg-primary-500 hover:bg-primary-600 text-white px-3 py-2 rounded-lg transition-colors text-sm">
                      <SafeIcon icon={FiPhone} className="w-4 h-4" />
                      <span>Inquire Now</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Power. Protection. Performance.</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The three pillars that define Hyde Energy lubricants and drive our commitment to excellence.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-100 transition-colors duration-300">
                  <SafeIcon
                    icon={value.icon}
                    className={`w-10 h-10 ${value.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${value.color}`}>{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Product Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of lubricants for diverse applications and industries.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <SafeIcon icon={category.icon} className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
                <div className="space-y-2">
                  {category.products.map((product, productIndex) => (
                    <div key={productIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{product}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Industry Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by industries across diverse sectors for superior lubrication solutions.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((application, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 hover:bg-primary-50 transition-colors duration-300 group"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary-600">
                  {application.sector}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{application.description}</p>
                <div className="space-y-1">
                  {application.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                      <span className="text-xs text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Standards Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Quality & Standards</h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Hyde Energy lubricants are formulated to meet and exceed international quality standards, ensuring
                  optimal performance across all applications.
                </p>
                <p>
                  Our products undergo rigorous testing and quality control processes, with certifications from leading
                  industry bodies and compliance with global specifications.
                </p>
                <p>
                  We continuously invest in research and development to deliver innovative lubricant solutions that meet
                  evolving industry requirements and environmental standards.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-primary-500/20 rounded-lg p-4">
                  <SafeIcon icon={FiAward} className="w-6 h-6 text-secondary-500 mb-2" />
                  <h4 className="font-semibold text-secondary-500">ISO Certified</h4>
                  <p className="text-sm text-gray-300">Quality management systems</p>
                </div>
                <div className="bg-primary-500/20 rounded-lg p-4">
                  <SafeIcon icon={FiShield} className="w-6 h-6 text-lime-500 mb-2" />
                  <h4 className="font-semibold text-lime-500">API Standards</h4>
                  <p className="text-sm text-gray-300">Industry specifications</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Quality Testing"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent rounded-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Experience Hyde Energy Lubricants</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover the power, protection, and performance advantage of our premium lubricants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-primary-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <SafeIcon icon={FiPhone} className="w-5 h-5" />
                <span>For inquiries, call us now!</span>
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Find Distributor
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Lubricants;