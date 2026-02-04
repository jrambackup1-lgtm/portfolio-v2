
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="h-screen min-h-[700px] flex flex-col justify-center items-center px-6 md:px-12 relative overflow-hidden bg-token-light-bg dark:bg-token-dark-bg transition-colors duration-500">
      
      <div className="relative z-10 w-full max-w-site mx-auto text-center flex flex-col items-center justify-center -mt-6 md:-mt-0">
        
        {/* Main Heading */}
        <h1 
          className="font-serif text-[8.5vw] md:text-[5.5vw] leading-[0.9] -tracking-[0.03em] text-token-dark-green dark:text-white cursor-none"
          data-cursor="text"
        >
          <span className="block md:whitespace-nowrap">
            I design products built for <span className="text-[#a3a3a3] dark:text-gray-600">impact,</span>
          </span>
          <span className="block mt-1 md:mt-4">
            designed to <span className="text-[#a3a3a3] dark:text-gray-600">scale.</span>
          </span>
        </h1>
      </div>
      
      {/* Bottom Ticker */}
      <div className="absolute bottom-0 left-6 right-6 md:left-12 md:right-12 pb-8 reveal delay-300">
        <div className="w-full h-px bg-gray-200 dark:bg-white/10 mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-[10px] md:text-[11px] font-sans text-gray-500 uppercase tracking-widest text-center md:text-left mb-4 md:mb-0">
            Currently Designing at <a href="#" className="text-token-light-green dark:text-token-bright-green font-bold hover:underline">Google</a>. Previously at <a href="#" className="text-token-light-green dark:text-token-bright-green font-bold hover:underline">McKinsey & Company</a>.
          </p>
          
          <a href="#" className="text-[10px] md:text-[11px] font-sans text-gray-500 uppercase tracking-widest hover:text-black dark:hover:text-white transition-colors flex items-center gap-1 group">
            LinkedIn 
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform">
              <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
