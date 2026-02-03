import {
  CASE_INTRO_TEXT,
  SOCIAL_LOGO_SRCS,
  SOCIAL_LABELS,
  SOCIAL_URLS,
} from "./case-shared";

interface PresentacionSectionProps {
  isZoomed?: boolean;
  onNavigate?: (section: 'presentacion' | 'sobre-mi' | 'contacto' | 'casos-estudio') => void;
  activeSection?: 'presentacion' | 'sobre-mi' | 'contacto' | 'casos-estudio';
}

export function PresentacionSection({ isZoomed = false, onNavigate }: PresentacionSectionProps) {
  const handleClick = () => {
    if (isZoomed && onNavigate) {
      onNavigate('presentacion');
    }
  };

  return (
    <div className="relative w-full h-full bg-[#f7f2ed] flex flex-col items-center justify-center p-4 md:p-8 lg:p-0">
      {/* Text Box - Centered - CLICKABLE */}
      <div 
        className={`w-full max-w-[460px] lg:absolute lg:top-[240px] lg:left-1/2 lg:transform lg:-translate-x-1/2 ${isZoomed ? 'cursor-pointer hover:scale-105 transition-transform duration-300' : ''}`}
        onClick={handleClick}
        aria-label={isZoomed ? "Hacer clic para navegar a la sección de Presentación" : undefined}
        title={isZoomed ? "Hacer clic para navegar a la sección de Presentación" : undefined}
        role={isZoomed ? "button" : undefined}
        tabIndex={isZoomed ? 0 : undefined}
      >
        <div className="w-full bg-[#e8d8c9] rounded-[22px] border-2 border-[#5a3e26] border-dashed p-6 md:p-12 lg:p-[48px] shadow-[25px_25px_10px_0px_rgba(0,0,0,0),16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)]">
          <p className="font-['Roboto:Regular',sans-serif] text-sm md:text-base lg:text-[14px] text-black text-justify leading-normal">
            {CASE_INTRO_TEXT.paragraph1}
            <br /><br />
            {CASE_INTRO_TEXT.paragraph2}
          </p>
        </div>
      </div>

      {/* Social Networks - Bottom Right */}
      <div className="absolute bottom-4 right-4 md:bottom-[38px] md:right-[38px] lg:bottom-[228px] lg:right-[38px]">
        <div className="bg-[#e5e2de] rounded-[22px] border-2 border-[#5a3e26] border-dashed p-3 md:p-4 lg:p-[18px]">
          <div className="grid grid-cols-3 gap-1 md:gap-2 lg:gap-[4px]">
            {/* Row 1: LinkedIn, GitHub, Behance */}
            <SocialButton img={SOCIAL_LOGO_SRCS[0]} label={SOCIAL_LABELS[0]} url={SOCIAL_URLS[0]} />
            <SocialButton img={SOCIAL_LOGO_SRCS[1]} label={SOCIAL_LABELS[1]} url={SOCIAL_URLS[1]} />
            <SocialButton img={SOCIAL_LOGO_SRCS[2]} label={SOCIAL_LABELS[2]} url={SOCIAL_URLS[2]} />
            {/* Row 2: Notion, YouTube, vacío */}
            <SocialButton img={SOCIAL_LOGO_SRCS[3]} label={SOCIAL_LABELS[3]} url={SOCIAL_URLS[3]} />
            <SocialButton img={SOCIAL_LOGO_SRCS[4]} label={SOCIAL_LABELS[4]} url={SOCIAL_URLS[4]} />
            <SocialButton empty />
            {/* Row 3: vacíos */}
            <SocialButton empty />
            <SocialButton empty />
            <SocialButton empty />
          </div>
        </div>
      </div>
    </div>
  );
}

interface SocialButtonProps {
  img?: string;
  label?: string;
  url?: string;
  empty?: boolean;
}

const socialButtonClass =
  "relative w-10 h-10 md:w-12 md:h-12 lg:w-[48px] lg:h-[48px] group cursor-pointer transition-transform duration-300 ease-out hover:scale-110 inline-flex items-center justify-center";
const socialButtonInner =
  "absolute bg-[#d9bda5] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 lg:w-[42px] lg:h-[42px] rounded-[16px] transition-all duration-300";
const socialButtonShadow =
  "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 lg:w-[44px] lg:h-[44px] rounded-[14px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_8px_2px_0px_rgba(0,0,0,0),0px_5px_2px_0px_rgba(0,0,0,0.01),0px_3px_2px_0px_rgba(0,0,0,0.03),0px_1px_1px_0px_rgba(0,0,0,0.04)] group-hover:shadow-[0px_6px_6px_0px_rgba(0,0,0,0.3),0px_10px_3px_0px_rgba(0,0,0,0),0px_7px_3px_0px_rgba(0,0,0,0.01),0px_4px_3px_0px_rgba(0,0,0,0.04),0px_2px_2px_0px_rgba(0,0,0,0.05)] transition-all duration-300";

function SocialButton({ img, label, url, empty }: SocialButtonProps) {
  const ariaLabel = empty ? "Botón de red social vacío" : `Visitar perfil en ${label ?? "Red social"}`;
  const content = (
    <>
      <div className={socialButtonInner}>
        <div className={socialButtonShadow}>
          {!empty && img ? (
            <img
              src={img}
              alt=""
              className="w-full h-full rounded-[14px] object-cover"
              aria-hidden
            />
          ) : (
            <div className="w-full h-full rounded-[14px] bg-[#f7f2ed]" />
          )}
        </div>
      </div>
    </>
  );

  if (empty || !url) {
    return (
      <span
        className={socialButtonClass}
        aria-label={ariaLabel}
        title={ariaLabel}
        role="presentation"
      >
        {content}
      </span>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={socialButtonClass}
      aria-label={ariaLabel}
      title={ariaLabel}
    >
      {content}
    </a>
  );
}