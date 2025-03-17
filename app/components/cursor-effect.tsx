'use client';

import { useEffect, useState } from 'react';

export default function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverOn = () => setLinkHovered(true);
    const handleLinkHoverOff = () => setLinkHovered(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseenter', updatePosition);
    window.addEventListener('mouseleave', () => setHidden(true));
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Add event listeners for link hovers
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHoverOn);
      link.addEventListener('mouseleave', handleLinkHoverOff);
    });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseenter', updatePosition);
      window.removeEventListener('mouseleave', () => setHidden(true));
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);

      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHoverOn);
        link.removeEventListener('mouseleave', handleLinkHoverOff);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`fixed z-50 pointer-events-none transition-opacity duration-300 ${hidden ? 'opacity-0' : 'opacity-100'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div
          className={`rounded-full bg-neutral-400 dark:bg-neutral-300 mix-blend-difference
            transition-all duration-200 ease-out ${clicked ? 'w-6 h-6 opacity-30' : 'w-4 h-4 opacity-50'}`}
        />
      </div>

      {/* Light bloom effect */}
      <div
        className={`fixed z-30 rounded-full bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-pink-500/20 blur-2xl pointer-events-none
          transition-all duration-300 ease-out ${hidden ? 'opacity-0' : 'opacity-60'} ${
          linkHovered ? 'scale-[2.5] w-24 h-24' : clicked ? 'scale-150 w-20 h-20' : 'w-16 h-16'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
    </>
  );
}
