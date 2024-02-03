'use client'
const { configureStore } = require("@reduxjs/toolkit");
const { default: authReducer } = require("./features/auth/authSlice");


const store = configureStore({
    reducer: {
        user : authReducer
    },
})

export default store;