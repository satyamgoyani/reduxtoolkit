import React from "react";
import DeleteAllUser from "./DeleteAllUser";
import { fakeUserData } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/userSlices";
import DisplayUsers from "./DisplayUsers";

export const UserDetails = () => {
  const dispatch = useDispatch();

  const addNewUser = (name) => {
    dispatch(addUser(name));
  };

  return (
    <>
      <div>
        <div className=" bg-white rounded-b-lg p-4 mx-96">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">List of User Details</h1>
            <button
              onClick={() => addNewUser(fakeUserData())}
              className="bg-gradient-to-tl from-blue-500 to-purple-600 text-white px-4 py-2 rounded shadow hover:opacity-90"
            >
              Add new users
            </button>
          </div>
        </div>
        <ul>
          <DisplayUsers />
        </ul>
        <div className="mx-96">
          <hr></hr>
          <DeleteAllUser />
        </div>
      </div>
    </>
  );
};

export default UserDetails;
