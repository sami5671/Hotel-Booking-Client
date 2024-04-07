import { useState } from "react";
import { imageUpload } from "../../../api/utils";
import useAuth from "./../../../hooks/useAuth";
import useRole from "./../../../hooks/useRole";
import { Helmet } from "react-helmet-async";
import { toast } from "react-hot-toast";
import ProfileUpdateModal from "./ProfileUpdateModal/ProfileUpdateModal";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, updateUserProfile, resetPassword } = useAuth();
  const [role] = useRole();
  const navigate = useNavigate();

  // ----------------------------------------------------------------
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleUpdateUserProfile = async (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;
    const name = form.name.value;
    const image = form.image.files[0];

    try {
      // uploading img to imgBB
      const imageData = await imageUpload(image);

      // save username and profile photo
      await updateUserProfile(name, imageData?.data?.display_url);
      setLoading(false);
      setIsOpen(false);
    } catch (error) {
      console.log(error.message);
      toast.error(error?.message);
    }
  };

  const handleResetPassword = async () => {
    try {
      await resetPassword(user.email);
      toast.success("Password reset email sent successfully!");
    } catch (error) {
      console.log(error.message);
      toast.error(error?.message);
    }
  };

  // ----------------------------------------------------------------
  return (
    <div className="flex justify-center items-center h-screen">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className="bg-white shadow-lg rounded-2xl w-3/5">
        <img
          alt="profile"
          src="https://wallpapercave.com/wp/wp10784415.jpg"
          className="w-full mb-4 rounded-t-lg h-36"
        />
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={user.photoURL}
              className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
            />
          </a>

          <p className="p-2 px-4 text-xs text-white bg-pink-500 rounded-full">
            {role && role.toUpperCase()}
          </p>
          <p className="mt-2 text-xl font-medium text-gray-800 ">
            User Id: {user.uid}
          </p>
          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 ">
              <p className="flex flex-col">
                Name
                <span className="font-bold text-black ">
                  {user.displayName}
                </span>
              </p>
              <p className="flex flex-col">
                Email
                <span className="font-bold text-black ">{user.email}</span>
              </p>

              <div>
                <button
                  onClick={openModal}
                  className="bg-[#F43F5E] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block mb-1"
                >
                  Update Profile
                </button>
                <button
                  onClick={handleResetPassword}
                  className="bg-[#F43F5E] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053]"
                >
                  Change Password
                </button>
                <ProfileUpdateModal
                  isOpen={isOpen}
                  openModal={openModal}
                  closeModal={closeModal}
                  handleUpdateUserProfile={handleUpdateUserProfile}
                  loading={loading}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
