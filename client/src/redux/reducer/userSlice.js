import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { ApiCore } from '../../services/api/core';


const INITIAL_STATE = {
    isUserLoggedIn: false,
    currentUser: {},
    allUsers: []
}


export const fetchCurrentUser = createAsyncThunk(
    'users/fetchCurrentUser',
    async (userID,thunkApi) => {
        const API = new ApiCore({getSingle: true})
        const response = await API.getOne('users',userID)
        return response.data;
    }
)

export const fetchAllUsers = createAsyncThunk(
    'users/fetchAllUsers',
    async () => {
        const API = new ApiCore({getAll: true})
        const response = await API.getAll('users')
        return response.data;
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        updateCurrentUser: (state,action) => {
            state.currentUser = action.payload

        }

    },

    extraReducers: (builder) => {
        builder.addCase(fetchCurrentUser.fulfilled, (state,action) => {
            state.isUserLoggedIn = true
            state.currentUser = action.payload.user
        })


        builder.addCase(fetchAllUsers.fulfilled, (state,action) => {
            state.allUsers = action.payload.users
        })
    }


})


export const { updateCurrentUser } = userSlice.actions;


export default userSlice.reducer


