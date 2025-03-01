import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Shield, 
  Heart, 
  Navigation, 
  Bell, 
  Brain,
  Zap,
  Sparkles,
  Cpu,
  Radar,
  Fingerprint,
  MapPin,
  Smartphone,
  Globe,
  Cloud,
  Share2,
  Headphones,
  Languages,
  Mic,
  FileText,
  Bot,
  Flame,
  AlertTriangle,
  Droplet,
  Thermometer,
  HeartPulse,
  Battery,
  Wifi,
  Watch
} from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white/50 to-purple-50/50 backdrop-blur-3xl"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-32 -left-24 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="glass-effect inline-flex items-center px-4 py-2 rounded-full mb-6">
                <Sparkles className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-blue-600">AI-Powered Safety Technology</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Empowering Your loved ones with Smart Tracking {' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                for Ultimate Protection
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8">
                Experience the future of personal safety with Trackleo's AI-enhanced monitoring solutions.
                Real-time protection for you and your loved ones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="btn btn-primary group"
                >
                  Get Trackleo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="btn btn-secondary"
                >
                  Watch Demo
                </Link>
              </div>
              
            </div>
            <div className="relative mt-12 lg:mt-0">
              {/* Device Container */}
              <div className="device-container">
                {/* Device Image */}
                <div className="device-image">
                  <img
                    src="/assets/trackleo-device.jpg"
                    alt="Trackleo Device"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                </div>

                {/* Specs Tiles */}
                {/* <div className="absolute inset-0">
                  {deviceSpecs.map((spec, index) => (
                    <div
                      key={index}
                      className="absolute top-1/2 left-1/2 spec-rotate spec-card glass-card p-3 rounded-xl"
                      style={{
                        maxWidth: '180px',
                        transformOrigin: '0 0',
                        animationDelay: `${index * -5}s`
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <div className="glass-effect p-2 rounded-lg text-blue-600">
                          {spec.icon}
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-gray-900">{spec.title}</h3>
                          <p className="text-xs text-gray-600">{spec.value}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>*/}

                {/* Center Pulse 
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full animate-ping"></div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full absolute top-0"></div>
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      {/*<section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="glass-effect inline-flex items-center px-4 py-2 rounded-full mb-6">
              <Cpu className="h-5 w-5 text-purple-600 mr-2" />
              <span className="text-purple-600">AI-Powered Features</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced AI Technology for Enhanced Safety
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-driven features provide intelligent monitoring and predictive alerts
              to keep you safe before incidents occur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="glass-effect w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>}*/}

      {/* Tracking Features Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="glass-effect inline-flex items-center px-4 py-2 rounded-full mb-6">
              <Navigation className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-blue-600">Advanced Tracking</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Complete Safety Features for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Peace of Mind
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {trackingFeatures.slice(0, 4).map((feature, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="glass-effect p-2 rounded-lg text-blue-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 "></div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trackingFeatures.slice(4).map((feature, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="glass-effect p-2 rounded-lg text-blue-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Productivity Features Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              AI technology that{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                enhances your productivity
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {productivityFeatures.map((feature, index) => (
              <div key={index} className="glass-card rounded-2xl p-8 relative group hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-2xl"></div>
                <div className="relative">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-purple-600">{feature.subtitle}</p>
                  </div>
                  
                  <div className="relative">
                    <div className="aspect-[4/3] mb-6">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover rounded-xl shadow-lg"
                      />
                    </div>
                    
                    <div className="absolute -bottom-4 right-4 glass-effect p-3 rounded-full text-blue-600 transform transition-transform group-hover:scale-110">
                      {feature.icon}
                    </div>
                  </div>

                  <p className="text-gray-600 mt-8">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      {/*<section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="glass-effect inline-flex items-center px-4 py-2 rounded-full mb-6">
              <Zap className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-blue-600">Simple Setup</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get Started in Minutes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three simple steps to enhance your safety with Trackleo's AI-powered protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="glass-card rounded-xl p-8 text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 glass-effect w-8 h-8 rounded-full flex items-center justify-center text-blue-600 font-bold">
                  {index + 1}
                </div>
                <div className="glass-effect w-16 h-16 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Features Showcase Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50/50 via-white/50 to-purple-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <div className="glass-effect inline-flex items-center px-4 py-2 rounded-full mb-6">
                <Globe className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-purple-600">Global Coverage</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Support for <span className="text-purple-600">112+</span> Languages
              </h2>
              <p className="text-xl text-gray-600">
                Our AI-powered translation system ensures effective communication across borders, making our safety features truly global.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-3xl blur-3xl"></div>
              <div className="glass-card rounded-2xl p-6 relative">
                <div className="grid grid-cols-3 gap-4">
                  {['Hello', 'नमस्ते', 'Hola', '你好', 'こんにちは', 'مرحبا'].map((greeting, index) => (
                    <div key={index} className="glass-effect p-3 rounded-lg text-center text-gray-700 transform hover:-translate-y-1 transition-transform">
                      {greeting}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {showcaseFeatures.map((feature, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-xl blur-xl"></div>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="relative rounded-xl w-full h-48 object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

         
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="glass-card rounded-3xl p-12 text-center">
            <div className="glass-effect inline-flex items-center px-4 py-2 rounded-full mb-6">
              <Radar className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-green-600">Always Protected</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Experience the Future of Safety?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied users who trust Trackleo's AI-powered protection.
              Start your journey to enhanced safety today.
            </p>
            <Link
              to="/products"
              className="btn btn-primary"
            >
              Get Your Trackleo Device
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const deviceSpecs = [
  {
    icon: <Battery className="h-5 w-5" />,
    title: "Battery Life",
    value: "7 Days"
  },
  {
    icon: <Wifi className="h-5 w-5" />,
    title: "Connectivity",
    value: "Global 4G LTE"
  },
  {
    icon: <Watch className="h-5 w-5" />,
    title: "Water Resistance",
    value: "IP68 Rated"
  },
  {
    icon: <Navigation className="h-5 w-5" />,
    title: "GPS Accuracy",
    value: "±2 meters"
  },
  {
    icon: <Heart className="h-5 w-5" />,
    title: "Health Sensors",
    value: "Advanced Vitals"
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Security",
    value: "End-to-End Encrypted"
  }
];

const aiFeatures = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Predictive AI Analytics",
    description: "Advanced algorithms analyze patterns to predict and prevent potential safety incidents."
  },
  {
    icon: <Fingerprint className="h-6 w-6" />,
    title: "Biometric Recognition",
    description: "AI-powered biometric authentication ensures secure and instant access."
  },
  {
    icon: <Navigation className="h-6 w-6" />,
    title: "Smart Navigation",
    description: "AI optimizes routes and provides real-time safety recommendations."
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Health Insights",
    description: "AI-driven health monitoring with personalized wellness recommendations."
  },
  {
    icon: <Bell className="h-6 w-6" />,
    title: "Intelligent Alerts",
    description: "Context-aware notifications powered by machine learning algorithms."
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Dynamic Geofencing",
    description: "AI-adaptive boundaries that adjust based on safety conditions."
  }
];

const trackingFeatures = [
  {
    title: "Smart Tracking",
    description: "Know where they're at, no matter the distance.",
    image: "/assets/Smart Tracking.png",
    icon: <Navigation className="h-6 w-6" />
  },
  {
    title: "SOS Mode",
    description: "Location-aware 911 emergency dispatch.",
    image: "/assets/SOS Mode Button-p-500.png",
    icon: <AlertTriangle className="h-6 w-6" />
  },
  {
    title: "Live Mode",
    description: "Real-time, turn-by-turn tracking. On-demand.",
    image: "/assets/livemode.png",
    icon: <MapPin className="h-6 w-6" />
  },
  {
    title: "Trusted Places",
    description: "Get notified when they come or go from anywhere.",
    image: "/assets/Notification-Photoroom.png",
    icon: <Shield className="h-6 w-6" />
  },
  {
    title: "Heart Rate",
    description: "Track real-time heart rate effortlessly.",
    image: "/assets/heart rate.jpeg",
    icon: <HeartPulse className="h-6 w-6" />
  },
  {
    title: "SPO2",
    description: "Monitor your blood oxygen levels anytime.",
    image: "/assets/Spo2.jpeg",
    icon: <Droplet className="h-6 w-6" />
  },
  {
    title: "Stress",
    description: "Track stress level for better mental health.",
    image: "/assets/Stress.jpeg",
    icon: <Brain className="h-6 w-6" />
  },
  {
    title: "Steps",
    description: "Easily track daily calories burned.",
    image: "/assets/Steps.jpeg",
    icon: <Flame className="h-6 w-6" />
  }
  
  
  
];

const steps = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Choose Your Device",
    description: "Select from our range of AI-powered tracking devices designed for different needs."
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Connect the App",
    description: "Download our app and pair it with your device in seconds."
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Stay Protected",
    description: "Enjoy peace of mind with 24/7 AI-enhanced monitoring and protection."
  }
];

const showcaseFeatures = [
  {
    title: "Custom Templates",
    description: "Ready-to-use templates for every tracking scenario",
    image: "/assets/custom temp.png"
  },
  {
    title: "Audio Import",
    description: "Import and analyze audio for enhanced safety monitoring",
    image: "/assets/import audio.jpg"
  },
  {
    title: "Smart Audio Trimming",
    description: "AI-powered audio editing for quick and easy sharing",
    
    image: "/assets/smart audio trim.png"
  },
  {
    title: "Cloud Storage",
    description: "Unlimited secure cloud storage for your data",
    image: "/assets/cloud storage.png"
  }
];

const integrations = [
  {
    icon: <Cloud className="h-6 w-6 text-blue-600" />,
    name: "Cloud Storage"
  },
  {
    icon: <Share2 className="h-6 w-6 text-purple-600" />,
    name: "Share"
  },
  {
    icon: <Headphones className="h-6 w-6 text-green-600" />,
    name: "Audio"
  },
  {
    icon: <Languages className="h-6 w-6 text-red-600" />,
    name: "Languages"
  }
];

const productivityFeatures = [
  {
    title: "One-Press Record",
    subtitle: "Press, record, recall, on the go",
    description: "Instantly capture important moments with a single touch. Our advanced recording system ensures you never miss critical safety information.",
    image: "/assets/oneclick.png",
    icon: <Mic className="h-6 w-6" />
  },
  {
    title: "Voice-to-Text Transcription",
    subtitle: "Free 300 mins/month",
    description: "Advanced AI-powered transcription converts your voice recordings into accurate text in real-time, supporting multiple languages.",
    image: "/assets/voicetotext.png",
    icon: <FileText className="h-6 w-6" />
  },
  {
    title: "AI Summarization",
    subtitle: "Developed on Best LLMs",
    description: "Get instant, intelligent summaries of your recordings and transcripts, powered by state-of-the-art language models.",
    image: "/assets/summary.png",
    icon: <Bot className="h-6 w-6" />
  }
];

export default Home;
