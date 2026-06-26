import React from 'react';

const SectionTitle = ({ title, className = '' }) => {
  return (
    <div className={`flex items-center justify-center mb-10 ${className}`}>
      <h2 className="section-title-bracket text-xl sm:text-2xl md:text-3xl font-semibold text-flora-text tracking-wide">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
