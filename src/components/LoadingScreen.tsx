import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Start fade out after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Call onLoadingComplete after animation ends
      setTimeout(onLoadingComplete, 1000); // 1s matches the transition duration
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black
        ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        transition-opacity duration-1000`}
    >
      <div className="text-center">
        <h1 
          className="text-4xl md:text-6xl font-bold text-white font-['Press_Start_2P'] 
            animate-pulse pixelated relative"
          style={{
            textShadow: '2px 2px 0px rgba(255,0,0,0.3)',
            animation: 'textPixelate 2s steps(8) forwards'
          }}
        >
          Nithin&apos;s Portfolio
        </h1>
      </div>
      <style jsx>{`
        @keyframes textPixelate {
          0% {
            filter: blur(8px) brightness(200%);
            letter-spacing: 8px;
            opacity: 0;
          }
          25% {
            filter: blur(4px) brightness(150%);
            letter-spacing: 4px;
            opacity: 0.5;
          }
          50% {
            filter: blur(2px) brightness(125%);
            letter-spacing: 2px;
            opacity: 0.75;
          }
          100% {
            filter: blur(0) brightness(100%);
            letter-spacing: normal;
            opacity: 1;
          }
        }
        .pixelated {
          -webkit-font-smoothing: none;
          -moz-osx-font-smoothing: none;
          font-smooth: never;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
