import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    signIn: (state, action) => {
      state.isAuthenticated = true;
      // console.log("REDUCER", action);
      state.user = action.payload;
    },
    signOut: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export default userSlice.reducer;
export const { signIn, signOut } = userSlice.actions;
