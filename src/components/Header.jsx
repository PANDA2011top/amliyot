import React, { useState } from 'react';
import { Menu, X, Play, CheckCircle } from 'lucide-react';

const SkilllineHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-white/90 backdrop-blur-sm shadow-lg relative z-50">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="text-xl font-bold text-blue-500">Skillline</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {['Home', 'Careers', 'Blog', 'About Us'].map((item) => (
              <li key={item}>
                <a 
                  href="#" 
                  className="text-slate-600 hover:text-blue-500 font-medium transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Auth Buttons & Mobile Menu */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#" 
              className="text-slate-600 hover:text-blue-500 font-medium px-4 py-2 rounded-lg hover:bg-blue-50 transition-all duration-300"
            >
              Login
            </a>
            <a 
              href="#" 
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Sign Up
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 md:hidden">
            <nav className="flex flex-col gap-4 px-6">
              {['Home', 'Careers', 'Blog', 'About Us'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="text-slate-600 hover:text-blue-500 font-medium py-2"
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t">
                <a href="#" className="text-slate-600 font-medium py-2">Login</a>
                <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg font-semibold text-center">
                  Sign Up
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="flex flex-col lg:flex-row items-center justify-between px-6 py-12 lg:py-20 max-w-7xl mx-auto">
        {/* Hero Content */}
        <div className="flex-1 max-w-2xl lg:mr-12">
          <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-6 text-slate-800">
            Studying <span className="text-indigo-600">Online</span> is now much easier
          </h1>
          
          <p className="text-slate-600 text-lg lg:text-xl leading-relaxed mb-8">
            Skillline is an interesting platform that will teach you in more an interactive way
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
            <a 
              href="#" 
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Join for free
            </a>
            
            <a 
              href="#" 
              className="flex items-center gap-3 text-slate-600 hover:text-blue-500 font-medium transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Play size={16} fill="white" className="text-white ml-0.5" />
              </div>
              Watch how it works
            </a>
          </div>
          
          {/* Notification */}
          <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-4 flex items-center gap-3 animate-pulse">
            <div className="w-6 h-6 bg-orange-500 rounded-md flex items-center justify-center">
              <CheckCircle size={16} className="text-white" />
            </div>
            <div>
              <div className="font-semibold text-orange-800">Congratulations</div>
              <div className="text-orange-600">Your admission completed</div>
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="flex-1 relative mt-12 lg:mt-0">
          <div className="relative">
            {/* Decorative Shapes */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-70 animate-pulse delay-1000"></div>
            
            {/* Student Photo */}
            <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-orange-300 rounded-3xl transform rotate-6 opacity-20"></div>
              
              {/* Student Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1594736797933-d0b22a7e1b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&h=687&q=80" 
                  alt="Happy student with books and congratulations notification"
                  className="w-full h-full object-cover"
                />
                
                {/* Congratulations Notification Overlay */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg flex items-center gap-3 animate-bounce">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-orange-800 text-sm">Congratulations</div>
                    <div className="text-orange-600 text-xs">Your admission completed</div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-6 right-6 w-8 h-8 bg-white rounded-lg shadow-lg flex items-center justify-center animate-bounce delay-500">
                  <span className="text-green-500 font-bold">✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SkilllineHeader;