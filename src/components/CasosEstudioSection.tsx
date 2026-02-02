import { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Case1Component from '../imports/Case1';
import Case2Component from '../imports/Case2';
import { Dialog, DialogContent, DialogTitle } from './ui/dialog';

// Wrapper for case buttons bar: shows semi-transparent background on hover so labels are readable
function CaseButtonsBar({ children }: { children: React.ReactNode }) {
  const [isBarHovered, setIsBarHovered] = useState(false);

  return (
    <div
      className="fixed bottom-[12px] left-[222px] z-40 flex gap-[10px] items-center py-2 pl-2 pr-4 rounded-[22px] transition-[background-color] duration-300"
      style={{
        backgroundColor: isBarHovered ? 'rgba(247, 242, 237, 0.94)' : 'transparent',
        isolation: 'isolate',
      }}
      onMouseEnter={() => setIsBarHovered(true)}
      onMouseLeave={() => setIsBarHovered(false)}
    >
      {children}
    </div>
  );
}

// Case Study Button
interface CaseButtonProps {
  onClick?: () => void;
  isActive?: boolean;
  label?: string;
  /** When true, button is semi-transparent over case content and 100% opaque on hover */
  overContent?: boolean;
}

function CaseButton({ onClick, isActive, label, overContent = false }: CaseButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const isOpaque = !overContent || isHovered;

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative shrink-0 flex items-center gap-[10px] transition-all duration-300 group"
      style={{
        width: (isActive || isHovered) && label ? 'auto' : '48px',
        opacity: isOpaque ? 1 : 0.5,
      }}
      data-name="State_Button_Menu"
      aria-label={label ? `Acceder al caso de estudio: ${label}` : undefined}
      title={label ? `Acceder al caso de estudio: ${label}` : undefined}
    >
      {/* Square button with background - 48x48px */}
      <div
        className={`relative shrink-0 w-[48px] h-[48px] rounded-[12px] transition-all duration-300 hover:scale-105 overflow-visible ${
          isActive ? 'bg-[#4d4b4a]' : 'bg-[#4d4b4a] hover:bg-[#3a3938]'
        }`}
      >
        {isActive && (
          <div className="absolute inset-0 border-4 border-[#5a3e26] border-solid rounded-[12px] pointer-events-none" />
        )}
        {/* Borde difuminado que se irradia en hover (mismo efecto que menú principal) */}
        {!isActive && (
          <div
            className="absolute -inset-1 rounded-[14px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              boxShadow: '0 0 0 1px rgba(90, 62, 38, 0.2), 0 0 6px 2px rgba(90, 62, 38, 0.12), 0 0 12px 4px rgba(90, 62, 38, 0.06), 0 0 20px 6px rgba(90, 62, 38, 0.03)',
            }}
          />
        )}
      </div>

      {/* Text label outside the square */}
      {label && (isActive || isHovered) && (
        <div
          className="whitespace-nowrap transition-opacity duration-300"
          style={{
            opacity: (isActive || isHovered) ? 1 : 0,
          }}
        >
          <p className="font-['Roboto:Regular',sans-serif] font-normal text-[#5a3e26] text-[20px]">
            {label}
          </p>
        </div>
      )}
    </button>
  );
}

// Placeholder animado (latido + ondas radiales) cuando hay zoom: centrado en la sección, clic = zoom in
const ZOOMED_PLACEHOLDER_STYLE = `
  @keyframes casos-estudio-heartbeat {
    0%, 100% { transform: scale(1); }
    18% { transform: scale(1.14); }
    36% { transform: scale(0.96); }
    54% { transform: scale(1.08); }
    72% { transform: scale(1); }
  }
  .casos-estudio-heartbeat {
    animation: casos-estudio-heartbeat 1.4s ease-in-out infinite;
  }
  @keyframes casos-estudio-ripple {
    0% { transform: scale(1); opacity: 0.5; }
    100% { transform: scale(9.333); opacity: 0; }
  }
  .casos-estudio-ripple {
    animation: casos-estudio-ripple 1.4s ease-out infinite;
    border: 2px solid rgba(77, 75, 74, 0.45);
  }
  .placeholder-exit .placeholder-mover {
    transform: translate(-386px, 372px);
    opacity: 0;
    transition: transform 0.4s ease-in, opacity 0.4s ease-in;
  }
`;

