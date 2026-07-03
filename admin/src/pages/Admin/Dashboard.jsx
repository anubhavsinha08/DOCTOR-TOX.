import React, { useContext, useEffect } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { AppContext } from "../../context/AppContext";

const Dashboard = () => {
  const {
    aToken,
    getDashData,
    cancelAppointment,
    dashData,
  } = useContext(AdminContext);

  const { slotDateFormat } = useContext(AppContext);

  useEffect(() => {
    if (aToken) {
      getDashData();
    }
  }, [aToken]);

  return (
    dashData && (
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Header */}

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Dashboard
          </h1>
          <p className="text-gray-500 mt-2">
            Welcome back! Here's what's happening today.
          </p>
        </div>

        {/* Statistics */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {/* Doctors */}

          <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

            <div className="flex items-center justify-between">

              <div>

                

                <h2 className="text-5xl text-center text-black-100 mt-2">
                  {dashData.doctors}
                </h2>
                <p className="text-lg text-gray-500">
                  Total Doctors
                </p>

              </div>

              {/* <div className="w-20 h-20 rounded-2xl bg-teal-100 flex items-center justify-center">

                <img
                  src={assets.doctor_icon}
                  className="w-12 h-12"
                  alt=""
                />

              </div> */}

            </div>

          </div>

          {/* Appointments */}

          <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

            <div className="flex items-center justify-between">

              <div>

                

                <h2 className="text-5xl text-black-100 text-center mt-2">
                  {dashData.appointments}
                </h2>
                <p className="text-lg text-gray-500">
                  Appointments
                </p>

              </div>

              {/* <div className="w-20 h-20 rounded-2xl bg-blue-100 flex items-center justify-center">

                <img
                  src={assets.appointments_icon}
                  className="w-12 h-12"
                  alt=""
                />

              </div> */}

            </div>

          </div>

          {/* Patients */}

          <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

            <div className="flex items-center justify-between">

              <div className="item-center text-center">

                

                <h2 className="text-5xl text-center text-black-100 mt-2">
                  {dashData.patients}
                </h2>
                <p className="text-lg text-gray-500">
                  Patients
                </p>

              </div>

              {/* <div className="w-20 h-20 rounded-2xl bg-orange-100 flex items-center justify-center">

                <img
                  src={assets.patients_icon}
                  className="w-12 h-12"
                  alt=""
                />

              </div> */}

            </div>

          </div>

        </div>

        {/* Latest Bookings */}

        <div className="bg-white rounded-3xl shadow-lg mt-12 overflow-hidden">

          <div className="flex items-center gap-3 px-8 py-6 border-b">

            <h2 className="text-2xl font-bold text-gray-800">
              Latest Bookings
            </h2>

          </div>

          <div>

            {dashData.latestAppointments
              .slice(0, 5)
              .map((item, index) => (

                <div
                  key={index}
                  className="flex items-center px-8 py-5 gap-5 border-b last:border-none hover:bg-gray-50 transition-all"
                >

                  <img
                    className="w-16 h-16 rounded-full object-cover border"
                    src={item.docData.image}
                    alt=""
                  />

                  <div className="flex-1">

                    <p className="text-lg font-semibold text-gray-800">
                      {item.docData.name}
                    </p>

                    <p className="text-sm text-gray-500 mt-1">
                      Booking on{" "}
                      {slotDateFormat(item.slotDate)}
                    </p>

                  </div>

                  {item.cancelled ? (
                    <span className="px-4 py-2 rounded-full bg-red-100 text-red-600 font-medium">
                      Cancelled
                    </span>
                  ) : item.isCompleted ? (
                    <span className="px-4 py-2 rounded-full bg-green-100 text-green-600 font-medium">
                      Completed
                    </span>
                  ) : (
                    <button
                      onClick={() =>
                        cancelAppointment(item._id)
                      }
                      className="bg-red-100 hover:bg-red-200 p-3 rounded-full transition"
                    >
                      <img
                        src={assets.cancel_icon}
                        className="w-5 h-5"
                        alt=""
                      />
                    </button>
                  )}

                </div>

              ))}

          </div>

        </div>

      </div>
    )
  );
};

export default Dashboard;