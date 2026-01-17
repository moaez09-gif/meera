
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-[#1a0f0b] border-t border-[#f4eae7] dark:border-[#3d2a24] pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-primary text-white p-1 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">local_pizza</span>
              </div>
              <h2 className="text-[#1c110d] dark:text-white text-lg font-extrabold tracking-tight font-display">Meera Pizza</h2>
            </div>
            <p className="text-[#6b5148] dark:text-gray-400 text-sm leading-relaxed">
              Authentic recipes handed down through generations, brought to your table with love and the freshest local ingredients.
            </p>
            <div className="flex gap-4">
              <div className="size-9 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all cursor-pointer">
                <span className="material-symbols-outlined text-xl">share_reviews</span>
              </div>
              <div className="size-9 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all cursor-pointer">
                <span className="material-symbols-outlined text-xl">public</span>
              </div>
              <div className="size-9 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all cursor-pointer">
                <span className="material-symbols-outlined text-xl">camera_outdoor</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-[#1c110d] dark:text-white font-bold mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-[#6b5148] dark:text-gray-400 text-sm hover:text-primary transition-colors">Order Online</a>
              <a href="#" className="text-[#6b5148] dark:text-gray-400 text-sm hover:text-primary transition-colors">Browse Menu</a>
              <a href="#" className="text-[#6b5148] dark:text-gray-400 text-sm hover:text-primary transition-colors">Gift Cards</a>
              <a href="#" className="text-[#6b5148] dark:text-gray-400 text-sm hover:text-primary transition-colors">Catering</a>
            </nav>
          </div>
          
          <div>
            <h4 className="text-[#1c110d] dark:text-white font-bold mb-6">Opening Hours</h4>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-[#6b5148] dark:text-gray-400">Mon - Thu</span>
                <span className="text-[#1c110d] dark:text-gray-200 font-medium">11:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#6b5148] dark:text-gray-400">Fri - Sat</span>
                <span className="text-primary font-bold">11:00 AM - 12:00 AM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#6b5148] dark:text-gray-400">Sunday</span>
                <span className="text-[#1c110d] dark:text-gray-200 font-medium">12:00 PM - 10:00 PM</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-[#1c110d] dark:text-white font-bold mb-6">Contact Us</h4>
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                <p className="text-[#6b5148] dark:text-gray-400">123 Artisan Lane, Flavor Town, CA 90210</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl">call</span>
                <p className="text-[#6b5148] dark:text-gray-400">+1 (555) 000-MEERA</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#f4eae7] dark:border-[#3d2a24] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#9c8b85] dark:text-gray-500 text-xs">
            © 2024 Meera Pizza Co. All rights reserved. Handcrafted with love.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#9c8b85] dark:text-gray-500 text-xs hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-[#9c8b85] dark:text-gray-500 text-xs hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
