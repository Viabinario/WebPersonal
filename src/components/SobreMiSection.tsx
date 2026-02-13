import { useRef, useEffect } from 'react';
import {
  type IntroSegment,
  SOBRE_MI_SEGMENTS_ES,
  SOBRE_MI_SEGMENTS_EN,
  TEXT_LINK_CLASS,
} from './case-shared';
import { useLocale } from '../context/LocaleContext';
import gsap from 'gsap';

interface SobreMiSectionProps {
  isZoomed?: boolean;
  onNavigate?: (section: 'presentacion' | 'sobre-mi' | 'contacto' | 'casos-estudio') => void;
  activeSection?: 'presentacion' | 'sobre-mi' | 'contacto' | 'casos-estudio';
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

export function SobreMiSection({ isZoomed = false, onNavigate }: SobreMiSectionProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const { locale } = useLocale();
  const segments = locale === 'en' ? SOBRE_MI_SEGMENTS_EN : SOBRE_MI_SEGMENTS_ES;

  useEffect(() => {
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
  }, [segments, locale]);

  const handleClick = () => {
    if (isZoomed && onNavigate) {
      onNavigate('sobre-mi');
    }
  };

  return (
    <div className="relative w-full h-full min-w-0 max-w-full bg-[#f7f2ed] flex items-start md:items-center justify-center p-4 md:p-8 md:pt-[190px] lg:items-center lg:pt-0 lg:p-0">
      {/* Bloque de texto sin caja (como Presentación): misma posición para respetar margen izquierdo */}
      <div
        className={`w-full max-w-[420px] lg:absolute lg:top-[38px] lg:right-[min(38px,5vw)] lg:max-w-[420px] ${isZoomed ? 'cursor-pointer hover:scale-[1.01] transition-transform duration-300' : ''}`}
        onClick={handleClick}
        aria-label={isZoomed ? 'Hacer clic para navegar a la sección Sobre mí' : undefined}
        title={isZoomed ? 'Hacer clic para navegar a la sección Sobre mí' : undefined}
        role={isZoomed ? 'button' : undefined}
        tabIndex={isZoomed ? 0 : undefined}
      >
        <div
          ref={textRef}
          className="font-['Roboto',sans-serif] text-[#5a3e26] text-justify leading-relaxed whitespace-pre-line text-base md:text-lg lg:text-xl"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          <SegmentWords segments={segments} />
        </div>
      </div>
    </div>
  );
}
