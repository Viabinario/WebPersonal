/**
 * Contenido y componentes compartidos en el sitio:
 * - PresentacionSection (texto de intro + redes)
 * - Case1 y Case2 (perfil, BoxText; redes solo en Presentación)
 * Editar aquí para cambiar una sola vez en toda la web.
 */

import React from 'react';
import imgProfilePhoto from '../../assets/037303b6b1de60b5b46c711eb2f0e126520f42b0.png';
import imgSocial01 from '../../assets/social/social-01.png'; // LinkedIn
import imgSocial02 from '../../assets/social/social-02.png'; // GitHub
import imgSocial03 from '../../assets/social/social-03.png'; // Behance
import imgSocial04 from '../../assets/social/social-04.png'; // Notion
import imgSocial05 from '../../assets/social/social-05.png'; // YouTube

/** Estilo único para enlaces de texto en todo el sitio. Subrayado punteado, color tema, focus visible. */
export const TEXT_LINK_CLASS =
  "underline decoration-dotted underline-offset-2 text-[#5a3e26] hover:text-[#3d2a1a] case-font-wdth focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5a3e26] focus-visible:ring-offset-2 focus-visible:rounded-sm";

/** Texto de introducción (Presentación desktop). Negrita con <strong>, saltos de línea con {'\n\n'}. */
export const CASE_INTRO_TEXT = {
  paragraph: (
    <>
      Este sitio ha sido diseñado y construido <strong>íntegramente desde cero</strong>, inspirado en el lienzo del arquitecto: donde todo el proyecto queda a la vista <strong>en un mismo espacio</strong>, su globalidad y lo específico.
      {'\n\n'}
      Técnicamente, surgió de una ideación y prototipado en <strong>Figma (Design & Make)</strong>, que luego fue desarrollado como frontend en <strong>TypeScript/TSX</strong>, modelando el código con <strong>Cursor (AI)</strong> y testeando cada interacción en tiempo real. La gestión del formulario de contacto apoya su lógica de backend en <strong>Vercel</strong> y el despliegue final lo realicé a través de{' '}
      <a
        href="https://github.com/Viabinario/WebPersonal"
        target="_blank"
        rel="noopener noreferrer"
        className={`font-bold ${TEXT_LINK_CLASS}`}
      >
        GitHub Pages
      </a>{' '}
      con un dominio propio.
      {'\n\n'}
      Actualmente, la experiencia está optimizada para <strong>desktop (1280x832)</strong>, priorizando la visualización detallada de los proyectos mientras continúo iterando en su adaptabilidad móvil, la cual es funcional, pero en proceso de estudio de diseño [feb/2026].
    </>
  ),
};

/** Texto de introducción para la Presentación en versión móvil. Editar aquí el contenido que se muestra solo en móvil. */
export const CASE_INTRO_TEXT_MOBILE = {
  paragraph: (
    <>
      Bienvenido a la versión mobile "lite" de mi sitio web creada desde cero. Prototipado en <strong>Figma</strong>, desarrollado en <strong>TypeScript/TSX</strong> con <strong>Cursor (AI)</strong>. Formulario y despliegue con <strong>Vercel</strong> y <strong>GitHub Pages</strong>.
      {'\n\n'}
      Una versión mobile opcional con una propuesta distinta de navegación sigue en desarrollo [feb/2026].
    </>
  ),
};

/** Presentación desktop, inglés. */
export const CASE_INTRO_TEXT_EN = {
  paragraph: (
    <>
      This site has been designed and built <strong>entirely from scratch</strong>, inspired by the architect’s canvas: where the whole project is visible <strong>in one space</strong>, both the big picture and the details.
      {'\n\n'}
      Technically, it started from ideation and prototyping in <strong>Figma (Design & Make)</strong>, then developed as a frontend in <strong>TypeScript/TSX</strong>, with code shaped using <strong>Cursor (AI)</strong> and each interaction tested in real time. The contact form’s logic is backed by <strong>Vercel</strong>, and the final deployment was done via{' '}
      <a
        href="https://github.com/Viabinario/WebPersonal"
        target="_blank"
        rel="noopener noreferrer"
        className={`font-bold ${TEXT_LINK_CLASS}`}
      >
        GitHub Pages
      </a>{' '}
      with a custom domain.
      {'\n\n'}
      The experience is currently optimized for <strong>desktop (1280×832)</strong>, prioritising detailed project viewing while I continue to iterate on mobile adaptability [Feb 2026].
    </>
  ),
};

