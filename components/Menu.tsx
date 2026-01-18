
import React, { useState } from 'react';
import { PIZZA_PRODUCTS } from '../constants';
import { Product, CartItem } from '../types';

interface MenuProps {
  cart: CartItem[];
  onAddToCart: (product: Product, size: 'small' | 'med' | 'large') => void;
  onUpdateQuantity: (productId: string, size: string, delta: number) => void;
  onRemoveItem: (productId: string, size: string) => void;
  onNavigateCart: () => void;
}

const Menu: React.FC<MenuProps> = ({ cart, onAddToCart, onUpdateQuantity, onRemoveItem, onNavigateCart }) => {
  const [selectedSizes, setSelectedSizes] = useState<Record<string, 'small' | 'med' | 'large'>>(
    PIZZA_PRODUCTS.reduce((acc, p) => ({ ...acc, [p.id]: 'small' }), {})
  );

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handleSizeChange = (productId: string, size: 'small' | 'med' | 'large') => {
    setSelectedSizes(prev => ({ ...prev, [productId]: size }));
  };

  const categories = {
    'meat': PIZZA_PRODUCTS.filter(p => p.category === 'meat'),
    'chicken': PIZZA_PRODUCTS.filter(p => p.category === 'chicken'),
    'sauces': PIZZA_PRODUCTS.filter(p => p.category === 'sides')
  };

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-8 flex gap-8">
      {/* Sidebar Cart */}
      <aside className="hidden lg:flex flex-col w-80 shrink-0 gap-6 sticky top-24 self-start h-[calc(100vh-120px)]">
        <div className="bg-white dark:bg-[#2d1b16] rounded-xl p-6 shadow-sm border border-[#f4eae7] dark:border-[#3d2a24] flex flex-col h-full overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold">Your Order</h2>
              <p className="text-xs text-[#9c5e49] dark:text-[#b08b7e]">{cart.length} item{cart.length !== 1 ? 's' : ''} selected</p>
            </div>
            <button onClick={onNavigateCart} className="text-primary hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">open_in_full</span>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto flex flex-col gap-4 no-scrollbar">
            {cart.map((item) => (
              <div key={`${item.productId}-${item.selectedSize}`} className="flex gap-3 animate-fade-in group/item border-b border-black/5 dark:border-white/5 pb-4 last:border-0">
                <div className="w-14 h-14 rounded-lg bg-cover bg-center shrink-0" style={{ backgroundImage: `url('${item.image}')` }}></div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <p className="text-sm font-bold truncate">{item.name}</p>
                    <button 
                      onClick={() => onRemoveItem(item.productId, item.selectedSize)}
                      className="text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 p-1 rounded-md transition-all active:scale-75"
                    >
                      <span className="material-symbols-outlined text-sm">delete</span>
                    </button>
                  </div>
                  <p className="text-xs text-[#9c5e49]">{item.selectedSize.charAt(0).toUpperCase() + item.selectedSize.slice(1)} • TZS {item.price.toLocaleString()}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button 
                      onClick={() => onUpdateQuantity(item.productId, item.selectedSize, -1)}
                      className="text-primary hover:bg-primary/10 rounded p-0.5 transition-colors"
                    >
                      <span className="material-symbols-outlined text-base">remove_circle</span>
                    </button>
                    <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity(item.productId, item.selectedSize, 1)}
                      className="text-primary hover:bg-primary/10 rounded p-0.5 transition-colors"
                    >
                      <span className="material-symbols-outlined text-base">add_circle</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {cart.length === 0 && (
              <div className="flex-1 flex flex-col items-center justify-center text-center opacity-30 grayscale mt-10">
                <span className="material-symbols-outlined text-6xl mb-2">shopping_basket</span>
                <p className="text-sm font-medium">Your basket is empty</p>
              </div>
            )}
          </div>
          
          <div className="mt-6 pt-6 border-t border-[#f4eae7] dark:border-[#3d2a24] space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#9c5e49]">Subtotal</span>
              <span className="font-bold">TZS {subtotal.toLocaleString()}</span>
            </div>
            <button 
              onClick={onNavigateCart}
              disabled={cart.length === 0}
              className="w-full bg-primary text-white py-4 rounded-xl font-bold text-sm shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed"
            >
              Go to Cart
            </button>
          </div>
        </div>
      </aside>

      {/* Product Content */}
      <section className="flex-1 min-w-0">
        <div className="mb-10">
          <h1 className="text-4xl font-black tracking-tight text-[#1c110d] dark:text-white mb-3 uppercase font-display">Our Menu</h1>
          <p className="text-[#9c5e49] dark:text-[#b08b7e] max-w-2xl text-lg italic">Crafted with passion, delivered with love.</p>
        </div>

        {Object.entries(categories).map(([title, products]) => (
          products.length > 0 && (
            <div key={title} className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-black text-[#1c110d] dark:text-white uppercase tracking-wider font-display">{title}</h2>
                <div className="h-[2px] flex-1 bg-[#f4eae7] dark:bg-[#3d2a24]"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {products.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onAdd={(p) => onAddToCart(p, selectedSizes[p.id])} 
                    selectedSize={selectedSizes[product.id]}
                    onSizeChange={(s) => handleSizeChange(product.id, s)}
                  />
                ))}
              </div>
            </div>
          )
        ))}
      </section>
    </div>
  );
};

interface ProductCardProps {
  product: Product;
  onAdd: (p: Product) => void;
  selectedSize: 'small' | 'med' | 'large';
  onSizeChange: (size: 'small' | 'med' | 'large') => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAdd, selectedSize, onSizeChange }) => {
  return (
    <div className="bg-white dark:bg-[#2d1b16] rounded-2xl overflow-hidden border border-[#f4eae7] dark:border-[#3d2a24] hover:shadow-2xl hover:translate-y-[-8px] transition-all duration-500 flex flex-col group animate-fade-in">
      <div className="relative h-56 w-full overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: `url('${product.image}')` }}></div>
        <div className="absolute top-4 left-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {product.isPopular && (
            <span className="bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg w-fit">Best Seller</span>
          )}
          {product.isSpicy && (
            <span className="bg-red-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-1 w-fit">
              <span className="material-symbols-outlined text-[14px]">local_fire_department</span> Spicy
            </span>
          )}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-extrabold mb-2 uppercase font-display group-hover:text-primary transition-colors duration-300">{product.name}</h3>
        <p className="text-sm text-[#9c5e49] dark:text-[#b08b7e] mb-6 flex-1 italic">{product.description}</p>
        
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-2">
            {(['small', 'med', 'large'] as const).map(size => (
              <label key={size} className="cursor-pointer group/size">
                <input 
                  type="radio" 
                  name={`size-${product.id}`} 
                  className="hidden peer" 
                  checked={selectedSize === size}
                  onChange={() => onSizeChange(size)}
                />
                <div className="text-center py-2 rounded-lg border border-[#f4eae7] dark:border-[#3d2a24] peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all hover:bg-gray-50 dark:hover:bg-white/5 active:scale-90">
                  <p className="text-[10px] uppercase font-bold opacity-60 peer-checked:opacity-100">{size.slice(0, 3)}</p>
                  <p className="text-xs font-black">{(product.prices[size] / 1000).toFixed(0)},000</p>
                </div>
              </label>
            ))}
          </div>
          <button 
            onClick={() => onAdd(product)}
            className="w-full bg-primary text-white py-3 rounded-xl font-bold text-sm hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-md shadow-primary/10 hover:shadow-primary/30"
          >
            <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
            Add to Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
