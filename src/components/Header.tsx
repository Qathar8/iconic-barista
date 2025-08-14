import React, { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-amber-600 text-white py-2 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs sm:text-sm">
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
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/image.png" 
              alt="Iconic Training Institute" 
              className="h-8 sm:h-10 lg:h-12 w-auto"
            />
            <div className="ml-2 sm:ml-3">
              <h1 className="text-sm sm:text-lg lg:text-xl font-bold text-slate-800">Iconic Training Institute</h1>
              <p className="text-xs sm:text-sm text-amber-600 font-medium hidden sm:block">Learn. Master. Succeed.</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#home" className="text-slate-700 hover:text-amber-600 font-medium transition-colors text-sm xl:text-base">
              Home
            </a>
            <a href="#courses" className="text-slate-700 hover:text-amber-600 font-medium transition-colors text-sm xl:text-base">
              Courses
            </a>
            <a href="#about" className="text-slate-700 hover:text-amber-600 font-medium transition-colors text-sm xl:text-base">
              About
            </a>
            <a href="#testimonials" className="text-slate-700 hover:text-amber-600 font-medium transition-colors text-sm xl:text-base">
              Testimonials
            </a>
            <a href="#contact" className="text-slate-700 hover:text-amber-600 font-medium transition-colors text-sm xl:text-base">
              Contact
            </a>
            <button className="bg-amber-600 text-white px-4 xl:px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors font-medium text-sm xl:text-base">
              Enroll Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-amber-600 p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-slate-700 hover:text-amber-600 font-medium px-4 py-2 rounded-lg hover:bg-amber-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#courses" 
                className="text-slate-700 hover:text-amber-600 font-medium px-4 py-2 rounded-lg hover:bg-amber-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </a>
              <a 
                href="#about" 
                className="text-slate-700 hover:text-amber-600 font-medium px-4 py-2 rounded-lg hover:bg-amber-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#testimonials" 
                className="text-slate-700 hover:text-amber-600 font-medium px-4 py-2 rounded-lg hover:bg-amber-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                className="text-slate-700 hover:text-amber-600 font-medium px-4 py-2 rounded-lg hover:bg-amber-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <button className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors font-medium mx-4 touch-manipulation">
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