import { LINKS_OTHER_FORMATS_CASE3 } from "../components/case-shared";
import {
  ContentTextOtherFormats,
  ContentLinksOtherFormats,
} from "../components/case-shared/OtherFormatsSection";
import img111 from "../assets/case3/case3-01.png";
import img22 from "../assets/case3/case3-02.png";
import img32 from "../assets/case3/case3-03.png";
import img42 from "../assets/case3/case3-04.png";
import img52 from "../assets/case3/case3-05.png";
import img62 from "../assets/case3/case3-06.png";
import img72 from "../assets/case3/case3-07.png";
import img82 from "../assets/case3/case3-08.png";
import img92 from "../assets/case3/case3-09.png";
import img102 from "../assets/case3/case3-10.png";
import img112 from "../assets/case3/case3-11.png";
import img122 from "../assets/case3/case3-12.png";
import img131 from "../assets/case3/case3-13.png";
import img142 from "../assets/case3/case3-14.png";
import img152 from "../assets/case3/case3-15.png";
import img162 from "../assets/case3/case3-16.png";
import img172 from "../assets/case3/case3-17.png";
import img183 from "../assets/case3/case3-18.png";

// ============================================================================
// INTRO SECTION - Project Information
// ============================================================================

function ContentProjectTitle() {
  return (
    <div className="content-start flex flex-wrap gap-[10px] h-[72px] items-start relative shrink-0 w-full" data-name="Content Project Title">
      <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Bold',sans-serif] font-bold leading-[40px] min-h-px min-w-px relative text-[#5a3e26] text-[32px] case-font-wdth">
        Mingo!
      </p>
    </div>
  );
}

function ContentTitle() {
  return (
    <div className="h-[29.688px] relative shrink-0 w-full" data-name="Content_title">
      <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold inset-0 justify-center leading-[0] text-[#5a3e26] text-[16px] case-font-wdth">
        <p className="css-4hzbpn leading-[normal]">Tipo de Proyecto</p>
      </div>
    </div>
  );
}

function ContentText() {
  return (
    <div className="h-[201.217px] relative shrink-0 w-full" data-name="Content_text">
      <p className="absolute css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal inset-0 leading-[normal] text-[#5a3e26] text-[14px] case-font-wdth">
        Proyecto Inicial de Bootcamp mobile App, trabajo individual.
      </p>
    </div>
  );
}

function ModuleText() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[176px]" data-name="Module-Text">
      <ContentTitle />
      <ContentText />
    </div>
  );
}

function ContentTitle1() {
  return (
    <div className="h-[29.688px] relative shrink-0 w-full" data-name="Content_title">
      <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold inset-0 justify-center leading-[0] text-[#5a3e26] text-[16px] case-font-wdth">
        <p className="css-4hzbpn leading-[normal]">Entregables</p>
      </div>
    </div>
  );
}

function ContentText1() {
  return (
    <div className="h-[201.217px] relative shrink-0 w-full" data-name="Content_text">
      <p className="absolute css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal inset-0 leading-[normal] text-[#5a3e26] text-[14px] case-font-wdth">
        Product Design. Fases de Investigación y Estrategia. Fases de Diseño y Prototipado. Fases de Especificaciones. Presentación oral.
      </p>
    </div>
  );
}

function ModuleText1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[176px]" data-name="Module-Text">
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
    <div className="h-[29.688px] relative shrink-0 w-full" data-name="Content_title">
      <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold inset-0 justify-center leading-[0] text-[#5a3e26] text-[16px] case-font-wdth">
        <p className="css-4hzbpn leading-[normal]">{`Herramientas `}</p>
      </div>
    </div>
  );
}

function ContentText3() {
  return (
    <div className="h-[201.217px] relative shrink-0 w-full" data-name="Content_text">
      <p className="absolute css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal inset-0 leading-[0] text-[#5a3e26] text-[14px] case-font-wdth">
        <span className="leading-[normal]">{`Metodología `}</span>
        <span className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] case-font-wdth">
          Design Thinking
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
    <div className="h-[29.688px] relative shrink-0 w-full" data-name="Content_title">
      <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold inset-0 justify-center leading-[0] text-[#5a3e26] text-[16px] case-font-wdth">
        <p className="css-4hzbpn leading-[normal]">{`Duración `}</p>
      </div>
    </div>
  );
}

