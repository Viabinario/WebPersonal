import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ChevronDown, Users, Lightbulb, Palette, Target } from 'lucide-react';

// Imágenes Case3 mobile: nomenclatura case3-mobile-<descripción>.png
import imgCase3MMockup from '../assets/case3-mobile/case3-mobile-mockup.png';
import imgCase3MResearchZoom from '../assets/case3-mobile/case3-mobile-research-zoom.png';
import imgCase3MDobleDiamante from '../assets/case3-mobile/case3-mobile-doble-diamante.png';
import imgCase3MBuyerPersona from '../assets/case3-mobile/case3-mobile-buyer-persona.png';
import imgCase3MEmpathyMap from '../assets/case3-mobile/case3-mobile-empathy-map.png';
import imgCase3MBusinessModel from '../assets/case3-mobile/case3-mobile-business-model.png';
import imgCase3MValueProposition from '../assets/case3-mobile/case3-mobile-value-proposition.png';
import imgCase3MArquitectura from '../assets/case3-mobile/case3-mobile-arquitectura.png';
import imgCase3MHome from '../assets/case3-mobile/case3-mobile-home.png';
import imgCase3MDetallePropiedad from '../assets/case3-mobile/case3-mobile-detalle-propiedad.png';
import imgCase3MBusqueda from '../assets/case3-mobile/case3-mobile-busqueda.png';

