// actions.js
import { createSlice } from "@reduxjs/toolkit";

const audioInfoSlice = createSlice({
    name: "track",
    initialState: [{
        url: null,
        isPlaying: false,
        progress: 0,
        duration: 0,
        currentTime: 0,

    }],
    reducers: {
        audioInfoUpdate: (state, action) => {
            //    state = action.payload

            console.log(action.payload)

        }
    },
});

// export const { setTrack } = trackSlice.actions;
export const { audioInfoUpdate } = audioInfoSlice.actions;
export default audioInfoSlice.reducer;
