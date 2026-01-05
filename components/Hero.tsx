import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Star, Truck, Flame, FlaskConical, Leaf, Globe } from 'lucide-react';

interface HeroProps {
  onOpenQuiz: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenQuiz }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-teal-900 to-teal-800 text-white">
      {/* Top Logo */}
      <div className="absolute top-0 left-0 w-full pt-8 pb-4 z-20">
        <div className="container mx-auto flex justify-center">
          <img 
             src="https://i.ibb.co/TxzyDcmB/Untitled-design-2026-01-05-T231854-748.png" 
             alt="Endoca" 
             className="h-8 md:h-9 w-auto object-contain brightness-0 invert opacity-95"
             onError={(e) => {
               (e.target as HTMLImageElement).style.display = 'none';
               (e.target as HTMLImageElement).parentElement!.innerHTML = '<span class="font-playfair font-bold text-white text-3xl tracking-widest drop-shadow-md">ENDOCA</span>';
             }}
           />
        </div>
      </div>

      {/* Background Animated Shapes */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      >
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 0 L50 20 L100 0 V100 H0 Z" fill="url(#grad1)" />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.2 }} />
              <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-32 pb-12 flex-grow flex flex-col lg:flex-row items-center relative z-10">
        
        {/* Left Side: Copy */}
        <div className="w-full lg:w-1/2 lg:pr-12 mb-12 lg:mb-0 text-center lg:text-left">
          <p className="text-gold font-poppins uppercase tracking-widest text-sm mb-4 animate-fade-in-up">
            Trusted by 12,000+ Europeans Who Refuse to Settle
          </p>
          <h1 className="font-playfair font-bold text-5xl lg:text-7xl leading-tight mb-6 drop-shadow-lg">
            Your Body Works Hard. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Doesn't It Deserve More?
            </span>
          </h1>
          <p className="font-sans text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Discover hemp-powered botanical formulas that actually soothe tired muscles, 
            deeply nourish stressed skin, and turn self-care into a ritual you'll crave.
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10 text-sm font-medium text-gray-300">
            <span className="flex items-center gap-2">
              <FlaskConical className="text-green-400" size={18} />
              Lab-Verified
            </span>
            <span className="flex items-center gap-2">
              <Leaf className="text-green-400" size={18} />
              100% Plant-Based
            </span>
            <span className="flex items-center gap-2">
              <Globe className="text-blue-400" size={18} />
              EU Organic Certified
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
            <a 
              href="https://www.endoca.com/cbd-products/cbd-cream"
              className="bg-coral hover:bg-orange-500 text-white font-poppins font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(255,107,88,0.4)] hover:shadow-[0_0_30px_rgba(255,107,88,0.6)] transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 tracking-widest text-sm"
            >
              DISCOVER THE COLLECTION <ArrowRight size={18} />
            </a>
            <button 
              onClick={onOpenQuiz}
              className="group flex items-center gap-2 text-white border-b border-transparent hover:border-white transition-all pb-1 text-sm font-medium"
            >
              TAKE PRODUCT QUIZ <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative w-full lg:h-[600px] flex items-center justify-center">
            {/* Spotlight Effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial-gradient from-teal-500/20 to-transparent pointer-events-none blur-3xl" />
            
            {/* Main Product Image */}
            <div className="relative animate-float z-10 w-full h-auto lg:h-full rounded-2xl overflow-hidden shadow-2xl glass-card-dark border-0 p-4">
               <img 
                 src="hhttps://i.ibb.co/bjZ5vZM4/Untitled-design-2026-01-05-T232941-392.png" 
                 alt="Premium Hemp Body Care Set" 
                 className="w-full h-auto lg:h-full object-cover object-center rounded-xl"
               />
               <div className="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-lg flex items-center justify-between">
                 <div>
                   <p className="text-teal-900 font-bold font-playfair">The Complete Ritual</p>
                   <p className="text-teal-700 text-xs">Essential Collection</p>
                 </div>
                 <span className="bg-coral text-white text-xs font-bold px-3 py-1 rounded-full">Best Seller</span>
               </div>
            </div>

            {/* Floating Elements (Botanicals) */}
            <div className="absolute top-10 -left-10 w-20 h-20 bg-green-900/40 rounded-full blur-xl animate-pulse-slow" />
            <div className="absolute bottom-20 -right-4 w-32 h-32 bg-gold/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>

      {/* Bottom Ticker */}
      <div className="bg-black/20 backdrop-blur-sm py-3 border-t border-white/10">
        <div className="container mx-auto overflow-hidden relative">
          <div className="whitespace-nowrap animate-scroll inline-block w-full text-center text-sm font-medium text-white/90">
             <span className="mx-8 inline-flex items-center gap-2"><Flame size={14} className="text-orange-400"/> Restocking Alert: Deep Comfort Salve 87% sold out</span>
             <span className="mx-8 hidden md:inline-flex items-center gap-2"><Star size={14} className="text-yellow-400" fill="currentColor"/> 4.9/5 from 3,200+ reviews</span>
             <span className="mx-8 inline-flex items-center gap-2"><Truck size={14} className="text-blue-300"/> Free EU shipping over €50</span>
             {/* Duplicate for seamless loop appearance (simplified here) */}
             <span className="mx-8 hidden lg:inline-flex items-center gap-2"><Flame size={14} className="text-orange-400"/> Restocking Alert: Deep Comfort Salve 87% sold out</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;