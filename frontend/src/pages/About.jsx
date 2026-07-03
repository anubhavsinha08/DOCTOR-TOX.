import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="py-12">

      {/* Heading */}

      <div className="text-center mb-16">
        <p className="text-teal-600 font-semibold tracking-widest uppercase">
          About DR. TOX
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3">
          Your Trusted Healthcare Partner
        </h1>

        <p className="max-w-3xl mx-auto mt-6 text-gray-500 leading-8">
          We simplify healthcare by connecting patients with experienced doctors,
          enabling seamless appointment booking, secure medical management, and
          a better healthcare experience—all from one platform.
        </p>
      </div>

      {/* About Section */}

      <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

        <div>
          <img
            src={assets.about_image}
            alt="About DR. TOX"
            className="rounded-3xl shadow-xl w-full"
          />
        </div>

        <div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Making Healthcare Accessible
          </h2>

          <p className="text-gray-600 leading-8 mb-6">
            At <span className="font-semibold text-teal-600">DR. TOX</span>,
            we believe healthcare should be simple, transparent, and accessible.
            Whether you're booking a routine consultation or searching for a
            specialist, our platform helps you connect with trusted doctors in
            just a few clicks.
          </p>

          <p className="text-gray-600 leading-8 mb-8">
            Our mission is to eliminate long waiting times and complicated
            appointment processes by offering a fast, reliable, and secure
            healthcare booking experience for everyone.
          </p>

          <div className="border-l-4 border-teal-600 pl-5">

            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-7">
              To become India's most trusted digital healthcare platform by
              bringing patients and medical professionals together through
              innovative technology.
            </p>

          </div>

        </div>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">

        <div className="bg-white border rounded-2xl p-8 text-center shadow-sm">
          <h2 className="text-4xl font-bold text-teal-600">100+</h2>
          <p className="text-gray-500 mt-2">Doctors</p>
        </div>

        <div className="bg-white border rounded-2xl p-8 text-center shadow-sm">
          <h2 className="text-4xl font-bold text-teal-600">15+</h2>
          <p className="text-gray-500 mt-2">Specialities</p>
        </div>

        <div className="bg-white border rounded-2xl p-8 text-center shadow-sm">
          <h2 className="text-4xl font-bold text-teal-600">10K+</h2>
          <p className="text-gray-500 mt-2">Appointments</p>
        </div>

        <div className="bg-white border rounded-2xl p-8 text-center shadow-sm">
          <h2 className="text-4xl font-bold text-teal-600">99%</h2>
          <p className="text-gray-500 mt-2">Patient Satisfaction</p>
        </div>

      </div>

      {/* Why Choose Us */}

      <div className="text-center mb-12">

        <p className="text-teal-600 font-semibold uppercase tracking-widest">
          Why Choose Us
        </p>

        <h2 className="text-4xl font-bold text-gray-800 mt-3">
          Healthcare Made Easy
        </h2>

      </div>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="border rounded-3xl p-10 hover:shadow-xl transition duration-300">

          <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center text-2xl mb-6">
            ⚡
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Fast Appointment Booking
          </h3>

          <p className="text-gray-600 leading-7">
            Book appointments with verified doctors instantly without lengthy
            waiting times.
          </p>

        </div>

        <div className="border rounded-3xl p-10 hover:shadow-xl transition duration-300">

          <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center text-2xl mb-6">
            🩺
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Trusted Specialists
          </h3>

          <p className="text-gray-600 leading-7">
            Access a network of experienced doctors across multiple medical
            specialties.
          </p>

        </div>

        <div className="border rounded-3xl p-10 hover:shadow-xl transition duration-300">

          <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center text-2xl mb-6">
            🔒
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Secure & Reliable
          </h3>

          <p className="text-gray-600 leading-7">
            Your appointments and healthcare information are protected using
            secure technologies.
          </p>

        </div>

      </div>

    </div>
  );
};

export default About;