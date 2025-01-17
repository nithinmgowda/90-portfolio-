import { useState } from 'react';

interface FlyingPokemonProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'bottom-center-left' | 'bottom-center-right';
  sprite: string;
  size: number;
}

const FlyingPokemon: React.FC<FlyingPokemonProps> = ({
  position,
  sprite,
  size
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getPosition = () => {
    switch (position) {
      case 'top-left':
        return { top: '20px', left: '20px' };
      case 'top-right':
        return { top: '20px', right: '20px' };
      case 'bottom-left':
        return { bottom: '20px', left: '20px' };
      case 'bottom-right':
        return { bottom: '20px', right: '20px' };
      case 'bottom-center-left':
        return { bottom: '20px', left: '33%' };
      case 'bottom-center-right':
        return { bottom: '20px', right: '33%' };
    }
  };

  const getTransform = () => {
    switch (position) {
      case 'top-right':
      case 'bottom-right':
        return 'scaleX(-1)';
      default:
        return 'none';
    }
  };

  return (
    <div
      className={`absolute transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
      style={{
        ...getPosition(),
        width: `${size}px`,
        height: `${size}px`,
        transform: getTransform(),
        imageRendering: 'pixelated',
        zIndex: 9999,
        opacity: 1,
        filter: isHovered ? 'brightness(1.3) drop-shadow(0 0 8px rgba(255,255,255,0.3))' : 'brightness(1.1)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={sprite}
        alt="Pokemon Sprite"
        className="w-full h-full"
      />
    </div>
  );
};

export default FlyingPokemon;
