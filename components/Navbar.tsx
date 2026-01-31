import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Leaf, FileText } from 'lucide-react';
import { NavigationLinks } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hintergrundfarbe anpassen
  const navClass = `fixed w-full z-50 transition-all duration-500 bg-[#1a261b] shadow-lg py-4`;

  const textColor = 'text-white';
  const logoColor = 'text-white';
  const hoverColor = 'text-gold-500';

  const navLinks = [
    { name: 'Home', path: NavigationLinks.HOME },
    { name: 'Services', path: NavigationLinks.SERVICES },
    { name: 'Projects', path: NavigationLinks.PROJECTS },
    { name: 'Gallery', path: NavigationLinks.GALLERY },
    { name: 'About', path: NavigationLinks.ABOUT },
    { name: 'Contact', path: NavigationLinks.CONTACT },
  ];

  return (
    <>
      <nav className={navClass}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            {/* Logo */}
            <Link to={NavigationLinks.HOME} className="flex flex-col items-center group z-50">
              <div className={`flex items-center ${logoColor} group-hover:${hoverColor} transition-colors`}>
                <Leaf className="h-8 w-8 mr-2" />
                <div className="flex flex-col">
                  <span className="text-lg font-serif font-bold leading-none">Lujan landscaping</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs uppercase tracking-[0.15em] font-bold transition-all duration-300 border-b-2 border-transparent hover:border-gold-500 pb-1 ${location.pathname === link.path ? 'text-gold-500 border-gold-500' : `${textColor} hover:text-gold-500`
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Kontakt - Desktop */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6 pl-4 lg:pl-8 lg:border-l lg:border-white/20">
              <a href="tel:+17205303933" className="flex items-center text-gold-500 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full border border-gold-500 flex items-center justify-center mr-3 group-hover:bg-gold-500 group-hover:text-earth-900 transition-all">
                  <Phone size={14} />
                </div>
                <span className={`text-sm font-bold tracking-wide ${textColor} group-hover:text-gold-500 transition-colors`}>+1 720-530-3933

                </span>
              </a>
            </div>

            {/* Mobile Menü Button */}
            <div className="md:hidden flex items-center z-50">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-gold-500 transition-colors p-2">
                {isOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menü Overlay */}
        <div className={`fixed inset-0 bg-[#1a261b] transform transition-transform duration-500 ease-in-out z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8 pt-16">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-serif text-white hover:text-gold-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <div className="mt-12 flex flex-col items-center space-y-4 border-t border-white/10 pt-12 w-48">
              <a href="mailto:lujanlandscapingllc@gmail.com" className="flex flex-col items-center text-gold-500">
                <span className="text-xl font-serif text-white">lujanlandscapingllc@gmail.com</span>
              </a>
              <a href="tel:+17205303933" className="flex flex-col items-center text-gold-500">
                <Phone size={32} className="mb-2" />
                <span className="text-xl font-serif text-white">+1 720-530-3933</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Platz für die feste Navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;