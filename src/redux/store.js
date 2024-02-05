'use client'

import houseReducer from "./features/house/houseSlice";
import testmonialReducer from "./features/testmonial/testmonialSlice";

const { configureStore } = require("@reduxjs/toolkit");
const { default: authReducer } = require("./features/auth/authSlice");


const store = configureStore({
    reducer: {
        user : authReducer,
        houses: houseReducer,
        testimonials: testmonialReducer
    },
})

export default store;