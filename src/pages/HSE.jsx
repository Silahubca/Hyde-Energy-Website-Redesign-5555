import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';

const { FiShield, FiUsers, FiTarget, FiAward, FiCheckCircle, FiThumbsUp } = FiIcons;

const HSE = () => {
  const policies = [
    {
      icon: FiShield,
      title: 'Health & Safety',
      description: 'Ensuring the health and safety of our employees, contractors, and communities through rigorous protocols and continuous training.'
    },
    {
      icon: FiUsers,
      title: 'Environmental Protection',
      description: 'Minimizing our environmental footprint through responsible operations, emissions reduction, and waste management programs.'
    },
    {
      icon: FiTarget,
      title: 'Compliance',
      description: 'Meeting and exceeding all applicable laws, regulations, and industry standards across our operations.'
    }
  ];

  const commitments = [
    'Zero harm to people, assets, and the environment',
    'Continuous improvement of HSE management systems',
    'Regular training and awareness programs',
    'Transparent reporting of incidents and near-misses',
    'Integration of HSE considerations into all business decisions',
    'Engagement with communities on HSE matters'
  ];

  const certifications = [
    {
      name: 'ISO 45001',
      description: 'Occupational Health and Safety Management System',
      year: '2021'
    },
    {
      name: 'ISO 14001',
      description: 'Environmental Management System',
      year: '2020'
    },
    {
      name: 'ISO 9001',
      description: 'Quality Management System',
      year: '2019'
    }
  ];

  const initiatives = [
    {
      title: 'Carbon Footprint Reduction',
      description: 'Implementing measures to reduce greenhouse gas emissions across our operations.',
      metrics: '15% reduction in carbon emissions since 2019'
    },
    {
      title: 'Community Safety Programs',
      description: 'Educating local communities on safety practices around our facilities.',
      metrics: '5,000+ community members trained'
    },
    {
      title: 'Waste Management',
      description: 'Comprehensive waste reduction and recycling programs across all facilities.',
      metrics: '70% waste reduction achieved'
    },
    {
      title: 'Water Conservation',
      description: 'Implementing water-saving technologies and processes.',
      metrics: '40% reduction in water usage'
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
            backgroundImage: `url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
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
              <SafeIcon icon={FiShield} className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Health, Safety & <span className="text-secondary-500">Environment</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Our commitment to operational excellence through world-class 
              health, safety, and environmental practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* HSE Policy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our HSE Policy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Hyde Energy, health, safety, and environmental protection are fundamental 
              to our business principles and operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {policies.map((policy, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors duration-300">
                  <SafeIcon 
                    icon={policy.icon} 
                    className="w-8 h-8 text-primary-500 group-hover:text-white transition-colors duration-300" 
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {policy.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {policy.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Commitments
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Hyde Energy is committed to conducting business in a manner that protects 
                the health and safety of our employees, contractors, customers, and the 
                communities in which we operate, while preserving the environment.
              </p>
              <div className="space-y-4">
                {commitments.map((commitment, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">{commitment}</p>
                  </motion.div>
                ))}
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
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Safety First"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent rounded-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our operations meet and exceed international standards for health, 
              safety, and environmental management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((certification, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 text-center border border-gray-100 hover:border-primary-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={FiAward} className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {certification.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {certification.description}
                </p>
                <div className="inline-block px-4 py-2 bg-primary-50 rounded-full text-primary-500 text-sm font-medium">
                  Certified {certification.year}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HSE Initiatives */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              HSE Initiatives & Performance
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our continuous improvement programs and measurable results.
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
                  <span className="text-sm font-semibold text-lime-400">Results: </span>
                  <span className="text-sm text-white">{initiative.metrics}</span>
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
              Safety is Everyone's Responsibility
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join us in our commitment to maintaining the highest standards of 
              health, safety, and environmental protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-primary-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <SafeIcon icon={FiThumbsUp} className="w-5 h-5" />
                <span>Download HSE Policy</span>
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                View Performance Reports
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HSE;