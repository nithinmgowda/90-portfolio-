import { useRef, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import CustomCursor from './components/CustomCursor';

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const audio = new Audio('/assets/audio/pokemon-theme.mp3');
    audio.loop = true;
    audio.volume = 0.3;
    
    if (!isMuted) {
      audio.play().catch(error => console.log("Audio playback failed:", error));
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isMuted]);

  return (
    <div className="min-h-screen bg-black">
      <CustomCursor />
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("/assets/pokemon-bg.png")',
            imageRendering: 'pixelated',
            filter: 'brightness(0.9)'
          }} 
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-[2px]" />
      </div>

      {/* Navbar */}
      <Navbar onNavClick={{
        home: () => scrollToSection(homeRef),
        about: () => scrollToSection(aboutRef),
        projects: () => scrollToSection(projectsRef)
      }} />

      {/* Background Music Control */}
      <button 
        onClick={() => setIsMuted(!isMuted)} 
        className="fixed bottom-4 right-4 z-50 bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-full shadow-lg transition-all duration-300 flex items-center space-x-2"
      >
        <span className="material-icons">
          {isMuted ? '🔇' : '🔊'}
        </span>
        <span>{isMuted ? 'Play Music' : 'Mute Music'}</span>
      </button>

      {/* Main Content */}
      <main className="relative z-20">
        {/* Home Section */}
        <section 
          ref={homeRef} 
          className="min-h-screen pt-24 flex items-center"
        >
          <div className="container mx-auto px-6">
            <Home />
          </div>
        </section>

        {/* About Section */}
        <section 
          ref={aboutRef} 
          className="min-h-screen pt-24 flex items-center"
        >
          <div className="container mx-auto px-6">
            <About />
          </div>
        </section>

        {/* Projects Section */}
        <section 
          ref={projectsRef} 
          className="min-h-screen pt-24 flex items-center"
        >
          <div className="container mx-auto px-6">
            <Projects />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
