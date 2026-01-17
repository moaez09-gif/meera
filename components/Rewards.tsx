
import React from 'react';

interface RewardsProps {
  onNavigate: (view: 'home' | 'menu' | 'rewards' | 'about') => void;
}

const Rewards: React.FC<RewardsProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-10 animate-fade-in pointer-events-none opacity-90">
      {/* HeroSection */}
      <div className="relative overflow-hidden rounded-xl bg-slate-900 mb-12 shadow-2xl">
        <div className="absolute inset-0 z-0 opacity-60">
          <img 
            alt="Close up of a hot pepperoni pizza" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9S9Wivhc2DITRg5B91XyXizN-Vz5T6ixX7Kv3ZPCFjKtOWUtSXC0RLdHUDSsG3PpnwIGUiHk2HRfngtMevT2gmcuvFuryzBPIhySQ3z7ACHFyYyimLi9UHTOktVvmsm23iaurRnuJLCCBjV7GvQUeh6ofrnkrbL1M-uUCq9DKM0-WmS1XGji1MN6iYIL5qM3lP-JUTFRp8OrhRxqPDU5Iwo9iEUKnq4oANeahLGgACH3zlAI8QxfWe00CAYPO1kq0zUmmpeApqw" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#221410] via-[#221410]/80 to-transparent z-10"></div>
        <div className="relative z-20 p-12 md:p-20 max-w-[600px] flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 px-3 py-1 rounded-full w-fit">
            <span className="material-symbols-outlined text-primary !text-[18px]">workspace_premium</span>
            <span className="text-primary text-xs font-bold uppercase tracking-wider">The Pizza Club</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter font-display">
            Where Every Slice <span className="text-primary">Counts.</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Join our loyalty program and turn every bite into delicious rewards. Order, earn slices, and redeem for free pizza!
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              className="px-8 py-4 bg-primary text-white font-bold rounded-full text-lg cursor-not-allowed"
            >
              Coming Soon
            </button>
          </div>
        </div>
      </div>

      {/* SectionHeader: How It Works */}
      <div className="flex flex-col gap-2 mb-8 items-center text-center">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white font-display">The Slice Journey</h2>
        <p className="text-slate-500 dark:text-[#cb9f90]">Earning rewards is as easy as eating a pie.</p>
      </div>

      {/* Grid: How It Works */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {[
          { icon: 'shopping_basket', title: '1. Order', desc: 'Buy your favorites online or in-store.' },
          { icon: 'local_pizza', title: '2. Earn', desc: 'Get 1 Slice for every $10 spent.' },
          { icon: 'redeem', title: '3. Redeem', desc: 'Trade slices for sides, drinks, or premium pies.' }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-6 p-8 rounded-xl border border-slate-200 dark:border-[#683f31] bg-white dark:bg-[#341f18]">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined !text-[32px]">{item.icon}</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-slate-500 dark:text-[#cb9f90]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rewards;
