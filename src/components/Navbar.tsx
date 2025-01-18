import { useState, useEffect } from 'react';

interface NavbarProps {
  onNavClick: {
    home: () => void;
    about: () => void;
    projects: () => void;
  };
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-20 z-50">
      <nav className="h-full bg-black bg-opacity-50 backdrop-blur-sm border-b-2 border-red-600/20">
        <div className="container mx-auto h-full px-6">
          <div className="flex items-center justify-center h-full gap-6">
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
      </nav>
    </header>
  );
};

export default Navbar;
