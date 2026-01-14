
interface SobreMiSectionProps {
  isZoomed?: boolean;
  onNavigate?: (section: 'presentacion' | 'sobre-mi' | 'contacto' | 'casos-estudio') => void;
  activeSection?: 'presentacion' | 'sobre-mi' | 'contacto' | 'casos-estudio';
}

export function SobreMiSection({ isZoomed = false, onNavigate }: SobreMiSectionProps) {
  const handleClick = () => {
    if (isZoomed && onNavigate) {
      onNavigate('sobre-mi');
    }
  };

  return (
    <div className="relative w-full h-full bg-[#f7f2ed] flex items-center justify-center p-4 md:p-8 lg:p-0">
      {/* Text Box - Right side - CLICKABLE */}
      <div 
        className={`w-full max-w-[388px] lg:absolute lg:top-[38px] lg:right-[38px] ${isZoomed ? 'cursor-pointer hover:scale-105 transition-transform duration-300' : ''}`}
        onClick={handleClick}
      >
        <div className="w-full min-h-[400px] max-h-[584px] lg:h-[584px] bg-[#e8d8c9] rounded-[22px] border-2 border-[#5a3e26] border-dashed shadow-[25px_25px_10px_0px_rgba(0,0,0,0),16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)]">
          <div className="p-6 md:p-8 lg:p-[48px] lg:px-[32px] overflow-auto h-full">
            <p className="font-['Roboto:Regular',sans-serif] text-sm md:text-base lg:text-[14px] text-black text-justify leading-[1.2]">
              Hola, soy Francisco Sánchez, arquitecto de profesión con una experiencia laboral de más de 14 años, 
              diseñando y gestionando proyectos de edificación de diversa tipología.
              <br /><br />
              Mi camino hacia el UX/UI surge desde mis primeros años de universidad, interesándome en el mundo digital 
              a través del diseño de sitios web, apreciándolos como experiencias habitables digitales.
              <br /><br />
              Posteriormente, al especializarme en BIM, pude darle continuidad a esta inquietud de conocimiento y creatividad, 
              abordando proyectos con una mayor complejidad en la gestión digital de la información.
              <br /><br />
              Este cambio de rumbo aparente, es parte sustancial de mi búsqueda profesional, ahora en una fase de consolidar 
              mi interés en la creación de productos digitales, donde quiero volcar mis años de madurez, descubrimientos de 
              trabajar con muchos equipos y aprendizajes que nunca acaban y siempre suman.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}