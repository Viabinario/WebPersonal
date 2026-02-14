import { useState, useEffect } from 'react';
import { NavigationGrid, ZoomGridButton } from './components/NavigationComponents';
import { PresentacionSection } from './components/PresentacionSection';
import { SobreMiSection } from './components/SobreMiSection';
import { ContactoSection } from './components/ContactoSection';
import { CasosEstudioSection, CaseStudyNavMobile, type CaseView } from './components/CasosEstudioSection';
import { SocialBarDesktop, SOCIAL_BAR_WIDTH_PX } from './components/SocialBarDesktop';
import { LangSwitch } from './context/LocaleContext';
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [caseView, setCaseView] = useState<CaseView>('menu');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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

    // Adjust for screen size to prevent overlap
    const isSmallScreen = windowWidth < 1024; // md/tablet range
    
    if (isZoomed || activeSection === 'presentacion') {
      return {
        left: `${SECTION_WIDTH / 2}px`,
        top: isSmallScreen ? '20px' : '30px',
        transform: 'translateX(-50%)',
      };
    } else if (activeSection === 'sobre-mi') {
      if (isSmallScreen) {
        // En tablets, centrar la foto en la sección de Sobre mí
        // CANVAS_WIDTH = 2560, la sección Sobre mí está en la derecha (1280 + ...)
        return {
          left: `${CANVAS_WIDTH - SECTION_WIDTH / 2}px`, // Centro de la sección derecha
          top: '28px',
          transform: 'translateX(-50%)',
        };
      } else {
        // En desktop, posición absoluta a la derecha (610 = 650 - 40px a la izquierda)
        return {
          left: `${CANVAS_WIDTH - SECTION_WIDTH + 610}px`,
          top: '38px',
          transform: 'translateX(0)',
        };
      }
    } else {
      return {
        left: `${SECTION_WIDTH / 2}px`,
        top: isSmallScreen ? '20px' : '30px',
        transform: 'translateX(-50%)',
        opacity: '0',
        pointerEvents: 'none' as const,
      };
    }
  };

  const handleProfilePhotoClick = () => {
    handleNavigate('sobre-mi');
  };

  // Mobile: menú hamburguesa derecha; menú de casos (sandwich, misma idea gráfica del botón) izquierda
  if (isMobile) {
    const headerLeftContent = activeSection === 'casos-estudio' ? (
      <CaseStudyNavMobile currentView={caseView} onSelectCase={setCaseView} />
    ) : undefined;
    return (
      <div className="w-full min-h-screen bg-[#f7f2ed]">
        <NavigationGrid activeSection={activeSection} onNavigate={handleNavigate} embedInFlow leftContent={headerLeftContent} />
        <main className="w-full overflow-hidden">
          {activeSection === 'presentacion' && (
            <div key="presentacion" className="w-full min-h-screen flex flex-col bg-[#f7f2ed] animate-mobile-slide-left">
              <div className="flex-shrink-0 flex justify-center pt-4 pb-2">
                <div
                  className="w-[100px] h-[100px] rounded-[14px] border-2 border-[#5a3e26] border-dashed overflow-hidden"
                  role="img"
                  aria-label="Foto de perfil"
                >
                  <img src={imgProfilePhoto} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex-1 min-h-0">
                <PresentacionSection isZoomed={false} onNavigate={handleNavigate} isMobile />
              </div>
            </div>
          )}
          {activeSection === 'sobre-mi' && (
            <div key="sobre-mi" className="w-full min-h-screen flex flex-col bg-[#f7f2ed] animate-mobile-slide-right">
              <div className="flex-shrink-0 flex justify-center pt-4 pb-2">
                <div
                  className="w-[100px] h-[100px] rounded-[14px] border-2 border-[#5a3e26] border-dashed overflow-hidden"
                  role="img"
                  aria-label="Foto de perfil"
                >
                  <img src={imgProfilePhoto} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex-1 min-h-0">
                <SobreMiSection isZoomed={false} onNavigate={handleNavigate} activeSection={activeSection} />
              </div>
            </div>
          )}
          {activeSection === 'casos-estudio' && (
            <div key="casos-estudio" className="w-full min-h-screen flex flex-col animate-mobile-slide-up">
              <CasosEstudioSection
                isZoomed={false}
                onNavigate={handleNavigate}
                activeSection={activeSection}
                isMobile
                mobileCaseView={caseView}
                onMobileCaseViewChange={setCaseView}
              />
            </div>
          )}
          {activeSection === 'contacto' && (
            <div key="contacto" className="w-full min-h-screen animate-mobile-slide-up">
              <ContactoSection isZoomed={false} onNavigate={handleNavigate} />
            </div>
          )}
        </main>
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

      {/* Switch idioma: en móvil/tablet fijo arriba-derecha (la barra está oculta); en desktop va dentro de la barra */}
      <div className="fixed top-2 right-2 z-30 lg:hidden">
        <LangSwitch />
      </div>

      {/* Barra social vertical fija al margen derecho (desktop): idioma arriba + redes */}
      <SocialBarDesktop />

      {/* Contenido: margen derecho para la barra social (desktop) y/o zoom en Casos; Casos no debe tapar la barra */}
      <div
        className="absolute top-0 left-0 bottom-0 overflow-hidden"
        style={{
          right: windowWidth < 1024
            ? (showCasosEstudioViewportExtension ? 38 : 0)
            : SOCIAL_BAR_WIDTH_PX,
        }}
      >
        {/* Casos de Estudio: versión flotante fuera de la grilla cuando está activo */}
        {showCasosEstudioViewportExtension && (
          <div className="absolute inset-0 z-20 bg-[#f7f2ed]">
            <div className="w-full h-[832px]">
              <CasosEstudioSection isZoomed={isZoomed} onNavigate={handleNavigate} activeSection={activeSection} />
            </div>
          </div>
        )}
        {/* Canvas Container: misma capa para zoom in/out en Presentación para que la transición sea progresiva */}
        <div
          className={`absolute top-0 left-0 transition-transform duration-700 ease-in-out ${showCasosEstudioViewportExtension ? 'invisible' : ''}`}
          style={getCanvasTransform()}
        >
          {/* Large Canvas - 2x2 Grid */}
        <div className="w-[2560px] h-[1664px] grid grid-cols-2 grid-rows-2 relative">
          {/* Top Left - Presentación */}
          <div className="w-[1280px] h-[832px]">
            <PresentacionSection isZoomed={isZoomed} onNavigate={handleNavigate} isMobile={false} />
          </div>

          {/* Top Right - Sobre mí */}
          <div className="w-[1280px] h-[832px]">
            <SobreMiSection isZoomed={isZoomed} onNavigate={handleNavigate} activeSection={activeSection} />
          </div>

          {/* Bottom Left - Casos de Estudio */}
          <div className="w-[1280px] h-[832px]">
            {!showCasosEstudioViewportExtension && (
              <CasosEstudioSection isZoomed={isZoomed} onNavigate={handleNavigate} activeSection={activeSection} />
            )}
          </div>

          {/* Bottom Right - Contacto */}
          <div className={`w-[1280px] h-[832px] ${showCasosEstudioViewportExtension ? 'opacity-0 pointer-events-none' : ''}`}>
            <ContactoSection isZoomed={isZoomed} onNavigate={handleNavigate} />
          </div>

          {/* Profile Photo - Positioned absolutely on canvas, moves between sections */}
          <div 
            className="absolute w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[184px] lg:h-[184px] rounded-[14px] md:rounded-[18px] lg:rounded-[22px] border-2 border-[#5a3e26] border-dashed overflow-hidden z-10 group hover:scale-105 cursor-pointer"
            style={{
              ...getProfilePhotoPosition(),
              transition: 'all 0.7s ease-in-out, transform 0.3s ease-out, box-shadow 0.3s ease-out',
            }}
            onClick={handleProfilePhotoClick}
            role="button"
            aria-label="Navegar a la sección Sobre mí"
            title="Navegar a la sección Sobre mí"
            tabIndex={0}
          >
            <img 
              src={imgProfilePhoto} 
              alt="Foto de perfil" 
              className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
            />
            
            {/* Overlay sutil que aparece en hover */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            />
            
            {/* Sombra que aumenta en hover */}
            <div 
              className="absolute -inset-1 rounded-[16px] md:rounded-[20px] lg:rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                boxShadow: '0 0 0 1px rgba(90, 62, 38, 0.2), 0 4px 12px rgba(90, 62, 38, 0.15), 0 8px 24px rgba(90, 62, 38, 0.1)',
              }}
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}