// Posición del primer botón del menú de casos en coordenadas de la sección (1280x832): centro ≈ (254, 788)
const PLACEHOLDER_EXIT_OFFSET = { x: -386, y: 372 };

interface ZoomedPlaceholderProps {
  onClick: () => void;
  isExiting?: boolean;
  onExitComplete?: () => void;
  enteringFromButtons?: boolean;
  onEnterComplete?: () => void;
}

function ZoomedPlaceholder({ onClick, isExiting = false, onExitComplete, enteringFromButtons = false, onEnterComplete }: ZoomedPlaceholderProps) {
  const [entrancePhase, setEntrancePhase] = useState<'at-buttons' | 'to-center'>('at-buttons');
  const moverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (enteringFromButtons) {
      setEntrancePhase('at-buttons');
      const id = requestAnimationFrame(() => {
        requestAnimationFrame(() => setEntrancePhase('to-center'));
      });
      return () => cancelAnimationFrame(id);
    }
  }, [enteringFromButtons]);

  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== moverRef.current) return;
    if (isExiting) onExitComplete?.();
    if (enteringFromButtons && entrancePhase === 'to-center') onEnterComplete?.();
  };

  const wrapperClass = [
    'absolute inset-0 flex items-center justify-center pointer-events-none z-10',
    isExiting && 'placeholder-exit',
  ].filter(Boolean).join(' ');

  const moverStyle: React.CSSProperties =
    enteringFromButtons && entrancePhase === 'at-buttons'
      ? {
          transform: `translate(${PLACEHOLDER_EXIT_OFFSET.x}px, ${PLACEHOLDER_EXIT_OFFSET.y}px)`,
          opacity: 0,
          transition: 'transform 0.45s ease-out, opacity 0.45s ease-out',
        }
      : enteringFromButtons && entrancePhase === 'to-center'
        ? {
            transform: 'translate(0, 0)',
            opacity: 1,
            transition: 'transform 0.45s ease-out, opacity 0.45s ease-out',
          }
        : {};

  return (
    <>
      <style>{ZOOMED_PLACEHOLDER_STYLE}</style>
      <div className={wrapperClass}>
        <div
          ref={moverRef}
          className="placeholder-mover relative w-[208px] h-[208px] flex items-center justify-center"
          style={moverStyle}
          onTransitionEnd={handleTransitionEnd}
        >
          {/* Ondas cuadradas que se disuelven a 200px del perímetro */}
          <div
            className="casos-estudio-ripple absolute w-[48px] h-[48px] rounded-[12px] pointer-events-none"
            style={{ animationDelay: '0s' }}
          />
          <div
            className="casos-estudio-ripple absolute w-[48px] h-[48px] rounded-[12px] pointer-events-none"
            style={{ animationDelay: '0.35s' }}
          />
          <div
            className="casos-estudio-ripple absolute w-[48px] h-[48px] rounded-[12px] pointer-events-none"
            style={{ animationDelay: '0.7s' }}
          />
          <div
            className="casos-estudio-heartbeat w-[48px] h-[48px] rounded-[12px] bg-[#4d4b4a] pointer-events-auto cursor-pointer hover:opacity-90 transition-opacity relative z-10"
            onClick={(e) => {
              e.stopPropagation();
              if (!isExiting) onClick();
            }}
            aria-label="Hacer clic para navegar a la sección Casos de Estudio"
            title="Hacer clic para navegar a la sección Casos de Estudio"
            role="button"
          />
        </div>
      </div>
    </>
  );
}

