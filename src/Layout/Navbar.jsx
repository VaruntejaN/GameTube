import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

const Navbar = () => {
  return (
    <div className="p-5 h-12 bg-white shadow flex items-center border-b-2 border-solid border-gray-200 sticky top-0">
      <div className="p-5 h-12 w-full flex items-center justify-between">
        {/* <div className="w-full flex items-center mr-6"> */}
          <div className="flex items-center p-1 border-solid border-gray-200 border-2 rounded-3xl w-full ml-12">
            <SearchIcon />
            <input
              className="border-none outline-none bg-transparent text-xs w-full ml-0.5"
              type="text"
              placeholder="Search for games..."
            />
          </div>
        {/* </div> */}

        <div className="flex items-center">
          <div className="flex items-center m-4 w-7 cursor-pointer">
            <img
              src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
              alt=""
              className="avatar"
            />
          </div>
          <div className="flex items-center m-4">
            <LanguageIcon />
            <span className="ml-0.5">English</span>
          </div>
          <div className="flex items-center m-4 cursor-pointer">
            <NotificationsNoneOutlinedIcon />
          </div>
          <div className="flex items-center m-4 cursor-pointer">
            <DarkModeOutlinedIcon />
          </div>
          <div className="flex items-center m-4">
            <MoreHorizOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
