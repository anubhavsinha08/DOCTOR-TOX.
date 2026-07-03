import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-700 via-emerald-600 to-cyan-600 px-8 md:px-14 lg:px-20 py-10 md:py-16">

      {/* Background Blur */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl"></div>

      <div className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-10">

        {/* Left Section */}
        <div className="md:w-1/2 text-white">

          <span className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium tracking-wide">
            🩺 India's Trusted Healthcare Platform
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Find the
            <span className="text-yellow-300"> Best Doctors </span>
            & Book Appointments Instantly
          </h1>

          <p className="mt-6 text-lg text-white/90 leading-8 max-w-xl">
            Connect with experienced specialists across multiple departments.
            Book appointments in seconds and receive quality healthcare from
            trusted medical professionals.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">

            <a
              href="#speciality"
              className="bg-white text-teal-700 font-semibold px-8 py-4 rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              Book Appointment →
            </a>

            <button className="border border-white text-white px-8 py-4 rounded-full backdrop-blur-md hover:bg-white hover:text-teal-700 transition-all duration-300">
              <a href="/about" className="font-semibold">
                Learn More
              </a>
            </button>

          </div>

          {/* Users */}
          <div className="flex items-center gap-4 mt-10">

            <img
              src={assets.group_profiles}
              alt=""
              className="w-32 rounded-full"
            />

            <div>
              <h3 className="font-bold text-xl">15,000+</h3>
              <p className="text-white/80">
                Patients trust our doctors every month
              </p>
            </div>

          </div>

        </div>

        {/* Right Section */}
        <div className="relative md:w-1/2 flex justify-center">

          <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full scale-90"></div>

          <img
            src={assets.header_img}
            alt=""
            className="relative w-full max-w-md lg:max-w-lg drop-shadow-[0_25px_45px_rgba(0,0,0,0.35)]"
          />

          {/* Floating Card */}
          <div className="absolute bottom-8 left-0 bg-white/90 backdrop-blur-md rounded-2xl px-5 py-4 shadow-2xl">

            <h3 className="text-2xl font-bold text-teal-700">
              500+
            </h3>

            <p className="text-gray-600 text-sm">
              Verified Doctors
            </p>

          </div>

          {/* Floating Rating */}
          <div className="absolute top-8 right-2 bg-white rounded-2xl shadow-xl px-5 py-3">

            <p className="text-yellow-500 text-xl">
              ⭐⭐⭐⭐⭐
            </p>

            <p className="font-semibold text-gray-700">
              4.9/5 Rating
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Header;