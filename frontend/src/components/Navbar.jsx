import React, { useContext, useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef(null);

  const { token, setToken, userData } = useContext(AppContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setShowDropdown(false);
    navigate("/login");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navClass = ({ isActive }) =>
    `transition duration-200 hover:text-teal-600 ${
      isActive
        ? "text-teal-600 font-semibold border-b-2 border-teal-600 pb-1"
        : "text-gray-700"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">

      <div className="px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* Logo */}

        <div
          onClick={() => navigate("/")}
          className="cursor-pointer select-none"
        >
          <h1 className="text-3xl font-extrabold tracking-wide text-teal-600">
            DR. TOX
          </h1>

          <p className="text-xs tracking-[4px] text-gray-500">
            HEALTHCARE
          </p>
        </div>

        {/* Desktop Menu */}

        <ul className="hidden md:flex items-center gap-10 font-medium">

          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink to="/doctors" className={navClass}>
            Doctors
          </NavLink>

          <NavLink to="/about" className={navClass}>
            About
          </NavLink>

          <NavLink to="/contact" className={navClass}>
            Contact
          </NavLink>

        </ul>

        {/* Right */}

        <div className="flex items-center gap-4">

          {location.pathname === "/" && (
            <button
              onClick={() => window.open("http://localhost:5174/", "_blank")}
              className="hidden md:block px-5 py-2 rounded-full border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white transition"
            >
              Admin Panel
            </button>
          )}

          {token && userData ? (

            <div className="relative" ref={dropdownRef}>

              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-3"
              >

                <img
                  src={userData.image}
                  alt=""
                  className="w-11 h-11 rounded-full border-2 border-teal-500 object-cover"
                />

                <img
                  src={assets.dropdown_icon}
                  alt=""
                  className={`w-3 transition-transform duration-300 ${
                    showDropdown ? "rotate-180" : ""
                  }`}
                />

              </button>

              {showDropdown && (

                <div className="absolute right-0 top-14 w-60 rounded-2xl bg-white border border-gray-100 shadow-xl overflow-hidden">

                  <div className="px-5 py-4 border-b">

                    <p className="font-semibold text-gray-800">
                      {userData.name}
                    </p>

                    <p className="text-sm text-gray-500 truncate">
                      {userData.email}
                    </p>

                  </div>

                  <button
                    onClick={() => {
                      navigate("/my-profile");
                      setShowDropdown(false);
                    }}
                    className="w-full text-left px-5 py-3 hover:bg-gray-50 transition"
                  >
                    👤 My Profile
                  </button>

                  <button
                    onClick={() => {
                      navigate("/my-appointments");
                      setShowDropdown(false);
                    }}
                    className="w-full text-left px-5 py-3 hover:bg-gray-50 transition"
                  >
                    📅 My Appointments
                  </button>

                  <button
                    onClick={logout}
                    className="w-full text-left px-5 py-3 text-red-500 hover:bg-red-50 transition"
                  >
                    🚪 Logout
                  </button>

                </div>

              )}

            </div>

          ) : (

            <button
              onClick={() => navigate("/login")}
              className="hidden md:block bg-teal-600 hover:bg-teal-700 text-white px-7 py-3 rounded-full font-medium transition shadow-md"
            >
              Create Account
            </button>

          )}

          {/* Mobile Menu */}

          <img
            src={assets.menu_icon}
            alt=""
            onClick={() => setShowMenu(true)}
            className="w-7 cursor-pointer md:hidden"
          />

        </div>

      </div>

      {/* Mobile Drawer */}

      <div
        className={`fixed top-0 right-0 h-screen bg-white z-50 transition-all duration-300 ${
          showMenu ? "w-72" : "w-0 overflow-hidden"
        }`}
      >

        <div className="flex items-center justify-between p-6 border-b">

          <h1 className="text-2xl font-bold text-teal-600">
            DOCTOK
          </h1>

          <img
            src={assets.cross_icon}
            alt=""
            onClick={() => setShowMenu(false)}
            className="w-6 cursor-pointer"
          />

        </div>

        <div className="flex flex-col text-lg">

          <NavLink
            to="/"
            onClick={() => setShowMenu(false)}
            className="px-6 py-4 border-b"
          >
            Home
          </NavLink>

          <NavLink
            to="/doctors"
            onClick={() => setShowMenu(false)}
            className="px-6 py-4 border-b"
          >
            Doctors
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setShowMenu(false)}
            className="px-6 py-4 border-b"
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setShowMenu(false)}
            className="px-6 py-4 border-b"
          >
            Contact
          </NavLink>

        </div>

      </div>

    </header>
  );
};

export default Navbar;