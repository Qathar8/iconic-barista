import React from 'react';
import { Star, Quote, Award, Heart, Zap } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Wanjiku",
      role: "Head Barista at Java House",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "The training at Iconic was absolutely life-changing! 🚀 I learned everything from basic coffee knowledge to advanced latte art. The instructors were patient, knowledgeable, and truly passionate. I got my dream job within two weeks of graduation!",
      achievement: "💼 Dream Job in 2 Weeks",
      color: "from-pink-500 to-rose-600"
    },
    {
      name: "David Kimani",
      role: "Successful Café Owner",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "After completing the course, I felt confident enough to open my own café! ☕ The business skills module was particularly helpful. The practical training with professional equipment made all the difference in my success.",
      achievement: "🏪 Opened Own Café",
      color: "from-blue-500 to-indigo-600"
    },
    {
      name: "Grace Achieng",
      role: "Senior Barista at Artcaffe",
      image: "https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "I had zero experience with coffee before joining Iconic! 🌟 The structured curriculum and hands-on approach helped me master the skills quickly. The job placement assistance was amazing - I got hired immediately after graduation!",
      achievement: "🎯 Zero to Hero Journey",
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Michael Ochieng",
      role: "Coffee Shop Manager",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "The course exceeded all my expectations! 🏆 Learning latte art was my favorite part, but the customer service training really set me apart. I've been promoted twice since completing the program - incredible ROI!",
      achievement: "📈 2 Promotions",
      color: "from-purple-500 to-violet-600"
    },
    {
      name: "Faith Njeri",
      role: "Coffee Competition Winner",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Iconic didn't just teach me coffee - they taught me excellence! ✨ The advanced techniques I learned helped me win the National Barista Championship. The training quality is absolutely world-class!",
      achievement: "🏆 National Champion",
      color: "from-amber-500 to-orange-600"
    },
    {
      name: "James Mwangi",
      role: "Coffee Consultant",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "The comprehensive training opened doors I never imagined! 🚪 Now I consult for multiple coffee shops across East Africa. The business knowledge and technical skills from Iconic made me an industry expert.",
      achievement: "🌍 Regional Expert",
      color: "from-teal-500 to-cyan-600"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-amber-600/20 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full font-bold text-xl mb-8 shadow-2xl animate-pulse">
            <Heart className="w-6 h-6 mr-3 animate-bounce" />
            Success Stories
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
              What Our Graduates
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Are Saying 🗣️
            </span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            🌟 Don't just take our word for it - hear from our successful graduates who are now 
            <span className="text-amber-400 font-bold"> thriving in the coffee industry</span>
          </p>
        </div>

        {/* Enhanced testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 border border-amber-400/20 hover:border-amber-400/40">
              {/* Achievement badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className={`bg-gradient-to-r ${testimonial.color} text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl whitespace-nowrap`}>
                  {testimonial.achievement}
                </span>
              </div>

              {/* Quote icon with animation */}
              <div className="flex justify-center mb-6 mt-4">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-4 rounded-full shadow-xl group-hover:scale-110 transition-transform">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Enhanced rating */}
              <div className="flex justify-center mb-6">
                <div className="flex items-center space-x-1 bg-amber-500/20 px-4 py-2 rounded-full">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current animate-pulse" style={{animationDelay: `${i * 100}ms`}} />
                  ))}
                </div>
              </div>

              {/* Testimonial text */}
              <p className="text-gray-200 text-lg leading-relaxed mb-8 text-center italic font-medium">
                "{testimonial.text}"
              </p>

              {/* Enhanced author info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-amber-400 shadow-xl group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-500 to-green-600 w-6 h-6 rounded-full flex items-center justify-center">
                    <Award className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                  <p className="text-amber-400 font-semibold">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced success stats */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-amber-400/20 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 flex items-center justify-center">
              <Zap className="w-10 h-10 mr-4 text-amber-400 animate-bounce" />
              Our Impact in Numbers
              <Zap className="w-10 h-10 ml-4 text-amber-400 animate-bounce" />
            </h3>
            <p className="text-xl text-gray-300">
              🚀 Real results that speak for themselves
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-2xl">
                <span className="text-2xl font-black text-white">500+</span>
              </div>
              <div className="text-2xl font-bold text-amber-400 mb-2">Happy Graduates</div>
              <div className="text-gray-300">Success Stories</div>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-2xl">
                <span className="text-2xl font-black text-white">95%</span>
              </div>
              <div className="text-2xl font-bold text-green-400 mb-2">Job Placement Rate</div>
              <div className="text-gray-300">Career Success</div>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-2xl">
                <span className="text-xl font-black text-white">4.9★</span>
              </div>
              <div className="text-2xl font-bold text-blue-400 mb-2">Average Rating</div>
              <div className="text-gray-300">Student Reviews</div>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-2xl">
                <span className="text-2xl font-black text-white">50+</span>
              </div>
              <div className="text-2xl font-bold text-purple-400 mb-2">Partner Cafés</div>
              <div className="text-gray-300">Industry Network</div>
            </div>
          </div>
        </div>

        {/* Enhanced call to action */}
        <div className="text-center bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              🚀 Ready to Join Our Success Stories?
            </h3>
            <p className="text-2xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Start your journey to becoming a professional barista today and write your own success story!
            </p>
            <button className="bg-white text-amber-600 px-12 py-6 rounded-2xl font-bold text-2xl hover:bg-gray-100 transition-all transform hover:scale-110 shadow-2xl flex items-center space-x-4 mx-auto">
              <span>🎯 Enroll Now</span>
              <Zap className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;