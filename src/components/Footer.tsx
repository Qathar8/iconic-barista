import React from 'react';
import { Coffee, Phone, MapPin, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/image.png" 
                alt="Iconic Training Institute" 
                className="h-10 w-auto mr-3"
              />
              <div>
                <h3 className="text-xl font-bold">Iconic Training Institute</h3>
                <p className="text-amber-400 font-medium">Learn. Master. Succeed.</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Kenya's premier destination for professional barista training. We transform coffee enthusiasts 
              into skilled professionals through comprehensive, hands-on training programs.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-amber-600 p-2 rounded-lg hover:bg-amber-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-amber-600 p-2 rounded-lg hover:bg-amber-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-amber-600 p-2 rounded-lg hover:bg-amber-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-amber-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#courses" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">0745 286 777</p>
                  <p className="text-sm text-gray-400">Call or WhatsApp</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Biashara Plaza, 5th floor R5<br />
                    Biashara Street & Moi Avenue Junction<br />
                    Nairobi, Kenya
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">info@iconictraining.co.ke</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Iconic Training Institute. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
              <div className="flex items-center space-x-2">
                <Coffee className="w-4 h-4 text-amber-400" />
                <span>Made with passion for coffee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;