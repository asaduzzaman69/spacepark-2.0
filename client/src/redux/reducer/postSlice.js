import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiCore } from "../../services/api/core";

const INITIAL_STATE = {
  posts: [],
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllPosts.fulfilled, (state, {payload}) => {
      state.posts= payload.posts;
    });

    builder.addCase(fetchAllPosts.rejected, (state, { error }) => {
      console.log(error);
    });
  },
});

export default postSlice.reducer;
