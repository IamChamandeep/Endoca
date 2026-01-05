import React from 'react';
import Section from './ui/Section';
import FadeIn from './ui/FadeIn';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/products';

const IntensityDots = ({ level }: { level: number }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3].map((i) => (
        <div 
          key={i} 
          className={`w-3 h-3 rounded-full border border-teal-800 ${i <= level ? 'bg-teal-800' : 'bg-transparent'}`}
        />
      ))}
    </div>
  );
};

const ProductShowcase: React.FC = () => {
  return (
    <Section className="bg-white" id="products">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-charcoal mb-4">
              6 Formulas. 6 Ways to Feel Better.
            </h2>
            <p className="font-sans text-lg text-gray-500">
              Mix, match, or start with one. Every formula is designed to solve a specific problem.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, idx) => (
            <FadeIn key={product.id} delay={idx * 100} className="h-full">
              <div className="group h-full bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col">
                <div className="relative mb-6 rounded-xl overflow-hidden aspect-square">
                   <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                   <div className="absolute top-3 left-3 bg-coral text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-md">
                     {product.badge}
                   </div>
                </div>
                
                <div className="flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-playfair font-bold text-xl text-charcoal group-hover:text-teal-800 transition-colors">{product.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{product.benefit}</p>
                  
                  <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Intensity</span>
                      <IntensityDots level={product.intensity} />
                    </div>
                    <a 
                      href={product.link}
                      className="text-coral font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
                    >
                      Learn More <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-coral/20 pointer-events-none transition-colors duration-300"></div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://www.endoca.com/cbd-products/cbd-cream"
            className="inline-flex bg-coral hover:bg-orange-500 text-white font-poppins font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-coral/50 transition-all duration-300 transform hover:scale-105 items-center gap-2 mx-auto tracking-widest text-sm"
          >
            EXPLORE ALL FORMULAS <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default ProductShowcase;