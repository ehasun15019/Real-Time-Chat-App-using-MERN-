import React from "react";
import assets, { userDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";

// add here props{selectedUser, setSelectedUser}
const SideBar = ({ selectedUser, setSelectedUser }) => {
  // navigate using for going different pages
  const navigate = useNavigate();

  return (
    <div
      className={`bg-[#818582]/10 h-full p-5 rounded-r-xl overflow-y-scroll text-white 
        ${selectedUser ? "max-md:hidden" : ""}`}
    >
      {/* navigation */}
      <div className="pb-5">
        <div className="flex justify-between items-center">
          <img src={assets.logo} alt="logo" className="max-w-40" />

          <div className="relative py-2 group">
            <img
              src={assets.menu_icon}
              alt="menu"
              className="max-h-5 cursor-pointer"
            />

            <div className="absolute top-full right-0 z-20 w-32 p-5 rounded-md bg-[#282142] border border-gray-600 text-gray-100 hidden group-hover:block">
              {/* navigate use for going profile page */}
              <p
                onClick={() => navigate("/profile")}
                className="cursor-pointer text-sm"
              >
                Edit Profile
              </p>
              <hr className="py-2 border-t border-gray-500" />
              <p className="cursor-pointer text-sm">Logout</p>
            </div>
          </div>
        </div>

        {/* search box */}
        <div className="bg-[#282142] rounded-full flex items-center gap-2 py-4 px-4 mt-5">
          <img src={assets.search_icon} alt="search" className="w-3" />
          <input
            type="text"
            className="bg-transparent border-none outline-none text-xs text-white placeholder-[#c8c8c8] flex-1"
            placeholder="Search User..."
          />
        </div>
      </div>

      {/* all friend & message */}
      <div className="flex flex-col ">
        {userDummyData.map((user, index) => {
          return (
            <div>
              <img
                src={user?.profilePic || assets.avatar_icon}
                alt="profile pic"
                className="w-[35px] aspect-[1/1] rounded-full"
              />

              <div className="flex flex-col leading-5">
                <p>{user.fullName}</p>

                {/* static online & offline */}
                {index < 3 ? (
                  <span className="text-green-400 text-xs">Online</span>
                ) : (
                  <span className="text-neutral-400">Offline</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
