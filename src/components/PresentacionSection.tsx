import { useRef, useEffect } from "react";
import {
  type IntroSegment,
  CASE_INTRO_SEGMENTS_ES,
  CASE_INTRO_SEGMENTS_EN,
  CASE_INTRO_SEGMENTS_MOBILE_ES,
  CASE_INTRO_SEGMENTS_MOBILE_EN,
  SOCIAL_LOGO_SRCS,
  SOCIAL_LABELS,
  SOCIAL_URLS,
  TEXT_LINK_CLASS,
} from "./case-shared";
import { useLocale } from "../context/LocaleContext";
import gsap from "gsap";

interface PresentacionSectionProps {
  isZoomed?: boolean;
  onNavigate?: (section: 'presentacion' | 'sobre-mi' | 'contacto' | 'casos-estudio') => void;
  /** Si es true, se usa CASE_INTRO_TEXT_MOBILE en lugar de CASE_INTRO_TEXT. */
  isMobile?: boolean;
}

const TEXT_BOX_BASE_CLASS =
  "w-full max-w-[720px] md:max-w-[800px] lg:max-w-[900px] md:pt-[200px] lg:pt-0 lg:absolute lg:top-[260px] lg:left-[300px] lg:w-[980px] lg:max-w-none md:px-4 lg:px-0";
const ZOOMED_CLICKABLE_CLASS =
  "cursor-pointer hover:scale-[1.01] transition-transform duration-300";
const NAV_ARIA_LABEL = "Hacer clic para navegar a la sección de Presentación";
const SPLIT_WORD_CLASS = "presentacion-split-word";

const SOCIAL_LINKS_ONLY = [0, 1, 2, 3, 4] as const;

/** Caja de redes solo para móvil/tablet (en desktop se usa la barra global SocialBarDesktop). */
function SocialBox({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-[22px] border-2 border-[#5a3e26] border-dashed p-3 md:p-4 relative shadow-[0px_4px_12px_rgba(0,0,0,0.15)] ${className}`}
      style={{
        background: 'linear-gradient(135deg, #e5e2de 0%, #e5e2de 70%, color-mix(in srgb, #e5e2de 90%, white) 100%)',
      }}
    >
      <div
        className="absolute inset-0 rounded-[22px] pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 25%, transparent 60%)',
        }}
      />
      <div
        className="absolute inset-0 rounded-[22px] pointer-events-none"
        style={{
          boxShadow: 'inset 0px -2px 4px rgba(0,0,0,0.08), inset 0px 1px 2px rgba(255,255,255,0.25)',
        }}
      />
      <div className="flex flex-wrap justify-center gap-3 relative z-10">
        {SOCIAL_LINKS_ONLY.map((index) => (
          <SocialButton key={index} index={index} />
        ))}
      </div>
    </div>
  );
}

function splitIntoWords(text: string): string[] {
  return text.split(/(\s+)/).filter(Boolean);
}

function SegmentWords({ segments }: { segments: IntroSegment[] }) {
  return (
    <>
      {segments.map((seg, i) => {
        const tokens = splitIntoWords(seg.content);
        const Wrapper = seg.type === 'strong' ? 'strong' : seg.type === 'link' ? 'a' : 'span';
        const wrapperProps =
          seg.type === 'link' && seg.href
            ? {
                href: seg.href,
                target: '_blank',
                rel: 'noopener noreferrer',
                className: `inline font-bold ${TEXT_LINK_CLASS}`,
              }
            : { className: 'inline' };
        const isLink = seg.type === 'link';
        return (
          <Wrapper key={i} {...wrapperProps}>
            {tokens.map((token, j) => {
              const isWhitespace = /^\s+$/.test(token);
              if (isWhitespace) {
                return token === '\n\n' ? (
                  <span key={j} className="block h-[1em]" aria-hidden />
                ) : (
                  <span key={j} className="inline-block w-[0.28em]" aria-hidden style={{ userSelect: 'none' }} />
                );
              }
              return (
                <span
                  key={j}
                  className={`${SPLIT_WORD_CLASS} inline-block mr-[0.28em] ${isLink ? 'underline decoration-dotted underline-offset-2' : ''}`}
                >
                  {token}
                </span>
              );
            })}
          </Wrapper>
        );
      })}
    </>
  );
}

