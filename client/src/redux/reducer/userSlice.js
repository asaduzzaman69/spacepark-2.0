import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { ApiCore } from '../../services/api/core';




export const fetchCurrentUser = createAsyncThunk(
    'users/fetchCurrentUser',
    async (userID,thunkApi) => {
        const API = new ApiCore({getSingle: true})
        const response = await API.getOne('users',userID)
        console.log(response)
        return response.data;
    }
)
const INITIAL_STATE = {
    isUserLoggedIn: false,
    currentUser: {}
}
const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(fetchCurrentUser.fulfilled, (state,action) => {
            console.log(action.payload)
            state.isUserLoggedIn = true
            state.currentUser = action.payload.user
        })
    }


})



export default userSlice.reducer


