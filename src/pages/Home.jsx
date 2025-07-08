import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';

const { FiArrowRight, FiUsers, FiTrendingUp, FiGlobe, FiShield, FiZap, FiDroplet } = FiIcons;

const Home = () => {
  const services = [
    {
      icon: FiTrendingUp,
      title: 'Global Trading',
      description: 'Trading in crude oil, refined petroleum products, gas, and dry bulk commodities.',
      link: '/trading'
    },
    {
      icon: FiDroplet,
      title: 'LPG Solutions',
      description: 'Climate-friendly LPG distribution and autonomous gas dispensing solutions.',
      link: '/lpg'
    },
    {
      icon: FiZap,
      title: 'Lubricants',
      description: 'Premium lubricants designed for power, protection, and performance.',
      link: '/lubricants'
    },
    {
      icon: FiShield,
      title: 'Retail Network',
      description: 'Direct sales through our expanding retail network across Nigeria.',
      link: '/retail'
    }
  ];

  const stats = [
    { number: '10+', label: 'Years of Excellence' },
    { number: '14', label: 'Strategic Locations' },
    { number: '100+', label: 'Team Members' },
    { number: '1000+', label: 'Satisfied Clients' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 lg:pt-20 w-full"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 overflow-hidden w-full">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751992877331-Homepage-new-header-image-150dpi-1-e1624454141251.png')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 via-navy-800/70 to-primary-500/30"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Powering Africa's{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary-500 to-lime-500">
                Energy Future
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              The integrated energy company of choice in our chosen markets, delivering energy solutions safely and
              efficiently across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link
                to="/about"
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2"
              >
                <span>Discover Our Story</span>
                <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-secondary-500/20 rounded-full animate-float"></div>
        <div
          className="absolute bottom-1/4 right-10 w-16 h-16 bg-lime-500/20 rounded-full animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-12 h-12 bg-blue-500/20 rounded-full animate-float"
          style={{ animationDelay: '4s' }}
        ></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary-500 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive energy solutions across the entire value chain, from trading to retail distribution.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-500 transition-colors duration-300">
                  <SafeIcon
                    icon={service.icon}
                    className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center space-x-2 text-primary-500 hover:text-primary-600 font-medium transition-colors"
                >
                  <span>Learn More</span>
                  <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-navy-900 text-white w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Vision & Mission</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-secondary-500 mb-3">Vision</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To be the integrated energy company of choice in our chosen markets.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary-500 mb-3">Mission</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Leveraging our expertise to deliver energy safely and efficiently across Africa, while building
                    sustainable partnerships and creating value for all stakeholders.
                  </p>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold mt-8 transition-all duration-300 transform hover:scale-105"
              >
                <span>Learn More About Us</span>
                <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1497436072909-f5e4be1713a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Energy Infrastructure"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent rounded-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500 w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Ready to Partner with Us?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join us in powering Africa's energy future. Let's discuss how we can work together to create sustainable
              energy solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link
                to="/contact"
                className="bg-white text-primary-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Contact Us Today</span>
                <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
              </Link>
              <Link
                to="/careers"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Explore Careers
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;