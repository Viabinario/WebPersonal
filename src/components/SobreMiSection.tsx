import { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { Download } from 'lucide-react';
import {
  type IntroSegment,
  SOBRE_MI_SEGMENTS_ES,
  SOBRE_MI_SEGMENTS_EN,
  TEXT_LINK_CLASS,
  LINKS_OTHER_FORMATS_GENERAL,
  LINK_CV_PDF_ES,
  LINK_CV_PDF_EN,
} from './case-shared';
import { useLocale } from '../context/LocaleContext';
import gsap from 'gsap';
import svgPathsOtherFormats from '../imports/svg-mbzxtnnqxt';

interface SobreMiSectionProps {
  isZoomed?: boolean;
  onNavigate?: (section: 'presentacion' | 'sobre-mi' | 'contacto' | 'casos-estudio') => void;
  activeSection?: 'presentacion' | 'sobre-mi' | 'contacto' | 'casos-estudio';
  /** Si true, no animar entrada del texto (p. ej. al llegar desde el botón de perfil en móvil) */
  skipEntranceAnimation?: boolean;
  /** Si true, se muestra la bottom bar móvil (enlaces generales + descarga CV) */
  isMobile?: boolean;
}

const SOBRE_MI_SPLIT_WORD_CLASS = 'sobre-mi-split-word';

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
            ? { href: seg.href, target: '_blank', rel: 'noopener noreferrer', className: `font-bold ${TEXT_LINK_CLASS}` }
            : {};
        return (
          <Wrapper key={i} {...wrapperProps} className="inline">
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
                <span key={j} className={`${SOBRE_MI_SPLIT_WORD_CLASS} inline-block mr-[0.28em]`}>
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

export function SobreMiSection({ isZoomed = false, onNavigate, skipEntranceAnimation = false, isMobile = false }: SobreMiSectionProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const { locale } = useLocale();
  const segments = locale === 'en' ? SOBRE_MI_SEGMENTS_EN : SOBRE_MI_SEGMENTS_ES;
  const [cvMenuOpen, setCvMenuOpen] = useState(false);

  useEffect(() => {
    if (!cvMenuOpen) return;
    const close = () => setCvMenuOpen(false);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [cvMenuOpen]);

  // Con skipEntranceAnimation, aplicar estado visible antes del paint para evitar retraso del texto
  useLayoutEffect(() => {
    if (!skipEntranceAnimation) return;
    const el = textRef.current;
    if (!el) return;
    const words = el.querySelectorAll(`.${SOBRE_MI_SPLIT_WORD_CLASS}`);
    if (words.length === 0) return;
    gsap.set(words, { opacity: 1, y: 0 });
  }, [segments, locale, skipEntranceAnimation]);

  useEffect(() => {
    if (skipEntranceAnimation) return;
    const el = textRef.current;
    if (!el) return;
    const words = el.querySelectorAll(`.${SOBRE_MI_SPLIT_WORD_CLASS}`);
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
  }, [segments, locale, skipEntranceAnimation]);

  const handleClick = () => {
    if (isZoomed && onNavigate) {
      onNavigate('sobre-mi');
    }
  };

  return (
    <div className={`relative w-full h-full min-w-0 max-w-full bg-[#f7f2ed] flex items-start md:items-center justify-center p-4 md:p-8 md:pt-[190px] lg:items-center lg:pt-0 lg:p-0 ${isMobile ? 'pb-[max(5.5rem,calc(env(safe-area-inset-bottom)+5rem))]' : ''}`}>
      {/* Sobre mí en celda izquierda: 38px del menú principal, ancho completo del intro (980px) como antes Presentación */}
      <div
        className={`w-full max-w-[420px] md:max-w-[600px] lg:absolute lg:top-[280px] lg:left-[320px] lg:right-auto lg:w-[980px] lg:max-w-none ${isZoomed ? 'cursor-pointer hover:scale-[1.01] transition-transform duration-300' : ''}`}
        onClick={handleClick}
        aria-label={isZoomed ? 'Hacer clic para navegar a la sección Sobre mí' : undefined}
        title={isZoomed ? 'Hacer clic para navegar a la sección Sobre mí' : undefined}
        role={isZoomed ? 'button' : undefined}
        tabIndex={isZoomed ? 0 : undefined}
      >
        <div
          ref={textRef}
          className={`font-['Roboto',sans-serif] text-[#5a3e26] text-justify leading-relaxed whitespace-pre-line text-base md:text-lg lg:text-xl ${skipEntranceAnimation ? 'sobre-mi-skip-entrance' : ''}`}
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          <SegmentWords segments={segments} />
        </div>
      </div>
      {/* Bottom bar móvil en Sobre mí: enlaces generales + descarga CV */}
      {isMobile &&
        createPortal(
          <nav
            className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-4 px-4 pt-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] bg-[#f7f2ed] border-t-2 border-[#5a3e26] border-dashed"
            aria-label="Otros formatos y descarga de CV"
          >
            {([
              { label: 'Behance', aria: 'Ver en Behance', path: svgPathsOtherFormats.p5a0b600 },
              { label: 'Figma', aria: 'Ver en Figma', path: svgPathsOtherFormats.p27c0d200 },
              { label: 'YouTube', aria: 'Ver en YouTube', path: svgPathsOtherFormats.pee38400 },
            ] as const).map((item, i) => (
              <a
                key={item.label}
                href={LINKS_OTHER_FORMATS_GENERAL[i]}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl text-[#5a3e26] hover:text-[#5a3e26]/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5a3e26] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f2ed] transition-colors"
                aria-label={item.aria}
                title={item.aria}
              >
                <svg className="block size-6" fill="none" viewBox="0 0 44 44" aria-hidden>
                  <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d={item.path} />
                </svg>
              </a>
            ))}
            <div className="relative flex items-center justify-center">
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); setCvMenuOpen((o) => !o); }}
                aria-label={cvMenuOpen ? 'Cerrar menú de descarga' : 'Descargar CV'}
                aria-expanded={cvMenuOpen}
                className="flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl text-[#5a3e26] hover:text-[#5a3e26]/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5a3e26] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f2ed] transition-colors"
              >
                <Download size={24} strokeWidth={2} aria-hidden />
              </button>
              {cvMenuOpen && (
                <div
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-[min(200px,85vw)] rounded-[16px] border-2 border-[#5a3e26] border-dashed bg-[#f7f2ed] shadow-lg py-2 z-50"
                  aria-label="Menú descarga CV"
                  onClick={(e) => e.stopPropagation()}
                >
                  <a
                    href={LINK_CV_PDF_ES}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-left px-4 py-3 font-['Roboto:Regular',sans-serif] text-[15px] font-medium text-[#5a3e26] hover:bg-[#e8d8c9] transition-colors"
                    onClick={() => setCvMenuOpen(false)}
                  >
                    Descargar CV (Español)
                  </a>
                  <a
                    href={LINK_CV_PDF_EN}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-left px-4 py-3 font-['Roboto:Regular',sans-serif] text-[15px] font-medium text-[#5a3e26] hover:bg-[#e8d8c9] transition-colors"
                    onClick={() => setCvMenuOpen(false)}
                  >
                    Download CV (English)
                  </a>
                </div>
              )}
            </div>
          </nav>,
          document.body
        )}
    </div>
  );
}
