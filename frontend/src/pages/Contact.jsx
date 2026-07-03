import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="py-12">

      {/* Heading */}

      <div className="text-center mb-16">

        <p className="uppercase tracking-widest text-teal-600 font-semibold">
          Contact Us
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3">
          We're Here to Help
        </h1>

        <p className="text-gray-500 mt-5 max-w-2xl mx-auto leading-8">
          Whether you have questions about appointments, healthcare services,
          or our platform, our team is always ready to assist you.
        </p>

      </div>

      {/* Main Section */}

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Image */}

        <div>
          <img
            src={assets.contact_image}
            alt="Contact DOCTOK"
            className="rounded-3xl shadow-xl w-full"
          />
        </div>

        {/* Right Content */}

        <div>

          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Get in Touch
          </h2>

          <div className="space-y-6">

            {/* Office */}

            <div className="flex gap-5 p-6 border rounded-2xl hover:shadow-md transition">

              <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center text-2xl">
                📍
              </div>

              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  Our Office
                </h3>

                <p className="text-gray-500 mt-2 leading-7">
                  54709 Willms Station
                  <br />
                  Suite 350, Washington, USA
                </p>
              </div>

            </div>

            {/* Contact */}

            <div className="flex gap-5 p-6 border rounded-2xl hover:shadow-md transition">

              <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center text-2xl">
                📞
              </div>

              <div>

                <h3 className="font-semibold text-lg text-gray-800">
                  Contact Information
                </h3>

                <p className="text-gray-500 mt-2">
                  +91 90000 90000
                </p>

                <p className="text-gray-500">
                  support@doctok.com
                </p>

              </div>

            </div>

            {/* Working Hours */}

            <div className="flex gap-5 p-6 border rounded-2xl hover:shadow-md transition">

              <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center text-2xl">
                🕒
              </div>

              <div>

                <h3 className="font-semibold text-lg text-gray-800">
                  Working Hours
                </h3>

                <p className="text-gray-500 mt-2">
                  Monday - Saturday
                </p>

                <p className="text-gray-500">
                  9:00 AM - 8:00 PM
                </p>

              </div>

            </div>

          </div>

          {/* Career Section */}

          <div className="mt-12 bg-teal-50 rounded-3xl p-8">

            <h3 className="text-2xl font-bold text-gray-800">
              Join Our Team
            </h3>

            <p className="text-gray-600 mt-3 leading-7">
              We're always looking for passionate people to help us transform
              digital healthcare. Explore exciting career opportunities at
              DR. TOX.
            </p>

            <button className="mt-6 px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl transition">
              Explore Careers
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Contact;