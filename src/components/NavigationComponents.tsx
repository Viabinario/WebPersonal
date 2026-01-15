// Navigation and Zoom components extracted from Figma imports
import { useState } from 'react';

// Simple navigation button without individual labels
interface SimpleNavButtonProps {
  onClick: () => void;
  isActive: boolean;
  bgColor: string;
  onHover: () => void;
  onLeave: () => void;
  sectionName: string;
}

function SimpleNavButton({ onClick, isActive, bgColor, onHover, onLeave, sectionName }: SimpleNavButtonProps) {
  return (
    <button
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      aria-label={`Navegar a la sección ${sectionName}`}
      title={`Navegar a la sección ${sectionName}`}
      className={`relative w-14 h-14 md:w-16 md:h-16 lg:w-[82px] lg:h-[82px] rounded-[16px] md:rounded-[18px] lg:rounded-[22px] transition-all duration-300 ${
        isActive 
          ? 'scale-95 shadow-[inset_0px_4px_8px_rgba(0,0,0,0.3)]' 
          : 'hover:scale-105 hover:shadow-[0px_4px_8px_rgba(0,0,0,0.2)] shadow-[0px_2px_4px_rgba(0,0,0,0.1)]'
      } group overflow-visible`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Borde difuminado que se irradia en hover */}
      <div 
        className="absolute -inset-1 rounded-[18px] md:rounded-[20px] lg:rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: '0 0 0 1px rgba(90, 62, 38, 0.2), 0 0 6px 2px rgba(90, 62, 38, 0.12), 0 0 12px 4px rgba(90, 62, 38, 0.06), 0 0 20px 6px rgba(90, 62, 38, 0.03)',
        }}
      />
    </button>
  );
}

interface NavigationGridProps {
  activeSection: 'presentacion' | 'sobre-mi' | 'contacto' | 'casos-estudio';
  onNavigate: (section: 'presentacion' | 'sobre-mi' | 'contacto' | 'casos-estudio') => void;
}

export function NavigationGrid({ activeSection, onNavigate }: NavigationGridProps) {
  const [hoveredSection, setHoveredSection] = useState<'presentacion' | 'sobre-mi' | 'contacto' | 'casos-estudio' | null>(null);
  
  const sectionLabels = {
    'presentacion': 'Presentación',
    'sobre-mi': 'Sobre mí',
    'contacto': 'Contacto',
    'casos-estudio': 'Casos de estudio',
  };

  const displaySection = hoveredSection || activeSection;

  return (
    <div className="fixed top-2 left-2 md:top-4 md:left-4 lg:top-[38px] lg:left-[38px] z-50">
      <div className="w-[140px] h-[170px] md:w-[160px] md:h-[200px] lg:w-[184px] lg:h-[224px]">
        {/* Grid 2x2 of buttons */}
        <div className="grid grid-cols-2 gap-2 md:gap-3 lg:gap-[20px]">
          {/* Top Left - Presentación */}
          <SimpleNavButton
            onClick={() => onNavigate('presentacion')}
            isActive={activeSection === 'presentacion'}
            bgColor="#e8d8c9"
            onHover={() => setHoveredSection('presentacion')}
            onLeave={() => setHoveredSection(null)}
            sectionName="Presentación"
          />

          {/* Top Right - Sobre Mí */}
          <SimpleNavButton
            onClick={() => onNavigate('sobre-mi')}
            isActive={activeSection === 'sobre-mi'}
            bgColor="#a16f44"
            onHover={() => setHoveredSection('sobre-mi')}
            onLeave={() => setHoveredSection(null)}
            sectionName="Sobre mí"
          />

          {/* Bottom Left - Casos de Estudio (CAMBIADO) */}
          <SimpleNavButton
            onClick={() => onNavigate('casos-estudio')}
            isActive={activeSection === 'casos-estudio'}
            bgColor="#5a3e26"
            onHover={() => setHoveredSection('casos-estudio')}
            onLeave={() => setHoveredSection(null)}
            sectionName="Casos de estudio"
          />

          {/* Bottom Right - Contacto (CAMBIADO) */}
          <SimpleNavButton
            onClick={() => onNavigate('contacto')}
            isActive={activeSection === 'contacto'}
            bgColor="#caa381"
            onHover={() => setHoveredSection('contacto')}
            onLeave={() => setHoveredSection(null)}
            sectionName="Contacto"
          />
        </div>

        {/* Single label area below all buttons */}
        <div className="mt-1 md:mt-2 lg:mt-[8px] w-full h-4 md:h-5 lg:h-[20px] flex items-center justify-center">
          <p className="font-['Roboto:Regular',sans-serif] font-bold text-[#5a3e26] text-[10px] md:text-[11px] lg:text-[12px] text-center uppercase">
            {sectionLabels[displaySection]}
          </p>
        </div>
      </div>
    </div>
  );
}

