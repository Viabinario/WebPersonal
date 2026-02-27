import { useState, useEffect } from "react";
import { SOCIAL_LOGO_SRCS, SOCIAL_LABELS, SOCIAL_URLS, LINK_CV_PDF_ES, LINK_CV_PDF_EN } from "./case-shared";
import { LangSwitch } from "../context/LocaleContext";

/** Ancho de la barra (ícono + padding). Debe coincidir con el margen derecho del contenido en App. */
export const SOCIAL_BAR_WIDTH_PX = 56;

const BTN_CLASS =
  "relative shrink-0 w-10 h-10 group cursor-pointer transition-all duration-300 ease-out hover:scale-110 inline-flex items-center justify-center";
const BTN_INNER =
  "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-[16px] transition-all duration-300";
const BTN_SHADOW =
  "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-[14px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.2),0px_2px_4px_0px_rgba(0,0,0,0.12)] group-hover:shadow-[0px_6px_12px_0px_rgba(0,0,0,0.3),0px_3px_6px_0px_rgba(0,0,0,0.18)] transition-all duration-300";

/** Barra vertical fija al margen derecho del viewport (desktop). Switch de idioma arriba; íconos de redes abajo. */
export function SocialBarDesktop() {
  const [cvMenuOpen, setCvMenuOpen] = useState(false);

  useEffect(() => {
    if (!cvMenuOpen) return;
    const close = () => setCvMenuOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [cvMenuOpen]);

  return (
    <aside
      className="fixed top-0 right-0 bottom-0 hidden lg:flex flex-col items-center gap-3 py-4 z-20 w-14 border-l-2 border-[#5a3e26] border-dashed bg-[#f7f2ed]"
      style={{
        width: `${SOCIAL_BAR_WIDTH_PX}px`,
        background: 'linear-gradient(180deg, #e5e2de 0%, #e5e2de 70%, color-mix(in srgb, #e5e2de 90%, #f7f2ed) 100%)',
      }}
      aria-label="Idioma y redes sociales"
    >
      <div className="absolute inset-0 pointer-events-none rounded-l-lg" style={{ boxShadow: 'inset 1px 0 0 rgba(255,255,255,0.2)' }} />
      {/* Switch ES/EN: única ubicación para cambio de idioma en desktop */}
      <div className="flex shrink-0 w-full px-1">
        <LangSwitch vertical />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-3">
      {(SOCIAL_LOGO_SRCS as readonly string[]).map((img, index) => {
        const label = SOCIAL_LABELS[index];
        const url = SOCIAL_URLS[index];
        const ariaLabel = `Visitar perfil en ${label ?? "Red social"}`;
        const content = (
          <>
            <div
              className={BTN_INNER}
              style={{
                background: 'linear-gradient(135deg, #d9bda5 0%, #d9bda5 60%, color-mix(in srgb, #d9bda5 85%, white) 100%)',
              }}
            />
            <div className={BTN_SHADOW}>
              <img src={img} alt="" className="w-full h-full rounded-[14px] object-cover" aria-hidden />
            </div>
            <div
              className="absolute -inset-[2px] rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                boxShadow: '0 0 0 1px rgba(90, 62, 38, 0.15), 0 0 4px 1px rgba(90, 62, 38, 0.12)',
              }}
            />
          </>
        );
        return (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={BTN_CLASS}
            aria-label={ariaLabel}
            title={ariaLabel}
          >
            {content}
          </a>
        );
      })}
      </div>
      {/* Botón descarga CV: al clic se despliega menú con ES y EN (igual que en móvil) */}
      <div className="relative flex shrink-0">
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); setCvMenuOpen((o) => !o); }}
          className={`${BTN_CLASS}`}
          aria-label={cvMenuOpen ? "Cerrar menú de descarga de CV" : "Descargar CV"}
          aria-expanded={cvMenuOpen}
          title="Descargar CV"
        >
          <div
            className={BTN_INNER}
            style={{
              background: 'linear-gradient(135deg, #d9bda5 0%, #d9bda5 60%, color-mix(in srgb, #d9bda5 85%, white) 100%)',
            }}
          />
          <div className={`${BTN_SHADOW} flex items-center justify-center text-[#5a3e26]`}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </div>
        </button>
        {cvMenuOpen && (
          <div
            className="absolute right-full bottom-0 mr-2 w-[min(200px,85vw)] rounded-[16px] border-2 border-[#5a3e26] border-dashed bg-[#f7f2ed] shadow-lg py-2 z-50"
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
    </aside>
  );
}
