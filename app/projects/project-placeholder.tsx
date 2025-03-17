import React from 'react';

export default function ProjectPlaceholder() {
  return (
    <svg
      width="640"
      height="360"
      viewBox="0 0 640 360"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="640" height="360" fill="#f5f5f5" />
      <g fill="#e0e0e0">
        <circle cx="320" cy="180" r="70" />
        <rect x="280" y="260" width="80" height="10" rx="5" />
      </g>
      <text
        x="320"
        y="185"
        fontFamily="Arial, sans-serif"
        fontSize="16"
        textAnchor="middle"
        fill="#a0a0a0"
      >
        Project Image
      </text>
    </svg>
  );
}
