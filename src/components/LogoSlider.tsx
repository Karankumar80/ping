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
          <div className="marquee-container">
            {[...logos, { name: "spacer", url: "" }, ...logos].map((logo, index) => (
              <div
                key={index}
                className="logo-item flex-shrink-0 h-20 w-40 flex items-center justify-center rounded-xl px-4 shadow-lg border-2 border-white/30 hover:border-white/50 transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.4))`,
                  backdropFilter: "blur(10px)",
                }}
              >
                {logo.url && (
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="max-h-12 max-w-full object-contain transition-all duration-300 hover:scale-110"
                  />
                )}
              </div>
            ))}
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

          .marquee-container {
            display: flex;
            animation: marquee 20s linear infinite;
            will-change: transform;
            min-width: 200%;
            gap: 2rem; /* Space between logos */
          }

          .logo-item {
            flex-shrink: 0;
            width: 160px;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease-in-out;
          }

          .logo-item:hover {
            transform: scale(1.1);
          }
        `}
      </style>
    </div>
  );
};

export default LogoSlider;