/** Presentación móvil, inglés. */
export const CASE_INTRO_TEXT_MOBILE_EN = {
  paragraph: (
    <>
      Welcome to the “lite” mobile version of my site, built from scratch. Prototyped in <strong>Figma</strong>, developed in <strong>TypeScript/TSX</strong> with <strong>Cursor (AI)</strong>. Form and deployment with <strong>Vercel</strong> and <strong>GitHub Pages</strong>.
      {'\n\n'}
      An optional mobile version with a different navigation approach is still in development [Feb 2026].
    </>
  ),
};

/** Sobre mí: texto del cuadro. ES y EN para el switch de idioma. */
export const SOBRE_MI_TEXT_ES = (
  <>
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
  </>
);

export const SOBRE_MI_TEXT_EN = (
  <>
    Hi, I’m Francisco Sánchez, an architect by profession with over 14 years of experience
    designing and managing building projects of various types.
    <br /><br />
    My path into UX/UI began in my early university years, with an interest in the digital world
    through web design, seeing sites as digital spaces to inhabit.
    <br /><br />
    Later, specialising in BIM allowed me to continue this drive for knowledge and creativity,
    taking on projects with greater complexity in digital information management.
    <br /><br />
    This apparent change of direction is a core part of my professional journey, now in a phase of
    consolidating my interest in digital product creation, where I want to apply my years of experience,
    learnings from working with many teams, and the kind of learning that never stops and always adds up.
  </>
);

/** Logos de redes (orden: LinkedIn, GitHub, Behance, Notion, YouTube). Usado en PresentacionSection y Cases. */
export const SOCIAL_LOGO_SRCS = [
  imgSocial01,
  imgSocial02,
  imgSocial03,
  imgSocial04,
  imgSocial05,
] as const;

/** Nombres de redes para aria-label/title (mismo orden que SOCIAL_LOGO_SRCS). */
export const SOCIAL_LABELS = ['LinkedIn', 'GitHub', 'Behance', 'Notion', 'YouTube'] as const;

/** URLs de perfiles (mismo orden: LinkedIn, GitHub, Behance, Notion, YouTube). Editar con tus enlaces. */
export const SOCIAL_URLS = [
  'https://linkedin.com/in/fcosanchez',
  'https://github.com/Viabinario',
  'https://behance.net/francisfranci',
  'https://www.notion.so/MEMORIA-DE-MI-SITIO-WEB-PERSONAL-2fcaea1eb35f80d8a236ccc0ac81de6d?source=copy_link',
  'https://youtube.com/@FranArqUxUi',
] as const;

/** URLs para los enlaces “Otros formatos” en Case1 (Behance, Figma, YouTube). Mismo orden que los íconos. */
export const LINKS_OTHER_FORMATS_CASE1 = [
  'https://www.behance.net/gallery/243463543/Kora',
  'https://www.figma.com/proto/eeGUqTiYQiFJElsKsRfb9n/Francisco.S%C3%A1nchez---PFB---UX-UI?page-id=191%3A2454&node-id=622-7245&viewport=1139%2C344%2C0.1&t=43qDKMgq0hz2KBuH-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=622%3A7245&show-proto-sidebar=1',
  'https://youtu.be/z0cbnLVPbm0',
] as const;

/** URLs "Otros formatos" para Case2 (Behance, Figma, YouTube). Mismo orden que los íconos. Editar con los enlaces del caso 2. */
export const LINKS_OTHER_FORMATS_CASE2 = [
  'https://www.behance.net/gallery/243653683/Del-revs',
  'https://www.figma.com/proto/TQ2cOSOlDvO1kFurl0qlOX/DelReves---G4---UI?page-id=0%3A1&node-id=17-655&p=f&viewport=215%2C93%2C0.09&t=pzL2bIZShMPm60H4-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3%3A504&show-proto-sidebar=1',
  'https://youtu.be/VXkacI3VHlA',
] as const;

