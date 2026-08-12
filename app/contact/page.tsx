import React from "react";

const Contact = () => {
  return (
    <section className="bg-orange-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-orange-600">
            Contact Us
          </h2>

          <p className="mt-3 text-gray-600">
            Have a question or want to order delicious samosas?
            Get in touch with us.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">

            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Get In Touch
            </h3>

            <div className="space-y-5">

              {/* Address */}
              <div>
                <h4 className="font-semibold text-orange-600">
                  Address
                </h4>

                <p className="text-gray-600 mt-1">
                  Main Road, Chaproli
                </p>
              </div>

              {/* Phone */}
              <div>
                <h4 className="font-semibold text-orange-600">
                  Phone
                </h4>

                <p className="text-gray-600 mt-1">
                  +91 98765 43210
                </p>
              </div>

              {/* Email */}
              <div>
                <h4 className="font-semibold text-orange-600">
                  Email
                </h4>

                <p className="text-gray-600 mt-1">
                  info@samosahub.com
                </p>
              </div>

              {/* Opening Hours */}
              <div>
                <h4 className="font-semibold text-orange-600">
                  Opening Hours
                </h4>

                <p className="text-gray-600 mt-1">
                  Monday - Sunday
                </p>

                <p className="text-gray-600">
                  8:00 AM - 11:00 PM
                </p>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">

            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-5">

              {/* Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 text-gray-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 text-gray-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 text-gray-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-orange-600 text-white font-semibold py-3 rounded-lg hover:bg-orange-700 transition duration-300"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;