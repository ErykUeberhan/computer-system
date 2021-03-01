import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        tokenSpotify: '',
        spotifyOpen: false,
        folderOpen: false,
        user: false,
    },
    reducers: {
        setSpotify: (state, action) => {
            state.tokenSpotify = action.payload.tokenSpotify;
        },
        setWindowsOpen: (state, action: PayloadAction<any>) => {
            state.spotifyOpen = typeof action.payload.spotifyOpen !== 'undefined' ? action.payload.spotifyOpen : state.spotifyOpen;
            state.folderOpen = typeof action.payload.folderOpen !== 'undefined' ? action.payload.folderOpen : state.folderOpen;
        },
        setUser: (state, action) => {
            state.user = action.payload.user;
        },
    },
});

export const { setSpotify, setWindowsOpen, setUser } = appSlice.actions;

export const selectTokenSpotify = (state: any) => state.app.tokenSpotify;

export const selectFolderOpen = (state: any) => state.app.folderOpen;
export const selectSpotifyOpen = (state: any) => state.app.spotifyOpen;

export const selectUser = (state: any) => state.app.user;


export default appSlice.reducer;
