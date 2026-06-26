import React from 'react';

const SectionTitle = ({ title, className = '' }) => {
  return (
    <div className={`flex items-center justify-center mb-12 ${className}`}>
      <h2 className="border border-green-500 px-6 py-2 rounded text-white text-base sm:text-lg md:text-xl font-bold tracking-wide uppercase inline-block bg-[#1a2e1a]/40 shadow-sm shadow-green-500/10">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
