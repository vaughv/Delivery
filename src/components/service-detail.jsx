import React from 'react';

// Service Page Component
function ServiceDetail() {
  return (
    <div className="relative w-screen min-h-screen bg-gradient-to-br from-indigo-800 to-purple-900 font-inter text-white overflow-hidden">
      {/* Background elements - consistent with App.js */}
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
      <div className="relative z-10 w-full overflow-x-hidden pt-20 pb-16 md:pt-24 md:pb-20"> {/* Added padding top for content below potential header */}

        {/* Hero Section for Services */}
        <section className="text-center mb-16 px-8 md:px-24 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Delivering excellence through a powerful network and tailored solutions for every need.
          </p>
        </section>

        {/* Aggregator Explanation Section */}
        <section className="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-2xl max-w-5xl mx-auto mb-20 px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-purple-300">
                Our Aggregator Advantage
            </h2>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-center">
                At TS Logistics, we operate as a smart logistics aggregator. This means we leverage the extensive infrastructure and reliability of industry-leading companies like <span className="font-semibold text-white">DTDC, Delhivery, DHL, FedEx, Bluedart</span>, and many more. Instead of relying on a single carrier, we analyze your specific shipping requirements and connect you with the best-suited partner from our network, ensuring optimal speed, cost-efficiency, and global reach for your cargo. You get the best of multiple worlds, all managed seamlessly through a single point of contact – us.
            </p>
        </section>


        {/* Business Verticals Section */}
        <section className="mb-20 px-8 md:px-24 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-center">
            Business Verticals We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* SME Card */}
            <div className="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-2xl flex flex-col items-center text-center">
              <span className="text-purple-400 text-6xl mb-4">🏢</span> {/* Icon for SMEs */}
              <h3 className="text-2xl font-bold mb-3 text-purple-300">Small & Medium Enterprises (SMEs)</h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                For non-e-commerce SMEs, we provide robust and scalable logistics solutions that go beyond simple package delivery. Whether it's raw materials, finished goods, or inter-branch transfers, our network ensures your business operations run smoothly. We offer tailored services for B2B shipments, ensuring timely and secure transport crucial for your supply chain efficiency. Focus on your core business, and leave the complex logistics to us.
              </p>
            </div>
            {/* Individual Shippers Card */}
            <div className="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-2xl flex flex-col items-center text-center">
              <span className="text-purple-400 text-6xl mb-4">📦</span> {/* Icon for Individuals */}
              <h3 className="text-2xl font-bold mb-3 text-purple-300">Individual Shippers (High Volume / Special Needs)</h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                We cater to individual clients with unique or high-volume shipping demands. This includes personal effects, valuable items, bulky goods, or frequent shipping needs that require more than standard courier services. Our personalized approach ensures careful handling, secure transit, and adherence to specific delivery instructions, offering peace of mind for your precious shipments.
              </p>
            </div>
          </div>
        </section>

        {/* Service Verticals Section */}
        <section className="mb-20 px-8 md:px-24 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-center">
            Our Core Service Offerings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Express Delivery */}
            <div className="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-2xl flex flex-col items-center text-center">
              <span className="text-purple-400 text-6xl mb-4">⚡</span> {/* Icon */}
              <h3 className="text-2xl font-bold mb-3 text-purple-300">Express Delivery Services</h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                Need it there fast? Our express delivery options, powered by our premium partners, guarantee rapid transit for urgent documents and packages. We prioritize speed without compromising on safety, offering reliable next-day or time-definite deliveries across various destinations, both domestic and international.
              </p>
            </div>
            {/* Cargo and Freight */}
            <div className="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-2xl flex flex-col items-center text-center">
              <span className="text-purple-400 text-6xl mb-4">🚛</span> {/* Icon */}
              <h3 className="text-2xl font-bold mb-3 text-purple-300">Cargo and Freight Services</h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                For larger shipments and bulk goods, our cargo and freight services offer comprehensive solutions. This includes FTL (Full Truckload), LTL (Less Than Truckload), air freight, and ocean freight options. We handle everything from customs clearance to warehousing, ensuring seamless movement of your goods, no matter the size or destination.
              </p>
            </div>
            {/* Value-Added Services */}
            <div className="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-2xl flex flex-col items-center text-center">
              <span className="text-purple-400 text-6xl mb-4">➕</span> {/* Icon */}
              <h3 className="text-2xl font-bold mb-3 text-purple-300">Value-Added Services</h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                As an aggregator, we don't just ship; we add value. Our services include real-time tracking, insurance options, packaging assistance, reverse logistics, and dedicated customer support. We consolidate services and offer competitive pricing by leveraging our bulk arrangements with major carriers, providing you with a superior, hassle-free logistics experience.
              </p>
            </div>
          </div>
        </section>

      </div> {/* End of main content wrapper */}
    </div>
  );
}

export default ServiceDetail;
