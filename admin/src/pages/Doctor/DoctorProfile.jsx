import React, { useContext, useEffect, useState } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";

const DoctorProfile = () => {
  const { dToken, profileData, setProfileData, getProfileData, backendUrl } =
    useContext(DoctorContext);

  const { currency } = useContext(AppContext);

  const [isEdit, setIsEdit] = useState(false);

  const updateProfile = async () => {
    try {
      const updateData = {
        address: profileData.address,
        fees: profileData.fees,
        about: profileData.about,
        available: profileData.available,
      };

      const { data } = await axios.post(
        backendUrl + "/api/doctor/update-profile",
        updateData,
        {
          headers: { dToken },
        },
      );

      if (data.success) {
        toast.success(data.message);
        setIsEdit(false);
        getProfileData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    if (dToken) {
      getProfileData();
    }
  }, [dToken]);

  return (
    profileData && (
      <div className="max-w-3xl mx-auto px-6 py-10">
        {/* Profile Image */}
        <div className="flex justify-center mb-10">
          <img
            src={profileData.image}
            alt=""
            className="w-36 h-36 rounded-full border object-cover"
          />
        </div>

        <h2 className="text-3xl font-semibold text-center mb-10">
          Doctor Profile
        </h2>

        <div className="space-y-7">
          {/* Name */}
          <div>
            <label className="block mb-2 font-medium text-gray-600">
              Full Name
            </label>

            <div className="border rounded-md px-4 py-3 bg-gray-50">
              {profileData.name}
            </div>
          </div>

          {/* Degree */}
          <div>
            <label className="block mb-2 font-medium text-gray-600">
              Degree
            </label>

            <div className="border rounded-md px-4 py-3">
              {profileData.degree}
            </div>
          </div>

          {/* Speciality */}
          <div>
            <label className="block mb-2 font-medium text-gray-600">
              Speciality
            </label>

            <div className="border rounded-md px-4 py-3">
              {profileData.speciality}
            </div>
          </div>

          {/* Experience */}
          <div>
            <label className="block mb-2 font-medium text-gray-600">
              Experience
            </label>

            <div className="border rounded-md px-4 py-3">
              {profileData.experience}
            </div>
          </div>

          {/* Consultation Fee */}
          <div>
            <label className="block mb-2 font-medium text-gray-600">
              Consultation Fee
            </label>

            {isEdit ? (
              <input
                type="number"
                value={profileData.fees}
                onChange={(e) =>
                  setProfileData((prev) => ({
                    ...prev,
                    fees: e.target.value,
                  }))
                }
                className="w-full border rounded-md px-4 py-3 outline-none focus:border-black"
              />
            ) : (
              <div className="border rounded-md px-4 py-3">
                {currency} {profileData.fees}
              </div>
            )}
          </div>

          {/* Address Line 1 */}
          <div>
            <label className="block mb-2 font-medium text-gray-600">
              Address Line 1
            </label>

            {isEdit ? (
              <input
                value={profileData.address.line1}
                onChange={(e) =>
                  setProfileData((prev) => ({
                    ...prev,
                    address: {
                      ...prev.address,
                      line1: e.target.value,
                    },
                  }))
                }
                className="w-full border rounded-md px-4 py-3 outline-none focus:border-black"
              />
            ) : (
              <div className="border rounded-md px-4 py-3">
                {profileData.address.line1}
              </div>
            )}
          </div>

          {/* Address Line 2 */}
          <div>
            <label className="block mb-2 font-medium text-gray-600">
              Address Line 2
            </label>

            {isEdit ? (
              <input
                value={profileData.address.line2}
                onChange={(e) =>
                  setProfileData((prev) => ({
                    ...prev,
                    address: {
                      ...prev.address,
                      line2: e.target.value,
                    },
                  }))
                }
                className="w-full border rounded-md px-4 py-3 outline-none focus:border-black"
              />
            ) : (
              <div className="border rounded-md px-4 py-3">
                {profileData.address.line2}
              </div>
            )}
          </div>

          {/* About */}
          <div>
            <label className="block mb-2 font-medium text-gray-600">
              About
            </label>

            {isEdit ? (
              <textarea
                rows={6}
                value={profileData.about}
                onChange={(e) =>
                  setProfileData((prev) => ({
                    ...prev,
                    about: e.target.value,
                  }))
                }
                className="w-full border rounded-md px-4 py-3 outline-none focus:border-black resize-none"
              />
            ) : (
              <div className="border rounded-md px-4 py-3 leading-7">
                {profileData.about}
              </div>
            )}
          </div>

          {/* Availability */}
          <div>
            <label className="block mb-3 font-medium text-gray-600">
              Availability
            </label>

            <div className="border rounded-md px-4 py-3 flex items-center justify-between">
              <span>{profileData.available ? "Available" : "Unavailable"}</span>

              <input
                type="checkbox"
                className="w-5 h-5"
                checked={profileData.available}
                onChange={() =>
                  isEdit &&
                  setProfileData((prev) => ({
                    ...prev,
                    available: !prev.available,
                  }))
                }
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-5">
            {isEdit && (
              <button
                onClick={() => {
                  setIsEdit(false);
                  getProfileData();
                }}
                className="border px-6 py-2 rounded-md hover:bg-gray-100"
              >
                Cancel
              </button>
            )}

            <button
              onClick={() => {
                if (isEdit) {
                  updateProfile();
                } else {
                  setIsEdit(true);
                }
              }}
              className="bg-black text-white px-7 py-2 rounded-md hover:bg-gray-800"
            >
              {isEdit ? "Save Changes" : "Edit Profile"}
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default DoctorProfile;
