import { instancePublic } from "@/hooks/useAxiosPublic";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    houses : [],
    isLoading: false,
    isError : null,
}

export const getHousesWithFilter = createAsyncThunk("house/getHousesWithFilter", async ({city,bedroom,bathroom,search}) => {
    try {
        const res = await instancePublic.get(`/houses?city=${city}&bedroom=${bedroom}&bathroom=${bathroom}&search=${search}`);
        return res.data?.houses
    } catch (error) {
        return error.message
    }
   
})

const houseSlice = createSlice({
    name : "houses",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getHousesWithFilter.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getHousesWithFilter.fulfilled, (state,action) => {
            state.isLoading = false;
            state.houses = action.payload;
        })
        builder.addCase(getHousesWithFilter.rejected, (state,action) => {
            state.isLoading = false;
            state.houses = [];
            state.isError = action.payload
        })

    }
})



export default houseSlice.reducer;