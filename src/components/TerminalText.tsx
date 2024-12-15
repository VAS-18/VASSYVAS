'use client';
import { useState, useEffect } from 'react';

const TerminalText = () => {
  const [displayText, setDisplayText] = useState(' ');
  const fullText = `> Hi, I'm Harsh Vashishtha\n >Full Stack Developer passionate about creating innovative solutions\n >Let's build something amazing together!`;
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length-1) {
        setDisplayText(prev => prev + fullText[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="font-doto text-3xl text-left w-full max-w-10xl tracking-wider">
      <pre className="whitespace-pre overflow-x-hidden">
        {displayText}
        <span className="inline-block w-2 h-5 bg-current ml-1 animate-blink"></span>
      </pre>
    </div>
  );
};

export default TerminalText;