function DetailSection({
  title,
  children,
  defaultOpen = false,
  theme = 'light',
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  theme?: 'light' | 'dark';
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const shouldReduceMotion = useReducedMotion();

  const colors =
    theme === 'dark'
      ? {
          border: 'border-white/40',
          text: 'text-white',
          hover: 'hover:text-white/90 focus:text-white/90',
          ring: 'focus:ring-white/50',
        }
      : {
          border: 'border-[#005459]',
          text: 'text-[#005459]',
          hover: 'hover:text-[#006571] focus:text-[#006571]',
          ring: 'focus:ring-[#006571]',
        };

  return (
    <div className={`border-l-2 ${colors.border} pl-5 mt-6`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-3 ${colors.text} text-base ${colors.hover} transition-colors group min-h-[44px] focus:outline-none focus:ring-2 ${colors.ring} focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 -ml-2`}
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
        <span className="group-hover:underline font-semibold text-left">{title}</span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
        className="overflow-hidden"
      >
        <div className={`pt-4 ${colors.text} leading-loose text-base`}>{children}</div>
      </motion.div>
    </div>
  );
}

function Badge({
  children,
  color = 'teal',
}: {
  children: React.ReactNode;
  color?: string;
}) {
  const colors = {
    teal: 'bg-[#003a3e] text-white border-[#002d31]',
    yellow: 'bg-[#9c9a57] text-white border-[#7a7845]',
    dark: 'bg-[#1a3336] text-white border-[#0f2022]',
  };

  return (
    <span
      className={`inline-flex px-4 py-2 rounded-full text-sm font-semibold border-2 min-h-[36px] items-center ${colors[color as keyof typeof colors]}`}
    >
      {children}
    </span>
  );
}

export default function Case3MobileEnhanced() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ['0%', '0%'] : ['0%', '8%']
  );
  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.3],
    shouldReduceMotion ? [1, 1] : [1, 0.7]
  );
  const mockupY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ['0%', '0%'] : ['0%', '-5%']
  );

  const animationConfig = {
    initial: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: shouldReduceMotion ? 0 : 0.6 },
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-white text-[#005459] px-6 py-3 rounded-lg font-bold focus:outline-none focus:ring-4 focus:ring-[#006571] border-2 border-[#006571]"
      >
        Saltar al contenido principal
      </a>

      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative min-h-screen flex flex-col justify-center px-6 py-16 bg-gradient-to-b from-[#006571] to-[#b8b56a]"
        aria-labelledby="hero-title"
      >
        <div className="max-w-md mx-auto w-full space-y-8">
          <motion.div {...animationConfig}>
            <span className="inline-flex px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-base font-bold min-h-[44px] items-center w-fit border-2 border-white/40">
              Caso de Estudio · Design Thinking
            </span>
          </motion.div>

          <motion.div
            {...animationConfig}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.2,
            }}
          >
            <h1
              id="hero-title"
              className="text-7xl font-bold text-white mb-4 font-['Poppins',sans-serif]"
            >
              Mingo!
            </h1>
            <div
              className="h-1.5 w-24 bg-gradient-to-r from-[#1a3336] to-[#003a3e] rounded-full"
              aria-hidden="true"
            />
          </motion.div>

          <motion.p
            {...animationConfig}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.4,
            }}
            className="text-xl text-white leading-relaxed"
          >
            <span className="font-bold">Alquiler flexible sin complicaciones</span>
            <br />
            <span className="text-lg">
              App para gestionar alquileres temporales con servicios integrados. Diseñada para
              nómadas digitales y profesionales en movilidad.
            </span>
          </motion.p>

          <motion.div
            {...animationConfig}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.6,
            }}
            className="flex flex-wrap gap-3"
          >
            <Badge color="teal">15 días</Badge>
            <Badge color="yellow">Design Thinking</Badge>
            <Badge color="dark">Trabajo Individual</Badge>
          </motion.div>

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
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </motion.div>
            </motion.div>
          )}
        </div>
      </motion.section>

      <div className="bg-white">
        <section
          id="main-content"
          className="relative py-16 px-6"
          aria-labelledby="mockup-title"
        >
          <div className="max-w-md mx-auto">
            <h2 id="mockup-title" className="sr-only">
              Resultado Final del Proyecto
            </h2>
            <motion.div
              style={{ y: mockupY }}
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
              className="relative"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-[#006571]/10 to-[#b8b56a]/10 blur-3xl -z-10"
                aria-hidden="true"
              />
              <div className="relative bg-white rounded-3xl p-6 border-2 border-gray-200 shadow-lg">
                <img
                  src={imgCase3MMockup}
                  alt="Mockup de la aplicación Mingo! mostrando pantallas de búsqueda de alojamiento, servicios integrados y perfil de usuario"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section
          className="relative py-16 px-6 bg-white"
          aria-labelledby="problema-title"
        >
          <div className="max-w-md mx-auto">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            >
              <h2
                id="problema-title"
                className="text-4xl font-bold text-[#004d52] mb-5 font-['Poppins',sans-serif]"
              >
                El Reto
              </h2>

              <p className="text-[#005459] text-lg leading-loose mb-8">
                <strong className="font-bold">Diseñar una app de alquiler flexible</strong> que
                simplifique el proceso de encontrar y gestionar alojamientos temporales para
                profesionales en movilidad constante.
              </p>

              <div className="bg-gradient-to-br from-teal-50 to-yellow-50 rounded-2xl p-6 mb-4 border-2 border-gray-200">
                <h3 className="text-xl font-bold text-[#004d52] mb-3 font-['Poppins',sans-serif]">
                  Usuario objetivo
                </h3>
                <p className="text-[#005459] leading-loose">
                  Nómadas digitales y profesionales que cambian de alquiler cada 5-10 meses.
                  Personas que priorizan ubicación, internet rápido, espacios de trabajo funcionales
                  y procesos de reserva sin fricciones.
                </p>
              </div>

              <DetailSection title="Leer más sobre el contexto">
                <p className="mb-4">
                  <strong className="font-bold">Pain points identificados:</strong>
                </p>
                <ul className="space-y-3 list-disc list-inside pl-2 mb-5">
                  <li className="leading-loose">
                    Procesos de reserva complejos con múltiples fianzas y documentación excesiva
                  </li>
                  <li className="leading-loose">
                    Desconfianza en fotos de propiedades y falta de transparencia
                  </li>
                  <li className="leading-loose">
                    Estrés en mudanzas frecuentes y organización de pertenencias
                  </li>
                  <li className="leading-loose">
                    Falta de garantías institucionales que reduzcan riesgo de fraude
                  </li>
                </ul>
              </DetailSection>
            </motion.div>
          </div>
        </section>

        <section
          className="relative py-16 px-6 bg-white"
          aria-labelledby="research-title"
        >
          <div className="max-w-md mx-auto">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="bg-[#004d52] p-3 rounded-xl shrink-0"
                  aria-hidden="true"
                >
                  <Users className="text-white" size={28} />
                </div>
                <h2
                  id="research-title"
                  className="text-4xl font-bold text-[#004d52] font-['Poppins',sans-serif]"
                >
                  Research
                </h2>
              </div>

              <div className="bg-teal-50 rounded-2xl p-6 mb-6 border-2 border-teal-200">
                <h3 className="text-xl font-bold text-[#004d52] mb-3 font-['Poppins',sans-serif]">
                  Enfoque mixto
                </h3>
                <p className="text-[#005459] leading-loose">
                  Combinamos investigación cuantitativa (encuestas) y cualitativa (entrevistas en
                  profundidad) para ampliar y validar datos sobre preferencias de usuarios de
                  alquiler flexible.
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 mb-4 bg-white shadow-sm">
                <img
                  src={imgCase3MResearchZoom}
                  alt="Sesiones de entrevistas con usuarios reales que buscan alquileres flexibles"
                  className="w-full h-auto"
                />
              </div>

              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 mt-6 bg-white shadow-sm">
                <img
                  src={imgCase3MDobleDiamante}
                  alt="Metodología Doble Diamante aplicada: Descubrir, Definir, Desarrollar, Entregar"
                  className="w-full h-auto"
                />
              </div>

              <DetailSection title="Insights del Research">
                <p className="mb-4">
                  <strong className="font-bold">Hallazgos clave de las entrevistas:</strong>
                </p>
                <ul className="space-y-3 list-disc list-inside pl-2 mb-5">
                  <li className="leading-loose">
                    Internet ultrarrápido es requisito no negociable para trabajar remotamente
                  </li>
                  <li className="leading-loose">
                    La calidad del mobiliario importa más que el estilo personal en estancias de
                    5-10 meses
                  </li>
                  <li className="leading-loose">
                    Usuarios dispuestos a pagar 5-10% más por gestión de mudanza sin estrés
                  </li>
                  <li className="leading-loose">
                    Valoraciones y fotos reales generan más confianza que fotos de estudio
                  </li>
                </ul>
              </DetailSection>
            </motion.div>
          </div>
        </section>

        <section
          className="relative py-16 px-6 bg-white"
          aria-labelledby="usuario-title"
        >
          <div className="max-w-md mx-auto">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="bg-[#004d52] p-3 rounded-xl shrink-0"
                  aria-hidden="true"
                >
                  <Target className="text-white" size={28} />
                </div>
                <h2
                  id="usuario-title"
                  className="text-4xl font-bold text-[#004d52] font-['Poppins',sans-serif]"
                >
                  Definición
                </h2>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200 mb-6">
                <h3 className="text-xl font-bold text-[#004d52] mb-4 font-['Poppins',sans-serif]">
                  Buyer Persona
                </h3>
                <p className="text-[#005459] text-base leading-loose mb-4">
                  Profesional de 40 años, Ingeniero Civil. Las locaciones de su trabajo cambian con
                  frecuencia de meses. Prioriza estabilidad familiar.
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 mb-6 bg-white shadow-sm">
                <img
                  src={imgCase3MBuyerPersona}
                  alt="Buyer Persona de Mingo!: profesional que valora ubicación, conectividad y simplicidad"
                  className="w-full h-auto"
                />
              </div>

              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 mt-8 bg-white shadow-sm">
                <img
                  src={imgCase3MEmpathyMap}
                  alt="Mapa de empatía: qué piensa, siente, dice y hace el usuario objetivo"
                  className="w-full h-auto"
                />
              </div>

              <DetailSection title="Metas y objetivos del usuario">
                <p className="mb-4">
                  <strong className="font-bold">Metas principales:</strong>
                </p>
                <ul className="space-y-3 list-disc list-inside pl-2">
                  <li className="leading-loose">
                    Conseguir espacio de trabajo ergonómico y WiFi ultrarrápido garantizado
                  </li>
                  <li className="leading-loose">
                    Proceso de reserva 100% digital e instantáneo
                  </li>
                  <li className="leading-loose">
                    Satisfacer necesidad de estabilidad funcional dentro de la movilidad
                  </li>
                  <li className="leading-loose">
                    Evitar documentación excesiva y múltiples fianzas
                  </li>
                </ul>
              </DetailSection>
            </motion.div>
          </div>
        </section>

        <section
          className="relative py-16 px-6 bg-white"
          aria-labelledby="estrategia-title"
        >
          <div className="max-w-md mx-auto">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="bg-[#004d52] p-3 rounded-xl shrink-0"
                  aria-hidden="true"
                >
                  <Lightbulb className="text-white" size={28} />
                </div>
                <h2
                  id="estrategia-title"
                  className="text-4xl font-bold text-[#004d52] font-['Poppins',sans-serif]"
                >
                  Estrategia
                </h2>
              </div>

              <p className="text-[#005459] text-lg leading-loose mb-8">
                <strong className="font-bold">Mingo!</strong> es una plataforma de alquiler flexible
                que integra servicios esenciales (internet garantizado, limpieza, mudanzas) con
                contratos digitales y validación segura.
              </p>

              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 mb-6 bg-white shadow-sm">
                <img
                  src={imgCase3MBusinessModel}
                  alt="Business Model Canvas de Mingo!: propuesta de valor, segmentos de clientes, canales, flujos de ingresos"
                  className="w-full h-auto"
                />
              </div>

              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 mb-4 bg-white shadow-sm">
                <img
                  src={imgCase3MValueProposition}
                  alt="Lienzo de propuesta de valor mostrando trabajos del cliente, dolores y ganancias"
                  className="w-full h-auto"
                />
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200 mb-6">
                <h3 className="text-xl font-bold text-[#004d52] mb-4 font-['Poppins',sans-serif]">
                  Diferenciadores clave
                </h3>
                <ul className="space-y-4" role="list">
                  <li className="flex items-start gap-3">
                    <div
                      className="w-2 h-2 bg-[#006571] rounded-full mt-2.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-[#005459] text-base leading-loose">
                      <strong className="font-bold">Servicios integrados:</strong> WiFi ultrarrápido,
                      limpieza, mudanzas gestionadas
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div
                      className="w-2 h-2 bg-[#006571] rounded-full mt-2.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-[#005459] text-base leading-loose">
                      <strong className="font-bold">Validación institucional:</strong> Propiedades
                      verificadas, contratos digitales seguros
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div
                      className="w-2 h-2 bg-[#006571] rounded-full mt-2.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-[#005459] text-base leading-loose">
                      <strong className="font-bold">Proceso simplificado:</strong> Reserva 100%
                      digital, documentación mínima
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div
                      className="w-2 h-2 bg-[#006571] rounded-full mt-2.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-[#005459] text-base leading-loose">
                      <strong className="font-bold">Atención híbrida:</strong> Chatbot + soporte
                      humano para consultas
                    </span>
                  </li>
                </ul>
              </div>

              <DetailSection title="Modelo de negocio">
                <p className="mb-4">
                  <strong className="font-bold">Fuentes de ingresos:</strong>
                </p>
                <ul className="space-y-3 list-disc list-inside pl-2 mb-5">
                  <li className="leading-loose">
                    Comisión por transacción en reservas de alojamiento
                  </li>
                  <li className="leading-loose">
                    Servicios premium: gestión de mudanzas, WiFi garantizado, limpieza semanal
                  </li>
                  <li className="leading-loose">
                    Modelo freemium con suscripción para usuarios frecuentes
                  </li>
                </ul>
              </DetailSection>
            </motion.div>
          </div>
        </section>

        <section
          className="relative py-16 px-6 bg-white"
          aria-labelledby="diseno-title"
        >
          <div className="max-w-md mx-auto">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="bg-[#004d52] p-3 rounded-xl shrink-0"
                  aria-hidden="true"
                >
                  <Palette className="text-white" size={28} />
                </div>
                <h2
                  id="diseno-title"
                  className="text-4xl font-bold text-[#004d52] font-['Poppins',sans-serif]"
                >
                  Diseño & Prototipo
                </h2>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200 mb-8">
                <h3 className="text-xl font-bold text-[#004d52] mb-4 font-['Poppins',sans-serif]">
                  Decisiones de diseño
                </h3>
                <ul className="space-y-4" role="list">
                  <li className="flex items-start gap-3">
                    <div
                      className="w-2 h-2 bg-[#b8b56a] rounded-full mt-2.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-[#005459] text-base leading-loose">
                      <strong className="font-bold">Colores tierra:</strong> Teal y amarillo que
                      transmiten confianza, calidez y hogar temporal
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div
                      className="w-2 h-2 bg-[#b8b56a] rounded-full mt-2.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-[#005459] text-base leading-loose">
                      <strong className="font-bold">Interfaz clara:</strong> Flujo lineal de búsqueda,
                      filtros intuitivos, información esencial visible
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div
                      className="w-2 h-2 bg-[#b8b56a] rounded-full mt-2.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-[#005459] text-base leading-loose">
                      <strong className="font-bold">Confianza visual:</strong> Badges de verificación,
                      garantías institucionales destacadas
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 mb-6 bg-white shadow-sm">
                <img
                  src={imgCase3MArquitectura}
                  alt="Arquitectura de información de Mingo!: Home, Búsqueda, Perfil de Propiedad, Servicios, Checkout"
                  className="w-full h-auto"
                />
              </div>

              <div className="space-y-4 mb-6">
                <h3 className="text-xl font-bold text-[#004d52] font-['Poppins',sans-serif]">
                  Pantallas clave
                </h3>

                <div className="rounded-2xl overflow-hidden border-2 border-gray-200 bg-white shadow-sm">
                  <img
                    src={imgCase3MHome}
                    alt="Pantalla Home de Mingo!: búsqueda intuitiva con filtros de ubicación, fechas y servicios"
                    className="w-full h-auto"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden border-2 border-gray-200 bg-white shadow-sm">
                    <img
                      src={imgCase3MBusqueda}
                      alt="Pantalla de búsqueda con filtros avanzados"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden border-2 border-gray-200 bg-white shadow-sm">
                    <img
                      src={imgCase3MDetallePropiedad}
                      alt="Detalle de propiedad con servicios integrados"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              <DetailSection title="Flujos principales diseñados">
                <p className="mb-4">
                  <strong className="font-bold">Flujos de usuario implementados:</strong>
                </p>
                <ul className="space-y-3 list-disc list-inside pl-2">
                  <li className="leading-loose">Onboarding y creación de perfil verificado</li>
                  <li className="leading-loose">
                    Búsqueda y filtrado por ubicación, precio, servicios locales y asociados
                  </li>
                  <li className="leading-loose">
                    Visualización de propiedad con fotos reales y valoraciones
                  </li>
                  <li className="leading-loose">
                    Selección de servicios integrados (WiFi, limpieza, mudanza)
                  </li>
                  <li className="leading-loose">Reserva y firma digital de contrato</li>
                  <li className="leading-loose">Gestión de reservas activas y próximas</li>
                </ul>
              </DetailSection>
            </motion.div>
          </div>
        </section>

        <section
          className="relative py-16 px-6 pb-24 bg-gradient-to-b from-[#006571] to-[#b8b56a]"
          aria-labelledby="impacto-title"
        >
          <div className="max-w-md mx-auto">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/30 shadow-2xl"
            >
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="bg-white/30 rounded-full p-2.5 shrink-0"
                  aria-hidden="true"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h2
                  id="impacto-title"
                  className="text-3xl font-bold text-white font-['Poppins',sans-serif]"
                >
                  Aprendizajes
                </h2>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-7 border-2 border-white/30 mb-8">
                <p className="text-white text-lg leading-loose mb-4">
                  Este proyecto me permitió aplicar{' '}
                  <strong className="font-bold">los principios de Design Thinking</strong>, desde
                  research hasta prototipo funcional en 15 días.
                </p>
                <p className="text-white leading-loose">
                  El mayor desafío fue sintetizar insights de entrevistas y encuestas para
                  identificar el verdadero problema a resolver: no solo el alquiler flexible, sino
                  también{' '}
                  <strong className="font-bold">
                    articular una gestión integral de servicios
                  </strong>{' '}
                  en función de reducir fricciones contractuales.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">15</div>
                  <div className="text-white text-sm leading-loose">días</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">5</div>
                  <div className="text-white text-sm leading-loose">entrevistas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">25</div>
                  <div className="text-white text-sm leading-loose">pantallas</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center bg-white/10 rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-white">6</div>
                  <div className="text-white/90 text-sm leading-loose">flujos principales</div>
                </div>
                <div className="text-center bg-white/10 rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-white">Individual</div>
                  <div className="text-white/90 text-sm leading-loose">proyecto</div>
                </div>
              </div>

              <div className="pt-6 border-t-2 border-white/30">
                <div className="flex items-center gap-3 text-white text-base">
                  <span
                    className="inline-block w-2.5 h-2.5 bg-[#1a3336] rounded-full"
                    aria-hidden="true"
                  />
                  Alquiler Flexible · Nómadas Digitales · Servicios Integrados · Beneficios locales
                </div>
              </div>

              <DetailSection
                title="Reflexión del proceso"
                defaultOpen={false}
                theme="dark"
              >
                <p className="mb-4 text-white">
                  Trabajar en Mingo! me enseñó la importancia de{' '}
                  <strong className="font-bold">validar con usuarios reales</strong> antes de definir
                  soluciones. Los insights obtenidos de las herramientas de la metodología cambiaron
                  radicalmente mi enfoque inicial.
                </p>
                <p className="text-white">
                  Aprendí a priorizar features basándome en value proposition: servicios integrados
                  surgieron como diferenciador clave sobre la simple búsqueda de alojamiento.
                </p>
              </DetailSection>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                delay: shouldReduceMotion ? 0 : 0.3,
              }}
              className="mt-10 text-center"
            >
              <p className="text-white text-base mb-4 leading-loose">
                Proyecto Individual · Design Thinking · Bootcamp Neoland · Noviembre 2025
              </p>
              <p className="text-white text-sm mb-4">
                Caso de estudio inicial · Primer proyecto completo
              </p>
              <div className="flex justify-center gap-3 flex-wrap">
                <Badge color="teal">UX Research</Badge>
                <Badge color="yellow">Product Design</Badge>
                <Badge color="dark">Mobile First</Badge>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
