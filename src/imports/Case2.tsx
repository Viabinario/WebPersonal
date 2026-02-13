import svgPaths from "./svg-zhxor3ftxe";
import svgPathsOtherFormats from "./svg-mbzxtnnqxt";
import {
  ContentBodySideLeft,
  ContentCenter,
  CASE_CLASS_TITLE_SM,
  CASE_CLASS_TITLE_MD,
  CASE_CLASS_BODY_JUSTIFY,
  CASE_CLASS_TITLE_LG,
  LINKS_OTHER_FORMATS_CASE2,
  LINKS_CREDITS_CASE2,
  TEXT_LINK_CLASS,
  CASE2_DESCRIPTION_CONTENT,
} from "../components/case-shared";
import { ContentForm1Case } from "../components/case-shared/ContactFormCase";
import imgContentImage from "../assets/case2/case2-01.png";
import imgDesignSprint1 from "../assets/case2/case2-02.png";
import imgSprintQuestion1 from "../assets/case2/case2-03.png";
import imgBrainstorming1 from "../assets/case2/case2-04.png";
import imgHmw1 from "../assets/case2/case2-05.png";
import imgUserPersona1 from "../assets/case2/case2-06.png";
import imgAcciones1 from "../assets/case2/case2-07.png";
import imgLogo1 from "../assets/case2/case2-08.png";
import imgMoodboard1 from "../assets/case2/case2-09.png";
import imgLightningDemos1 from "../assets/case2/case2-10.png";
import imgCrazy81 from "../assets/case2/case2-11.png";
import imgDecision21 from "../assets/case2/case2-12.png";
import imgC81 from "../assets/case2/case2-13.png";
import imgIdeas2 from "../assets/case2/case2-14.png";
import imgStoyryboard1 from "../assets/case2/case2-15.png";
import imgPrototipado1 from "../assets/case2/case2-16.png";
import imgColorestipo1 from "../assets/case2/case2-17.png";
import imgComponents1 from "../assets/case2/case2-18.png";
import imgArquitectura2 from "../assets/case2/case2-19.png";
import imgInterfaz1 from "../assets/case2/case2-20.png";
import imgMocktest1 from "../assets/case2/case2-21.png";
import imgTestingFeedback2 from "../assets/case2/case2-22.png";
import imgFuturibles1 from "../assets/case2/case2-23.png";


function Content1X() {
  return (
    <div className="h-[835px] relative shrink-0 w-[1280px]" data-name="Content 1x1">
      <ContentBodySideLeft />
      <ContentCenter />
    </div>
  );
}

function ContentCarousel() {
  return (
    <div className="h-[829px] relative shrink-0 w-full" data-name="Content-Carousel">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col items-start justify-end pl-0 relative size-full">
          {/* ContainerButtonUsecases removed - handled by parent CasosEstudioSection */}
        </div>
      </div>
    </div>
  );
}

function ContentBodyLeft() {
  return (
    <div className="bg-[#f7f2ed] content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-[1280px] relative" data-name="Content-Body-Left">
      <Content1X />
      <ContentCarousel />
    </div>
  );
}

function ContainerText() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container_Text">
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[32px] relative size-full">
        <div className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] min-h-px min-w-px relative text-[14px] text-black text-justify w-full case-font-wdth">
          <p className="css-4hzbpn mb-0">{`Hola, soy Francisco Sánchez, arquitecto de profesión con una experiencia laboral de más de 14 años, diseñando y gestionando proyectos de edificación de diversa tipología. `}</p>
          <p className="css-4hzbpn mb-0">&nbsp;</p>
          <p className="css-4hzbpn mb-0">Mi camino hacia el UX/UI surge desde mis primeros años de universidad, interesándome en el mundo digital a través del diseño de sitios web, apreciándolos como experiencias habitables digitales.</p>
          <p className="css-4hzbpn mb-0">&nbsp;</p>
          <p className="css-4hzbpn mb-0">Posteriormente, al especializarme en BIM, pude darle continuidad a esta inquietud de conocimiento y creatividad, abordando proyectos con una mayor complejidad en la gestión digital de la información.</p>
          <p className="css-4hzbpn mb-0">&nbsp;</p>
          <p className="css-4hzbpn mb-0">{`Este cambio de rumbo aparente, es parte sustancial de mi búsqueda profesional, ahora en una fase de consolidar mi interés en la creación de productos digitales, donde quiero volcar mis años de madurez, descubrimientos de trabajar con muchos equipos y aprendizajes que nunca acaban y siempre suman.   `}</p>
          <p className="css-4hzbpn mb-0">&nbsp;</p>
          <p className="css-4hzbpn mb-0">&nbsp;</p>
          <p className="css-4hzbpn mb-0">&nbsp;</p>
          <p className="css-4hzbpn mb-0">&nbsp;</p>
          <p className="css-4hzbpn mb-0">&nbsp;</p>
          <p className="css-4hzbpn mb-0">&nbsp;</p>
          <p className="css-4hzbpn mb-0">&nbsp;</p>
          <p className="css-4hzbpn">&nbsp;</p>
        </div>
      </div>
    </div>
  );
}

function BoxTextColumn() {
  return (
    <div className="bg-[#e8d8c9] h-[584px] relative rounded-[22px] shrink-0 w-[388px]" data-name="Box_text_Column">
      <div className="content-stretch flex flex-col items-center overflow-clip py-[48px] relative rounded-[inherit] size-full">
        <ContainerText />
      </div>
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-px pointer-events-none rounded-[22px] shadow-[25px_25px_10px_0px_rgba(0,0,0,0),16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)]" />
    </div>
  );
}

function Content1X1() {
  return (
    <div className="content-stretch flex flex-col h-[858px] items-center relative shrink-0 w-[1280px]" data-name="Content 1x2">
      <BoxTextColumn />
    </div>
  );
}

function ContentBodyRight() {
  return (
    <div className="bg-[#f7f2ed] content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-[1280px] py-[38px] relative" data-name="Content-Body-Right">
      <Content1X1 />
      <ContentForm1Case />
    </div>
  );
}

function MatrixV() {
  return (
    <div className="absolute content-stretch flex h-[1664px] items-start left-0 min-h-[1664px] min-w-[2560px] top-[-832px] w-[2560px]" data-name="Matrix_V4">
      <ContentBodyLeft />
      <ContentBodyRight />
    </div>
  );
}

function ContentLeft184Px() {
  return <div className="bg-[#f7f2ed] h-[670px] shrink-0 w-[254px]" data-name="Content_Left_184px" />;
}

function ContentProjectTitle() {
  return (
    <div className="content-start flex flex-wrap gap-[10px] h-[72px] items-start relative shrink-0 w-full" data-name="Content Project Title">
      <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Bold',sans-serif] font-bold leading-[40px] min-h-px min-w-px relative text-[#5a3e26] text-[32px] case-font-wdth">
        Del Revés
      </p>
    </div>
  );
}

function ContentTitle() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Content_title">
      <div className={CASE_CLASS_TITLE_SM}>
        <p className="css-4hzbpn leading-[normal]">Tipo de Proyecto</p>
      </div>
    </div>
  );
}

