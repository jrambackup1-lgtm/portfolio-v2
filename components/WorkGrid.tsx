
import React from 'react';
import { PROJECTS } from '../constants';

const WorkGrid: React.FC = () => {
  return (
    <section id="work" className="px-6 md:px-12 py-24 max-w-site mx-auto">
      <div className="flex justify-between items-end mb-16 reveal">
        <h2 className="font-serif text-5xl md:text-7xl text-token-dark-green dark:text-white tracking-tight">Selected works</h2>
        <span className="font-serif text-3xl md:text-6xl text-gray-400 dark:text-gray-600">21'-25'</span>
      </div>

      <div className="flex flex-col gap-[40px]">
        {/* Featured Project (First Item) */}
        {PROJECTS.length > 0 && (
          <div 
            className="relative w-full h-[60vh] md:h-[85vh] bg-black dark:bg-gray-900 rounded-sm overflow-hidden group cursor-pointer reveal"
          >
            <img 
              src={PROJECTS[0].image} 
              alt={PROJECTS[0].title}
              loading="lazy"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            
            {/* Shipped Badge */}
            <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-md px-3 py-1.5 flex items-center gap-2 rounded-sm border border-white/20">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-white text-xs font-medium tracking-wide uppercase">Shipped</span>
            </div>

            <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 max-w-xl z-10 pointer-events-none">
              <h3 className="text-white font-serif text-4xl md:text-6xl mb-4">{PROJECTS[0].title}</h3>
              <p className="text-gray-300 text-lg md:text-xl font-light">{PROJECTS[0].description}</p>
            </div>
          </div>
        )}

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
          {PROJECTS.slice(1).map((project, i) => (
            <div key={project.id} className={`group cursor-pointer reveal ${i % 2 === 0 ? '' : 'delay-100'}`}>
              <div className="overflow-hidden rounded-sm bg-gray-100 dark:bg-gray-800 aspect-[4/3] mb-6 relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
              </div>
              <div>
                <h3 className="text-3xl font-serif mb-2 text-token-dark-green dark:text-white group-hover:text-token-light-green dark:group-hover:text-token-bright-green transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 font-sans font-light leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkGrid;
