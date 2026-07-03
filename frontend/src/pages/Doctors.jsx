import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const specialities = [
  "General physician",
  "Gynecologist",
  "Dermatologist",
  "Pediatricians",
  "Neurologist",
  "Gastroenterologist",
];

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();

  const { doctors, currencySymbol } = useContext(AppContext);

  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
  if (speciality) {
    setFilterDoc(
      doctors.filter((doc) => doc.speciality === speciality)
    );
  } else {
    setFilterDoc(doctors);
  }
}, [doctors, speciality]);

const availableDoctors = filterDoc.filter((doc) => doc.available);
const unavailableDoctors = filterDoc.filter((doc) => !doc.available);

  return (
    <div className="py-10">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">

        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            Find Your Doctor
          </h1>

          <p className="text-gray-500 mt-2">
            Browse experienced healthcare professionals and book appointments with ease.
          </p>

          <p className="mt-3 text-teal-600 font-medium">
            {filterDoc.length}{" "}
            {filterDoc.length === 1 ? "Doctor" : "Doctors"} Found
          </p>
        </div>

        {speciality && (
          <button
            onClick={() => navigate("/doctors")}
            className="px-5 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
          >
            ✕ Clear Filter
          </button>
        )}

      </div>

      {/* Selected Badge */}

      {speciality && (
        <div className="mb-8 flex items-center gap-3">

          <span className="text-gray-500">
            Selected Speciality:
          </span>

          <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">
            {speciality}
          </span>

        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-8">

        {/* Sidebar */}

        <div className="lg:w-72">

          <button
            onClick={() => setShowFilter(!showFilter)}
            className="lg:hidden mb-5 px-5 py-2 rounded-lg border"
          >
            Filters
          </button>

          <div
            className={`bg-white border border-gray-200 rounded-2xl shadow-sm p-5 ${
              showFilter ? "block" : "hidden lg:block"
            }`}
          >
            <h2 className="text-lg font-semibold mb-5">
              Specialities
            </h2>

            <div className="space-y-2">

              <button
                onClick={() => navigate("/doctors")}
                className={`w-full text-left px-4 py-3 rounded-xl transition ${
                  !speciality
                    ? "bg-teal-600 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                All Doctors
              </button>

              {specialities.map((item) => (
                <button
                  key={item}
                  onClick={() => navigate(`/doctors/${item}`)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition ${
                    speciality === item
                      ? "bg-teal-600 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {item}
                </button>
              ))}

            </div>
          </div>

        </div>

        {/* Doctors */}

        {/* <div className="flex-1 grid sm:grid-cols-2 xl:grid-cols-3 gap-6">

          {filterDoc.map((item) => (

            <div
              key={item._id}
              onClick={() => {
                navigate(`/appointment/${item._id}`);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-xl transition duration-300"
            >

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover bg-gray-100"
              />

              <div className="p-5">

                <div className="flex justify-between items-center">

                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                      item.available
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {item.available ? "Available" : "Unavailable"}
                  </span>

                  <span className="text-teal-600 font-semibold">
                    {currencySymbol}
                    {item.fees}
                  </span>

                </div>

                <h2 className="text-xl font-semibold text-gray-800 mt-4">
                  {item.name}
                </h2>

                <p className="text-gray-500 mt-1">
                  {item.speciality}
                </p>

                <button
                  className="w-full mt-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-medium transition"
                >
                  Book Appointment
                </button>

              </div>

            </div>

          ))}

        </div> */}

        <div className="flex-1">

  {/* Available Doctors */}

  <div>

    <h2 className="text-2xl font-bold text-gray-800 mb-6">
      Available Doctors
    </h2>

    {availableDoctors.length === 0 ? (
      <div className="bg-gray-50 border rounded-xl p-10 text-center text-gray-500">
        No doctors are available at the moment.
      </div>
    ) : (
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">

        {availableDoctors.map((item) => (

          <div
            key={item._id}
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-xl transition duration-300"
          >

            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover bg-gray-100"
            />

            <div className="p-5">

              <div className="flex justify-between items-center">

                <span className="text-xs font-medium px-3 py-1 rounded-full bg-green-100 text-green-700">
                  Available
                </span>

                <span className="text-teal-600 font-semibold">
                  {currencySymbol}
                  {item.fees}
                </span>

              </div>

              <h2 className="text-xl font-semibold text-gray-800 mt-4">
                {item.name}
              </h2>

              <p className="text-gray-500 mt-1">
                {item.speciality}
              </p>

              <button className="w-full mt-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-medium transition">
                Book Appointment
              </button>

            </div>

          </div>

        ))}

      </div>
    )}

  </div>

  {/* Unavailable Doctors */}

  {unavailableDoctors.length > 0 && (

    <div className="mt-20">

      <div className="flex items-center gap-4 mb-8">

        <div className="flex-1 h-px bg-gray-300"></div>

        <h2 className="text-2xl font-bold text-gray-700">
          Currently Unavailable
        </h2>

        <div className="flex-1 h-px bg-gray-300"></div>

      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">

        {unavailableDoctors.map((item) => (

          <div
            key={item._id}
            className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden opacity-80"
          >

            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover grayscale"
            />

            <div className="p-5">

              <div className="flex justify-between items-center">

                <span className="text-xs font-medium px-3 py-1 rounded-full bg-red-100 text-red-600">
                  Unavailable
                </span>

                <span className="text-gray-500 font-semibold">
                  {currencySymbol}
                  {item.fees}
                </span>

              </div>

              <h2 className="text-xl font-semibold text-gray-700 mt-4">
                {item.name}
              </h2>

              <p className="text-gray-500 mt-1">
                {item.speciality}
              </p>

              <button
                disabled
                className="w-full mt-6 py-3 rounded-xl bg-gray-300 text-gray-600 cursor-not-allowed"
              >
                Currently Unavailable
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  )}

</div>
      </div>
    </div>
  );
};

export default Doctors;