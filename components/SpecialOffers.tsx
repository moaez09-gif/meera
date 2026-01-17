
import React from 'react';
import { SPECIAL_OFFERS } from '../constants';

const SpecialOffers: React.FC = () => {
  return (
    <section id="offers" className="bg-[#f0ece9] dark:bg-[#2c1b16] py-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[#1c110d] dark:text-white text-3xl font-extrabold font-display">Special Offers</h2>
          <div className="flex gap-2">
            <button className="size-10 rounded-full border border-[#d1c2be] flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all active:scale-90">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="size-10 rounded-full border border-[#d1c2be] flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all active:scale-90">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        
        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-10 -mx-2 px-2">
          {SPECIAL_OFFERS.map((offer, idx) => (
            <div 
              key={offer.id}
              className={`flex-shrink-0 w-[340px] md:w-[400px] bg-white dark:bg-[#3d2a24] p-5 rounded-2xl border border-black/5 dark:border-white/5 flex items-center gap-5 transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl hover:border-primary/20 group cursor-pointer`}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div 
                className="size-24 rounded-xl bg-center bg-cover shrink-0 transition-transform group-hover:scale-110" 
                style={{ backgroundImage: `url('${offer.image}')` }}
              ></div>
              <div className="flex flex-col gap-1">
                <p className="text-xs font-bold text-primary uppercase tracking-widest">{offer.badge}</p>
                <h3 className="text-[#1c110d] dark:text-white text-lg font-bold group-hover:text-primary transition-colors">{offer.title}</h3>
                <p className="text-[#6b5148] dark:text-gray-400 text-sm">{offer.subtitle}</p>
              </div>
            </div>
          ))}
          {/* Empty space for scrolling feel */}
          <div className="flex-shrink-0 w-10"></div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
