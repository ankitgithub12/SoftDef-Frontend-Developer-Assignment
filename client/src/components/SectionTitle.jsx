import React from 'react';

const SectionTitle = ({ title, className = '' }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <h2 className="relative px-7 py-2.5 text-3xl sm:text-[40px] font-bold text-white tracking-[0.5px] leading-tight text-center select-none font-sans inline-block">
        {/* Left Bracket */}
        <span className="absolute left-0 top-0 bottom-0 w-[60px] border-l-2 border-t-2 border-b-2 border-[#e9f908] rounded-l-[10px]"></span>
        {title}
        {/* Right Bracket */}
        <span className="absolute right-0 top-0 bottom-0 w-[60px] border-r-2 border-t-2 border-b-2 border-[#e9f908] rounded-r-[10px]"></span>
      </h2>
    </div>
  );
};

export default SectionTitle;
