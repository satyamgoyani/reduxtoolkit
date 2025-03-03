import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from "../store/slices/userSlices";

const DisplayUsers = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.users;
  });

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <div>
      <div className="flex justify-between items-center flex-col space-y-2 p-4 bg-white mx-96 max-w-3xl">
        {data.map((user, id) => {
          return (
            <li
              key={id}
              className="flex justify-between items-center w-full"
              onClick={() => deleteUser(id)}
            >
              {user}
              <button className="text-[#ff0000]">
                <MdDeleteForever />
              </button>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayUsers;
