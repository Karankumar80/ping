import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding pb-8">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600">
              Choose the perfect plan for your safety needs. No hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`glass-card rounded-xl p-8 ₹{
                plan.popular ? 'ring-2 ring-blue-500 relative' : ''
              }`}>
                {plan.popular && (
                  <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">₹{plan.price}</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`btn w-full ₹{
                  plan.popular ? 'btn-primary' : 'btn-secondary'
                }`}>
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="glass-card rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div key={index} className="glass-effect rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const plans = [
  {
    name: "Basic",
    price: "799",
    description: "Essential tracking features for individual use",
    features: [
      "Real-time GPS tracking",
      "SOS alerts",
      "Basic health monitoring",
      "Mobile app access",
      "24/7 customer support"
    ],
    popular: false
  },
  {
    name: "Premium",
    price: "999",
    description: "Advanced features for enhanced protection",
    features: [
      "All Basic features",
      "Fall detection",
      "Two-way communication",
      "Advanced health monitoring",
      "Geofencing",
      "Historical data access"
    ],
    popular: true
  },
  {
    name: "Family",
    price: "2,499",
    description: "Complete protection for the whole family",
    features: [
      "All Premium features",
      "Up to 5 devices",
      "Family dashboard",
      "Priority support",
      "Custom alert settings",
      "Advanced reporting"
    ],
    popular: false
  }
];

const faqs = [
  {
    question: "Do I need to sign a long-term contract?",
    answer: "No, all our plans are month-to-month with no long-term commitment required."
  },
  {
    question: "Can I switch plans at any time?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle."
  },
  {
    question: "Is there a setup fee?",
    answer: "No, there are no setup fees. You only pay for your monthly subscription."
  },
  {
    question: "What happens if I exceed my device limit?",
    answer: "You can add additional devices to any plan for a small fee per device."
  }
];

export default Pricing;