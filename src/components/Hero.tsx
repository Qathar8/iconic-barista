import React from 'react';
import { Coffee, Award, Users, Clock, Star, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-800 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-amber-600/20 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Coffee beans floating animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Coffee className="w-8 h-8 text-amber-400/30" />
        </div>
        <div className="absolute top-1/3 right-1/3 animate-float-delayed">
          <Coffee className="w-6 h-6 text-amber-300/20" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float-slow">
          <Coffee className="w-10 h-10 text-amber-500/25" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="bg-gradient-to-r from-amber-400 to-amber-600 p-4 rounded-full shadow-2xl animate-pulse">
                <Coffee className="w-12 h-12 text-white" />
              </div>
              <div className="ml-4 text-amber-400 font-bold text-xl">Professional Training</div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
                Professional
              </span>
              <span className="block bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent animate-pulse">
                Barista Training
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl text-amber-300 font-semibold mt-4">
                in Nairobi
              </span>
            </h1>
            
            <div className="relative">
              <p className="text-2xl md:text-3xl text-amber-400 font-bold mb-8 animate-bounce">
                ✨ Learn. Master. Succeed. ✨
              </p>
            </div>
            
            <p className="text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
              🚀 Transform your passion for coffee into a <span className="text-amber-400 font-semibold">professional career</span>. 
              Join Kenya's most prestigious barista training institute and master the art of coffee making, 
              stunning latte art, and exceptional customer service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <button className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all transform hover:scale-110 shadow-2xl hover:shadow-amber-500/50 flex items-center justify-center space-x-3">
                <span>🎯 Enroll Now</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="border-3 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-10 py-5 rounded-2xl font-bold text-xl transition-all transform hover:scale-105 shadow-xl">
                📚 Learn More
              </button>
            </div>
          </div>

          {/* Right content - Enhanced course highlights */}
          <div className="relative">
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-amber-400/30 shadow-2xl">
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-amber-400 to-amber-600 text-white px-6 py-2 rounded-full font-bold text-sm animate-pulse">
                🔥 HOT DEAL!
              </div>
              
              <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-amber-400 to-white bg-clip-text text-transparent">
                ☕ Course Highlights
              </h3>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-2xl p-6 border border-amber-400/20">
                  <Clock className="w-10 h-10 text-amber-400 mx-auto mb-3 animate-spin-slow" />
                  <div className="text-lg font-bold text-white">Duration</div>
                  <div className="text-2xl font-black text-amber-400">1 Month</div>
                  <div className="text-sm text-amber-200">Intensive</div>
                </div>
                
                <div className="text-center bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-2xl p-6 border border-amber-400/20">
                  <Award className="w-10 h-10 text-amber-400 mx-auto mb-3 animate-bounce" />
                  <div className="text-lg font-bold text-white">Investment</div>
                  <div className="text-2xl font-black text-amber-400">KES 34,000</div>
                  <div className="text-sm text-amber-200">All Inclusive</div>
                </div>
                
                <div className="text-center bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-2xl p-6 border border-amber-400/20">
                  <Users className="w-10 h-10 text-amber-400 mx-auto mb-3 animate-pulse" />
                  <div className="text-lg font-bold text-white">Intake</div>
                  <div className="text-2xl font-black text-amber-400">Monthly</div>
                  <div className="text-sm text-amber-200">Limited Seats</div>
                </div>
                
                <div className="text-center bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-2xl p-6 border border-amber-400/20">
                  <Star className="w-10 h-10 text-amber-400 mx-auto mb-3 animate-spin" />
                  <div className="text-lg font-bold text-white">Certification</div>
                  <div className="text-2xl font-black text-amber-400">Professional</div>
                  <div className="text-sm text-amber-200">Recognized</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-amber-600/30 to-amber-500/20 rounded-2xl p-6 border border-amber-400/40 text-center">
                <p className="text-amber-200 font-bold text-lg mb-2">
                  🎯 Next Intake: January 2025
                </p>
                <p className="text-white font-semibold">
                  ⚡ Only 8 Spots Left!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;