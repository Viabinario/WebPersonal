/**
 * Contenido y componentes compartidos en el sitio:
 * - PresentacionSection (texto de intro + redes)
 * - Case1 y Case2 (perfil, BoxText, redes)
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

// --- Estilos de texto compartidos (Case1 y Case2). Clases definidas en index.css (@layer components). ---
export const CASE_FONT_STYLE = { fontVariationSettings: "'wdth' 100" } as const;
export const CASE_CLASS_FORM_LABEL = "css-g0mm18 case-form-label";
export const CASE_CLASS_TITLE_SM = "case-title-sm";
export const CASE_CLASS_TITLE_MD = "case-title-md";
export const CASE_CLASS_BODY_JUSTIFY = "case-body-justify";
export const CASE_CLASS_TITLE_LG = "css-ew64yg case-title-lg";

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
        <div
          className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px relative text-[14px] text-black text-justify w-[385px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
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

/** Logo de red social: recibe src opcional (si no hay, se muestra caja vacía). */
export function LogoSocialNetworks({ src }: { src?: string }) {
  const baseClass =
    '-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[14px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_8px_2px_0px_rgba(0,0,0,0),0px_5px_2px_0px_rgba(0,0,0,0.01),0px_3px_2px_0px_rgba(0,0,0,0.03),0px_1px_1px_0px_rgba(0,0,0,0.04)] size-[44px] top-1/2';
  if (!src) {
    return (
      <div className={`${baseClass} bg-[#f7f2ed]`} data-name="Logo_socialNetworks" />
    );
  }
  return (
    <div className={baseClass} data-name="Logo_socialNetworks">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full"
        src={src}
      />
    </div>
  );
}

/** Ícono de red por índice (0–4). Para hueco vacío usar LogoSocialNetworks sin src. */
export function LogoSocialNetworkIcon({ index }: { index: 0 | 1 | 2 | 3 | 4 }) {
  const src = SOCIAL_LOGO_SRCS[index];
  if (index === 1) {
    return (
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[14px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_8px_2px_0px_rgba(0,0,0,0),0px_5px_2px_0px_rgba(0,0,0,0.01),0px_3px_2px_0px_rgba(0,0,0,0.03),0px_1px_1px_0px_rgba(0,0,0,0.04)] size-[44px] top-1/2"
        data-name="Logo_socialNetworks"
      >
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[14px]">
          <div className="absolute bg-[#f7f2ed] inset-0 rounded-[14px]" />
          <img
            alt=""
            className="absolute max-w-none object-cover rounded-[14px] size-full"
            src={src}
          />
        </div>
      </div>
    );
  }
  return <LogoSocialNetworks src={src} />;
}

export function BorderLogoSocialNetworkd({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#d9bda5] left-1/2 rounded-[16px] size-[42px] top-1/2"
      data-name="Border_Logo_socialNetworkd"
    >
      {children}
    </div>
  );
}

export function ContentIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Content_icon">
      {children}
    </div>
  );
}

/** Índice de logo (0–4) o null para hueco vacío. */
export type SocialIconIndex = 0 | 1 | 2 | 3 | 4 | null;

/** Fila de 3 iconos de redes; cada uno es índice 0–4 o null (vacío). */
export function ContentSocialButtonRow({
  indices,
}: {
  indices: [SocialIconIndex, SocialIconIndex, SocialIconIndex];
}) {
  return (
    <div
      className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full"
      data-name="Content_SocialButton"
    >
      {indices.map((idx, i) => (
        <ContentIcon key={i}>
          <BorderLogoSocialNetworkd>
            {idx === null ? <LogoSocialNetworks /> : <LogoSocialNetworkIcon index={idx} />}
          </BorderLogoSocialNetworkd>
        </ContentIcon>
      ))}
    </div>
  );
}

/** Fila de los 3 iconos principales de redes (índices 0, 1, 2). */
export function ContentSocialButton() {
  return <ContentSocialButtonRow indices={[0, 1, 2]} />;
}

/** Bloque lateral de redes: 5 filas (0,1,2 | 3,4,vacío | 3× vacío). */
export function SocialNetworks() {
  return (
    <div
      className="bg-[#e5e2de] h-[314px] relative rounded-[22px] shrink-0 w-[184px]"
      data-name="Social_Networks"
    >
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip py-[18px] relative rounded-[inherit] size-full">
        <ContentSocialButtonRow indices={[0, 1, 2]} />
        <ContentSocialButtonRow indices={[3, 4, null]} />
        {[1, 2, 3].map((key) => (
          <ContentSocialButtonRow key={key} indices={[null, null, null]} />
        ))}
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#5a3e26] border-dashed inset-0 pointer-events-none rounded-[22px]"
      />
    </div>
  );
}

export function ContentSocialNetworks() {
  return (
    <div
      className="content-stretch flex flex-col h-[314px] items-start relative shrink-0 w-full"
      data-name="Content-SocialNetworks"
    >
      <SocialNetworks />
    </div>
  );
}

export function ContentRight() {
  return (
    <div
      className="absolute content-stretch flex flex-col h-[835px] items-start justify-end left-[1058px] min-w-[222px] top-0 w-[222px]"
      data-name="Content-Right"
    >
      <ContentSocialNetworks />
    </div>
  );
}
