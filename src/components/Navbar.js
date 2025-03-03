import React from "react";

export const Navbar = () => {
  return (
    <>
      <div className="container mx-auto p-4 ">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">ADMIN TABLE</h1>
          <p className="text-gray-500 pt-2 ">
            One Destination for complete Web Development
          </p>
        </div>
      </div>
      <nav className="mt-4 flex justify-between items-center p-4 mx-96 bg-gray-200 text-gray-600 rounded-t-lg font-bold">
        <a className="animate-pulse bg-gradient-to-r from-pink-500 via-green-500 to-violet-500 bg-clip-text text-transparent">
          HOME
        </a>
        <a className="animate-pulse bg-gradient-to-r from-pink-500 via-green-500 to-violet-500 bg-clip-text text-transparent">
          ABOUT
        </a>
        <a className="animate-pulse bg-gradient-to-r from-pink-500 via-green-500 to-violet-500 bg-clip-text text-transparent">
          PROJECTS
        </a>
        <a className="animate-pulse bg-gradient-to-r from-pink-500 via-green-500 to-violet-500 bg-clip-text text-transparent">
          CODE
        </a>
        <a className="animate-pulse bg-gradient-to-r from-pink-500 via-green-500 to-violet-500 bg-clip-text text-transparent">
          CONTACT
        </a>
      </nav>
    </>
  );
};

export default Navbar;

