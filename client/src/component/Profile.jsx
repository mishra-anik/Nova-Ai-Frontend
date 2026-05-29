import { useState, useEffect } from "react";
import axios from "axios";
import { X, Edit2, Save, Mail, User, Calendar, MapPin, Loader } from "lucide-react";

const Profile = ({ isOpen, setIsOpen }) => {
  const [profileData, setProfileData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [editData, setEditData] = useState({});
  const apiUrl = import.meta.env.VITE_API_URL;

  // Fetch user profile
  useEffect(() => {
    if (!isOpen) return;
    
    const fetchProfile = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(`${apiUrl}/api/auth/me`, {
          withCredentials: true,
        });
        setProfileData(response.data);
        setEditData(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to load profile");
        console.error("Profile fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [isOpen, apiUrl]);

  // Handle input change
  const handleInputChange = (field, value) => {
    setEditData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Save profile changes
  const handleSaveProfile = async () => {
    try {
      setIsSaving(true);
      setError(null);
      const response = await axios.put(
        `${apiUrl}/api/auth/profile/update`,
        editData,
        { withCredentials: true }
      );
      setProfileData(response.data);
      setIsEditing(false);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update profile");
      console.error("Profile update error:", err);
    } finally {
      setIsSaving(false);
    }
  };

  // Cancel editing
  const handleCancel = () => {
    setEditData(profileData);
    setIsEditing(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-[#273a57] rounded-2xl shadow-2xl w-full max-w-2xl border border-gray-700 my-8">
        {/* Header */}
        <div className="flex items-center justify-between p-6 sm:p-8 border-b border-gray-700">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">My Profile</h1>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-[#2a3a4a] rounded-lg transition duration-200"
          >
            <X size={24} className="text-gray-400 hover:text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <Loader size={32} className="text-indigo-500 animate-spin" />
            </div>
          ) : error ? (
            <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 text-red-300">
              {error}
            </div>
          ) : profileData ? (
            <div className="space-y-6">
              {/* Profile Avatar Section */}
              <div className="flex items-center gap-4 pb-6 border-b border-gray-700">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center">
                  <User size={32} className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    {isEditing ? "Edit Profile" : "Profile Information"}
                  </h2>
                  <p className="text-gray-400 text-sm">
                    {isEditing
                      ? "Update your profile details"
                      : "Manage your account information"}
                  </p>
                </div>
              </div>

              {/* Profile Fields */}
              <div className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="flex items-center gap-2 text-gray-300 font-semibold mb-2">
                    <User size={18} className="text-indigo-400" />
                    Full Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.fullName || ""}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
                      }
                      className="w-full px-4 py-2 bg-[#1e2939] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400"
                      placeholder="Enter full name"
                    />
                  ) : (
                    <p className="px-4 py-2 bg-[#1e2939] rounded-lg text-gray-200">
                      {profileData?.fullName || "Not set"}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="flex items-center gap-2 text-gray-300 font-semibold mb-2">
                    <Mail size={18} className="text-indigo-400" />
                    Email Address
                  </label>
                  <p className="px-4 py-2 bg-[#1e2939] rounded-lg text-gray-200">
                    {profileData?.email || "Not set"}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Email cannot be changed for security
                  </p>
                </div>

                {/* Phone (if available) */}
                {(profileData?.phone || isEditing) && (
                  <div>
                    <label className="flex items-center gap-2 text-gray-300 font-semibold mb-2">
                      <Phone size={18} className="text-indigo-400" />
                      Phone Number
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={editData.phone || ""}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        className="w-full px-4 py-2 bg-[#1e2939] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400"
                        placeholder="Enter phone number"
                      />
                    ) : (
                      <p className="px-4 py-2 bg-[#1e2939] rounded-lg text-gray-200">
                        {profileData?.phone || "Not set"}
                      </p>
                    )}
                  </div>
                )}

                {/* Bio/About */}
                <div>
                  <label className="flex items-center gap-2 text-gray-300 font-semibold mb-2">
                    <Edit2 size={18} className="text-indigo-400" />
                    Bio
                  </label>
                  {isEditing ? (
                    <textarea
                      value={editData.bio || ""}
                      onChange={(e) =>
                        handleInputChange("bio", e.target.value)
                      }
                      className="w-full px-4 py-2 bg-[#1e2939] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400 resize-none h-24"
                      placeholder="Write a short bio about yourself"
                    />
                  ) : (
                    <p className="px-4 py-2 bg-[#1e2939] rounded-lg text-gray-200">
                      {profileData?.bio || "No bio added yet"}
                    </p>
                  )}
                </div>

                {/* Account Created Date */}
                {profileData?.createdAt && (
                  <div>
                    <label className="flex items-center gap-2 text-gray-300 font-semibold mb-2">
                      <Calendar size={18} className="text-indigo-400" />
                      Member Since
                    </label>
                    <p className="px-4 py-2 bg-[#1e2939] rounded-lg text-gray-200">
                      {new Date(profileData.createdAt).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-6 border-t border-gray-700">
                {isEditing ? (
                  <>
                    <button
                      onClick={handleCancel}
                      className="flex-1 px-4 py-2.5 bg-gray-700 hover:bg-gray-600 rounded-lg transition duration-200 font-medium text-white"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveProfile}
                      disabled={isSaving}
                      className="flex-1 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 disabled:opacity-50 rounded-lg transition duration-200 font-medium text-white flex items-center justify-center gap-2"
                    >
                      {isSaving ? (
                        <>
                          <Loader size={18} className="animate-spin" />
                          Saving...
                        </>
                      ) : (
                        <>
                          <Save size={18} />
                          Save Changes
                        </>
                      )}
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="flex-1 px-4 py-2.5 bg-gray-700 hover:bg-gray-600 rounded-lg transition duration-200 font-medium text-white"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => setIsEditing(true)}
                      className="flex-1 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 rounded-lg transition duration-200 font-medium text-white flex items-center justify-center gap-2"
                    >
                      <Edit2 size={18} />
                      Edit Profile
                    </button>
                  </>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

// Add Phone icon import if not available
const Phone = ({ size, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default Profile;
