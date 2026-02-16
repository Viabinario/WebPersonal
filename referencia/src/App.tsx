import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { ChevronDown, Lightbulb, Users, Palette, TestTube } from 'lucide-react';
import imgImageKoraMockup from "figma:asset/87b15f8de8f1717608c42b1ffedb2e51e2b744e9.png";
import imgImageRetoContext from "figma:asset/15d4206477f326d58f8ce141222ccf93c34eaa63.png";
import imgImageBenchmarkAnalysis from "figma:asset/c25e4b6d594805b2f57ce6b09d81c2d3a35f28fe.png";
import imgImageUserPersonas from "figma:asset/240c2beb0e2aaad83905de3198e32fd8aa02f821.png";
import imgImageUserJourneyMap from "figma:asset/5dce95db09187f33c12e81e89b9d1f43f8142990.png";
import imgImageValuePropositionKora from "figma:asset/42232f63150389ad16f4b3882e980dc5c7310fe7.png";
import imgImageMoSCoWKora from "figma:asset/3ad47dcca67b4d5c729c738310cbe59192f3b4ca.png";
import imgImageArquitecturaDeInformacion from "figma:asset/8c072013c44fc2067b0f90be76e3217d1e22a809.png";
import imgImageVisualDesign from "figma:asset/3890ab73ef56dfb58a687dd9e63210efbd0dcb13.png";
import imgImageStyleColors from "figma:asset/189230297f564719c1984ba7327d259cc9644e1e.png";
import imgImagePrototype from "figma:asset/a15265dd33cc274a72d7fc6f9090e5f2fc49aa5c.png";
import imgImageTesting from "figma:asset/d8cfe4b75bb5ea536e017a0a50a82441062127c7.png";
import imgHombreMockup1 from "figma:asset/b382d9d55a8ca5f79da8007dd6bd1ecff6f05e95.png";

