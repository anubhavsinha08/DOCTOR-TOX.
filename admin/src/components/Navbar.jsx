import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'
import { useNavigate, useLocation } from 'react-router-dom'

const Navbar = () => {
  const { dToken, setDToken } = useContext(DoctorContext)
  const { aToken, setAToken } = useContext(AdminContext)
  const navigate = useNavigate()
  const location = useLocation()

  const logout = () => {
    navigate('/')
    dToken && setDToken('')
    dToken && localStorage.removeItem('dToken')
    aToken && setAToken('')
    aToken && localStorage.removeItem('aToken')
  }

  const goToUserPanel = () => {
    window.location.href = 'https://doctortox.vercel.app/'
  }

  const isOnDashboard =
    location.pathname === '/admin-dashboard' ||
    location.pathname === '/doctor-dashboard'

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 lg:px-16 py-3 border-b bg-white'>
      <div className='flex items-center gap-3 text-xs'>

        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer select-none hidden sm:block"
        >
          <h1 className="text-3xl font-extrabold tracking-wide text-teal-600 ">
            DR. TOX
          </h1>

          <p className="text-xs tracking-[4px] text-gray-500">
            HEALTHCARE
          </p>
        </div>

        {/* Role Label */}
        <p className='border px-2.5 py-0.5 rounded-full border-teal-500 text-teal-600 hidden sm:block'>
          {aToken ? 'Admin' : 'Doctor'}
        </p>

        {/* User Panel Button (visible on both dashboards) */}
        {isOnDashboard && (
          <button
            onClick={goToUserPanel}
            className='ml-2 text-white bg-teal-600 hover:bg-gray-700 px-3 py-1.5 rounded-full text-xs'
          >
            User Panel
          </button>
        )}
      </div>

      {/* Logout */}
      <button
        onClick={logout}
        className='bg-teal-600 text-white text-sm px-10 py-2 rounded-full'
      >
        Logout
      </button>
    </div>
  )
}

export default Navbar
