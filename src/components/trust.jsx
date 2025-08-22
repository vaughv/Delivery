import {
  Star
} from 'lucide-react';

function TrustSection() {
  const stats = [
    { value: '250+', label: 'Happy Clients' },
    { value: '500+', label: 'Packages Delivered' },
    { value: '99%', label: 'On-Time Delivery' },
  ];

  const testimonials = [
    { quote: 'The service was incredibly fast and reliable. My package arrived ahead of schedule and in perfect condition. Highly recommended!', author: 'Jane Doe, Small Business Owner' },
    { quote: 'I had a critical shipment, and this company handled it flawlessly. Their communication and service were top-notch.', author: 'John Smith, Logistics Manager' },
  ];

  return (
    <section id="trust" className="py-16 w-full bg-gray-100 ">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Trust Us?</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We are committed to providing an exceptional and reliable service to all our customers. Our dedication is reflected in our numbers and in the words of those we serve.
        </p>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="p-8 bg-indigo-50 rounded-2xl shadow-md">
              <p className="text-4xl font-bold text-indigo-600">{stat.value}</p>
              <p className="mt-2 text-xl font-medium text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-16 text-left">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">What Our Clients Say</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <Star className="w-6 h-6 text-yellow-400 fill-current mb-4" />
                <p className="text-lg italic text-gray-700">"{testimonial.quote}"</p>
                <p className="mt-4 font-bold text-indigo-600">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustSection;