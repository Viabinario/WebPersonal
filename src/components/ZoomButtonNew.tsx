import React from 'react';

interface ZoomButtonNewProps {
  isZoomed: boolean;
  onToggleZoom: () => void;
}

function DotBlock({ color }: { color: string }) {
  return <div className={`rounded-[2.75px] size-[8px]`} style={{ backgroundColor: color }} />;
}

export function ZoomButtonNew({ isZoomed, onToggleZoom }: ZoomButtonNewProps) {
  // Create a pattern of dots for the zoom button background
  const pattern = Array(100).fill('#f7f2ed');

  return (
    <div className="fixed bottom-[38px] left-[38px] z-50">
      <button
        onClick={onToggleZoom}
        className="relative w-[62px] h-[62px] rounded-[22px] border-[#5a3e26] border-dashed border overflow-hidden"
        aria-label={isZoomed ? 'Volver a la sección' : 'Ver todo el lienzo'}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[#f7f2ed]" />
        
        {/* Icon - four circles representing the quadrants */}
        <div className="absolute inset-0 flex items-center justify-center p-[15px]">
          <svg
            className="w-full h-full"
            viewBox="0 0 32 32"
            fill="none"
          >
            {/* Four quadrant circles */}
            <circle cx="8" cy="8" r="6" stroke="#5a3e26" strokeWidth="1.5" fill="none" strokeDasharray="2,2" />
            <circle cx="24" cy="8" r="6" stroke="#5a3e26" strokeWidth="1.5" fill="none" strokeDasharray="2,2" />
            <circle cx="8" cy="24" r="6" stroke="#5a3e26" strokeWidth="1.5" fill="none" strokeDasharray="2,2" />
            <circle cx="24" cy="24" r="6" stroke="#5a3e26" strokeWidth="1.5" fill="none" strokeDasharray="2,2" />
          </svg>
        </div>
      </button>
    </div>
  );
}