function ContentText() {
  return (
    <div className="0 relative shrink-0 w-full" data-name="Content_text">
      <div className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-0 leading-[normal] text-[#5a3e26] text-[14px] case-font-wdth">
        <p className="css-4hzbpn mb-0">{` App Móvil  / trabajo grupal (presencial y remoto).`}</p>
        <p className="css-4hzbpn">Participación personal principal: Componentes, Arquitectura, coordinar día miércoles, UI: actividades, chat.</p>
      </div>
    </div>
  );
}

function ModuleText() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-full items-start relative shrink-0 w-[176px]" data-name="Module-Text">
      <ContentTitle />
      <ContentText />
    </div>
  );
}

function ContentTitle1() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Content_title">
      <div className={CASE_CLASS_TITLE_SM}>
        <p className="css-4hzbpn leading-[normal]">Entregables</p>
      </div>
    </div>
  );
}

function ContentText1() {
  return (
    <div className="0 relative shrink-0 w-full" data-name="Content_text">
      <p className="absolute css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal inset-0 leading-[normal] text-[#5a3e26] text-[14px] case-font-wdth">{`Product Design. Fases de Investigación y Estrategia. Fases de Diseño y Prototipado. Fases de Especificaciones. Presentación oral grupal. `}</p>
    </div>
  );
}

function ModuleText1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-full items-start relative shrink-0 w-[176px]" data-name="Module-Text">
      <ContentTitle1 />
      <ContentText1 />
    </div>
  );
}

function ContentText2() {
  return (
    <div className="content-stretch flex h-[214px] items-start justify-between relative shrink-0 w-[372px]" data-name="Content_Text">
      <ModuleText />
      <ModuleText1 />
    </div>
  );
}

function ContentTitle2() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Content_title">
      <div className={CASE_CLASS_TITLE_SM}>
        <p className="css-4hzbpn leading-[normal]">{`Herramientas `}</p>
      </div>
    </div>
  );
}

function ContentText3() {
  return (
    <div className="0 relative shrink-0 w-full" data-name="Content_text">
      <p className="absolute css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal inset-0 leading-[0] text-[#5a3e26] text-[14px] case-font-wdth">
        <span className="leading-[normal]">{`Metodología `}</span>
        <span className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] case-font-wdth">
          Design Sprint
        </span>
        <span className="leading-[normal]">. Software: Figma (Design, Make, Slide)</span>
      </p>
    </div>
  );
}

function ModuleText2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-full items-start relative shrink-0 w-[176px]" data-name="Module-Text">
      <ContentTitle2 />
      <ContentText3 />
    </div>
  );
}

function ContentTitle3() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Content_title">
      <div className={CASE_CLASS_TITLE_SM}>
        <p className="css-4hzbpn leading-[normal]">{`Duración `}</p>
      </div>
    </div>
  );
}

function ContentText4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Content_text">
      <p className="absolute css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal inset-0 leading-[normal] text-[#5a3e26] text-[14px] text-justify case-font-wdth">
        7 días.
      </p>
    </div>
  );
}

function ModuleText3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-full items-start relative shrink-0 w-[176px]" data-name="Module-Text">
      <ContentTitle3 />
      <ContentText4 />
    </div>
  );
}

function ContentText5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-start min-h-px min-w-px relative" data-name="Content_Text">
      <ModuleText2 />
      <ModuleText3 />
    </div>
  );
}

function ContentIntro() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[465px] items-start justify-end px-[8px] relative shrink-0 w-[388px]" data-name="Content_Intro">
      <ContentProjectTitle />
      <ContentText2 />
      <ContentText5 />
    </div>
  );
}

function ContentResume388Px() {
  return (
    <div className="bg-[#f7f2ed] content-stretch flex flex-col h-[670px] items-start justify-end overflow-clip py-[22px] relative rounded-[22px] shrink-0" data-name="Content_Resume_388px">
      <ContentIntro />
    </div>
  );
}

function ContentImage() {
  return (
    <div className="bg-white h-[286px] pointer-events-none relative rounded-[8px] shrink-0 w-[576px] overflow-clip" data-name="Content-Image">
      <img alt="Portada del caso Del Revés" className="absolute inset-0 max-w-none object-cover rounded-[8px] size-full" src={imgContentImage} />
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-px pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ContentTitle4() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Content_title">
      <div className={CASE_CLASS_TITLE_MD}>
        <p className="css-4hzbpn leading-[normal]">Descripción</p>
      </div>
    </div>
  );
}

function ContentText6() {
  return (
    <div className="0 relative shrink-0 w-full" data-name="Content_text">
      <div className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-0 leading-[0] text-[#5a3e26] text-[14px] text-justify case-font-wdth">
        {CASE2_DESCRIPTION_CONTENT}
      </div>
    </div>
  );
}

function ModuleText4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Module-Text">
      <ContentTitle4 />
      <ContentText6 />
    </div>
  );
}

function ContentText7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="content-text">
      <ModuleText4 />
    </div>
  );
}

function ContentProject592Px() {
  return (
    <div className="bg-[#f7f2ed] content-stretch flex flex-col gap-[8px] h-[670px] items-start justify-end px-[8px] py-[22px] relative rounded-[22px] shrink-0 w-[592px]" data-name="Content_Project_592px">
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-px pointer-events-none rounded-[22px]" />
      <ContentImage />
      <ContentText7 />
    </div>
  );
}

function ContentImage1() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[267px] items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0 w-[372px]" data-name="Content-Image">
      <div className="h-[145px] relative shrink-0 w-[352px]" data-name="Design-Sprint 1">
        <img alt="Design Sprint" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDesignSprint1} />
      </div>
    </div>
  );
}

function ContentTitle5() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Content_title">
      <div className={CASE_CLASS_TITLE_MD}>
        <p className="css-4hzbpn leading-[normal]">Metodología</p>
      </div>
    </div>
  );
}

function ContentText8() {
  return (
    <div className="0 relative shrink-0 w-full" data-name="Content_text">
      <div className={CASE_CLASS_BODY_JUSTIFY}>
        <p className="css-4hzbpn mb-0">El proyecto se desarrolló mediante la metodología Design Sprint, trabajando durante cinco días para encontrar las mejores soluciones al problema planteado. Durante este proceso generamos ideas, seleccionamos las mejores y las llevamos a nuestro producto para posteriormente validar en un testeo los resultados.</p>
        <p className="css-4hzbpn mb-0">&nbsp;</p>
        <p className="css-4hzbpn mb-0">Gracias a esta metodología seguimos un proceso organizado y ágil, que nos permitió crear una aplicación centrada en el usuario y que le aporte una solución a su problema.</p>
        <p className="css-4hzbpn mb-0">&nbsp;</p>
        <p className="css-4hzbpn mb-0">&nbsp;</p>
        <p className="css-4hzbpn">&nbsp;</p>
      </div>
    </div>
  );
}

function ModuleText5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Module-Text">
      <ContentTitle5 />
      <ContentText8 />
    </div>
  );
}

function ContentText9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="content-text">
      <ModuleText5 />
    </div>
  );
}

function ContentResume388Px1() {
  return (
    <div className="bg-[#f7f2ed] h-[670px] relative rounded-[22px] shrink-0 w-[388px]" data-name="Content_Resume_388px">
      <div className="content-stretch flex flex-col gap-[22px] items-start justify-end overflow-clip px-[8px] py-[22px] relative rounded-[inherit] size-full">
        <ContentImage1 />
        <ContentText9 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-px pointer-events-none rounded-[22px]" />
    </div>
  );
}

