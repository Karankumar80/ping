import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const Products = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding pb-8">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Choose Your Perfect Trackleo Device
            </h1>
            <p className="text-xl text-gray-600">
              Advanced tracking solutions designed for every need, from personal safety to family protection.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-width grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={index} className="glass-card flex flex-col md:flex-row rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full md:w-48 aspect-square object-cover rounded-t-xl md:rounded-l-xl md:rounded-t-none"
                
              />
              <div className="p-5 flex-1">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                  <span className="glass-effect px-3 py-1 rounded-full text-sm text-blue-600">
                    {product.category}
                  </span>
                </div>
                <p className="text-blue-600 font-bold text-lg mb-3">
                  {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(product.price)}
                </p>
                <p className="text-gray-600 mb-3 text-sm">{product.description}</p>
                <ul className="space-y-1 mb-4 text-sm">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-primary w-full hover:bg-blue-700 transition text-sm py-2 flex justify-center items-center">
                  Pre-order Your Trackleo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="glass-card rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-12">Product Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="px-6 py-3 text-left text-gray-700">Features</th>
                    {products.map((product, index) => (
                      <th key={index} className="px-6 py-3 text-center text-gray-700">{product.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="px-6 py-4 text-gray-700 font-medium">{feature.name}</td>
                      {feature.availability.map((isAvailable, idx) => (
                        <td key={idx} className="px-6 py-4 text-center">
                          {isAvailable ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const products = [
  {
    name: "Trackleo Essential",
    price: 7999,
    category: "Personal",
    image: "/assets/champ.png",
    description: "Perfect for individual use with essential tracking features.",
    features: [
      "Real-time GPS tracking",
      "SOS button",
      "24/7 monitoring",
      "Mobile app access"
    ]
  },
  {
    name: "Trackleo Pro",
    price: 10999,
    category: "Professional",
    image: "/assets/pro.png",
    description: "Advanced features for professional use and enhanced safety.",
    features: [
      "All Essential features",
      "Health monitoring",
      "Fall detection",
      "Two-way communication"
    ]
  }
];

const comparisonFeatures = [
  {
    name: "Real-time GPS",
    availability: [true, true]
  },
  {
    name: "Health Monitoring",
    availability: [false, true]
  },
  {
    name: "Fall Detection",
    availability: [false, true]
  },
  {
    name: "Two-way Communication",
    availability: [false, true]
  }
];

export default Products;
