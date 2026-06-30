import React from 'react';

const SectionTitle = ({ title, className = '' }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <h2 className="modern-section-heading">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
