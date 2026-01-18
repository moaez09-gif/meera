
import React, { useState } from 'react';
import { CartItem } from '../types';

interface CartViewProps {
  cart: CartItem[];
  onUpdateQuantity: (productId: string, size: string, delta: number) => void;
  onRemoveItem: (productId: string, size: string) => void;
  onNavigate: (view: 'home' | 'menu' | 'rewards' | 'about' | 'cart') => void;
}

const CartView: React.FC<CartViewProps> = ({ cart, onUpdateQuantity, onRemoveItem, onNavigate }) => {
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [isError, setIsError] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryFee = cart.length > 0 ? 3000 : 0;
  const total = subtotal + deliveryFee;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    if (!customerName.trim() || !address.trim()) {
      setIsError(true);
      return;
    }

    const phone = '255670621947';
    let message = `*New Order for Meera Pizza*\n`;
    message += `--------------------------\n`;
    message += `*Name:* ${customerName}\n`;
    message += `*Address:* ${address}\n`;
    message += `--------------------------\n\n`;
    
    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
      message += `   Size: ${item.selectedSize.toUpperCase()}\n`;
      message += `   Qty: ${item.quantity}\n`;
    });

    message += `--------------------------\n`;
    message += `_Please confirm my order._`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="max-w-[1000px] mx-auto px-6 py-12 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-black uppercase font-display mb-2">Your Basket</h1>
          <p className="text-[#9c5e49] dark:text-[#b08b7e]">Review your selected artisanal items before checkout.</p>
        </div>
        <button 
          onClick={() => onNavigate('menu')}
          className="text-primary font-bold flex items-center gap-2 hover:underline"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Back to Menu
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          {/* Cart Items List */}
          <div className="space-y-6">
            {cart.length === 0 ? (
              <div className="bg-white dark:bg-[#2d1b16] rounded-3xl p-20 flex flex-col items-center justify-center text-center border border-[#f4eae7] dark:border-[#3d2a24]">
                <div className="size-24 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined text-5xl">shopping_cart_off</span>
                </div>
                <h2 className="text-2xl font-bold mb-2">Your cart is feeling lonely</h2>
                <p className="text-[#9c5e49] dark:text-[#b08b7e] mb-8">Add some delicious wood-fired pizza to make it happy!</p>
                <button 
                  onClick={() => onNavigate('menu')}
                  className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-xl shadow-primary/20"
                >
                  Start Ordering
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div 
                  key={`${item.productId}-${item.selectedSize}`} 
                  className="bg-white dark:bg-[#2d1b16] rounded-2xl p-6 flex gap-6 items-center border border-[#f4eae7] dark:border-[#3d2a24] shadow-sm animate-fade-in-up"
                >
                  <div 
                    className="size-24 rounded-xl bg-cover bg-center shrink-0 shadow-inner" 
                    style={{ backgroundImage: `url('${item.image}')` }}
                  ></div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-lg font-black uppercase font-display truncate">{item.name}</h3>
                      <p className="font-bold text-primary">TZS {(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                    <p className="text-sm text-[#9c5e49] mb-4">{item.selectedSize.charAt(0).toUpperCase() + item.selectedSize.slice(1)} Size • TZS {item.price.toLocaleString()} each</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 bg-gray-50 dark:bg-white/5 px-4 py-2 rounded-lg">
                        <button 
                          onClick={() => onUpdateQuantity(item.productId, item.selectedSize, -1)}
                          className="text-primary hover:scale-125 transition-transform"
                        >
                          <span className="material-symbols-outlined font-bold">remove</span>
                        </button>
                        <span className="text-lg font-bold w-6 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.productId, item.selectedSize, 1)}
                          className="text-primary hover:scale-125 transition-transform"
                        >
                          <span className="material-symbols-outlined font-bold">add</span>
                        </button>
                      </div>
                      <button 
                        onClick={() => onRemoveItem(item.productId, item.selectedSize)}
                        className="text-red-500 flex items-center gap-1 text-sm font-bold hover:bg-red-50 dark:hover:bg-red-900/10 px-3 py-1.5 rounded-lg transition-all"
                      >
                        <span className="material-symbols-outlined text-lg">delete</span>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Checkout Details Form */}
          {cart.length > 0 && (
            <div className="bg-white dark:bg-[#2d1b16] rounded-3xl p-8 border border-[#f4eae7] dark:border-[#3d2a24] shadow-sm animate-fade-in-up delay-100">
              <h2 className="text-xl font-black uppercase font-display mb-6">Delivery Details</h2>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-bold text-[#6b5148] dark:text-gray-300">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    value={customerName}
                    onChange={(e) => { setCustomerName(e.target.value); setIsError(false); }}
                    placeholder="Enter your full name"
                    className="w-full bg-gray-50 dark:bg-white/5 border border-[#f4eae7] dark:border-[#3d2a24] rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="address" className="text-sm font-bold text-[#6b5148] dark:text-gray-300">Delivery Address</label>
                  <textarea 
                    id="address"
                    value={address}
                    onChange={(e) => { setAddress(e.target.value); setIsError(false); }}
                    placeholder="Enter your street, building number, or any helpful landmarks"
                    rows={3}
                    className="w-full bg-gray-50 dark:bg-white/5 border border-[#f4eae7] dark:border-[#3d2a24] rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                  />
                </div>
                {isError && (
                  <p className="text-red-500 text-sm font-bold">Please fill in your name and delivery address to continue.</p>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-[#2d1b16] rounded-3xl p-8 border border-[#f4eae7] dark:border-[#3d2a24] shadow-xl sticky top-24">
            <h2 className="text-xl font-black uppercase font-display mb-6 pb-4 border-b border-black/5">Order Summary</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-[#6b5148] dark:text-gray-400">
                <span>Subtotal</span>
                <span>TZS {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[#6b5148] dark:text-gray-400">
                <span>Delivery Fee</span>
                <span>TZS {deliveryFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-black/5 dark:border-white/5">
                <span className="text-lg font-bold">Total</span>
                <span className="text-2xl font-black text-primary">TZS {total.toLocaleString()}</span>
              </div>
            </div>
            <button 
              disabled={cart.length === 0}
              onClick={handleCheckout}
              className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/25 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed uppercase tracking-wider"
            >
              <span className="material-symbols-outlined">chat_bubble</span>
              Checkout via WhatsApp
            </button>
            <p className="text-center text-[10px] text-[#9c5e49] mt-6 leading-relaxed">
              By proceeding, you'll be redirected to WhatsApp to finalize your artisanal pizza order with our team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartView;
