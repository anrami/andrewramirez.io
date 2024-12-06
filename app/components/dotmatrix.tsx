"use client";

import React, { useEffect, useRef } from 'react';

const DotMatrix = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dots = Array.from({ length: 100 }, (_, i) => i);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      container.childNodes.forEach((dot, index) => {
        const angle = (index / dots.length) * Math.PI * 2;
        const x = mouseX + Math.cos(angle) * 50;
        const y = mouseY + Math.sin(angle) * 50;

        (dot as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [dots]);

  return (
    <div className="dot-container" ref={containerRef}>
      {dots.map((_, index) => (
        <div key={index} className="dot" />
      ))}
    </div>
  );
};

export default DotMatrix;