import React, { createContext, useState, useRef, useEffect } from 'react';

export const AudioContext = createContext(null);

export const AudioProvider = ({ children }) => {
    const [currentTrack, setCurrentTrack] = useState(null); // { audioUrl: string, title: string, artist: string }
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef(null);

    // Initial setup of audio element
    useEffect(() => {
        audioRef.current = new Audio();

        const handleTimeUpdate = () => {
            if (audioRef.current && audioRef.current.duration > 0) {
                setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
            }
        };

        const handleEnded = () => {
            setIsPlaying(false);
            setProgress(0);
        };

        audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
        audioRef.current.addEventListener('ended', handleEnded);

        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
                audioRef.current.removeEventListener('ended', handleEnded);
                audioRef.current.pause();
                audioRef.current.src = '';
            }
        };
    }, []);

    // Handle track changes
    useEffect(() => {
        if (currentTrack && audioRef.current) {
            // Only update src if it's a new track
            if (audioRef.current.src !== window.location.origin + currentTrack.audioUrl) {
                audioRef.current.src = currentTrack.audioUrl;
                audioRef.current.load();
                setProgress(0);
            }

            if (isPlaying) {
                audioRef.current.play().catch(e => console.error("Audio playback failed", e));
            } else {
                audioRef.current.pause();
            }
        }
    }, [currentTrack, isPlaying]);

    const playTrack = (track) => {
        // If it's the same track, just toggle play
        if (currentTrack?.audioUrl === track.audioUrl) {
            setIsPlaying(true);
        } else {
            // New track
            setCurrentTrack(track);
            setIsPlaying(true);
        }
    };

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    const stopAudio = () => {
        setIsPlaying(false);
        setProgress(0);
        setCurrentTrack(null);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    return (
        <AudioContext.Provider value={{
            currentTrack,
            isPlaying,
            progress,
            playTrack,
            togglePlay,
            stopAudio
        }}>
            {children}
        </AudioContext.Provider>
    );
};
