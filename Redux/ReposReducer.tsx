import { createSlice } from "@reduxjs/toolkit";
import { RepoProps } from "../Interfaces/interfaces";

const repos: RepoProps[] = []

const ReposReducer = createSlice({
  name: "repo",

  initialState: {
    repos: repos,
  },

  reducers: {
    setRepoContent: (state, action) => {
      state.repos = action.payload;
    },
  },
});

export const { setRepoContent } = ReposReducer.actions;
export default ReposReducer.reducer;
