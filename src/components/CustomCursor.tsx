import React, { useState, useEffect } from 'react';
import './CustomCursor.css';

const POKEMON_SPRITES = [
  'arcanine-1.gif',
  'bulbasaur-1.gif',
  'charizard-1.gif',
  'charmander-1.gif',
  'dragonite-1.gif',
  'flygon-1.gif',
  'growlithe-1.gif',
  'pidgeot-1.gif',
  'pikachu-1.gif',
  'salamence-1.gif',
  'squirtle-1.gif'
];

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [currentSpriteIndex, setCurrentSpriteIndex] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let moveTimeout: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
      
      // Reset the moving state after mouse stops
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => setIsMoving(false), 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(moveTimeout);
    };
  }, []);

  useEffect(() => {
    // Change sprite every 3 seconds
    const intervalId = setInterval(() => {
      setCurrentSpriteIndex((prevIndex) => 
        prevIndex === POKEMON_SPRITES.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div 
      className={`custom-cursor fixed pointer-events-none z-[1000] ${isMoving ? 'scale-90' : 'scale-100'}`}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) ${isMoving ? 'scale(0.9)' : 'scale(1)'}`,
      }}
    >
      <img 
        src={`/assets/pokemon-sprites/${POKEMON_SPRITES[currentSpriteIndex]}`}
        alt="Pokemon cursor"
        className="w-12 h-12 select-none"
        style={{ 
          imageRendering: 'pixelated',
          transform: `rotate(${isMoving ? '5deg' : '0deg'})`,
          transition: 'transform 0.2s ease-out'
        }}
      />
    </div>
  );
};

export default CustomCursor;
