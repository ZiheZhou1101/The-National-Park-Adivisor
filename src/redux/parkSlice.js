import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { URL } from '../constants';

export const fetchAllParks = createAsyncThunk('park/fetchAllParks', async () => {
    const allNames = `${URL}&limit=10000`;
    const response = await (await fetch(allNames)).json()
    return response.data;
})

export const parkSlice = createSlice({
    name: 'park',
    initialState: {
        numbers: 0,
        allParks: [],
        details: null,
        status: 'idle',
        error: null,
        pages: 0,
    },
    reducers: {
        setDetails: (state, action) => {
            state.details = action.payload
        },
        setPages: (state, action) => {
            state.pages = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllParks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllParks.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.allParks = action.payload;
                state.numbers = state.allParks.length;
            })
            .addCase(fetchAllParks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const {
    setDetails, setPages
} = parkSlice.actions;
export default parkSlice.reducer;