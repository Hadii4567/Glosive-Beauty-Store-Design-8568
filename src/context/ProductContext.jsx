import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Radiant Glow Serum",
      description: "A luxurious anti-aging serum infused with vitamin C and hyaluronic acid to restore your skin's natural radiance.",
      price: 89.99,
      originalPrice: 119.99,
      category: "Skincare",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop"
      ],
      badge: "Best Seller",
      rating: 4.8
    },
    {
      id: 2,
      name: "Velvet Matte Lipstick",
      description: "Long-lasting, highly pigmented matte lipstick that provides full coverage with a comfortable, non-drying formula.",
      price: 24.99,
      originalPrice: 34.99,
      category: "Makeup",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop"
      ],
      badge: "New",
      rating: 4.6
    },
    {
      id: 3,
      name: "Nourishing Hair Mask",
      description: "Deep conditioning hair mask enriched with argan oil and keratin proteins for silky, healthy hair.",
      price: 32.99,
      category: "Haircare",
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop"
      ],
      rating: 4.7
    },
    {
      id: 4,
      name: "Collagen Boost Supplement",
      description: "Premium collagen peptides supplement to support skin elasticity, joint health, and overall wellness.",
      price: 45.99,
      originalPrice: 59.99,
      category: "Supplements",
      image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=400&fit=crop"
      ],
      badge: "Popular",
      rating: 4.9
    },
    {
      id: 5,
      name: "Gentle Cleansing Foam",
      description: "Sulfate-free cleansing foam that removes impurities while maintaining skin's natural moisture balance.",
      price: 28.99,
      category: "Skincare",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop"
      ],
      rating: 4.5
    },
    {
      id: 6,
      name: "Illuminating Foundation",
      description: "Buildable coverage foundation with SPF 30 that gives your skin a natural, luminous finish.",
      price: 42.99,
      originalPrice: 52.99,
      category: "Makeup",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop"
      ],
      badge: "Limited Edition",
      rating: 4.4
    },
    {
      id: 7,
      name: "Revitalizing Eye Cream",
      description: "Advanced eye cream with peptides and caffeine to reduce dark circles and fine lines.",
      price: 65.99,
      category: "Skincare",
      image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop"
      ],
      rating: 4.6
    },
    {
      id: 8,
      name: "Wellness Tea Blend",
      description: "Organic herbal tea blend with adaptogens and antioxidants to support overall wellness and relaxation.",
      price: 18.99,
      category: "Wellness",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=400&h=400&fit=crop"
      ],
      badge: "Organic",
      rating: 4.8
    }
  ]);

  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: Date.now(),
      images: [product.image]
    };
    setProducts(prev => [...prev, newProduct]);
  };

  const updateProduct = (id, updatedProduct) => {
    setProducts(prev => 
      prev.map(product => 
        product.id === id 
          ? { ...product, ...updatedProduct, images: [updatedProduct.image] }
          : product
      )
    );
  };

  const deleteProduct = (id) => {
    setProducts(prev => prev.filter(product => product.id !== id));
  };

  return (
    <ProductContext.Provider value={{
      products,
      addProduct,
      updateProduct,
      deleteProduct
    }}>
      {children}
    </ProductContext.Provider>
  );
};