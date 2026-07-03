import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-700 via-emerald-600 to-cyan-600 my-24 px-8 md:px-14 lg:px-20 py-12">

      {/* Decorative Blur */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl"></div>

      <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

        {/* Left Side */}
        <div className="lg:w-1/2 text-white">

          <span className="inline-block bg-white/20 backdrop-blur-md px-5 py-2 rounded-full text-sm font-medium">
            🩺 Join India's Fastest Growing Healthcare Platform
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Book Your
            <span className="text-yellow-300">
              {" "}Next Appointment{" "}
            </span>
            With Trusted Doctors
          </h2>

          <p className="mt-6 text-lg text-white/90 leading-8 max-w-xl">
            Choose from hundreds of verified specialists, schedule your
            appointment instantly and receive quality healthcare from
            experienced professionals.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <button
              onClick={() => {
                navigate("/login");
                scrollTo(0, 0);
              }}
              className="bg-white text-teal-700 font-semibold px-8 py-4 rounded-full shadow-xl hover:scale-105 transition duration-300"
            >
              Create Account →
            </button>

            <button
              onClick={() => {
                navigate("/doctors");
                scrollTo(0, 0);
              }}
              className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-teal-700 transition duration-300"
            >
              Browse Doctors
            </button>

          </div>

          {/* Bottom Stats */}

          <div className="flex items-center gap-4 mt-12">

            <img
              src={assets.group_profiles}
              className="w-32"
              alt=""
            />

            <div>
              <h3 className="text-2xl font-bold">
                20,000+
              </h3>

              <p className="text-white/80">
                Happy patients served nationwide
              </p>
            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="relative lg:w-1/2 flex justify-center">

          {/* Glow */}

          <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full scale-90"></div>

          <img
            src={assets.appointment_img}
            alt=""
            className="relative w-full max-w-lg drop-shadow-[0_30px_50px_rgba(0,0,0,0.35)]"
          />

          {/* Verified Doctors */}

          <div className="absolute bottom-8 left-0 bg-white rounded-2xl shadow-2xl px-6 py-4">

            <h3 className="text-3xl font-bold text-teal-700">
              100+
            </h3>

            <p className="text-gray-600">
              Trusted Doctors
            </p>

          </div>

          {/* Rating */}

          <div className="absolute top-8 right-0 bg-white rounded-2xl shadow-2xl px-5 py-4">

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

export default Banner;