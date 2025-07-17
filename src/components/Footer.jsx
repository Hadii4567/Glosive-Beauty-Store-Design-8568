import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiTwitter, FiFacebook, FiHeart } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-white to-purple-200 rounded-full flex items-center justify-center">
                <span className="text-purple-800 font-bold text-xl">G</span>
              </div>
              <span className="text-2xl font-bold">Glosive</span>
            </div>
            <p className="text-purple-100 leading-relaxed">
              Premium health and beauty products that enhance your natural radiance. 
              Discover the perfect blend of nature and science.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-purple-200 hover:text-white transition-colors"
              >
                <SafeIcon icon={FiInstagram} className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-purple-200 hover:text-white transition-colors"
              >
                <SafeIcon icon={FiTwitter} className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-purple-200 hover:text-white transition-colors"
              >
                <SafeIcon icon={FiFacebook} className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Products</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Skincare</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Makeup</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Haircare</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Supplements</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Wellness</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="w-5 h-5 text-purple-200" />
                <span className="text-purple-100">hello@glosive.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-purple-200" />
                <span className="text-purple-100">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-purple-200" />
                <span className="text-purple-100">123 Beauty Street, NY 10001</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-purple-700 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between"
        >
          <p className="text-purple-200 text-sm">
            © 2024 Glosive. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-purple-200 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <SafeIcon icon={FiHeart} className="w-4 h-4 text-red-400" />
            <span>for beautiful people</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;