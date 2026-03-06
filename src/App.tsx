import { useState, useEffect, useRef } from 'react';
import { NavigationGrid, ZoomGridButton } from './components/NavigationComponents';
import { PresentacionSection } from './components/PresentacionSection';
import { SobreMiSection } from './components/SobreMiSection';
import { ContactoSection } from './components/ContactoSection';
import { CasosEstudioSection, CaseStudyNavMobile, type CaseView } from './components/CasosEstudioSection';
import { SocialBarDesktop, SOCIAL_BAR_WIDTH_PX } from './components/SocialBarDesktop';
import { LangSwitch } from './context/LocaleContext';
import { CookieConsent } from './components/CookieConsent';
import { getStoredConsent } from './components/CookieConsent';
import { loadGoogleAnalytics, GA_MEASUREMENT_ID } from './utils/gtm';
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
// Presentación: texto intro left 300 + width 980 → borde derecho 1280; perfil lo más a la derecha posible
const PRESENTACION_TEXT_RIGHT = SECTION_WIDTH;
const PROFILE_MARGIN_FROM_TEXT = 24;

// Enrocado: Sobre mí es la sección inicial (top-left), Presentación top-right
const sectionPositions: Record<Section, SectionPosition> = {
  'sobre-mi': { x: 0, y: 0 },
  'presentacion': { x: -SECTION_WIDTH, y: 0 },
  'casos-estudio': { x: 0, y: -SECTION_HEIGHT },
  'contacto': { x: -SECTION_WIDTH, y: -SECTION_HEIGHT },
};

/** Lee la sección y el caso desde la URL para inicializar estado (evita que el menú no marque Casos de Estudio al cargar ?section=casos-estudio). */
function getInitialSectionFromUrl(): Section {
  try {
    const sectionParam = new URL(window.location.href).searchParams.get('section') as Section | null;
    if (sectionParam === 'presentacion' || sectionParam === 'sobre-mi' || sectionParam === 'contacto' || sectionParam === 'casos-estudio') {
      return sectionParam;
    }
  } catch {
    // ignore
  }
  return 'sobre-mi';
}

