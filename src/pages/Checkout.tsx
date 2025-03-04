import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { ArrowLeft, CreditCard, Check, Shield, Truck, Calendar, X } from 'lucide-react';

interface CheckoutState {
  product?: {
    name: string;
    price: string;
    image: string;
  };
}

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [state, setState] = useState<CheckoutState>({});
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
    saveInfo: false
  });
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Get product data from location state
    if (location.state && location.state.product) {
      setState({ product: location.state.product });
    } else {
      // If no product data, redirect to products page
      navigate('/products');
    }
  }, [location, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step < 3) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Process payment
      setIsProcessing(true);
      
      // Simulate payment processing
      setTimeout(() => {
        setIsProcessing(false);
        setIsComplete(true);
      }, 2000);
    }
  };

  const formatCardNumber = (value: string) => {
    return value
      .replace(/\s/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim();
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length > 16) {
      value = value.slice(0, 16);
    }
    
    setFormData({
      ...formData,
      cardNumber: formatCardNumber(value)
    });
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length > 4) {
      value = value.slice(0, 4);
    }
    
    if (value.length > 2) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    }
    
    setFormData({
      ...formData,
      expiry: value
    });
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length > 3) {
      value = value.slice(0, 3);
    }
    
    setFormData({
      ...formData,
      cvv: value
    });
  };

  const goBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigate('/products');
    }
  };

  const goToProducts = () => {
    navigate('/products');
  };

  if (isComplete) {
    return (
      <>
        <SEO 
          title="Order Confirmation"
          description="Your pre-order has been confirmed. Thank you for choosing Trackleo."
        />
        <div className="pt-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="glass-card rounded-2xl p-8 md:p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
              <p className="text-xl text-gray-600 mb-8">
                Thank you for your pre-order. We'll notify you when your Trackleo device is ready to ship.
              </p>
              <div className="glass-effect rounded-xl p-6 mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Order Summary</h2>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img 
                      src={state.product?.image} 
                      alt={state.product?.name}
                      className="w-16 h-16 object-cover rounded-lg mr-4"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{state.product?.name}</p>
                      <p className="text-gray-600">Pre-order</p>
                    </div>
                  </div>
                  <p className="font-semibold text-gray-900">${state.product?.price}</p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between mb-2">
                    <p className="text-gray-600">Subtotal</p>
                    <p className="text-gray-900">${state.product?.price}</p>
                  </div>
                  <div className="flex justify-between mb-2">
                    <p className="text-gray-600">Shipping</p>
                    <p className="text-gray-900">Free</p>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <p className="text-gray-900">Total</p>
                    <p className="text-gray-900">${state.product?.price}</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button 
                  onClick={goToProducts}
                  className="btn btn-primary"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO 
        title="Checkout"
        description="Complete your Trackleo device pre-order. Secure checkout process with multiple payment options."
      />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button 
            onClick={goBack}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <div className="glass-card rounded-2xl p-6 md:p-8 mb-8">
                {/* Progress Steps */}
                <div className="flex justify-between mb-8">
                  {['Shipping', 'Billing', 'Payment'].map((stepName, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div 
                        className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                          step > index + 1 
                            ? 'bg-green-500 text-white' 
                            : step === index + 1 
                              ? 'bg-blue-600 text-white' 
                              : 'bg-gray-200 text-gray-600'
                        }`}
                      >
                        {step > index + 1 ? (
                          <Check className="h-5 w-5" />
                        ) : (
                          index + 1
                        )}
                      </div>
                      <span className={`text-sm ${step === index + 1 ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}>
                        {stepName}
                      </span>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Step 1: Shipping Information */}
                  {step === 1 && (
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping Information</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                            First Name
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="glass-effect w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="glass-effect w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="glass-effect w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div className="mb-6">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                          Street Address
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          className="glass-effect w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div>
                          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                            City
                          </label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="glass-effect w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                            State/Province
                          </label>
                          <input
                            type="text"
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            className="glass-effect w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                            ZIP/Postal Code
                          </label>
                          <input
                            type="text"
                            id="zipCode"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                            className="glass-effect w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-6">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                          Country
                        </label>
                        <select
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="glass-effect w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="United States">United States</option>
                          <option value="Canada">Canada</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="Australia">Australia</option>
                          <option value="Germany">Germany</option>
                          <option value="France">France</option>
                          <option value="Japan">Japan</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Billing Information */}
                  {step === 2 && (
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Billing Information</h2>
                      <div className="mb-6">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="saveInfo"
                            checked={formData.saveInfo}
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <span className="ml-2 text-gray-700">Same as shipping address</span>
                        </label>
                      </div>
                      
                      {!formData.saveInfo && (
                        <>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                              <label htmlFor="billingFirstName" className="block text-sm font-medium text-gray-700 mb-2">
                                First Name
                              </label>
                              <input
                                type="text"
                                id="billingFirstName"
                                name="billingFirstName"
                                className="glass-effect w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                              />
                            </div>
                            <div>
                              <label htmlFor="billingLastName" className="block text-sm font-medium text-gray-700 mb-2">
                                Last Name
                              </label>
                              <input
                                type="text"
                                id="billingLastName"
                                name="billingLastName"
                                className="glass-effect w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                              />
                            </div>
                          </div>
                          <div className="mb-6">
                            <label htmlFor="billingAddress" className="block text-sm font-medium text-gray-700 mb-2">
                              Street Address
                            </label>
                            <input
                              type="text"
                              id="billingAddress"
                              name="billingAddress"
                              className="glass-effect w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              required
                            />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <div>
                              <label htmlFor="billingCity" className="block text-sm font-medium text-gray-700 mb-2">
                                City
                              </label>
                              <input
                                type="text"
                                id="billingCity"
                                name="billingCity"
                                className="glass-effect w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                              />
                            </div>
                            <div>
                              <label htmlFor="billingState" className="block text-sm font-medium text-gray-700 mb-2">
                                State/Province
                              </label>
                              <input
                                type="text"
                                id="billingState"
                                name="billingState"
                                className="glass-effect w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                              />
                            </div>
                            <div>
                              <label htmlFor="billingZipCode" className="block text-sm font-medium text-gray-700 mb-2">
                                ZIP/Postal Code
                              </label>
                              <input
                                type="text"
                                id="billingZipCode"
                                name="billingZipCode"
                                className="glass-effect w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                              />
                            </div>
                          </div>
                          <div className="mb-6">
                            <label htmlFor="billingCountry" className="block text-sm font-medium text-gray-700 mb-2">
                              Country
                            </label>
                            <select
                              id="billingCountry"
                              name="billingCountry"
                              className="glass-effect w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              required
                            >
                              <option value="United States">United States</option>
                              <option value="Canada">Canada</option>
                              <option value="United Kingdom">United Kingdom</option>
                              <option value="Australia">Australia</option>
                              <option value="Germany">Germany</option>
                              <option value="France">France</option>
                              <option value="Japan">Japan</option>
                            </select>
                          </div>
                        </>
                      )}
                    </div>
                  )}

                  {/* Step 3: Payment Information */}
                  {step === 3 && (
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Information</h2>
                      <div className="mb-6">
                        <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-2">
                          Name on Card
                        </label>
                        <input
                          type="text"
                          id="cardName"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleChange}
                          className="glass-effect w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div className="mb-6">
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-2">
                          Card Number
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleCardNumberChange}
                            placeholder="1234 5678 9012 3456"
                            className="glass-effect w-full px-4 py-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                          <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-2">
                            Expiration Date
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              id="expiry"
                              name="expiry"
                              value={formData.expiry}
                              onChange={handleExpiryChange}
                              placeholder="MM/YY"
                              className="glass-effect w-full px-4 py-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              required
                            />
                            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-2">
                            CVV
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              id="cvv"
                              name="cvv"
                              value={formData.cvv}
                              onChange={handleCvvChange}
                              placeholder="123"
                              className="glass-effect w-full px-4 py-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              required
                            />
                            <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                      </div>
                      <div className="glass-effect rounded-lg p-4 mb-6 flex items-start">
                        <Shield className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                        <p className="text-sm text-gray-600">
                          Your payment information is encrypted and secure. We never store your full card details.
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between mt-8">
                    <button
                      type="button"
                      onClick={goBack}
                      className="btn btn-secondary"
                    >
                      {step === 1 ? 'Cancel' : 'Back'}
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={isProcessing}
                    >
                      {isProcessing ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : step < 3 ? 'Continue' : 'Complete Order'}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="glass-card rounded-2xl p-6 md:p-8 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
                
                {state.product && (
                  <div className="flex items-center mb-6">
                    <img 
                      src={state.product.image} 
                      alt={state.product.name}
                      className="w-20 h-20 object-cover rounded-lg mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{state.product.name}</h3>
                      <p className="text-blue-600">${state.product.price}</p>
                      <p className="text-sm text-gray-600">Pre-order</p>
                    </div>
                  </div>
                )}
                
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900">${state.product?.price}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Tax</span>
                    <span className="text-gray-900">$0.00</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg mt-4 pt-4 border-t border-gray-200">
                    <span>Total</span>
                    <span>${state.product?.price}</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Truck className="h-5 w-5 text-blue-600 mr-3" />
                    <span>Free shipping worldwide</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Shield className="h-5 w-5 text-blue-600 mr-3" />
                    <span>Secure payment processing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
