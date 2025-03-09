import React from "react";

interface LogoSliderProps {
  title: string;
  logos: {
    name: string;
    url: string;
  }[];
}

const LogoSlider: React.FC<LogoSliderProps> = ({ title, logos }) => {
  return (
    <div className="py-16 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo Slider Container */}
        <div className="glass-card rounded-2xl p-8 shadow-xl relative overflow-hidden">
          {/* Title inside the box */}
          <div className="text-center mb-8 relative z-20">
            <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              {title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white/80 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white/80 to-transparent z-10"></div>

          {/* Animated Logo Track */}
          <div className="overflow-hidden py-4">
            <div className="flex animate-marquee">
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-8 relative group"
                >
                  <div className="glass-card p-6 rounded-xl backdrop-blur-sm shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                    <div className="relative w-32 h-20 flex items-center justify-center">
                      {/* Decorative background effects */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-purple-100/30 to-pink-100/30 rounded-lg"></div>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-lg animate-pulse"></div>
                      </div>
                      <img
                        src={logo.url}
                        alt={logo.name}
                        className="max-w-full max-h-full object-contain relative z-10 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {logos.map((logo, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-8 relative group"
                >
                  <div className="glass-card p-6 rounded-xl backdrop-blur-sm shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                    <div className="relative w-32 h-20 flex items-center justify-center">
                      {/* Decorative background effects */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-purple-100/30 to-pink-100/30 rounded-lg"></div>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-lg animate-pulse"></div>
                      </div>
                      <img
                        src={logo.url}
                        alt={logo.name}
                        className="max-w-full max-h-full object-contain relative z-10 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dynamic Background Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Add required animations to index.css */}
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            animation: marquee 14s linear infinite;
            display: flex;
            width: max-content;
          }

          .animate-marquee:hover {
            animation-play-state: paused;
          }

          @media (prefers-reduced-motion: reduce) {
            .animate-marquee {
              animation: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default LogoSlider;
