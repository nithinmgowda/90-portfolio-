import { useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import CustomCursor from './components/CustomCursor';

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black">
      <CustomCursor />
      {/* Background Music */}
      <audio 
        autoPlay 
        loop 
        style={{ display: 'none' }}
        preload="auto"
        volume="0.3"
      >
        <source src="/assets/audio/pokemon-theme.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      
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
