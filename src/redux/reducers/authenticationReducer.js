import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUser: false,
  isSignUpModalVisible: false,
  userData: null,
};

export const authenticationReducer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload.user;  
    },
    logout: (state) => {
      state.userData = null;
    }
  },
});

export const { setUser, setSignUpModal, logout } =
  authenticationReducer.actions;

export default authenticationReducer.reducer;