function IconDays() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="icon_days">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="icon_days">
          <path d="M20 22.2L24 20V36" id="Vector" stroke="var(--stroke-0, #5A3E26)" strokeLinejoin="round" strokeWidth="3" />
          <g id="Group">
            <path d={svgPaths.pc50fc80} id="Vector_2" stroke="var(--stroke-0, #5A3E26)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p1cebf580} id="Vector_3" stroke="var(--stroke-0, #5A3E26)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p37d1d400} id="Vector_4" stroke="var(--stroke-0, #5A3E26)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ContentTextIcon() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0" data-name="Content-Text-Icon">
      <p className={CASE_CLASS_TITLE_LG}>
        Lunes / Investigación
      </p>
    </div>
  );
}

function IconDaysText() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="icon_days_text">
      <IconDays />
      <ContentTextIcon />
    </div>
  );
}

function ContentTitle6() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Content_title">
      <div className={CASE_CLASS_TITLE_MD}>
        <p className="css-4hzbpn leading-[normal]">Sprint Questions</p>
      </div>
    </div>
  );
}

function ContentText10() {
  return (
    <div className="0 relative shrink-0 w-full" data-name="Content_text">
      <p className="absolute css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal inset-0 leading-[normal] text-[#5a3e26] text-[14px] text-justify case-font-wdth">{`Se plantean distintas preguntas para comprender mejor las necesidades de los usuarios y detectar oportunidades de mejora y priorizar los aspectos clave del proyecto. `}</p>
    </div>
  );
}

function ModuleText6() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Module-Text">
      <ContentTitle6 />
      <ContentText10 />
    </div>
  );
}

function ContentText11() {
  return (
    <div className="content-stretch flex flex-col h-[105px] items-start relative shrink-0 w-[372px]" data-name="content-text">
      <ModuleText6 />
    </div>
  );
}

function ContentImage2() {
  return (
    <div className="bg-white flex min-h-0 flex-1 flex-col items-start justify-start overflow-hidden p-[10px] relative rounded-[8px] w-full max-w-[372px]" data-name="Content-Image">
      <div className="relative min-h-0 w-full flex-1" data-name="Sprint Question 1">
        <img alt="Preguntas del Sprint" className="absolute inset-0 max-w-full max-h-full w-full h-full object-contain object-top pointer-events-none" src={imgSprintQuestion1} />
      </div>
    </div>
  );
}

function ContentResume388Px2() {
  return (
    <div className="bg-[#fff6eb] flex h-[670px] flex-col relative rounded-[22px] shrink-0 w-[388px]" data-name="Content_Resume_388px">
      <div className="flex min-h-0 flex-1 flex-col gap-[22px] items-stretch overflow-hidden px-[8px] py-[22px] relative rounded-[inherit]">
        <IconDaysText />
        <ContentText11 />
        <ContentImage2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-px pointer-events-none rounded-[22px]" />
    </div>
  );
}

function IconDaysText1() {
  return <div className="content-stretch flex gap-[10px] items-center shrink-0" data-name="icon_days_text" />;
}

function ContentTitle7() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Content_title">
      <div className={CASE_CLASS_TITLE_MD}>
        <p className="css-4hzbpn leading-[normal]">Brainstorming</p>
      </div>
    </div>
  );
}

function ContentText12() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Content_text">
      <p className="absolute css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal inset-0 leading-[normal] text-[#5a3e26] text-[14px] text-justify case-font-wdth">
        Durante esta etapa, se genera un gran número de ideas para explorar diferentes formas de resolver las necesidades de los usuarios y responder a los retos definidos en el Sprint.
      </p>
    </div>
  );
}

function ModuleText7() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Module-Text">
      <ContentTitle7 />
      <ContentText12 />
    </div>
  );
}

function ContentText13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[372px]" data-name="content-text">
      <ModuleText7 />
    </div>
  );
}

function ContentImage3() {
  return (
    <div className="bg-white flex min-h-0 flex-1 flex-col items-start justify-start overflow-hidden p-[10px] relative rounded-[8px] w-full max-w-[372px]" data-name="Content-Image">
      <div className="relative min-h-0 w-full flex-1" data-name="Brainstorming 1">
        <img alt="Brainstorming" className="absolute inset-0 max-w-full max-h-full w-full h-full object-contain object-top pointer-events-none" src={imgBrainstorming1} />
      </div>
    </div>
  );
}

function ContentResume388Px3() {
  return (
    <div className="bg-[#f7f2ed] flex h-[670px] flex-col relative rounded-[22px] shrink-0 w-[388px]" data-name="Content_Resume_388px">
      <div className="flex min-h-0 flex-1 flex-col gap-[22px] items-stretch overflow-hidden px-[8px] py-[22px] relative rounded-[inherit]">
        <IconDaysText1 />
        <ContentText13 />
        <ContentImage3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-px pointer-events-none rounded-[22px]" />
    </div>
  );
}

function IconDaysText2() {
  return <div className="content-stretch flex gap-[10px] items-center shrink-0" data-name="icon_days_text" />;
}

function ContentTitle8() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Content_title">
      <div className={CASE_CLASS_TITLE_MD}>
        <p className="css-4hzbpn leading-[normal]">How might we...?</p>
      </div>
    </div>
  );
}

function ContentText14() {
  return (
    <div className="h-[200px] relative shrink-0 w-full" data-name="Content_text">
      <p className="absolute css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal inset-0 leading-[normal] text-[#5a3e26] text-[14px] text-justify case-font-wdth">
        Permite convertir los problemas en oportunidades de diseño claras y accionables, explorando posibles soluciones alineadas con los retos del proyecto.
      </p>
    </div>
  );
}

function ModuleText8() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Module-Text">
      <ContentTitle8 />
      <ContentText14 />
    </div>
  );
}

function ContentText15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[372px]" data-name="content-text">
      <ModuleText8 />
    </div>
  );
}

function ContentImage4() {
  return (
    <div className="bg-white flex min-h-0 flex-1 flex-col items-start justify-start overflow-hidden p-[10px] relative rounded-[8px] w-full max-w-[372px]" data-name="Content-Image">
      <div className="relative min-h-0 w-full flex-1" data-name="hmw 1">
        <img alt="How Might We" className="absolute inset-0 max-w-full max-h-full w-full h-full object-contain object-top pointer-events-none" src={imgHmw1} />
      </div>
    </div>
  );
}

function ContentResume388Px4() {
  return (
    <div className="bg-[#f7f2ed] flex h-[670px] flex-col relative rounded-[22px] shrink-0 w-[388px]" data-name="Content_Resume_388px">
      <div className="flex min-h-0 flex-1 flex-col gap-[22px] items-stretch overflow-hidden px-[8px] py-[22px] relative rounded-[inherit]">
        <IconDaysText2 />
        <ContentText15 />
        <ContentImage4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-px pointer-events-none rounded-[22px]" />
    </div>
  );
}

function IconDaysText3() {
  return <div className="content-stretch flex gap-[10px] items-center shrink-0" data-name="icon_days_text" />;
}

function ContentTitle9() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Content_title">
      <div className={CASE_CLASS_TITLE_MD}>
        <p className="css-4hzbpn leading-[normal]">User Persona y Journey Map</p>
      </div>
    </div>
  );
}

function ContentText16() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Content_text">
      <p className="absolute css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal inset-0 leading-[normal] text-[#5a3e26] text-[14px] text-justify case-font-wdth">
        El objetivo analizando el User Persona y el Journey Map es comprender quién es el usuario y qué necesita, así como, analizar su experiencia, identificar puntos de dolor y detectar oportunidades para mejorar la solución.
      </p>
    </div>
  );
}

