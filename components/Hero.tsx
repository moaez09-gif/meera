
import React from 'react';

interface HeroProps {
  onNavigate: (view: 'home' | 'menu' | 'rewards' | 'about') => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-12 md:py-20 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        <div className="w-full md:w-1/2 flex flex-col gap-8 order-2 md:order-1 animate-fade-in-up">
          <div className="flex flex-col gap-4">
            <span className="inline-block w-fit px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full">Best in the City</span>
            <h1 className="text-[#1c110d] dark:text-white text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight font-display">
              Authentic Flavors, <span className="text-primary">Delivered Hot.</span>
            </h1>
            <p className="text-[#4a342c] dark:text-gray-300 text-lg md:text-xl font-medium leading-relaxed max-w-lg">
              Experience the finest artisanal pizzas made with fresh, locally sourced ingredients and delivered straight to your doorstep.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onNavigate('menu')}
              className="flex flex-1 md:flex-none min-w-[180px] items-center justify-center rounded-xl h-14 px-8 bg-primary text-white text-base font-bold shadow-lg shadow-primary/25 hover:translate-y-[-2px] hover:brightness-110 active:scale-95 transition-all"
            >
              Explore Menu
            </button>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-[2rem] rotate-3 scale-105 blur-2xl group-hover:rotate-6 transition-transform"></div>
            <div className="relative w-full aspect-square bg-center bg-cover rounded-[2rem] shadow-2xl overflow-hidden">
              <div 
                className="w-full h-full bg-center bg-cover transition-transform duration-1000 group-hover:scale-110" 
                style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCRo9jou7MO3Nj2MNQFwo5Eio4BozJEAxwhyEXhXho2c9axDEvB_w-dw8FKh5d1_ixwBb_Rt5jqR58yEokgxiwch6Tiznl8r0mZ3GMQIu1rrVOSAnu9wABOE4lSIytVWTzCuzjMt0nGpf_ar7128OqNh7A4rd2vqaWFLcIGsqtyiUg5Dapl0FQpH6Ch2iObjyQnlyC1Ku-6ENFipd2_5KhOloNOq8k8nOgz3oeejjfhRb1UA5xQA3yp-2sECtdPKhjAg5aE9iGnhA')` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
