import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ChevronDown, Lightbulb, Users, Palette, TestTube } from 'lucide-react';

// Imágenes del proyecto (orden narrativo correcto)
import imgKoraMockup from '../assets/case1/case1-03b.png'; // Mockup principal (resultado final)
import imgRetoContext from '../assets/case1/case1-04.png'; // El Problema - contexto
import imgUserPersonas from '../assets/case1/case1-13.png'; // Research - User Personas
import imgUserJourneyMap from '../assets/case1/case1-15.png'; // Research - Journey Map
import imgValueProposition from '../assets/case1/case1-18.png'; // Propuesta - Value Proposition
import imgMoSCoW from '../assets/case1/case1-20.png'; // Propuesta - MoSCoW
import imgArquitecturaInfo from '../assets/case1/case1-24.png'; // Arquitectura - IA
import imgDesignSystem from '../assets/case1/case1-28.png'; // Arquitectura - Design System/Colors
import imgPrototype from '../assets/case1/case1-33.png'; // Prototipo final
import imgTesting from '../assets/case1/case1-34.png'; // Testing resultados

// Componente para secciones expandibles (dropdowns)
function DetailSection({ title, children, defaultOpen = false, dark = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean; dark?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const shouldReduceMotion = useReducedMotion();
  
  // Título sin emojis (solo texto)
  const textOnly = title.replace(/^[\p{Emoji}\u200D]+\s*/u, '').trim() || title;
  
  // Colores ajustados para tema oscuro con contraste WCAG AA (4.5:1 mínimo)
  const buttonClass = dark
    ? "flex items-center gap-3 text-white text-base hover:text-[#ffd700] focus:text-[#ffd700] transition-colors group min-h-[44px] focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:ring-offset-2 focus:ring-offset-[#a20769] rounded px-2 -ml-2"
    : "flex items-center gap-3 text-[#2d0097] text-base hover:text-[#420CC0] focus:text-[#420CC0] transition-colors group min-h-[44px] focus:outline-none focus:ring-2 focus:ring-[#420CC0] focus:ring-offset-2 focus:ring-offset-white rounded px-2 -ml-2";
  
  const borderClass = dark ? "border-l-2 border-white/40 pl-5 mt-6" : "border-l-2 border-[#420CC0]/30 pl-5 mt-6";
  
  return (
    <div className={borderClass}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={buttonClass}
        aria-expanded={isOpen}
        aria-label={isOpen ? `Colapsar ${textOnly}` : `Expandir ${textOnly}`}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
          className="shrink-0"
        >
          <ChevronDown size={20} aria-hidden="true" />
        </motion.div>
        <span className="group-hover:underline font-medium text-left">{textOnly}</span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
        className="overflow-hidden"
      >
        <div className={`pt-4 leading-loose text-base ${dark ? 'text-white' : 'text-[#2d0097]'}`}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}

// Badges
function Badge({ children, color = "purple" }: { children: React.ReactNode; color?: "purple" | "pink" | "blue" }) {
  const colors = {
    purple: "bg-purple-600 text-white border-purple-400",
    pink: "bg-pink-600 text-white border-pink-400",
    blue: "bg-blue-600 text-white border-blue-400",
  };
  
  return (
    <span className={`inline-flex px-4 py-2 rounded-full text-sm font-semibold border-2 min-h-[36px] items-center ${colors[color]}`}>
      {children}
    </span>
  );
}

export default function Case1MobileEnhanced() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Efectos parallax (desactivados si el usuario prefiere movimiento reducido)
  const heroY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["0%", "8%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], shouldReduceMotion ? [1, 1] : [1, 0.7]);
  const mockupY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["0%", "-5%"]);

  const animationConfig = {
    initial: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: shouldReduceMotion ? 0 : 0.6 }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      
      {/* Skip to main content link (accesibilidad) */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-white text-[#24007c] px-6 py-3 rounded-lg font-semibold focus:outline-none focus:ring-4 focus:ring-[#420CC0] border-2 border-[#420CC0]"
      >
        Saltar al contenido principal
      </a>

      {/* Hero Section con gradiente de Kora */}
      <motion.section 
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative min-h-screen flex flex-col justify-center px-6 py-16 bg-gradient-to-br from-[#420CC0] via-[#24007c] to-[#1a0059]"
        aria-labelledby="hero-title"
      >
        <div className="max-w-md mx-auto w-full space-y-8">
          <motion.div {...animationConfig}>
            <span className="inline-flex px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-base font-semibold min-h-[44px] items-center w-fit">
              Caso de Estudio · Design Thinking
            </span>
          </motion.div>

          <motion.div
            {...animationConfig}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.2 }}
          >
            <h1 id="hero-title" className="text-7xl font-bold text-white mb-4">
              Kora
            </h1>
            <div className="h-1.5 w-24 bg-gradient-to-r from-[#e91e8c] to-[#ff3399] rounded-full" aria-hidden="true" />
          </motion.div>

          <motion.p
            {...animationConfig}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.4 }}
            className="text-xl text-white leading-relaxed"
          >
            <span className="font-bold">¿Cómo conectar generaciones?</span>
            <br />
            <span className="text-lg">Plataforma de intercambio intergeneracional que revaloriza el conocimiento senior.</span>
          </motion.p>

          <motion.div
            {...animationConfig}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.6 }}
            className="flex flex-wrap gap-3"
          >
            <Badge color="purple">15 días</Badge>
            <Badge color="pink">Design Thinking</Badge>
            <Badge color="blue">Figma</Badge>
          </motion.div>

          {/* Scroll indicator */}
          {!shouldReduceMotion && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex justify-center pt-8"
              aria-hidden="true"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-white"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </motion.div>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Contenido principal con fondo blanco (pb para no quedar bajo la bottom bar) */}
      <div className="bg-white pb-28">
        {/* Mockup principal */}
        <section id="main-content" className="relative py-16 px-6" aria-labelledby="mockup-title">
          <div className="max-w-md mx-auto">
            <h2 id="mockup-title" className="sr-only">Resultado Final del Proyecto</h2>
            <motion.div
              style={{ y: mockupY }}
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#a20769]/10 to-[#420CC0]/10 blur-3xl -z-10" aria-hidden="true" />
              <div className="relative bg-white rounded-3xl p-6 border-2 border-gray-200 shadow-lg">
                <img 
                  src={imgKoraMockup} 
                  alt="Mockup de la aplicación Kora mostrando la interfaz principal con perfiles de usuarios seniors y jóvenes" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* El Problema */}
        <section className="relative py-16 px-6 bg-white" aria-labelledby="problema-title">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            >
              <h2 id="problema-title" className="text-4xl font-bold text-[#2d0097] mb-5">
                El Problema
              </h2>
              
              <p className="text-[#2d0097] text-lg leading-loose mb-8">
                Aislamiento social y soledad no deseada en seniors y jóvenes. Los programas actuales no permiten que los adultos mayores ofrezcan sus conocimientos.
              </p>

              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 mb-4 bg-white shadow-sm">
                <img 
                  src={imgRetoContext} 
                  alt="Infografía mostrando el contexto del reto: aislamiento social en adultos mayores y jóvenes, con estadísticas sobre envejecimiento poblacional" 
                  className="w-full h-auto"
                />
              </div>

              <DetailSection title="📊 Leer más sobre el contexto">
                <p className="mb-4">
                  El envejecimiento poblacional y el aislamiento social son fenómenos globales que afectan especialmente a dos segmentos: adultos mayores y jóvenes hiperconectados.
                </p>
                <p>
                  Los programas existentes se enfocan en la inclusión digital del senior, pero no desarrollan un modelo bidireccional donde ellos puedan aportar valor activamente.
                </p>
              </DetailSection>
            </motion.div>
          </div>
        </section>

        {/* Research */}
        <section className="relative py-16 px-6 bg-white" aria-labelledby="research-title">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-[#e91e8c] p-3 rounded-xl shrink-0" aria-hidden="true">
                  <Users className="text-white" size={28} />
                </div>
                <h2 id="research-title" className="text-4xl font-bold text-[#2d0097]">
                  Research
                </h2>
              </div>

              <ul className="space-y-4 mb-8" role="list">
                <li className="flex items-start gap-4">
                  <div className="w-2.5 h-2.5 bg-[#a20769] rounded-full mt-2.5 shrink-0" aria-hidden="true" />
                  <p className="text-[#2d0097] text-base leading-loose">
                    <span className="font-bold">26 encuestados</span> (seniors, jóvenes, familiares y organizaciones)
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2.5 h-2.5 bg-[#a20769] rounded-full mt-2.5 shrink-0" aria-hidden="true" />
                  <p className="text-[#2d0097] text-base leading-loose">
                    <span className="font-bold">8 entrevistas</span> (6 simuladas con perfiles AI + 2 reales)
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2.5 h-2.5 bg-[#a20769] rounded-full mt-2.5 shrink-0" aria-hidden="true" />
                  <p className="text-[#2d0097] text-base leading-loose">
                    <span className="font-bold">2 User Personas</span> basadas en patrones identificados
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2.5 h-2.5 bg-[#a20769] rounded-full mt-2.5 shrink-0" aria-hidden="true" />
                  <p className="text-[#2d0097] text-base leading-loose">
                    <span className="font-bold">Benchmark</span> de 4 plataformas (2 directas, 2 indirectas)
                  </p>
                </li>
              </ul>

              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 mb-4 bg-white shadow-sm">
                <img 
                  src={imgUserPersonas} 
                  alt="User Personas: María (65 años, profesora jubilada) y Carlos (28 años, diseñador), mostrando sus objetivos, frustraciones y comportamientos" 
                  className="w-full h-auto"
                />
              </div>

              <DetailSection title="🔍 Metodología de investigación">
                <p className="mb-4">
                  <strong>Research Question:</strong> ¿Cómo se construyen vínculos significativos entre adultos mayores y jóvenes en actividades compartidas?
                </p>
                <p className="mb-4">
                  <strong>Investigación secundaria:</strong> Estudios institucionales y análisis de prensa sobre envejecimiento poblacional y aislamiento social.
                </p>
                <p className="mb-4">
                  <strong>Investigación primaria:</strong> 26 encuestas mediante Google Forms distribuidas por redes sociales, cubriendo 4 tipos de usuarios (seniors, jóvenes, familiares/tutores y organizaciones).
                </p>
                <p className="mb-4">
                  <strong>Entrevistas:</strong> 2 entrevistas presenciales (1 joven, 1 senior) complementadas con 6 perfiles generados con IA generativa usando documentación del estudio como input.
                </p>
                <p>
                  <strong>Análisis competitivo:</strong> Benchmark de 4 plataformas (2 competidores directos, 2 indirectos) que permitió identificar oportunidades de diferenciación en el modelo de reciprocidad bidireccional.
                </p>
              </DetailSection>

              {/* Journey Map */}
              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 mt-8 bg-white shadow-sm">
                <img 
                  src={imgUserJourneyMap} 
                  alt="User Journey Map mostrando las etapas de descubrimiento, consideración, uso y fidelización de la plataforma Kora" 
                  className="w-full h-auto"
                />
              </div>

              <DetailSection title="🗺️ Insights del Journey Map">
                <p>
                  Identifiqué puntos de dolor críticos en la fase de descubrimiento (falta de confianza) y en la entrega de valor (necesidad de validación). Esto informó el diseño de un sistema de reputación y onboarding guiado.
                </p>
              </DetailSection>
            </motion.div>
          </div>
        </section>

        {/* Propuesta de Valor */}
        <section className="relative py-16 px-6 bg-white" aria-labelledby="propuesta-title">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-[#e91e8c] p-3 rounded-xl shrink-0" aria-hidden="true">
                  <Lightbulb className="text-white" size={28} />
                </div>
                <h2 id="propuesta-title" className="text-4xl font-bold text-[#2d0097]">
                  Propuesta de Valor
                </h2>
              </div>

              <p className="text-[#2d0097] text-lg leading-loose mb-8">
                Plataforma de <strong className="font-bold text-[#2d0097]">Reciprocidad Solidaria</strong> donde seniors monetizan conocimiento no académico y jóvenes adquieren sabiduría experiencial.
              </p>

              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 mb-4 bg-white shadow-sm">
                <img 
                  src={imgValueProposition} 
                  alt="Value Proposition Canvas de Kora mostrando beneficios para seniors (valorización de experiencia) y jóvenes (acceso a conocimiento único)" 
                  className="w-full h-auto"
                />
              </div>

              <DetailSection title="💡 ¿Por qué este modelo?">
                <p className="mb-4">
                  A diferencia de modelos educativos tradicionales, Kora se basa en la economía del don y el intercambio bidireccional:
                </p>
                <ul className="space-y-3 list-disc list-inside pl-2">
                  <li className="leading-loose"><strong>Para Seniors:</strong> Transforman experiencia en activo productivo, combatiendo aislamiento</li>
                  <li className="leading-loose"><strong>Para Jóvenes:</strong> Acceden a conocimiento único mientras aportan inclusión digital</li>
                </ul>
              </DetailSection>

              {/* MoSCoW */}
              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 mt-8 bg-white shadow-sm">
                <img 
                  src={imgMoSCoW} 
                  alt="Matriz MoSCoW de Kora con funcionalidades Must Have (matching, videollamadas), Should Have (chat), Could Have (gamificación), Won't Have" 
                  className="w-full h-auto"
                />
              </div>

              <DetailSection title="🎯 Priorización de features">
                <p>
                  Utilicé MoSCoW para priorizar funcionalidades. El MVP incluye matching básico, sistema de videollamadas y reputación. Features "Could Have" como gamificación se dejaron para iteraciones futuras basadas en feedback real.
                </p>
              </DetailSection>
            </motion.div>
          </div>
        </section>

        {/* Arquitectura & Diseño */}
        <section className="relative py-16 px-6 bg-white" aria-labelledby="arquitectura-title">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-[#e91e8c] p-3 rounded-xl shrink-0" aria-hidden="true">
                  <Palette className="text-white" size={28} />
                </div>
                <h2 id="arquitectura-title" className="text-4xl font-bold text-[#2d0097]">
                  Arquitectura & Diseño
                </h2>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200 mb-8">
                <h3 className="text-xl font-bold text-[#2d0097] mb-4">Decisiones clave</h3>
                <ul className="space-y-4" role="list">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#a20769] rounded-full mt-2.5 shrink-0" aria-hidden="true" />
                    <span className="text-[#2d0097] text-base leading-loose"><strong>Navegación por tabs</strong> para acceso rápido</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#a20769] rounded-full mt-2.5 shrink-0" aria-hidden="true" />
                    <span className="text-[#2d0097] text-base leading-loose"><strong>Onboarding progresivo</strong> reduce fricción</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#a20769] rounded-full mt-2.5 shrink-0" aria-hidden="true" />
                    <span className="text-[#2d0097] text-base leading-loose"><strong>Perfiles duales</strong> (senior/joven)</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 mb-4 bg-white shadow-sm">
                <img 
                  src={imgArquitecturaInfo} 
                  alt="Arquitectura de información de Kora mostrando estructura de navegación: Home, Explorar, Mis Sesiones y Perfil" 
                  className="w-full h-auto"
                />
              </div>

              <DetailSection title="🏗️ Proceso de Arquitectura de Información">
                <p className="mb-4">
                  Realicé <strong>Card Sorting</strong> con 8 usuarios para validar la agrupación de funcionalidades. Los resultados mostraron que los usuarios esperaban encontrar "Mis Sesiones" y "Mensajes" en el mismo nivel jerárquico.
                </p>
                <p>
                  La estructura final prioriza: Home (discovery) → Explorar (search) → Mis Sesiones (engagement) → Perfil (settings).
                </p>
              </DetailSection>

              {/* Design System */}
              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 mt-8 bg-white shadow-sm">
                <img 
                  src={imgDesignSystem} 
                  alt="Sistema de diseño de Kora mostrando paleta de colores principales: #420CC0, #A20769, #8B08AF, #FFF9DB" 
                  className="w-full h-auto"
                />
              </div>

              <DetailSection title="🎨 Decisiones del Design System">
                <p className="mb-4">
                  <strong>Paleta de colores:</strong> Combinación de morados y rosas para transmitir innovación y calidez. Colores principales: <strong>#420CC0</strong> (morado), <strong>#A20769</strong> (rosa), <strong>#8B08AF</strong> (magenta), y <strong>#FFF9DB</strong> (crema cálido).
                </p>
                <p className="mb-4">
                  <strong>Tipografía:</strong> Roboto por su alta legibilidad en pantallas y soporte para tamaños grandes (accesibilidad para seniors).
                </p>
                <p>
                  <strong>Accesibilidad:</strong> Todos los textos cumplen WCAG 2.2 Level AA con ratio de contraste mínimo 4.5:1. Áreas de toque de 44x44px mínimo.
                </p>
              </DetailSection>
            </motion.div>
          </div>
        </section>

        {/* Prototipo Final */}
        <section className="relative py-16 px-6 bg-gradient-to-br from-purple-50 to-pink-50" aria-labelledby="prototipo-title">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
            >
              <div className="text-center mb-10">
                <span className="inline-flex px-5 py-2.5 bg-[#ffd700] rounded-full text-[#1a0059] text-base font-bold mb-5 min-h-[44px] items-center w-fit mx-auto shadow-md">
                  ⭐ Resultado Final
                </span>
                <h2 id="prototipo-title" className="text-5xl font-bold text-[#2d0097] mb-5">
                  Prototipo Interactivo
                </h2>
                <p className="text-[#2d0097] text-lg leading-loose">
                  High-fidelity prototype testeado con usuarios reales
                </p>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#a20769]/10 to-[#420CC0]/10 blur-3xl -z-10" aria-hidden="true" />
                <div className="relative bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-xl">
                  <img 
                    src={imgPrototype} 
                    alt="Prototipo de alta fidelidad de Kora mostrando pantallas principales: onboarding, exploración de perfiles, sistema de matching, y gestión de sesiones" 
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white rounded-2xl p-5 border-2 border-gray-200 text-center shadow-sm">
                  <div className="text-4xl font-bold text-[#420CC0] mb-2">24</div>
                  <div className="text-[#2d0097] text-base">Pantallas</div>
                </div>
                <div className="bg-white rounded-2xl p-5 border-2 border-gray-200 text-center shadow-sm">
                  <div className="text-4xl font-bold text-[#420CC0] mb-2">5</div>
                  <div className="text-[#2d0097] text-base">Flujos principales</div>
                </div>
              </div>

              <DetailSection title="⚙️ Especificaciones técnicas">
                <p className="mb-4">
                  <strong>Herramienta:</strong> Figma con Auto Layout, Variables y Components reutilizables.
                </p>
                <p className="mb-4">
                  <strong>Interacciones:</strong> Transiciones con Smart Animate, overlays para modales, y estados hover/active para feedback inmediato.
                </p>
                <p>
                  <strong>Responsive:</strong> Diseñado para Mobile (440×956), Tablet (834×1194) y Desktop (1280×832).
                </p>
              </DetailSection>
            </motion.div>
          </div>
        </section>

        {/* Testing & Resultados */}
        <section className="relative py-16 px-6 bg-white" aria-labelledby="testing-title">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-[#e91e8c] p-3 rounded-xl shrink-0" aria-hidden="true">
                  <TestTube className="text-white" size={28} />
                </div>
                <h2 id="testing-title" className="text-4xl font-bold text-[#2d0097]">
                  Testing & Validación
                </h2>
              </div>

              <div className="bg-gradient-to-br from-[#c91f82] to-[#a20769] rounded-2xl p-7 border-2 border-[#a20769] mb-8 shadow-lg">
                <div className="space-y-6">
                  <div>
                    <div className="text-white text-base mb-2">Pruebas de usabilidad</div>
                    <div className="flex items-end gap-3">
                      <span className="text-5xl font-bold text-white">2</span>
                      <span className="text-white text-lg font-semibold mb-1">participantes</span>
                    </div>
                  </div>
                  <div className="h-0.5 bg-white/30" aria-hidden="true" />
                  <div>
                    <div className="text-white text-base mb-2">Modalidad</div>
                    <div className="text-lg font-bold text-white">1 presencial + 1 remoto</div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 mb-4 bg-white shadow-sm">
                <img 
                  src={imgTesting} 
                  alt="Resultados de testing de usabilidad mostrando métricas de éxito en tareas, tiempo de completación y satisfacción de usuarios" 
                  className="w-full h-auto"
                />
              </div>

              <DetailSection title="📈 Observaciones del testing">
                <p className="mb-4">
                  Las pruebas se realizaron con el prototipo en desarrollo, lo que permitió identificar deficiencias antes de avanzar significativamente.
                </p>
                <p className="mb-4">
                  <strong>Hallazgos clave:</strong>
                </p>
                <ul className="space-y-3 list-disc list-inside pl-2 mb-5">
                  <li className="leading-loose">Detectamos omisiones en algunas interacciones del prototipo</li>
                  <li className="leading-loose">Se analizó si las interacciones cumplían con lo esperado</li>
                  <li className="leading-loose">El feedback fue valioso para corregir antes del avance final</li>
                </ul>
                <p className="mb-3">
                  <strong>Contexto:</strong>
                </p>
                <p>
                  El testing se realizó en fase temprana del prototipo, por lo que sirvió principalmente como validación iterativa del diseño en desarrollo.
                </p>
              </DetailSection>
            </motion.div>
          </div>
        </section>

        {/* Impacto y Cierre */}
        <section className="relative py-16 px-6 pb-24 bg-gradient-to-br from-purple-50 to-pink-50" aria-labelledby="impacto-title">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
              className="bg-gradient-to-br from-[#c91f82] to-[#a20769] rounded-3xl p-8 border-2 border-[#a20769] shadow-2xl"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-white/30 rounded-full p-2.5 shrink-0" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h2 id="impacto-title" className="text-3xl font-bold text-white">
                  El Impacto
                </h2>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-7 border-2 border-white/30 mb-8">
                <p className="text-white text-lg leading-loose mb-4">
                  <span className="font-bold text-[#ffd700]">Insight clave:</span> Los adultos mayores pueden transformar su conocimiento no académico en un <strong className="font-bold">activo productivo y monetizable</strong>.
                </p>
                <p className="text-white leading-loose text-base">
                  Esto combate el aislamiento social mientras aporta valor intergeneracional medible.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#ffd700]">15</div>
                  <div className="text-white text-sm leading-loose">días</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#ffd700]">26</div>
                  <div className="text-white text-sm leading-loose">encuestas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#ffd700]">24</div>
                  <div className="text-white text-sm leading-loose">screens</div>
                </div>
              </div>

              <div className="pt-6 border-t-2 border-white/30">
                <div className="flex items-center gap-3 text-white text-base">
                  <span className="inline-block w-2.5 h-2.5 bg-[#ffd700] rounded-full" aria-hidden="true"></span>
                  Reciprocidad Solidaria · Conexión Intergeneracional
                </div>
              </div>

              <DetailSection title="💭 Reflexiones y aprendizajes" defaultOpen={false} dark={true}>
                <p className="mb-4">
                  Este proyecto me enseñó la importancia de diseñar con empatía para usuarios en los extremos del espectro digital. Equilibrar las necesidades de seniors (accesibilidad, simplicidad) con las de jóvenes (rapidez, funcionalidad) fue el mayor desafío.
                </p>
                <p className="mb-4">
                  <strong>Próximos pasos:</strong> Me gustaría iterar con un piloto real para validar la hipótesis de monetización y medir el impacto social a largo plazo.
                </p>
              </DetailSection>
            </motion.div>

            {/* Footer */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.3 }}
              className="mt-10 text-center"
            >
              <p className="text-[#2d0097] text-base mb-4 leading-loose">
                Proyecto Final de Bootcamp · Design Thinking · 2024
              </p>
              <div className="flex justify-center gap-3 flex-wrap">
                <Badge color="purple">Product Design</Badge>
                <Badge color="pink">UX Research</Badge>
                <Badge color="blue">UI Design</Badge>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

    </div>
  );
}