function ModuleText9() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Module-Text">
      <ContentTitle9 />
      <ContentText16 />
    </div>
  );
}

function ContentText17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[372px]" data-name="content-text">
      <ModuleText9 />
    </div>
  );
}

function ContentImage5() {
  return (
    <div className="bg-white flex min-h-0 flex-1 flex-col items-start justify-start overflow-hidden p-[10px] relative rounded-[8px] w-full max-w-[372px]" data-name="Content-Image">
      <div className="relative min-h-0 w-full flex-1" data-name="user_persona 1">
        <img alt="Persona de usuario" className="absolute inset-0 max-w-full max-h-full w-full h-full object-contain object-top pointer-events-none" src={imgUserPersona1} />
      </div>
    </div>
  );
}

function ContentResume388Px5() {
  return (
    <div className="bg-[#f7f2ed] flex h-[670px] flex-col relative rounded-[22px] shrink-0 w-[388px]" data-name="Content_Resume_388px">
      <div className="flex min-h-0 flex-1 flex-col gap-[22px] items-stretch overflow-hidden px-[8px] py-[22px] relative rounded-[inherit]">
        <IconDaysText3 />
        <ContentText17 />
        <ContentImage5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-px pointer-events-none rounded-[22px]" />
    </div>
  );
}

function ContentImage6() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full overflow-clip" data-name="Content-Image">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative size-full">
          <div className="h-[576px] relative shrink-0 w-[524px]" data-name="Acciones 1">
            <img alt="Acciones" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAcciones1} />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-px pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ContentProject592Px1() {
  return (
    <div className="bg-[#f7f2ed] content-stretch flex flex-col h-[670px] items-start justify-end px-[8px] py-[22px] relative rounded-[22px] shrink-0 w-[592px]" data-name="Content_Project_592px">
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-px pointer-events-none rounded-[22px]" />
      <ContentImage6 />
    </div>
  );
}

function ContentTitle184Px() {
  return <div className="bg-[#f7f2ed] h-[670px] shrink-0 w-[184px]" data-name="Content_Title_184px" />;
}

function IconDays1() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="icon_days">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="icon_days">
          <path d={svgPaths.p12b16e00} id="Vector" stroke="var(--stroke-0, #5A3E26)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="3" />
          <g id="Group">
            <path d={svgPaths.pc50fc80} id="Vector_2" stroke="var(--stroke-0, #5A3E26)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p1cebf580} id="Vector_3" stroke="var(--stroke-0, #5A3E26)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p37d1d400} id="Vector_4" stroke="var(--stroke-0, #5A3E26)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ContentTextIcon1() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0" data-name="Content-Text-Icon">
      <p className={CASE_CLASS_TITLE_LG}>
        Martes / Inspiración
      </p>
    </div>
  );
}

function IconDaysText4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="icon_days_text">
      <IconDays1 />
      <ContentTextIcon1 />
    </div>
  );
}

function ContentImage7() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0 w-[372px]" data-name="Content-Image">
      <div className="h-[350px] relative shrink-0 w-[211px]" data-name="Logo 1">
        <img alt="Logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo1} />
      </div>
    </div>
  );
}

function ContentTitle10() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Content_title">
      <div className={CASE_CLASS_TITLE_MD}>
        <p className="css-4hzbpn leading-[normal]">Divergir / Generar ideas / Buscar soluciones</p>
      </div>
    </div>
  );
}

function ContentText18() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Content_text">
      <p className="absolute css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal inset-0 leading-[normal] text-[#5a3e26] text-[14px] text-justify case-font-wdth">
        Contribuimos en nuestra plantilla con ideas visuales: paletas de colores, interfaces, herramientas, usos y flujos.
      </p>
    </div>
  );
}

function ModuleText10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative w-full" data-name="Module-Text">
      <ContentTitle10 />
      <ContentText18 />
    </div>
  );
}

function ContentText19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[372px]" data-name="content-text">
      <ModuleText10 />
    </div>
  );
}

function ContentResume388Px6() {
  return (
    <div className="bg-[#fff6eb] h-[670px] relative rounded-[22px] shrink-0 w-[388px]" data-name="Content_Resume_388px">
      <div className="content-stretch flex flex-col gap-[22px] items-start overflow-clip px-[8px] py-[22px] relative rounded-[inherit] size-full">
        <IconDaysText4 />
        <ContentImage7 />
        <ContentText19 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-px pointer-events-none rounded-[22px]" />
    </div>
  );
}

function ContentImage8() {
  return (
    <div className="bg-white h-[523px] relative rounded-[8px] shrink-0 w-full overflow-clip" data-name="Content-Image">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center p-[10px] relative size-full">
          <div className="h-[500px] relative shrink-0 w-[549px]" data-name="moodboard 1">
            <img alt="Moodboard" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMoodboard1} />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-px pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ContentProject592Px2() {
  return (
    <div className="bg-[#f7f2ed] content-stretch flex flex-col h-[670px] items-start px-[8px] py-[22px] relative rounded-[22px] shrink-0 w-[592px]" data-name="Content_Project_592px">
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-px pointer-events-none rounded-[22px]" />
      <ContentImage8 />
    </div>
  );
}

function ContentImage9() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full overflow-clip" data-name="Content-Image">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center p-[10px] relative w-full">
          <div className="h-[500px] relative shrink-0 w-[486px]" data-name="Lightning demos 1">
            <img alt="Lightning Demos" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLightningDemos1} />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-px pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ContentProject592Px3() {
  return (
    <div className="bg-[#f7f2ed] content-stretch flex flex-col h-[670px] items-start px-[8px] py-[22px] relative rounded-[22px] shrink-0 w-[592px]" data-name="Content_Project_592px">
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-px pointer-events-none rounded-[22px]" />
      <ContentImage9 />
    </div>
  );
}

function ContentImage10() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full overflow-clip" data-name="Content-Image">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center p-[10px] relative w-full">
          <div className="h-[354px] relative shrink-0 w-[500px]" data-name="crazy 8 1">
            <img alt="Crazy 8" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrazy81} />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-px pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ContentText20() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Content_text">
      <p className="absolute css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal inset-0 leading-[normal] text-[#5a3e26] text-[14px] text-justify case-font-wdth">
        Todo el desarrollo de ideas, notas, imágenes que cada integrante proyectó en la plantilla grupal sirvieron de base para crear individualmente un Crazy 8, para las distintas pantallas y características de la futura app. Luego de debatir puntos de vistas y una votación se seleccionaron las pantallas para el Crazy 8 grupal, el cual el día siguiente se establecería definitivamente.
      </p>
    </div>
  );
}

function ModuleText11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative w-full" data-name="Module-Text">
      <ContentText20 />
    </div>
  );
}

function ContentText21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[576px]" data-name="content-text">
      <ModuleText11 />
    </div>
  );
}

function ContentProject592Px4() {
  return (
    <div className="bg-[#f7f2ed] content-stretch flex flex-col gap-[30px] h-[670px] items-start px-[8px] py-[22px] relative rounded-[22px] shrink-0 w-[592px]" data-name="Content_Project_592px">
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-px pointer-events-none rounded-[22px]" />
      <ContentImage10 />
      <ContentText21 />
    </div>
  );
}

