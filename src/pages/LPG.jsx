import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';

const { FiDroplet, FiHome, FiTruck, FiLeaf, FiZap, FiShield } = FiIcons;

const LPG = () => {
  const benefits = [
    {
      icon: FiLeaf,
      title: 'Climate-Friendly',
      description: 'LPG is a clean-burning fuel that significantly reduces carbon emissions compared to traditional fuels.',
      stats: '50% less CO2 emissions'
    },
    {
      icon: FiZap,
      title: 'Efficient Energy',
      description: 'High energy content and efficient combustion make LPG ideal for various applications.',
      stats: '95% combustion efficiency'
    },
    {
      icon: FiShield,
      title: 'Safe & Reliable',
      description: 'Advanced safety systems and proper handling procedures ensure safe LPG operations.',
      stats: 'ISO safety standards'
    },
    {
      icon: FiHome,
      title: 'Versatile Applications',
      description: 'Suitable for cooking, heating, transportation, and industrial processes.',
      stats: 'Multi-purpose fuel'
    }
  ];

  const applications = [
    {
      icon: FiHome,
      title: 'Domestic Use',
      description: 'Clean and efficient cooking and heating solutions for homes.',
      features: ['Cooking Gas', 'Water Heating', 'Space Heating', 'Backup Power']
    },
    {
      icon: FiTruck,
      title: 'Transportation',
      description: 'Alternative fuel for vehicles reducing emissions and costs.',
      features: ['Autogas', 'Fleet Conversion', 'Fuel Savings', 'Emission Reduction']
    },
    {
      icon: FiZap,
      title: 'Power Generation',
      description: 'Reliable power generation for various applications.',
      features: ['Backup Generators', 'Remote Power', 'Peak Shaving', 'Grid Support']
    },
    {
      icon: FiDroplet,
      title: 'Industrial',
      description: 'Process heating and industrial applications.',
      features: ['Process Heat', 'Drying Systems', 'Metalworking', 'Chemical Processing']
    }
  ];

  const services = [
    {
      title: 'Supply Chain Development',
      description: 'Building comprehensive LPG supply chain infrastructure across Nigeria.',
      icon: FiTruck
    },
    {
      title: 'Transportation Solutions',
      description: 'Efficient and safe LPG transportation and logistics services.',
      icon: FiTruck
    },
    {
      title: 'Gas Dispensing Units',
      description: 'Autonomous gas dispensing units for convenient LPG access.',
      icon: FiDroplet
    },
    {
      title: 'Refilling Plants',
      description: 'Strategic refilling plants to ensure consistent LPG availability.',
      icon: FiHome
    }
  ];

  const initiatives = [
    {
      title: 'Capacity Building',
      description: 'Investing in infrastructure and human capacity to support LPG expansion.',
      impact: 'Increased access to clean energy'
    },
    {
      title: 'Technology Innovation',
      description: 'Implementing advanced LPG delivery and distribution solutions.',
      impact: 'Improved efficiency and safety'
    },
    {
      title: 'Community Outreach',
      description: 'Educating communities about LPG benefits and safe usage practices.',
      impact: 'Enhanced adoption rates'
    },
    {
      title: 'Partnership Development',
      description: 'Collaborating with partners to increase indigenous participation.',
      impact: 'Sustainable industry growth'
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
            backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
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
              <SafeIcon icon={FiDroplet} className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              LPG <span className="text-secondary-500">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Climate-friendly LPG distribution and solutions, increasing availability 
              and accessibility of clean energy across Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose LPG?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              LPG offers numerous advantages as a clean, efficient, and versatile energy solution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500 transition-colors duration-300">
                  <SafeIcon icon={benefit.icon} className="w-8 h-8 text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="bg-primary-50 rounded-lg p-3">
                  <span className="text-sm font-semibold text-primary-600">
                    {benefit.stats}
                  </span>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              LPG Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Versatile applications across domestic, commercial, and industrial sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((application, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <SafeIcon icon={application.icon} className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {application.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {application.description}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {application.features.map((feature, featureIndex) => (
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
              Our LPG Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive LPG solutions from supply chain to end-user delivery.
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
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our LPG Initiatives
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic initiatives to expand LPG accessibility and adoption across Nigeria.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-primary-500/10 backdrop-blur-sm rounded-xl p-6 border border-primary-500/20"
              >
                <h3 className="text-xl font-semibold mb-3 text-secondary-500">
                  {initiative.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {initiative.description}
                </p>
                <div className="bg-primary-500/20 rounded-lg p-3">
                  <span className="text-sm font-semibold text-lime-400">Impact: </span>
                  <span className="text-sm text-white">{initiative.impact}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-lime-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Environmental Benefits
              </h2>
              <div className="space-y-6 text-white/90 leading-relaxed">
                <p>
                  LPG is one of the cleanest fossil fuels available, producing significantly 
                  lower emissions than traditional fuels and contributing to improved air quality.
                </p>
                <p>
                  By promoting LPG adoption, we're helping Nigeria transition to cleaner 
                  energy sources while reducing deforestation and indoor air pollution.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white/20 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">50% Less CO2</h4>
                  <p className="text-sm text-white/80">Compared to coal</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">90% Less Particulates</h4>
                  <p className="text-sm text-white/80">Cleaner combustion</p>
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
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Clean Energy"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-transparent rounded-xl"></div>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Switch to Clean LPG Today
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join the clean energy revolution with Hyde Energy's reliable LPG solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-primary-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Find LPG Dealer
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default LPG;