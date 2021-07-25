import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiCore } from "../../services/api/core";


const INITIAL_STATE = {
    post: [],
}



export const fetchUserPost = createAsyncThunk(
    'users/fetchUserPost',
    async () => {
        const API = new ApiCore({getAll: true});

        const posts = await API.getAll('posts');
        return posts.data
    }
)

const postSlice = createSlice({
    name: 'post',
    initialState: INITIAL_STATE,
    extraReducers: (builder) => {
        builder.addCase(fetchUserPost.fulfilled, (state,{payload}) => {
            state.post = payload.posts
        })
    }
})

export default postSlice.reducer