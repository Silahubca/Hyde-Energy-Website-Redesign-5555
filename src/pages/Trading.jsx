import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';

const { FiTrendingUp, FiGlobe, FiBarChart3, FiShip, FiDroplet, FiZap } = FiIcons;

const Trading = () => {
  const tradingActivities = [
    {
      icon: FiDroplet,
      title: 'Crude Oil Trading',
      description: 'Physical and financial trading of crude oil across West and Central African markets with strategic partnerships.',
      features: ['Spot & Term Contracts', 'Risk Management', 'Quality Assurance', 'Logistics Coordination']
    },
    {
      icon: FiZap,
      title: 'Refined Products',
      description: 'Comprehensive trading in gasoline, diesel, jet fuel, and other refined petroleum products.',
      features: ['Product Optimization', 'Supply Chain Management', 'Market Analysis', 'Customer Solutions']
    },
    {
      icon: FiTrendingUp,
      title: 'Gas Trading',
      description: 'LPG and natural gas trading operations supporting domestic and international markets.',
      features: ['LPG Distribution', 'Natural Gas Supply', 'Infrastructure Development', 'Market Expansion']
    },
    {
      icon: FiShip,
      title: 'Dry Bulk Commodities',
      description: 'Trading and logistics for various dry bulk commodities complementing our energy portfolio.',
      features: ['Commodity Trading', 'Shipping Solutions', 'Port Operations', 'Storage Management']
    }
  ];

  const marketPresence = [
    { region: 'Nigeria', description: 'Primary market with extensive operations' },
    { region: 'West Africa', description: 'Regional trading and distribution network' },
    { region: 'Central Africa', description: 'Strategic partnerships and supply agreements' },
    { region: 'Europe', description: 'International trading desk and partnerships' },
    { region: 'Mauritius', description: 'Regional hub for African operations' }
  ];

  const capabilities = [
    {
      icon: FiBarChart3,
      title: 'Market Intelligence',
      description: 'Advanced analytics and market research to identify opportunities and manage risks effectively.'
    },
    {
      icon: FiGlobe,
      title: 'Global Network',
      description: 'Extensive network of suppliers, customers, and partners across key energy markets.'
    },
    {
      icon: FiTrendingUp,
      title: 'Risk Management',
      description: 'Sophisticated risk management frameworks to protect against market volatility.'
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
            backgroundImage: `url('https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
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
              <SafeIcon icon={FiTrendingUp} className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Trading & <span className="text-secondary-500">Activities</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Global energy trading across crude oil, refined petroleum products, 
              gas, and dry bulk commodities with strategic market presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trading Overview */}
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
                Global Energy Trading Excellence
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Hyde Energy's trading division operates across multiple energy sectors, 
                  leveraging our deep market knowledge and strategic partnerships to deliver 
                  value for our clients and stakeholders.
                </p>
                <p>
                  Our experienced trading team combines physical and financial market expertise 
                  to optimize supply chains, manage risks, and capture opportunities across 
                  volatile energy markets.
                </p>
                <p>
                  With operations spanning West and Central Africa, and international presence 
                  in key markets, we provide comprehensive trading solutions tailored to 
                  our clients' specific needs.
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
                src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Energy Trading"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent rounded-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trading Activities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Trading Activities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive trading solutions across the energy value chain.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tradingActivities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <SafeIcon icon={activity.icon} className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {activity.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {activity.description}
                </p>
                <div className="space-y-2">
                  {activity.features.map((feature, featureIndex) => (
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

      {/* Market Presence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Global Market Presence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic presence across key energy markets in Africa and beyond.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketPresence.map((market, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 text-center hover:bg-primary-50 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {market.region}
                </h3>
                <p className="text-gray-600 text-sm">
                  {market.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Core Trading Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced capabilities that drive our trading success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={capability.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-secondary-500">
                  {capability.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {capability.description}
                </p>
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
              Partner with Our Trading Team
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Leverage our expertise and market presence for your energy trading needs.
            </p>
            <button className="bg-white text-primary-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Contact Trading Desk
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Trading;