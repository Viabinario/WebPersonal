import React from 'react';

// Small decorative blocks used in button patterns
function DotBlock({ color }: { color: string }) {
  return <div className={`rounded-[2.75px] size-[8px]`} style={{ backgroundColor: color }} />;
}

// Button pattern generator - creates a grid pattern
interface ButtonPatternProps {
  pattern: string[];
  size?: number;
}

function ButtonPattern({ pattern, size = 82 }: ButtonPatternProps) {
  // Patterns are grid layouts with specific colors
  const colorMap: Record<string, string> = {
    'e': '#e8d8c9',
    'a': '#a16f44',
    'c': '#caa381',
    's': '#5a3e26',
    'd': '#d9bda5',
    't': '#7e5635',
    'b': '#bb895e',
    'x': '#362517',
  };

  return (
    <div className="relative overflow-clip rounded-[22px]" style={{ width: size, height: size }}>
      <div className="absolute inset-0 flex flex-wrap gap-[2px]">
        {pattern.map((code, idx) => (
          <DotBlock key={idx} color={colorMap[code] || '#f7f2ed'} />
        ))}
      </div>
    </div>
  );
}

interface NavButtonProps {
  section: 'presentacion' | 'sobre-mi' | 'contacto' | 'casos-estudio';
  isActive: boolean;
  onClick: () => void;
  label: string;
}

function NavButton({ section, isActive, onClick, label }: NavButtonProps) {
  // Each section has a unique dot pattern
  const patterns: Record<string, string[]> = {
    'presentacion': Array(100).fill('e'),
    'sobre-mi': Array(100).fill('a'),
    'contacto': Array(100).fill('c'),
    'casos-estudio': Array(100).fill('s'),
  };

  const pattern = patterns[section];

  return (
    <button
      onClick={onClick}
      className="relative flex flex-col items-center gap-1"
    >
      <ButtonPattern pattern={pattern} size={82} />
      {isActive && (
        <div className="w-[184px] h-[20px] border-[#5a3e26] border-t border-b border-dashed flex items-center justify-center">
          <p className="font-['Roboto:Regular',sans-serif] font-normal text-[#5a3e26] text-[16px] text-center">
            {label}
          </p>
        </div>
      )}
    </button>
  );
}

interface NavigationMenuNewProps {
  activeSection: 'presentacion' | 'sobre-mi' | 'contacto' | 'casos-estudio';
  onNavigate: (section: 'presentacion' | 'sobre-mi' | 'contacto' | 'casos-estudio') => void;
}

export function NavigationMenuNew({ activeSection, onNavigate }: NavigationMenuNewProps) {
  const sections = [
    { id: 'presentacion' as const, label: 'PRESENTACIÓN', row: 0, col: 0 },
    { id: 'sobre-mi' as const, label: 'SOBRE MÍ', row: 0, col: 1 },
    { id: 'contacto' as const, label: 'CONTACTO', row: 1, col: 0 },
    { id: 'casos-estudio' as const, label: 'CASOS DE ESTUDIO', row: 1, col: 1 },
  ];

  return (
    <div className="fixed top-[38px] left-[38px] z-50 w-[184px] h-[224px]">
      <div className="relative w-full h-full">
        {/* Grid of buttons */}
        <div className="grid grid-cols-2 gap-[19px]">
          {sections.map((section) => (
            <div key={section.id} className="relative">
              <NavButton
                section={section.id}
                isActive={activeSection === section.id}
                onClick={() => onNavigate(section.id)}
                label={section.label}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
