import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const fetchUsersList = createAsyncThunk("usersList/fetch", async () => {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();

  if (!res.ok) {
    throw Error;
  }
  return data.users;
});

const initialState = {
  isLoading: false,
  userList: null,
  error: null,
};

export const userListSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsersList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userList = action.payload;
        state.error = null;
      })
      .addCase(fetchUsersList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export const userListReducer = userListSlice.reducer;

export const useUserListSelector = () => {
  return useSelector((state) => state.userList);
};
