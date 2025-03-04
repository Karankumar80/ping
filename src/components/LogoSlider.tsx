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
        <div className="relative w-full overflow-hidden py-4">
          {/* Animated Logo Slider */}
          <div className="marquee">
            <div className="marquee-content">
              {logos.map((logo, index) => (
                <div key={index} className="logo-item">
                  <img src={logo.url} alt={logo.name} className="logo-image" />
                </div>
              ))}
              {/* Duplicate for smooth looping */}
              {logos.map((logo, index) => (
                <div key={`dup-${index}`} className="logo-item">
                  <img src={logo.url} alt={logo.name} className="logo-image" />
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
            to { transform: translateX(-50%); }
          }

          .marquee {
            display: flex;
            overflow: hidden;
            white-space: nowrap;
            position: relative;
          }

          .marquee-content {
            display: flex;
            animation: marquee 15s linear infinite;
            min-width: 200%;
            align-items: center;
            gap: 3rem; /* Ensures proper spacing */
          }

          .logo-item {
            flex-shrink: 0;
            width: 160px;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            background: rgba(255, 255, 255, 0.5);
            border-radius: 12px;
            padding: 10px;
            transition: transform 0.3s ease-in-out;
          }

          .logo-item:hover {
            transform: scale(1.1);
          }

          .logo-image {
            max-width: 100%;
            max-height: 60px;
            object-fit: contain;
          }
        `}
      </style>
    </div>
  );
};

export default LogoSlider;