function IconDays2() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="icon_days">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="icon_days">
          <path d={svgPaths.p1825e180} id="Vector" stroke="var(--stroke-0, #5A3E26)" strokeLinejoin="round" strokeWidth="3" />
          <g id="Group">
            <path d={svgPaths.pc50fc80} id="Vector_2" stroke="var(--stroke-0, #5A3E26)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p1cebf580} id="Vector_3" stroke="var(--stroke-0, #5A3E26)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p37d1d400} id="Vector_4" stroke="var(--stroke-0, #5A3E26)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ContentTextIcon2() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0" data-name="Content-Text-Icon">
      <p className={CASE_CLASS_TITLE_LG}>
        Miércoles / Decisión
      </p>
    </div>
  );
}

function IconDaysText5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="icon_days_text">
      <IconDays2 />
      <ContentTextIcon2 />
    </div>
  );
}

function ContentImage11() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0 w-[372px]" data-name="Content-Image">
      <div className="relative shrink-0 size-[350px]" data-name="decision_2 1">
        <img alt="Decisión" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDecision21} />
      </div>
    </div>
  );
}

function ContentTitle11() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Content_title">
      <div className={CASE_CLASS_TITLE_MD}>
        <p className="css-4hzbpn leading-[normal]">Crazy 8</p>
      </div>
    </div>
  );
}

function ContentText22() {
  return (
    <div className="h-[202px] relative shrink-0 w-full" data-name="Content_text">
      <div className={CASE_CLASS_BODY_JUSTIFY}>
        <p className="css-4hzbpn mb-0">{`Después de exponer cada uno sus ideas, mediante una votación entre el equipo, definimos los crazy 8 finales. `}</p>
        <p className="css-4hzbpn">Se definieron las siguientes páginas:</p>
      </div>
    </div>
  );
}

function ModuleText12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative w-full" data-name="Module-Text">
      <ContentTitle11 />
      <ContentText22 />
    </div>
  );
}

function ContentText23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[372px]" data-name="content-text">
      <ModuleText12 />
    </div>
  );
}

function ContentResume388Px7() {
  return (
    <div className="bg-[#fff6eb] h-[670px] relative rounded-[22px] shrink-0 w-[388px]" data-name="Content_Resume_388px">
      <div className="content-stretch flex flex-col gap-[22px] items-start overflow-clip px-[8px] py-[22px] relative rounded-[inherit] size-full">
        <IconDaysText5 />
        <ContentImage11 />
        <ContentText23 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-px pointer-events-none rounded-[22px]" />
    </div>
  );
}

function ContentImage12() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0 w-[372px]" data-name="Content-Image">
      <div className="h-[606px] relative shrink-0 w-[215px]" data-name="C8 1">
        <img alt="Sketch C8" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgC81} />
      </div>
    </div>
  );
}

function ContentResume388Px8() {
  return (
    <div className="bg-[#f7f2ed] h-[670px] relative rounded-[22px] shrink-0 w-[388px]" data-name="Content_Resume_388px">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[8px] py-[22px] relative rounded-[inherit] size-full">
        <ContentImage12 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-px pointer-events-none rounded-[22px]" />
    </div>
  );
}

function ContentImage13() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0 w-[372px]" data-name="Content-Image">
      <div className="h-[479px] relative shrink-0 w-[350px]" data-name="IDEAS 2">
        <img alt="Ideas" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIdeas2} />
      </div>
    </div>
  );
}

function ContentResume388Px9() {
  return (
    <div className="bg-[#f7f2ed] h-[670px] relative rounded-[22px] shrink-0 w-[388px]" data-name="Content_Resume_388px">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[8px] py-[22px] relative rounded-[inherit] size-full">
        <ContentImage13 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-px pointer-events-none rounded-[22px]" />
    </div>
  );
}

function ContentImage14() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full overflow-clip" data-name="Content-Image">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center p-[10px] relative w-full">
          <div className="h-[420px] relative shrink-0 w-[503px]" data-name="STOYRYBOARD 1">
            <img alt="Storyboard" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStoyryboard1} />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-px pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ContentTitle12() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Content_title">
      <div className={CASE_CLASS_TITLE_MD}>
        <p className="css-4hzbpn leading-[normal]">Storyboard</p>
      </div>
    </div>
  );
}

function ContentText24() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Content_text">
      <div className={CASE_CLASS_BODY_JUSTIFY}>
        <p className="css-4hzbpn mb-0">{`Nuestro storyboard  muestra a una persona que en un primer momento se encuentra agobiada en medio del tráfico, luego no tiene tiempo para comer porque está en una sesión online, pero recuerda que le recomendaron la app “Del revés” y decide descargarla, planeando usarla antes de dormir.`}</p>
        <p className="css-4hzbpn">{`Prueba  dentro de la app en la sección de dormir y al despertar al siguiente día su expresión “aaahhhhhh!” confirma que ha sido de gran ayuda y se siente un poco mejor. `}</p>
      </div>
    </div>
  );
}

function ModuleText13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative w-full" data-name="Module-Text">
      <ContentTitle12 />
      <ContentText24 />
    </div>
  );
}

function ContentText25() {
  return (
    <div className="content-stretch flex flex-col h-[174px] items-start relative shrink-0 w-[576px]" data-name="content-text">
      <ModuleText13 />
    </div>
  );
}

function ContentProject592Px5() {
  return (
    <div className="bg-[#f7f2ed] content-stretch flex flex-col gap-[8px] h-[670px] items-start px-[8px] py-[22px] relative rounded-[22px] shrink-0 w-[592px]" data-name="Content_Project_592px">
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-px pointer-events-none rounded-[22px]" />
      <ContentImage14 />
      <ContentText25 />
    </div>
  );
}

function IconDays3() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="icon_days">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="icon_days">
          <path d="M27.3 36V20L18.7 30.8H29.3" id="Vector" stroke="var(--stroke-0, #5A3E26)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="3" />
          <g id="Group">
            <path d={svgPaths.pc50fc80} id="Vector_2" stroke="var(--stroke-0, #5A3E26)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p1cebf580} id="Vector_3" stroke="var(--stroke-0, #5A3E26)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p37d1d400} id="Vector_4" stroke="var(--stroke-0, #5A3E26)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ContentTextIcon3() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0" data-name="Content-Text-Icon">
      <p className={CASE_CLASS_TITLE_LG}>
        Jueves / Prototipado
      </p>
    </div>
  );
}

function IconDaysText6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="icon_days_text">
      <IconDays3 />
      <ContentTextIcon3 />
    </div>
  );
}

function ContentImage15() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0 w-[372px]" data-name="Content-Image">
      <div className="relative shrink-0 size-[350px]" data-name="prototipado 1">
        <img alt="Prototipado" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPrototipado1} />
      </div>
    </div>
  );
}

function ContentTitle13() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Content_title">
      <div className={CASE_CLASS_TITLE_MD}>
        <p className="css-4hzbpn leading-[normal]">Design System</p>
      </div>
    </div>
  );
}

function ContentText26() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Content_text">
      <p className="absolute css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal inset-0 leading-[normal] text-[#5a3e26] text-[14px] text-justify case-font-wdth">
        Creamos un design system basado en las ideas sacadas el martes gracias al moodboard incluyendo el logo, los colores, la tipografía y los diferentes componentes.
      </p>
    </div>
  );
}

function ModuleText14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative w-full" data-name="Module-Text">
      <ContentTitle13 />
      <ContentText26 />
    </div>
  );
}

function ContentText27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[372px]" data-name="content-text">
      <ModuleText14 />
    </div>
  );
}

