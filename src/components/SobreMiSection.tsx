import { useRef } from 'react';
import { SOBRE_MI_TEXT_ES, SOBRE_MI_TEXT_EN } from './case-shared';
import { LangSwitch, useLocale } from '../context/LocaleContext';

interface SobreMiSectionProps {
  isZoomed?: boolean;
  onNavigate?: (section: 'presentacion' | 'sobre-mi' | 'contacto' | 'casos-estudio') => void;
  activeSection?: 'presentacion' | 'sobre-mi' | 'contacto' | 'casos-estudio';
}

export function SobreMiSection({ isZoomed = false, onNavigate }: SobreMiSectionProps) {
  const textContainerRef = useRef<HTMLDivElement>(null);
  const { locale } = useLocale();

  const handleClick = () => {
    if (isZoomed && onNavigate) {
      onNavigate('sobre-mi');
    }
  };

  const handleScrollDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (textContainerRef.current) {
      textContainerRef.current.scrollBy({
        top: 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative w-full h-full min-w-0 max-w-full bg-[#f7f2ed] flex items-start md:items-center justify-center p-4 md:p-8 md:pt-[190px] lg:items-center lg:pt-0 lg:p-0">
      {/* Text Box - Right side - CLICKABLE */}
      <div 
        className={`w-full max-w-[388px] lg:absolute lg:top-[38px] lg:right-[min(38px,5vw)] ${isZoomed ? 'cursor-pointer hover:scale-105 transition-transform duration-300' : ''}`}
        onClick={handleClick}
        aria-label={isZoomed ? "Hacer clic para navegar a la sección Sobre mí" : undefined}
        title={isZoomed ? "Hacer clic para navegar a la sección Sobre mí" : undefined}
        role={isZoomed ? "button" : undefined}
        tabIndex={isZoomed ? 0 : undefined}
      >
        <div className="relative w-full min-h-[400px] max-h-[584px] lg:h-[584px] bg-[#e8d8c9] rounded-[22px] border-2 border-[#5a3e26] border-dashed shadow-[25px_25px_10px_0px_rgba(0,0,0,0),16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)] flex flex-col overflow-hidden">
          <LangSwitch />
          <div
            ref={textContainerRef}
            className="pt-12 pr-14 pl-6 pb-6 md:p-8 lg:p-[48px] lg:px-[32px] overflow-y-auto flex-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            <p className="font-['Roboto:Regular',sans-serif] text-sm md:text-base lg:text-[14px] text-black text-justify leading-[1.2]">
              {locale === 'en' ? SOBRE_MI_TEXT_EN : SOBRE_MI_TEXT_ES}
            </p>
          </div>
          
          {/* Scroll Button */}
          <button
            onClick={handleScrollDown}
            aria-label="Desplazar el contenido hacia abajo"
            title="Desplazar el contenido hacia abajo"
            className="w-full h-[44px] flex items-center justify-center bg-[#e8d8c9] border-t-2 border-[#5a3e26] border-dashed rounded-b-[22px] hover:bg-[#d9d5d0] active:bg-[#d9d5d0] transition-colors duration-200 cursor-pointer"
          >
            <svg 
              className="w-5 h-5 text-[#5a3e26]" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2.5"
            >
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}