/**
 * Sección "Otros formatos" común a Case1, Case2 y Case3.
 * Exporta: ContentTextOtherFormats, IcnBehance, IcnFigma, IcnYoutube,
 * ContentLinksOtherFormats(links), ContentOtherFormats(links).
 */

import React, { useId } from 'react';
import svgPathsOtherFormats from '../../imports/svg-mbzxtnnqxt';

export function ContentTextOtherFormats() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Content-Text">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5a3e26] text-[16px] text-right tracking-[-0.48px]">
        <p className="css-ew64yg leading-[28px]">OTROS FORMATOS:</p>
      </div>
    </div>
  );
}

export function IcnBehance() {
  const clipId = useId().replace(/:/g, '_');
  return (
    <div className="relative shrink-0 size-[44px]" data-name="icn_behance">
      <div className="absolute inset-0" style={{ '--fill-0': 'rgba(90, 62, 38, 1)' } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
          <g clipPath={`url(#${clipId})`} id="icn_behance">
            <rect fill="#F7F2ED" height="44" width="44" />
            <path clipRule="evenodd" d={svgPathsOtherFormats.p5a0b600} fill="var(--fill-0, #5A3E26)" fillRule="evenodd" id="Vector" />
          </g>
          <defs>
            <clipPath id={clipId}>
              <rect fill="white" height="44" width="44" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export function IcnFigma() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="icn_Figma">
      <div className="absolute inset-0" style={{ '--fill-0': 'rgba(90, 62, 38, 1)' } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
          <g id="icn_Figma">
            <rect fill="#F7F2ED" height="44" width="44" />
            <path clipRule="evenodd" d={svgPathsOtherFormats.p27c0d200} fill="var(--fill-0, #5A3E26)" fillRule="evenodd" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export function IcnYoutube() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="icn_youtube">
      <div className="absolute inset-0" style={{ '--fill-0': 'rgba(90, 62, 38, 1)' } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
          <g id="icn_youtube">
            <rect fill="#F7F2ED" height="44" width="44" />
            <path d={svgPathsOtherFormats.pee38400} fill="var(--fill-0, #5A3E26)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

const LINK_ICON_CLASS =
  'inline-flex shrink-0 cursor-pointer transition-transform duration-300 ease-out hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5a3e26] focus-visible:ring-offset-2 rounded';

export function ContentLinksOtherFormats({
  links,
}: {
  links: readonly [string, string, string];
}) {
  return (
    <div className="relative shrink-0 w-full" data-name="Content-Links">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center p-[8px] relative w-full">
          <a
            href={links[0]}
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_ICON_CLASS}
            aria-label="Ver en Behance"
            title="Ver en Behance"
          >
            <IcnBehance />
          </a>
          <a
            href={links[1]}
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_ICON_CLASS}
            aria-label="Ver en Figma"
            title="Ver en Figma"
          >
            <IcnFigma />
          </a>
          <a
            href={links[2]}
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_ICON_CLASS}
            aria-label="Ver en YouTube"
            title="Ver en YouTube"
          >
            <IcnYoutube />
          </a>
        </div>
      </div>
    </div>
  );
}

/** Bloque completo "Otros formatos" (título + enlaces). Case1/Case2 usan className por defecto; Case3 usa su propio wrapper. */
export function ContentOtherFormats({
  links,
  className,
}: {
  links: readonly [string, string, string];
  className?: string;
}) {
  const defaultClass =
    'content-stretch flex flex-col gap-[8px] items-start pt-[280px] relative shrink-0 w-[198px]';
  return (
    <div
      className={className ?? defaultClass}
      data-name="Content-Other-Formats"
    >
      <div aria-hidden="true" className="absolute border-[#5a3e26] border-b border-dashed inset-px pointer-events-none" />
      <ContentTextOtherFormats />
      <ContentLinksOtherFormats links={links} />
    </div>
  );
}
