import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-24">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20">
        <div className="grid lg:grid-cols-[2.5fr_1fr_1fr] gap-16">
          {/* Brand */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-wide text-teal-700">
              DR. TOX
            </h1>

            <p className="mt-6 text-gray-600 leading-8 max-w-xl">
              DR. TOX is a modern healthcare appointment platform that helps
              patients connect with trusted doctors quickly and securely.
              Schedule appointments effortlessly, discover specialists, and
              manage your healthcare journey with confidence.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <span className="px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-medium">
                Trusted Doctors
              </span>

              <span className="px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-medium">
                Easy Booking
              </span>

              <span className="px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-medium">
                Secure
              </span>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Company
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li className="hover:text-teal-600 cursor-pointer transition">
                Home
              </li>

              <li className="hover:text-teal-600 cursor-pointer transition">
                Find Doctors
              </li>

              <li className="hover:text-teal-600 cursor-pointer transition">
                About Us
              </li>

              <li className="hover:text-teal-600 cursor-pointer transition">
                Contact
              </li>

              <li className="hover:text-teal-600 cursor-pointer transition">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Contact
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li>📞 +91 90000 90000</li>

              <li>✉️ support@drtox.com</li>

              <li>
                📍 Bengaluru,
                <br />
                Karnataka, India
              </li>

              <li>
                Mon - Sat
                <br />
                9:00 AM – 8:00 PM
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} DR. TOX. All Rights Reserved.
          </p>

          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-teal-600 transition">
              Terms
            </a>

            <a href="#" className="hover:text-teal-600 transition">
              Privacy
            </a>

            <a href="#" className="hover:text-teal-600 transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;