function ContentResume388Px10() {
  return (
    <div className="bg-[#fff6eb] h-[670px] relative rounded-[22px] shrink-0 w-[388px]" data-name="Content_Resume_388px">
      <div className="content-stretch flex flex-col gap-[22px] items-start overflow-clip px-[8px] py-[22px] relative rounded-[inherit] size-full">
        <IconDaysText6 />
        <ContentImage15 />
        <ContentText27 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-px pointer-events-none rounded-[22px]" />
    </div>
  );
}

function ContentImage16() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full overflow-clip" data-name="Content-Image">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center p-[10px] relative w-full">
          <div className="h-[600px] relative shrink-0 w-[466px]" data-name="colorestipo 1">
            <img alt="Color y tipografía" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgColorestipo1} />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-px pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ContentProject592Px6() {
  return (
    <div className="bg-[#f7f2ed] content-stretch flex flex-col h-[670px] items-start px-[8px] py-[22px] relative rounded-[22px] shrink-0 w-[592px]" data-name="Content_Project_592px">
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-px pointer-events-none rounded-[22px]" />
      <ContentImage16 />
    </div>
  );
}

function ContentImage17() {
  return (
    <div className="bg-white h-[516px] relative rounded-[8px] shrink-0 w-full overflow-clip" data-name="Content-Image">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative size-full">
          <div className="h-[412px] relative shrink-0 w-[550px]" data-name="components 1">
            <img alt="Componentes" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponents1} />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-px pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ContentTitle14() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Content_title">
      <div className={CASE_CLASS_TITLE_MD}>
        <p className="css-4hzbpn leading-[normal]">Componentes</p>
      </div>
    </div>
  );
}

function ContentText28() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Content_text">
      <p className="absolute css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal inset-0 leading-[normal] text-[#5a3e26] text-[14px] text-justify case-font-wdth">
        El desarrollo de los componentes estuvo organizado de acuerdo a una distribución de las páginas de la app entre los integrantes del grupo (6 personas).
      </p>
    </div>
  );
}

function ModuleText15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative w-full" data-name="Module-Text">
      <ContentTitle14 />
      <ContentText28 />
    </div>
  );
}

function ContentText29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="content-text">
      <ModuleText15 />
    </div>
  );
}

function ContentProject592Px7() {
  return (
    <div className="bg-[#f7f2ed] content-stretch flex flex-col gap-[8px] h-[670px] items-start px-[8px] py-[22px] relative rounded-[22px] shrink-0 w-[592px]" data-name="Content_Project_592px">
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-px pointer-events-none rounded-[22px]" />
      <ContentImage17 />
      <ContentText29 />
    </div>
  );
}

function ContentImage18() {
  return (
    <div className="bg-white h-[516px] relative rounded-[8px] shrink-0 w-full overflow-clip" data-name="Content-Image">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative size-full">
          <div className="h-[456px] relative shrink-0 w-[450px]" data-name="ARQUITECTURA 2">
            <img alt="Arquitectura de información" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArquitectura2} />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-px pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ContentProject592Px8() {
  return (
    <div className="bg-[#f7f2ed] content-stretch flex flex-col h-[670px] items-start px-[8px] py-[22px] relative rounded-[22px] shrink-0 w-[592px]" data-name="Content_Project_592px">
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-px pointer-events-none rounded-[22px]" />
      <ContentImage18 />
    </div>
  );
}

function ContentImage19() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full overflow-clip" data-name="Content-Image">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative size-full">
          <div className="h-[610px] relative shrink-0 w-[476px]" data-name="interfaz 1">
            <img alt="Interfaz" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgInterfaz1} />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-px pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ContentProject592Px9() {
  return (
    <div className="bg-[#f7f2ed] content-stretch flex flex-col h-[670px] items-start px-[8px] py-[22px] relative rounded-[22px] shrink-0 w-[592px]" data-name="Content_Project_592px">
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-px pointer-events-none rounded-[22px]" />
      <ContentImage19 />
    </div>
  );
}

function IconDays4() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="icon_days">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="icon_days">
          <path d={svgPaths.p1bde1d00} id="Vector" stroke="var(--stroke-0, #5A3E26)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="3" />
          <g id="Group">
            <path d={svgPaths.pc50fc80} id="Vector_2" stroke="var(--stroke-0, #5A3E26)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p1cebf580} id="Vector_3" stroke="var(--stroke-0, #5A3E26)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p37d1d400} id="Vector_4" stroke="var(--stroke-0, #5A3E26)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ContentTextIcon4() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0" data-name="Content-Text-Icon">
      <p className={CASE_CLASS_TITLE_LG}>
        Viernes / Testeo
      </p>
    </div>
  );
}

function IconDaysText7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="icon_days_text">
      <IconDays4 />
      <ContentTextIcon4 />
    </div>
  );
}

function ContentImage20() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0 w-[372px]" data-name="Content-Image">
      <div className="h-[378px] relative shrink-0 w-[350px]" data-name="mocktest 1">
        <img alt="Mock test" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMocktest1} />
      </div>
    </div>
  );
}

function ContentTitle15() {
  return <div className="h-[30px] shrink-0 w-full" data-name="Content_title" />;
}

function ContentText30() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Content_text">
      <p className="absolute css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal inset-0 leading-[normal] text-[#5a3e26] text-[14px] text-justify case-font-wdth">
        Se llevó a cabo una evaluación del prototipo con personas reales, lo que permitió detectar dificultades de uso y confirmar que las propuestas desarrolladas realmente responden a lo que los usuarios necesitan.
      </p>
    </div>
  );
}

function ModuleText16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative w-full" data-name="Module-Text">
      <ContentTitle15 />
      <ContentText30 />
    </div>
  );
}

function ContentText31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[372px]" data-name="content-text">
      <ModuleText16 />
    </div>
  );
}

function ContentResume388Px11() {
  return (
    <div className="bg-[#fff6eb] h-[670px] relative rounded-[22px] shrink-0 w-[388px]" data-name="Content_Resume_388px">
      <div className="content-stretch flex flex-col gap-[22px] items-start overflow-clip px-[8px] py-[22px] relative rounded-[inherit] size-full">
        <IconDaysText7 />
        <ContentImage20 />
        <ContentText31 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-px pointer-events-none rounded-[22px]" />
    </div>
  );
}

function ContentProject1000Px() {
  return (
    <div className="bg-[#f7f2ed] h-[670px] relative rounded-[22px] shrink-0 w-[1000px]" data-name="Content_Project_1000px">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[362px] relative shrink-0 w-[950px]" data-name="testing_feedback 2">
          <img alt="Testing y feedback" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTestingFeedback2} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-px pointer-events-none rounded-[22px]" />
    </div>
  );
}

function ContentTitle16() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Content_title">
      <div className={CASE_CLASS_TITLE_MD}>
        <p className="css-4hzbpn leading-[normal]">Futuribles</p>
      </div>
    </div>
  );
}