function getInitialCaseViewFromUrl(): CaseView {
  try {
    const caseParam = new URL(window.location.href).searchParams.get('case');
    if (caseParam === 'kora') return 'case1';
    if (caseParam === 'del-reves') return 'case2';
    if (caseParam === 'mingo') return 'case3';
  } catch {
    // ignore
  }
  return 'menu';
}

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>(getInitialSectionFromUrl);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [caseView, setCaseView] = useState<CaseView>(getInitialCaseViewFromUrl);
  const [mainMenuOpen, setMainMenuOpen] = useState(false);
  const [casesMenuOpen, setCasesMenuOpen] = useState(false);
  const [profilePhotoReveal, setProfilePhotoReveal] = useState(false);
  const [profilePhotoPhase, setProfilePhotoPhase] = useState<'from' | 'to'>('from');
  const [profilePhotoReturning, setProfilePhotoReturning] = useState(false);
  const [profilePhotoReturnPhase, setProfilePhotoReturnPhase] = useState<'from' | 'to'>('from');
  const profilePhotoTransitionEndRef = useRef(false);
  const profilePhotoReturnTransitionEndRef = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Cargar Google Analytics solo si el usuario aceptó cookies en una visita anterior
  useEffect(() => {
    if (getStoredConsent() === 'accepted') {
      loadGoogleAnalytics(GA_MEASUREMENT_ID);
    }
  }, []);

  // Leer sección/caso inicial desde la URL (?section=...&case=...)
  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      const sectionParam = url.searchParams.get('section') as Section | null;
      const caseParam = url.searchParams.get('case');

      if (sectionParam && (sectionParam === 'presentacion' || sectionParam === 'sobre-mi' || sectionParam === 'contacto' || sectionParam === 'casos-estudio')) {
        setActiveSection(sectionParam);
      }

      if (caseParam === 'kora') {
        setCaseView('case1');
      } else if (caseParam === 'del-reves') {
        setCaseView('case2');
      } else if (caseParam === 'mingo') {
        setCaseView('case3');
      }
    } catch {
      // Ignorar URLs no válidas
    }
  }, []);

  // Sincronizar la URL con la sección/caso actual
  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('section', activeSection);
      if (activeSection === 'casos-estudio' && (caseView === 'case1' || caseView === 'case2' || caseView === 'case3')) {
        const caseSlug = caseView === 'case1' ? 'kora' : caseView === 'case2' ? 'del-reves' : 'mingo';
        url.searchParams.set('case', caseSlug);
      } else {
        url.searchParams.delete('case');
      }
      window.history.replaceState({}, '', url.toString());
    } catch {
      // Ignorar si no se puede actualizar la URL
    }
  }, [activeSection, caseView]);

  const handleNavigate = (section: Section) => {
    setActiveSection(section);
    setIsZoomed(false);
    // Al entrar a Casos de Estudio desde el menú principal, mostrar siempre la vista de cards (fondo animado + cards).
    if (section === 'casos-estudio') {
      setCaseView('menu');
    }
  };

  // Navegación que dispara animación foto cuando va Presentación ↔ Sobre mí (Sobre mí = inicial/izq, Presentación = der)
  const handleNavigateWithPhotoAnimation = (section: Section) => {
    if (section === 'sobre-mi' && activeSection === 'presentacion') {
      handleProfilePlaceholderClick();
      return;
    }
    if (section === 'presentacion' && activeSection === 'sobre-mi') {
      setActiveSection('presentacion');
      setIsZoomed(false);
      setProfilePhotoReturning(true);
      setProfilePhotoReturnPhase('from');
      profilePhotoReturnTransitionEndRef.current = false;
      return;
    }
    handleNavigate(section);
  };

  const handleToggleZoom = () => {
    if (!isZoomed && activeSection === 'sobre-mi') {
      // Zoom out desde Sobre mí: animar foto hacia posición cero en Presentación y luego mostrar canvas completo
      setActiveSection('presentacion');
      setIsZoomed(true);
      setProfilePhotoReturning(true);
      setProfilePhotoReturnPhase('from');
      profilePhotoReturnTransitionEndRef.current = false;
    } else {
      setIsZoomed(!isZoomed);
    }
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

  // Calculate Profile_Photo position (Sobre mí = celda izq, Presentación = celda der)
  const getProfilePhotoPosition = () => {
    if (isMobile) {
      return { display: 'none' };
    }
    const isSmallScreen = windowWidth < 1024;
    // Presentación está en la celda derecha; placeholder/foto “en Presentación” = derecha
    if (isZoomed || activeSection === 'presentacion') {
      if (isSmallScreen) {
        return {
          left: `${CANVAS_WIDTH - SECTION_WIDTH / 2}px`,
          top: '28px',
          transform: 'translateX(-50%)',
        };
      }
      return {
        left: `${CANVAS_WIDTH - SECTION_WIDTH + 610}px`,
        top: '38px',
        transform: 'translateX(0)',
      };
    }
    // Sobre mí está en la celda izquierda
    if (activeSection === 'sobre-mi') {
      const imgHalf = isSmallScreen ? 75 : 92;
      const centerX = PRESENTACION_TEXT_RIGHT - PROFILE_MARGIN_FROM_TEXT - imgHalf;
      return {
        left: `${centerX}px`,
        top: isSmallScreen ? '20px' : '30px',
        transform: 'translateX(-50%)',
      };
    }
    const imgHalf = isSmallScreen ? 75 : 92;
    const centerX = PRESENTACION_TEXT_RIGHT - PROFILE_MARGIN_FROM_TEXT - imgHalf;
    return {
      left: `${centerX}px`,
      top: isSmallScreen ? '20px' : '30px',
      transform: 'translateX(-50%)',
      opacity: '0',
      pointerEvents: 'none' as const,
    };
  };

  // Posición en Sobre mí (celda izquierda; para animación de vuelta a Presentación)
  const getProfilePhotoSobreMiPosition = () => {
    if (isMobile) return {};
    const isSmallScreen = windowWidth < 1024;
    const imgHalf = isSmallScreen ? 75 : 92;
    const centerX = PRESENTACION_TEXT_RIGHT - PROFILE_MARGIN_FROM_TEXT - imgHalf;
    return {
      left: `${centerX}px`,
      top: isSmallScreen ? '20px' : '30px',
      transform: 'translateX(-50%)',
    };
  };

  // Posición del placeholder en Presentación (celda derecha); caja 160px para ondas
  const getProfilePlaceholderPosition = () => {
    const isSmallScreen = windowWidth < 1024;
    const imgTop = isSmallScreen ? 28 : 38;
    const imgHalf = isSmallScreen ? 75 : 92;
    const centerY = imgTop + imgHalf;
    const placeholderTop = centerY - 80;
    const left = isSmallScreen ? `${CANVAS_WIDTH - SECTION_WIDTH / 2}px` : `${CANVAS_WIDTH - SECTION_WIDTH + 610}px`;
    const transform = isSmallScreen ? 'translateX(-50%)' : 'translateX(0)';
    return {
      left,
      top: `${placeholderTop}px`,
      transform,
    };
  };

  // Posición en Presentación (celda derecha) para animación from/to
  const getProfilePhotoFromPosition = () => {
    const isSmallScreen = windowWidth < 1024;
    const fullSize = isSmallScreen ? 150 : 184;
    const scaleFrom = 72 / fullSize;
    if (isSmallScreen) {
      return {
        left: `${CANVAS_WIDTH - SECTION_WIDTH / 2}px`,
        top: '28px',
        transform: `translateX(-50%) scale(${scaleFrom})`,
        transformOrigin: 'center center' as const,
        width: fullSize,
        height: fullSize,
      };
    }
    return {
      left: `${CANVAS_WIDTH - SECTION_WIDTH + 610}px`,
      top: '38px',
      transform: `translateX(0) scale(${scaleFrom})`,
      transformOrigin: 'center center' as const,
      width: fullSize,
      height: fullSize,
    };
  };

  // Clic en la foto (solo visible en Sobre mí): flujo inverso a Presentación / estado cero
  const handleProfilePhotoClick = () => {
    if (activeSection === 'sobre-mi') {
      setActiveSection('presentacion');
      setIsZoomed(false);
      setProfilePhotoReturning(true);
      setProfilePhotoReturnPhase('from');
      profilePhotoReturnTransitionEndRef.current = false;
    } else {
      handleNavigate('sobre-mi');
    }
  };

  const handleProfilePlaceholderClick = () => {
    setActiveSection('sobre-mi');
    setIsZoomed(false);
    setProfilePhotoReveal(true);
    setProfilePhotoPhase('from');
    profilePhotoTransitionEndRef.current = false;
  };

  // Tras montar con phase 'from', pasar a 'to' para disparar la transición CSS (Presentación → Sobre mí)
  useEffect(() => {
    if (!profilePhotoReveal || profilePhotoPhase !== 'from') return;
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setProfilePhotoPhase('to'));
    });
    return () => cancelAnimationFrame(id);
  }, [profilePhotoReveal, profilePhotoPhase]);

  // Tras montar con phase 'from', pasar a 'to' para transición de vuelta (Sobre mí → Presentación)
  useEffect(() => {
    if (!profilePhotoReturning || profilePhotoReturnPhase !== 'from') return;
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setProfilePhotoReturnPhase('to'));
    });
    return () => cancelAnimationFrame(id);
  }, [profilePhotoReturning, profilePhotoReturnPhase]);

  const handleProfilePhotoTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.propertyName !== 'left' && e.propertyName !== 'transform') return;
    if (profilePhotoReveal && profilePhotoPhase === 'to' && !profilePhotoTransitionEndRef.current) {
      profilePhotoTransitionEndRef.current = true;
      setProfilePhotoReveal(false);
      setProfilePhotoPhase('from');
    }
    if (profilePhotoReturning && profilePhotoReturnPhase === 'to' && !profilePhotoReturnTransitionEndRef.current) {
      profilePhotoReturnTransitionEndRef.current = true;
      setProfilePhotoReturning(false);
      setProfilePhotoReturnPhase('from');
    }
  };

  // Mobile: menú hamburguesa derecha; menú de casos (sandwich + texto "CASOS DE ESTUDIO") izquierda; estados para que no se solapen
  if (isMobile) {
    // Misma estructura que Casos de estudio: slot izquierdo = menú de casos o switch de idioma (Sobre mí / Presentación)
    const headerLeftContent = activeSection === 'casos-estudio' ? (
      <CaseStudyNavMobile
        currentView={caseView}
        onSelectCase={setCaseView}
        open={casesMenuOpen}
        onOpenChange={setCasesMenuOpen}
        onWhenOpen={() => setMainMenuOpen(false)}
      />
    ) : undefined;
    return (
      <div className="w-full min-h-screen bg-[#f7f2ed]">
        <NavigationGrid
          activeSection={activeSection}
          onNavigate={handleNavigate}
          embedInFlow
          leftContent={headerLeftContent}
          showLangSwitchInLeftSlot={activeSection === 'presentacion' || activeSection === 'sobre-mi'}
          mainMenuOpen={mainMenuOpen}
          setMainMenuOpen={setMainMenuOpen}
          onMainMenuButtonClick={() => setCasesMenuOpen(false)}
        />
        <main className="w-full overflow-hidden">
          {activeSection === 'presentacion' && (
            <div key="presentacion" className="w-full min-h-screen flex flex-col bg-[#f7f2ed] animate-mobile-slide-left">
              <div className="flex-shrink-0 flex justify-center pt-4 pb-10">
                <div
                  className="relative flex items-center justify-center w-[220px] h-[220px] overflow-visible"
                  aria-hidden
                >
                  <div className="profile-photo-ripple absolute w-12 h-12 rounded-[12px]" style={{ animationDelay: '0s' }} aria-hidden />
                  <div className="profile-photo-ripple absolute w-12 h-12 rounded-[12px]" style={{ animationDelay: '0.8s' }} aria-hidden />
                  <div className="profile-photo-ripple absolute w-12 h-12 rounded-[12px]" style={{ animationDelay: '1.6s' }} aria-hidden />
                  <button
                    type="button"
                    className="profile-photo-heartbeat relative z-10 w-12 h-12 rounded-[12px] bg-[#a16f44] cursor-pointer hover:opacity-90 transition-opacity border-0"
                    onClick={() => setActiveSection('sobre-mi')}
                    aria-label="Ir a Sobre mí"
                    title="Ir a Sobre mí"
                  />
                </div>
              </div>
              <div className="flex-1 min-h-0">
                <PresentacionSection isZoomed={false} onNavigate={handleNavigate} isMobile />
              </div>
            </div>
          )}
          {activeSection === 'sobre-mi' && (
            <div key="sobre-mi" className="w-full min-h-screen flex flex-col bg-[#f7f2ed]">
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
                <SobreMiSection
                  isZoomed={false}
                  onNavigate={handleNavigate}
                  activeSection={activeSection}
                  skipEntranceAnimation
                  isMobile
                />
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
                initialView={caseView}
                onCaseViewChange={setCaseView}
              />
            </div>
          )}
          {activeSection === 'contacto' && (
            <div key="contacto" className="w-full min-h-screen animate-mobile-slide-up">
              <ContactoSection isZoomed={false} onNavigate={handleNavigate} />
            </div>
          )}
        </main>
      <CookieConsent onAccept={() => loadGoogleAnalytics(GA_MEASUREMENT_ID)} />
      </div>
    );
  }

  // When in Casos de estudio (not zoomed): extend viewport to browser right edge without deforming content
  const showCasosEstudioViewportExtension = !isZoomed && activeSection === 'casos-estudio';

  // Desktop layout: original canvas design
  return (
    <div className="w-screen h-screen overflow-hidden bg-[#f7f2ed] relative">
      {/* Fixed Navigation Menu */}
      <NavigationGrid activeSection={activeSection} onNavigate={handleNavigateWithPhotoAnimation} />

      {/* Fixed Zoom Button */}
      <ZoomGridButton isZoomed={isZoomed} onToggleZoom={handleToggleZoom} />

      {/* Switch idioma: solo en desktop/tablet (no móvil); en móvil va en la top bar izquierda vía NavigationGrid */}
      {!isMobile && (
        <div className="fixed top-2 right-2 z-30 lg:hidden">
          <LangSwitch />
        </div>
      )}

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
              <CasosEstudioSection
                isZoomed={isZoomed}
                onNavigate={handleNavigate}
                onRequestZoomIn={() => { setActiveSection('casos-estudio'); handleToggleZoom(); }}
                activeSection={activeSection}
                initialView={caseView}
                onCaseViewChange={setCaseView}
              />
            </div>
          </div>
        )}
        {/* Canvas Container: misma capa para zoom in/out en Presentación para que la transición sea progresiva */}
        <div
          className={`absolute top-0 left-0 transition-transform duration-700 ease-in-out ${showCasosEstudioViewportExtension ? 'invisible' : ''}`}
          style={getCanvasTransform()}
        >
          {/* Large Canvas - 2x2 Grid (enrocado: Sobre mí top-left, Presentación top-right) */}
        <div className="w-[2560px] h-[1664px] grid grid-cols-2 grid-rows-2 relative">
          {/* Top Left - Sobre mí (sección inicial) */}
          <div className="w-[1280px] h-[832px]">
            <SobreMiSection isZoomed={isZoomed} onNavigate={handleNavigate} activeSection={activeSection} />
          </div>

          {/* Top Right - Presentación */}
          <div className="w-[1280px] h-[832px]">
            <PresentacionSection isZoomed={isZoomed} onNavigate={handleNavigate} isMobile={false} />
          </div>

          {/* Bottom Left - Casos de Estudio */}
          <div className="w-[1280px] h-[832px]">
            {!showCasosEstudioViewportExtension && (
              <CasosEstudioSection
                isZoomed={isZoomed}
                onNavigate={handleNavigate}
                onRequestZoomIn={() => { setActiveSection('casos-estudio'); handleToggleZoom(); }}
                activeSection={activeSection}
                initialView={caseView}
                onCaseViewChange={setCaseView}
              />
            )}
          </div>

          {/* Bottom Right - Contacto */}
          <div className={`w-[1280px] h-[832px] ${showCasosEstudioViewportExtension ? 'opacity-0 pointer-events-none' : ''}`}>
            <ContactoSection isZoomed={isZoomed} onNavigate={handleNavigate} />
          </div>

          {/* Placeholder en Presentación (celda derecha): cuadrado con ondas */}
          {!isMobile && (activeSection === 'presentacion' || isZoomed) && !profilePhotoReveal && !profilePhotoReturning && (
            <div
              className="absolute z-10 flex items-center justify-center overflow-visible"
              style={{
                ...getProfilePlaceholderPosition(),
                width: 160,
                height: 160,
              }}
            >
              <div className="profile-photo-ripple absolute w-9 h-9 rounded-[10px]" style={{ animationDelay: '0s' }} aria-hidden />
              <div className="profile-photo-ripple absolute w-9 h-9 rounded-[10px]" style={{ animationDelay: '0.8s' }} aria-hidden />
              <div className="profile-photo-ripple absolute w-9 h-9 rounded-[10px]" style={{ animationDelay: '1.6s' }} aria-hidden />
              <button
                type="button"
                className="profile-photo-heartbeat relative z-10 w-9 h-9 rounded-[10px] bg-[#a16f44] cursor-pointer hover:opacity-90 transition-opacity"
                onClick={handleProfilePlaceholderClick}
                aria-label="Ver foto de perfil y navegar a Sobre mí"
                title="Ver foto de perfil y navegar a Sobre mí"
              />
            </div>
          )}
          {/* Foto de perfil: en Sobre mí (celda izq) o durante transición Presentación↔Sobre mí */}
          {!isMobile && (activeSection === 'sobre-mi' || profilePhotoReveal || profilePhotoReturning) && (
            <div
              className={`absolute rounded-[14px] md:rounded-[18px] lg:rounded-[22px] border-2 border-[#5a3e26] border-dashed overflow-hidden z-10 group cursor-pointer ${
                !profilePhotoReveal && !profilePhotoReturning ? 'w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[184px] lg:h-[184px] hover:scale-105' : ''
              }`}
              style={{
                ...(profilePhotoReveal && profilePhotoPhase === 'from'
                  ? (() => {
                      const from = getProfilePhotoFromPosition();
                      return {
                        left: from.left,
                        top: from.top,
                        transform: from.transform,
                        transformOrigin: from.transformOrigin,
                        width: from.width,
                        height: from.height,
                        transition: 'left 0.7s ease-in-out, top 0.7s ease-in-out, transform 0.7s ease-in-out',
                      };
                    })()
                  : profilePhotoReveal && profilePhotoPhase === 'to'
                    ? {
                        ...getProfilePhotoPosition(),
                        transform: `${getProfilePhotoPosition().transform || 'translateX(0)'} scale(1)`,
                        transformOrigin: 'center center',
                        width: windowWidth < 1024 ? 150 : 184,
                        height: windowWidth < 1024 ? 150 : 184,
                        transition: 'left 0.7s ease-in-out, top 0.7s ease-in-out, transform 0.7s ease-in-out',
                      }
                    : profilePhotoReturning && profilePhotoReturnPhase === 'from'
                      ? {
                          ...getProfilePhotoSobreMiPosition(),
                          transform: `${getProfilePhotoSobreMiPosition().transform || 'translateX(0)'} scale(1)`,
                          transformOrigin: 'center center',
                          width: windowWidth < 1024 ? 150 : 184,
                          height: windowWidth < 1024 ? 150 : 184,
                          transition: 'left 0.7s ease-in-out, top 0.7s ease-in-out, transform 0.7s ease-in-out',
                        }
                      : profilePhotoReturning && profilePhotoReturnPhase === 'to'
                        ? (() => {
                            const to = getProfilePhotoFromPosition();
                            return {
                              left: to.left,
                              top: to.top,
                              transform: to.transform,
                              transformOrigin: to.transformOrigin,
                              width: to.width,
                              height: to.height,
                              transition: 'left 0.7s ease-in-out, top 0.7s ease-in-out, transform 0.7s ease-in-out',
                            };
                          })()
                        : {
                            ...getProfilePhotoPosition(),
                            transition: 'all 0.7s ease-in-out, transform 0.3s ease-out, box-shadow 0.3s ease-out',
                          }),
              }}
              onClick={profilePhotoReveal || profilePhotoReturning ? undefined : handleProfilePhotoClick}
              onTransitionEnd={handleProfilePhotoTransitionEnd}
              role="button"
              aria-label={activeSection === 'sobre-mi' ? 'Volver a la sección Presentación' : 'Navegar a la sección Sobre mí'}
              title={activeSection === 'sobre-mi' ? 'Volver a la sección Presentación' : 'Navegar a la sección Sobre mí'}
              tabIndex={0}
            >
              <img
                src={imgProfilePhoto}
                alt="Foto de perfil"
                className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
              />
              {!profilePhotoReveal && !profilePhotoReturning && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div
                    className="absolute -inset-1 rounded-[16px] md:rounded-[20px] lg:rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      boxShadow: '0 0 0 1px rgba(90, 62, 38, 0.2), 0 4px 12px rgba(90, 62, 38, 0.15), 0 8px 24px rgba(90, 62, 38, 0.1)',
                    }}
                  />
                </>
              )}
            </div>
          )}
        </div>
      </div>
      </div>
      <CookieConsent onAccept={() => loadGoogleAnalytics(GA_MEASUREMENT_ID)} />
    </div>
  );
}