import { createSlice } from "@reduxjs/toolkit";
import { clearAllUsers } from "../action";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
    },
    // clearAllUsers(state, action) {
    //   return [];
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(clearAllUsers, () => {
      return [];
    });
  },
});
// console.log("userSlice", userSlice.actions.clearAllUsers);
export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;
