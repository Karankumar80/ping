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
    <div className="py-16 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Infinite Scrolling Wrapper */}
        <div className="relative overflow-hidden py-4">
          {/* Colorful background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500 rounded-full filter blur-xl"></div>
            <div className="absolute bottom-0 left-1/2 w-40 h-40 bg-purple-500 rounded-full filter blur-xl"></div>
            <div className="absolute top-1/2 right-1/4 w-36 h-36 bg-pink-500 rounded-full filter blur-xl"></div>
          </div>

          {/* Infinite Loop Container */}
          <div className="flex whitespace-nowrap overflow-hidden">
            <div className="flex space-x-12 animate-marquee">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 h-20 w-40 flex items-center justify-center glass-card rounded-xl px-4 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white/30 hover:border-white/50"
                  style={{
                    background: `linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.4))`,
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="max-h-12 max-w-full object-contain transition-all duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>

            {/* Clone for seamless looping */}
            <div className="flex space-x-12 animate-marquee">
              {logos.map((logo, index) => (
                <div
                  key={`clone-${index}`}
                  className="flex-shrink-0 h-20 w-40 flex items-center justify-center glass-card rounded-xl px-4 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white/30 hover:border-white/50"
                  style={{
                    background: `linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.4))`,
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="max-h-12 max-w-full object-contain transition-all duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS for Infinite Animation */}
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-100%); }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 15s linear infinite;
            min-width: max-content;
          }
        `}
      </style>
    </div>
  );
};

export default LogoSlider;
