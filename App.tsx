
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SpecialOffers from './components/SpecialOffers';
import Menu from './components/Menu';
import Rewards from './components/Rewards';
import About from './components/About';
import CartView from './components/CartView';
import Footer from './components/Footer';
import { PIZZA_PRODUCTS } from './constants';
import { CartItem, Product } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'menu' | 'rewards' | 'about' | 'cart'>('home');
  const [cart, setCart] = useState<CartItem[]>([]);

  const bestSellers = PIZZA_PRODUCTS.filter(p => p.isPopular);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const addToCart = (product: Product, size: 'small' | 'med' | 'large') => {
    const price = product.prices[size];
    setCart(prev => {
      const existing = prev.find(item => item.productId === product.id && item.selectedSize === size);
      if (existing) {
        return prev.map(item => item === existing ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, {
        productId: product.id,
        quantity: 1,
        selectedSize: size,
        name: product.name.toUpperCase(),
        price,
        image: product.image
      }];
    });
  };

  const updateQuantity = (productId: string, size: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.productId === productId && item.selectedSize === size) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const removeItem = (productId: string, size: string) => {
    setCart(prev => prev.filter(item => !(item.productId === productId && item.selectedSize === size)));
  };

  return (
    <div className="min-h-screen">
      <Navigation 
        currentView={currentView} 
        onNavigate={setCurrentView} 
        cartCount={cartCount}
      />
      
      <main className="animate-fade-in min-h-[calc(100vh-64px)]">
        {currentView === 'home' && (
          <>
            <Hero onNavigate={setCurrentView} />
            <SpecialOffers />
            
            {/* Best Sellers Section */}
            <section className="py-20 bg-background-light dark:bg-background-dark">
              <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex items-center gap-4 mb-12">
                  <h2 className="text-4xl font-black text-[#1c110d] dark:text-white uppercase tracking-tight font-display">Best Sellers</h2>
                  <div className="h-1 flex-1 bg-primary/20 rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {bestSellers.map(product => (
                    <div key={product.id} className="group bg-white dark:bg-[#2d1b16] rounded-3xl overflow-hidden border border-[#f4eae7] dark:border-[#3d2a24] hover:shadow-2xl transition-all duration-500 hover:translate-y-[-8px]">
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                        <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-xl">
                          Hot Item
                        </div>
                      </div>
                      <div className="p-8">
                        <h3 className="text-2xl font-black mb-3 font-display uppercase group-hover:text-primary transition-colors">{product.name}</h3>
                        <p className="text-[#6b5148] dark:text-gray-400 text-sm mb-8 italic line-clamp-2">{product.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-black">TZS {product.prices.large.toLocaleString()}</span>
                          <button 
                            onClick={() => setCurrentView('menu')}
                            className="bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm hover:brightness-110 active:scale-95 transition-all shadow-md shadow-primary/20"
                          >
                            Order Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-16 text-center">
                  <button 
                    onClick={() => setCurrentView('menu')}
                    className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest hover:gap-4 transition-all"
                  >
                    View Full Menu <span className="material-symbols-outlined">arrow_right_alt</span>
                  </button>
                </div>
              </div>
            </section>
          </>
        )}
        
        {currentView === 'menu' && (
          <Menu 
            cart={cart}
            onAddToCart={addToCart}
            onUpdateQuantity={updateQuantity}
            onRemoveItem={removeItem}
            onNavigateCart={() => setCurrentView('cart')}
          />
        )}
        
        {currentView === 'rewards' && <Rewards onNavigate={setCurrentView} />}
        {currentView === 'about' && <About onNavigate={setCurrentView} />}
        
        {currentView === 'cart' && (
          <CartView 
            cart={cart}
            onUpdateQuantity={updateQuantity}
            onRemoveItem={removeItem}
            onNavigate={setCurrentView}
          />
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