function ContentText4() {
  return (
    <div className="h-[201.217px] relative shrink-0 w-full" data-name="Content_text">
      <p className="absolute css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal inset-0 leading-[normal] text-[#5a3e26] text-[14px] text-justify case-font-wdth">
        15 días.
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
    <div className="content-stretch flex gap-[20px] h-[163px] items-start relative shrink-0" data-name="Content_Text">
      <ModuleText2 />
      <ModuleText3 />
    </div>
  );
}

function ContentIntro() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-end px-[8px] relative shrink-0 w-[388px]" data-name="Content_Intro">
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

// ============================================================================
// IMAGE CARDS WITH TEXT - Research & Design Process
// ============================================================================

function ImageCard({ src, text, alt = "" }: { src: string; text: string; alt?: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[670px] items-start relative shrink-0 w-[953px]">
      <div className="h-[536px] relative shrink-0 w-[953px]">
        <img alt={alt} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={src} />
      </div>
      <div className="bg-[#f7f2ed] content-stretch flex h-[130px] items-center justify-center px-[22px] py-[18px] relative rounded-bl-[22px] rounded-br-[22px] rounded-tr-[22px] shrink-0 w-[953px]">
        <div aria-hidden="true" className="absolute border border-[#5a3e26] border-solid inset-0 pointer-events-none rounded-bl-[22px] rounded-br-[22px] rounded-tr-[22px]" />
        <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[26px] min-h-px min-w-px relative text-[#5a3e26] text-[20px] text-justify case-font-wdth">
          {text}
        </p>
      </div>
    </div>
  );
}

function ImageCardAspect({ src, text, alt = "" }: { src: string; text: string; alt?: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[670px] items-start relative shrink-0 w-[953px]">
      <div className="aspect-[3840/2160] relative shrink-0 w-full">
        <img alt={alt} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={src} />
      </div>
      <div className="bg-[#f7f2ed] content-stretch flex h-[130px] items-center justify-center px-[22px] py-[18px] relative rounded-bl-[22px] rounded-br-[22px] rounded-tr-[22px] shrink-0 w-[953px]">
        <div aria-hidden="true" className="absolute border border-[#5a3e26] border-solid inset-0 pointer-events-none rounded-bl-[22px] rounded-br-[22px] rounded-tr-[22px]" />
        <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[26px] min-h-px min-w-px relative text-[#5a3e26] text-[20px] text-justify case-font-wdth">
          {text}
        </p>
      </div>
    </div>
  );
}

function SimpleImage({ src, alt = "" }: { src: string; alt?: string }) {
  return (
    <div className="h-[536px] relative shrink-0 w-[953px]">
      <img alt={alt} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={src} />
    </div>
  );
}

// ============================================================================
// OTHER FORMATS SECTION (shared components + Case3 wrapper and links)
// ============================================================================

function ContentOtherFormatsCase3() {
  return (
    <div className="bg-[#f7f2ed] content-stretch flex flex-col h-[670px] items-center pt-[250px] relative shrink-0 w-[292px]" data-name="Content_Other_Formats">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[184px]">
        <div aria-hidden="true" className="absolute border-[#5a3e26] border-b border-dashed inset-0 pointer-events-none" />
        <ContentTextOtherFormats />
        <ContentLinksOtherFormats links={LINKS_OTHER_FORMATS_CASE3} />
      </div>
    </div>
  );
}

// ============================================================================
// LEFT SPACER (mismo concepto que ContentLeft184Px en Case1)
// ============================================================================

function ContentLeft254Px() {
  return (
    <div
      className="bg-[#f7f2ed] h-[670px] shrink-0 w-[254px]"
      data-name="Content_Left_254px"
    />
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function Case3() {
  return (
    <div className="bg-[#f7f2ed] relative size-full" data-name="Case3">
      <div
        className="absolute left-0 right-0 top-0 h-[712px] overflow-x-auto overflow-y-clip bg-[#f7f2ed]"
        data-name="Usecase_container_1280x712"
      >
        <div
          className="absolute left-0 right-0 top-0 flex gap-[4px] items-start overflow-clip content-stretch"
          data-name="Conent-Horizontal-ProjectCase"
        >
          <ContentLeft254Px />
          <ContentResume388Px />

          <SimpleImage src={img111} alt="Mingo! - Introducción" />
          <SimpleImage src={img22} alt="Mingo! - Contexto" />

          <ImageCard
        src={img32}
        text="El segmento de usuarios identificado para alquiler flexible es observado como tendencia y nicho. La investigación inicial, permitió clarificar grupos etarios, preferencias de consumo, distribución geográfica. También, como modelo de negocio, se observaron riesgos y oportunidades."
        alt="Análisis de Usuario"
      />

      <ImageCard
        src={img42}
        text="Las competencias clasificadas como directas (Blueground, Spotahome) incluyen el modelo de Flex Living en sus aplicaciones. La indirecta (Airbnb) si bien no incluye el Flex Living, su aplicación contiene características que pueden resultar interesantes a incorporar en nuestra propuesta. Los insights de esta fase contemplan servicios que no se perciben en las competencias, como mudanza, entre otras."
        alt="Análisis de Competencia"
      />

      <ImageCard
        src={img52}
        text="De las oportunidades identificadas mediante DAFO, los insights obtenidos apuntan a mejorar herramientas básicas de este tipo de servicios, como el mapa, añadir servicios que las competencias no incluyen y a fortalecer la confianza y eficiencia en los servicios elementales, como el de los contratos flexibles."
        alt="Análisis DAFO"
      />

      <ImageCard
        src={img62}
        text="Las encuestas, implementadas con Google Forms, permitieron ordenar preferencias de usuarios y a comprender, su hubo experiencias con aplicaciones similares, dolores o atisbos de efectos Wow."
        alt="Encuestas"
      />

      <ImageCard
        src={img72}
        text="Las entrevistas realizadas nos permitieron profundizar en las futuras características de los servicios de nuestra propuesta. La estructuración de las preguntas facilitaron comprender la situación en categorías como aspectos del negocio, de servicios adicionales, integración con la comunidad, etc."
        alt="Entrevistas"
      />

      <ImageCard
        src={img82}
        text="En nuestro caso, el buyer puede ser el user que alquila para habitar, aunque también podría ser una empresa que gestiona para sus empleados. El arquetipo nos habla de quien por trabajo no se arraiga a largo plazo, pero a quien sí le importa integrarse en la vida del barrio por sus servicios."
        alt="User Persona"
      />

      <SimpleImage src={img92} alt="Mapa de Empatía" />

      <ImageCard
        src={img102}
        text="Con el análisis de Empathy Map ahondamos en las variables de confianza y eficiencia del sistema de alquiler en razón de las características de nuestro buyer."
        alt="Análisis Empathy Map"
      />

      <ImageCard
        src={img112}
        text="La propuesta de valor comprende: Alquiler flexible, experiencia end to end (desde la búsqueda hasta servicios asociados a la residencia), Servicios integrados como parte del contrato, comunidad funcional y sostenibilidad urbana, transparencia y confianza, UX hiperpersonalizada (en base a perfil, estancia y elecciones)."
        alt="Propuesta de Valor"
      />

      <ImageCard
        src={img122}
        text="Nuestra app Mingo! logra perfilarse como una propuesta que no sólo ofrece nuevos servicios, sino que también se plantea resolver problemas o dolencias que tanto el propio negocio de alquiler, como otros servicios de app similares, generan y perjudican la experiencia de los usuarios."
        alt="Point of View"
      />

      <ImageCard
        src={img131}
        text="Las ideas finales nos conducen a considerar una serie de herramientas que permiten abordar las distintas categorías que caracterizan el vínculo del producto con el usuario. De cara al diseño de un MVP, priorizaremos unas sobre otras utilizando la herramienta de Historia de Usuario."
        alt="MoSCoW"
      />

      <SimpleImage src={img142} alt="User Journey" />

      <ImageCardAspect
        src={img152}
        text="La arquitectura de información se basa en tres niveles. Búsqueda, residencia y comunidad dan forma global a la estructuración."
        alt="Arquitectura de Información"
      />

      <ImageCardAspect
        src={img162}
        text="A medida que el usuario profundiza y progresa a nivel buyer, accede a más herramientas de la app."
        alt="Wireframes"
      />

      <ImageCardAspect
        src={img172}
        text="El uso de AI fue pensado para precisar la información como recurso para las preferencias del usuario, y conectar con proveedores ajustados a sus necesidades. En términos de interfaz queda por avanzar en la arquitectura de interacciones para cada nivel de progreso del user/buyer."
        alt="Prototipo"
      />

      <ImageCardAspect
        src={img183}
        text="Este fue el primer caso de estudio realizado en el Bootcamp. El mayor desafío fue sintetizar insights de entrevistas y encuestas para identifcar el verdadero problema a resolver: no solo el alquiler flexible, sino también articular una gestión integral de servicios en función de reducir fricciones contractuales."
        alt="Conclusiones"
      />

          <ContentOtherFormatsCase3 />
        </div>
      </div>
    </div>
  );
}
