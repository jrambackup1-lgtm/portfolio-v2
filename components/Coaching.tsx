import React from 'react';
import { COACHING } from '../constants';

const Coaching: React.FC = () => {
  return (
    <section id="coaching" className="px-6 md:px-12 py-24 max-w-site mx-auto bg-gray-50/50 dark:bg-dark-surface/50">
      <h2 className="font-serif text-5xl md:text-7xl text-token-dark-green dark:text-white mb-20 reveal">Coaching & Resources</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {COACHING.map((item, index) => (
          <div 
            key={index} 
            className={`bg-gray-100 dark:bg-token-dark-green/30 p-8 md:p-10 flex flex-col justify-between min-h-[400px] group hover:bg-white dark:hover:bg-black hover:shadow-xl transition-all duration-300 reveal ${index === 1 ? 'delay-100' : index === 2 ? 'delay-200' : ''}`}
          >
            <div>
              <h3 className="font-serif text-3xl md:text-4xl text-token-dark-green dark:text-white mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="font-sans text-gray-500 dark:text-gray-400 text-lg mb-8">{item.price}</p>
              
              <p className="font-sans text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-8">
                {item.description}
              </p>
            </div>
            
            <a 
              href="#" 
              className="inline-flex items-center gap-2 font-sans text-sm font-medium tracking-widest uppercase text-token-dark-green dark:text-white group-hover:text-token-light-green dark:group-hover:text-token-bright-green transition-colors"
            >
              {item.linkText}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Coaching;