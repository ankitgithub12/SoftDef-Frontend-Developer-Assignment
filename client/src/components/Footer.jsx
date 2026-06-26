import React, { useState } from 'react';

// Custom Lucide-style SVG social icons
const FacebookIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed: ${email}`);
      setEmail('');
    }
  };

  return (
    <footer id="contact" className="relative bg-[#0b180c] border-t border-[#233b23] pt-16 pb-8 text-left font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 pb-12 border-b border-[#233b23]/50">
          
          {/* Logo and Tagline */}
          <div className="space-y-6">
            <a href="#home" className="flex items-center gap-1 group">
              <span className="text-2xl font-extrabold text-white tracking-tight">
                FloraVision<span className="text-[#4ade80]">.</span>
              </span>
            </a>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm font-normal">
              From lush indoor greens to vibrant outdoor blooms, our plants are crafted to refresh and elevate your living environment.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#facebook"
                className="w-10 h-10 rounded-full bg-[#1a2e1a] hover:bg-[#4ade80] flex items-center justify-center text-gray-300 hover:text-black border border-[#233b23] hover:border-[#4ade80] transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4.5 h-4.5" />
              </a>
              <a
                href="#twitter"
                className="w-10 h-10 rounded-full bg-[#1a2e1a] hover:bg-[#4ade80] flex items-center justify-center text-gray-300 hover:text-black border border-[#233b23] hover:border-[#4ade80] transition-all duration-300"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4.5 h-4.5" />
              </a>
              <a
                href="#linkedin"
                className="w-10 h-10 rounded-full bg-[#1a2e1a] hover:bg-[#4ade80] flex items-center justify-center text-gray-300 hover:text-black border border-[#233b23] hover:border-[#4ade80] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4 sm:pl-4 lg:pl-12">
            <h4 className="text-white font-bold text-base tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3 font-medium">
              <li>
                <a href="#home" className="text-gray-300 hover:text-[#4ade80] text-sm transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#trending" className="text-gray-300 hover:text-[#4ade80] text-sm transition-colors duration-300">
                  Types Of Plant's
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-[#4ade80] text-sm transition-colors duration-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-300 hover:text-[#4ade80] text-sm transition-colors duration-300">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide uppercase">
              For Every Update.
            </h4>
            <form onSubmit={handleSubscribe} className="flex items-stretch gap-2 mt-2 max-w-sm">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="flex-1 bg-[#1a2e1a] border border-[#233b23] rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#4ade80] transition-all duration-300"
                aria-label="Email for newsletter"
                required
              />
              <button
                type="submit"
                className="bg-white hover:bg-gray-100 text-black font-bold px-6 rounded-xl text-sm transition-colors duration-300 flex items-center justify-center cursor-pointer"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            FloraVision © all right reserve
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
