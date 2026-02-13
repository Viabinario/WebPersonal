import { SOCIAL_LOGO_SRCS, SOCIAL_LABELS, SOCIAL_URLS } from "./case-shared";
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
    </aside>
  );
}
