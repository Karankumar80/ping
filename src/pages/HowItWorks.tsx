import React from 'react';
import { ArrowRight, Smartphone, Navigation, Bell, Shield } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding pb-8">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              How Trackleo Works
            </h1>
            <p className="text-xl text-gray-600">
              Simple, effective, and reliable tracking solution for your peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="glass-card rounded-xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full -mr-20 -mt-20" />
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="glass-effect w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mr-4">
                      {step.icon}
                    </div>
                    <span className="text-2xl font-bold text-gray-900">Step {index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <ul className="space-y-3">
                    {step.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="glass-card rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              See Trackleo in Action
            </h2>
            <p className="text-xl text-gray-600 mb-6">
             Trackleo can help protect you and your loved ones.
            </p>
            <div className="aspect-video rounded-xl overflow-hidden glass-effect">
              <img
                src="/assets/howitswork.png"
                alt="Demo Video Thumbnail"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const steps = [
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Download & Setup",
    description: "Get started with Trackleo in just a few minutes",
    points: [
      "Download the Trackleo app from App Store or Google Play",
      "Create your account and complete the setup",
      "Add emergency contacts",
      "Customize your preferences"
    ]
  },
  {
    icon: <Navigation className="h-6 w-6" />,
    title: "Connect Your Device",
    description: "Pair your Trackleo device with the app",
    points: [
      "Turn on your Trackleo device",
      "Follow the in-app pairing instructions",
      "Verify the connection",
      "Complete the initial calibration"
    ]
  },
  {
    icon: <Bell className="h-6 w-6" />,
    title: "Configure Alerts",
    description: "Set up your personalized alert system",
    points: [
      "Choose alert types and sensitivity",
      "Set up geofencing boundaries",
      "Configure health monitoring thresholds",
      "Test the alert system"
    ]
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Monitor & Protect",
    description: "Start protecting yourself and loved ones",
    points: [
      "View real-time location and health data",
      "Receive instant alerts",
      "Access historical data and reports",
      "Manage multiple devices from one account"
    ]
  }
];

export default HowItWorks;
