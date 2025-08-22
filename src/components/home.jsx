import React from "react";
import ServicesSection from "./service";
import TrustSection from "./trust";

const Home = ({ navigateTo }) => {
  return (
     <div className="relative w-screen min-h-screen bg-gradient-to-br from-indigo-800 to-purple-900 font-inter overflow-hidden">
      {/* Background elements - Retained from previous response */}
      {/* Main content wrapper to ensure no horizontal overflow */}
      <div className="relative z-10 w-full overflow-x-hidden">
        {/* Updated Main Content Section (Hero) */}
        <main className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20 px-8 md:px-24 py-12 md:py-16 max-w-7xl mx-auto">
          {/* Info/Actions */}
          <section className="flex-1 max-w-xl text-white"> {/* Added text-white here for default color */}
            <h1 className="text-4xl md:text-5xl font-extrabold mb-2 leading-snug drop-shadow">
              Your Cargo <h1></h1>
              Our Commitment.
            </h1>
            <h2 className="text-2xl text-purple-300 font-bold mb-4 md:mb-7"> {/* Changed to text-purple-300 for better visibility */}
              Fast, Reliable, Worldwide.
            </h2>
            <p className="text-gray-200 text-lg mb-10 md:mb-12"> {/* Changed to text-gray-200 for better visibility */}
              From local deliveries to global logistics, we ensure your package arrives{' '}
              <span className="text-white font-semibold">safely, securely,</span> and <span className="text-white font-semibold">right on time.</span>
              Let us handle the journey for you!
            </p>
            <div className="flex gap-5">
              <button className="bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-400 text-white font-bold px-8 py-3 rounded-b-full shadow-lg hover:scale-105 transition-all"
                onClick={() => navigateTo('quote')}
              > {/* Adjusted gradient for consistency */}
                Get a Quote
              </button>
              <button className="bg- border-2 border-white text-white font-bold px-7 py-3 rounded-full shadow-md hover: bg-white/30 transition-all"
                onClick={() => navigateTo('contact')}
              >
                Call Now
              </button>
            </div>
          </section>
          {/* PNG Illustration */}
          <section className="flex-1 flex justify-center items-center">
            <img
              src="https://static.vecteezy.com/system/resources/previews/024/599/013/original/delivery-service-with-delivery-truck-png.png" // Replace with your PNG path or import
              alt="Logistics Illustration"
              className="w-[750px] "
              draggable="false"
            />
          </section>
        </main>
      </div>
      <ServicesSection />
      <TrustSection />
    </div>
    
  );
};

export default Home;
