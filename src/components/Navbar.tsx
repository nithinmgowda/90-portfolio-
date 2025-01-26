import { useEffect, useState } from 'react';

interface NavbarProps {
  onNavClick: {
    home: () => void;
    about: () => void;
    projects: () => void;
  };
}

const Navbar: ({ onNavClick }: NavbarProps) => JSX.Element = ({ onNavClick }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleHover = () => {
    const audio = document.querySelector('audio');
    if (audio) {
      audio.volume = 0.35;
      audio.play().catch(error => console.log('Audio playback failed:', error));
      audio.volume = 0.35; // Ensure consistent volume
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 h-20 z-50 transition-transform duration-300 ${!isVisible ? '-translate-y-full' : ''}`}>
      <nav className="h-full bg-black bg-opacity-50 backdrop-blur-sm border-b-2 border-red-600/20">
        <div className="container mx-auto h-full px-6">
          <div className="flex items-center h-full gap-6">
            <div 
              className="flex-shrink-0 cursor-pointer" 
              onMouseEnter={handleHover}
            >
              <img 
                src="/assets/ash_image.png" 
                alt="Logo" 
                className="w-12 h-12 rounded-full border-2 border-white/20 object-cover filter brightness-90"
              />
            </div>
            <div className="flex-grow flex items-center justify-center gap-6">
              <button
                onClick={onNavClick.home}
                className="retro-button"
              >
                HOME
              </button>
              <button
                onClick={onNavClick.about}
                className="retro-button"
              >
                ABOUT
              </button>
              <button
                onClick={onNavClick.projects}
                className="retro-button"
              >
                PROJECTS
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