// WCAG 2.2: Componente para detalles expandibles con accesibilidad mejorada
function DetailSection({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <div className="border-l-2 border-[#4300e2]/30 pl-5 mt-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 text-[#2d0097] text-base hover:text-[#4300e2] focus:text-[#4300e2] transition-colors group min-h-[44px] focus:outline-none focus:ring-2 focus:ring-[#4300e2] focus:ring-offset-2 focus:ring-offset-white rounded px-2 -ml-2"
        aria-expanded={isOpen}
        aria-label={isOpen ? `Colapsar ${title}` : `Expandir ${title}`}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
          className="shrink-0"
        >
          <ChevronDown size={20} aria-hidden="true" />
        </motion.div>
        <span className="group-hover:underline font-medium text-left">{title}</span>
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
        <div className="pt-4 text-[#2d0097] leading-loose text-base">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

// WCAG 2.2: Badges con contraste mejorado y tamaño de toque adecuado
function Badge({ children, color = "purple" }: { children: React.ReactNode; color?: string }) {
  const colors = {
    purple: "bg-purple-600 text-white border-purple-400",
    pink: "bg-pink-600 text-white border-pink-400",
    blue: "bg-blue-600 text-white border-blue-400",
  };
  
  return (
    <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold border-2 min-h-[36px] flex items-center ${colors[color as keyof typeof colors]}`}>
      {children}
    </span>
  );
}

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // WCAG 2.2: Efectos parallax desactivados si el usuario prefiere movimiento reducido
  const heroY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["0%", "8%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], shouldReduceMotion ? [1, 1] : [1, 0.7]);
  const mockupY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["0%", "-5%"]);

  // Configuración de animaciones respetando prefers-reduced-motion
  const animationConfig = {
    initial: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: shouldReduceMotion ? 0 : 0.6 }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      
      {/* WCAG 2.2: Skip to main content link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-white text-[#24007c] px-6 py-3 rounded-lg font-semibold focus:outline-none focus:ring-4 focus:ring-[#4300e2] border-2 border-[#4300e2]"
      >
        Saltar al contenido principal
      </a>

      {/* CAPA 1: Hero Section con gradiente azul - SE MANTIENE EN EL TOP */}
      <motion.section 
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative min-h-screen flex flex-col justify-center px-6 py-16 bg-gradient-to-br from-[#4300e2] via-[#24007c] to-[#1a0059]"
        aria-labelledby="hero-title"
      >
        <div className="max-w-md mx-auto w-full space-y-8">
          <motion.div {...animationConfig}>
            <span className="inline-block px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-base font-semibold min-h-[44px] flex items-center w-fit">
              Caso de Estudio · Design Thinking
            </span>
          </motion.div>

          {/* CAPA 1: Título con contraste WCAG AAA */}
          <motion.div
            {...animationConfig}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.2 }}
          >
            <h1 id="hero-title" className="text-7xl font-bold text-white mb-4">
              Kora
            </h1>
            <div className="h-1.5 w-24 bg-gradient-to-r from-[#e91e8c] to-[#ff3399] rounded-full" aria-hidden="true" />
          </motion.div>

          {/* CAPA 1: Descripción con contraste mejorado */}
          <motion.p
            {...animationConfig}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.4 }}
            className="text-xl text-white leading-relaxed"
          >
            <span className="font-bold">¿Cómo conectar generaciones?</span>
            <br />
            <span className="text-lg">Plataforma de intercambio intergeneracional que revaloriza el conocimiento senior.</span>
          </motion.p>

          {/* CAPA 2: Badges con contraste mejorado */}
          <motion.div
            {...animationConfig}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.6 }}
            className="flex flex-wrap gap-3"
          >
            <Badge color="purple">15 días</Badge>
            <Badge color="pink">Design Thinking</Badge>
            <Badge color="blue">Figma</Badge>
          </motion.div>

          {/* Scroll indicator con aria-hidden */}
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

      {/* RESTO DEL CONTENIDO: FONDO BLANCO */}
      <div className="bg-white">
        {/* CAPA 1: Mockup principal con fondo blanco */}
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
              <div className="absolute inset-0 bg-gradient-to-r from-[#a20769]/10 to-[#4300e2]/10 blur-3xl -z-10" aria-hidden="true" />
              <div className="relative bg-white rounded-3xl p-6 border-2 border-gray-200 shadow-lg">
                <img 
                  src={imgImageKoraMockup} 
                  alt="Mockup de la aplicación Kora mostrando la interfaz principal con perfiles de usuarios seniors y jóvenes" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* CAPA 1 + 2: El Problema */}
        <section className="relative py-16 px-6 bg-white" aria-labelledby="problema-title">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            >
              {/* CAPA 1: Título con contraste WCAG AAA sobre blanco */}
              <h2 id="problema-title" className="text-4xl font-bold text-[#2d0097] mb-5">
                El Problema
              </h2>
              
              {/* CAPA 2: Texto con line-height y tamaño adecuados */}
              <p className="text-[#2d0097] text-lg leading-loose mb-8">
                Aislamiento social y soledad no deseada en seniors y jóvenes. Los programas actuales no permiten que los adultos mayores ofrezcan sus conocimientos.
              </p>

              {/* CAPA 1: Imagen con fondo blanco */}
              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 mb-4 bg-white shadow-sm">
                <img 
                  src={imgImageRetoContext} 
                  alt="Infografía mostrando el contexto del reto: aislamiento social en adultos mayores y jóvenes, con estadísticas sobre envejecimiento poblacional" 
                  className="w-full h-auto"
                />
              </div>

              {/* CAPA 3: Detalles accesibles */}
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

        {/* CAPA 1: Research Section */}
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

              {/* CAPA 2: Lista con contraste adecuado y espaciado */}
              <ul className="space-y-4 mb-8" role="list">
                <li className="flex items-start gap-4">
                  <div className="w-2.5 h-2.5 bg-[#a20769] rounded-full mt-2.5 shrink-0" aria-hidden="true" />
                  <p className="text-[#2d0097] text-base leading-loose">
                    <span className="font-bold">15 encuestas</span> a seniors y jóvenes
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2.5 h-2.5 bg-[#a20769] rounded-full mt-2.5 shrink-0" aria-hidden="true" />
                  <p className="text-[#2d0097] text-base leading-loose">
                    <span className="font-bold">2 User Personas</span> basadas en patrones reales
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2.5 h-2.5 bg-[#a20769] rounded-full mt-2.5 shrink-0" aria-hidden="true" />
                  <p className="text-[#2d0097] text-base leading-loose">
                    <span className="font-bold">Benchmark</span> de 5 plataformas competidoras
                  </p>
                </li>
              </ul>

              {/* CAPA 1: Imagen con fondo blanco */}
              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 mb-4 bg-white shadow-sm">
                <img 
                  src={imgImageUserPersonas} 
                  alt="User Personas: María (65 años, profesora jubilada) y Carlos (28 años, diseñador), mostrando sus objetivos, frustraciones y comportamientos" 
                  className="w-full h-auto"
                />
              </div>

              {/* CAPA 3: Metodología detallada */}
              <DetailSection title="🔍 Metodología de investigación">
                <p className="mb-4">
                  <strong>Research Question:</strong> ¿Cómo se construyen vínculos significativos entre adultos mayores y jóvenes en actividades compartidas?
                </p>
                <p className="mb-4">
                  Apliqué Design Thinking iniciando con investigación secundaria (estudios institucionales y prensa) seguido de investigación primaria con encuestas estructuradas.
                </p>
                <p>
                  El análisis DAFO y benchmark de competencia permitió identificar oportunidades de diferenciación en el modelo de reciprocidad bidireccional.
                </p>
              </DetailSection>

              {/* CAPA 1: Journey Map */}
              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 mt-8 bg-white shadow-sm">
                <img 
                  src={imgImageUserJourneyMap} 
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

        {/* CAPA 1: Ideación - Value Proposition */}
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

              {/* CAPA 2: Texto con énfasis accesible */}
              <p className="text-[#2d0097] text-lg leading-loose mb-8">
                Plataforma de <strong className="font-bold text-[#2d0097]">Reciprocidad Solidaria</strong> donde seniors monetizan conocimiento no académico y jóvenes adquieren sabiduría experiencial.
              </p>

              {/* CAPA 1: Value Proposition Canvas */}
              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 mb-4 bg-white shadow-sm">
                <img 
                  src={imgImageValuePropositionKora} 
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

              {/* CAPA 1: MoSCoW */}
              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 mt-8 bg-white shadow-sm">
                <img 
                  src={imgImageMoSCoWKora} 
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

        {/* CAPA 1: Arquitectura de Información */}
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

              {/* CAPA 2: Card con contraste mejorado sobre blanco */}
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

              {/* CAPA 1: Arquitectura de Información */}
              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 mb-4 bg-white shadow-sm">
                <img 
                  src={imgImageArquitecturaDeInformacion} 
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

              {/* CAPA 1: Design System */}
              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 mt-8 bg-white shadow-sm">
                <img 
                  src={imgImageStyleColors} 
                  alt="Sistema de diseño de Kora mostrando paleta de colores: morado principal (#4300e2), rosa secundario (#a20769), y gradientes" 
                  className="w-full h-auto"
                />
              </div>

              <DetailSection title="🎨 Decisiones del Design System">
                <p className="mb-4">
                  <strong>Paleta de colores:</strong> Gradientes morado-rosa para transmitir innovación y calidez. El morado (#4300e2) representa sabiduría (senior) y el rosa (#a20769) energía (juventud).
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

        {/* CAPA 1: Prototipo Final con fondo destacado */}
        <section className="relative py-16 px-6 bg-gradient-to-br from-purple-50 to-pink-50" aria-labelledby="prototipo-title">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
            >
              {/* CAPA 1: Título destacado con contraste AAA */}
              <div className="text-center mb-10">
                <span className="inline-block px-5 py-2.5 bg-[#ffd700] rounded-full text-[#1a0059] text-base font-bold mb-5 min-h-[44px] flex items-center w-fit mx-auto shadow-md">
                  ⭐ Resultado Final
                </span>
                <h2 id="prototipo-title" className="text-5xl font-bold text-[#2d0097] mb-5">
                  Prototipo Interactivo
                </h2>
                <p className="text-[#2d0097] text-lg leading-loose">
                  High-fidelity prototype testeado con usuarios reales
                </p>
              </div>

              {/* CAPA 1: Imagen del prototipo con fondo blanco */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#a20769]/10 to-[#4300e2]/10 blur-3xl -z-10" aria-hidden="true" />
                <div className="relative bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-xl">
                  <img 
                    src={imgImagePrototype} 
                    alt="Prototipo de alta fidelidad de Kora mostrando pantallas principales: onboarding, exploración de perfiles, sistema de matching, y gestión de sesiones" 
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>

              {/* CAPA 2: Métricas con contraste WCAG AAA */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white rounded-2xl p-5 border-2 border-gray-200 text-center shadow-sm">
                  <div className="text-4xl font-bold text-[#4300e2] mb-2">24</div>
                  <div className="text-[#2d0097] text-base">Pantallas</div>
                </div>
                <div className="bg-white rounded-2xl p-5 border-2 border-gray-200 text-center shadow-sm">
                  <div className="text-4xl font-bold text-[#4300e2] mb-2">5</div>
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
                  <strong>Responsive:</strong> Diseño mobile-first con breakpoints para tablet (768px) y desktop (1024px).
                </p>
              </DetailSection>
            </motion.div>
          </div>
        </section>

        {/* CAPA 1: Testing & Resultados */}
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

              {/* CAPA 2: Resultados con contraste mejorado */}
              <div className="bg-gradient-to-br from-[#c91f82] to-[#a20769] rounded-2xl p-7 border-2 border-[#a20769] mb-8 shadow-lg">
                <div className="space-y-6">
                  <div>
                    <div className="text-white text-base mb-2">Tasa de éxito en tareas</div>
                    <div className="flex items-end gap-3">
                      <span className="text-5xl font-bold text-white">92%</span>
                      <span className="text-[#ffd700] text-lg font-semibold mb-1">↑ Excelente</span>
                    </div>
                  </div>
                  <div className="h-0.5 bg-white/30" aria-hidden="true" />
                  <div>
                    <div className="text-white text-base mb-2">Usuarios testeados</div>
                    <div className="text-3xl font-bold text-white">6 participantes</div>
                  </div>
                </div>
              </div>

              {/* CAPA 1: Imagen de testing con fondo blanco */}
              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 mb-4 bg-white shadow-sm">
                <img 
                  src={imgImageTesting} 
                  alt="Resultados de testing de usabilidad mostrando métricas de éxito en tareas, tiempo de completación y satisfacción de usuarios" 
                  className="w-full h-auto"
                />
              </div>

              <DetailSection title="📈 Insights del testing">
                <p className="mb-4">
                  <strong>Hallazgos positivos:</strong>
                </p>
                <ul className="space-y-3 list-disc list-inside pl-2 mb-5">
                  <li className="leading-loose">El flujo de búsqueda y filtrado fue intuitivo para el 100% de usuarios</li>
                  <li className="leading-loose">El sistema de reputación generó confianza inmediata</li>
                  <li className="leading-loose">La navegación por tabs fue preferida sobre menú hamburguesa</li>
                </ul>
                <p className="mb-3">
                  <strong>Mejoras implementadas:</strong>
                </p>
                <ul className="space-y-3 list-disc list-inside pl-2">
                  <li className="leading-loose">Aumenté el tamaño de botones primarios a 48px (accesibilidad)</li>
                  <li className="leading-loose">Agregué confirmación antes de agendar sesión (prevenir errores)</li>
                  <li className="leading-loose">Simplifiqué el onboarding de 5 a 3 pasos (reducir fricción)</li>
                </ul>
              </DetailSection>
            </motion.div>
          </div>
        </section>

        {/* CAPA 1: Impacto y Cierre con fondo destacado */}
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
              
              {/* CAPA 2: Hallazgo con contraste AAA */}
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-7 border-2 border-white/30 mb-8">
                <p className="text-white text-lg leading-loose mb-4">
                  <span className="font-bold text-[#ffd700]">Insight clave:</span> Los adultos mayores pueden transformar su conocimiento no académico en un <strong className="font-bold">activo productivo y monetizable</strong>.
                </p>
                <p className="text-white leading-loose text-base">
                  Esto combate el aislamiento social mientras aporta valor intergeneracional medible.
                </p>
              </div>

              {/* CAPA 2: Métricas finales */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#ffd700]">15</div>
                  <div className="text-white text-sm leading-loose">días</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#ffd700]">92%</div>
                  <div className="text-white text-sm leading-loose">éxito</div>
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

              <DetailSection title="💭 Reflexiones y aprendizajes" defaultOpen={false}>
                <p className="mb-4 text-white">
                  Este proyecto me enseñó la importancia de diseñar con empatía para usuarios en los extremos del espectro digital. Equilibrar las necesidades de seniors (accesibilidad, simplicidad) con las de jóvenes (rapidez, funcionalidad) fue el mayor desafío.
                </p>
                <p className="mb-4 text-white">
                  <strong>Próximos pasos:</strong> Me gustaría iterar con un piloto real para validar la hipótesis de monetización y medir el impacto social a largo plazo.
                </p>
              </DetailSection>
            </motion.div>

            {/* CAPA 1: Footer */}
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
