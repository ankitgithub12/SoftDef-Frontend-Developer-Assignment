import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  onClick,
  className = '',
  icon,
  ariaLabel,
  type = 'button',
}) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-poppins font-medium transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-flora-accent focus-visible:outline-offset-2';

  const variants = {
    primary:
      'bg-flora-accent hover:bg-flora-accent-light text-[#0A1F12] px-6 py-2.5 rounded-lg text-sm shadow-md hover:shadow-lg hover:shadow-flora-accent/20 active:scale-95',
    outline:
      'border border-flora-text-secondary text-flora-text-secondary hover:border-flora-accent hover:text-flora-accent px-6 py-2.5 rounded-lg text-sm active:scale-95',
    icon: 'w-10 h-10 rounded-lg bg-flora-card hover:bg-flora-card-hover text-flora-text-secondary hover:text-flora-accent border border-flora-border hover:border-flora-accent active:scale-95',
    ghost:
      'text-flora-text-secondary hover:text-flora-accent px-3 py-2 rounded-lg text-sm active:scale-95',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      aria-label={ariaLabel}
    >
      {icon && <span className="flex items-center justify-center">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
