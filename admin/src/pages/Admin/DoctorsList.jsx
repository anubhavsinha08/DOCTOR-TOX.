import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";

const DoctorsList = () => {
  const {
    doctors,
    aToken,
    getAllDoctors,
    changeAvailability,
  } = useContext(AdminContext);

  useEffect(() => {
    if (aToken) {
      getAllDoctors();
    }
  }, [aToken]);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        All Doctors
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {doctors.map((item) => (

          <div
            key={item._id}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group"
          >

            {/* Doctor Image */}

            <div className="bg-[#EAF7F6] overflow-hidden">

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
              />

            </div>

            {/* Details */}

            <div className="p-5">

              {/* Availability */}

              <div className="flex items-center gap-2 mb-3">

                <span
                  className={`w-3 h-3 rounded-full ${
                    item.available
                      ? "bg-green-500"
                      : "bg-gray-400"
                  }`}
                ></span>

                <p
                  className={`text-sm font-medium ${
                    item.available
                      ? "text-green-600"
                      : "text-gray-500"
                  }`}
                >
                  {item.available ? "Available" : "Unavailable"}
                </p>

              </div>

              {/* Name */}

              <h2 className="text-xl font-bold text-gray-800">
                {item.name}
              </h2>

              {/* Speciality */}

              <p className="text-gray-500 mt-1">
                {item.speciality}
              </p>

              {/* Fee */}

              <div className="mt-6 flex justify-between items-center">

                <div>

                  <p className="text-sm text-gray-500">
                    Consultation Fee
                  </p>

                  <h3 className="text-2xl font-bold text-teal-600">
                    ₹{item.fees}
                  </h3>

                </div>


                {/* Availability Toggle */}
                
                <div className="flex flex-col items-center">

  <label className="relative inline-flex items-center cursor-pointer">

    <input
      type="checkbox"
      checked={item.available}
      onChange={() => changeAvailability(item._id)}
      className="sr-only peer"
    />

    <div className="w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-teal-500 transition-all duration-300"></div>

    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-all duration-300 peer-checked:translate-x-6"></div>

  </label>

  <p
    className={`mt-2 text-xs font-semibold ${
      item.available ? "text-green-600" : "text-red-500"
    }`}
  >
    {item.available ? "Available" : "Unavailable"}
  </p>

</div>

              </div>

            </div>

          </div>

        ))}

      </div>
    </div>
  );
};

export default DoctorsList;