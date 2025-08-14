import React from 'react';
import { Coffee, Users, Clock, Award, CheckCircle, Star, Zap, Target, BookOpen } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Professional Barista Mastery",
      subtitle: "Complete Coffee Excellence Program",
      image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "4 Weeks",
      price: "KES 34,000",
      rating: 4.9,
      students: 500,
      level: "Beginner to Advanced",
      highlights: [
        "Espresso Extraction Mastery",
        "Advanced Latte Art Techniques", 
        "Coffee Bean Knowledge & Origins",
        "Professional Equipment Training",
        "Customer Service Excellence",
        "Café Operations Management"
      ],
      badge: "🔥 Most Popular",
      color: "from-amber-500 to-amber-700"
    },
    {
      id: 2,
      title: "Latte Art Specialist",
      subtitle: "Creative Coffee Art Mastery",
      image: "https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "2 Weeks",
      price: "KES 18,000",
      rating: 4.8,
      students: 250,
      level: "Intermediate",
      highlights: [
        "Basic to Advanced Patterns",
        "Free Pour Techniques",
        "Etching & Stencil Art",
        "Milk Texturing Perfection",
        "Competition Preparation",
        "Portfolio Development"
      ],
      badge: "🎨 Creative Focus",
      color: "from-blue-500 to-blue-700"
    },
    {
      id: 3,
      title: "Coffee Business Entrepreneur",
      subtitle: "Start Your Coffee Empire",
      image: "https://images.pexels.com/photos/1002740/pexels-photo-1002740.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "3 Weeks",
      price: "KES 28,000",
      rating: 4.7,
      students: 180,
      level: "Advanced",
      highlights: [
        "Business Plan Development",
        "Coffee Shop Setup",
        "Financial Management",
        "Marketing Strategies",
        "Supplier Relationships",
        "Staff Training Systems"
      ],
      badge: "💼 Business Focus",
      color: "from-green-500 to-green-700"
    },
    {
      id: 4,
      title: "Specialty Coffee Cupping",
      subtitle: "Professional Coffee Tasting",
      image: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "1 Week",
      price: "KES 12,000",
      rating: 4.9,
      students: 120,
      level: "All Levels",
      highlights: [
        "Sensory Evaluation Skills",
        "Coffee Quality Assessment",
        "Flavor Profile Identification",
        "Cupping Protocols",
        "Coffee Grading Systems",
        "Professional Certification"
      ],
      badge: "👅 Taste Expert",
      color: "from-purple-500 to-purple-700"
    }
  ];

  return (
    <section id="courses" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-amber-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced section header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-full font-bold text-lg mb-6 shadow-xl">
            <Coffee className="w-6 h-6 mr-2 animate-spin-slow" />
            Course Catalog
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 mb-4 sm:mb-6 px-4 sm:px-0">
            <span className="bg-gradient-to-r from-slate-800 to-amber-600 bg-clip-text text-transparent">
              Choose Your Coffee
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">
              Journey ☕
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            🚀 Discover our comprehensive training programs designed to transform you into a 
            <span className="text-amber-600 font-bold"> coffee professional</span>
          </p>
        </div>

        {/* Course catalog grid */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {courses.map((course, index) => (
            <div key={course.id} className="group relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-4 border border-amber-100 mx-4 sm:mx-0">
              {/* Course badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                  {course.badge}
                </span>
              </div>

              {/* Course image */}
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${course.color} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>
                
                {/* Floating stats */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg">
                  <div className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="font-bold text-slate-800">{course.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm mt-1">
                    <Users className="w-4 h-4 text-amber-600" />
                    <span className="font-semibold text-slate-700">{course.students}+</span>
                  </div>
                </div>
              </div>

              {/* Course content */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-amber-100 text-amber-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    {course.level}
                  </span>
                  <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2 group-hover:text-amber-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-amber-600 font-semibold mb-4 sm:mb-6 text-sm sm:text-base">{course.subtitle}</p>

                {/* Course highlights */}
                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {course.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium text-sm sm:text-base">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-slate-800 text-center sm:text-left">{course.price}</div>
                    <div className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">Complete Package</div>
                  </div>
                  <button className={`bg-gradient-to-r ${course.color} text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold hover:shadow-xl transform active:scale-95 sm:hover:scale-105 transition-all duration-300 flex items-center space-x-2 touch-manipulation w-full sm:w-auto justify-center`}>
                    <span>Enroll Now</span>
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced features section */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">
              🌟 Why Our Training Stands Out
            </h3>
            <p className="text-xl text-gray-300">
              Experience the difference with our world-class facilities and expert instruction
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-2xl">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4">🎯 Hands-On Training</h4>
              <p className="text-gray-300 leading-relaxed">
                Learn with professional-grade equipment in our state-of-the-art training facility
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-2xl">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4">🏆 Expert Instructors</h4>
              <p className="text-gray-300 leading-relaxed">
                Learn from certified baristas with years of industry experience and competition wins
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-2xl">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4">📚 Complete Curriculum</h4>
              <p className="text-gray-300 leading-relaxed">
                Comprehensive training covering everything from basics to advanced techniques
              </p>
            </div>
          </div>
        </div>

        {/* Training gallery */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-slate-800 mb-8">
            📸 Training Gallery
          </h3>
          <p className="text-xl text-gray-600 mb-12">
            See our students master the art of coffee making
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              image: "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400",
              title: "Latte Art Mastery"
            },
            {
              image: "https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=400",
              title: "Espresso Perfection"
            },
            {
              image: "https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=400",
              title: "Creative Designs"
            },
            {
              image: "https://images.pexels.com/photos/1002740/pexels-photo-1002740.jpeg?auto=compress&cs=tinysrgb&w=400",
              title: "Professional Setup"
            }
          ].map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h4 className="font-bold text-lg">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;