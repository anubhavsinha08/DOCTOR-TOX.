import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { DoctorContext } from "../context/DoctorContext";
import { AdminContext } from "../context/AdminContext";
import { Menu, X } from "lucide-react";

const Sidebar = () => {
  const { dToken } = useContext(DoctorContext);
  const { aToken } = useContext(AdminContext);

  const [open, setOpen] = useState(false);

  const activeStyle =
    "bg-teal-50 text-teal-600 border-r-4 border-teal-500";

  const inactiveStyle =
    "text-gray-600 hover:bg-teal-50 hover:text-teal-600";

  return (
    <>
      {/* Mobile Button */}

      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-5 left-5 z-50 bg-white shadow-md rounded-lg p-2"
      >
        <Menu size={14} />
      </button>

      {/* Overlay */}

      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}

      <aside
        className={`fixed lg:static top-0 left-0 z-50 h-screen w-72 bg-white border-r shadow-lg transform transition-transform duration-300
        ${
          open
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Close */}

        <div className="flex justify-between items-center px-6 py-5 border-b">

          {/* <h1 className="text-2xl font-bold text-teal-600">
            DR. TOX
          </h1> */}

          <button
            className="lg:hidden"
            onClick={() => setOpen(false)}
          >
            <X size={24} />
          </button>

        </div>

        {/* Admin */}

        {aToken && (
          <div className="px-4 py-6">

            <p className="text-xs uppercase text-gray-400 font-semibold mb-4">
              Administration
            </p>

            <ul className="space-y-3">

              <NavLink
                to="/admin-dashboard"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-4 p-3 rounded-xl transition ${
                    isActive ? activeStyle : inactiveStyle
                  }`
                }
              >
                <img src={assets.home_icon} className="w-5" alt="" />
                <span>Dashboard</span>
              </NavLink>

              <NavLink
                to="/all-appointments"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-4 p-3 rounded-xl transition ${
                    isActive ? activeStyle : inactiveStyle
                  }`
                }
              >
                <img src={assets.appointment_icon} className="w-5" alt="" />
                <span>Appointments</span>
              </NavLink>

              <NavLink
                to="/add-doctor"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-4 p-3 rounded-xl transition ${
                    isActive ? activeStyle : inactiveStyle
                  }`
                }
              >
                <img src={assets.add_icon} className="w-5" alt="" />
                <span>Add Doctor</span>
              </NavLink>

              <NavLink
                to="/doctor-list"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-4 p-3 rounded-xl transition ${
                    isActive ? activeStyle : inactiveStyle
                  }`
                }
              >
                <img src={assets.people_icon} className="w-5" alt="" />
                <span>Doctors List</span>
              </NavLink>

            </ul>

          </div>
        )}

        {/* Doctor */}

        {dToken && (
          <div className="px-4 py-6">

            <p className="text-xs uppercase text-gray-400 font-semibold mb-4">
              Doctor Panel
            </p>

            <ul className="space-y-3">

              <NavLink
                to="/doctor-dashboard"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-4 p-3 rounded-xl transition ${
                    isActive ? activeStyle : inactiveStyle
                  }`
                }
              >
                <img src={assets.home_icon} className="w-5" alt="" />
                <span>Dashboard</span>
              </NavLink>

              <NavLink
                to="/doctor-appointments"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-4 p-3 rounded-xl transition ${
                    isActive ? activeStyle : inactiveStyle
                  }`
                }
              >
                <img src={assets.appointment_icon} className="w-5" alt="" />
                <span>Appointments</span>
              </NavLink>

              <NavLink
                to="/doctor-profile"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-4 p-3 rounded-xl transition ${
                    isActive ? activeStyle : inactiveStyle
                  }`
                }
              >
                <img src={assets.people_icon} className="w-5" alt="" />
                <span>Profile</span>
              </NavLink>

            </ul>

          </div>
        )}
      </aside>
    </>
  );
};

export default Sidebar;