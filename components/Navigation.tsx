
import React from 'react';

interface NavigationProps {
  currentView: 'home' | 'menu' | 'rewards' | 'about';
  onNavigate: (view: 'home' | 'menu' | 'rewards' | 'about') => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, onNavigate }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-[#f4eae7] dark:border-[#3d2a24]">
      <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8 text-primary">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="size-8 flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">local_pizza</span>
            </div>
            <h1 className="text-xl font-extrabold tracking-tight font-display text-slate-900 dark:text-white">Meera Pizza</h1>
          </button>
          
          <nav className="hidden md:flex items-center gap-9 whitespace-nowrap">
            <button 
              onClick={() => onNavigate('home')}
              className={`text-sm font-semibold transition-colors ${currentView === 'home' ? 'text-primary' : 'text-slate-700 dark:text-white hover:text-primary'}`}
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('menu')}
              className={`text-sm font-semibold transition-colors ${currentView === 'menu' ? 'text-primary' : 'text-slate-700 dark:text-white hover:text-primary'}`}
            >
              Menu
            </button>
            <button 
              onClick={() => onNavigate('about')}
              className={`text-sm font-semibold transition-colors ${currentView === 'about' ? 'text-primary' : 'text-slate-700 dark:text-white hover:text-primary'}`}
            >
              Our Story
            </button>
            <button 
              onClick={() => onNavigate('rewards')}
              className={`text-sm font-semibold transition-colors ${currentView === 'rewards' ? 'text-primary' : 'text-slate-700 dark:text-white hover:text-primary'}`}
            >
              Rewards
            </button>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => window.open('https://wa.me/255670621947', '_blank')}
            className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary text-white text-sm font-bold hover:brightness-110 hover:scale-105 transition-all shadow-sm active:scale-95"
          >
            Order Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
