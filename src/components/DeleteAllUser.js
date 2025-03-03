import React from "react";
// import { clearAllUsers } from "../store/slices/userSlices";
import { clearAllUsers } from "../store/action";
import { useDispatch } from "react-redux";

const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const deleteUsers = () => {
    dispatch(clearAllUsers());
  };

  return (
    <>
      <div className="flex justify-center items-center text-white">
        <button
          className="bg-gradient-to-tl from-blue-500 to-purple-600 shadow hover:opacity-90 px-4 py-2 rounded mt-2.5"
          onClick={deleteUsers}
        >
          Clear users
        </button>
      </div>
    </>
  );
};

export default DeleteAllUser;