/** URLs para créditos Case2 (orden: Agustina, Anna, Claudia, Erik, Jonattan). En standby hasta confirmar enlaces reales; sustituir "#" por las URLs. */
export const LINKS_CREDITS_CASE2 = [
  '#',
  '#',
  '#',
  '#',
  '#',
] as const;

// --- Estilos de texto compartidos (Case1 y Case2). Clases definidas en index.css (@layer components). ---
/** Clase utility para variación de fuente cuando no uses otra .case-* (evita style={} repetido). */
export const CASE_CLASS_FONT_WDTH = "case-font-wdth";
export const CASE_CLASS_FORM_LABEL = "css-g0mm18 case-form-label";
export const CASE_CLASS_TITLE_SM = "case-title-sm";
export const CASE_CLASS_TITLE_MD = "case-title-md";
export const CASE_CLASS_BODY_JUSTIFY = "case-body-justify";
export const CASE_CLASS_TITLE_LG = "css-ew64yg case-title-lg";
/** Listas con viñetas en casos: wrapper, ul y li (ver index.css .case-list-*) */
export const CASE_CLASS_LIST_WRAP = "case-list-wrap";
export const CASE_CLASS_LIST = "case-list";
export const CASE_CLASS_LIST_ITEM = "case-list-item";

// --- Descripción de casos: única fuente para mobile y desktop ---
const P = ({ children }: { children?: React.ReactNode }) => <p className="css-4hzbpn mb-0">{children}</p>;
const P_NB = ({ children }: { children?: React.ReactNode }) => <p className="css-4hzbpn leading-[normal] mb-0">{children}</p>;
const Span = ({ children }: { children?: React.ReactNode }) => <span className="leading-[normal]">{children}</span>;
const Bold = ({ children }: { children?: React.ReactNode }) => <span className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] case-font-wdth">{children}</span>;
const BoldItalic = ({ children }: { children?: React.ReactNode }) => <span className="font-['Roboto:Bold_Italic',sans-serif] font-bold italic leading-[normal] case-font-wdth">{children}</span>;

/** Descripción del caso Kora (Case1). Usar en Case1.tsx y CaseMobileView. */
export const CASE1_DESCRIPTION_CONTENT = (
  <>
    <P>
      <Span>Kora es una </Span>
      <Bold>plataforma social digital y ecosistema de intercambio de valor bidireccional</Bold>
      <Span>, cuyo propósito central es </Span>
      <Bold>revalorizar el capital senior y fortalecer la cohesión social mediante la conexión estructurada entre generaciones</Bold>
      <Span>.</Span>
    </P>
    <P_NB>&nbsp;</P_NB>
    <P>
      <Span>A diferencia de los modelos educativos tradicionales, Kora está diseñada sobre el principio de la </Span>
      <Bold>Reciprocidad Solidaria</Bold>
      <Span>:</Span>
    </P>
    <P_NB>&nbsp;</P_NB>
    <ul className="mb-0">
      <li className="css-4hzbpn list-disc ms-[21px]">
        <Bold>Para el Adulto Mayor</Bold>
        <Span>: Kora es el canal para transformar el conocimiento no académico (relatos, oficios manuales, historia local, recetas) en un activo productivo y monetizable. Esto combate el aislamiento social y la subutilización del senior talent al asignarle un valor económico y cultural a su experiencia.</Span>
      </li>
    </ul>
    <P_NB>&nbsp;</P_NB>
    <ul className="mb-0">
      <li className="css-4hzbpn list-disc ms-[21px]">
        <Bold>Para la Generación Joven</Bold>
        <Span>
          : Kora es la vía para adquirir conocimiento experiencial único y combatir la soledad de la hiperconectividad a través de interacciones de calidad. A cambio, la juventud ofrece la inclusión digital y apoyo técnico que el Senior necesita.
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </Span>
      </li>
    </ul>
    <P_NB>&nbsp;</P_NB>
    <P_NB>&nbsp;</P_NB>
    <P_NB>&nbsp;</P_NB>
    <p className="css-4hzbpn leading-[normal]">&nbsp;</p>
  </>
);

