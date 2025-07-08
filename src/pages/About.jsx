import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';

const { FiTarget, FiCompass, FiHeart, FiUsers, FiTrendingUp, FiGlobe } = FiIcons;

const About = () => {
  const journey = [
    {
      year: '2013',
      title: 'Foundation',
      description: 'Began operations in Nigeria, importing and exporting LPG and selling petroleum products. Acquired a tank farm and secured an LPG export contract.'
    },
    {
      year: '2014',
      title: 'Growth & Consolidation',
      description: 'Increased client base and transaction volumes, building a reputation and securing crude oil and fuel oil export contracts. Explored opportunities in the oil and gas value chain.'
    },
    {
      year: '2015',
      title: 'Expansion',
      description: 'Developed additional distribution channels, expanding the retail network with "Home is where Hyde is" and securing throughput arrangements.'
    },
    {
      year: '2016',
      title: 'Diversification',
      description: 'Introduced a range of own-brand lubricants and made strategic hires to strengthen our capabilities.'
    },
    {
      year: '2017',
      title: 'Opportunity',
      description: 'Expanded LPG distribution operations and invested in equipment and storage infrastructure.'
    },
    {
      year: '2019',
      title: 'Resilience',
      description: 'Expanded market share in petroleum product supply and distribution, strengthening our international presence.'
    },
    {
      year: '2020',
      title: 'Innovation',
      description: 'Created new LPG delivery and distribution solutions and partnered to increase indigenous participation in the Nigerian Oil & Gas sector.'
    }
  ];

  const values = [
    {
      icon: FiHeart,
      title: 'Integrity',
      description: 'Doing what is right and ensuring transparency in all our operations.'
    },
    {
      icon: FiTrendingUp,
      title: 'Innovation',
      description: 'Encouraging creative thinking and experimentation to drive progress.'
    },
    {
      icon: FiUsers,
      title: 'Collaboration',
      description: 'Fostering shared responsibility and promoting cooperation across teams.'
    },
    {
      icon: FiTarget,
      title: 'Value Integration',
      description: 'Each business element adds value to the overall operations.'
    },
    {
      icon: FiCompass,
      title: 'Quality',
      description: 'Committed to delivering quality products and solutions for seamless customer experience.'
    },
    {
      icon: FiGlobe,
      title: 'Accountability',
      description: 'Taking ownership of work, actions, and decisions at every level.'
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
            backgroundImage: `url('https://images.unsplash.com/photo-1497436072909-f5e4be1713a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-secondary-500">Hyde Energy</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Pioneering Africa's energy transformation through innovation, 
              integrity, and sustainable partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
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
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Hyde Energy's vision is "To be the integrated energy company of choice in our chosen markets." 
                  We leverage our expertise to deliver energy safely and efficiently across Africa, 
                  building on our experienced team's deep knowledge of West and Central African oil-producing regions.
                </p>
                <p>
                  Our expansion spans various energy sectors, including crude oil, refined oil products, 
                  LPG, and dry bulk commodities. With strategic presence in Lagos, Abuja, Port Harcourt, 
                  Mauritius, London, and Malta, we maintain storage facilities across West Africa, 
                  including our Nigerian tank farm and terminal.
                </p>
                <p>
                  Our growth includes retail stations throughout Nigeria, a comprehensive range of 
                  Hyde Energy-branded lubricants, and an extensive LPG distribution system that 
                  serves communities across the continent.
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
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Hyde Energy Operations"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent rounded-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A decade of growth, innovation, and strategic expansion across Africa's energy landscape.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary-200"></div>

            <div className="space-y-12">
              {journey.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {milestone.year}
                        </span>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {milestone.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Way
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The core values that guide our operations and define our culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-500 transition-colors duration-300">
                  <SafeIcon 
                    icon={value.icon} 
                    className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors duration-300" 
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-primary-500/10 backdrop-blur-sm rounded-xl p-8 border border-primary-500/20"
            >
              <div className="w-12 h-12 bg-secondary-500 rounded-lg flex items-center justify-center mb-6">
                <SafeIcon icon={FiTarget} className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-secondary-500">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                To be the integrated energy company of choice in our chosen markets.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-primary-500/10 backdrop-blur-sm rounded-xl p-8 border border-primary-500/20"
            >
              <div className="w-12 h-12 bg-lime-500 rounded-lg flex items-center justify-center mb-6">
                <SafeIcon icon={FiCompass} className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-lime-500">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Leveraging our expertise to deliver energy safely and efficiently across Africa, 
                while building sustainable partnerships and creating value for all stakeholders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;