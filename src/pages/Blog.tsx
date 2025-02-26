import React from 'react';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';

const Blog = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding pb-8">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Latest Insights & Updates
            </h1>
            <p className="text-xl text-gray-600">
              Stay informed about safety technology and industry trends.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding">
        <div className="container-width">
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Featured Post"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>March 15, 2024</span>
                  <span className="mx-2">•</span>
                  <User className="h-4 w-4 mr-2" />
                  <span>Sarah Johnson</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  The Future of Personal Safety: AI and IoT Integration
                </h2>
                <p className="text-gray-600 mb-4">
                  Discover how artificial intelligence and Internet of Things technologies are revolutionizing personal safety devices and creating smarter protection solutions.
                </p>
                <button className="btn btn-primary">
                  Read More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="glass-card rounded-xl overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {post.tags.map((tag, idx) => (
                        <span key={idx} className="glass-effect px-3 py-1 rounded-full text-sm text-blue-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 flex items-center">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const blogPosts = [
  {
    title: "5 Essential Safety Features Every Tracking Device Should Have",
    date: "March 10, 2024",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    excerpt: "Learn about the critical features that make a tracking device truly effective for personal safety.",
    tags: ["Safety", "Technology"]
  },
  {
    title: "The Importance of GPS Tracking Accuracy",
    date: "March 8, 2024",
    image: "/assets/1.png",
    excerpt: "A detailed look at GPS technology and factors affecting tracking accuracy.",
    tags: ["GPS", "Tech Guide"]
  },
  {
    title: "Health Monitoring: Beyond Basic Tracking",
    date: "March 5, 2024",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    excerpt: "Explore advanced health monitoring features and their importance in modern tracking devices.",
    tags: ["Health", "Innovation"]
  }
];

export default Blog;
