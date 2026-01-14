import svgPaths from "./svg-nd4dsni8hv";
import clsx from "clsx";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
      <div className="content-stretch flex gap-[14px] items-center px-[12px] py-[6px] relative size-full">{children}</div>
    </div>
  );
}
type WrapperProps = {
  text: string;
  additionalClassNames?: string;
};

function Wrapper({ children, text, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className="bg-[#f7f2ed] h-[48px] relative rounded-[8px] shrink-0 w-full">
      <Wrapper1 additionalClassNames={additionalClassNames}>
        <div style={{ fontVariationSettings: "'wdth' 100" }} className={clsx("basis-0 flex flex-col font-['Roboto:Regular',sans-serif] font-normal grow h-[16px] justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap tracking-[2.8px]", additionalClassNames)}>
          <p className="leading-[normal] overflow-ellipsis overflow-hidden">{text}</p>
        </div>
      </Wrapper1>
      <div aria-hidden="true" className="absolute border border-[#a16f44] border-dashed inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Delete() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="delete">
          <path d={svgPaths.p327d2300} id="Icon" stroke="var(--stroke-0, #F7F2ED)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#e1e1e1] content-stretch flex gap-[10px] h-[44px] items-center justify-center p-[10px] relative rounded-[1e+11px] shrink-0 w-[88px]">
      <div aria-hidden="true" className="absolute border border-[#a3a19e] border-solid inset-0 pointer-events-none rounded-[1e+11px] shadow-[25px_25px_10px_0px_rgba(0,0,0,0),16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)]" />
      <div className="relative shrink-0 size-[24px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="send-01">
            <path d={svgPaths.p18e0c400} id="Icon" stroke="var(--stroke-0, #3D3A36)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function AlertTriangle() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="alert-triangle">
          <path d={svgPaths.p13b00a00} id="Icon" stroke="var(--stroke-0, #B33838)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}
type Text2Props = {
  text: string;
  additionalClassNames?: string;
};

function Text2({ text, additionalClassNames = "" }: Text2Props) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className={clsx("-webkit-box basis-0 flex-col font-['Roboto:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[16px]", additionalClassNames)}>
      <p className="leading-[normal]">{text}</p>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className="basis-0 flex flex-col font-['Roboto:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[14px] text-center text-white w-full">
      <p className="leading-[normal]">{text}</p>
    </div>
  );
}
type ContentPlaceholderTextProps = {
  text: string;
};

function ContentPlaceholderText({ text }: ContentPlaceholderTextProps) {
  return (
    <div className="content-stretch flex h-[180px] items-start relative shrink-0 w-full">
      <Text2 text={text} additionalClassNames="text-[#362517]" />
    </div>
  );
}

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className={clsx("basis-0 flex flex-col font-['Roboto:Regular',sans-serif] font-normal grow h-[16px] justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap tracking-[2.8px]", additionalClassNames)}>
      <p className="leading-[normal] overflow-ellipsis overflow-hidden">{text}</p>
    </div>
  );
}
type InputTextProps = {
  text: string;
};

