import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openCategory, setOpenCategory] = useState('general');

  const filteredFaqs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
           q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding pb-8">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about Trackleo's products and services.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="glass-card rounded-xl p-6 mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search your question..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="glass-effect w-full pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-6">
            {filteredFaqs.map((category) => (
              <div key={category.id} className="glass-card rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenCategory(openCategory === category.id ? '' : category.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left bg-blue-50/50"
                >
                  <h2 className="text-xl font-semibold text-gray-900">{category.title}</h2>
                  {openCategory === category.id ? (
                    <ChevronUp className="h-5 w-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-600" />
                  )}
                </button>
                {openCategory === category.id && (
                  <div className="divide-y divide-gray-200">
                    {category.questions.map((faq, index) => (
                      <div key={index} className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="glass-card rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <button className="btn btn-primary">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const faqCategories = [
  {
    id: 'general',
    title: 'General Questions',
    questions: [
      {
        question: "What is Trackleo?",
        answer: "Trackleo is a comprehensive safety and health monitoring solution that combines GPS tracking, health monitoring, and emergency alert features in one device."
      },
      {
        question: "How accurate is the GPS tracking?",
        answer: "Trackleo uses advanced GPS technology with an accuracy of up to 2.5 meters in optimal conditions. Indoor accuracy may vary depending on building structure and satellite visibility."
      },
      {
        question: "Is my data secure?",
        answer: "Yes, we use end-to-end encryption and follow strict data protection protocols to ensure your personal information and location data are always secure."
      }
    ]
  },
  {
    id: 'technical',
    title: 'Technical Support',
    questions: [
      {
        question: "How long does the battery last?",
        answer: "The Trackleo device typically lasts 5-7 days on a single charge with normal use. Battery life may vary depending on usage patterns and feature settings."
      },
      {
        question: "What should I do if my device isn't working?",
        answer: "First, try restarting the device. If the issue persists, check your internet connection and app settings. Our support team is available 24/7 for further assistance."
      }
    ]
  },
  {
    id: 'billing',
    title: 'Billing & Subscription',
    questions: [
      {
        question: "Can I cancel my subscription at any time?",
        answer: "Yes, you can cancel your subscription at any time. Your service will continue until the end of your current billing period."
      },
      {
        question: "Are there any hidden fees?",
        answer: "No, we believe in transparent pricing. The subscription fee covers all standard features and services. Additional devices can be added for a small fee."
      }
    ]
  }
];

export default FAQ;