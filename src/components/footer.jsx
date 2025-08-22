import {
   Truck, 
  Phone, Mail, MapPin
} from 'lucide-react';

function Footer({ navigateTo }) {

  const handleNavClick = (e, page) => {
    e.preventDefault();
    navigateTo(page);
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 rounded-t-2xl">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src="/logo.png" alt="TS-Logo" className="w-10 h-10" />
            <span className="text-indigo-400">Logistics</span>
          </div>
          <p className="text-sm">Your trusted partner for express and cargo services worldwide. Committed to reliability and speed.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" onClick={e => handleNavClick(e, 'home')} className="hover:text-white transition-colors duration-200">Home</a></li>
            <li><a href="#" onClick={e => handleNavClick(e, 'service-detail')} className="hover:text-white transition-colors duration-200">Services</a></li>
            <li><a href="#" onClick={e => handleNavClick(e, 'quote')} className="hover:text-white transition-colors duration-200">Get a Quote</a></li>
            <li><a href="#" onClick={e => handleNavClick(e, 'about')} className="hover:text-white transition-colors duration-200">About Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-bold text-white mb-4">Contact Info</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <MapPin className="w-auto h-10  mr-2 text-indigo-400" />
              <span>2633/3, 1st-floor, main patel nager, shadipur
                Opp. Metro Pillar No. 210-211, New Delhi - 110008
              </span>
            </li>
            <li className="flex items-center">
              <Phone className="w-4 h-4 mr-2 text-indigo-400" />
              <span>+91 9873259137</span>
            </li>
            <li className="flex items-center">
              <Phone className="w-4 h-4 mr-2 text-indigo-400" />
              <span>+91 9211238789</span>
            </li>
            <li className="flex items-center">
              <Phone className="w-4 h-4 mr-2 text-indigo-400" />
              <span>+91 9211244313</span>
            </li>
            <li className="flex items-center">
              <Mail className="w-4 h-4 mr-2 text-indigo-400" />
              <span>sales.tsworldwideexpress@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter (Optional) */}
        <div className="lg:col-span-1 md:col-span-3">
          <h4 className="text-xl font-bold text-white mb-4">Stay Connected</h4>
          <p className="text-sm">Subscribe to our newsletter for the latest updates.</p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 rounded-l-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="bg-indigo-600 text-white p-2 rounded-r-lg hover:bg-indigo-700 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-8 pt-8 border-t border-gray-700">
        &copy; 2025 TS Logistics. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;