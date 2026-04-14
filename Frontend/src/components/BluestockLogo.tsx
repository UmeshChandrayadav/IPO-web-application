
import React from 'react';

interface BluestockLogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const BluestockLogo: React.FC<BluestockLogoProps> = ({ 
  className = '', 
  showText = true, 
  size = 'md' 
}) => {
  const sizes = {
    sm: { width: 120, height: 32, iconSize: 32, fontSize: 'text-lg' },
    md: { width: 160, height: 40, iconSize: 40, fontSize: 'text-xl' },
    lg: { width: 200, height: 48, iconSize: 48, fontSize: 'text-2xl' }
  };

  const currentSize = sizes[size];

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Futuristic 3D Logo */}
      <svg 
        width={currentSize.iconSize} 
        height={currentSize.iconSize} 
        viewBox="0 0 48 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gradient and Filter Definitions */}
        <defs>
          {/* Purple gradient for bars */}
          <linearGradient id="purpleGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="50%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#C084FC" />
          </linearGradient>
          <linearGradient id="purpleGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#6D28D9" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#A78BFA" />
          </linearGradient>
          <linearGradient id="purpleGradient3" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#5B21B6" />
            <stop offset="50%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          
          {/* Orange gradient for swoosh */}
          <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="50%" stopColor="#FB923C" />
            <stop offset="100%" stopColor="#FDBA74" />
          </linearGradient>
          
          {/* Glowing effects */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          {/* Glass effect */}
          <filter id="glass" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="1"/>
            <feOffset dx="0" dy="1" result="offset"/>
            <feFlood floodColor="#FFFFFF" floodOpacity="0.3"/>
            <feComposite in2="offset" operator="in"/>
            <feMerge> 
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Three vertical curved bars - angled slightly to the right */}
        <g transform="translate(2,2) skewX(-5)">
          {/* Bar 1 - Shortest */}
          <rect 
            x="8" 
            y="28" 
            width="4" 
            height="16" 
            fill="url(#purpleGradient1)"
            rx="2"
            ry="2"
            filter="url(#glass)"
            opacity="0.9"
          />
          
          {/* Bar 2 - Medium */}
          <rect 
            x="16" 
            y="22" 
            width="4" 
            height="22" 
            fill="url(#purpleGradient2)"
            rx="2"
            ry="2"
            filter="url(#glass)"
            opacity="0.9"
          />
          
          {/* Bar 3 - Tallest */}
          <rect 
            x="24" 
            y="16" 
            width="4" 
            height="28" 
            fill="url(#purpleGradient3)"
            rx="2"
            ry="2"
            filter="url(#glass)"
            opacity="0.9"
          />
        </g>

        {/* Orange swoosh curve */}
        <path
          d="M6 38 Q16 32 26 24 Q32 18 38 12"
          stroke="url(#orangeGradient)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          filter="url(#glow)"
          opacity="0.95"
        />

        {/* Glowing orange orb at the end */}
        <circle 
          cx="38" 
          cy="12" 
          r="3" 
          fill="url(#orangeGradient)"
          filter="url(#glow)"
        />
        
        {/* Inner glow for the orb */}
        <circle 
          cx="38" 
          cy="12" 
          r="1.5" 
          fill="#FFFFFF"
          opacity="0.6"
        />
      </svg>

      {/* Text */}
      {showText && (
        <span className={`font-bold text-gray-900 tracking-wide ${currentSize.fontSize}`}>
          BLUESTOCK
        </span>
      )}
    </div>
  );
};

export default BluestockLogo;
