import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';

const { FiMapPin, FiPhone, FiMail, FiNavigation, FiClock, FiBriefcase, FiGlobe } = FiIcons;

const Locations = () => {
  const headOffice = {
    name: 'Hyde Energy Limited - Head Office',
    address: '3rd Floor, Canton Concourse Building, 12 Landbridge Avenue, Oniru, Victoria Island, Lagos, Nigeria',
    phone: ['+234 2012956490', '+234 2012955063', '+234 7078699091'],
    email: 'customerexperience@hydeenergyltd.com',
    hours: 'Monday - Friday: 8:00 AM - 5:00 PM',
    mapUrl: 'https://maps.google.com/?q=Hyde+Energy+Limited+Victoria+Island+Lagos+Nigeria',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  };

  const officeLocations = [
    {
      name: 'Lagos Office',
      address: '3rd Floor, Canton Concourse Building, 12 Landbridge Avenue, Oniru, Victoria Island, Lagos, Nigeria',
      phone: '+234 2012956490',
      email: 'lagos@hydeenergyltd.com',
      image: 'https://images.unsplash.com/photo-1577948000111-9c970dfe3743?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Abuja Office',
      address: 'Plot 598 Kashim Ibrahim Way, Wuse 2, Abuja, Nigeria',
      phone: '+234 2012955063',
      email: 'abuja@hydeenergyltd.com',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Port Harcourt Office',
      address: 'GRA, Port Harcourt, Nigeria',
      phone: '+234 7078699091',
      email: 'portharcourt@hydeenergyltd.com',
      image: 'https://images.unsplash.com/photo-1580094333632-438bdc04f79f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'London Office',
      address: 'City of London, UK',
      phone: '+44 20 1234 5678',
      email: 'london@hydeenergyltd.com',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const retailLocations = [
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
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')` }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <SafeIcon icon={FiMapPin} className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-secondary-500">Locations</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Find Hyde Energy offices and retail locations across Nigeria and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Head Office Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Head Office</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our corporate headquarters in the heart of Victoria Island, Lagos.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={headOffice.image}
                  alt="Hyde Energy Head Office"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{headOffice.name}</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <SafeIcon icon={FiMapPin} className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">{headOffice.address}</p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    {headOffice.phone.map((phone, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <SafeIcon icon={FiPhone} className="w-5 h-5 text-primary-500 flex-shrink-0" />
                        <a href={`tel:${phone}`} className="text-gray-600 hover:text-primary-500 transition-colors">
                          {phone}
                        </a>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center space-x-3">
                    <SafeIcon icon={FiMail} className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <a
                      href={`mailto:${headOffice.email}`}
                      className="text-gray-600 hover:text-primary-500 transition-colors"
                    >
                      {headOffice.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <SafeIcon icon={FiClock} className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <p className="text-gray-600">{headOffice.hours}</p>
                  </div>
                </div>
                <a
                  href={headOffice.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <SafeIcon icon={FiNavigation} className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Office Locations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hyde Energy maintains a strategic presence across key markets to serve our clients effectively.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {officeLocations.map((office, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48">
                  <img src={office.image} alt={office.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white text-primary-500 px-3 py-1 rounded-full text-sm font-medium">
                      {office.name.split(' ')[0]}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{office.name}</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start space-x-3">
                      <SafeIcon icon={FiMapPin} className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600 text-sm">{office.address}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <SafeIcon icon={FiPhone} className="w-5 h-5 text-primary-500 flex-shrink-0" />
                      <a
                        href={`tel:${office.phone}`}
                        className="text-gray-600 text-sm hover:text-primary-500 transition-colors"
                      >
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <SafeIcon icon={FiMail} className="w-5 h-5 text-primary-500 flex-shrink-0" />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-gray-600 text-sm hover:text-primary-500 transition-colors"
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>
                  <button className="w-full flex items-center justify-center space-x-2 bg-gray-100 hover:bg-primary-500 text-gray-700 hover:text-white px-4 py-2 rounded-lg transition-colors text-sm">
                    <SafeIcon icon={FiNavigation} className="w-4 h-4" />
                    <span>View on Map</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Retail Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Retail Locations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find Hyde Energy retail stations across Nigeria.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {retailLocations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 6) * 0.1 }}
                className="bg-gray-50 rounded-lg p-4 hover:bg-primary-50 transition-colors duration-300 hover:shadow-md"
              >
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiMapPin} className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600 text-sm leading-relaxed">{location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Global Presence</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hyde Energy's strategic international footprint.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary-500/10 backdrop-blur-sm rounded-xl p-6 border border-primary-500/20"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-secondary-500 rounded-lg flex items-center justify-center">
                  <SafeIcon icon={FiGlobe} className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-500">West Africa</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Comprehensive operations across Nigeria with strategic presence in neighboring countries.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary-500/30 text-white px-2 py-1 rounded text-xs">Nigeria</span>
                <span className="bg-primary-500/30 text-white px-2 py-1 rounded text-xs">Ghana</span>
                <span className="bg-primary-500/30 text-white px-2 py-1 rounded text-xs">Togo</span>
                <span className="bg-primary-500/30 text-white px-2 py-1 rounded text-xs">Benin</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-primary-500/10 backdrop-blur-sm rounded-xl p-6 border border-primary-500/20"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-lime-500 rounded-lg flex items-center justify-center">
                  <SafeIcon icon={FiBriefcase} className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-lime-500">International Offices</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Strategic international presence to facilitate global energy trading operations.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary-500/30 text-white px-2 py-1 rounded text-xs">London, UK</span>
                <span className="bg-primary-500/30 text-white px-2 py-1 rounded text-xs">Malta</span>
                <span className="bg-primary-500/30 text-white px-2 py-1 rounded text-xs">Mauritius</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-primary-500/10 backdrop-blur-sm rounded-xl p-6 border border-primary-500/20"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <SafeIcon icon={FiMapPin} className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-blue-500">Storage Facilities</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Strategic storage and terminal facilities across key locations.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary-500/30 text-white px-2 py-1 rounded text-xs">Lagos Terminal</span>
                <span className="bg-primary-500/30 text-white px-2 py-1 rounded text-xs">Port Harcourt</span>
                <span className="bg-primary-500/30 text-white px-2 py-1 rounded text-xs">West Africa Network</span>
              </div>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Connect With Us</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Reach out to our team for more information about our locations and services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+2342012956490"
                className="bg-white text-primary-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5" />
                <span>Call Us</span>
              </a>
              <a
                href="mailto:customerexperience@hydeenergyltd.com"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <SafeIcon icon={FiMail} className="w-5 h-5" />
                <span>Email Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Locations;