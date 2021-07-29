import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiCore } from "../../services/api/core";

const INITIAL_STATE = {
  posts: [],
  isPostModalOpen: false
  
};

export const fetchAllPosts = createAsyncThunk(
  "users/fetchAllPosts",
  async (id, thunkApi) => {
    const API = new ApiCore({ getAll: true });

    const response = await API.getAll("posts");
    return response.data;
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: INITIAL_STATE,
  reducers: {
    toggle: (state,action) => {
      state.isPostModalOpen = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllPosts.fulfilled, (state, {payload}) => {
      state.posts= payload.posts;
    });

    builder.addCase(fetchAllPosts.rejected, (state, { error }) => {
      console.log(error);
    });
  },
});


export const { toggle } = postSlice.actions

export default postSlice.reducer;
