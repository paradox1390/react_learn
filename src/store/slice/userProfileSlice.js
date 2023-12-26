import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  isLoading: false,
  user: null,
  error: null,
};

export const fetchUserProfile = createAsyncThunk("fetch/user", async (id) => {
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  const data = await res.json();
  if (!res.ok) {
    throw Error;
  }
  return data;
});

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export const userReducer = userSlice.reducer;
export const useUserSelector = () => useSelector((state) => state.user);
