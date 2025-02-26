import React from 'react';
import { Shield, Heart, Navigation, Bell, Brain, MapPin, Battery, Wifi, Phone, Clock, Lock, Smartphone, Users, Bluetooth, Globe, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding pb-8">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Powerful Features for Your Safety
            </h1>
            <p className="text-xl text-gray-600">
              Discover all the innovative features that make Trackleo the leading choice for personal safety and health monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
                <div className="relative h-64">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        {feature.icon}
                        <h3 className="text-2xl font-semibold">{feature.title}</h3>
                      </div>
                      <p className="text-white/90">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Features Grid */}
     {/* <section className="section-padding bg-gradient-to-br from-blue-50/50 via-white/50 to-purple-50/50">   <section className="section-padding bg-gradient-to-br from-blue-50/50 via-white/50 to-purple-50/50">
        <div className="container-width">
          <h2 className="text-3xl font-bold text-center mb-8">Advanced Safety Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {secondaryFeatures.map((feature, index) => (
              <div key={index} className="glass-card rounded-xl overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 glass-effect p-2 rounded-lg text-blue-600">
                    {feature.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Technical Features */}
      <section className="section-padding">
        <div className="container-width">
          <h2 className="text-3xl font-bold text-center mb-8">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {technicalFeatures.map((feature, index) => (
              <div key={index} className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl">
                <div className="glass-effect w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 mb-3">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container-width">
          <div className="glass-card rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Join thousands of satisfied users who trust Trackleo for their safety and health monitoring needs.
            </p>
            <Link to="/products" className="btn btn-primary">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const mainFeatures = [
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Realtime GeoLocation",
    description: "Live location tracking with 24/7 monitoring and alerts.",
    
    image: "/assets/1.png"
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Health Monitoring",
    description: "Real-time health tracking with advanced sensors and AI analysis.",
    image: "/assets/2.png"
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "AI Voice Summarizer",
    description: "High-accuracy GPS tracking with indoor positioning capabilities.",
    image: "/assets/3.png"
  },
  {
    icon: <Bell className="h-6 w-6" />,
    title: "Smart Alerts",
    description: "Intelligent notification system with customizable alerts and emergency response.",
    image: "/assets/4.png"
  }
];

const secondaryFeatures = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: "AI-Powered Analysis",
    description: "Advanced algorithms for predictive safety alerts and health insights.",
    image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Geofencing",
    description: "Create custom safe zones with instant notifications.",
    image: "https://images.unsplash.com/photo-1553547274-0df401ae03c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Family Sharing",
    description: "Share location and health data with trusted family members.",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Emergency Calls",
    description: "One-touch emergency calling with location sharing.",
    image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Activity History",
    description: "Detailed timeline of locations and activities.",
    image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <Bluetooth className="h-6 w-6" />,
    title: "Bluetooth Connectivity",
    description: "Seamless connection with other smart devices.",
    image: "https://images.unsplash.com/photo-1520509414578-d9cbf09933a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const technicalFeatures = [
  {
    icon: <Battery className="h-6 w-6" />,
    title: "Long Battery Life",
    description: "Up to 7 days of continuous use with smart power management."
  },
  {
    icon: <Wifi className="h-6 w-6" />,
    title: "Global Coverage",
    description: "Worldwide connectivity with automatic network switching."
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Multi-Language",
    description: "Support for 40+ languages with real-time translation."
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Cross-Platform",
    description: "Compatible with iOS and Android devices."
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Data Security",
    description: "Military-grade encryption for all data transmission."
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Cloud Storage",
    description: "Secure cloud backup with unlimited storage."
  },
  {
    icon: <Navigation className="h-6 w-6" />,
    title: "GPS Accuracy",
    description: "Precise location tracking within 2 meters."
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Health Sensors",
    description: "Advanced biometric sensors for health monitoring."
  }
];

export default Features;
