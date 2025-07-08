import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin } = FiIcons;
const { FaFacebook, FaLinkedin, FaInstagram } = FaIcons;

const Footer = () => {
  const locations = [
    'Alagbado – 49, Ibari Road, Ait, Alagbado, Lagos.',
    'Egbeda – 97 Idimu Road, Okunola Bus Stop, Egbeda.',
    'Ikeja Du – Mammy Market, Ikeja Cantonment, Lagos.',
    'Ikeja Skid – Cbq 78, Napex Ikeja Cantonment, Lagos.',
    'Jaji – Jaji Military Cantonment, First Gate After Conoil, Kaduna Zaria Express Way.',
    'Keffi – Abuja-keffi Express Way New Nyanya.',
    'Makurdi – Opposite Corporal Below Quarters. Ewart Smith Road, Nigeria Air Force Base Makurdi, Benue State.',
    'Naf Kaduna – Hyde Gas Naf Base Kaduna By 401 Gate',
    'Oko-oba – 13 Akinwunmi Street, Oko Oba Agege, Lagos',
    'Ribadu – New Barrack Nda Old Site, Kaduna',
    'Uni- Agric – Dispensing Unit South Core, Joseph Suawan Tarka University, Benue State.',
    'Western Foreshore – Western Foreshore Chief Yemi Idowu Way, Lekki, Lagos',
    'Wuse – Plot 598 Kashim Ibrahim Way, Wuse2 Abuja',
    'Zuba – Behind Nnpc Filling Station, Lado Dan Kogi Zuba—Abuja'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751989251302-logo%20hydeen.png"
              alt="Hyde Energy"
              className="h-10 w-auto filter brightness-0 invert"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              To be the integrated energy company of choice in our chosen markets, delivering energy safely and efficiently
              across Africa.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/HydeEnergy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <SafeIcon icon={FaFacebook} className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/hydeenergylimited"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <SafeIcon icon={FaLinkedin} className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/hydeenergy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <SafeIcon icon={FaInstagram} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/our-people" className="text-gray-300 hover:text-white transition-colors">
                  Our People
                </Link>
              </li>
              <li>
                <Link to="/trading" className="text-gray-300 hover:text-white transition-colors">
                  Trading
                </Link>
              </li>
              <li>
                <Link to="/retail" className="text-gray-300 hover:text-white transition-colors">
                  Retail
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-gray-300 hover:text-white transition-colors">
                  Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Products & Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products & Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/lubricants" className="text-gray-300 hover:text-white transition-colors">
                  Lubricants
                </Link>
              </li>
              <li>
                <Link to="/lpg" className="text-gray-300 hover:text-white transition-colors">
                  LPG
                </Link>
              </li>
              <li>
                <Link to="/terminals" className="text-gray-300 hover:text-white transition-colors">
                  Terminals & Storage
                </Link>
              </li>
              <li>
                <Link to="/hse" className="text-gray-300 hover:text-white transition-colors">
                  HSE
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-white transition-colors">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Head Office:</p>
                  <p className="text-gray-300 text-sm">3rd Floor, Canton Concourse Building,</p>
                  <p className="text-gray-300 text-sm">12 Landbridge Avenue, Oniru,</p>
                  <p className="text-gray-300 text-sm">Victoria Island, Lagos, Nigeria</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-primary-500" />
                <p className="text-gray-300 text-sm">+234 2012956490</p>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-primary-500" />
                <p className="text-gray-300 text-sm">+234 7078699091</p>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="w-5 h-5 text-primary-500" />
                <p className="text-gray-300 text-sm">customerexperience@hydeenergyltd.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Locations */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-lg font-semibold mb-6">Our Locations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {locations.map((location, index) => (
              <div key={index} className="text-gray-300 text-sm">
                {location}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Hyde Energy Limited. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;