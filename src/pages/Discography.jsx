import React from 'react';
import { useNavigate } from 'react-router-dom';

const Discography = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    };

    return (
        <div className="min-h-screen pt-12 pb-20 px-4 md:px-8 max-w-5xl mx-auto animate-[fadeIn_0.5s_ease-out_forwards] relative z-10 flex flex-col">
            <div className="flex justify-between items-center mb-10">
                <button
                    onClick={handleBack}
                    className="flex items-center gap-1 md:gap-2 px-4 md:px-6 py-2 rounded-full bg-white/50 hover:bg-white border border-[var(--color-text)]/20 transition-all duration-300 shadow-sm text-sm md:text-base"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    ホームに戻る
                </button>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-widest text-shadow-sm opacity-80">DISCOGRAPHY</h2>
            </div>

            <div className="glass-card rounded-3xl p-6 md:p-12 flex flex-col md:flex-row gap-8 md:gap-10 items-center md:items-start bg-white/60">
                {/* Album Cover */}
                <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-white shrink-0 relative group bg-white/40">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-komaki)]/20 to-[var(--color-akagi)]/20 mix-blend-overlay z-10 pointer-events-none"></div>
                    <img src="/moveon.png" alt="MOVE ON Album Cover" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>

                {/* Album Info */}
                <div className="flex-1 flex flex-col justify-center w-full">
                    <div className="uppercase tracking-widest text-xs md:text-sm opacity-60 font-medium mb-1 md:mb-2 w-full text-center md:text-left">1st Album</div>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-center md:text-left tracking-wide">MOVE ON</h3>

                    <p className="text-sm md:text-lg opacity-80 leading-relaxed mb-6 md:mb-8 text-center md:text-left">
                        「十人十色ガールズ」プロジェクトの記念すべき1stアルバム。<br />
                        彼女たちの色づく日常を彩るLo-Fiトラックを収録。
                    </p>

                    <div className="flex flex-col gap-3 md:gap-4 w-full max-w-md mx-auto md:mx-0">
                        <a
                            href="https://open.spotify.com/intl-ja/artist/0swIdzerQwx4XZVHI6zeOs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between px-6 py-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all border border-[#1DB954]/30 hover:border-[#1DB954] group"
                        >
                            <div className="flex items-center gap-4">
                                <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#1DB954]" fill="currentColor">
                                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.84.241 1.2zM20.16 9.36c-3.96-2.34-10.44-2.58-14.22-1.44-.6.18-1.2-.18-1.38-.78-.18-.6.18-1.2.78-1.38 4.32-1.26 11.4-1.02 15.96 1.68.54.3.72 1.02.42 1.56-.24.601-.96.78-1.56.36z" />
                                </svg>
                                <span className="font-bold text-gray-800 tracking-wider">Spotify</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#1DB954] opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </a>

                        <a
                            href="https://music.youtube.com/channel/UCaNaOdMsuEyx-Gm9HCnm3Bw"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between px-6 py-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all border border-[#FF0000]/30 hover:border-[#FF0000] group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 bg-[#FF0000] rounded-full flex items-center justify-center">
                                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white ml-0.5" fill="currentColor">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                <span className="font-bold text-gray-800 tracking-wider">YouTube Music</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#FF0000] opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discography;
