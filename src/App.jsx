import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Discography from './pages/Discography';
import { AudioProvider } from './context/AudioContext';
import GlobalAudioPlayer from './components/GlobalAudioPlayer';

const App = () => {
  return (
    <AudioProvider>
      <BrowserRouter>
        <div className="min-h-screen font-sans text-[var(--color-text)] pb-20 relative">
          {/* Noise Overlay */}
          <div className="noise-bg"></div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery/:id" element={<Gallery />} />
            <Route path="/discography" element={<Discography />} />
          </Routes>

          <GlobalAudioPlayer />
        </div>
      </BrowserRouter>
    </AudioProvider>
  );
};

export default App;
