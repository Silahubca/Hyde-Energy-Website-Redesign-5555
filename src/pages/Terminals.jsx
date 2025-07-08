import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';

const { FiPackage, FiTruck, FiShield, FiMapPin, FiBarChart3, FiSettings } = FiIcons;

const Terminals = () => {
  const facilities = [
    {
      icon: FiPackage,
      title: 'Storage Facilities',
      description: 'State-of-the-art storage tanks and facilities across West Africa for various petroleum products.',
      capacity: '500,000+ barrels',
      features: ['Temperature Control', 'Quality Monitoring', 'Security Systems', 'Environmental Compliance']
    },
    {
      icon: FiTruck,
      title: 'Nigerian Tank Farm',
      description: 'Our flagship tank farm and terminal facility providing comprehensive storage and distribution services.',
      capacity: '200,000 barrels',
      features: ['Loading Bays', 'Pipeline Connections', 'Truck Loading', 'Rail Access']
    },
    {
      icon: FiSettings,
      title: 'Terminal Operations',
      description: 'Full-service terminal operations including receiving, storage, blending, and dispatch services.',
      capacity: 'Multi-product',
      features: ['Automated Systems', 'Quality Control', 'Inventory Management', 'Safety Protocols']
    }
  ];

  const services = [
    {
      icon: FiBarChart3,
      title: 'Storage Solutions',
      description: 'Flexible storage solutions for crude oil, refined products, and specialty chemicals.',
      benefits: ['Cost-effective storage', 'Strategic locations', 'Flexible terms', 'Quality assurance']
    },
    {
      icon: FiTruck,
      title: 'Distribution Services',
      description: 'Comprehensive distribution network connecting storage facilities to end markets.',
      benefits: ['Multi-modal transport', 'Logistics optimization', 'Real-time tracking', 'Delivery assurance']
    },
    {
      icon: FiShield,
      title: 'Safety & Compliance',
      description: 'Industry-leading safety standards and environmental compliance across all operations.',
      benefits: ['HSE protocols', 'Regulatory compliance', 'Risk management', 'Emergency response']
    },
    {
      icon: FiSettings,
      title: 'Technical Services',
      description: 'Advanced technical services including blending, quality testing, and product handling.',
      benefits: ['Product blending', 'Quality testing', 'Contamination prevention', 'Technical support']
    }
  ];

  const locations = [
    {
      name: 'Lagos Terminal',
      description: 'Primary terminal facility serving the Lagos metropolitan area and surrounding regions.',
      capacity: '200,000 barrels',
      products: ['Gasoline', 'Diesel', 'Jet Fuel', 'LPG']
    },
    {
      name: 'Port Harcourt Facility',
      description: 'Strategic facility in the heart of Nigeria\'s oil and gas region.',
      capacity: '150,000 barrels',
      products: ['Crude Oil', 'Refined Products', 'Chemicals']
    },
    {
      name: 'West Africa Network',
      description: 'Regional storage facilities across key West African markets.',
      capacity: '300,000+ barrels',
      products: ['Multi-product', 'Regional Distribution']
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
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
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
              <SafeIcon icon={FiPackage} className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Terminals & <span className="text-secondary-500">Storage</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Strategic storage and terminal facilities across West Africa, 
              providing secure and efficient petroleum product handling.
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
                Strategic Infrastructure Network
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Hyde Energy operates a comprehensive network of storage facilities and 
                  terminals across West Africa, providing critical infrastructure for 
                  the petroleum products supply chain.
                </p>
                <p>
                  Our facilities are strategically located to serve key markets and 
                  distribution channels, featuring state-of-the-art technology, 
                  robust safety systems, and environmental compliance measures.
                </p>
                <p>
                  From our flagship Nigerian tank farm to regional storage facilities, 
                  we provide flexible, reliable, and cost-effective storage solutions 
                  for crude oil, refined products, and specialty chemicals.
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
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Storage Terminals"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent rounded-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern storage and terminal infrastructure designed for efficiency and safety.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <SafeIcon icon={facility.icon} className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {facility.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {facility.description}
                </p>
                <div className="bg-primary-50 rounded-lg p-3 mb-4">
                  <span className="text-sm font-semibold text-primary-600">Capacity: </span>
                  <span className="text-sm text-primary-800">{facility.capacity}</span>
                </div>
                <div className="space-y-2">
                  {facility.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
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
              Terminal Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive services to support your petroleum products operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <SafeIcon icon={service.icon} className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
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
              Strategic Locations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our facilities are positioned in key markets across West Africa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-primary-500/10 backdrop-blur-sm rounded-xl p-6 border border-primary-500/20"
              >
                <div className="w-10 h-10 bg-secondary-500 rounded-lg flex items-center justify-center mb-4">
                  <SafeIcon icon={FiMapPin} className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-secondary-500">
                  {location.name}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {location.description}
                </p>
                <div className="bg-primary-500/20 rounded-lg p-3 mb-4">
                  <span className="text-sm font-semibold text-secondary-400">Capacity: </span>
                  <span className="text-sm text-white">{location.capacity}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {location.products.map((product, productIndex) => (
                    <span
                      key={productIndex}
                      className="bg-primary-500/30 text-white px-2 py-1 rounded text-xs"
                    >
                      {product}
                    </span>
                  ))}
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
              Storage Solutions for Your Business
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Partner with us for reliable, secure, and efficient petroleum product storage and handling.
            </p>
            <button className="bg-white text-primary-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Request Storage Quote
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Terminals;