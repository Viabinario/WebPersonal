/**
 * Vista móvil de casos de estudio: título, Descripción y "Otros formatos" (mismos íconos que desktop).
 */

import React from 'react';
import {
  LINKS_OTHER_FORMATS_CASE1,
  LINKS_OTHER_FORMATS_CASE2,
  CASE1_DESCRIPTION_CONTENT,
  CASE2_DESCRIPTION_CONTENT,
  CASE1_TITLE,
  CASE2_TITLE,
} from './case-shared';
import svgPathsOtherFormats from '../imports/svg-mbzxtnnqxt';
import imgCase1Cover from '../assets/case1/case1-03b.png';
import imgCase2Cover from '../assets/case2/case2-01.png';

export type CaseMobileId = 'case1' | 'case2';

const CASE_COVER_IMAGES: Record<CaseMobileId, string> = {
  case1: imgCase1Cover,
  case2: imgCase2Cover,
};

const OTHER_FORMATS_LINKS: Record<CaseMobileId, readonly [string, string, string]> = {
  case1: LINKS_OTHER_FORMATS_CASE1,
  case2: LINKS_OTHER_FORMATS_CASE2,
};

const OTHER_FORMATS_LABELS: readonly { label: string; aria: string }[] = [
  { label: 'Behance', aria: 'Ver en Behance' },
  { label: 'Figma', aria: 'Ver en Figma' },
  { label: 'YouTube', aria: 'Ver en YouTube' },
];

/** Íconos iguales que desktop (Behance, Figma, YouTube). */
function IconBehance() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44" aria-hidden>
      <g clipPath="url(#clip0_otros_behance)">
        <rect fill="#F7F2ED" height="44" width="44" />
        <path clipRule="evenodd" d={svgPathsOtherFormats.p5a0b600} fill="#5A3E26" fillRule="evenodd" />
      </g>
      <defs>
        <clipPath id="clip0_otros_behance">
          <rect fill="white" height="44" width="44" />
        </clipPath>
      </defs>
    </svg>
  );
}
function IconFigma() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44" aria-hidden>
      <g>
        <rect fill="#F7F2ED" height="44" width="44" />
        <path clipRule="evenodd" d={svgPathsOtherFormats.p27c0d200} fill="#5A3E26" fillRule="evenodd" />
      </g>
    </svg>
  );
}
function IconYoutube() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44" aria-hidden>
      <g>
        <rect fill="#F7F2ED" height="44" width="44" />
        <path d={svgPathsOtherFormats.pee38400} fill="#5A3E26" />
      </g>
    </svg>
  );
}

const OTHER_FORMATS_ICONS = [IconBehance, IconFigma, IconYoutube] as const;

/** Contenido móvil: títulos y descripciones centralizados en case-shared. */
const CASE_MOBILE_CONTENT: Record<
  CaseMobileId,
  { title: string; description: React.ReactNode }
> = {
  case1: { title: CASE1_TITLE, description: CASE1_DESCRIPTION_CONTENT },
  case2: { title: CASE2_TITLE, description: CASE2_DESCRIPTION_CONTENT },
};

interface CaseMobileViewProps {
  caseId: CaseMobileId;
}

export function CaseMobileView({ caseId }: CaseMobileViewProps) {
  const { title, description } = CASE_MOBILE_CONTENT[caseId];

  return (
    <article
      className="w-full bg-[#f7f2ed] text-[#5a3e26] font-['Roboto',sans-serif]"
      aria-label={`Caso de estudio: ${title}`}
    >
      <div className="mx-auto w-full max-w-[min(100%,36rem)] px-4 py-6">
        <h1 className="text-[#5a3e26] font-bold text-2xl sm:text-3xl leading-tight mb-6">
          {title}
        </h1>

        {/* Portada: imagen bajo el título (imagen completa, fondo blanco, borde 1px) */}
        <div className="w-full mb-3 rounded-xl overflow-hidden bg-white border border-solid border-[#5a3e26]/25 aspect-[4/3] sm:aspect-[3/2] min-h-[200px] flex items-center justify-center">
          <img
            src={CASE_COVER_IMAGES[caseId]}
            alt=""
            className="max-w-full max-h-full object-contain object-center block"
            fetchPriority="high"
          />
        </div>

        {/* Frame ancho completo, fondo beige, solo botones (sin título en mobile) */}
        <section
          className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen mb-6 py-3 bg-[#e8d8c9]"
          aria-label="Enlaces a Behance, Figma y YouTube"
        >
          <div className="flex flex-wrap justify-center items-center gap-6 px-4">
            {OTHER_FORMATS_LABELS.map((item, i) => {
              const Icon = OTHER_FORMATS_ICONS[i];
              return (
                <a
                  key={item.label}
                  href={OTHER_FORMATS_LINKS[caseId][i]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 w-11 h-11 rounded-xl border-2 border-[#5a3e26] border-solid bg-[#f7f2ed] overflow-hidden transition-transform duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5a3e26] focus-visible:ring-offset-2 focus-visible:ring-offset-[#e8d8c9] shadow-[0_2px_6px_rgba(90,62,38,0.15)] hover:shadow-[0_4px_10px_rgba(90,62,38,0.2)]"
                  aria-label={item.aria}
                  title={item.aria}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="desc-heading">
          <h2
            id="desc-heading"
            className="text-[#5a3e26] font-bold text-lg sm:text-xl mb-3"
          >
            Descripción
          </h2>
          <div className="text-[#5a3e26] text-sm sm:text-base leading-relaxed text-justify">
            {description}
          </div>
        </section>

        <p className="mt-6 text-sm text-[#5a3e26]/80 border-t border-[#5a3e26]/20 pt-4">
          Contenido completo en versión desktop. Diseño móvil en desarrollo.
        </p>
      </div>
    </article>
  );
}
