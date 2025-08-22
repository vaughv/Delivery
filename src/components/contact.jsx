import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 px-8 w-screen md:px-24 bg-gradient-to-br from-indigo-900 to-purple-950 text-white">
      {/* Heading and Subtitle */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Get in Touch
        </h2>
        <div className="w-16 h-1 mx-auto bg-purple-400 rounded mb-4"></div>
        <p className="text-lg text-gray-200">
           We'd love to hear from you! Whether you have a question about our services, need a quote, or just want to chat, feel free to reach out.
        </p>
      </div>
      {/* Two Columns */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left Column: Contact Info & Map */}
        <div className="flex flex-col space-y-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <span className="text-purple-400 text-2xl">📍</span>
              <div>
                <h3 className="text-xl font-semibold">Address</h3>
                <p className="text-gray-300">2633/3, 1st-floor, main patel nager, shadipur
                Opp. Metro Pillar No. 210-211, New Delhi - 110008</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-purple-400 text-2xl">📞</span>
              <div>
                <h3 className="text-xl font-semibold">Call Me</h3>
                <p className="text-gray-300"><a href="tel:+919873259137" className="hover:underline">+91 9873259137</a>,</p>
                <p className="text-gray-300"><a href="tel:+919211238789" className="hover:underline">+91 9211238789</a>,</p>
                <p className="text-gray-300"><a href="tel:+919211244313" className="hover:underline">+91 9211244313</a>,</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-purple-400 text-2xl">✉️</span>
              <div>
                <h3 className="text-xl font-semibold">Email Me</h3>
                <p className="text-gray-300"><a href="mailto:sales.tsworldwideexpress@gmail.com" className="hover:underline">sales.tsworldwideexpress@gmail.com</a></p>
              </div>
            </div>
          </div>
          {/* Map */}
          <div className="mt-8 rounded-lg overflow-hidden shadow-xl border-2 border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1189.184536234312!2d77.16357736776051!3d28.648273752199113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d02eec1759e41%3A0x8161a239f29bda13!2sMunshi%20Ram%20Sethi%20Marg%2C%20Block%201%2C%20West%20Patel%20Nagar%2C%20Ranjeet%20Nagar%2C%20Delhi%2C%20110008!5e0!3m2!1sen!2sin!4v1755783250501!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location on Map"
            ></iframe>
          </div>
        </div>
        {/* Right Column: Contact Form */}
        <div className="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-2xl">
          <form className="grid grid-cols-1 gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="formName" className="block text-gray-200 text-sm font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="formName"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="formEmail" className="block text-gray-200 text-sm font-semibold mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="formEmail"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="formSubject" className="block text-gray-200 text-sm font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                id="formSubject"
                name="subject"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
                placeholder="Inquiry about..."
              />
            </div>
            <div>
              <label htmlFor="formMessage" className="block text-gray-200 text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                id="formMessage"
                name="message"
                rows="6"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors resize-y"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold px-10 py-3 rounded-full shadow-lg hover:scale-105 transition-all text-lg">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;