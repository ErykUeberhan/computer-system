import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        tokenSpotify: '',
    },
    reducers: {
        setSpotifyAPI: (state, action) => {
            state.tokenSpotify = action.payload.tokenSpotify;
        },
    },
});

export const { setSpotifyAPI } = appSlice.actions;

export const selectTokenSpotify = (state: any) => state.app.tokenSpotify;


export default appSlice.reducer;
