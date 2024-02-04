'use client'

import houseReducer, from "./features/house/houseSlice";

const { configureStore } = require("@reduxjs/toolkit");
const { default: authReducer } = require("./features/auth/authSlice");


const store = configureStore({
    reducer: {
        user : authReducer,
        houses: houseReducer,
    },
})

export default store;