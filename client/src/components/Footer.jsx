import React, { useState } from 'react';
import { Leaf, Send, MapPin, Phone, Mail } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Shop', href: '#shop' },
  { label: 'Plant Care', href: '#plant-care' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'FAQs', href: '#faqs' },
];

/* Inline SVG social icons (lucide-react doesn't export brand icons) */
const FacebookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TwitterIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const YoutubeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const socialLinks = [
  { icon: FacebookIcon, label: 'Facebook', href: '#' },
  { icon: TwitterIcon, label: 'Twitter', href: '#' },
  { icon: InstagramIcon, label: 'Instagram', href: '#' },
  { icon: YoutubeIcon, label: 'Youtube', href: '#' },
];

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-flora-bg-light border-t border-flora-border/50 pt-12 md:pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 pb-10 md:pb-12 border-b border-flora-border/50">
          {/* Brand Column */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-flora-accent/20 flex items-center justify-center group-hover:bg-flora-accent/30 transition-colors duration-300">
                <Leaf className="w-5 h-5 text-flora-accent" />
              </div>
              <span className="text-lg font-semibold text-flora-text tracking-tight">
                Flora<span className="text-flora-accent">Vision</span>
              </span>
            </a>
            <p className="text-flora-text-secondary text-sm leading-relaxed max-w-xs">
              The best online plant store for all your indoor gardening needs.
              We provide healthy, beautiful plants delivered right to your
              doorstep with care and love.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-flora-text-muted text-xs sm:text-sm">
                <MapPin className="w-4 h-4 text-flora-accent flex-shrink-0" />
                <span>123 Green Street, Nature City</span>
              </div>
              <div className="flex items-center gap-2 text-flora-text-muted text-xs sm:text-sm">
                <Phone className="w-4 h-4 text-flora-accent flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-flora-text-muted text-xs sm:text-sm">
                <Mail className="w-4 h-4 text-flora-accent flex-shrink-0" />
                <span>hello@floravision.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-flora-text font-semibold text-base mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-flora-text-secondary hover:text-flora-accent text-sm transition-colors duration-300 hover:pl-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-flora-text font-semibold text-base mb-4">
              For Every Update
            </h4>
            <p className="text-flora-text-secondary text-sm mb-4 leading-relaxed">
              Subscribe to our newsletter and stay updated with the latest plant
              collections, tips, and offers.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex items-stretch gap-0"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-flora-card border border-flora-border rounded-l-lg px-4 py-2.5 text-sm text-flora-text placeholder:text-flora-text-muted focus:outline-none focus:border-flora-accent transition-colors duration-300"
                aria-label="Email for newsletter"
                required
              />
              <button
                type="submit"
                className="bg-flora-accent hover:bg-flora-accent-light text-white px-4 rounded-r-lg transition-colors duration-300 flex items-center justify-center cursor-pointer"
                aria-label="Subscribe to newsletter"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-9 h-9 rounded-full bg-flora-card hover:bg-flora-accent/20 flex items-center justify-center text-flora-text-muted hover:text-flora-accent transition-all duration-300 border border-flora-border/50 hover:border-flora-accent/30"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-flora-text-muted text-xs sm:text-sm">
            © 2024 FloraVision. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
