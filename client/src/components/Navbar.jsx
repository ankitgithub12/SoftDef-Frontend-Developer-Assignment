import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f1f10]/95 backdrop-blur-md border-b border-[#233b23]/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-1 group">
            <span className="text-2xl font-sans font-extrabold text-white tracking-tight">
              FloraVision<span className="text-[#4ade80] font-sans">.</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 font-sans">
            <a
              href="#home"
              className="text-sm font-medium text-white hover:text-[#4ade80] transition-colors duration-300"
            >
              Home
            </a>
            
            {/* Dropdown Link */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseEnter={() => setIsDropdownOpen(true)}
                className="flex items-center gap-1 text-sm font-medium text-white hover:text-[#4ade80] transition-colors duration-300 cursor-pointer"
              >
                <span>How To Take</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="absolute left-0 mt-2 w-48 rounded-xl bg-[#1a2e1a] border border-[#233b23] py-2 shadow-xl animate-fade-in-up z-50"
                >
                  <a
                    href="#watering"
                    className="block px-4 py-2.5 text-xs text-gray-300 hover:text-white hover:bg-[#223c22] transition-colors"
                  >
                    Watering Guide
                  </a>
                  <a
                    href="#sunlight"
                    className="block px-4 py-2.5 text-xs text-gray-300 hover:text-white hover:bg-[#223c22] transition-colors"
                  >
                    Sunlight Exposure
                  </a>
                  <a
                    href="#fertilizing"
                    className="block px-4 py-2.5 text-xs text-gray-300 hover:text-white hover:bg-[#223c22] transition-colors"
                  >
                    Fertilizing & Soil
                  </a>
                </div>
              )}
            </div>

            <a
              href="#shop"
              className="text-sm font-medium text-white hover:text-[#4ade80] transition-colors duration-300"
            >
              Plant
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-white hover:text-[#4ade80] transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          {/* Desktop Right Side Icons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              className="p-2 text-gray-300 hover:text-[#4ade80] transition-colors duration-300 cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="p-2 text-gray-300 hover:text-[#4ade80] transition-colors duration-300 relative cursor-pointer"
              aria-label="Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#4ade80] rounded-full"></span>
            </button>
          </div>

          {/* Mobile Menu Button & Icons */}
          <div className="flex md:hidden items-center gap-3">
            <button
              className="p-2 text-gray-300 hover:text-[#4ade80] transition-colors duration-300 cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="p-2 text-gray-300 hover:text-[#4ade80] transition-colors duration-300 relative cursor-pointer"
              aria-label="Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#4ade80] rounded-full"></span>
            </button>
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-300 hover:text-[#4ade80] transition-colors duration-300 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0f1f10] border-t border-[#233b23] py-4 px-6 space-y-3 font-sans">
          <a
            href="#home"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-base text-gray-300 hover:text-white transition-colors"
          >
            Home
          </a>
          <div className="py-2">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">How To Take</p>
            <div className="pl-4 space-y-2 border-l border-[#233b23]">
              <a
                href="#watering"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm text-gray-300 hover:text-white"
              >
                Watering Guide
              </a>
              <a
                href="#sunlight"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm text-gray-300 hover:text-white"
              >
                Sunlight Exposure
              </a>
              <a
                href="#fertilizing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm text-gray-300 hover:text-white"
              >
                Fertilizing & Soil
              </a>
            </div>
          </div>
          <a
            href="#shop"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-base text-gray-300 hover:text-white transition-colors"
          >
            Plant
          </a>
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-base text-gray-300 hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
