import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Leaf } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Plants Type', href: '#trending' },
  { label: 'More', href: '#shop' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-flora-bg/80 backdrop-blur-xl border-b border-flora-border/50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group"
            aria-label="FloraVision Home"
          >
            <div className="w-8 h-8 rounded-lg bg-flora-accent/20 flex items-center justify-center group-hover:bg-flora-accent/30 transition-colors duration-300">
              <Leaf className="w-5 h-5 text-flora-accent" />
            </div>
            <span className="text-lg font-semibold text-flora-text tracking-tight">
              FloraVision<span className="text-flora-accent">.</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 lg:px-4 py-2 text-sm text-flora-text-secondary hover:text-flora-accent transition-colors duration-300 rounded-lg hover:bg-flora-accent/5 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-1">
            <button
              className="p-2.5 text-flora-text-secondary hover:text-flora-accent transition-colors duration-300 rounded-lg hover:bg-flora-accent/5 cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="p-2.5 text-flora-text-secondary hover:text-flora-accent transition-colors duration-300 rounded-lg hover:bg-flora-accent/5 relative cursor-pointer"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-flora-accent rounded-full"></span>
            </button>
            <button
              className="p-2.5 text-flora-text-secondary hover:text-flora-accent transition-colors duration-300 rounded-lg hover:bg-flora-accent/5 cursor-pointer"
              aria-label="User Account"
            >
              <User className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              className="p-2 text-flora-text-secondary hover:text-flora-accent transition-colors duration-300 cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-flora-text-secondary hover:text-flora-accent transition-colors duration-300 cursor-pointer"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed inset-0 top-16 mobile-menu-overlay transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className={`bg-flora-bg border-t border-flora-border transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-flora-text-secondary hover:text-flora-accent hover:bg-flora-accent/5 rounded-lg transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-4 px-4 pt-4 border-t border-flora-border mt-4">
              <button
                className="p-2.5 text-flora-text-secondary hover:text-flora-accent transition-colors duration-300 rounded-lg hover:bg-flora-accent/5 cursor-pointer"
                aria-label="Shopping Cart"
              >
                <ShoppingCart className="w-5 h-5" />
              </button>
              <button
                className="p-2.5 text-flora-text-secondary hover:text-flora-accent transition-colors duration-300 rounded-lg hover:bg-flora-accent/5 cursor-pointer"
                aria-label="User Account"
              >
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
