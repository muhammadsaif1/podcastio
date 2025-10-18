import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTrack } from "../../redux/features/trackSlice";
// import {
//     setSongVolume,
//     setSongCurrentTime,
//     setSongDuration,
//     setSongProgress
// } from "../../redux/features/audioControlSlice";

const useAudioPlayer = () => {
    const dispatch = useDispatch();
    const audioTrack = useSelector((state) => state.track);
    const audio = audioTrack.url;
    const [playToggle, setPlayToggle] = useState(false);
    const audioRef = useRef();
    const progressBarRef = useRef();
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isSeeking, setIsSeeking] = useState(false);
    const [durationInMin, setDurationInMin] = useState("");
    const [currentInMin, setCurrentInMin] = useState("");
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const vref = useRef(null);

    const handlePlayToggle = () => {
        setPlayToggle(!playToggle);
        if (audioRef.current) {
            if (playToggle) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
        }
    };

    const handlePlay = () => {
        setPlayToggle(true);
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    const handlePause = () => {
        setPlayToggle(false);
        if (audioRef.current) {
            audioRef.current.pause();
        }
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.addEventListener("timeupdate", handleProgress);

            return () => {
                audio.removeEventListener("timeupdate", handleProgress);
            };
        }
    }, []);

    const handleProgress = () => {
        const audio = audioRef.current;
        if (audio) {
            const currentTime = audio.currentTime;
            const duration = audio.duration;
            const progressPercentage = (currentTime / duration) * 100;

            if (currentTime === duration) {
                setPlayToggle(false);
            }
            setCurrentTime(currentTime);
            setDuration(duration);
            setProgress(progressPercentage);
            // dispatch(setSongProgress(progressPercentage));
        }
    };

    const seekToTime = (time) => {
        const audio = audioRef.current;
        if (audio) {
            audio.currentTime = time;
        }
    };

    const handleFastReverse = () => {
        seekToTime(currentTime - 10);
    };

    const handleFastForward = () => {
        seekToTime(currentTime + 10);
    };

    const handleProgressBarMouseDown = () => {
        setIsSeeking(true);
    };

    const handleProgressBarMouseUp = () => {
        if (isSeeking) {
            setIsSeeking(false);
        }
    };

    const handleProgressBarInteraction = () => {
        const progressBar = progressBarRef.current;
        if (progressBar) {
            const rect = progressBar.getBoundingClientRect();
            const newProgress = ((event.clientX - rect.left) / rect.width) * 100;
            const timeToSeek = (newProgress / 100) * duration;
            setCurrentTime(timeToSeek);
            // Seek to the calculated time using the 'seekToTime' function
            seekToTime(timeToSeek);
        }
    };

    const handleProgressBarMouseMove = () => {
        if (isSeeking) {
            const progressBar = progressBarRef.current;
            if (progressBar) {
                const rect = progressBar.getBoundingClientRect();
                const newProgress = ((event.clientX - rect.left) / rect.width) * 100;
                const timeToSeek = (newProgress / 100) * duration;
                setCurrentTime(timeToSeek);
                // Seek to the calculated time using the 'seekToTime' function
                seekToTime(timeToSeek);
            }
        }
    };

    const handleProgressBarMouseLeave = () => {
        if (isSeeking) {
            setIsSeeking(false);
        }
    };

    // formate the duration in second
    useLayoutEffect(() => {
        const minutes = Math.floor(currentTime / 60);
        const remainingSeconds = Math.floor(currentTime % 60);
        const newCurrent = `${minutes}:${remainingSeconds} `.replace(
            /:0(\d) min$/,
            ":$1 min"
        );
        setCurrentInMin(newCurrent);
        // dispatch(setSongCurrentTime(newCurrent));
        if (currentInMin === durationInMin) {
            dispatch(setTrack({ url: audio, isPlaying: false }));
        }
    }, [currentTime, audio]);

    useEffect(() => {
        const minutes = Math.floor(duration / 60);
        const remainingSeconds = Math.floor(duration % 60);
        if (Number.isNaN(minutes)) {
            setCurrentInMin("0:00");
        } else {
            const newDuration = `${minutes}:${remainingSeconds} `.replace(
                /:0(\d) min$/,
                ":$1 min"
            );
            setDurationInMin(newDuration);
            // dispatch(setSongDuration(newDuration));
        }
    }, [duration, audio]);


    // State for volume control
    const handleVolumeChange = (event) => {
        const progressBarv = vref.current;
        if (progressBarv) {
            const rect = progressBarv.getBoundingClientRect();
            const clickPosition = event.clientX - rect.left;
            // Calculate the new volume based on the click position and progress bar width
            const newVolume = clickPosition / rect.width;
            // Set the new volume in state
            setVolume(newVolume);
            setIsMuted(false);
            // dispatch(setSongVolume(newVolume));
            if (audioRef.current) {
                audioRef.current.volume = newVolume;
                audioRef.current.muted = false;
            }
        }
    };
    // mute or unmute the audio
    const handleAudioMute = () => {
        const audio = audioRef.current;
        if (!isMuted) {
            audio.muted = true;
            setIsMuted(true);
        } else {
            audio.muted = false;
            setIsMuted(false);
        }
    };

    return {
        playToggle,
        handlePause,
        audioRef,
        progressBarRef,
        progress,
        duration,
        currentTime,
        isSeeking,
        handlePlayToggle,
        handlePlay,
        handleProgress,
        setPlayToggle,
        seekToTime,
        handleFastReverse,
        handleFastForward,
        handleProgressBarMouseDown,
        handleProgressBarMouseUp,
        handleProgressBarInteraction,
        handleProgressBarMouseMove,
        handleProgressBarMouseLeave,
        durationInMin,
        currentInMin,
        vref,
        volume,
        handleVolumeChange,
        handleAudioMute,
        isMuted
    };
};

export default useAudioPlayer;