// Scroll Progress Indicator with Navigation Arrows
interface ScrollProgressProps {
  scrollPercentage: number;
  onScrollLeft?: () => void;
  onScrollRight?: () => void;
  onScrollLeftStart?: () => void;
  onScrollLeftEnd?: () => void;
  onScrollRightStart?: () => void;
  onScrollRightEnd?: () => void;
  onScrollToStart?: () => void;
  onScrollToEnd?: () => void;
}

function ScrollProgress({
  scrollPercentage,
  onScrollLeft,
  onScrollRight,
  onScrollLeftStart,
  onScrollLeftEnd,
  onScrollRightStart,
  onScrollRightEnd,
  onScrollToStart,
  onScrollToEnd,
}: ScrollProgressProps) {
  return (
    <div className="fixed right-[4px] bottom-[12px] z-40">
      <div className="relative h-[44px] w-[260px]" data-name="Navigation-Case-Scroll">
        {/* Progress percentage in center */}
        <div className="absolute left-[108px] size-[44px] top-0" data-name="Progress_Scroll">
          <div className="bg-[#fff6eb] content-stretch flex flex-col items-center justify-center overflow-clip px-0.5 py-1 relative rounded-[12px] shrink-0 size-full" data-name="Content-Progress">
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#6a3c00] text-[16px] text-center w-full">
              {Math.round(scrollPercentage)}%
            </p>
          </div>
        </div>

        {/* Left End arrow (go to start - 0%) */}
        <button
          onClick={onScrollToStart}
          className="absolute left-0 w-[44px] h-[44px] top-0 transition-all duration-200 hover:scale-110 active:scale-95 flex items-center justify-center"
          data-name="Content-Left-End"
          aria-label="Ir al inicio"
          title="Ir al inicio"
        >
          <svg width="44" height="44" viewBox="0 0 48 48" fill="none" className="shrink-0">
            <path d="M42 36L30 24L42 12V36Z" fill="#5A3E26" stroke="#5A3E26" strokeLinejoin="round" strokeWidth="4" />
            <path d="M19 11H24V37H19V11Z" fill="#5A3E26" />
          </svg>
        </button>

        {/* Left arrow (continuous scroll) */}
        <button
          onClick={onScrollLeft}
          onMouseDown={onScrollLeftStart}
          onMouseUp={onScrollLeftEnd}
          onMouseLeave={onScrollLeftEnd}
          onTouchStart={onScrollLeftStart}
          onTouchEnd={onScrollLeftEnd}
          className="absolute left-[54px] w-[44px] h-[44px] top-0 transition-all duration-200 hover:scale-110 active:scale-95 flex items-center justify-center"
          data-name="Content-Left"
          aria-label="Desplazar a la izquierda"
          title="Desplazar a la izquierda"
        >
          <svg width="44" height="44" viewBox="0 0 48 48" fill="none" className="shrink-0">
            <path d="M30 36L18 24L30 12V36Z" fill="#5A3E26" stroke="#5A3E26" strokeLinejoin="round" strokeWidth="4" />
          </svg>
        </button>

        {/* Right arrow (continuous scroll) */}
        <button
          onClick={onScrollRight}
          onMouseDown={onScrollRightStart}
          onMouseUp={onScrollRightEnd}
          onMouseLeave={onScrollRightEnd}
          onTouchStart={onScrollRightStart}
          onTouchEnd={onScrollRightEnd}
          className="absolute left-[162px] w-[44px] h-[44px] top-0 transition-all duration-200 hover:scale-110 active:scale-95 flex items-center justify-center"
          data-name="Content-Right"
          aria-label="Desplazar a la derecha"
          title="Desplazar a la derecha"
        >
          <svg width="44" height="44" viewBox="0 0 48 48" fill="none" className="shrink-0">
            <path d="M18 36L30 24L18 12V36Z" fill="#5A3E26" stroke="#5A3E26" strokeLinejoin="round" strokeWidth="4" />
          </svg>
        </button>

        {/* Right End arrow (go to end - 100%) */}
        <button
          onClick={onScrollToEnd}
          className="absolute left-[216px] w-[44px] h-[44px] top-0 transition-all duration-200 hover:scale-110 active:scale-95 flex items-center justify-center"
          data-name="Content-Right-End"
          aria-label="Ir al final"
          title="Ir al final"
        >
          <svg width="44" height="44" viewBox="0 0 48 48" fill="none" className="shrink-0">
            <path d="M6 12L18 24L6 36V12Z" fill="#5A3E26" stroke="#5A3E26" strokeLinejoin="round" strokeWidth="4" />
            <path d="M29 37H24V11H29V37Z" fill="#5A3E26" />
          </svg>
        </button>
      </div>
    </div>
  );
}

