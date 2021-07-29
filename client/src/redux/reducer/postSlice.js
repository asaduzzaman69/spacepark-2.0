import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiCore } from "../../services/api/core";

const INITIAL_STATE = {
  posts: [],
  isPostModalOpen: false,
  isCreating: false,
  isPostCreatingError: false

};

export const fetchAllPosts = createAsyncThunk(
  "users/fetchAllPosts",
  async (id, thunkApi) => {
    const API = new ApiCore({ getAll: true });

    const response = await API.getAll("posts");
    return response.data;
  }
);


export const createUserPost = createAsyncThunk(
  'users/createUserPost', 
  async (data,thunkApi) => {
    console.log(data)
    const API = new ApiCore({createOne: true})
    const res = await API.createOne('posts', data)
    return res.data
  }
)






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
    builder.addCase(createUserPost.fulfilled, (state, action) => {
      console.log("fullfield")
       state.isCreating = false
    })

    builder.addCase(createUserPost.pending, (state, {payload}) => {
      console.log('I am pending')
       state.isCreating = true
   })





    builder.addCase(createUserPost.rejected, (state, {error}) => {
      state.isCreating = false;
      state.isPostCreatingError = true
    })
  },
});


export const { toggle } = postSlice.actions

export default postSlice.reducer;
