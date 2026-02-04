
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="px-6 md:px-12 pt-20 pb-8 bg-[#f5f5f5] text-token-dark-green relative overflow-hidden transition-colors duration-500">
      <div className="max-w-site mx-auto relative z-10 flex flex-col">
        
        {/* Main Content Layout */}
        <div className="flex flex-col items-start mb-20 md:mb-28">
          
          {/* Headings - Left Aligned */}
          <div className="flex flex-col items-start gap-0 mb-16 reveal">
            <h2 className="font-serif text-5xl md:text-7xl leading-tight text-token-dark-green cursor-none">
              Let's talk
            </h2>

            <a href="mailto:hello@dousan.com" className="group flex items-center gap-4 cursor-none -ml-1">
              <h2 className="font-serif text-5xl md:text-7xl leading-tight text-token-dark-green whitespace-nowrap">
                Drop me a line
              </h2>
              
              {/* Arrow */}
              <div className="transform translate-y-1 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500 ease-out">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 md:w-12 md:h-12 text-token-light-green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"/>
                  <polyline points="7 7 17 7 17 17"/>
                </svg>
              </div>
            </a>
          </div>

          {/* Links - Only LinkedIn and CV */}
          <div className="flex flex-col gap-3 reveal delay-100">
            <a href="#" className="text-base font-sans text-token-dark-green hover:text-token-light-green transition-colors w-fit cursor-none">LinkedIn</a>
            <a href="#" className="text-base font-sans text-token-dark-green hover:text-token-light-green transition-colors w-fit cursor-none">See full CV</a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 text-gray-500 text-sm font-sans reveal delay-200">
            <p>Made with plenty of coffee</p>
            <p>&copy; 2026 Dousan Miao</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
