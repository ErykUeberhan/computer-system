import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        tokenSpotify: '',
        folderOpen: false,
    },
    reducers: {
        setSpotifyAPI: (state, action) => {
            state.tokenSpotify = action.payload.tokenSpotify;
        },
        setFolderOpen: (state, action) => {
            state.folderOpen = action.payload.folderOpen;
        },
    },
});

export const { setSpotifyAPI, setFolderOpen } = appSlice.actions;

export const selectTokenSpotify = (state: any) => state.app.tokenSpotify;

export const selectFolderOpen = (state: any) => state.app.folderOpen;


export default appSlice.reducer;
