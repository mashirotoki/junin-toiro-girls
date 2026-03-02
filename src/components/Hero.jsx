import React from 'react';
import { Link } from 'react-router-dom';

const MusicNoteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163z" />
    </svg>
);

const Hero = () => {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-bg)] pointer-events-none"></div>
            <div className="z-10 animate-[fadeIn_0.5s_ease-out_forwards]">
                <h2 className="text-xl md:text-2xl font-medium tracking-widest mb-4 opacity-80">PROJECT</h2>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-sm tracking-wide">
                    <span className="text-[var(--color-akagi)]">十</span>
                    <span className="text-[var(--color-komaki)]">人</span>
                    <span className="text-[var(--color-kise)]">十</span>
                    <span className="text-[var(--color-midori)]">色</span>
                    <span className="text-[var(--color-mashiro)]" style={{ textShadow: '0 0 10px rgba(0,0,0,0.1)' }}>ガールズ</span>
                </h1>
                <p className="text-lg md:text-xl font-light italic opacity-90 mb-8">
                    — Lo-Fiで彩る、彼女たちの日常 —
                </p>
                <div className="flex justify-center gap-4 mb-10">
                    <div className="w-16 h-1 bg-gradient-to-r from-[var(--color-akagi)] to-[var(--color-komaki)] rounded-full opacity-60"></div>
                    <div className="w-16 h-1 bg-gradient-to-r from-[var(--color-kise)] to-[var(--color-midori)] rounded-full opacity-60"></div>
                </div>

                <div className="max-w-2xl mx-auto space-y-4 text-sm md:text-base opacity-80 font-light tracking-wider leading-loose">
                    <p className="font-medium text-lg opacity-100 mb-6 tracking-widest text-shadow-sm">コンセプトテーマ：十人十色<br />それぞれの色、それぞれの人生</p>
                    <p>
                        十人十色、みんな違ってみんな良い。<br />
                        そんな想いから生まれた個性的なキャラクターたち。
                    </p>
                    <p>
                        彼女たちの日常を切り取ったような、<br />
                        落ち着く、エモい、ノスタルジーを感じる心地よい世界。
                    </p>
                    <p>
                        Lo-Fiミュージックやチルポップの調べに乗せて、<br />
                        彼女たちの色づく日々をお届けします。
                    </p>
                </div>

                <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        to="/gallery"
                        className="px-8 py-3 rounded-full bg-white/50 hover:bg-white/80 border border-[var(--color-text)]/20 transition-all duration-300 shadow-sm hover:shadow-md text-[var(--color-text)] font-medium tracking-widest backdrop-blur-md"
                    >
                        イラストギャラリーを見る
                    </Link>
                    <Link
                        to="/discography"
                        className="px-8 py-3 rounded-full bg-white/70 hover:bg-white border border-[var(--color-text)]/20 transition-all duration-300 shadow-sm hover:shadow-md text-[var(--color-text)] font-medium tracking-widest backdrop-blur-md flex items-center gap-2"
                    >
                        <MusicNoteIcon />
                        ディスコグラフィを見る
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
