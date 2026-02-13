import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ChevronDown, Brain, Users, Lightbulb, Palette, TestTube } from 'lucide-react';

import imgPortada from '../assets/case2/case2-01.png';
import imgDesignSprint from '../assets/case2/case2-02.png';
import imgUserPersona from '../assets/case2/case2-06.png';
import imgHmw from '../assets/case2/case2-05.png';
import imgLogo from '../assets/case2/case2-08.png';
import imgCrazy8 from '../assets/case2/case2-11.png';
import imgStoryboard from '../assets/case2/case2-15.png';
import imgColoresTipo from '../assets/case2/case2-17.png';
import imgArquitectura from '../assets/case2/case2-19.png';
import imgInterfaz from '../assets/case2/case2-20.png';
import imgMockTest from '../assets/case2/case2-21.png';
import imgTestingFeedback from '../assets/case2/case2-22.png';
import imgFuturibles from '../assets/case2/case2-23.png';

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
  const textOnly = title.replace(/^[\p{Emoji}\u200D]+\s*/u, '').trim() || title;

  const isDark = theme === 'dark';
  const buttonClass = isDark
    ? 'flex items-center gap-3 text-white text-base hover:text-white/90 focus:text-white/90 transition-colors group min-h-[44px] focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 -ml-2'
    : `flex items-center gap-3 text-[#1f5c15] text-base hover:text-[#2d8a1f] focus:text-[#2d8a1f] transition-colors group min-h-[44px] focus:outline-none focus:ring-2 focus:ring-[#2d8a1f] focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 -ml-2`;
  const borderClass = isDark ? 'border-l-2 border-white/40 pl-5 mt-6' : 'border-l-2 border-[#1f5c15] pl-5 mt-6';

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
        <span className="group-hover:underline font-semibold text-left">{textOnly}</span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
        className="overflow-hidden"
      >
        <div className={`pt-4 leading-loose text-base ${isDark ? 'text-white' : 'text-[#1f5c15]'}`}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}

function Badge({ children, color = 'green' }: { children: React.ReactNode; color?: 'green' | 'purple' | 'dark' }) {
  const styles = {
    green: 'bg-[#2d8a1f] text-white border-[#1f5c15]',
    purple: 'bg-[#4d0fb5] text-white border-[#3a0b87]',
    dark: 'bg-[#1a3814] text-white border-[#0f2109]',
  };
  return (
    <span
      className={`inline-flex px-4 py-2 rounded-full text-sm font-semibold border-2 min-h-[36px] items-center ${styles[color]}`}
    >
      {children}
    </span>
  );
}

