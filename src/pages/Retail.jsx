import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';

const { FiHome, FiMapPin, FiCreditCard, FiShield, FiUsers, FiTrendingUp } = FiIcons;

const Retail = () => {
  const retailFeatures = [
    {
      icon: FiHome,
      title: 'Home is where Hyde is',
      description: 'Our retail network brings quality petroleum products directly to communities across Nigeria.',
      benefits: ['Quality Assurance', 'Competitive Pricing', 'Convenient Locations', 'Customer Service']
    },
    {
      icon: FiShield,
      title: 'Quality Products',
      description: 'Premium petroleum products meeting international standards for performance and reliability.',
      benefits: ['International Standards', 'Regular Testing', 'Quality Control', 'Product Certification']
    },
    {
      icon: FiUsers,
      title: 'Customer Experience',
      description: 'Exceptional customer service and modern facilities designed for convenience and safety.',
      benefits: ['Modern Facilities', 'Trained Staff', 'Safety Protocols', 'Customer Support']
    },
    {
      icon: FiCreditCard,
      title: 'Payment Solutions',
      description: 'Flexible payment options including cash, cards, and digital payment platforms.',
      benefits: ['Multiple Payment Options', 'Digital Payments', 'Customer Accounts', 'Loyalty Programs']
    }
  ];

  const services = [
    {
      title: 'Fuel Sales',
      description: 'Premium gasoline, diesel, and other petroleum products',
      icon: FiTrendingUp
    },
    {
      title: 'LPG Distribution',
      description: 'Safe and reliable LPG supply for domestic and commercial use',
      icon: FiHome
    },
    {
      title: 'Lubricants',
      description: 'Hyde Energy branded lubricants for automotive and industrial applications',
      icon: FiShield
    },
    {
      title: 'Convenience Services',
      description: 'Additional services to enhance customer experience',
      icon: FiUsers
    }
  ];

  const locations = [
    'Alagbado – 49, Ibari Road, Ait, Alagbado, Lagos',
    'Egbeda – 97 Idimu Road, Okunola Bus Stop, Egbeda',
    'Ikeja Du – Mammy Market, Ikeja Cantonment, Lagos',
    'Ikeja Skid – Cbq 78, Napex Ikeja Cantonment, Lagos',
    'Jaji – Jaji Military Cantonment, First Gate After Conoil, Kaduna Zaria Express Way',
    'Keffi – Abuja-keffi Express Way New Nyanya',
    'Makurdi – Opposite Corporal Below Quarters. Ewart Smith Road, Nigeria Air Force Base Makurdi, Benue State',
    'Naf Kaduna – Hyde Gas Naf Base Kaduna By 401 Gate',
    'Oko-oba – 13 Akinwunmi Street, Oko Oba Agege, Lagos',
    'Ribadu – New Barrack Nda Old Site, Kaduna',
    'Uni- Agric – Dispensing Unit South Core, Joseph Suawan Tarka University, Benue State',
    'Western Foreshore – Western Foreshore Chief Yemi Idowu Way, Lekki, Lagos',
    'Wuse – Plot 598 Kashim Ibrahim Way, Wuse2 Abuja',
    'Zuba – Behind Nnpc Filling Station, Lado Dan Kogi Zuba—Abuja'
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
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <SafeIcon icon={FiHome} className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Retail <span className="text-secondary-500">Network</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              "Home is where Hyde is" - Bringing quality petroleum products 
              directly to communities across Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Expanding Retail Presence
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Hyde Energy's retail division has grown significantly since opening our first 
                  retail station, establishing a strong presence across Nigeria with our 
                  "Home is where Hyde is" brand promise.
                </p>
                <p>
                  Our retail network focuses on providing high-quality petroleum products, 
                  exceptional customer service, and modern facilities that meet the evolving 
                  needs of Nigerian consumers and businesses.
                </p>
                <p>
                  With strategic locations across major cities and key transportation routes, 
                  we ensure convenient access to reliable fuel and energy solutions for 
                  our customers.
                </p>
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
                src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Retail Station"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent rounded-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Retail Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering exceptional value and service at every retail location.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {retailFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <SafeIcon icon={feature.icon} className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Retail Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive products and services at our retail locations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 text-center hover:bg-primary-50 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500 transition-colors duration-300">
                  <SafeIcon icon={service.icon} className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Retail Locations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find Hyde Energy retail stations across Nigeria.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 6) * 0.1 }}
                className="bg-primary-500/10 backdrop-blur-sm rounded-lg p-4 border border-primary-500/20 hover:bg-primary-500/20 transition-colors duration-300"
              >
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiMapPin} className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {location}
                  </p>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Visit a Hyde Energy Station Today
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Experience quality products and exceptional service at our retail locations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-primary-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Find Nearest Station
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Franchise Opportunities
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Retail;