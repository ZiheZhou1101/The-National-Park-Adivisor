import { configureStore } from '@reduxjs/toolkit';
import parkSlice from './parkSlice';

export default configureStore({
    reducer: {
        park: parkSlice,
    },
});