'use client';

import { useEffect, useState } from 'react';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
  cursorClassName?: string;
}

export default function TypingAnimation({
  text,
  speed = 100,
  startDelay = 300,
  className = '',
  cursorClassName = 'h-6 w-[2px] ml-1 bg-neutral-800 dark:bg-neutral-200 inline-block animate-blink'
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Wait a bit before starting the animation
    const startTimeout = setTimeout(() => {
      setIsTyping(true);

      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, speed);

      return () => clearInterval(typingInterval);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, startDelay]);

  return (
    <span className={className}>
      {displayedText}
      {cursorVisible && <span className={cursorClassName} />}
    </span>
  );
}
