import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors, currencySymbol } = useContext(AppContext);

  return (
    <section className="py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          Top Doctors
        </h2>

        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Find experienced doctors across multiple specialities and book your
          appointment with ease.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

        {doctors.slice(0, 10).map((item) => (
          <div
            key={item._id}
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            {/* Image */}
            <div className="bg-gray-50">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5">

              <div className="flex items-center gap-2 mb-3">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    item.available ? "bg-green-500" : "bg-gray-400"
                  }`}
                ></span>

                <span
                  className={`text-sm ${
                    item.available
                      ? "text-green-600"
                      : "text-gray-500"
                  }`}
                >
                  {item.available ? "Available Today" : "Unavailable"}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                {item.speciality}
              </p>

              <div className="flex justify-between items-center mt-5">
                <span className="text-teal-700 font-semibold">
                  {currencySymbol}
                  {item.fees}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/appointment/${item._id}`);
                  }}
                  className="text-sm border border-teal-600 text-teal-600 hover:text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition"
                >
                  Book
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-12">
        <button
          onClick={() => {
            navigate("/doctors");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="border border-teal-600 text-teal-700 px-8 py-3 rounded-full hover:bg-teal-600 hover:text-white transition"
        >
          View All Doctors
        </button>
      </div>
    </section>
  );
};

export default TopDoctors;