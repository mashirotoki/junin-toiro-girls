import React, { useState } from 'react';
import { characters } from '../data/characters';
import Hero from '../components/Hero';
import CharacterCard from '../components/CharacterCard';
import Modal from '../components/Modal';

const Home = () => {
    const [selectedChar, setSelectedChar] = useState(null);

    return (
        <div className="max-w-6xl mx-auto px-4 relative z-10 animate-[fadeIn_0.5s_ease-out_forwards]">
            <Hero />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-12">
                {characters.map(char => (
                    <CharacterCard
                        key={char.id}
                        character={char}
                        onClick={setSelectedChar}
                    />
                ))}
            </div>

            <footer className="mt-20 text-center opacity-40 text-sm">
                <p>© 2026 Junin Toiro Girls Project. All rights reserved.</p>
            </footer>

            {selectedChar && (
                <Modal
                    character={selectedChar}
                    onClose={() => setSelectedChar(null)}
                />
            )}
        </div>
    );
};

export default Home;
