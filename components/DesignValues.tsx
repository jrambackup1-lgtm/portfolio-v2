
import React from 'react';
import { DESIGN_VALUES } from '../constants';

const DesignValues: React.FC = () => {
    return (
        <section id="philosophy" className="px-6 md:px-12 py-24 max-w-site mx-auto bg-gray-50/50 dark:bg-dark-surface/50">
            <h2 className="font-serif text-5xl md:text-7xl text-token-dark-green dark:text-white mb-20 reveal">Design Philosophy</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {DESIGN_VALUES.map((item, index) => (
                    <div
                        key={index}
                        className={`bg-white dark:bg-token-dark-green/30 p-8 flex flex-col gap-4 group hover:shadow-xl transition-all duration-300 reveal delay-${index * 100}`}
                    >
                        <div className="w-12 h-12 flex items-center justify-center bg-token-light-green/20 text-token-dark-green rounded-full mb-4">
                            {/* Icon placeholder or number */}
                            <span className="font-serif font-bold text-xl">{index + 1}</span>
                        </div>

                        <h3 className="font-serif text-2xl text-token-dark-green dark:text-white leading-tight">
                            {item.title}
                        </h3>

                        <p className="font-sans text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DesignValues;
