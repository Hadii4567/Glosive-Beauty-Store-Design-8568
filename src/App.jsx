import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-green-50">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/admin" element={<AdminPanel />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </ProductProvider>
  );
}

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Hero />
      <ProductGrid />
    </motion.div>
  );
}

export default App;