/** Extrae el nombre base del asset desde la URL (quita hash de Vite si existe) para buscar la versión original. */
function getBaseAssetFilename(url: string): string {
  try {
    const pathname = url.includes('://') ? new URL(url).pathname : url;
    const segment = pathname.split('/').filter(Boolean).pop() ?? '';
    // Quitar hash de Vite: nombre-hash.ext -> nombre.ext
    const withoutHash = segment.replace(/^(.+)-[a-f0-9]{8,}\.(png|jpe?g|gif|webp)$/i, '$1.$2');
    return withoutHash || segment;
  } catch {
    return '';
  }
}

/** URL base para imágenes originales (legibles) en public/originals/ */
function getOriginalsBaseUrl(): string {
  const base = typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL ? import.meta.env.BASE_URL : '/';
  return base.endsWith('/') ? `${base}originals/` : `${base}/originals/`;
}

type CaseView = 'menu' | 'case1' | 'case2';

interface CasosEstudioSectionProps {
  isZoomed?: boolean;
  onNavigate?: (section: 'presentacion' | 'sobre-mi' | 'contacto' | 'casos-estudio') => void;
  activeSection?: 'presentacion' | 'sobre-mi' | 'contacto' | 'casos-estudio';
}

export function CasosEstudioSection({ isZoomed: _isZoomed = false, onNavigate: _onNavigate, activeSection = 'presentacion' }: CasosEstudioSectionProps) {
  const isCasosEstudioActive = activeSection === 'casos-estudio';
  // Menú de casos y control de scroll solo en Casos de Estudio y cuando NO hay zoom (vista de cuadrícula)
  const showCaseStudyUI = isCasosEstudioActive && !_isZoomed;
  const [currentView, setCurrentView] = useState<CaseView>('menu');
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [lightboxPreferredSrc, setLightboxPreferredSrc] = useState<string | null>(null);
  const [lightboxFallbackSrc, setLightboxFallbackSrc] = useState<string | null>(null);
  const [lightboxZoom, setLightboxZoom] = useState(1);
  const [lightboxImageSize, setLightboxImageSize] = useState<{ w: number; h: number } | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const caseContainerRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const prevZoomedRef = useRef(_isZoomed);
  const exitFromClickRef = useRef(false);

  const [placeholderExiting, setPlaceholderExiting] = useState(false);
  const [placeholderEnteringFromButtons, setPlaceholderEnteringFromButtons] = useState(false);

  // Zoom out: animación entra desde los botones al centro. Zoom in (botón zoom): animación sale hacia los botones.
  useEffect(() => {
    if (_isZoomed && !prevZoomedRef.current) {
      setPlaceholderEnteringFromButtons(true);
    }
    if (!_isZoomed && prevZoomedRef.current) {
      exitFromClickRef.current = false;
      setPlaceholderExiting(true);
    }
    prevZoomedRef.current = _isZoomed;
  }, [_isZoomed]);

  // Clic en la animación: desplaza hacia los botones y luego zoom in
  const handlePlaceholderClick = () => {
    if (_isZoomed && _onNavigate && !placeholderExiting) {
      exitFromClickRef.current = true;
      setPlaceholderExiting(true);
    }
  };

  const handlePlaceholderExitComplete = () => {
    if (exitFromClickRef.current && _onNavigate) {
      _onNavigate('casos-estudio');
    }
    exitFromClickRef.current = false;
    setPlaceholderExiting(false);
  };

  const handlePlaceholderEnterComplete = () => {
    setPlaceholderEnteringFromButtons(false);
  };

  // Clic en la sección: zoom in. En modo zoom out toda la sección es siempre hit area (menú o case activo), sin depender de otras interacciones.
  const handleSectionClick = () => {
    if (!_isZoomed || !_onNavigate || placeholderExiting) return;
    _onNavigate('casos-estudio');
  };

  // Delegación de clic: abrir lightbox con imagen original (legible) si existe en public/originals/; si no, la del caso
  const handleCaseContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const img = target.closest('img');
    if (!img || !img.currentSrc) return;
    if (img.naturalWidth >= 80 && img.naturalHeight >= 80) {
      e.preventDefault();
      e.stopPropagation();
      const baseFilename = getBaseAssetFilename(img.currentSrc);
      const originalsUrl = baseFilename ? `${getOriginalsBaseUrl()}${baseFilename}` : img.currentSrc;
      setLightboxPreferredSrc(originalsUrl);
      setLightboxFallbackSrc(img.currentSrc);
    }
  };

  const lightboxOpen = lightboxPreferredSrc !== null || lightboxFallbackSrc !== null;
  const lightboxDisplaySrc = lightboxPreferredSrc ?? lightboxFallbackSrc;
  const closeLightbox = () => {
    setLightboxPreferredSrc(null);
    setLightboxFallbackSrc(null);
    setLightboxZoom(1);
    setLightboxImageSize(null);
  };

  useEffect(() => {
    if (lightboxDisplaySrc) {
      setLightboxZoom(1);
      setLightboxImageSize(null);
    }
  }, [lightboxDisplaySrc]);

  const LIGHTBOX_ZOOM_MIN = 0.25;
  const LIGHTBOX_ZOOM_MAX = 3;
  const LIGHTBOX_ZOOM_STEP = 0.25;
  const lightboxZoomOut = () => setLightboxZoom((z) => Math.max(LIGHTBOX_ZOOM_MIN, z - LIGHTBOX_ZOOM_STEP));
  const lightboxZoomIn = () => setLightboxZoom((z) => Math.min(LIGHTBOX_ZOOM_MAX, z + LIGHTBOX_ZOOM_STEP));
  const lightboxZoomReset = () => setLightboxZoom(1);

  // Calculate scroll percentage from the internal scroll container of Case1/Case2
  useEffect(() => {
    if (currentView !== 'case1' && currentView !== 'case2') return;

    const findScrollContainer = () => {
      const caseContainer = caseContainerRef.current;
      if (!caseContainer) return null;
      const scrollElement = caseContainer.querySelector('[data-name="Usecase_container_1280x712"]') as HTMLElement;
      return scrollElement;
    };

    const timer = setTimeout(() => {
      const scrollElement = findScrollContainer();
      if (!scrollElement) return;

      const handleScroll = () => {
        const scrollLeft = scrollElement.scrollLeft;
        const scrollWidth = scrollElement.scrollWidth - scrollElement.clientWidth;
        const percentage = scrollWidth > 0 ? (scrollLeft / scrollWidth) * 100 : 0;
        setScrollPercentage(percentage);
      };

      const handleWheel = (e: WheelEvent) => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          scrollElement.scrollLeft += e.deltaY;
        }
        if (e.deltaX !== 0) {
          e.preventDefault();
          scrollElement.scrollLeft += e.deltaX;
        }
      };

      scrollElement.addEventListener('scroll', handleScroll);
      scrollElement.addEventListener('wheel', handleWheel, { passive: false });
      handleScroll();

      return () => {
        scrollElement.removeEventListener('scroll', handleScroll);
        scrollElement.removeEventListener('wheel', handleWheel);
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [currentView]);

  // Reset scroll when changing views
  useEffect(() => {
    setScrollPercentage(0);

    if (currentView === 'case1' || currentView === 'case2') {
      setTimeout(() => {
        const caseContainer = caseContainerRef.current;
        if (caseContainer) {
          const scrollElement = caseContainer.querySelector('[data-name="Usecase_container_1280x712"]') as HTMLElement;
          if (scrollElement) {
            scrollElement.scrollLeft = 0;
          }
        }
      }, 100);
    }
  }, [currentView]);

  const handleCaseClick = (caseView: CaseView) => {
    setCurrentView(caseView);
  };

  // Continuous scroll handlers
  const startScrollLeft = () => {
    const scrollElement = caseContainerRef.current?.querySelector('[data-name="Usecase_container_1280x712"]') as HTMLElement;
    if (!scrollElement) return;
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
    }
    scrollIntervalRef.current = setInterval(() => {
      scrollElement.scrollLeft -= 5;
    }, 16);
  };

  const startScrollRight = () => {
    const scrollElement = caseContainerRef.current?.querySelector('[data-name="Usecase_container_1280x712"]') as HTMLElement;
    if (!scrollElement) return;
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
    }
    scrollIntervalRef.current = setInterval(() => {
      scrollElement.scrollLeft += 5;
    }, 16);
  };

  const stopScroll = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, []);

  // Menu View: Case buttons rendered via portal into document.body so fixed = viewport (same row as zoom)
  if (currentView === 'menu') {
    const caseButtonsBar = showCaseStudyUI ? (
      <CaseButtonsBar>
        <CaseButton onClick={() => handleCaseClick('case1')} label="Kora" />
        <CaseButton onClick={() => handleCaseClick('case2')} label="Del Revés" />
      </CaseButtonsBar>
    ) : null;
    return (
      <div
        className={`relative w-full h-full bg-[#f7f2ed] overflow-hidden ${_isZoomed ? 'cursor-pointer hover:opacity-95 transition-opacity duration-200' : ''}`}
        onClick={_isZoomed ? handleSectionClick : undefined}
        aria-label={_isZoomed ? 'Hacer clic para navegar a la sección Casos de Estudio' : undefined}
        title={_isZoomed ? 'Hacer clic para navegar a la sección Casos de Estudio' : undefined}
        role={_isZoomed ? 'button' : undefined}
        tabIndex={_isZoomed ? 0 : undefined}
      >
        {/* Botón animado cuando no hay case activo; hit area de toda la sección siempre activa en zoom out */}
        {(_isZoomed || placeholderExiting) && currentView === 'menu' && (
            <ZoomedPlaceholder
              onClick={handlePlaceholderClick}
              isExiting={placeholderExiting}
              onExitComplete={handlePlaceholderExitComplete}
              enteringFromButtons={placeholderEnteringFromButtons}
              onEnterComplete={handlePlaceholderEnterComplete}
            />
          )}
        {showCaseStudyUI && createPortal(caseButtonsBar, document.body)}
      </div>
    );
  }

  // Case Studies View (case1 o case2): no botón animado; hit area de toda la zona cuando zoom out
  return (
    <div className="relative w-full h-full bg-[#f7f2ed] overflow-hidden">
      <div
        ref={scrollContainerRef}
        className="absolute inset-0 overflow-x-auto overflow-y-hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`
          .overflow-x-auto::-webkit-scrollbar {
            display: none;
          }
          [data-name="Container_Button_Usecases"] {
            display: none !important;
          }
          [data-name="Usecase_container_1280x712"] {
            overflow-x: auto !important;
            overflow-y: hidden !important;
            -webkit-overflow-scrolling: touch;
          }
          [data-name="Conent-Horizontal-ProjectCase"] {
            width: auto !important;
            min-width: max-content !important;
          }
          [data-case-lightbox] img {
            pointer-events: auto;
            cursor: zoom-in;
          }
        `}</style>

        <div className="h-full inline-block min-w-full">
          {currentView === 'case1' && (
            <div
              ref={caseContainerRef}
              data-case-lightbox
              role="presentation"
              className="w-[1280px] h-[832px] relative cursor-zoom-in"
              onClick={handleCaseContentClick}
            >
              <Case1Component />
            </div>
          )}
          {currentView === 'case2' && (
            <div
              ref={caseContainerRef}
              data-case-lightbox
              role="presentation"
              className="w-[1280px] h-[832px] relative cursor-zoom-in"
              onClick={handleCaseContentClick}
            >
              <Case2Component />
            </div>
          )}
        </div>
      </div>

      {/* Overlay hit area cuando zoom out con case activo: encima del contenido, toda la cuadrícula clicable para zoom in */}
      {_isZoomed && (
        <div
          className="absolute inset-0 z-30 cursor-pointer hover:opacity-95 transition-opacity duration-200"
          onClick={handleSectionClick}
          aria-label="Hacer clic para navegar a la sección Casos de Estudio"
          title="Hacer clic para navegar a la sección Casos de Estudio"
          role="button"
          tabIndex={0}
        />
      )}

      {/* Case buttons + ScrollProgress: solo en Casos de Estudio y sin zoom */}
      {showCaseStudyUI &&
        createPortal(
          <>
            <CaseButtonsBar>
              <CaseButton
                onClick={() => handleCaseClick('case1')}
                isActive={currentView === 'case1'}
                label="Kora"
                overContent={currentView === 'case1' || currentView === 'case2'}
              />
              <CaseButton
                onClick={() => handleCaseClick('case2')}
                isActive={currentView === 'case2'}
                label="Del Revés"
                overContent={currentView === 'case1' || currentView === 'case2'}
              />
            </CaseButtonsBar>
            {(currentView === 'case1' || currentView === 'case2') && (
              <ScrollProgress
          scrollPercentage={scrollPercentage}
          onScrollLeft={() => {
            const scrollElement = caseContainerRef.current?.querySelector('[data-name="Usecase_container_1280x712"]') as HTMLElement;
            if (scrollElement) {
              scrollElement.scrollLeft -= 100;
            }
          }}
          onScrollRight={() => {
            const scrollElement = caseContainerRef.current?.querySelector('[data-name="Usecase_container_1280x712"]') as HTMLElement;
            if (scrollElement) {
              scrollElement.scrollLeft += 100;
            }
          }}
          onScrollLeftStart={startScrollLeft}
          onScrollLeftEnd={stopScroll}
          onScrollRightStart={startScrollRight}
          onScrollRightEnd={stopScroll}
          onScrollToStart={() => {
            const scrollElement = caseContainerRef.current?.querySelector('[data-name="Usecase_container_1280x712"]') as HTMLElement;
            if (scrollElement) {
              scrollElement.scrollLeft = 0;
            }
          }}
          onScrollToEnd={() => {
            const scrollElement = caseContainerRef.current?.querySelector('[data-name="Usecase_container_1280x712"]') as HTMLElement;
            if (scrollElement) {
              scrollElement.scrollLeft = scrollElement.scrollWidth - scrollElement.clientWidth;
            }
          }}
        />
            )}
          </>,
          document.body
        )}

      {/* Lightbox: imagen con control de zoom desde tamaño real; scroll para recorrer */}
      <Dialog open={lightboxOpen} onOpenChange={(open: boolean) => !open && closeLightbox()}>
        <DialogContent
          className="p-2 bg-[#f7f2ed] border-[#5a3e26] border-dashed rounded-[22px] overflow-hidden flex flex-col box-border"
          style={{
            width: '95vw',
            height: '95vh',
            maxWidth: '95vw',
            maxHeight: '95vh',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          onPointerDownOutside={closeLightbox}
        >
          <DialogTitle className="sr-only">Imagen con zoom - desplázate para ver los detalles</DialogTitle>
          {lightboxDisplaySrc && (
            <>
              {/* Barra de zoom */}
              <div className="shrink-0 flex items-center justify-center gap-2 mb-1">
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); lightboxZoomOut(); }}
                  disabled={lightboxZoom <= LIGHTBOX_ZOOM_MIN}
                  className="h-8 min-w-[32px] px-2 rounded-lg bg-[#e5e2de] border border-[#5a3e26] border-dashed text-[#362517] text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#ebe3da] transition-colors"
                  aria-label="Reducir zoom"
                  title="Reducir zoom"
                >
                  −
                </button>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); lightboxZoomReset(); }}
                  className="h-8 min-w-[48px] px-2 rounded-lg bg-[#e5e2de] border border-[#5a3e26] border-dashed text-[#362517] text-xs font-medium hover:bg-[#ebe3da] transition-colors"
                  aria-label="Tamaño real (100%)"
                  title="Tamaño real (100%)"
                >
                  {Math.round(lightboxZoom * 100)}%
                </button>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); lightboxZoomIn(); }}
                  disabled={lightboxZoom >= LIGHTBOX_ZOOM_MAX}
                  className="h-8 min-w-[32px] px-2 rounded-lg bg-[#e5e2de] border border-[#5a3e26] border-dashed text-[#362517] text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#ebe3da] transition-colors"
                  aria-label="Aumentar zoom"
                  title="Aumentar zoom"
                >
                  +
                </button>
                <span className="text-[11px] text-[#5a3e26] ml-1">Desplázate para ver detalles</span>
              </div>
              <div
                className="flex-1 min-h-0 min-w-0 overflow-auto rounded-[12px] bg-[#ebe3da]"
                style={{ overscrollBehavior: 'contain', WebkitOverflowScrolling: 'touch' }}
              >
                {lightboxImageSize ? (
                  <div
                    style={{
                      width: lightboxImageSize.w * lightboxZoom,
                      height: lightboxImageSize.h * lightboxZoom,
                      position: 'relative',
                    }}
                  >
                    <img
                      src={(lightboxPreferredSrc ?? lightboxFallbackSrc) ?? ''}
                      alt="Imagen con zoom para ver detalles"
                      className="rounded-[12px] block align-top"
                      width={lightboxImageSize.w}
                      height={lightboxImageSize.h}
                      style={{
                        transform: `scale(${lightboxZoom})`,
                        transformOrigin: 'top left',
                        maxWidth: 'none',
                        maxHeight: 'none',
                      }}
                      onClick={(e) => e.stopPropagation()}
                      onError={() => {
                        if (lightboxFallbackSrc) setLightboxPreferredSrc(lightboxFallbackSrc);
                      }}
                    />
                  </div>
                ) : (
                  <img
                    src={(lightboxPreferredSrc ?? lightboxFallbackSrc) ?? ''}
                    alt="Imagen con zoom para ver detalles"
                    className="rounded-[12px] block align-top"
                    style={{ width: 'auto', height: 'auto', maxWidth: 'none', maxHeight: 'none' }}
                    onClick={(e) => e.stopPropagation()}
                    onLoad={(e) => {
                      const img = e.target as HTMLImageElement;
                      setLightboxImageSize({ w: img.naturalWidth, h: img.naturalHeight });
                    }}
                    onError={() => {
                      if (lightboxFallbackSrc) setLightboxPreferredSrc(lightboxFallbackSrc);
                    }}
                  />
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
