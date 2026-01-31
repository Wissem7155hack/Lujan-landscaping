import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-earth-900 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Marke */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Leaf className="text-gold-500 h-8 w-8" />
              <div>
                <span className="block text-xl font-bold text-white font-serif">Lujan landscaping</span>
                <span className="block text-xs text-gray-400">Professional Landscaping Services</span>
                <span className="block text-[0.6rem] tracking-[0.4em] text-gold-500 uppercase">Denver, CO</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Creating beautiful and sustainable outdoor spaces with quality landscaping services for Denver and surrounding areas.
            </p>
          </div>

          {/* Schnelle Links */}
          <div>
            <h3 className="text-lg font-serif mb-6 text-gold-500">Navigation</h3>
            <ul className="space-y-3 text-gray-300 text-sm tracking-wide">
              <li><Link to="/" className="hover:text-gold-500 transition-colors flex items-center"><span className="w-1 h-1 bg-gold-500 rounded-full mr-2"></span>Home</Link></li>
              <li><Link to="/services" className="hover:text-gold-500 transition-colors flex items-center"><span className="w-1 h-1 bg-gold-500 rounded-full mr-2"></span>Services</Link></li>
              <li><Link to="/projects" className="hover:text-gold-500 transition-colors flex items-center"><span className="w-1 h-1 bg-gold-500 rounded-full mr-2"></span>Projects</Link></li>
              <li><Link to="/about" className="hover:text-gold-500 transition-colors flex items-center"><span className="w-1 h-1 bg-gold-500 rounded-full mr-2"></span>About</Link></li>
              <li><Link to="/contact" className="hover:text-gold-500 transition-colors flex items-center"><span className="w-1 h-1 bg-gold-500 rounded-full mr-2"></span>Contact</Link></li>
            </ul>
          </div>

          {/* Kontaktinformationen */}
          <div>
            <h3 className="text-lg font-serif mb-6 text-gold-500">Contact</h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-start group">
                <MapPin size={18} className="mr-3 mt-0.5 shrink-0 text-gray-500 group-hover:text-gold-500 transition-colors" />
                <span>Martin Luther King Jr. Blvd, Denver, CO 80205</span>
              </li>
              <li className="flex items-center group">
                <Phone size={18} className="mr-3 shrink-0 text-gray-500 group-hover:text-gold-500 transition-colors" />
                <span>+1 720-530-3933</span>
              </li>
              <li className="flex items-center group">
                <Mail size={18} className="mr-3 shrink-0 text-gray-500 group-hover:text-gold-500 transition-colors" />
                <span>lujanlandscapingllc@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Sozial */}
          <div>
            <h3 className="text-lg font-serif mb-6 text-gold-500">Stay Connected</h3>
            <p className="text-xs text-gray-500 mb-4">Subscribe to our newsletter</p>
            <div className="flex mb-6">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white/5 border-b border-white/20 p-2 w-full text-sm outline-none focus:border-gold-500 transition-colors"
              />
              <button className="text-gold-500 hover:text-white border-b border-gold-500 hover:border-white px-2 transition-all uppercase text-xs font-bold">
                Subscribe
              </button>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61579944943986"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 hover:text-earth-900 transition-all"
              >
                <Facebook size={18} />


              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Lujan landscaping. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;