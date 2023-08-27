import { createSlice } from "@reduxjs/toolkit";
import { User } from "../Interfaces/interfaces";

const user: User = {} as User;

const UserReducer = createSlice({
  name: "user",

  initialState: {
    user: user
  },

  reducers: {
    setUserContent: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUserContent } = UserReducer.actions;
export default UserReducer.reducer;
