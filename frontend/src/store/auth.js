import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: "authentication",
    initialState: { isAuthenticated: false },
    reducers: {
      login(state) {
        state.isAuthenticated = true;
      },
      logout(state) {
        state.isAuthenticated = false;
      },
    },
  });

export const authActions = AuthSlice.actions;

export default AuthSlice.reducer