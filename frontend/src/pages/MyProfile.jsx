import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(false);

  const {
    token,
    backendUrl,
    userData,
    setUserData,
    loadUserProfileData,
  } = useContext(AppContext);

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData();

      formData.append("name", userData.name);
      formData.append("phone", userData.phone);
      formData.append("address", JSON.stringify(userData.address));
      formData.append("gender", userData.gender);
      formData.append("dob", userData.dob);

      if (image) {
        formData.append("image", image);
      }

      const { data } = await axios.post(
        backendUrl + "/api/user/update-profile",
        formData,
        {
          headers: {
            token,
          },
        }
      );

      if (data.success) {
        toast.success(data.message);
        await loadUserProfileData();
        setIsEdit(false);
        setImage(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return userData ? (
  <div className="max-w-3xl mx-auto px-6 py-10">

    {/* Profile Image */}

    <div className="flex justify-center mb-10">
      {isEdit ? (
        <label htmlFor="image" className="cursor-pointer relative">
          <img
            src={
              image
                ? URL.createObjectURL(image)
                : userData.image
            }
            alt=""
            className="w-36 h-36 rounded-full border object-cover"
          />

          <div className="absolute bottom-0 right-0 bg-white border rounded-full p-2 shadow">
            <img
              src={assets.upload_icon}
              alt=""
              className="w-5"
            />
          </div>

          <input
            hidden
            id="image"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </label>
      ) : (
        <img
          src={userData.image}
          alt=""
          className="w-36 h-36 rounded-full border object-cover"
        />
      )}
    </div>

    <h2 className="text-3xl font-semibold text-center mb-10">
      My Profile
    </h2>

    <div className="space-y-7">

      {/* Name */}

      <div>
        <label className="block mb-2 font-medium text-gray-600">
          Full Name
        </label>

        {isEdit ? (
          <input
            value={userData.name}
            onChange={(e) =>
              setUserData((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
            className="w-full border rounded-md px-4 py-3 outline-none focus:border-black"
          />
        ) : (
          <div className="border rounded-md px-4 py-3">
            {userData.name}
          </div>
        )}
      </div>

      {/* Email */}

      <div>
        <label className="block mb-2 font-medium text-gray-600">
          Email
        </label>

        <div className="border rounded-md px-4 py-3 bg-gray-50">
          {userData.email}
        </div>
      </div>

      {/* Phone */}

      <div>
        <label className="block mb-2 font-medium text-gray-600">
          Phone
        </label>

        {isEdit ? (
          <input
            value={userData.phone}
            onChange={(e) =>
              setUserData((prev) => ({
                ...prev,
                phone: e.target.value,
              }))
            }
            className="w-full border rounded-md px-4 py-3 outline-none focus:border-black"
          />
        ) : (
          <div className="border rounded-md px-4 py-3">
            {userData.phone}
          </div>
        )}
      </div>

      {/* Address */}

      <div>
        <label className="block mb-2 font-medium text-gray-600">
          Address
        </label>

        {isEdit ? (
          <div className="space-y-3">
            <input
              placeholder="Address Line 1"
              value={userData.address?.line1 || ""}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  address: {
                    ...(prev.address || {}),
                    line1: e.target.value,
                  },
                }))
              }
              className="w-full border rounded-md px-4 py-3 outline-none focus:border-black"
            />

            <input
              placeholder="Address Line 2"
              value={userData.address?.line2 || ""}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  address: {
                    ...(prev.address || {}),
                    line2: e.target.value,
                  },
                }))
              }
              className="w-full border rounded-md px-4 py-3 outline-none focus:border-black"
            />
          </div>
        ) : (
          <div className="border rounded-md px-4 py-3 leading-7">
            {userData.address?.line1}
            <br />
            {userData.address?.line2}
          </div>
        )}
      </div>

      {/* Gender */}

      <div>
        <label className="block mb-2 font-medium text-gray-600">
          Gender
        </label>

        {isEdit ? (
          <select
            value={userData.gender}
            onChange={(e) =>
              setUserData((prev) => ({
                ...prev,
                gender: e.target.value,
              }))
            }
            className="w-full border rounded-md px-4 py-3 outline-none focus:border-black"
          >
            <option>Not Selected</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        ) : (
          <div className="border rounded-md px-4 py-3">
            {userData.gender}
          </div>
        )}
      </div>

      {/* DOB */}

      <div>
        <label className="block mb-2 font-medium text-gray-600">
          Date of Birth
        </label>

        {isEdit ? (
          <input
            type="date"
            value={userData.dob}
            onChange={(e) =>
              setUserData((prev) => ({
                ...prev,
                dob: e.target.value,
              }))
            }
            className="w-full border rounded-md px-4 py-3 outline-none focus:border-black"
          />
        ) : (
          <div className="border rounded-md px-4 py-3">
            {userData.dob}
          </div>
        )}
      </div>

      {/* Buttons */}

      <div className="flex justify-end gap-4 pt-5">

        {isEdit && (
          <button
            onClick={() => {
              setIsEdit(false);
              setImage(false);
            }}
            className="border px-6 py-2 rounded-md hover:bg-gray-100"
          >
            Cancel
          </button>
        )}

        <button
          onClick={() => {
            if (isEdit) {
              updateUserProfileData();
            } else {
              setIsEdit(true);
            }
          }}
          className="border bg-black text-white px-7 py-2 rounded-md hover:bg-gray-800"
        >
          {isEdit ? "Save Changes" : "Edit Profile"}
        </button>

      </div>

    </div>

  </div>
) : null;
};

export default MyProfile;