/** Descripción del caso Del Revés (Case2). Usar en Case2.tsx y CaseMobileView. */
export const CASE2_DESCRIPTION_CONTENT = (
  <>
    <P>
      <Span>El encargo consistió en </Span>
      <BoldItalic>crear una solución digital innovadora en 5 días, que ayude a mejorar la salud mental, el bienestar emocional y reducir la ansiedad en cualquiera de sus ámbitos (laboral, familiar, bullying, auto-impuesto, etc.) de todo tipo de personas.</BoldItalic>
      <Span> </Span>
    </P>
    <P_NB>&nbsp;</P_NB>
    <P_NB>Como grupo nos centramos en las personas que trabajan profesionalmente cuidando la salud mental de otros.</P_NB>
    <P_NB>&nbsp;</P_NB>
    <P_NB>Estas personas, que se dedican a apoyar emocionalmente a otros suelen quedarse con parte de ese dolor, tienen jornadas muy extensas y en ocasiones, apenas tiempo entre sesiones. Esto deriva en que puedan acumular estrés y cansancio emocional. A día de hoy no hay herramientas específicas que se dediquen a ayudar a estas personas.</P_NB>
    <P_NB>&nbsp;</P_NB>
    <P_NB>Nuestra app busca ser un apoyo para estas personas, ofreciéndoles ejercicios de relajación y cuidado mental adaptados a sus tiempos. Así pueden liberar tensión, regularse mejor y evitar que el estrés se acumule. Además un foro anónimo entre personas en la misma situación les ayudarían a desahogarse y sentirse acompañados.</P_NB>
    <P_NB>&nbsp;</P_NB>
    <p className="css-4hzbpn leading-[normal]">&nbsp;</p>
  </>
);

/** Títulos de los casos (para móvil y cualquier uso centralizado). */
export const CASE1_TITLE = 'Kora';
export const CASE2_TITLE = 'Del Revés';

export function ContentBodySideLeft() {
  return (
    <div
      className="absolute bg-[#f7f2ed] h-[835px] left-0 min-w-[346px] top-0 w-[346px]"
      data-name="Content-Body-Side-Left"
    />
  );
}

export function ProfilePhoto() {
  return (
    <div
      className="pointer-events-none relative rounded-[22px] shrink-0 size-[184px]"
      data-name="Profile_Photo"
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover rounded-[22px] size-full"
        src={imgProfilePhoto}
      />
      <div
        aria-hidden="true"
        className="absolute border border-[#5a3e26] border-dashed inset-0 rounded-[22px]"
      />
    </div>
  );
}

export function ContentProfilePhoto() {
  return (
    <div className="h-[242px] relative shrink-0 w-full" data-name="Content-Profile-Photo">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[100px] pt-[18px] relative size-full">
          <ProfilePhoto />
        </div>
      </div>
    </div>
  );
}

export function BoxText({ children }: { children?: React.ReactNode }) {
  const content = children ?? (
    <p className="css-4hzbpn mb-0 whitespace-pre-line">{CASE_INTRO_TEXT.paragraph}</p>
  );
  return (
    <div
      className="bg-[#f7f2ed] flex-[1_0_0] min-h-px min-w-px relative rounded-[22px] w-[592px]"
      data-name="Box_text"
    >
      <div className="content-stretch flex flex-col items-start overflow-clip px-[100px] py-[48px] relative rounded-[inherit] size-full">
        <div className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px relative text-[14px] text-black text-justify w-[385px] case-font-wdth">
          {content}
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#5a3e26] border-dashed inset-0 pointer-events-none rounded-[22px] shadow-[25px_25px_10px_0px_rgba(0,0,0,0),16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)]"
      />
    </div>
  );
}

export function ContentBoxText() {
  return (
    <div className="h-[380px] relative shrink-0 w-full" data-name="Content-Box-Text">
      <div className="content-stretch flex flex-col items-start pl-[100px] relative size-full">
        <BoxText />
      </div>
    </div>
  );
}

export function ContentForm() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-full" data-name="Content-Form" />;
}

export function ContentCenter() {
  return (
    <div
      className="absolute content-stretch flex flex-col h-[835px] items-center left-[346px] min-w-[712px] top-0 w-[712px]"
      data-name="Content-Center"
    >
      <ContentProfilePhoto />
      <ContentBoxText />
      <ContentForm />
    </div>
  );
}

