import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Categories } from './components/Categories';
import { Carousel } from './components/Carousel';
import { ProductGrid } from './components/ProductGrid';
import { Cart } from './components/Cart';
import { AuthModal } from './components/AuthModal';
import { Footer } from './components/Footer';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-50">
          <Navbar
            onOpenCart={() => setIsCartOpen(true)}
            onOpenAuth={() => setIsAuthOpen(true)}
          />
          <Categories
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          <Carousel />
          <ProductGrid category={selectedCategory} />
          <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
          <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}