import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { characters } from '../data/characters';

const Gallery = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    // URLのパラメータから初期キャラクターを決定する
    const initialChar = id ? characters.find(c => c.id === parseInt(id)) : characters[0];
    const [activeChar, setActiveChar] = useState(initialChar || characters[0]);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    // キャラクターが切り替わったら画像のインデックスをリセット
    useEffect(() => {
        setActiveImageIndex(0);
    }, [activeChar]);

    // URLが変わったとき（直接リンクでアクセスされた場合等）にアクティブキャラを更新
    useEffect(() => {
        if (id) {
            const char = characters.find(c => c.id === parseInt(id));
            if (char) setActiveChar(char);
        }
    }, [id]);

    const handleBack = () => {
        navigate('/');
    };

    return (
        <div className="min-h-screen pt-12 pb-20 px-4 md:px-8 max-w-7xl mx-auto animate-[fadeIn_0.5s_ease-out_forwards] relative z-10 flex flex-col">
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-widest text-shadow-sm opacity-80">GALLERY</h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 flex-1">
                {/* ギャラリーメイン画像とサムネイル */}
                <div className="w-full lg:w-2/3 flex flex-col gap-4">
                    <div className="w-full h-[40vh] md:h-[50vh] lg:h-[65vh] glass-card rounded-3xl p-4 flex items-center justify-center relative overflow-hidden transition-all duration-500" style={{ backgroundColor: `${activeChar.colorHex}30` }}>
                        <img
                            src={activeChar.galleryImages && activeChar.galleryImages.length > 0
                                ? activeChar.galleryImages[activeImageIndex]
                                : activeChar.image}
                            alt={activeChar.name}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-contain drop-shadow-2xl animate-[fadeIn_0.5s_ease-out_forwards]"
                            key={`${activeChar.id}-${activeImageIndex}`}
                        />
                        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-white/80 backdrop-blur-md px-4 py-2 md:px-6 md:py-3 rounded-2xl shadow-lg border border-white/50">
                            <h3 className="text-xl md:text-2xl font-bold">{activeChar.name}</h3>
                            <p className="text-xs md:text-sm opacity-60 tracking-widest">{activeChar.nameEn}</p>
                        </div>
                    </div>

                    {/* サムネイル（複数画像用） */}
                    {activeChar.galleryImages && activeChar.galleryImages.length > 1 && (
                        <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
                            {activeChar.galleryImages.map((imgUrl, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImageIndex(idx)}
                                    className={`w-16 h-16 sm:w-24 sm:h-24 rounded-2xl overflow-hidden transition-all duration-300 flex-shrink-0 border-2 sm:border-4
                                        ${activeImageIndex === idx ? 'shadow-md scale-100' : 'border-transparent opacity-50 hover:opacity-100 hover:scale-[1.02]'}`}
                                    style={{
                                        borderColor: activeImageIndex === idx ? activeChar.colorHex : 'transparent',
                                        backgroundColor: `${activeChar.colorHex}30`
                                    }}
                                >
                                    <img src={imgUrl} alt={`${activeChar.name} - ${idx + 1}`} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* キャラクター選択リスト */}
                <div className="w-full lg:w-1/3 flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto pb-4 lg:pb-0 pr-2">
                    {characters.map(char => (
                        <button
                            key={char.id}
                            onClick={() => {
                                setActiveChar(char);
                                navigate(`/gallery/${char.id}`, { replace: true });
                            }}
                            className={`flex-shrink-0 flex items-center gap-3 md:gap-4 p-2 md:p-4 rounded-2xl transition-all duration-300 text-left border-2 
                                ${activeChar.id === char.id ? 'bg-white shadow-md scale-100' : 'bg-white/40 hover:bg-white/60 hover:scale-[1.02] border-transparent opacity-70'}`}
                            style={{ borderColor: activeChar.id === char.id ? char.colorHex : 'transparent' }}
                        >
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0" style={{ backgroundColor: char.colorHex }}>
                                <img src={char.image} alt={char.name} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                            </div>
                            <div className="hidden sm:block">
                                <h4 className="font-bold text-lg">{char.name}</h4>
                                <div className="flex items-center gap-1 text-xs opacity-60">
                                    <span className="w-2 h-2 rounded-full block" style={{ background: char.colorHex }}></span>
                                    {char.flower}
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
