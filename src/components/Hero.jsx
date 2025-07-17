import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiStar, FiShield, FiHeart } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-lg"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl lg:text-7xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-green-600 bg-clip-text text-transparent">
                Glow
              </span>
              <br />
              <span className="text-gray-800">Naturally</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-600 mt-6 max-w-2xl"
            >
              Discover premium health and beauty products that enhance your natural radiance. 
              Curated with love, crafted for perfection.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-2 shadow-lg"
              >
                <span>Shop Now</span>
                <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-colors"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start"
            >
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiStar} className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-600">Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiShield} className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">100% Natural</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiHeart} className="w-5 h-5 text-red-500" />
                <span className="text-gray-600">Cruelty Free</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Product Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Main Product */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotateY: [0, 15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-64 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl shadow-2xl flex items-center justify-center transform perspective-1000 rotate-y-12">
                  <div className="w-48 h-64 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">Glosive</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -30, 0],
                  x: [0, 20, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-10 left-10 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full shadow-lg"
              />

              <motion.div
                animate={{
                  y: [0, 25, 0],
                  x: [0, -15, 0],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute bottom-20 right-10 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-full shadow-lg"
              />

              <motion.div
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/2 right-0 w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;