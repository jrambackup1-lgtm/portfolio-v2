
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className="fixed top-0 left-0 w-full z-50 pointer-events-none"
    >
      {/* Background Layer - Frosted Glass Effect */}
      <div 
        className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border-b
          ${scrolled 
            ? 'opacity-100 bg-token-light-bg/80 backdrop-blur-xl border-black/[0.03] pointer-events-auto' 
            : 'opacity-0 bg-transparent border-transparent pointer-events-none'
          }
        `}
      />

      {/* Content Layer */}
      <div className={`relative z-10 max-w-site mx-auto px-6 md:px-12 flex justify-between items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'py-5' : 'py-8 md:py-10'}`}>
        
        {/* Logo */}
        <div className="flex items-center pointer-events-auto">
          <a href="#" className="font-sans text-lg md:text-xl tracking-[0.05em] uppercase font-normal text-token-dark-green hover:opacity-70 transition-opacity" data-cursor="text">
            Dousan Miao
          </a>
        </div>

        {/* Horizontal Tab Bar (TOC) */}
        <div className="flex items-center gap-8 md:gap-12 pointer-events-auto">
          <a 
            href="#about" 
            onClick={scrollToSection('about')}
            className="text-sm font-sans uppercase tracking-widest text-token-dark-green hover:text-token-light-green transition-colors"
            data-cursor="text"
          >
            About
          </a>
          <a 
            href="#work" 
            onClick={scrollToSection('work')}
            className="text-sm font-sans uppercase tracking-widest text-token-dark-green hover:text-token-light-green transition-colors"
            data-cursor="text"
          >
            Work
          </a>
          <a 
            href="#contact" 
            onClick={scrollToSection('contact')}
            className="text-sm font-sans uppercase tracking-widest text-token-dark-green hover:text-token-light-green transition-colors"
            data-cursor="text"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
