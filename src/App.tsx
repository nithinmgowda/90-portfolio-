import { useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import FlyingPokemon from './components/FlyingPokemon';

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const staticPokemon = [
    {
      position: 'bottom-left' as const,
      sprite: '/src/assets/pokemon-sprites/pidgeot-1.gif',
      size: 64
    },
    {
      position: 'bottom-right' as const,
      sprite: '/src/assets/pokemon-sprites/flygon-1.gif',
      size: 64
    },
    {
      position: 'bottom-center-left' as const,
      sprite: '/src/assets/pokemon-sprites/arcanine-1.gif',
      size: 64
    },
    {
      position: 'bottom-center-right' as const,
      sprite: '/src/assets/pokemon-sprites/growlithe-1.gif',
      size: 64
    }
  ];

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("/src/assets/pokemon-bg.png")',
            imageRendering: 'pixelated',
            filter: 'brightness(0.9)'
          }} 
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-[2px]" />
      </div>

      {/* Static Pokemon */}
      <div className="fixed inset-0 z-50 pointer-events-auto">
        {staticPokemon.map((pokemon, index) => (
          <FlyingPokemon
            key={index}
            position={pokemon.position}
            sprite={pokemon.sprite}
            size={pokemon.size}
          />
        ))}
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
