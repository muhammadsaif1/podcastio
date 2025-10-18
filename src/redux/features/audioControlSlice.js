
import { createSlice } from "@reduxjs/toolkit";

const audioControlSlice = createSlice({
    name: "audioControl",
    initialState: {
        songCurrentTime: 0,
        songDuration: 0,
        songProgress: 0,
    },
    reducers: {
        setSongCurrentTime: (state, action) => {
            state.songCurrentTime = action.payload;
        },
        setSongDuration: (state, action) => {
            state.songDuration = action.payload;
        },
        setSongProgress: (state, action) => {
            state.songProgress = action.payload;
        },
    },
});

export const {
    // togglePlay,
    setSongVolume,
    setSongCurrentTime,
    setSongDuration,
    setSongProgress
} = audioControlSlice.actions;
export default audioControlSlice.reducer;