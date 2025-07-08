import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';

const { FiLinkedin, FiMail, FiUsers } = FiIcons;

const OurPeople = () => {
  const executives = [
    {
      name: 'Femi Oladehin',
      role: 'Chairman',
      description: 'Femi has over 25 years of research, portfolio management, private equity, and investment banking experience across the international and West African markets. He has advised on transactions in excess of US$10 billion, including the sale of two midstream gas infrastructure companies and a downstream marketing company.',
      image: 'https://hydeenergyltd.com/wp-content/uploads/2021/04/femi-600x600.jpg'
    },
    {
      name: 'Oladimeji Edwards',
      role: 'Chief Executive',
      description: 'With well over three decades of experience in the global oil and gas industry, Dimeji Edwards has overall strategic oversight for the effective running of the Hyde Energy Group of Companies.',
      image: 'https://hydeenergyltd.com/wp-content/uploads/2021/03/hp2.jpg'
    },
    {
      name: 'Aderemi Williams',
      role: 'Executive Director',
      description: 'Aderemi Williams leads the Company\'s Sales and Marketing business and provides overall supervisory oversight on the retail and commercial sales activities of the Company\'s product offerings which include white products, LPG and lubricants. Prior to joining Hyde, Aderemi held managerial positions in several companies, including Global Haulage Resources Limited, Commodity Support Services Limited and SGS Inspection Services.',
      image: 'https://hydeenergyltd.com/wp-content/uploads/2021/03/hp4.jpg'
    },
    {
      name: 'Olubunmi Oluwole',
      role: 'Non-Executive Director',
      description: 'Olubunmi was the Head of Corporate Services. She has over 23 years of experience in the financial services industry with a focus on human capital management from Standard Chartered Bank Nig. Ltd. and GTBank Plc. Her remit covers the people, culture, brand, and facilities of the group. She has a degree in sociology & anthropology and is an associate of the Chartered Institute of Personnel Development.',
      image: 'https://hydeenergyltd.com/wp-content/uploads/2021/03/hp8.jpg'
    },
    {
      name: 'Kayode Agunbiade',
      role: 'Chief Financial Officer',
      description: 'Kayode is the Chief Financial Officer at Hyde Energy Limited. He has 27 years of working experience with 20 years of post-qualification experience as a chartered accountant. He oversees the trade finance, financial reporting, audit, and management of the group. He is a chemical engineering graduate of Obafemi Awolowo University with an MBA in finance.',
      image: 'https://hydeenergyltd.com/wp-content/uploads/2022/07/Mr.-Kayode-Agunbiade-600x600.jpg'
    },
    {
      name: 'Adedayo Harold-Sodipo',
      role: 'Head, Business Development Management',
      description: 'Dayo is the Head of Business Development at Hyde Energy. She has over 10 years of working experience in the oil & gas industry. Prior to joining Hyde, she served in several supervisory roles in the largest indigenous multi-billion dollar oil & gas company, where she started her career.',
      image: 'https://hydeenergyltd.com/wp-content/uploads/2021/03/hp10.jpg'
    },
    {
      name: 'Abdulwahab Oseni',
      role: 'Head, Legal & Compliance',
      description: 'He holds an LLM in Corporate & Financial Law from the University of Glasgow, UK. He is a Certified Corporate Compliance and Ethics Professional and an Associate of the Chartered Institute of Arbitrators, UK. Before joining Hyde, he was with the Nigerian Stock Exchange, where he was a key member of the Legal & Company Secretarial Department.',
      image: 'https://hydeenergyltd.com/wp-content/uploads/2021/03/hp5.jpg'
    },
    {
      name: 'Olumuyiwa Akande',
      role: 'Head, LPG',
      description: 'Olumuyiwa oversees the LPG business. He is responsible for the development and implementation of Hyde\'s LPG expansion projects in Nigeria. He has over 12 years of experience driving sales and marketing in the FMCG industry. He has an MBA in marketing with a BSc and an MSc in geology.',
      image: 'https://hydeenergyltd.com/wp-content/uploads/2022/11/Olumuyiwa-Akande-600x600.jpg'
    },
    {
      name: 'Ayobami Olowolayemo',
      role: 'Head, Lubricants',
      description: 'Ayobami heads the Lubricant Business (Commercial and Retail). He has extensive experience in the development of strategic route-to-market, sales channel, brand management, and salesforce competency across FMCG and pharmaceutical industries in Nigeria. He holds an MBA in strategic marketing and is a member of the Chartered Institute of Marketing (UK).',
      image: 'https://hydeenergyltd.com/wp-content/uploads/2023/07/Ayobami-600x600.jpg'
    },
    {
      name: 'Adewumi Alphonso',
      role: 'Head, Corporate Services',
      description: 'Adewumi serves as the Head of Corporate Services for Hyde Energy. She oversees the human resources, administrative, procurement, CSR, IT, and customer experience functions of all Hyde entities. She is responsible for managing the people, culture, and values of the group.',
      image: 'https://hydeenergyltd.com/wp-content/uploads/2025/03/Adewumi-600x600.jpg'
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
            backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
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
              <SafeIcon icon={FiUsers} className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-secondary-500">People</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Meet the experienced team driving Hyde Energy's vision and creating value 
              across Africa's energy landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Leadership Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our leadership team combines decades of industry experience with innovative thinking 
              to drive sustainable growth and deliver exceptional value to our stakeholders. 
              Together, they represent a wealth of expertise across all facets of the energy sector.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Executive Team Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executives.map((executive, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={executive.image}
                    alt={executive.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {executive.name}
                  </h3>
                  <p className="text-primary-500 font-semibold mb-4">
                    {executive.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                    {executive.description}
                  </p>
                  
                  <div className="flex items-center space-x-3 mt-6 pt-4 border-t border-gray-100">
                    <button className="text-gray-400 hover:text-primary-500 transition-colors">
                      <SafeIcon icon={FiLinkedin} className="w-5 h-5" />
                    </button>
                    <button className="text-gray-400 hover:text-primary-500 transition-colors">
                      <SafeIcon icon={FiMail} className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              What Drives Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">25+</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-secondary-500">Years of Experience</h3>
                <p className="text-gray-300">
                  Average industry experience across our leadership team
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">100+</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-lime-500">Team Members</h3>
                <p className="text-gray-300">
                  Dedicated professionals working across our operations
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">7</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-500">Countries</h3>
                <p className="text-gray-300">
                  International presence across key markets
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default OurPeople;
