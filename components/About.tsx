
import React from 'react';

interface AboutProps {
  onNavigate: (view: 'home' | 'menu' | 'rewards' | 'about') => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col animate-fade-in bg-background-light dark:bg-background-dark">
      {/* Hero Section */}
      <section className="relative w-full px-4 md:px-10 lg:px-20 py-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex min-h-[560px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 relative overflow-hidden group shadow-2xl" 
               style={{ 
                 backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB4yyvj_qpLlR4oq1v0qArzYvTkNL6xmaeohm7p882jngfYIaLr0ZLwNvKm7aVJc1xl2h7YEPjBrmojtZOOqXciEY2nxNSdyFsvOHOByKr9lrhpqbKXMf9U1wipqJ0ff-4-XKabDPj4AMyptM55pPEAPH3hhMFTjSGIc6R8WEMJnbCbteDciwG_Q6katoQqDB_hgXQbFEWLOIW1nJ_qcinSUXCpwca0AuazcMRTLzGt3gIPzKiXFgcK0q-JfXhpMhDacRuSVD33Ng")` 
               }}>
            <div className="flex flex-col gap-4 text-center z-10 max-w-2xl">
              <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tighter uppercase italic font-display">
                Born in the Flame
              </h1>
              <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed">
                Every slice is a testament to our history, crafted in the heart of a 900-degree tradition.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Storytelling Section */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-20 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Our Origin</span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight text-slate-900 dark:text-white font-display">A Heritage of Quality</h2>
            <p className="text-slate-600 dark:text-[#baa39c] text-lg leading-relaxed">
              Our journey began with a simple belief: pizza shouldn't just be food; it should be an experience of craftsmanship. We spent years traveling across Italy, learning from masters the art of the 48-hour fermentation and the secret to a perfectly balanced crust.
            </p>
            <div className="flex items-center gap-4 py-4 border-l-4 border-primary pl-6">
              <p className="italic text-xl text-slate-700 dark:text-white font-medium">
                "We don't cut corners. We cultivate flavor through patience and passion."
              </p>
            </div>
          </div>
          <div className="relative grid grid-cols-2 gap-4 h-[500px]">
            <div className="rounded-2xl bg-cover bg-center shadow-xl h-full mt-10" 
                 style={{ backgroundImage: `url("https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop")` }}></div>
            <div className="rounded-2xl bg-cover bg-center shadow-xl h-full mb-10 border-4 border-primary/10" 
                 style={{ backgroundImage: `url("https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?q=80&w=800&auto=format&fit=crop")` }}></div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-20 py-20">
        <h2 className="text-slate-900 dark:text-white text-3xl font-black leading-tight mb-12 text-center uppercase tracking-wider font-display">The Heritage Journey</h2>
        <div className="flex flex-col max-w-3xl mx-auto">
          <div className="grid grid-cols-[48px_1fr] gap-x-6">
            <div className="flex flex-col items-center gap-2 pt-3">
              <div className="text-primary bg-primary/10 p-2 rounded-full">
                <span className="material-symbols-outlined text-2xl">local_fire_department</span>
              </div>
              <div className="w-1 bg-primary/20 h-24 grow rounded-full"></div>
            </div>
            <div className="flex flex-col py-3">
              <span className="text-primary font-bold text-sm mb-1">2010</span>
              <p className="text-slate-900 dark:text-white text-xl font-bold font-display">The First Spark</p>
              <p className="text-slate-600 dark:text-[#baa39c] text-base leading-relaxed mt-2">Founded as a small pop-up in Dar Es Salaam, driven by a dream of the perfect crust.</p>
            </div>
            <div className="flex flex-col items-center gap-2 pb-3">
              <div className="text-primary bg-primary/10 p-2 rounded-full">
                <span className="material-symbols-outlined text-2xl">trophy</span>
              </div>
            </div>
            <div className="flex flex-col py-3">
              <span className="text-primary font-bold text-sm mb-1">2024</span>
              <p className="text-slate-900 dark:text-white text-xl font-bold font-display">Meera Today</p>
              <p className="text-slate-600 dark:text-[#baa39c] text-base leading-relaxed mt-2">Named 'Pizzeria of the Year' and serving thousands of happy guests.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Chefs */}
      <section className="bg-slate-100 dark:bg-[#1f1715] py-20 px-6 lg:px-20">
        <div className="max-w-[1200px] mx-auto text-center mb-16">
          <h2 className="text-slate-900 dark:text-white text-4xl font-black mb-4 font-display">Meet the Chefs</h2>
          <p className="text-slate-600 dark:text-[#baa39c] max-w-xl mx-auto italic">"A pizza is only as good as the hands that knead the dough."</p>
        </div>
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="flex flex-col items-center group">
            <div className="size-48 rounded-full bg-cover bg-center border-4 border-primary/20 mb-6 group-hover:border-primary transition-all duration-300 overflow-hidden shadow-lg" 
                 style={{ backgroundImage: `url("https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop")` }}></div>
            <h3 className="text-slate-900 dark:text-white text-xl font-bold font-display">Chef Bakari</h3>
            <span className="text-primary text-sm font-semibold mb-3">Head Chef</span>
            <p className="text-slate-600 dark:text-[#baa39c] text-sm text-center">Bringing local spice and international technique to every pie.</p>
          </div>
          <div className="flex flex-col items-center group">
            <div className="size-48 rounded-full bg-cover bg-center border-4 border-primary/20 mb-6 group-hover:border-primary transition-all duration-300 overflow-hidden shadow-lg" 
                 style={{ backgroundImage: `url("https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=800&auto=format&fit=crop")` }}></div>
            <h3 className="text-slate-900 dark:text-white text-xl font-bold font-display">Chef Marco</h3>
            <span className="text-primary text-sm font-semibold mb-3">Master Pizzaiolo</span>
            <p className="text-slate-600 dark:text-[#baa39c] text-sm text-center">Our dough specialist who ensures the 48-hour fermentation is perfectly timed.</p>
          </div>
          <div className="flex flex-col items-center group">
            <div className="size-48 rounded-full bg-cover bg-center border-4 border-primary/20 mb-6 group-hover:border-primary transition-all duration-300 overflow-hidden shadow-lg" 
                 style={{ backgroundImage: `url("https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop")` }}></div>
            <h3 className="text-slate-900 dark:text-white text-xl font-bold font-display">Chef Lucia</h3>
            <span className="text-primary text-sm font-semibold mb-3">Sauce Master</span>
            <p className="text-slate-600 dark:text-[#baa39c] text-sm text-center">Architect of our signature tomato sauce and seasonal dips.</p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-[960px] mx-auto bg-primary rounded-xl p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-white text-4xl md:text-5xl font-black mb-6 uppercase font-display">Taste the Story</h2>
            <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
              Join us for an unforgettable meal handcrafted with love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onNavigate('menu')} 
                className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all shadow-xl"
              >
                View Our Menu
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        </div>
      </section>
    </div>
  );
};

export default About;
