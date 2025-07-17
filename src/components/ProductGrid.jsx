import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiHeart, FiShoppingCart, FiEye, FiStar } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';

const ProductGrid = () => {
  const { products } = useProducts();
  const { addToCart } = useCart();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Featured Products
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover our carefully curated collection of premium health and beauty products
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            {/* Product Image */}
            <div className="relative h-64 overflow-hidden">
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Overlay Actions */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors"
                  >
                    <SafeIcon icon={FiHeart} className="w-5 h-5 text-gray-700" />
                  </motion.button>
                  
                  <Link to={`/product/${product.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors"
                    >
                      <SafeIcon icon={FiEye} className="w-5 h-5 text-gray-700" />
                    </motion.button>
                  </Link>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => addToCart(product)}
                    className="bg-purple-600 p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
                  >
                    <SafeIcon icon={FiShoppingCart} className="w-5 h-5 text-white" />
                  </motion.button>
                </div>
              </div>

              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.badge}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-purple-600 font-semibold">{product.category}</span>
                <div className="flex items-center space-x-1">
                  <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-600">{product.rating}</span>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {product.name}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {product.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-purple-600">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => addToCart(product)}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                >
                  Add to Cart
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProductGrid;