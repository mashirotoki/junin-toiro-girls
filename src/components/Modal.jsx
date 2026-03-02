import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { AudioContext } from '../context/AudioContext';

const MusicNoteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163z" />
    </svg>
);

const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
);

const XMarkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const Modal = ({ character, onClose }) => {
    const navigate = useNavigate();
    const { currentTrack, isPlaying, playTrack, togglePlay } = useContext(AudioContext);

    if (!character) return null;

    const isCurrentCharTrackPlaying = currentTrack?.audioUrl === character.audio;

    const handlePlayClick = () => {
        if (isCurrentCharTrackPlaying) {
            togglePlay();
        } else {
            playTrack({
                audioUrl: character.audio,
                title: character.song,
                artist: character.name,
                image: character.image,
                bgCol: character.colorHex
            });
        }
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleViewGallery = () => {
        onClose();
        navigate(`/gallery/${character.id}`);
    };

    return createPortal(
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out_forwards]"
            style={{ backgroundColor: 'rgba(74, 78, 105, 0.6)', backdropFilter: 'blur(4px)' }}
            onClick={handleBackdropClick}
        >
            <div className="bg-white max-w-2xl w-full rounded-3xl overflow-hidden relative shadow-2xl">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 transition-colors z-10"
                >
                    <XMarkIcon />
                </button>

                <div className="flex flex-col md:flex-row">
                    {/* Left Side: Visual */}
                    <div
                        className="w-full md:w-2/5 h-64 md:h-auto flex flex-col items-center justify-center p-8 relative"
                        style={{ backgroundColor: character.colorHex }}
                    >
                        <div className="absolute inset-0 opacity-20 mix-blend-overlay noise-bg"></div>
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/50 shadow-lg overflow-hidden relative z-10">
                            <img
                                src={character.image}
                                alt={character.name}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold mt-4 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">{character.name}</h2>
                        <p className="text-white/90 text-xs md:text-sm tracking-widest drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] font-medium">{character.nameEn}</p>
                    </div>

                    {/* Right Side: Info */}
                    <div className="w-full md:w-3/5 p-6 md:p-8 relative">
                        <div className="space-y-4 md:space-y-6">
                            <div>
                                <div className="flex items-center gap-2 text-xs md:text-sm uppercase tracking-wider opacity-50 mb-1">
                                    <span style={{ color: character.colorHex }}>●</span> Image Flower
                                </div>
                                <p className="text-base md:text-lg font-medium">{character.flower}</p>
                                <p className="text-[10px] md:text-xs opacity-60">花言葉: {character.flowerMeaning}</p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 text-xs md:text-sm uppercase tracking-wider opacity-50 mb-1">
                                    <HeartIcon /> Personality
                                </div>
                                <p className="text-sm md:text-md leading-relaxed opacity-80">{character.personality}</p>
                            </div>

                            <div className="bg-white/50 p-3 md:p-4 rounded-xl border border-white/60">
                                <div className="flex items-center gap-2 text-xs md:text-sm uppercase tracking-wider opacity-50 mb-2">
                                    <MusicNoteIcon /> Recommended Lo-Fi Track
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3 w-full">
                                        <button
                                            onClick={handlePlayClick}
                                            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors shadow-sm shrink-0 border border-gray-200"
                                        >
                                            {isCurrentCharTrackPlaying && isPlaying ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-0.5">
                                                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                                </svg>
                                            )}
                                        </button>
                                        <div className="flex-1 w-full min-w-0">
                                            <p className="font-medium text-xs md:text-sm text-gray-800 truncate">{character.song}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex justify-end">
                                <button
                                    onClick={handleViewGallery}
                                    className="px-6 py-2 rounded-full bg-white/60 hover:bg-white border border-[var(--color-text)]/10 transition-all duration-300 shadow-sm text-sm font-medium tracking-wider"
                                >
                                    ギャラリーでイラストを見る →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default Modal;