export function PresentacionSection({ isZoomed = false, onNavigate, isMobile = false }: PresentacionSectionProps) {
  const isClickable = isZoomed && !!onNavigate;
  const { locale } = useLocale();
  const introSegments =
    locale === 'en'
      ? (isMobile ? CASE_INTRO_SEGMENTS_MOBILE_EN : CASE_INTRO_SEGMENTS_EN)
      : (isMobile ? CASE_INTRO_SEGMENTS_MOBILE_ES : CASE_INTRO_SEGMENTS_ES);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const words = el.querySelectorAll(`.${SPLIT_WORD_CLASS}`);
    if (words.length === 0) return;
    gsap.set(words, { opacity: 0, y: 14 });
    gsap.to(words, {
      opacity: 1,
      y: 0,
      duration: 0.45,
      stagger: 0.022,
      ease: 'power2.out',
      overwrite: true,
    });
    const fallback = setTimeout(() => {
      gsap.set(words, { opacity: 1, y: 0, clearProps: 'all' });
    }, 1500);
    return () => clearTimeout(fallback);
  }, [introSegments, locale, isMobile]);

  const handleClick = () => {
    if (isClickable && onNavigate) onNavigate("presentacion");
  };

  return (
    <div className="relative w-full h-full min-h-full bg-[#f7f2ed] flex flex-col items-center justify-center md:justify-start lg:justify-center p-4 md:px-8 md:py-6 md:pb-16 lg:p-0">
      <div
        className={`${TEXT_BOX_BASE_CLASS} ${isClickable ? ZOOMED_CLICKABLE_CLASS : ""}`}
        onClick={handleClick}
        aria-label={isClickable ? NAV_ARIA_LABEL : undefined}
        title={isClickable ? NAV_ARIA_LABEL : undefined}
        role={isClickable ? "button" : undefined}
        tabIndex={isClickable ? 0 : undefined}
      >
        <div
          ref={textRef}
          className="font-['Roboto',sans-serif] text-[#5a3e26] text-justify leading-relaxed whitespace-pre-line mt-4 text-base md:text-lg lg:text-xl max-w-none"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          <SegmentWords segments={introSegments} />
        </div>
      </div>
      {/* Redes: solo móvil/tablet (en desktop la barra SocialBarDesktop está fija al margen derecho en App) */}
      <div className="mt-8 w-full max-w-[460px] md:mt-10 lg:hidden">
        <SocialBox />
      </div>
    </div>
  );
}

interface SocialButtonProps {
  /** Índice 0–4 para red con datos; null para celda vacía. */
  index: number | null;
}

const BTN_CLASS =
  "relative shrink-0 w-10 h-10 md:w-12 md:h-12 lg:w-[48px] lg:h-[48px] group cursor-pointer transition-all duration-300 ease-out hover:scale-110 inline-flex items-center justify-center";
const BTN_INNER =
  "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 lg:w-[42px] lg:h-[42px] rounded-[16px] transition-all duration-300";
const BTN_SHADOW =
  "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 lg:w-[44px] lg:h-[44px] rounded-[14px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.2),0px_2px_4px_0px_rgba(0,0,0,0.12)] group-hover:shadow-[0px_6px_12px_0px_rgba(0,0,0,0.3),0px_3px_6px_0px_rgba(0,0,0,0.18)] transition-all duration-300";

function SocialButton({ index }: SocialButtonProps) {
  const empty = index === null;
  const img = index !== null ? SOCIAL_LOGO_SRCS[index] : undefined;
  const label = index !== null ? SOCIAL_LABELS[index] : undefined;
  const url = index !== null ? SOCIAL_URLS[index] : undefined;

  const ariaLabel = empty ? "Botón de red social vacío" : `Visitar perfil en ${label ?? "Red social"}`;

  const content = (
    <>
      {/* Border con degradado sutil */}
      <div 
        className={BTN_INNER}
        style={{
          background: 'linear-gradient(135deg, #d9bda5 0%, #d9bda5 60%, color-mix(in srgb, #d9bda5 85%, white) 100%)',
        }}
      >
        {/* Highlight superior para profundidad */}
        <div 
          className="absolute inset-0 rounded-[16px] pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.15) 30%, transparent 60%)',
          }}
        />
        
        {/* Sombra interior sutil */}
        <div 
          className="absolute inset-0 rounded-[16px] pointer-events-none"
          style={{
            boxShadow: 'inset 0px -1px 2px rgba(0,0,0,0.15), inset 0px 1px 1px rgba(255,255,255,0.3)',
          }}
        />
      </div>
      
      {/* Contenedor con contenido e imagen */}
      <div className={BTN_SHADOW}>
        {!empty && img ? (
          <img src={img} alt="" className="w-full h-full rounded-[14px] object-cover" aria-hidden />
        ) : (
          <div 
            className="w-full h-full rounded-[14px]"
            style={{
              background: 'linear-gradient(135deg, #f7f2ed 0%, #f7f2ed 60%, color-mix(in srgb, #f7f2ed 90%, white) 100%)',
            }}
          />
        )}
      </div>
      
      {/* Resplandor en hover */}
      <div 
        className="absolute -inset-[2px] rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: '0 0 0 1px rgba(90, 62, 38, 0.15), 0 0 4px 1px rgba(90, 62, 38, 0.12), 0 0 8px 2px rgba(90, 62, 38, 0.06)',
        }}
      />
    </>
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
