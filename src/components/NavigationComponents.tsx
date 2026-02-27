// Navigation and Zoom components extracted from Figma imports
import { useState, useEffect } from 'react';
import { LangSwitch } from '../context/LocaleContext';

// Simple navigation button without individual labels
interface SimpleNavButtonProps {
  onClick: () => void;
  isActive: boolean;
  bgColor: string;
  onHover: () => void;
  onLeave: () => void;
  sectionName: string;
}

function SimpleNavButton({ onClick, isActive, bgColor, onHover, onLeave, sectionName }: SimpleNavButtonProps) {
  return (
    <button
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      aria-label={`Navegar a la sección ${sectionName}`}
      title={`Navegar a la sección ${sectionName}`}
      className={`relative w-14 h-14 md:w-16 md:h-16 lg:w-[82px] lg:h-[82px] rounded-[16px] md:rounded-[18px] lg:rounded-[22px] transition-all duration-300 ${
        isActive 
          ? 'scale-95 shadow-[inset_0px_4px_12px_rgba(0,0,0,0.4)]' 
          : 'hover:scale-105 hover:shadow-[0px_6px_16px_rgba(0,0,0,0.25)] shadow-[0px_4px_12px_rgba(0,0,0,0.15)]'
      } group overflow-visible`}
      style={{ 
        background: isActive 
          ? bgColor 
          : `linear-gradient(135deg, ${bgColor} 0%, ${bgColor} 60%, color-mix(in srgb, ${bgColor} 85%, white) 100%)`
      }}
    >
      {/* Highlight sutil en la parte superior para efecto de profundidad */}
      {!isActive && (
        <div 
          className="absolute inset-0 rounded-[16px] md:rounded-[18px] lg:rounded-[22px] pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 25%, transparent 60%)',
          }}
        />
      )}
      
      {/* Borde difuminado que se irradia en hover */}
      <div 
        className="absolute -inset-1 rounded-[18px] md:rounded-[20px] lg:rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: '0 0 0 1px rgba(90, 62, 38, 0.2), 0 0 8px 3px rgba(90, 62, 38, 0.15), 0 0 16px 6px rgba(90, 62, 38, 0.08), 0 0 24px 8px rgba(90, 62, 38, 0.04)',
        }}
      />
      
      {/* Sombra interior sutil para dar más profundidad */}
      {!isActive && (
        <div 
          className="absolute inset-0 rounded-[16px] md:rounded-[18px] lg:rounded-[22px] pointer-events-none"
          style={{
            boxShadow: 'inset 0px -1px 2px rgba(0,0,0,0.1), inset 0px 1px 1px rgba(255,255,255,0.2)',
          }}
        />
      )}
    </button>
  );
}

const SECTION_LABELS: Record<'presentacion' | 'sobre-mi' | 'contacto' | 'casos-estudio', string> = {
  'presentacion': 'Presentación',
  'sobre-mi': 'Sobre mí',
  'contacto': 'Contacto',
  'casos-estudio': 'Casos de estudio',
};

const SECTION_COLORS: Record<'presentacion' | 'sobre-mi' | 'contacto' | 'casos-estudio', string> = {
  'presentacion': '#e8d8c9',
  'sobre-mi': '#a16f44',
  'contacto': '#caa381',
  'casos-estudio': '#5a3e26',
};

