import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const { user, logoutUser, updateUserProfile, setUser } = useContext(AuthContext);
  const [isUpdate, setIsUpdate] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    const fullname = e.target.fullname.value;
    const photoURL = e.target.photoURL.value;

    updateUserProfile({ displayName: fullname, photoURL: photoURL })
      .then(() => {
        setUser({ ...user, displayName: fullname, photoURL: photoURL });
        toast.success("Profile updated successfully!")
        setIsUpdate(false);
      })
      .catch((err) => console.log(err));
  };

  // Edit mode open
  const handleEdit = () => {
    setIsUpdate(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#161414] px-6 py-20">
      <div className="w-full max-w-lg bg-[#181818] rounded-2xl shadow-lg shadow-red-500 p-8">
        {/* User Image */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={user?.photoURL || "https://i.pinimg.com/474x/07/c4/72/07c4720d19a9e9edad9d0e939eca304a.jpg"}
            alt="User"
            className="w-24 h-24 rounded-full border-4 border-red-500 object-cover"
          />
          <h2 className="text-xl font-semibold text-yellow-300 mt-3">
            {user?.displayName || "User Name"}
          </h2>
          <p className="text-gray-400 text-sm">{user?.email}</p>
        </div>

        {/* Update Form */}
        {isUpdate && (
          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <label className="text-sm mb-2 text-gray-300">Full Name</label>
              <input
                type="text"
                name="fullname"
                placeholder="Enter your Full Name"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="text-sm mb-2 text-gray-300">Profile Image URL</label>
              <input
                type="text"
                name="photoURL"
                placeholder="Enter your Photo URL"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="btn border-none shadow-none px-6 py-2 rounded-lg bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold hover:opacity-90 transition"
              >
                Save Changes
              </button>
            </div>
          </form>
        )}

        {/* Bottom Buttons */}
        <div className="flex justify-between items-center mt-6">
          {!isUpdate && (
            <button
              onClick={handleEdit}
              className="btn border-none shadow-none px-6 py-2 rounded-lg bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold hover:opacity-90 transition"
            >
              Edit Profile
            </button>
          )}

          <button
            type="button"
            onClick={logoutUser}
            className="btn border-none shadow-none  px-6 py-2 rounded-lg bg-gray-700 text-red-400 font-bold hover:bg-gray-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
