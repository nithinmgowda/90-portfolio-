import { useState, useEffect } from 'react';

interface PokemonSpriteProps {
  x: number;
  direction: 'left' | 'right';
  onCollision: (id: number, position: number) => void;
  id: number;
  otherPositions: { id: number; x: number }[];
}

const PokemonSprite: React.FC<PokemonSpriteProps> = ({ x, direction, onCollision, id, otherPositions }) => {
  const [position, setPosition] = useState(x);
  const [sprite, setSprite] = useState(1);
  const [currentDirection, setCurrentDirection] = useState(direction);
  const speed = 2;
  const spriteWidth = 32;

  const pokemonSprites = [
    '../assets/pokemon-sprites/pikachu-1.gif',
    '../assets/pokemon-sprites/charmander-1.gif',
    '../assets/pokemon-sprites/bulbasaur-1.gif',
    '../assets/pokemon-sprites/squirtle-1.gif'
  ];

  useEffect(() => {
    setSprite(Math.floor(Math.random() * pokemonSprites.length));
  }, []);

  useEffect(() => {
    const checkCollisions = () => {
      otherPositions.forEach(other => {
        if (other.id !== id) {
          const distance = Math.abs(position - other.x);
          if (distance < spriteWidth) {
            // Collision detected, reverse direction
            setCurrentDirection(prev => prev === 'left' ? 'right' : 'left');
            onCollision(id, position);
          }
        }
      });
    };

    const animate = () => {
      setPosition(prev => {
        let newPos = prev;
        if (currentDirection === 'right') {
          newPos = prev + speed;
          if (newPos >= window.innerWidth) {
            newPos = -50;
          }
        } else {
          newPos = prev - speed;
          if (newPos <= -50) {
            newPos = window.innerWidth;
          }
        }
        return newPos;
      });

      checkCollisions();
    };

    const intervalId = setInterval(animate, 50);
    return () => clearInterval(intervalId);
  }, [id, currentDirection, otherPositions, position, onCollision]);

  return (
    <div
      className="absolute"
      style={{
        left: `${position}px`,
        top: '0',
        transform: `scaleX(${currentDirection === 'left' ? -1 : 1})`,
        width: '32px',
        height: '32px',
        imageRendering: 'pixelated',
        transition: 'transform 0.2s ease-out'
      }}
    >
      <img
        src={pokemonSprites[sprite]}
        alt="Pokemon"
        className="w-full h-full"
      />
    </div>
  );
};

export default PokemonSprite;
