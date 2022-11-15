import React from "react";

const Sidebar = () => {
  return (
    <div className="border-r-2 border-solid border-gray-200 w-60 min-h-screen bg-white">
      <div className="h-12 flex items-center justify-center shadow border-b-2 border-solid border-gray-200">
        <span className="text-violet-500">
          G A M E T U B E
        </span>
      </div>
      {/* <hr className="h-0 border-b-2 border-solid border-gray-200"/> */}
      <div className="mt-4 ml-3 font-bold text-2xl text-stone-600 cursor-pointer">
        HOME
      </div>
      <div className="pl-3">
        <ul className="m-0 p-0 list-none">
          <p className="title">GENRES</p>
          <li className="sidebtn">
            <span className="side-span"> Action </span>
          </li>
          <li className="sidebtn">
            <span className="side-span"> Adventure </span>
          </li>
          <li className="sidebtn">
            <span className="side-span"> Racing </span>
          </li>
          <li className="sidebtn">
            <span className="side-span"> Shooter </span>
          </li>
          <li className="sidebtn">
            <span className="side-span"> Puzzle </span>
          </li>
          <p className="title">PLATFORMS</p>
          <li className="sidebtn">
            <span className="side-span"> PC </span>
          </li>
          <li className="sidebtn">
            <span className="side-span"> PlayStation </span>
          </li>
          <li className="sidebtn">
            <span className="side-span"> XBox </span>
          </li>
          <li className="sidebtn">
            <span className="side-span"> iOS </span>
          </li>
          <li className="sidebtn">
            <span className="side-span"> Android </span>
          </li>
          <p className="title">BROWSE</p>
          <li className="sidebtn">
            <span className="side-span"> Platform </span>
          </li>
          <li className="sidebtn">
            <span className="side-span"> Store </span>
          </li>
          <li className="sidebtn">
            <span className="side-span"> Genres </span>
          </li>
          <li className="sidebtn">
            <span className="side-span"> Creators </span>
          </li>
          <p className="title">USER</p>
          <li className="sidebtn">
            <span className="side-span"> Profile </span>
          </li>
          <li className="sidebtn">
            <span className="side-span"> Logout </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
