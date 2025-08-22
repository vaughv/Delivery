import React from 'react';
import { assets } from '../assets';

// About Us Page Component
function AboutUs() {
  return (
    <div className="relative w-screen min-h-screen bg-gradient-to-br from-indigo-800 to-purple-900 font-inter text-white overflow-hidden">
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

        {/* Hero Section for About Us */}
        <section className="text-center mb-16 px-8 md:px-24 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            About TS Logistics
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Your trusted partner in seamless global logistics.
          </p>
        </section>

        {/* 1. Aggregator Explanation with Logos */}
        <section className="bg-opacity-70 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-2xl max-w-5xl mx-auto mb-20 px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-400">
                Our Aggregator Advantage
            </h2>
            <p className="text-lg md:text-xl text-lime-300 leading-relaxed mb-10">
                At TS Logistics, we operate as a smart logistics aggregator. This means we leverage the extensive infrastructure and reliability of industry-leading companies to provide you with unparalleled service. By partnering with the best, we offer optimal speed, cost-efficiency, and global reach for your cargo.
            </p>
             <div className="logo-marquee-wrapper my-8">
  <div className="logo-marquee">
    <img src={assets.dtdc} alt="DTDC Logo" className="h-12 md:h-16 object-contain hover:transition-all duration-300"/>
    <img src={assets.delhivery} alt="Delhivery Logo" className="h-12 md:h-16 object-contain hover:transition-all duration-300"/>
    <img src={assets.dhl} alt="DHL Logo" className="h-12 md:h-16 object-contain hover:transition-all duration-300"/>
    <img src={assets.fedex} alt="FedEx Logo" className="h-12 md:h-16 object-contain hover:transition-all duration-300"/>
    <img src={assets.bluedart} alt="Bluedart Logo" className="h-12 md:h-16 object-contain hover:transition-all duration-300"/>
    <img src={assets.tnt} alt="TNT Logo" className="h-12 md:h-16 object-contain hover:transition-all duration-300"/>
    <img src={assets.ups} alt="UPS Logo" className="h-12 md:h-16 object-contain hover:transition-all duration-300"/>
    <img src={assets.gati} alt="Gati Logo" className="h-12 md:h-16 object-contain hover:transition-all duration-300"/>
    {/* Repeat logos for seamless loop */}
    <img src={assets.dtdc} alt="DTDC Logo" className="h-12 md:h-16 object-contain hover:transition-all duration-300"/>
    <img src={assets.delhivery} alt="Delhivery Logo" className="h-12 md:h-16 object-contain hover:transition-all duration-300"/>
    <img src={assets.dhl} alt="DHL Logo" className="h-12 md:h-16 object-contain hover:transition-all duration-300"/>
    <img src={assets.fedex} alt="FedEx Logo" className="h-12 md:h-16 object-contain hover:transition-all duration-300"/>
    <img src={assets.bluedart} alt="Bluedart Logo" className="h-12 md:h-16 object-contain hover:transition-all duration-300"/>
    <img src={assets.tnt} alt="TNT Logo" className="h-12 md:h-16 object-contain hover:transition-all duration-300"/>
    <img src={assets.ups} alt="UPS Logo" className="h-12 md:h-16 object-contain hover:transition-all duration-300"/>
    <img src={assets.gati} alt="Gati Logo" className="h-12 md:h-16 object-contain hover:transition-all duration-300"/>
  </div>
</div>
        </section>

        {/* 2. Meet Our Founders */}
        <section className="mb-20 px-8 md:px-24 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-10">
            Meet Our Founders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Founder 1 */}
            <div className="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-2xl flex flex-col items-center">
              <img
                src="https://placehold.co/150x150/6a1b9a/ffffff?text=Founder+1"
                alt="Founder 1"
                className="w-36 h-36 rounded-full object-cover mb-6 border-4 border-purple-400 shadow-lg"
              />
              <h3 className="text-2xl font-bold mb-2 text-purple-300">Nikul Saxena</h3>
              <p className="text-gray-400 mb-4">CEO & Co-Founder</p>
              <p className="text-lg text-gray-200 leading-relaxed mb-4">
                Nikul brings over 15 years of experience in supply chain management and technology innovation. Her vision drives our commitment to efficiency and customer satisfaction.
              </p>
              <a href="mailto:jane.doe@example.com" className="text-purple-300 hover:text-purple-400 underline">jane.doe@example.com</a>
            </div>

            {/* Founder 2 */}
            <div className="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-2xl flex flex-col items-center">
              <img
                src="https://placehold.co/150x150/6a1b9a/ffffff?text=Founder+2"
                alt="Founder 2"
                className="w-36 h-36 rounded-full object-cover mb-6 border-4 border-purple-400 shadow-lg"
              />
              <h3 className="text-2xl font-bold mb-2 text-purple-300">Saransh Sharma</h3>
              <p className="text-gray-400 mb-4">COO & Co-Founder</p>
              <p className="text-lg text-gray-200 leading-relaxed mb-4">
                With a strong background in operations and logistics optimization, John ensures that our services are executed flawlessly, from pickup to delivery.
              </p>
              <a href="mailto:john.smith@example.com" className="text-purple-300 hover:text-purple-400 underline">john.smith@example.com</a>
            </div>
          </div>
        </section>

        {/* 3. Meet the Dev */}
        <section className="px-8 md:px-24 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-10">
            Meet the Developer
          </h2>
          <div className="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-2xl flex flex-col items-center">
            <img
              src={assets.vaibhav}
              alt="Vaibhav, the developer"
              className="w-36 h-36 rounded-full object-cover mb-6 border-4 border-indigo-400 shadow-lg"
            />
            <h3 className="text-2xl font-bold mb-2 text-indigo-300">Vaibhav</h3>
            <p className="text-gray-400 mb-4">Lead Developer</p>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              Hi, I'm Vaibhav, the developer behind this project. I focus on creating robust and intuitive web experiences.
            </p>
            <div className="flex space-x-6">
  <a
    href="https://www.linkedin.com/in/vaibhav-bhardwaj-832b9236b"
    target="_blank"
    rel="noopener noreferrer"
    className="text-indigo-400 hover:text-indigo-300 transition-colors duration-200 text-4xl"
  >
    <img src={assets.linkdin} className="h-20 w-auto" alt="LinkedIn" />
  </a>
  <a
    href="https://vaughv.netlify.app/"
    className="text-indigo-400 hover:text-indigo-300 transition-colors duration-200 text-4xl"
  >
    <img src={assets.mail} className="h-20 w-auto" alt="Email" />
  </a>
</div>
          </div>
        </section>

      </div> {/* End of main content wrapper */}
    </div>
  );
}

export default AboutUs;