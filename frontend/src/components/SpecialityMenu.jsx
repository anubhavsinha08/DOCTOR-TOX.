import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <section id="speciality" className="py-20 bg-white">

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-800">
          Browse by Speciality
        </h2>

        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Choose a medical speciality to find experienced doctors and book your
          appointment with ease.
        </p>
      </div>

      {/* Cards */}
      <div className="flex justify-start lg:justify-center gap-8 overflow-x-auto px-2 pb-4 scrollbar-hide">

        {specialityData.map((item, index) => (
          <Link
            key={index}
            to={`/doctors/${item.speciality}`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex-shrink-0"
          >
            <div className="w-54 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-teal-500 transition-all duration-300 p-6 text-center">

              {/* Circle */}
              <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-teal-50 to-cyan-50 flex items-center justify-center group-hover:scale-105 transition">

                <img
                  src={item.image}
                  alt={item.speciality}
                  className="w-16 h-16 object-contain"
                />

              </div>

              {/* Name */}
              <h3 className="mt-5 text-lg font-semibold text-gray-800">
                {item.speciality}
              </h3>

              {/* Small description */}
              <p className="mt-2 text-sm text-gray-500 leading-6">
                Find experienced specialists for expert medical care.
              </p>

              {/* CTA */}
              <div className="mt-5 text-teal-600 font-medium group-hover:text-teal-700">
                Explore →
              </div>

            </div>
          </Link>
        ))}

      </div>

    </section>
  );
};

export default SpecialityMenu;