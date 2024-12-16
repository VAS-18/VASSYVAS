'use client';

import { useState, useEffect } from 'react';

const TerminalText = () => {
  const [displayText, setDisplayText] = useState(' ');
  const fullText = `> Hi, I'm Harsh Vashishtha\n\n >Full Stack Developer passionate about creating innovative solutions\n\n >Let's build something amazing together!`;
  
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
    <div className="text-left w-full mx-auto px-2 sm:px-6 lg:px-8 tracking-wide ">
    <div className="font-doto font-bold whitespace-pre overflow-x-hidden text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed md:leading-loose text-wrap md:w-full ">
      {displayText}
    </div>
  </div>
  )
};

export default TerminalText;
