import React from 'react';

const CharacterCard = ({ character, onClick }) => {
    // 色に応じたボーダーと背景のスタイル
    return (
        <div
            onClick={() => onClick(character)}
            className="glass-card rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg group flex flex-col items-center relative overflow-hidden h-full"
            style={{
                borderTop: `4px solid ${character.colorHex}`,
                borderColor: character.colorHex,
                backgroundColor: `${character.colorHex}20`
            }}
        >
            <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-white shadow-sm relative group-hover:animate-[float_6s_ease-in-out_infinite]">
                <div className="absolute inset-0 bg-white opacity-20 z-10"></div>
                <img
                    src={character.image}
                    alt={character.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>
            <h3 className="text-xl font-bold mb-1">{character.name}</h3>
            <p className="text-sm opacity-60 mb-3 font-light tracking-wider">{character.nameEn}</p>
            <div className="mt-auto flex items-center gap-2 text-xs opacity-80 bg-white/40 px-3 py-1 rounded-full w-max">
                <span className="w-2 h-2 rounded-full block" style={{ background: character.colorHex }}></span>
                {character.flower}
            </div>
        </div>
    );
};

export default CharacterCard;
