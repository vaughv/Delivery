import {
   Truck, Ship,
   Briefcase, User,  Sparkles
} from 'lucide-react';

function ServicesSection() {
  const businessVerticals = [
    { name: 'SMEs', icon: <Briefcase className="w-10 h-10 text-indigo-500" />, description: 'Tailored logistics solutions to help your non-e-commerce business thrive with efficient and reliable shipping.' },
    { name: 'Individual Shippers', icon: <User className="w-10 h-10 text-indigo-500" />, description: 'Specialized services for high-volume or unique shipping needs, ensuring your personal cargo is handled with care.' },
  ];

  const serviceVerticals = [
    { name: 'Express Delivery', icon: <Truck className="w-10 h-10 text-indigo-500" />, description: 'Fastest door-to-door delivery for urgent shipments, both locally and internationally.' },
    { name: 'Cargo & Freight', icon: <Ship className="w-10 h-10 text-indigo-500" />, description: 'Comprehensive and cost-effective solutions for large, heavy, and bulk shipments via land, air, and sea.' },
    { name: 'Value-Added Services', icon: <Sparkles className="w-10 h-10 text-indigo-500" />, description: 'As an aggregator, we provide special services like insurance, tracking, and customized packaging to meet your unique needs.' },
  ];

  return (
    <section className="bg-gray-100 py-16 rounded-t-xl rounded-b-xl">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We offer a comprehensive range of logistics services designed to meet all your shipping needs, ensuring your goods are in safe hands.
        </p>

        <div className="mt-12 text-left">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Who We Serve</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {businessVerticals.map((vertical, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div className="flex justify-center mb-4">{vertical.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 text-center">{vertical.name}</h4>
                <p className="text-gray-600 text-center">{vertical.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-left">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What We Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceVerticals.map((vertical, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div className="flex justify-center mb-4">{vertical.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 text-center">{vertical.name}</h4>
                <p className="text-gray-600 text-center">{vertical.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;