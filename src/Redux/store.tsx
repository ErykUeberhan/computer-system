import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import appReducer from './appSlice';

export default configureStore({
    reducer: {
        app: appReducer,
    },
});