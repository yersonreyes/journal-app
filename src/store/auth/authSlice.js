import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    status: "not-authenticated",
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMesage: null,
  },
  reducers: {
    login: (state, action) => {},
    logout: (state, payload) => {},
    checkingCredentials: (state) => {
      state.status = "cheking";
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
