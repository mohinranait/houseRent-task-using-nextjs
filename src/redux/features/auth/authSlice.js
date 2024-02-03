'use client'

import { instance } from "@/hooks/useAxios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState =  {
    isLoading : true,
    user : {},
    isError : null,
}

export const logoutUser = createAsyncThunk("user/logoutUser", async () => {
    const response = await instance.post('/logout',{})
    return response.data 
})

export const getAuthUser = createAsyncThunk("user/getAuthUser", async () => {
    const response = await instance.get('/auth-user')
    return response.data?.user 
})

const authSlice = createSlice({
    name : 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            console.log(action.payload);
            state.user = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(logoutUser.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(logoutUser.fulfilled, (state) => {
            state.isLoading = false;
            state.user = {};
        })
        builder.addCase(logoutUser.rejected, (state, action) => {
            state.isLoading = false;
            state.user = {};
            state.isError = action.payload;
        })
        builder.addCase(getAuthUser.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getAuthUser.fulfilled, (state,action) => {
            state.isLoading = false;
            state.user = action.payload;
        })
        builder.addCase(getAuthUser.rejected, (state, action) => {
            state.isLoading = false;
            state.user = {};
            state.isError = action.payload;
        })
    }
})


export const {addUser} = authSlice.actions
export default authSlice.reducer;