function InputText({ text }: InputTextProps) {
  return (
    <div className="bg-[#ffcece] h-[48px] relative rounded-[8px] shrink-0 w-full">
      <Wrapper1>
        <Text text={text} additionalClassNames="text-[#362517]" />
      </Wrapper1>
      <div aria-hidden="true" className="absolute border border-[#b33838] border-dashed inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

export default function Usecase() {
  return (
    <div className="bg-white relative size-full" data-name="_Usecase 2">
      <div className="absolute content-stretch flex flex-col items-start left-[147px] top-[242px] w-[694px]" data-name="Contact">
        <div className="bg-[#ffcece] relative rounded-[22px] shrink-0 w-[490px]" data-name="Contact_Form">
          <div className="content-stretch flex flex-col gap-[2px] items-center overflow-clip pb-[32px] pt-[22px] px-[100px] relative rounded-[inherit] w-full">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Text Input">
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
              <InputText text="NOMBRE" />
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Text Input">
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
              <InputText text="EMAIL" />
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Text Input">
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
              <InputText text="TELÉFONO" />
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Text Input">
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
              <InputText text="ASUNTO" />
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Text Area">
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content Label" />
              <div className="bg-[#ffcece] relative rounded-[8px] shrink-0 w-full" data-name="Input">
                <div className="overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col gap-[2px] items-start p-[12px] relative w-full">
                    <ContentPlaceholderText text="MENSAJE" />
                    <div className="content-stretch flex items-end justify-end shrink-0 w-full" data-name="Content icon" />
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#b33838] border-dashed inset-0 pointer-events-none rounded-[8px]" />
              </div>
              <div className="content-stretch flex h-[20px] items-center justify-center shrink-0 w-full" data-name="Content Message" />
            </div>
            <div className="content-stretch flex gap-[20px] h-[44px] items-center justify-end relative shrink-0 w-[400px]" data-name="Content">
              <div className="bg-[#ffcece] content-stretch flex gap-[10px] h-[44px] items-center justify-center p-[10px] relative rounded-[1e+11px] shrink-0 w-[88px]" data-name="Button">
                <div aria-hidden="true" className="absolute border border-[#6f1818] border-solid inset-0 pointer-events-none rounded-[1e+11px] shadow-[25px_25px_10px_0px_rgba(0,0,0,0),16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)]" />
                <div className="relative shrink-0 size-[24px]" data-name="send-01">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g id="send-01">
                      <path d={svgPaths.p18e0c400} id="Icon" stroke="var(--stroke-0, #6F1818)" strokeLinecap="round" strokeWidth="2" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="bg-[#912727] content-stretch flex gap-[10px] h-[44px] items-center justify-center p-[10px] relative rounded-[999px] shrink-0 w-[88px]" data-name="Button">
                <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[999px] shadow-[25px_25px_10px_0px_rgba(0,0,0,0),16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)]" />
                <div className="relative shrink-0 size-[24px]" data-name="delete">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g id="delete">
                      <path d={svgPaths.p327d2300} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-0 pointer-events-none rounded-[22px] shadow-[25px_25px_10px_0px_rgba(0,0,0,0),16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)]" />
        </div>
      </div>
      <div className="absolute h-[730px] left-[1041px] top-[242px] w-[694px]" data-name="Contact">
        <div className="absolute bg-[#e5e2de] left-0 rounded-[22px] top-0 w-[490px]" data-name="Contact_Form">
          <div className="content-stretch flex flex-col gap-[2px] items-center overflow-clip pb-[32px] pt-[22px] px-[100px] relative rounded-[inherit] w-full">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Name_Input">
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
              <Wrapper text="NOMBRE APELLIDO APELLIDO" additionalClassNames="text-[#5a3e26]" />
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Text Input">
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
              <div className="bg-[#ffcece] h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
                <Wrapper1>
                  <Text text="EMAIL" additionalClassNames="text-[#362517]" />
                  <AlertTriangle />
                </Wrapper1>
                <div aria-hidden="true" className="absolute border border-[#b33838] border-dashed inset-0 pointer-events-none rounded-[8px]" />
              </div>
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Phone_Input">
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
              <Wrapper text="TELÉFONO" additionalClassNames="text-[#5a3e26]" />
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Subject_Input">
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
              <Wrapper text="ASUNTO" additionalClassNames="text-[#5a3e26]" />
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Message_Input">
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content Label" />
              <div className="bg-[#f7f2ed] relative rounded-[8px] shrink-0 w-full" data-name="Input">
                <div className="overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col gap-[2px] items-start p-[12px] relative w-full">
                    <div className="content-stretch flex h-[180px] items-start relative shrink-0 w-full" data-name="Content Placeholder">
                      <Text2 text="MENSAJE" additionalClassNames="text-[#5a3e26]" />
                    </div>
                    <div className="content-stretch flex items-end justify-end shrink-0 w-full" data-name="Content icon" />
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#a16f44] border-dashed inset-0 pointer-events-none rounded-[8px]" />
              </div>
              <div className="content-stretch flex h-[20px] items-center justify-center shrink-0 w-full" data-name="Content Message" />
            </div>
            <div className="content-stretch flex gap-[20px] h-[44px] items-center justify-end relative shrink-0 w-[400px]" data-name="Content">
              <Button />
              <div className="bg-[#4d4b4a] content-stretch flex gap-[10px] h-[44px] items-center justify-center p-[10px] relative rounded-[999px] shrink-0 w-[88px]" data-name="Button">
                <div aria-hidden="true" className="absolute border border-[#5a3e26] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.25)]" />
                <Delete />
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-0 pointer-events-none rounded-[22px] shadow-[25px_25px_10px_0px_rgba(0,0,0,0),16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)]" />
        </div>
        <div className="absolute bg-[#4d0d0d] content-stretch flex flex-col h-[88px] items-center justify-center left-[510px] overflow-clip rounded-[22px] shadow-[0px_54px_15px_0px_rgba(0,0,0,0),0px_34px_14px_0px_rgba(0,0,0,0.02),0px_19px_12px_0px_rgba(0,0,0,0.07),0px_9px_9px_0px_rgba(0,0,0,0.12),0px_2px_5px_0px_rgba(0,0,0,0.14)] top-[130px] w-[184px]" data-name="Modal">
          <div className="h-[91px] relative shrink-0 w-full" data-name="Content_text">
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col items-center px-[7px] py-[23px] relative size-full">
                <Text1 text="Ingresar email válido" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[730px] left-[1935px] top-[242px] w-[694px]" data-name="Contact">
        <div className="absolute bg-[#e5e2de] left-0 rounded-[22px] top-0 w-[490px]" data-name="Contact_Form">
          <div className="content-stretch flex flex-col gap-[2px] items-center overflow-clip pb-[32px] pt-[22px] px-[100px] relative rounded-[inherit] w-full">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Name_Input">
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
              <Wrapper text="NOMBRE APELLIDO APELLIDO" additionalClassNames="text-[#5a3e26]" />
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Email_Input">
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
              <Wrapper text="DIRECCIÓN @HOST.COM" additionalClassNames="text-[#5a3e26]" />
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Text Input">
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
              <div className="bg-[#ffcece] h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
                <Wrapper1>
                  <Text text="TELÉFONO" additionalClassNames="text-[#362517]" />
                  <AlertTriangle />
                </Wrapper1>
                <div aria-hidden="true" className="absolute border border-[#b33838] border-dashed inset-0 pointer-events-none rounded-[8px]" />
              </div>
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Subject_Input">
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
              <Wrapper text="ASUNTO" additionalClassNames="text-[#5a3e26]" />
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Message_Input">
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content Label" />
              <div className="bg-[#f7f2ed] relative rounded-[8px] shrink-0 w-full" data-name="Input">
                <div className="overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col gap-[2px] items-start p-[12px] relative w-full">
                    <div className="content-stretch flex h-[180px] items-start relative shrink-0 w-full" data-name="Content Placeholder">
                      <Text2 text="MENSAJE" additionalClassNames="text-[#5a3e26]" />
                    </div>
                    <div className="content-stretch flex items-end justify-end shrink-0 w-full" data-name="Content icon" />
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#a16f44] border-dashed inset-0 pointer-events-none rounded-[8px]" />
              </div>
              <div className="content-stretch flex h-[20px] items-center justify-center shrink-0 w-full" data-name="Content Message" />
            </div>
            <div className="content-stretch flex gap-[20px] h-[44px] items-center justify-end relative shrink-0 w-[400px]" data-name="Content">
              <Button />
              <div className="bg-[#4d4b4a] content-stretch flex gap-[10px] h-[44px] items-center justify-center p-[10px] relative rounded-[999px] shadow-[25px_25px_10px_0px_rgba(0,0,0,0),16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)] shrink-0 w-[88px]" data-name="Button">
                <Delete />
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-0 pointer-events-none rounded-[22px] shadow-[25px_25px_10px_0px_rgba(0,0,0,0),16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)]" />
        </div>
        <div className="absolute bg-[#4d0d0d] content-stretch flex flex-col h-[88px] items-center justify-center left-[510px] overflow-clip rounded-[22px] shadow-[0px_54px_15px_0px_rgba(0,0,0,0),0px_34px_14px_0px_rgba(0,0,0,0.02),0px_19px_12px_0px_rgba(0,0,0,0.07),0px_9px_9px_0px_rgba(0,0,0,0.12),0px_2px_5px_0px_rgba(0,0,0,0.14)] top-[218px] w-[184px]" data-name="Modal">
          <div className="h-[91px] relative shrink-0 w-full" data-name="Content_text">
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col items-center px-[7px] py-[23px] relative size-full">
                <Text1 text="Ingresa un número de teléfono válido" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[730px] left-[2829px] top-[242px] w-[694px]" data-name="Contact">
        <div className="absolute bg-[#e5e2de] left-0 rounded-[22px] top-0 w-[490px]" data-name="Contact_Form">
          <div className="content-stretch flex flex-col gap-[2px] items-center overflow-clip pb-[32px] pt-[22px] px-[100px] relative rounded-[inherit] w-full">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Name_Input">
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
              <Wrapper text="NOMBRE APELLIDO APELLIDO" additionalClassNames="text-[#5a3e26]" />
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Email_Input">
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
              <Wrapper text="DIRECCIÓN @HOST.COM" additionalClassNames="text-[#5a3e26]" />
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Phone_Input">
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
              <Wrapper text="+36 999 000 000" additionalClassNames="text-[#5a3e26]" />
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Text Input">
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
              <div className="bg-[#ffcece] h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
                <Wrapper1>
                  <Text text="ASUNTO" additionalClassNames="text-[#362517]" />
                  <AlertTriangle />
                </Wrapper1>
                <div aria-hidden="true" className="absolute border border-[#b33838] border-dashed inset-0 pointer-events-none rounded-[8px]" />
              </div>
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Message_Input">
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content Label" />
              <div className="bg-[#f7f2ed] relative rounded-[8px] shrink-0 w-full" data-name="Input">
                <div className="overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col gap-[2px] items-start p-[12px] relative w-full">
                    <div className="content-stretch flex h-[180px] items-start relative shrink-0 w-full" data-name="Content Placeholder">
                      <Text2 text="MENSAJE" additionalClassNames="text-[#5a3e26]" />
                    </div>
                    <div className="content-stretch flex items-end justify-end shrink-0 w-full" data-name="Content icon" />
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#a16f44] border-dashed inset-0 pointer-events-none rounded-[8px]" />
              </div>
              <div className="content-stretch flex h-[20px] items-center justify-center shrink-0 w-full" data-name="Content Message" />
            </div>
            <div className="content-stretch flex gap-[20px] h-[44px] items-center justify-end relative shrink-0 w-[400px]" data-name="Content">
              <Button />
              <div className="bg-[#4d4b4a] content-stretch flex gap-[10px] h-[44px] items-center justify-center p-[10px] relative rounded-[999px] shadow-[25px_25px_10px_0px_rgba(0,0,0,0),16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)] shrink-0 w-[88px]" data-name="Button">
                <Delete />
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-0 pointer-events-none rounded-[22px] shadow-[25px_25px_10px_0px_rgba(0,0,0,0),16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)]" />
        </div>
        <div className="absolute bg-[#4d0d0d] content-stretch flex flex-col h-[88px] items-center justify-center left-[510px] overflow-clip rounded-[22px] shadow-[0px_54px_15px_0px_rgba(0,0,0,0),0px_34px_14px_0px_rgba(0,0,0,0.02),0px_19px_12px_0px_rgba(0,0,0,0.07),0px_9px_9px_0px_rgba(0,0,0,0.12),0px_2px_5px_0px_rgba(0,0,0,0.14)] top-[306px] w-[184px]" data-name="Modal">
          <div className="h-[91px] relative shrink-0 w-full" data-name="Content_text">
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col items-center px-[7px] py-[23px] relative size-full">
                <Text1 text="Lorem ipsum" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[730px] left-[3723px] top-[242px] w-[694px]" data-name="Contact">
        <div className="absolute bg-[#e5e2de] left-0 rounded-[22px] top-0 w-[490px]" data-name="Contact_Form">
          <div className="content-stretch flex flex-col gap-[2px] items-center overflow-clip pb-[32px] pt-[22px] px-[100px] relative rounded-[inherit] w-full">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Name_Input">
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
              <Wrapper text="NOMBRE APELLIDO APELLIDO" additionalClassNames="text-[#5a3e26]" />
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Email_Input">
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
              <Wrapper text="DIRECCIÓN @HOST.COM" additionalClassNames="text-[#5a3e26]" />
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Phone_Input">
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
              <Wrapper text="+36 999 000 000" additionalClassNames="text-[#5a3e26]" />
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Subject_Input">
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
              <Wrapper text="ASUNTO DEL MENSAJE" additionalClassNames="text-[#5a3e26]" />
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Text Area">
              <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content Label" />
              <div className="bg-[#ffcece] relative rounded-[8px] shrink-0 w-full" data-name="Input">
                <div className="overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col gap-[2px] items-start p-[12px] relative w-full">
                    <ContentPlaceholderText text="MENSAJE" />
                    <div className="content-stretch flex items-end justify-end relative shrink-0 w-full" data-name="Content icon">
                      <AlertTriangle />
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#b33838] border-dashed inset-0 pointer-events-none rounded-[8px]" />
              </div>
              <div className="content-stretch flex h-[20px] items-center justify-center shrink-0 w-full" data-name="Content Message" />
            </div>
            <div className="content-stretch flex gap-[20px] h-[44px] items-center justify-end relative shrink-0 w-[400px]" data-name="Content">
              <Button />
              <div className="bg-[#4d4b4a] content-stretch flex gap-[10px] h-[44px] items-center justify-center p-[10px] relative rounded-[999px] shadow-[25px_25px_10px_0px_rgba(0,0,0,0),16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)] shrink-0 w-[88px]" data-name="Button">
                <Delete />
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-0 pointer-events-none rounded-[22px] shadow-[25px_25px_10px_0px_rgba(0,0,0,0),16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)]" />
        </div>
        <div className="absolute bg-[#4d0d0d] content-stretch flex flex-col h-[88px] items-center justify-center left-[510px] overflow-clip rounded-[22px] shadow-[0px_54px_15px_0px_rgba(0,0,0,0),0px_34px_14px_0px_rgba(0,0,0,0.02),0px_19px_12px_0px_rgba(0,0,0,0.07),0px_9px_9px_0px_rgba(0,0,0,0.12),0px_2px_5px_0px_rgba(0,0,0,0.14)] top-[398px] w-[184px]" data-name="Modal">
          <div className="h-[91px] relative shrink-0 w-full" data-name="Content_text">
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col items-center px-[7px] py-[23px] relative size-full">
                <Text1 text="Escribir mensaje entre 50 y 200 caracteres" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}