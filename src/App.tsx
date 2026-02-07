import { useState, useEffect } from 'react';
import { NavigationGrid, ZoomGridButton } from './components/NavigationComponents';
import { PresentacionSection } from './components/PresentacionSection';
import { SobreMiSection } from './components/SobreMiSection';
import { ContactoSection } from './components/ContactoSection';
import { CasosEstudioSection } from './components/CasosEstudioSection';
import imgProfilePhoto from "./assets/037303b6b1de60b5b46c711eb2f0e126520f42b0.png";

type Section = 'presentacion' | 'sobre-mi' | 'contacto' | 'casos-estudio';

interface SectionPosition {
  x: number;
  y: number;
}

// Canvas dimensions (desktop)
const CANVAS_WIDTH = 2560;
const CANVAS_HEIGHT = 1664;
const SECTION_WIDTH = 1280;
const SECTION_HEIGHT = 832;

const sectionPositions: Record<Section, SectionPosition> = {
  'presentacion': { x: 0, y: 0 },
  'sobre-mi': { x: -SECTION_WIDTH, y: 0 },
  'casos-estudio': { x: 0, y: -SECTION_HEIGHT },
  'contacto': { x: -SECTION_WIDTH, y: -SECTION_HEIGHT },
};

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('presentacion');
  const [isZoomed, setIsZoomed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleNavigate = (section: Section) => {
    setActiveSection(section);
    setIsZoomed(false);
  };

  const handleToggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const getCanvasTransform = () => {
    if (isMobile) {
      // Mobile: no transform, sections stack vertically
      return {
        transform: 'none',
        transformOrigin: '0 0',
      };
    }

    if (isZoomed) {
      // Show entire canvas - scale down to fit in viewport
      const scaleX = window.innerWidth / CANVAS_WIDTH;
      const scaleY = window.innerHeight / CANVAS_HEIGHT;
      const scale = Math.min(scaleX, scaleY) * 0.9; // 90% to add some padding
      
      // Center the scaled canvas
      const translateX = (window.innerWidth - CANVAS_WIDTH * scale) / 2;
      const translateY = (window.innerHeight - CANVAS_HEIGHT * scale) / 2;
      
      return {
        transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
        transformOrigin: '0 0',
      };
    } else {
      // Show active section — scale down when viewport is smaller than section so content stays in view
      const position = sectionPositions[activeSection];
      const scaleX = window.innerWidth / SECTION_WIDTH;
      const scaleY = window.innerHeight / SECTION_HEIGHT;
      const scale = Math.min(1, scaleX, scaleY);
      const translateX = position.x * scale;
      const translateY = position.y * scale;
      return {
        transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
        transformOrigin: '0 0',
      };
    }
  };

  // Calculate Profile_Photo position based on active section
  const getProfilePhotoPosition = () => {
    if (isMobile) {
      // Mobile: hide profile photo or position differently
      return {
        display: 'none',
      };
    }

    if (isZoomed || activeSection === 'presentacion') {
      return {
        left: `${SECTION_WIDTH / 2}px`,
        top: '30px',
        transform: 'translateX(-50%)',
      };
    } else if (activeSection === 'sobre-mi') {
      return {
        left: `${CANVAS_WIDTH - SECTION_WIDTH + 650}px`,
        top: '38px',
        transform: 'translateX(0)',
      };
    } else {
      return {
        left: `${SECTION_WIDTH / 2}px`,
        top: '30px',
        transform: 'translateX(-50%)',
        opacity: '0',
        pointerEvents: 'none' as const,
      };
    }
  };

  const handleProfilePhotoClick = () => {
    if (isZoomed) {
      handleNavigate('presentacion');
    }
  };

  // Mobile layout: stacked sections
  if (isMobile) {
    return (
      <div className="w-full min-h-screen bg-[#f7f2ed]">
        {/* Mobile Navigation */}
        <div className="sticky top-0 z-50 bg-[#f7f2ed] border-b-2 border-[#5a3e26] border-dashed">
          <NavigationGrid activeSection={activeSection} onNavigate={handleNavigate} />
        </div>

        {/* Mobile Sections - Stacked */}
        <div className="w-full">
          {activeSection === 'presentacion' && (
            <div className="w-full min-h-screen">
              <PresentacionSection isZoomed={false} onNavigate={handleNavigate} activeSection={activeSection} />
            </div>
          )}
          {activeSection === 'sobre-mi' && (
            <div className="w-full min-h-screen">
              <SobreMiSection isZoomed={false} onNavigate={handleNavigate} activeSection={activeSection} />
            </div>
          )}
          {activeSection === 'casos-estudio' && (
            <div className="w-full min-h-screen">
              <CasosEstudioSection isZoomed={false} onNavigate={handleNavigate} activeSection={activeSection} />
            </div>
          )}
          {activeSection === 'contacto' && (
            <div className="w-full min-h-screen">
              <ContactoSection isZoomed={false} onNavigate={handleNavigate} />
            </div>
          )}
        </div>
      </div>
    );
  }

  // When in Casos de estudio (not zoomed): extend viewport to browser right edge without deforming content
  const showCasosEstudioViewportExtension = !isZoomed && activeSection === 'casos-estudio';

  // Desktop layout: original canvas design
  return (
    <div className="w-screen h-screen overflow-hidden bg-[#f7f2ed] relative">
      {/* Fixed Navigation Menu */}
      <NavigationGrid activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Fixed Zoom Button */}
      <ZoomGridButton isZoomed={isZoomed} onToggleZoom={handleToggleZoom} />

      {/* Casos de estudio (not zoomed): viewport from left 0 to right 38px — no empty zone left or right */}
      <div
        className={`absolute top-0 left-0 bottom-0 overflow-hidden ${showCasosEstudioViewportExtension ? 'right-[38px]' : 'right-0'}`}
      >
        {/* From 1280px to clip edge: same background so no visible empty zone (Contacto section hidden) */}
        {showCasosEstudioViewportExtension && (
          <div
            className="absolute top-0 bottom-0 left-[1280px] right-0 z-10 pointer-events-none bg-[#f7f2ed]"
            aria-hidden
          />
        )}
        {/* Canvas Container */}
        <div
          className="absolute top-0 left-0 transition-transform duration-700 ease-in-out"
          style={getCanvasTransform()}
        >
          {/* Large Canvas - 2x2 Grid */}
        <div className="w-[2560px] h-[1664px] grid grid-cols-2 grid-rows-2 relative">
          {/* Top Left - Presentación */}
          <div className="w-[1280px] h-[832px]">
            <PresentacionSection isZoomed={isZoomed} onNavigate={handleNavigate} activeSection={activeSection} />
          </div>

          {/* Top Right - Sobre mí */}
          <div className="w-[1280px] h-[832px]">
            <SobreMiSection isZoomed={isZoomed} onNavigate={handleNavigate} activeSection={activeSection} />
          </div>

          {/* Bottom Left - Casos de Estudio */}
          <div className="w-[1280px] h-[832px]">
            <CasosEstudioSection isZoomed={isZoomed} onNavigate={handleNavigate} activeSection={activeSection} />
          </div>

          {/* Bottom Right - Contacto */}
          <div className="w-[1280px] h-[832px]">
            <ContactoSection isZoomed={isZoomed} onNavigate={handleNavigate} />
          </div>

          {/* Profile Photo - Positioned absolutely on canvas, moves between sections */}
          <div 
            className={`absolute w-[184px] h-[184px] rounded-[22px] border-2 border-[#5a3e26] border-dashed overflow-hidden transition-all duration-700 ease-in-out z-10 ${isZoomed ? 'cursor-pointer hover:scale-105' : ''}`}
            style={getProfilePhotoPosition()}
            onClick={handleProfilePhotoClick}
          >
            <img 
              src={imgProfilePhoto} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}