function ContentText32() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Content_text">
      <div className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-0 leading-[0] text-[#5a3e26] text-[14px] text-justify case-font-wdth">
        <p className="css-4hzbpn mb-0">
          <span className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] case-font-wdth">
            Chatbox
          </span>
          <span className="leading-[normal]">: Se va a desarrollar una pantalla previa donde aparezcan diferentes comunidades a las que poder unirse para hablar con personas en una situación parecida y tener la posibilidad de compartir sus vivencias y darse apoyo.</span>
        </p>
        <p className="css-4hzbpn leading-[normal] mb-0">&nbsp;</p>
        <p className="css-4hzbpn leading-[normal] mb-0">&nbsp;</p>
        <p className="css-4hzbpn mb-0">
          <span className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] case-font-wdth">{`Progreso: `}</span>
          <span className="leading-[normal]">Al terminar cada actividad, saldrá una pantalla donde se verá el crecimiento de la planta a modo de feedback para que puedan ver su progreso de una manera más visual.</span>
        </p>
        <p className="css-4hzbpn leading-[normal] mb-0">&nbsp;</p>
        <p className="css-4hzbpn leading-[normal] mb-0">&nbsp;</p>
        <p className="css-4hzbpn mb-0">
          <span className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] case-font-wdth">{`Perfil: `}</span>
          <span className="leading-[normal]">Añadiremos una pantalla donde las personas usuarias puedan ver su perfil, ya que la actual puede ser confuso al tener campos rellenables.</span>
        </p>
        <p className="css-4hzbpn leading-[normal] mb-0">&nbsp;</p>
        <p className="css-4hzbpn leading-[normal] mb-0">&nbsp;</p>
        <p className="css-4hzbpn leading-[normal] mb-0">&nbsp;</p>
        <p className="css-4hzbpn leading-[normal]">&nbsp;</p>
      </div>
    </div>
  );
}

function ModuleText17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative w-full" data-name="Module-Text">
      <ContentTitle16 />
      <ContentText32 />
    </div>
  );
}

function ContentText33() {
  return (
    <div className="content-stretch flex flex-col h-[298px] items-start relative shrink-0 w-[372px]" data-name="content-text">
      <ModuleText17 />
    </div>
  );
}

function ContentImage21() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[370px] overflow-clip" data-name="Content-Image">
      <div className="content-stretch flex flex-col items-center overflow-clip py-[71px] relative rounded-[inherit] w-full">
        <div className="h-[139px] relative shrink-0 w-[350px]" data-name="futuribles 1">
          <img alt="Futuribles" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFuturibles1} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-px pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ContentResume388Px12() {
  return (
    <div className="bg-[#f7f2ed] h-[670px] relative rounded-[22px] shrink-0 w-[388px]" data-name="Content_Resume_388px">
      <div className="content-stretch flex flex-col gap-[22px] items-start overflow-clip px-[8px] py-[22px] relative rounded-[inherit] size-full">
        <ContentText33 />
        <ContentImage21 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-px pointer-events-none rounded-[22px]" />
    </div>
  );
}

function ContentText34() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-[135px]" data-name="content-text" />;
}

function ContentTitle184Px1() {
  return (
    <div className="bg-[#f7f2ed] content-stretch flex flex-col h-[670px] items-center justify-center relative shrink-0 w-[184px]" data-name="Content_Title_184px">
      <ContentText34 />
    </div>
  );
}

function ContentTitle17() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Content_title">
      <div className={CASE_CLASS_TITLE_MD}>
        <p className="css-4hzbpn leading-[normal]">Conclusiones</p>
      </div>
    </div>
  );
}

function ContentText35() {
  return (
    <div className="0 relative shrink-0 w-full" data-name="Content_text">
      <div className={CASE_CLASS_BODY_JUSTIFY}>
        <p className="css-4hzbpn mb-0">{`En este proyecto, lo más retador ha sido poder organizarnos con distintas personas y priorizar las tareas para conseguir realizar todo el proceso en 5 días de trabajo. `}</p>
        <p className="css-4hzbpn mb-0">Llegar a lograr que la idea inicial se transformara en una experiencia clara y funcional para las personas usuarias fue muy gratificante. Finalmente, pudimos observar que este proyecto tiene una gran capacidad de expansión en próximos MVP, ya que es flexible y puede adaptarse a diferentes contextos y necesidades, sin embargo no pudimos ampliarlo como hubiéramos querido ya que la metodología nos condicionaba a realizarlo en un tiempo concreto.</p>
        <p className="css-4hzbpn mb-0">&nbsp;</p>
        <p className="css-4hzbpn">Idear y diseñar en equipo según la metodología Design Sprint ha sido una experiencia sorprendente. Es increíble ver cómo las ideas maduran hasta convertirse en un prototipo a través del intercambio de puntos de vista, habilidades y aprendizajes compartidos por el equipo.</p>
      </div>
    </div>
  );
}

function ModuleText18() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Module-Text">
      <ContentTitle17 />
      <ContentText35 />
    </div>
  );
}

function ContentText36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[454px] items-start min-h-px min-w-px relative" data-name="content-text">
      <ModuleText18 />
    </div>
  );
}

function ContentTitle18() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Content_title">
      <div className={CASE_CLASS_TITLE_MD}>
        <p className="css-4hzbpn leading-[normal]">Agradecimientos</p>
      </div>
    </div>
  );
}

function ContentText37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content_text">
      <div className={CASE_CLASS_BODY_JUSTIFY}>
        <p className="css-4hzbpn mb-0">A los compañeros y compañeras que conformaron este trabajo grupal:</p>
        <p className="css-4hzbpn mb-0">&nbsp;</p>
        <p className="css-4hzbpn mb-0">
          <a href={LINKS_CREDITS_CASE2[0]} target={LINKS_CREDITS_CASE2[0] === '#' ? undefined : '_blank'} rel={LINKS_CREDITS_CASE2[0] === '#' ? undefined : 'noopener noreferrer'} className={TEXT_LINK_CLASS} title={LINKS_CREDITS_CASE2[0] === '#' ? 'Enlace en espera' : 'Ver perfil de Agustina'} aria-label={LINKS_CREDITS_CASE2[0] === '#' ? 'Agustina (enlace en espera)' : 'Ver perfil de Agustina'} onClick={(e) => LINKS_CREDITS_CASE2[0] === '#' && e.preventDefault()}>Agustina</a>
          {', '}
          <a href={LINKS_CREDITS_CASE2[1]} target={LINKS_CREDITS_CASE2[1] === '#' ? undefined : '_blank'} rel={LINKS_CREDITS_CASE2[1] === '#' ? undefined : 'noopener noreferrer'} className={TEXT_LINK_CLASS} title={LINKS_CREDITS_CASE2[1] === '#' ? 'Enlace en espera' : 'Ver perfil de Anna'} aria-label={LINKS_CREDITS_CASE2[1] === '#' ? 'Anna (enlace en espera)' : 'Ver perfil de Anna'} onClick={(e) => LINKS_CREDITS_CASE2[1] === '#' && e.preventDefault()}>Anna</a>
          {', '}
          <a href={LINKS_CREDITS_CASE2[2]} target={LINKS_CREDITS_CASE2[2] === '#' ? undefined : '_blank'} rel={LINKS_CREDITS_CASE2[2] === '#' ? undefined : 'noopener noreferrer'} className={TEXT_LINK_CLASS} title={LINKS_CREDITS_CASE2[2] === '#' ? 'Enlace en espera' : 'Ver perfil de Claudia'} aria-label={LINKS_CREDITS_CASE2[2] === '#' ? 'Claudia (enlace en espera)' : 'Ver perfil de Claudia'} onClick={(e) => LINKS_CREDITS_CASE2[2] === '#' && e.preventDefault()}>Claudia</a>
          {', '}
          <a href={LINKS_CREDITS_CASE2[3]} target={LINKS_CREDITS_CASE2[3] === '#' ? undefined : '_blank'} rel={LINKS_CREDITS_CASE2[3] === '#' ? undefined : 'noopener noreferrer'} className={TEXT_LINK_CLASS} title={LINKS_CREDITS_CASE2[3] === '#' ? 'Enlace en espera' : 'Ver perfil de Erik'} aria-label={LINKS_CREDITS_CASE2[3] === '#' ? 'Erik (enlace en espera)' : 'Ver perfil de Erik'} onClick={(e) => LINKS_CREDITS_CASE2[3] === '#' && e.preventDefault()}>Erik</a>
          {' y '}
          <a href={LINKS_CREDITS_CASE2[4]} target={LINKS_CREDITS_CASE2[4] === '#' ? undefined : '_blank'} rel={LINKS_CREDITS_CASE2[4] === '#' ? undefined : 'noopener noreferrer'} className={TEXT_LINK_CLASS} title={LINKS_CREDITS_CASE2[4] === '#' ? 'Enlace en espera' : 'Ver perfil de Jonattan'} aria-label={LINKS_CREDITS_CASE2[4] === '#' ? 'Jonattan (enlace en espera)' : 'Ver perfil de Jonattan'} onClick={(e) => LINKS_CREDITS_CASE2[4] === '#' && e.preventDefault()}>Jonattan</a>
        </p>
        <p className="css-4hzbpn mb-0">&nbsp;</p>
        <p className="css-4hzbpn">/enero/2026</p>
      </div>
    </div>
  );
}

