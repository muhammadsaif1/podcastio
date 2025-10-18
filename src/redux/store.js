import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import modalReducer from "./features/modalSlice";
import trackReducer from "./features/trackSlice";
import audioControlReducer from "./features/audioControlSlice";
import audioInfo from "./features/audio-info";

export const store = configureStore({
    reducer: {
        track: trackReducer,
        customModal: modalReducer,
        audioControl: audioControlReducer,
        audioInfo: audioInfo

    },
});

// export const RootState = store.getState;
// export const AppDispatch = store.dispatch;
export const useAppSelector = useSelector;
