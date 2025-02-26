import React from 'react';
import { Users, Target, Heart, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding pb-8">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Our Mission to Protect
            </h1>
            <p className="text-xl text-gray-600">
              We're dedicated to creating innovative safety solutions that give you peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="glass-card rounded-2xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2025, Trackleo emerged from a simple yet powerful idea: everyone deserves to feel safe and protected.
                </p>
                <p className="text-gray-600 mb-4">
                  Our team of engineers and safety experts came together with a shared vision of creating innovative tracking solutions that would make a real difference in people's lives.
                </p>
                <p className="text-gray-600">
                  Today, Trackleo is a leading provider of advanced tracking solutions, offering a wide range of products to meet the unique needs of individuals and families.
                </p>
              </div>
              <div className="relative">
                <img
                  src="/assets/about.png"
                  alt="Our Team"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center">
                <div className="glass-effect w-16 h-16 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* Team Section *<section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Team</h2>
            <p className="text-xl text-gray-600">Meet the experts behind Trackleo</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="glass-card rounded-xl overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>}*/}
    </div>
  );
};

const values = [
  {
    icon: <Users className="h-8 w-8" />,
    title: "Customer First",
    description: "Every decision we make starts with our customers' needs and safety in mind."
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Innovation",
    description: "We continuously push boundaries to create cutting-edge safety solutions."
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Reliability",
    description: "We build trust through consistent, dependable performance."
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Global Impact",
    description: "Making the world safer, one person at a time."
  }
];

const team = [
  {
    name: "Sarah Johnson",
    position: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "With 15+ years in tech and safety solutions, Sarah leads Trackleo's mission to protect and empower."
  },
  {
    name: "Michael Chen",
    position: "CTO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "A veteran software engineer passionate about creating innovative safety technology."
  },
  {
    name: "David Rodriguez",
    position: "Head of Product",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "Bringing user-centered design and functionality together in Trackleo's products."
  }
];

export default About;
