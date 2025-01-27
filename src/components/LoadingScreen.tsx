import { useEffect, useState } from 'react';
import './LoadingScreen.css';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
  initializeAudio: () => void;
}

const LoadingScreen = ({ onLoadingComplete, initializeAudio }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Try to play audio immediately when loading screen appears
    initializeAudio();

    // Start fade out after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Call onLoadingComplete after animation ends
      setTimeout(onLoadingComplete, 1000); // 1s matches the transition duration
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete, initializeAudio]);

  return (
    <div
      className={`loading-screen fixed inset-0 z-[100] flex items-center justify-center
        ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        transition-opacity duration-1000`}
    >
      <div className="text-center">
        <h1 
          className="text-4xl md:text-6xl font-bold text-white font-['Press_Start_2P'] loading-text"
        >
          Nithin&apos;s Portfolio<sup>®</sup>
        </h1>
      </div>
    </div>
  );
};

export default LoadingScreen;
