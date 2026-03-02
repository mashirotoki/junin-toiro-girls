import React, { useContext } from 'react';
import { AudioContext } from '../context/AudioContext';

const MusicNoteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163z" />
    </svg>
);

const GlobalAudioPlayer = () => {
    const { currentTrack, isPlaying, progress, togglePlay, stopAudio } = useContext(AudioContext);

    if (!currentTrack) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:bottom-6 sm:right-6 z-50 animate-[fadeIn_0.5s_ease-out_forwards]">
            <div className="glass-card bg-white/80 rounded-2xl p-3 sm:p-4 shadow-lg flex items-center gap-3 sm:gap-4 border border-[var(--color-text)]/10">
                <div className="flex-shrink-0 animate-[float_4s_ease-in-out_infinite]">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[var(--color-text)]/20 shadow-sm flex items-center justify-center bg-white overflow-hidden relative" style={{ backgroundColor: currentTrack.bgCol }}>
                        <img src={currentTrack.image} alt={currentTrack.artist} className="w-full h-full object-cover opacity-80" />
                    </div>
                </div>

                <div className="flex-1 min-w-[150px]">
                    <div className="flex items-center justify-between mb-1">
                        <p className="font-bold text-sm text-gray-800 truncate" title={currentTrack.title}>{currentTrack.title}</p>
                        <button onClick={stopAudio} className="text-gray-400 hover:text-gray-600 transition-colors ml-2" title="Stop">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <p className="text-xs opacity-60 truncate">{currentTrack.artist}</p>
                    <div className="w-full h-1.5 bg-gray-200 rounded-full mt-2 overflow-hidden">
                        <div
                            className="h-full bg-[var(--color-text)] opacity-70 rounded-full transition-all duration-100 ease-linear"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>

                <button
                    onClick={togglePlay}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors shadow-sm shrink-0 border border-gray-200 ml-1 sm:ml-2"
                >
                    {isPlaying ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-0.5">
                            <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
};

export default GlobalAudioPlayer;