interface ZoomGridButtonProps {
  isZoomed: boolean;
  onToggleZoom: () => void;
}

export function ZoomGridButton({ isZoomed, onToggleZoom }: ZoomGridButtonProps) {
  return (
    <div className="fixed bottom-2 left-2 md:bottom-4 md:left-4 lg:bottom-[38px] lg:left-[38px] z-50">
      <button
        onClick={onToggleZoom}
        aria-label={isZoomed ? 'Volver a la sección' : 'Ver todo el lienzo'}
        title={isZoomed ? 'Volver a la sección' : 'Ver todo el lienzo'}
        className="relative w-14 h-14 md:w-16 md:h-16 lg:w-[82px] lg:h-[82px] rounded-[16px] md:rounded-[18px] lg:rounded-[22px] border border-[#666463] border-dashed overflow-visible bg-[#f7f2ed] transition-all hover:bg-[#e8d8c9] group"
      >
        {/* Borde difuminado que se irradia en hover */}
        <div 
          className="absolute -inset-1 rounded-[18px] md:rounded-[20px] lg:rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            boxShadow: '0 0 0 1px rgba(90, 62, 38, 0.2), 0 0 6px 2px rgba(90, 62, 38, 0.12), 0 0 12px 4px rgba(90, 62, 38, 0.06), 0 0 20px 6px rgba(90, 62, 38, 0.03)',
          }}
        />
        {/* Four quadrants representing the sections */}
        <div className="absolute left-px top-px w-7 h-7 md:w-8 md:h-8 lg:w-[38px] lg:h-[38px] z-10">
          <div className="absolute inset-0 border border-[#666463] border-dashed rounded-bl-[6px] md:rounded-bl-[8px] lg:rounded-bl-[10px] rounded-br-[6px] md:rounded-br-[8px] lg:rounded-br-[10px] rounded-tl-[12px] md:rounded-tl-[16px] lg:rounded-tl-[20px] rounded-tr-[6px] md:rounded-tr-[8px] lg:rounded-tr-[10px]" />
        </div>
        <div className="absolute left-[-1px] top-[30px] md:top-[34px] lg:top-[42px] w-7 h-7 md:w-8 md:h-8 lg:w-[38px] lg:h-[38px] z-10">
          <div className="absolute border border-[#666463] border-dashed rounded-bl-[12px] md:rounded-bl-[16px] lg:rounded-bl-[20px] rounded-br-[6px] md:rounded-br-[8px] lg:rounded-br-[10px] rounded-tl-[6px] md:rounded-tl-[8px] lg:rounded-tl-[10px] rounded-tr-[6px] md:rounded-tr-[8px] lg:rounded-tr-[10px]" style={{ inset: 'calc(-2.63%) calc(-5.26%) calc(2.63%) calc(5.26%)' }} />
        </div>
        <div className="absolute border border-[#666463] border-dashed rounded-bl-[6px] md:rounded-bl-[8px] lg:rounded-bl-[10px] rounded-br-[12px] md:rounded-br-[16px] lg:rounded-br-[20px] rounded-tl-[6px] md:rounded-tl-[8px] lg:rounded-tl-[10px] rounded-tr-[6px] md:rounded-tr-[8px] lg:rounded-tr-[10px] z-10" style={{ inset: 'calc(51.22% - 1px) calc(2.44% - 1px) calc(2.44% - 1px) calc(51.22% - 1px)' }} />
        <div className="absolute left-[29px] md:left-[33px] lg:left-[41px] top-px w-7 h-7 md:w-8 md:h-8 lg:w-[38px] lg:h-[38px] z-10">
          <div className="absolute inset-0 border border-[#666463] border-dashed rounded-bl-[6px] md:rounded-bl-[8px] lg:rounded-bl-[10px] rounded-br-[6px] md:rounded-br-[8px] lg:rounded-br-[10px] rounded-tl-[6px] md:rounded-tl-[8px] lg:rounded-tl-[10px] rounded-tr-[12px] md:rounded-tr-[16px] lg:rounded-tr-[20px]" />
        </div>
      </button>
    </div>
  );
}