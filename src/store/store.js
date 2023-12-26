import { configureStore } from "@reduxjs/toolkit";
import { userListReducer } from "./slice/userListSlice";
import { userReducer } from "./slice/userProfileSlice";

export const store = configureStore({
  reducer: {
    userList: userListReducer,
    user: userReducer,
  },
});