function ModuleText19() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Module-Text">
      <ContentTitle18 />
      <ContentText37 />
    </div>
  );
}

function ContentText38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[238px] items-start min-h-px min-w-px relative" data-name="content-text">
      <ModuleText19 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[46px] h-[602px] items-center relative shrink-0 w-full" data-name="Content">
      <ContentText36 />
      <ContentText38 />
    </div>
  );
}

function ContentProject1000Px1() {
  return (
    <div className="bg-[#f7f2ed] h-[670px] relative rounded-[22px] shrink-0 w-[1000px]" data-name="Content_Project_1000px">
      <div className="content-stretch flex flex-col items-center overflow-clip px-[199px] py-[22px] relative rounded-[inherit] size-full">
        <Content1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-px pointer-events-none rounded-[22px]" />
    </div>
  );
}

function ContentTextOtherFormats() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Content-Text">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5a3e26] text-[16px] text-right tracking-[-0.48px]">
        <p className="css-ew64yg leading-[28px]">OTROS FORMATOS:</p>
      </div>
    </div>
  );
}

function IcnBehance() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="icn_behance">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(90, 62, 38, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
          <g clipPath="url(#clip0_34_1435_case2)" id="icn_behance">
            <rect fill="#F7F2ED" height="44" width="44" />
            <path clipRule="evenodd" d={svgPathsOtherFormats.p5a0b600} fill="var(--fill-0, #5A3E26)" fillRule="evenodd" id="Vector" />
          </g>
          <defs>
            <clipPath id="clip0_34_1435_case2">
              <rect fill="white" height="44" width="44" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function IcnFigma() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="icn_Figma">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(90, 62, 38, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
          <g id="icn_Figma">
            <rect fill="#F7F2ED" height="44" width="44" />
            <path clipRule="evenodd" d={svgPathsOtherFormats.p27c0d200} fill="var(--fill-0, #5A3E26)" fillRule="evenodd" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IcnYoutube() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="icn_youtube">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(90, 62, 38, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
          <g id="icn_youtube">
            <rect fill="#F7F2ED" height="44" width="44" />
            <path d={svgPathsOtherFormats.pee38400} fill="var(--fill-0, #5A3E26)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

const linkIconClass =
  "inline-flex shrink-0 cursor-pointer transition-transform duration-300 ease-out hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5a3e26] focus-visible:ring-offset-2 rounded";

function ContentLinksOtherFormats() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content-Links">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center p-[8px] relative w-full">
          <a
            href={LINKS_OTHER_FORMATS_CASE2[0]}
            target="_blank"
            rel="noopener noreferrer"
            className={linkIconClass}
            aria-label="Ver en Behance"
            title="Ver en Behance"
          >
            <IcnBehance />
          </a>
          <a
            href={LINKS_OTHER_FORMATS_CASE2[1]}
            target="_blank"
            rel="noopener noreferrer"
            className={linkIconClass}
            aria-label="Ver en Figma"
            title="Ver en Figma"
          >
            <IcnFigma />
          </a>
          <a
            href={LINKS_OTHER_FORMATS_CASE2[2]}
            target="_blank"
            rel="noopener noreferrer"
            className={linkIconClass}
            aria-label="Ver en YouTube"
            title="Ver en YouTube"
          >
            <IcnYoutube />
          </a>
        </div>
      </div>
    </div>
  );
}

function ContentOtherFormats() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pt-[280px] relative shrink-0 w-[200px]" data-name="Content-Other-Formats">
      <div aria-hidden="true" className="absolute border-[#5a3e26] border-b border-dashed inset-px pointer-events-none" />
      <ContentTextOtherFormats />
      <ContentLinksOtherFormats />
    </div>
  );
}

function ConentHorizontalProjectCase() {
  return (
    <div className="absolute content-stretch flex gap-[20px] items-start left-0 right-0 overflow-clip top-[21px]" data-name="Conent-Horizontal-ProjectCase">
      <ContentLeft184Px />
      <ContentResume388Px />
      <ContentProject592Px />
      <ContentResume388Px1 />
      <ContentResume388Px2 />
      <ContentResume388Px3 />
      <ContentResume388Px4 />
      <ContentResume388Px5 />
      <ContentProject592Px1 />
      <ContentTitle184Px />
      <ContentResume388Px6 />
      <ContentProject592Px2 />
      <ContentProject592Px3 />
      <ContentProject592Px4 />
      <ContentTitle184Px />
      <ContentResume388Px7 />
      <ContentResume388Px8 />
      <ContentResume388Px9 />
      <ContentProject592Px5 />
      <ContentTitle184Px />
      <ContentResume388Px10 />
      <ContentProject592Px6 />
      <ContentProject592Px7 />
      <ContentProject592Px8 />
      <ContentProject592Px9 />
      <ContentTitle184Px />
      <ContentResume388Px11 />
      <ContentProject1000Px />
      <ContentResume388Px12 />
      <ContentTitle184Px1 />
      <ContentOtherFormats />
      <ContentProject1000Px1 />
    </div>
  );
}

function UsecaseContainer1280X() {
  return (
    <div className="absolute bg-[#f7f2ed] h-[712px] left-0 right-0 overflow-x-auto overflow-y-clip top-0" data-name="Usecase_container_1280x712">
      <ConentHorizontalProjectCase />
    </div>
  );
}

function HitArea() {
  return <div className="absolute left-[47px] size-[64px] top-[47px]" data-name="Hit_area" />;
}

function HitArea1() {
  return <div className="absolute left-[149px] size-[64px] top-[47px]" data-name="Hit_area" />;
}

function HitArea2() {
  return <div className="absolute left-[149px] size-[64px] top-[149px]" data-name="Hit_area" />;
}

function HitArea3() {
  return <div className="absolute left-[47px] size-[64px] top-[149px]" data-name="Hit_area" />;
}

export default function Case() {
  return (
    <div className="bg-[#f7f2ed] relative size-full" data-name="Case 2">
      <MatrixV />
      <UsecaseContainer1280X />
      <HitArea />
      <HitArea1 />
      <HitArea2 />
      <HitArea3 />
    </div>
  );
}
