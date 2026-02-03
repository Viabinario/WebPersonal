/**
 * Mockup del formulario de contacto para casos de estudio (Case1, Case2).
 * Solo presentación; la lógica y el envío están en ContactoSection.tsx.
 * Centralizado aquí para no duplicar código entre Case1 y Case2.
 */

import svgPaths from '../../imports/svg-pj45jcyo5z';
import { CASE_CLASS_FORM_LABEL } from './index';

const CONTENT_LABEL = () => (
  <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
);
const CONTENT_MSG = () => (
  <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
);

function FormInput({ label }: { label: string }) {
  return (
    <div className="bg-[#f7f2ed] h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[14px] items-center px-[12px] py-[6px] relative size-full">
          <div className={CASE_CLASS_FORM_LABEL}>
            <p className="css-g0mm18 leading-[normal] overflow-hidden">{label}</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#a16f44] border-dashed inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function FormFieldRow({ label, dataName }: { label: string; dataName: string }) {
  return (
    <div
      className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]"
      data-name={dataName}
    >
      <CONTENT_LABEL />
      <FormInput label={label} />
      <CONTENT_MSG />
    </div>
  );
}

function MessageFieldRow() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Message_Input">
      <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content Label" />
      <div className="bg-[#f7f2ed] relative rounded-[8px] shrink-0 w-full" data-name="Input">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[2px] items-start p-[12px] relative w-full">
            <div className="content-stretch flex h-[180px] items-start relative shrink-0 w-full" data-name="Content Placeholder">
              <div className="flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#5a3e26] text-[16px] text-ellipsis case-font-wdth">
                <p className="css-4hzbpn leading-[normal]">MENSAJE</p>
              </div>
            </div>
            <div className="content-stretch flex items-end justify-end shrink-0 w-full" data-name="Content icon" />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#a16f44] border-dashed inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <div className="content-stretch flex h-[20px] items-center justify-center shrink-0 w-full" data-name="Content Message" />
    </div>
  );
}

function FormButtonsRow() {
  return (
    <div className="content-stretch flex gap-[20px] h-[44px] items-center justify-end relative shrink-0 w-[400px]" data-name="Content">
      <div className="bg-[#e1e1e1] content-stretch flex gap-[10px] h-[44px] items-center justify-center p-[10px] relative rounded-[99999997952px] shrink-0 w-[88px]" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#a3a19e] border-solid inset-0 pointer-events-none rounded-[99999997952px] shadow-[25px_25px_10px_0px_rgba(0,0,0,0),16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)]" />
        <div className="relative shrink-0 size-[24px]" data-name="send-01">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="send-01">
              <path d={svgPaths.p18e0c400} id="Icon" stroke="var(--stroke-0, #3D3A36)" strokeLinecap="round" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
      <div className="bg-[#e1e1e1] content-stretch flex gap-[10px] h-[44px] items-center justify-center p-[10px] relative rounded-[999px] shrink-0 w-[88px]" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#a3a19e] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[25px_25px_10px_0px_rgba(0,0,0,0),16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)]" />
        <div className="relative shrink-0 size-[24px]" data-name="delete">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="delete">
              <path d={svgPaths.p327d2300} id="Icon" stroke="var(--stroke-0, #3D3A36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

/** Mockup del formulario de contacto (contenedor con campos estáticos). Usado dentro del layout de casos de estudio. */
function ContactFormCase() {
  return (
    <div className="bg-[#e5e2de] relative rounded-[22px] shrink-0 w-[490px]" data-name="Contact_Form">
      <div className="content-stretch flex flex-col gap-[2px] items-center overflow-clip pb-[32px] pt-[22px] px-[100px] relative rounded-[inherit] w-full">
        <FormFieldRow label="NOMBRE" dataName="Name_Input" />
        <FormFieldRow label="EMAIL" dataName="Email_Input" />
        <FormFieldRow label="TELÉFONO" dataName="Phone_Input" />
        <FormFieldRow label="ASUNTO" dataName="Subject_Input" />
        <MessageFieldRow />
        <FormButtonsRow />
      </div>
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-0 pointer-events-none rounded-[22px] shadow-[25px_25px_10px_0px_rgba(0,0,0,0),16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)]" />
    </div>
  );
}

/**
 * Bloque "Content-Form" que se inserta en ContentBodyRight de Case1/Case2.
 * Incluye el mockup del formulario de contacto; la lógica real está en ContactoSection.
 */
export function ContentForm1Case() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content-Form">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pl-[200px] relative w-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[712px]" data-name="Contact">
            <ContactFormCase />
          </div>
        </div>
      </div>
    </div>
  );
}