export default function Case2MobileEnhanced() {
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
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-white text-[#1f5c15] px-6 py-3 rounded-lg font-bold focus:outline-none focus:ring-4 focus:ring-[#2d8a1f] border-2 border-[#2d8a1f]"
      >
        Saltar al contenido principal
      </a>

      {/* Hero: gradiente verde según referencia */}
      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative min-h-screen flex flex-col justify-center px-6 py-16 bg-gradient-to-b from-[#1a3814] to-[#2d8a1f]"
        aria-labelledby="hero-title"
      >
        <div className="max-w-md mx-auto w-full space-y-8">
          <motion.div {...animationConfig}>
            <span className="inline-flex px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-base font-bold min-h-[44px] items-center w-fit border-2 border-white/40">
              Caso de Estudio · Design Sprint
            </span>
          </motion.div>

          <motion.div
            {...animationConfig}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.2 }}
          >
            <h1 id="hero-title" className="text-7xl font-bold text-white mb-4 font-['Poppins',sans-serif]">
              Del Revés
            </h1>
            <div
              className="h-1.5 w-24 bg-gradient-to-r from-[#6b3aff] to-[#8b5aff] rounded-full"
              aria-hidden="true"
            />
          </motion.div>

          <motion.p
            {...animationConfig}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.4 }}
            className="text-xl text-white leading-relaxed"
          >
            <span className="font-bold">¿Cómo cuidar a quienes cuidan?</span>
            <br />
            <span className="text-lg">
              App de bienestar emocional para profesionales de la salud mental. Herramientas de relajación adaptadas a sus tiempos.
            </span>
          </motion.p>

          <motion.div
            {...animationConfig}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.6 }}
            className="flex flex-wrap gap-3"
          >
            <Badge color="green">7 días</Badge>
            <Badge color="purple">Design Sprint</Badge>
            <Badge color="dark">Trabajo Grupal</Badge>
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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </motion.div>
            </motion.div>
          )}
        </div>
      </motion.section>

      <div className="bg-white pb-28">
        {/* Mockup principal */}
        <section id="main-content" className="relative py-16 px-6" aria-labelledby="mockup-title">
          <div className="max-w-md mx-auto">
            <h2 id="mockup-title" className="sr-only">Resultado Final del Proyecto</h2>
            <motion.div
              style={{ y: mockupY }}
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#2d8a1f]/10 to-[#4d0fb5]/10 blur-3xl -z-10" aria-hidden="true" />
              <div className="relative bg-white rounded-3xl p-6 border-2 border-gray-200 shadow-lg">
                <img
                  src={imgPortada}
                  alt="Mockup de la aplicación Del Revés mostrando pantallas de actividades de relajación, temporizador y comunidad de apoyo"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* El Reto */}
        <section className="relative py-16 px-6 bg-white" aria-labelledby="problema-title">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            >
              <h2 id="problema-title" className="text-4xl font-bold text-[#1a3814] mb-5 font-['Poppins',sans-serif]">
                El Reto
              </h2>
              <p className="text-[#1f5c15] text-lg leading-loose mb-8">
                <strong className="font-bold">Crear una solución digital innovadora en 5 días</strong> que ayude a mejorar la salud mental, el bienestar emocional y reducir la ansiedad de profesionales de la salud mental.
              </p>

              <div className="bg-gradient-to-br from-green-50 to-purple-50 rounded-2xl p-6 mb-4 border-2 border-gray-200">
                <h3 className="text-xl font-bold text-[#1a3814] mb-3 font-['Poppins',sans-serif]">Usuario objetivo</h3>
                <p className="text-[#1f5c15] leading-loose">
                  Personas que trabajan cuidando la salud mental de otros (psicólogos, terapeutas, trabajadores sociales). Profesionales que absorben dolor ajeno, tienen jornadas extensas y poco tiempo entre sesiones.
                </p>
              </div>

              <DetailSection title="Leer más sobre el contexto">
                <p className="mb-4">
                  Estas personas que se dedican a apoyar emocionalmente a otros suelen quedarse con parte de ese dolor. Tienen jornadas muy extensas y, en ocasiones, apenas tiempo entre sesiones.
                </p>
                <p>
                  Esto deriva en que puedan acumular estrés y cansancio emocional. A día de hoy no hay herramientas específicas que se dediquen a ayudar a estas personas.
                </p>
              </DetailSection>
            </motion.div>
          </div>
        </section>

        {/* Metodología */}
        <section className="relative py-16 px-6 bg-white" aria-labelledby="metodologia-title">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-[#4d0fb5] p-3 rounded-xl shrink-0" aria-hidden="true">
                  <Brain className="text-white" size={28} />
                </div>
                <h2 id="metodologia-title" className="text-4xl font-bold text-[#1a3814] font-['Poppins',sans-serif]">
                  Metodología
                </h2>
              </div>

              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 mb-6 bg-white shadow-sm">
                <img
                  src={imgDesignSprint}
                  alt="Diagrama de la metodología Design Sprint mostrando las 5 fases: Lunes-Comprender, Martes-Idear, Miércoles-Decidir, Jueves-Prototipar, Viernes-Testear"
                  className="w-full h-auto"
                />
              </div>

              <p className="text-[#1f5c15] text-lg leading-loose mb-6">
                El proyecto se desarrolló mediante <strong className="font-bold">Design Sprint</strong>, trabajando durante <strong className="font-bold">cinco días</strong> para encontrar las mejores soluciones al problema planteado.
              </p>

              <DetailSection title="¿Por qué Design Sprint?">
                <p className="mb-4">
                  Durante este proceso generamos ideas, seleccionamos las mejores y las llevamos a nuestro producto para posteriormente validar en un testeo los resultados.
                </p>
                <p>
                  Esta metodología nos permitió seguir un proceso organizado y ágil, creando una aplicación centrada en el usuario y que le aporte una solución real a su problema en solo 5 días.
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
                <div className="bg-[#4d0fb5] p-3 rounded-xl shrink-0" aria-hidden="true">
                  <Users className="text-white" size={28} />
                </div>
                <h2 id="research-title" className="text-4xl font-bold text-[#1a3814] font-['Poppins',sans-serif]">
                  Research
                </h2>
              </div>

              <div className="bg-purple-50 rounded-2xl p-6 mb-6 border-2 border-purple-200">
                <h3 className="text-xl font-bold text-[#3a0b87] mb-3 font-['Poppins',sans-serif]">Sprint Questions</h3>
                <p className="text-[#1f5c15] leading-loose">
                  Planteamos preguntas clave para comprender las necesidades de los usuarios, detectar oportunidades de mejora y priorizar aspectos clave del proyecto.
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 mb-4 bg-white shadow-sm">
                <img
                  src={imgUserPersona}
                  alt="User Persona de Laura, psicóloga de 35 años que trabaja ayudando a pacientes con ansiedad y necesita herramientas para su propio bienestar emocional"
                  className="w-full h-auto"
                />
              </div>

              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 mt-6 bg-white shadow-sm">
                <img
                  src={imgHmw}
                  alt="Preguntas How Might We generadas por el equipo para explorar oportunidades de solución"
                  className="w-full h-auto"
                />
              </div>

              <DetailSection title="Insights del Research">
                <p className="mb-4">
                  <strong className="font-bold">Objetivo:</strong> Comprender quién es el usuario y qué necesita. Analizamos su experiencia, identificamos puntos de dolor y detectamos oportunidades para mejorar la solución.
                </p>
                <p>
                  Los profesionales de salud mental necesitan herramientas rápidas, efectivas y adaptadas a sus horarios fragmentados entre sesiones.
                </p>
              </DetailSection>
            </motion.div>
          </div>
        </section>

        {/* Ideación */}
        <section className="relative py-16 px-6 bg-white" aria-labelledby="ideacion-title">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-[#4d0fb5] p-3 rounded-xl shrink-0" aria-hidden="true">
                  <Lightbulb className="text-white" size={28} />
                </div>
                <h2 id="ideacion-title" className="text-4xl font-bold text-[#1a3814] font-['Poppins',sans-serif]">
                  Ideación
                </h2>
              </div>

              <p className="text-[#1f5c15] text-lg leading-loose mb-8">
                <strong className="font-bold">Del Revés</strong> es un apoyo para profesionales de la salud mental, ofreciéndoles ejercicios de relajación y cuidado mental adaptados a sus tiempos.
              </p>

              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 mb-6 bg-white shadow-sm flex items-center justify-center p-8">
                <img
                  src={imgLogo}
                  alt="Logo de Del Revés: planta creciendo al revés simbolizando el crecimiento personal"
                  className="w-2/3 h-auto"
                />
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200 mb-6">
                <h3 className="text-xl font-bold text-[#1a3814] mb-4 font-['Poppins',sans-serif]">Características clave</h3>
                <ul className="space-y-4" role="list">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#2d8a1f] rounded-full mt-2.5 shrink-0" aria-hidden="true" />
                    <span className="text-[#1f5c15] text-base leading-loose"><strong className="font-bold">Ejercicios rápidos:</strong> Actividades de 5-15 minutos entre sesiones</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#2d8a1f] rounded-full mt-2.5 shrink-0" aria-hidden="true" />
                    <span className="text-[#1f5c15] text-base leading-loose"><strong className="font-bold">Comunidad anónima:</strong> Foro para compartir con pares en situación similar</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#2d8a1f] rounded-full mt-2.5 shrink-0" aria-hidden="true" />
                    <span className="text-[#1f5c15] text-base leading-loose"><strong className="font-bold">Progreso visual:</strong> Planta que crece con cada actividad completada</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 mt-8 bg-white shadow-sm">
                <img
                  src={imgCrazy8}
                  alt="Crazy 8 final mostrando 8 ideas rápidas de pantallas: onboarding, actividades, temporizador, comunidad, perfil"
                  className="w-full h-auto"
                />
              </div>

              <DetailSection title="Proceso de ideación">
                <p className="mb-4">
                  Utilizamos <strong className="font-bold">Crazy 8</strong> para generar ideas rápidamente. Cada integrante proyectó 8 bocetos en 8 minutos.
                </p>
                <p>
                  Tras debatir puntos de vista y votación, seleccionamos las mejores pantallas para el prototipo final.
                </p>
              </DetailSection>

              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 mt-8 bg-white shadow-sm">
                <img
                  src={imgStoryboard}
                  alt="Storyboard mostrando el flujo de usuario desde la apertura de la app hasta completar una actividad de relajación"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Diseño & Prototipo */}
        <section className="relative py-16 px-6 bg-white" aria-labelledby="diseno-title">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-[#4d0fb5] p-3 rounded-xl shrink-0" aria-hidden="true">
                  <Palette className="text-white" size={28} />
                </div>
                <h2 id="diseno-title" className="text-4xl font-bold text-[#1a3814] font-['Poppins',sans-serif]">
                  Diseño & Prototipo
                </h2>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200 mb-8">
                <h3 className="text-xl font-bold text-[#1a3814] mb-4 font-['Poppins',sans-serif]">Decisiones de diseño</h3>
                <ul className="space-y-4" role="list">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#4d0fb5] rounded-full mt-2.5 shrink-0" aria-hidden="true" />
                    <span className="text-[#1f5c15] text-base leading-loose"><strong className="font-bold">Verde calmante:</strong> Color principal que transmite naturaleza y relajación</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#4d0fb5] rounded-full mt-2.5 shrink-0" aria-hidden="true" />
                    <span className="text-[#1f5c15] text-base leading-loose"><strong className="font-bold">Interfaz limpia:</strong> Diseño minimalista para reducir carga cognitiva</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#4d0fb5] rounded-full mt-2.5 shrink-0" aria-hidden="true" />
                    <span className="text-[#1f5c15] text-base leading-loose"><strong className="font-bold">Navegación intuitiva:</strong> Acceso rápido a actividades principales</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 mb-4 bg-white shadow-sm">
                <img
                  src={imgColoresTipo}
                  alt="Sistema de diseño de Del Revés: paleta verde con acentos morados, tipografía Poppins"
                  className="w-full h-auto"
                />
              </div>

              <DetailSection title="Sistema de Diseño">
                <p className="mb-4">
                  <strong className="font-bold">Paleta de colores:</strong> Verde como color principal evocando calma y naturaleza. Morado para acciones importantes y crear contraste visual.
                </p>
                <p>
                  <strong className="font-bold">Tipografía:</strong> Poppins por su carácter amigable y alta legibilidad en pantallas móviles. Cumple criterios WCAG 2.2 con contrastes superiores a 7:1.
                </p>
              </DetailSection>

              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 mt-8 bg-white shadow-sm">
                <img
                  src={imgArquitectura}
                  alt="Arquitectura de información de Del Revés mostrando estructura: Inicio, Actividades, Comunidad, Perfil"
                  className="w-full h-auto"
                />
              </div>

              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 mt-6 bg-white shadow-sm">
                <img
                  src={imgInterfaz}
                  alt="Diseño de interfaz final mostrando pantallas de alta fidelidad: home, ejercicios, temporizador, comunidad"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testing & Validación */}
        <section className="relative py-16 px-6 bg-gradient-to-br from-purple-50 to-green-50" aria-labelledby="testing-title">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-[#4d0fb5] p-3 rounded-xl shrink-0" aria-hidden="true">
                  <TestTube className="text-white" size={28} />
                </div>
                <h2 id="testing-title" className="text-4xl font-bold text-[#1a3814] font-['Poppins',sans-serif]">
                  Testing & Validación
                </h2>
              </div>

              <p className="text-[#1f5c15] text-lg leading-loose mb-8">
                Se llevó a cabo una evaluación del prototipo con <strong className="font-bold">personas reales</strong>, lo que permitió detectar dificultades de uso y confirmar que las propuestas realmente responden a lo que los usuarios necesitan.
              </p>

              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 mb-6 bg-white shadow-lg">
                <img
                  src={imgMockTest}
                  alt="Mock test mostrando participantes evaluando el prototipo de Del Revés en sesiones de testing"
                  className="w-full h-auto"
                />
              </div>

              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 mb-4 bg-white shadow-sm">
                <img
                  src={imgTestingFeedback}
                  alt="Feedback del testing: usuarios valoran positivamente la simplicidad y accesibilidad de las actividades"
                  className="w-full h-auto"
                />
              </div>

              <DetailSection title="Insights del testing">
                <p className="mb-4">
                  <strong className="font-bold">Hallazgos positivos:</strong>
                </p>
                <ul className="space-y-3 list-disc list-inside pl-2 mb-5">
                  <li className="leading-loose">Los usuarios valoran la rapidez para acceder a ejercicios</li>
                  <li className="leading-loose">La metáfora de la planta es motivadora y clara</li>
                  <li className="leading-loose">El diseño calmante ayuda a crear el ambiente adecuado</li>
                </ul>
                <p className="mb-3">
                  <strong className="font-bold">Áreas de mejora identificadas:</strong>
                </p>
                <ul className="space-y-3 list-disc list-inside pl-2">
                  <li className="leading-loose">Añadir pantalla previa con diferentes comunidades</li>
                  <li className="leading-loose">Mejorar feedback visual del progreso completado</li>
                  <li className="leading-loose">Clarificar la diferencia entre perfil y configuración</li>
                </ul>
              </DetailSection>
            </motion.div>
          </div>
        </section>

        {/* Próximos Pasos */}
        <section className="relative py-16 px-6 bg-white" aria-labelledby="futuros-title">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
            >
              <h2 id="futuros-title" className="text-4xl font-bold text-[#1a3814] mb-6 font-['Poppins',sans-serif]">
                Próximos Pasos
              </h2>

              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 mb-6 bg-white shadow-sm">
                <img
                  src={imgFuturibles}
                  alt="Roadmap de mejoras futuras: chatbox con comunidades, feedback de progreso visual, perfil mejorado"
                  className="w-full h-auto"
                />
              </div>

              <div className="space-y-4">
                <div className="bg-green-50 rounded-xl p-5 border-2 border-green-200">
                  <h3 className="font-bold text-[#1a3814] mb-2 font-['Poppins',sans-serif]">Chatbox mejorado</h3>
                  <p className="text-[#1f5c15] leading-loose text-sm">
                    Pantalla previa con diferentes comunidades para unirse y hablar con personas en situación parecida.
                  </p>
                </div>
                <div className="bg-purple-50 rounded-xl p-5 border-2 border-purple-200">
                  <h3 className="font-bold text-[#1a3814] mb-2 font-['Poppins',sans-serif]">Progreso visual</h3>
                  <p className="text-[#1f5c15] leading-loose text-sm">
                    Pantalla de crecimiento de planta tras cada actividad como feedback visual del progreso.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-xl p-5 border-2 border-blue-200">
                  <h3 className="font-bold text-[#1a3814] mb-2 font-['Poppins',sans-serif]">Perfil rediseñado</h3>
                  <p className="text-[#1f5c15] leading-loose text-sm">
                    Separar claramente perfil de usuario y configuración para evitar confusiones.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Conclusiones */}
        <section className="relative py-16 px-6 pb-24 bg-gradient-to-b from-[#1a3814] to-[#2d8a1f]" aria-labelledby="impacto-title">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/30 shadow-2xl"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-white/30 rounded-full p-2.5 shrink-0" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h2 id="impacto-title" className="text-3xl font-bold text-white font-['Poppins',sans-serif]">
                  Conclusiones
                </h2>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-7 border-2 border-white/30 mb-8">
                <p className="text-white text-lg leading-loose mb-4">
                  Lo más retador fue <strong className="font-bold">organizarnos como equipo</strong> y priorizar tareas para completar todo el proceso en <strong className="font-bold">5 días</strong> de trabajo intensivo.
                </p>
                <p className="text-white leading-loose">
                  Lograr que la idea inicial se transformara en una experiencia clara y funcional fue muy gratificante. El proyecto tiene gran capacidad de expansión en próximos MVPs.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">7</div>
                  <div className="text-white text-sm leading-loose">días</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">6</div>
                  <div className="text-white text-sm leading-loose">integrantes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">30</div>
                  <div className="text-white text-sm leading-loose">pantallas</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center bg-white/10 rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-white">10</div>
                  <div className="text-white/90 text-sm leading-loose">flujos principales</div>
                </div>
                <div className="text-center bg-white/10 rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-white">Sprint</div>
                  <div className="text-white/90 text-sm leading-loose">metodología</div>
                </div>
              </div>

              <div className="pt-6 border-t-2 border-white/30">
                <div className="flex items-center gap-3 text-white text-base">
                  <span className="inline-block w-2.5 h-2.5 bg-[#8b5aff] rounded-full" aria-hidden="true" />
                  Bienestar Emocional · Profesionales de Salud Mental
                </div>
              </div>

              <DetailSection title="Reflexión del equipo" defaultOpen={false} theme="dark">
                <p className="mb-4 text-white">
                  Idear y diseñar en equipo según la metodología Design Sprint ha sido una experiencia sorprendente. Es increíble ver cómo las ideas maduran hasta convertirse en un prototipo funcional.
                </p>
                <p className="text-white">
                  El intercambio de puntos de vista, habilidades y aprendizajes compartidos por el equipo fue fundamental para el éxito del proyecto.
                </p>
              </DetailSection>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.3 }}
              className="mt-10 text-center"
            >
              <p className="text-white text-base mb-4 leading-loose">
                Proyecto Grupal · Design Sprint · nov/2025
              </p>
              <p className="text-white text-sm mb-4">
                Equipo de 6 personas · Diseño colaborativo
              </p>
              <div className="flex justify-center gap-3 flex-wrap">
                <Badge color="green">Product Design</Badge>
                <Badge color="purple">UX Research</Badge>
                <Badge color="dark">Team Work</Badge>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

    </div>
  );
}
