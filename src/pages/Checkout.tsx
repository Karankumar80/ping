import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Facebook, Twitter, Instagram, Linkedin, Navigation, Shield, Heart } from 'lucide-react';

const Checkout = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);
    setIsValid(isEmailValid);

    if (isEmailValid) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <>
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo */}
            <div className="mb-12 animate-fade-in-up">
              <div className="relative mx-auto w-24 h-24 mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse blur-xl opacity-30"></div>
                <div className="relative bg-white rounded-full p-6 shadow-xl">
                  <Navigation className="w-full h-full text-blue-600" />
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="mb-12 animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Coming Soon
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                We're crafting something extraordinary to keep you and your loved ones safe.
              </p>

              {/* Features Preview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="glass-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <Shield className="h-8 w-8 text-blue-600 mb-4 mx-auto" />
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Advanced Security</h3>
                  <p className="text-gray-600 text-sm">State-of-the-art protection for your peace of mind</p>
                </div>
                <div className="glass-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <Navigation className="h-8 w-8 text-purple-600 mb-4 mx-auto" />
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Precise Tracking</h3>
                  <p className="text-gray-600 text-sm">Real-time location monitoring with superior accuracy</p>
                </div>
                <div className="glass-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <Heart className="h-8 w-8 text-pink-600 mb-4 mx-auto" />
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Health Monitoring</h3>
                  <p className="text-gray-600 text-sm">Comprehensive health tracking and alerts</p>
                </div>
              </div>
            </div>

            {/* Newsletter Form */}
            <div className="max-w-md mx-auto mb-12 animate-fade-in-up animation-delay-200">
              {isSubmitted ? (
                <div className="glass-card p-6 rounded-lg shadow-lg bg-green-50">
                  <p className="text-lg font-semibold mb-2 text-green-700">Thank You!</p>
                  <p className="text-green-600">You'll be the first to know when we launch.</p>
                </div>
              ) : (
                <div className="glass-card p-8 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Be the First to Know</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className={`w-full px-6 py-4 rounded-lg bg-white border ${
                          isValid ? 'border-gray-200' : 'border-red-500'
                        } text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors`}
                      />
                      {!isValid && (
                        <p className="text-red-500 text-sm mt-2">Please enter a valid email address</p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all group font-semibold"
                    >
                      Notify Me
                      <ArrowRight className="ml-2 h-5 w-5 inline-block group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Fixing misplaced div closing */}
            <Link
              to="/"
              className="text-gray-500 hover:text-gray-700 transition-colors font-medium"
            >
              Return to Homepage
            </Link>
          </div> {/* Close text-center max-w-4xl mx-auto */}
        </div> {/* Close relative z-10 */}
      </div> {/* Close min-h-screen */}

    </>
  );
};

export default Checkout;
