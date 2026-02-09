import {
  CASE_INTRO_TEXT,
  CASE_INTRO_TEXT_MOBILE,
  CASE_INTRO_TEXT_EN,
  CASE_INTRO_TEXT_MOBILE_EN,
  SOCIAL_LOGO_SRCS,
  SOCIAL_LABELS,
  SOCIAL_URLS,
} from "./case-shared";
import { LangSwitch, useLocale } from "../context/LocaleContext";

interface PresentacionSectionProps {
  isZoomed?: boolean;
  onNavigate?: (section: 'presentacion' | 'sobre-mi' | 'contacto' | 'casos-estudio') => void;
  /** Si es true, se usa CASE_INTRO_TEXT_MOBILE en lugar de CASE_INTRO_TEXT. */
  isMobile?: boolean;
}

const TEXT_BOX_BASE_CLASS =
  "w-full max-w-[460px] lg:absolute lg:top-[240px] lg:left-1/2 lg:-translate-x-1/2";
const ZOOMED_CLICKABLE_CLASS =
  "cursor-pointer hover:scale-105 transition-transform duration-300";
const NAV_ARIA_LABEL = "Hacer clic para navegar a la sección de Presentación";

/** Índices 0–4 = redes; null = celda vacía. Desktop: 3x3. Móvil: solo estos 5 en fila flexible. */
const SOCIAL_GRID_ITEMS: (number | null)[] = [0, 1, 2, 3, 4, null, null, null, null];
const SOCIAL_LINKS_ONLY = [0, 1, 2, 3, 4] as const;

export function PresentacionSection({ isZoomed = false, onNavigate, isMobile = false }: PresentacionSectionProps) {
  const isClickable = isZoomed && !!onNavigate;
  const { locale } = useLocale();
  const introParagraph =
    locale === 'en'
      ? (isMobile ? CASE_INTRO_TEXT_MOBILE_EN.paragraph : CASE_INTRO_TEXT_EN.paragraph)
      : (isMobile ? CASE_INTRO_TEXT_MOBILE.paragraph : CASE_INTRO_TEXT.paragraph);

  const handleClick = () => {
    if (isClickable && onNavigate) onNavigate("presentacion");
  };

  return (
    <div className="relative w-full h-full bg-[#f7f2ed] flex flex-col items-center justify-center p-4 md:p-8 lg:p-0">
      <div
        className={`${TEXT_BOX_BASE_CLASS} ${isClickable ? ZOOMED_CLICKABLE_CLASS : ""}`}
        onClick={handleClick}
        aria-label={isClickable ? NAV_ARIA_LABEL : undefined}
        title={isClickable ? NAV_ARIA_LABEL : undefined}
        role={isClickable ? "button" : undefined}
        tabIndex={isClickable ? 0 : undefined}
      >
        {/*Texto de Presentación */}
        <div className="relative w-full bg-[#e8d8c9] rounded-[22px] border-2 border-[#5a3e26] border-dashed pt-12 pr-14 pl-6 pb-6 md:p-12 lg:p-[48px] shadow-[25px_25px_10px_0px_rgba(0,0,0,0),16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)]">
          <LangSwitch />
          <p className="font-['Roboto:Regular',sans-serif] text-sm md:text-base lg:text-[14px] text-black text-justify leading-normal whitespace-pre-line">
            {introParagraph}
          </p>
        </div>
      </div>
      {/* Redes: móvil = fila flexible; desktop = 3x3 con tamaño fijo */}
      <div className="mt-4 w-full max-w-[460px] lg:mt-0 lg:absolute lg:bottom-[228px] lg:right-[38px] lg:w-[188px] lg:max-w-none">
        <div className="bg-[#e5e2de] rounded-[22px] border-2 border-[#5a3e26] border-dashed p-3 md:p-4 lg:p-[18px]">
          {/* Móvil/tablet: solo 5 enlaces en fila que se adapta al ancho */}
          <div className="flex flex-wrap justify-center gap-2 lg:hidden">
            {SOCIAL_LINKS_ONLY.map((index) => (
              <SocialButton key={index} index={index} />
            ))}
          </div>
          {/* Desktop: cuadrícula 3x3 fija (3×48px + 2×4px gap + padding ≈ 184px) */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-[4px] lg:place-items-center">
            {SOCIAL_GRID_ITEMS.map((index, i) => (
              <div key={i} className="flex shrink-0 items-center justify-center">
                <SocialButton index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface SocialButtonProps {
  /** Índice 0–4 para red con datos; null para celda vacía. */
  index: number | null;
}

const BTN_CLASS =
  "relative shrink-0 w-10 h-10 md:w-12 md:h-12 lg:w-[48px] lg:h-[48px] group cursor-pointer transition-transform duration-300 ease-out hover:scale-110 inline-flex items-center justify-center";
const BTN_INNER =
  "absolute bg-[#d9bda5] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 lg:w-[42px] lg:h-[42px] rounded-[16px] transition-all duration-300";
const BTN_SHADOW =
  "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 lg:w-[44px] lg:h-[44px] rounded-[14px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_8px_2px_0px_rgba(0,0,0,0),0px_5px_2px_0px_rgba(0,0,0,0.01),0px_3px_2px_0px_rgba(0,0,0,0.03),0px_1px_1px_0px_rgba(0,0,0,0.04)] group-hover:shadow-[0px_6px_6px_0px_rgba(0,0,0,0.3),0px_10px_3px_0px_rgba(0,0,0,0),0px_7px_3px_0px_rgba(0,0,0,0.01),0px_4px_3px_0px_rgba(0,0,0,0.04),0px_2px_2px_0px_rgba(0,0,0,0.05)] transition-all duration-300";

function SocialButton({ index }: SocialButtonProps) {
  const empty = index === null;
  const img = index !== null ? SOCIAL_LOGO_SRCS[index] : undefined;
  const label = index !== null ? SOCIAL_LABELS[index] : undefined;
  const url = index !== null ? SOCIAL_URLS[index] : undefined;

  const ariaLabel = empty ? "Botón de red social vacío" : `Visitar perfil en ${label ?? "Red social"}`;

  const content = (
    <div className={BTN_INNER}>
      <div className={BTN_SHADOW}>
        {!empty && img ? (
          <img src={img} alt="" className="w-full h-full rounded-[14px] object-cover" aria-hidden />
        ) : (
          <div className="w-full h-full rounded-[14px] bg-[#f7f2ed]" />
        )}
      </div>
    </div>
  );

  const commonProps = { className: BTN_CLASS, "aria-label": ariaLabel, title: ariaLabel };

  if (empty || !url) {
    return <span {...commonProps} role="presentation">{content}</span>;
  }
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" {...commonProps}>
      {content}
    </a>
  );
}