/** Menú móvil: icono hamburguesa esquina superior derecha; al clicar se expande con textos explícitos. Opcional: control externo (open/onOpenChange) para no solaparse con el menú de casos. */
function MobileNavMenu({
  activeSection,
  onNavigate,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  onOpenButtonClick,
}: {
  activeSection: 'presentacion' | 'sobre-mi' | 'contacto' | 'casos-estudio';
  onNavigate: (section: 'presentacion' | 'sobre-mi' | 'contacto' | 'casos-estudio') => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onOpenButtonClick?: () => void;
}) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = controlledOpen !== undefined && setControlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;
  const setOpen = isControlled ? (value: boolean) => setControlledOpen!(value) : setInternalOpen;

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [open, setOpen]);

  const sections: ('presentacion' | 'sobre-mi' | 'contacto' | 'casos-estudio')[] = ['sobre-mi', 'presentacion', 'casos-estudio', 'contacto'];

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onOpenButtonClick?.();
    setOpen(!open);
  };

  return (
    <div className="relative flex justify-end shrink-0">
      <button
        type="button"
        onClick={handleClick}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú de navegación'}
        aria-expanded={open}
        className="flex flex-col justify-center gap-1.5 w-11 h-11 rounded-[12px] border-2 border-[#5a3e26] border-solid bg-[#f7f2ed] p-2.5 touch-manipulation"
      >
        <span className="block h-0.5 w-full rounded-full bg-[#5a3e26]" />
        <span className="block h-0.5 w-full rounded-full bg-[#5a3e26]" />
        <span className="block h-0.5 w-full rounded-full bg-[#5a3e26]" />
      </button>

      {open && (
        <nav
          className="absolute top-full right-0 mt-2 w-[min(280px,85vw)] rounded-[16px] border-2 border-[#5a3e26] border-dashed bg-[#f7f2ed] shadow-lg py-2 z-[60]"
          aria-label="Navegación principal"
          onClick={(e) => e.stopPropagation()}
        >
          {sections.map((section) => (
            <button
              key={section}
              type="button"
              onClick={() => { onNavigate(section); setOpen(false); }}
              className={`w-full text-left px-4 py-3 font-['Roboto:Regular',sans-serif] text-[15px] font-medium transition-colors flex items-center gap-3 ${
                activeSection === section ? 'bg-[#FAFAFA] text-[#5a3e26]' : 'text-[#5a3e26] hover:bg-[#FAFAFA]'
              }`}
              style={activeSection === section ? { borderLeft: `4px solid ${SECTION_COLORS[section]}` } : undefined}
            >
              <span
                className="w-[18px] h-[18px] shrink-0 border-[3px]"
                style={{
                  borderColor: SECTION_COLORS[section],
                  backgroundColor: activeSection === section ? SECTION_COLORS[section] : 'transparent',
                }}
                aria-hidden
              />
              {SECTION_LABELS[section]}
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}

interface NavigationGridProps {
  activeSection: 'presentacion' | 'sobre-mi' | 'contacto' | 'casos-estudio';
  onNavigate: (section: 'presentacion' | 'sobre-mi' | 'contacto' | 'casos-estudio') => void;
  /** En móvil: true = menú hamburguesa en esquina superior derecha */
  embedInFlow?: boolean;
  /** Contenido opcional a la izquierda del header (ej. menú de casos + texto CASOS DE ESTUDIO) */
  leftContent?: React.ReactNode;
  /** En móvil: true = mostrar switch de idioma en el mismo slot izquierdo que el menú de casos (Sobre mí / Presentación) */
  showLangSwitchInLeftSlot?: boolean;
  /** En móvil embedInFlow: control del menú principal para no solaparse con el menú de casos */
  mainMenuOpen?: boolean;
  setMainMenuOpen?: (open: boolean) => void;
  /** Llamado al abrir el menú principal (para cerrar el menú de casos) */
  onMainMenuButtonClick?: () => void;
}

export function NavigationGrid({
  activeSection,
  onNavigate,
  embedInFlow = false,
  leftContent,
  showLangSwitchInLeftSlot = false,
  mainMenuOpen,
  setMainMenuOpen,
  onMainMenuButtonClick,
}: NavigationGridProps) {
  const [hoveredSection, setHoveredSection] = useState<'presentacion' | 'sobre-mi' | 'contacto' | 'casos-estudio' | null>(null);

  const displaySection = hoveredSection || activeSection;

  if (embedInFlow) {
    // Misma estructura que Casos de estudio: slot izquierdo = leftContent (casos) o switch de idioma (Sobre mí / Presentación)
    const leftSlotContent = leftContent ?? (showLangSwitchInLeftSlot ? (
      <div className="relative flex items-center gap-3 min-w-0 flex-1">
        <LangSwitch inline />
      </div>
    ) : null);
    return (
      <header className="sticky top-0 z-40 w-full flex items-center justify-between gap-2 py-2 px-3 border-b-2 border-[#5a3e26] border-dashed bg-[#f7f2ed] min-h-[52px]">
        <div className="flex items-center min-w-0 flex-1">{leftSlotContent}</div>
        <div className="shrink-0">
          <MobileNavMenu
            activeSection={activeSection}
            onNavigate={onNavigate}
            open={mainMenuOpen}
            onOpenChange={setMainMenuOpen}
            onOpenButtonClick={onMainMenuButtonClick}
          />
        </div>
      </header>
    );
  }

  const wrapperClass = 'fixed top-2 left-2 md:top-4 md:left-4 lg:top-[38px] lg:left-[38px] z-50';

  return (
    <div className={wrapperClass}>
      <div className="w-[140px] h-[170px] md:w-[160px] md:h-[200px] lg:w-[184px] lg:h-[224px]">
        <div className="grid grid-cols-2 gap-2 md:gap-3 lg:gap-[20px]">
          <SimpleNavButton
            onClick={() => onNavigate('sobre-mi')}
            isActive={activeSection === 'sobre-mi'}
            bgColor="#a16f44"
            onHover={() => setHoveredSection('sobre-mi')}
            onLeave={() => setHoveredSection(null)}
            sectionName="Sobre mí"
          />
          <SimpleNavButton
            onClick={() => onNavigate('presentacion')}
            isActive={activeSection === 'presentacion'}
            bgColor="#e8d8c9"
            onHover={() => setHoveredSection('presentacion')}
            onLeave={() => setHoveredSection(null)}
            sectionName="Presentación"
          />
          <SimpleNavButton
            onClick={() => onNavigate('casos-estudio')}
            isActive={activeSection === 'casos-estudio'}
            bgColor="#5a3e26"
            onHover={() => setHoveredSection('casos-estudio')}
            onLeave={() => setHoveredSection(null)}
            sectionName="Casos de estudio"
          />
          <SimpleNavButton
            onClick={() => onNavigate('contacto')}
            isActive={activeSection === 'contacto'}
            bgColor="#caa381"
            onHover={() => setHoveredSection('contacto')}
            onLeave={() => setHoveredSection(null)}
            sectionName="Contacto"
          />
        </div>
        <div className="mt-1 md:mt-2 lg:mt-[8px] w-full h-4 md:h-5 lg:h-[20px] flex items-center justify-center">
          <p className="font-['Roboto:Regular',sans-serif] font-bold text-[#5a3e26] text-[10px] md:text-[11px] lg:text-[12px] text-center uppercase">
            {SECTION_LABELS[displaySection]}
          </p>
        </div>
      </div>
    </div>
  );
}

interface ZoomGridButtonProps {
  isZoomed: boolean;
  onToggleZoom: () => void;
  /** En móvil: integrado en el flujo (no fixed) */
  embedInFlow?: boolean;
}

export function ZoomGridButton({ isZoomed, onToggleZoom, embedInFlow = false }: ZoomGridButtonProps) {
  const wrapperClass = embedInFlow ? 'relative z-50' : 'fixed bottom-[12px] left-2 md:left-4 lg:left-[38px] z-50';
  return (
    <div className={wrapperClass}>
      <button
        onClick={onToggleZoom}
        aria-label={isZoomed ? 'Volver a la sección' : 'Ver todo el lienzo'}
        title={isZoomed ? 'Volver a la sección' : 'Ver todo el lienzo'}
        className="relative w-14 h-14 md:w-16 md:h-16 lg:w-[82px] lg:h-[82px] rounded-[16px] md:rounded-[18px] lg:rounded-[22px] border border-[#666463] border-dashed overflow-visible bg-[#f7f2ed] transition-all hover:bg-[#e8d8c9] group"
      >
        {/* Borde difuminado que se irradia en hover */}
        <div 
          className="absolute -inset-1 rounded-[18px] md:rounded-[20px] lg:rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            boxShadow: '0 0 0 1px rgba(90, 62, 38, 0.2), 0 0 6px 2px rgba(90, 62, 38, 0.12), 0 0 12px 4px rgba(90, 62, 38, 0.06), 0 0 20px 6px rgba(90, 62, 38, 0.03)',
          }}
        />
        {/* Four quadrants representing the sections */}
        {/* Top Left Quadrant */}
        <div className="absolute left-px top-px w-[26px] h-[26px] md:w-[30px] md:h-[30px] lg:w-[38px] lg:h-[38px] z-10">
          <div className="absolute inset-0 border border-[#666463] border-dashed rounded-bl-[5px] md:rounded-bl-[7px] lg:rounded-bl-[10px] rounded-br-[5px] md:rounded-br-[7px] lg:rounded-br-[10px] rounded-tl-[10px] md:rounded-tl-[14px] lg:rounded-tl-[20px] rounded-tr-[5px] md:rounded-tr-[7px] lg:rounded-tr-[10px]" />
        </div>
        {/* Bottom Left Quadrant */}
        <div className="absolute left-[-1px] top-[27px] md:top-[31px] lg:top-[42px] w-[26px] h-[26px] md:w-[30px] md:h-[30px] lg:w-[38px] lg:h-[38px] z-10">
          <div className="absolute border border-[#666463] border-dashed rounded-bl-[10px] md:rounded-bl-[14px] lg:rounded-bl-[20px] rounded-br-[5px] md:rounded-br-[7px] lg:rounded-br-[10px] rounded-tl-[5px] md:rounded-tl-[7px] lg:rounded-tl-[10px] rounded-tr-[5px] md:rounded-tr-[7px] lg:rounded-tr-[10px]" style={{ inset: 'calc(-2.63%) calc(-5.26%) calc(2.63%) calc(5.26%)' }} />
        </div>
        {/* Bottom Right Quadrant */}
        <div className="absolute border border-[#666463] border-dashed rounded-bl-[5px] md:rounded-bl-[7px] lg:rounded-bl-[10px] rounded-br-[10px] md:rounded-br-[14px] lg:rounded-br-[20px] rounded-tl-[5px] md:rounded-tl-[7px] lg:rounded-tl-[10px] rounded-tr-[5px] md:rounded-tr-[7px] lg:rounded-tr-[10px] z-10" style={{ inset: 'calc(51.22% - 1px) calc(2.44% - 1px) calc(2.44% - 1px) calc(51.22% - 1px)' }} />
        {/* Top Right Quadrant */}
        <div className="absolute left-[27px] md:left-[31px] lg:left-[41px] top-px w-[26px] h-[26px] md:w-[30px] md:h-[30px] lg:w-[38px] lg:h-[38px] z-10">
          <div className="absolute inset-0 border border-[#666463] border-dashed rounded-bl-[5px] md:rounded-bl-[7px] lg:rounded-bl-[10px] rounded-br-[5px] md:rounded-br-[7px] lg:rounded-br-[10px] rounded-tl-[5px] md:rounded-tl-[7px] lg:rounded-tl-[10px] rounded-tr-[10px] md:rounded-tr-[14px] lg:rounded-tr-[20px]" />
        </div>
      </button>
    </div>
  );
}