import React, { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-amber-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>0745 286 777</span>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>Biashara Plaza, 5th floor R5, Nairobi</span>
            </div>
          </div>
          <div className="text-xs">
            Professional Barista Training
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/public/image.png" 
              alt="Iconic Training Institute" 
              className="h-12 w-auto"
            />
            <div className="ml-3">
              <h1 className="text-xl font-bold text-slate-800">Iconic Training Institute</h1>
              <p className="text-sm text-amber-600 font-medium">Learn. Master. Succeed.</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">
              Home
            </a>
            <a href="#courses" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">
              Courses
            </a>
            <a href="#about" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">
              About
            </a>
            <a href="#testimonials" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">
              Contact
            </a>
            <button className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors font-medium">
              Enroll Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-amber-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-slate-700 hover:text-amber-600 font-medium">
                Home
              </a>
              <a href="#courses" className="text-slate-700 hover:text-amber-600 font-medium">
                Courses
              </a>
              <a href="#about" className="text-slate-700 hover:text-amber-600 font-medium">
                About
              </a>
              <a href="#testimonials" className="text-slate-700 hover:text-amber-600 font-medium">
                Testimonials
              </a>
              <a href="#contact" className="text-slate-700 hover:text-amber-600 font-medium">
                Contact
              </a>
              <button className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors font-medium w-full">
                Enroll Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;