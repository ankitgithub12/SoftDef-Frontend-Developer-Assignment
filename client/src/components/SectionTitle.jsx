import React from 'react';

const SectionTitle = ({ title, className = '' }) => {
  return (
    <div className={`flex items-center justify-center mb-12 ${className}`}>
      <h2 className="section-title-bracket text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide text-white">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
