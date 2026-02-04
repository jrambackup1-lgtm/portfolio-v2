
import React, { useState } from 'react';
import { EXPERIENCE } from '../constants';

const AboutSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); 

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const galleryImages = [
    "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=600", // Dog with flower
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80&w=600", // Bridge
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600", // Architecture
    "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&q=80&w=600", // City
    "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=600",   // Nature
    "https://images.unsplash.com/photo-1534239697883-c6036324d016?auto=format&fit=crop&q=80&w=600"    // Urban
  ];

  return (
    <section id="about" className="px-6 md:px-12 py-20 max-w-site mx-auto">
      
      {/* Top Separator Line */}
      <div className="w-full h-px bg-gray-200 dark:bg-gray-800 mb-20 reveal" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column - Sticky Title */}
        <div className="lg:col-span-4">
          <div className="sticky top-32">
            <h2 className="font-serif text-[4rem] md:text-[6rem] leading-[0.9] text-token-dark-green dark:text-white reveal mt-0" data-cursor="text">About</h2>
          </div>
        </div>
        
        {/* Right Column - Content */}
        {/* Starts at col 6 to create the visual gap seen in the screenshot */}
        <div className="lg:col-span-7 lg:col-start-6 flex flex-col gap-12">
          
          {/* Bio Text - Uniform Sizing */}
          <div className="flex flex-col gap-8 reveal delay-100" data-cursor="text">
            <p className="font-sans text-xl md:text-2xl font-light leading-relaxed text-token-dark-green dark:text-gray-300">
              I take pride in creating thoughtful, user-centered products that deliver meaningful business results.
            </p>
            
            <p className="font-sans text-xl md:text-2xl font-light leading-relaxed text-token-dark-green dark:text-gray-300">
              Before Google, I worked as a Senior UX Designer at <span className="text-token-light-green dark:text-token-bright-green">McKinsey & Company</span>, helping clients from banking, non-profit, retail, energy, and telco, to bring disruptive digital products and services to market, and help grow clients' own design teams.
            </p>
            
            <p className="font-sans text-xl md:text-2xl font-light leading-relaxed text-token-dark-green dark:text-gray-300">
              In my downtime, I enjoy exploring new destinations with my trusty camera.
            </p>
          </div>

          <div className="w-full h-px bg-gray-200 dark:bg-gray-800 my-4 reveal" />

          {/* Accordion Experience List */}
          <div className="flex flex-col">
            <div className="mb-8 text-sm font-sans uppercase tracking-widest text-gray-500 reveal">Experience</div>
            {EXPERIENCE.map((exp, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={exp.id} 
                  className="border-b border-gray-200 dark:border-gray-800 py-8 cursor-pointer group reveal"
                  onClick={() => toggleItem(index)}
                  data-cursor="text"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex flex-col">
                      <h3 className="text-2xl md:text-3xl font-serif text-token-dark-green dark:text-white mb-1 group-hover:text-token-light-green dark:group-hover:text-token-bright-green transition-colors">{exp.company}</h3>
                      <p className={`font-serif text-xl md:text-2xl text-gray-500 transition-colors ${isOpen ? 'text-black dark:text-gray-200' : ''}`}>
                        {exp.role}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-4 md:gap-12">
                      <span className="hidden md:block font-sans text-sm text-gray-400 uppercase tracking-widest">{exp.period}</span>
                      <button className="w-8 h-8 flex items-center justify-center transition-transform duration-300 text-black dark:text-white">
                        {isOpen ? (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <line x1="6" y1="6" x2="18" y2="18" />
                            <line x1="6" y1="18" x2="18" y2="6" />
                          </svg>
                        ) : (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Expandable Content - Using Grid Template Rows for smoothness */}
                  <div 
                    className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                  >
                    <div className="overflow-hidden">
                        <div className="pt-6">
                            <p className="font-sans text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                                {exp.description}
                            </p>
                        </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-end pt-8 reveal">
            <a href="#" className="inline-flex items-center gap-2 font-sans text-sm font-medium tracking-widest uppercase hover:text-token-light-green dark:hover:text-token-bright-green transition-colors text-black dark:text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Full CV
            </a>
          </div>
        </div>

        {/* Image Gallery Section - Full Width, No Dot, More Pics */}
        <div className="col-span-1 lg:col-span-12 mt-12 md:mt-24 reveal">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {galleryImages.map((img, i) => (
                <div key={i} className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800 group cursor-none">
                  <img 
                    src={img} 
                    alt={`Gallery ${i}`} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
