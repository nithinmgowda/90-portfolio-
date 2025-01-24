import { useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import FlyingPokemon from './components/FlyingPokemon';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

const PokemonBackground = () => {
  const location = useLocation();

  if (location.pathname !== '/') return null;

  const staticPokemon = [
    {
      position: 'bottom-left' as const,
      sprite: '/assets/pokemon-sprites/pidgeot-1.gif',
      size: 64
    },
    {
      position: 'bottom-right' as const,
      sprite: '/assets/pokemon-sprites/flygon-1.gif',
      size: 64
    },
    {
      position: 'bottom-center-left' as const,
      sprite: '/assets/pokemon-sprites/arcanine-1.gif',
      size: 64
    },
    {
      position: 'bottom-center-right' as const,
      sprite: '/assets/pokemon-sprites/growlithe-1.gif',
      size: 64
    }
  ];

  return (
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
      style={{ 
        backgroundImage: 'url("/assets/pokemon-bg.png")',
        imageRendering: 'pixelated',
        filter: 'brightness(0.9)'
      }}
    >
      {staticPokemon.map((pokemon, index) => (
        <FlyingPokemon 
          key={index} 
          position={pokemon.position} 
          sprite={pokemon.sprite} 
          size={pokemon.size} 
        />
      ))}
    </div>
  );
};

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="relative min-h-screen">
        <PokemonBackground />
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
        <Navbar onNavClick={{
          home: () => scrollToSection(homeRef),
          about: () => scrollToSection(aboutRef),
          projects: () => scrollToSection(projectsRef)
        }} />
        <Routes>
          <Route path="/" element={
            <main className="relative z-20">
              <section 
                ref={homeRef} 
                className="min-h-screen pt-24 flex items-center"
              >
                <div className="container mx-auto px-6">
                  <Home />
                </div>
              </section>
            </main>
          } />
          <Route path="/about" element={
            <main className="relative z-20">
              <section 
                ref={aboutRef} 
                className="min-h-screen pt-24 flex items-center"
              >
                <div className="container mx-auto px-6">
                  <About />
                </div>
              </section>
            </main>
          } />
          <Route path="/projects" element={
            <main className="relative z-20">
              <section 
                ref={projectsRef} 
                className="min-h-screen pt-24 flex items-center"
              >
                <div className="container mx-auto px-6">
                  <Projects />
                </div>
              </section>
            </main>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
