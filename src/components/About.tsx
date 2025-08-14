import React from 'react';
import { Target, Users, Award, Coffee, Star, Zap, Heart, Trophy } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-amber-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced section header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-full font-bold text-lg mb-6 shadow-xl animate-pulse">
            <Heart className="w-6 h-6 mr-2" />
            About Our Institute
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 mb-4 sm:mb-6 px-4 sm:px-0">
            <span className="bg-gradient-to-r from-slate-800 to-amber-600 bg-clip-text text-transparent">
              Where Coffee Dreams
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">
              Come True ✨
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            🚀 Kenya's most prestigious destination for professional barista training, where passion meets expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          {/* Left content with stunning visuals */}
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
            
            <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-amber-100 mx-4 sm:mx-0">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <img 
                  src="https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Professional barista training"
                  className="w-full h-24 sm:h-32 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
                />
                <img 
                  src="https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Latte art creation"
                  className="w-full h-24 sm:h-32 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 sm:mb-6 flex items-center">
                <Coffee className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600 mr-3 animate-spin-slow" />
                Our Mission
              </h3>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                At Iconic Training Institute, we are dedicated to transforming coffee enthusiasts into 
                <span className="text-amber-600 font-bold"> skilled professionals</span>. Our comprehensive training programs 
                combine theoretical knowledge with hands-on experience, ensuring our graduates are well-prepared 
                for successful careers in the thriving coffee industry.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                Located in the heart of Nairobi at Biashara Plaza, we have been shaping the future of Kenya's 
                coffee culture by providing <span className="text-amber-600 font-bold">world-class training</span> that 
                meets international standards.
              </p>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black mb-1 sm:mb-2 animate-bounce">500+</div>
                  <div className="font-semibold text-sm sm:text-base">Happy Graduates</div>
                  <div className="text-xs sm:text-sm opacity-90">Success Stories</div>
                </div>
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black mb-1 sm:mb-2 animate-bounce delay-500">5+</div>
                  <div className="font-semibold text-sm sm:text-base">Years Experience</div>
                  <div className="text-xs sm:text-sm opacity-90">Industry Leading</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Enhanced Why Choose Us */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl text-white mx-4 sm:mx-0">
              <div className="text-center mb-10">
                <div className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-base sm:text-lg mb-4">
                  <Trophy className="w-6 h-6 mr-2" />
                  Why Choose Us?
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold">🌟 Excellence in Every Cup</h3>
              </div>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start space-x-6 group">
                  <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-3 sm:p-4 rounded-2xl shadow-xl group-hover:scale-110 transition-transform flex-shrink-0">
                    <Coffee className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-amber-400">☕ Expert Instructors</h4>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      Learn from certified baristas with years of industry experience and international competition wins
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 sm:p-4 rounded-2xl shadow-xl group-hover:scale-110 transition-transform flex-shrink-0">
                    <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-blue-400">🎯 Hands-On Training</h4>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      Master your skills with professional-grade equipment in our state-of-the-art training facility
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 sm:p-4 rounded-2xl shadow-xl group-hover:scale-110 transition-transform flex-shrink-0">
                    <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-green-400">🏆 International Certification</h4>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      Earn internationally recognized certificates that open doors to global opportunities
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 sm:p-4 rounded-2xl shadow-xl group-hover:scale-110 transition-transform flex-shrink-0">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-purple-400">💼 Job Placement</h4>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      95% job placement rate with our extensive network of partner cafés and restaurants
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success metrics with images */}
        <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 rounded-3xl p-12 text-white mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 flex items-center justify-center">
              <Star className="w-10 h-10 mr-4 animate-spin-slow" />
              Our Success Story
              <Star className="w-10 h-10 ml-4 animate-spin-slow" />
            </h3>
            <p className="text-2xl opacity-90">
              🚀 Transforming lives through coffee excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center relative">
            <div className="group">
              <div className="text-5xl font-black mb-3 animate-bounce">500+</div>
              <div className="text-xl font-semibold mb-2">Graduates</div>
              <div className="text-amber-100">Success Stories</div>
            </div>
            <div className="group">
              <div className="text-5xl font-black mb-3 animate-bounce delay-300">95%</div>
              <div className="text-xl font-semibold mb-2">Job Placement</div>
              <div className="text-amber-100">Career Success</div>
            </div>
            <div className="group">
              <div className="text-5xl font-black mb-3 animate-bounce delay-500">4.9★</div>
              <div className="text-xl font-semibold mb-2">Rating</div>
              <div className="text-amber-100">Student Reviews</div>
            </div>
            <div className="group">
              <div className="text-5xl font-black mb-3 animate-bounce delay-700">50+</div>
              <div className="text-xl font-semibold mb-2">Partner Cafés</div>
              <div className="text-amber-100">Industry Network</div>
            </div>
          </div>
        </div>

        {/* Enhanced call to action with coffee imagery */}
        <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-12 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Coffee background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/90"></div>
          
          <div className="relative text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4 rounded-full font-bold text-xl mb-8 shadow-2xl animate-pulse">
              <Zap className="w-6 h-6 mr-3" />
              Ready to Start?
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              🚀 Start Your Coffee Journey Today!
            </h3>
            <p className="text-2xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of successful graduates who have transformed their passion into a 
              <span className="text-amber-400 font-bold"> thriving profession</span>
            </p>
            <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-12 py-6 rounded-2xl font-bold text-2xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center space-x-4 mx-auto">
              <span>🎯 Get Started Now</span>
              <Zap className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;