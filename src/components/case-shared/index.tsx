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

/** Texto de introducción (Presentación + Cases). Editar aquí para cambiar en PresentacionSection, Case1 y Case2. */
export const CASE_INTRO_TEXT = {
  paragraph1:
    'Lorem ipsum dolor sit amet consectetur. Congue mauris id rhoncus adipiscing amet pharetra ornare amet luctus. Suspendisse lectus viverra sollicitudin nibh imperdiet diam vitae. Scelerisque mi urna tellus odio tortor. Et platea placerat eget iaculis consectetur in.',
  paragraph2:
    'Hac nec nisi nunc rhoncus gravida. Dignissim purus nunc risus diam amet faucibus nibh lacus. Dui enim nulla etiam molestie at a dictum eu dapibus. Pharetra ut sed id praesent. Massa facilisi tristique massa nunc amet consequat faucibus.',
};

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
    <>
      <p className="css-4hzbpn mb-0">{CASE_INTRO_TEXT.paragraph1}</p>
      <p className="css-4hzbpn">{CASE_INTRO_TEXT.paragraph2}</p>
    </>
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

