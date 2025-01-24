import { useEffect, useState } from 'react';

const Home = () => {
  const [text, setText] = useState('');
  const fullText = "WELCOME TO MY PORTFOLIO!";
  
  useEffect(() => {
    let currentChar = 0;
    const interval = setInterval(() => {
      if (currentChar <= fullText.length) {
        setText(fullText.slice(0, currentChar));
        currentChar++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pixel-box min-h-[80vh] flex flex-col items-center justify-center">
      <h1 className="text-2xl md:text-4xl mb-8">
        {text}
        <span className="blink">_</span>
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="pixel-box bg-blue-900 p-6">
          <h2 className="text-xl mb-4">PLAYER STATS</h2>
          <div className="space-y-2">
            <p>PLAYER NAME: NITHIN M</p>
            <p>LEVEL: UX DESIGNER, SOFTWARE DEVELOPER, AI ENTHUSIAST</p>
            <p>EXP: 1 YEAR</p>
            <p>SKILLS: MERN STACK, KOTLIN, FLUTTER, AI TOOLS, PYTHON, GODOT, VCS</p>
            <p>PROJECTS: 9+</p>
          </div>
        </div>
        
        <div className="pixel-box bg-red-900 p-6 relative">
          <div className="absolute top-4 right-4">
            <img 
              src="/assets/pikachu-cursor.gif" 
              alt="Pikachu using Thunderbolt" 
              className="w-16 h-16 pixelated"
            />
          </div>
          <h2 className="text-xl mb-4">CURRENT QUEST</h2>
          <div className="space-y-2">
            <p>ON TO CONQUER</p>
            <p>DEEP LEARNING,</p>
            <p>BLOCKCHAIN,</p>
            <p>SYSTEM DESIGN,</p>
            <p>VIRTUAL REALITY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
