import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
    isLoading: false,
  },
  reducers: {
    signIn: (state, action) => {
      state.isAuthenticated = true;
      state.isLoading = action.payload;

      // console.log("REDUCER", action);
      state.user = action.payload;
    },
    signOut: (state, action) => {
      state.isLoading = action.payload;
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export default userSlice.reducer;
export const { signIn, signOut } = userSlice.actions;
