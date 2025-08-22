import React from 'react';

// Get A Quote Page Component
function GetAQuote() {
  return (
    <div className="relative min-h-screen w-screen bg-gradient-to-br from-indigo-800 to-purple-900 font-inter text-white overflow-hidden">
      {/* Background elements - consistent with other pages */}
      <div className="absolute top-0 left-0 w-full h-full">
        <svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-full h-full">
          <path d="M0 0H1440V600C1440 710.457 1350.46 800 1240 800H200C89.5431 800 0 710.457 0 600V0Z" fill="url(#paint0_linear_1_2)" fillOpacity="0.3" transform="rotate(-5 720 400) scale(1.1)"/>
          <defs>
            <linearGradient id="paint0_linear_1_2" x1="720" y1="0" x2="720" y2="800" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6366F1"/> {/* Indigo-500 */}
              <stop offset="1" stopColor="#A855F7"/> {/* Purple-500 */}
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main content wrapper */}
      <div className="relative z-10 w-full overflow-x-hidden pt-20 pb-16 md:pt-24 md:pb-20">

        {/* Hero Section for Get a Quote */}
        <section className="text-center mb-12 px-8 md:px-24 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            Get an Instant Quote
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Provide details about your shipment, and we'll connect you with the best logistics solution.
          </p>
        </section>

        {/* Quote Form Section */}
        <section className="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto px-8">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Sender Information */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6 text-purple-300 text-center md:text-left">Sender Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="senderName" className="block text-gray-200 text-sm font-semibold mb-2">Name</label>
                  <input type="text" id="senderName" name="senderName"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
                    placeholder="Your Full Name" 
                  />
                </div>
                <div>
                  <label htmlFor="senderEmail" className="block text-gray-200 text-sm font-semibold mb-2">Email</label>
                  <input type="email" id="senderEmail" name="senderEmail"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="senderPhone" className="block text-gray-200 text-sm font-semibold mb-2">Phone</label>
                  <input type="tel" id="senderPhone" name="senderPhone"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
            </div>

            {/* Pickup Details */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold mb-6 text-purple-300 text-center md:text-left">Pickup Details</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="pickupAddress" className="block text-gray-200 text-sm font-semibold mb-2">Address</label>
                  <textarea id="pickupAddress" name="pickupAddress" rows="3"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors resize-y"
                    placeholder="Street, City, State, Zip Code"
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="pickupDate" className="block text-gray-200 text-sm font-semibold mb-2">Preferred Pickup Date</label>
                  <input type="date" id="pickupDate" name="pickupDate"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Delivery Details */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold mb-6 text-purple-300 text-center md:text-left">Delivery Details</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="deliveryAddress" className="block text-gray-200 text-sm font-semibold mb-2">Address</label>
                  <textarea id="deliveryAddress" name="deliveryAddress" rows="3"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors resize-y"
                    placeholder="Street, City, State, Zip Code"
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="deliveryDate" className="block text-gray-200 text-sm font-semibold mb-2">Preferred Delivery Date</label>
                  <input type="date" id="deliveryDate" name="deliveryDate"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Shipment Details */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6 text-purple-300 text-center md:text-left">Shipment Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="itemType" className="block text-gray-200 text-sm font-semibold mb-2">Type of Item(s)</label>
                  <input type="text" id="itemType" name="itemType"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
                    placeholder="e.g., Documents, Electronics, Furniture"
                  />
                </div>
                <div>
                  <label htmlFor="weight" className="block text-gray-200 text-sm font-semibold mb-2">Approx. Weight (kg)</label>
                  <input type="number" id="weight" name="weight"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
                    placeholder="e.g., 10"
                  />
                </div>
                <div>
                  <label htmlFor="quantity" className="block text-gray-200 text-sm font-semibold mb-2">Quantity</label>
                  <input type="number" id="quantity" name="quantity"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
                    placeholder="e.g., 1"
                  />
                </div>
                <div className="md:col-span-3">
                  <label htmlFor="dimensions" className="block text-gray-200 text-sm font-semibold mb-2">Dimensions (L x W x H in cm, optional)</label>
                  <input type="text" id="dimensions" name="dimensions"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
                    placeholder="e.g., 30x20x15"
                  />
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div className="md:col-span-2">
              <label htmlFor="notes" className="block text-gray-200 text-sm font-semibold mb-2">Additional Notes / Special Requirements</label>
              <textarea id="notes" name="notes" rows="4"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors resize-y"
                placeholder="Any specific instructions, fragile items, etc."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-center mt-6">
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold px-12 py-4 rounded-full shadow-lg hover:scale-105 transition-all text-xl"
              >
                Request Quote
              </button>
            </div>

          </form>
        </section>
        <br />
          <h1 className="text-5xl md:text-6xl text-center font-extrabold leading-tight mb-4">
            Looking for an Estimate
          </h1>
          
          
<div className="mt-8 mx-auto max-w-2xl bg-gray-800 p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200">
          <h3 className="text-xl md:text-2xl font-bold text-purple-500 mb-4">Calculate Your Estimate</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="origin" className="sr-only">Origin PIN Code</label>
              <input
                type="text"
                id="origin"
                placeholder="Origin PIN Code"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
              />
            </div>
            <div>
              <label htmlFor="destination" className="sr-only">Destination PIN Code</label>
              <input
                type="text"
                id="destination"
                placeholder="Destination PIN Code"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
              />
            </div>
            <div className="flex space-x-2">
              <input
                type="number"
                placeholder="Weight (kg)"
                className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
              />
              <input
                type="text"
                placeholder="Dimensions (L x W x H)"
                className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-md"
            >
              Get Estimate
            </button>
          </form>
        </div>


      </div> {/* End of main content wrapper */}
    </div>
  );
}

export default GetAQuote;