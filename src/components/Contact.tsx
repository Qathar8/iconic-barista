import React, { useState } from 'react';
import { Phone, MapPin, Mail, Clock, MessageCircle, Send, Zap, Star, Heart } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white via-amber-50 to-slate-50 relative overflow-hidden">
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
            Get In Touch
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-800 mb-6">
            <span className="bg-gradient-to-r from-slate-800 to-amber-600 bg-clip-text text-transparent">
              Start Your Coffee
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">
              Journey Today! ☕
            </span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            🚀 Ready to transform your passion into a profession? Contact us today for more information or to 
            <span className="text-amber-600 font-bold"> enroll in our next intake</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Enhanced contact information */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-10 shadow-2xl text-white">
              <h3 className="text-3xl font-bold mb-10 text-center">
                <Star className="w-8 h-8 inline mr-3 text-amber-400 animate-spin-slow" />
                Contact Information
                <Star className="w-8 h-8 inline ml-3 text-amber-400 animate-spin-slow" />
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6 group">
                  <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-4 rounded-2xl shadow-xl group-hover:scale-110 transition-transform">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-amber-400">📞 Phone</h4>
                    <p className="text-2xl font-bold text-white mb-1">0745 286 777</p>
                    <p className="text-amber-200">Call or WhatsApp us anytime</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-xl group-hover:scale-110 transition-transform">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-blue-400">📍 Address</h4>
                    <p className="text-white leading-relaxed">
                      <span className="font-semibold">Biashara Plaza, 5th floor R5</span><br />
                      Biashara Street & Moi Avenue Junction<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl shadow-xl group-hover:scale-110 transition-transform">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-green-400">✉️ Email</h4>
                    <p className="text-white font-semibold">info@iconictraining.co.ke</p>
                    <p className="text-green-200">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-2xl shadow-xl group-hover:scale-110 transition-transform">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-purple-400">🕒 Office Hours</h4>
                    <p className="text-white leading-relaxed">
                      <span className="font-semibold">Monday - Friday:</span> 8:00 AM - 6:00 PM<br />
                      <span className="font-semibold">Saturday:</span> 9:00 AM - 4:00 PM<br />
                      <span className="font-semibold">Sunday:</span> Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced WhatsApp CTA */}
            <div className="mt-8 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-white/20 p-3 rounded-full">
                    <MessageCircle className="w-8 h-8 text-white animate-bounce" />
                  </div>
                  <h4 className="font-bold text-2xl">💬 Quick WhatsApp Contact</h4>
                </div>
                <p className="text-green-100 mb-6 text-lg leading-relaxed">
                  Get instant answers to your questions and start your enrollment process via WhatsApp! 
                  Our team is ready to help you begin your coffee journey.
                </p>
                <a
                  href="https://wa.me/254745286777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-white text-green-600 px-8 py-4 rounded-2xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl font-bold text-lg"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>🚀 Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Enhanced contact form */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-amber-100">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-slate-800 mb-4">
                  📝 Send us a Message
                </h3>
                <p className="text-lg text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours!
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-3">
                    👤 Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-lg font-medium"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-3">
                    ✉️ Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-lg font-medium"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-3">
                    📱 Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-lg font-medium"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-3">
                    💬 Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all resize-none text-lg font-medium"
                    placeholder="Tell us about your interest in barista training, your goals, and any questions you have..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-6 px-8 rounded-2xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl hover:shadow-amber-500/50 flex items-center justify-center space-x-3"
                >
                  <Send className="w-6 h-6" />
                  <span>🚀 Send Message</span>
                  <Zap className="w-6 h-6" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Enhanced map section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-slate-800 mb-6">
              📍 Find Us in Nairobi
            </h3>
            <p className="text-xl text-gray-600">
              Located in the heart of Nairobi's business district for easy access
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-slate-100 to-amber-100 rounded-3xl p-8 shadow-2xl border border-amber-200">
            <div className="bg-white rounded-2xl h-96 flex items-center justify-center shadow-xl">
              <div className="text-center">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-slate-800 mb-4">
                  🏢 Visit Our Training Center
                </h4>
                <p className="text-lg text-gray-600 max-w-md mx-auto leading-relaxed">
                  Interactive map showing our prime location at<br />
                  <span className="font-bold text-amber-600">Biashara Plaza, 5th floor R5</span><br />
                  Biashara Street & Moi Avenue Junction, Nairobi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;