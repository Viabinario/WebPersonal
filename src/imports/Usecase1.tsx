import svgPaths from "./svg-ug55i8e7pd";
import clsx from "clsx";

function ContactForm1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute bg-[#e5e2de] left-0 rounded-[22px] top-0 w-[490px]">
      <div className="content-stretch flex flex-col gap-[2px] items-center overflow-clip pb-[32px] pt-[22px] px-[100px] relative rounded-[inherit] w-full">{children}</div>
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-0 pointer-events-none rounded-[22px] shadow-[0px_54px_15px_0px_rgba(0,0,0,0),0px_34px_14px_0px_rgba(0,0,0,0.02),0px_19px_12px_0px_rgba(0,0,0,0.07),0px_9px_9px_0px_rgba(0,0,0,0.12),0px_2px_5px_0px_rgba(0,0,0,0.14)]" />
    </div>
  );
}

function ContactForm({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#e5e2de] relative rounded-[22px] shrink-0 w-[490px]">
      <div className="content-stretch flex flex-col gap-[2px] items-center overflow-clip pb-[32px] pt-[22px] px-[100px] relative rounded-[inherit] w-full">{children}</div>
      <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-0 pointer-events-none rounded-[22px] shadow-[25px_25px_10px_0px_rgba(0,0,0,0),16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)]" />
    </div>
  );
}

function Wrapper6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
      <div className="content-stretch flex gap-[14px] items-center px-[12px] py-[6px] relative size-full">{children}</div>
    </div>
  );
}

function Wrapper5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="overflow-clip rounded-[inherit] size-full">
      <div className="content-stretch flex flex-col gap-[2px] items-start p-[12px] relative w-full">{children}</div>
    </div>
  );
}

function Input5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#dcffd4] relative rounded-[8px] shrink-0 w-full">
      <Wrapper4>{children}</Wrapper4>
      <div aria-hidden="true" className="absolute border border-[#3a6e2e] border-dashed inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Input4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#f7f2ed] relative rounded-[8px] shrink-0 w-full">
      <Wrapper4>{children}</Wrapper4>
      <div aria-hidden="true" className="absolute border border-[#a16f44] border-dashed inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper5>
      <g id="delete">{children}</g>
    </Wrapper5>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#dcffd4] h-[48px] relative rounded-[8px] shrink-0 w-full">
      <Wrapper6>{children}</Wrapper6>
      <div aria-hidden="true" className="absolute border border-[#3a6e2e] border-dashed inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper5>
      <g id="check-02">{children}</g>
    </Wrapper5>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper5>
      <g id="send-01">{children}</g>
    </Wrapper5>
  );
}

function Send() {
  return (
    <Wrapper>
      <path d={svgPaths.p18e0c400} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
    </Wrapper>
  );
}

function Check1() {
  return (
    <Wrapper1>
      <path d={svgPaths.p26ebff00} id="Icon" stroke="var(--stroke-0, #295120)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </Wrapper1>
  );
}
type ContentPlaceholderProps = {
  additionalClassNames?: string;
};

function ContentPlaceholder({ additionalClassNames = "" }: ContentPlaceholderProps) {
  return (
    <div className="content-stretch flex h-[180px] items-start relative shrink-0 w-full">
      <Text1 text="Lorem ipsum dolor sit amet consectetur. Ultricies porttitor semper dictum aliquam urna tempor consequat scelerisque. Eget eget vivamus feugiat amet in. Eget tristique orci ultrices nulla at aliquam maecenas. Vitae diam mi sagittis eget metus adipiscing. Facilisi ipsum nunc lorem fermentum vestibulum." additionalClassNames="text-[#362517]" />
    </div>
  );
}
type Input3Props = {
  additionalClassNames?: string;
};

function Input3({ additionalClassNames = "" }: Input3Props) {
  return (
    <Wrapper2>
      <Text text="ASUNTO DEL MENSAJE" additionalClassNames="text-[#362517]" />
      <Check />
    </Wrapper2>
  );
}
type Input2Props = {
  additionalClassNames?: string;
};

function Input2({ additionalClassNames = "" }: Input2Props) {
  return (
    <Wrapper2>
      <Text text="+36 999 000 000" additionalClassNames="text-[#362517]" />
      <Check />
    </Wrapper2>
  );
}
type Input1Props = {
  additionalClassNames?: string;
};

function Input1({ additionalClassNames = "" }: Input1Props) {
  return (
    <Wrapper2>
      <Text text="DIRECCIÓN @HOST.COM" additionalClassNames="text-[#362517]" />
      <Check />
    </Wrapper2>
  );
}
type InputProps = {
  additionalClassNames?: string;
};

function Input({ additionalClassNames = "" }: InputProps) {
  return (
    <Wrapper2>
      <Text text="NOMBRE APELLIDO APELLIDO" additionalClassNames="text-[#362517]" />
      <Check />
    </Wrapper2>
  );
}

function Check() {
  return (
    <Wrapper1>
      <path d={svgPaths.p26ebff00} id="Icon" stroke="var(--stroke-0, #3A6E2E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </Wrapper1>
  );
}

function Delete() {
  return (
    <Wrapper3>
      <path d={svgPaths.p327d2300} id="Icon" stroke="var(--stroke-0, #F7F2ED)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </Wrapper3>
  );
}

function Button1() {
  return (
    <div className="bg-[#e1e1e1] content-stretch flex gap-[10px] h-[44px] items-center justify-center p-[10px] relative rounded-[999px] shrink-0 w-[88px]">
      <div aria-hidden="true" className="absolute border border-[#a3a19e] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[25px_25px_10px_0px_rgba(0,0,0,0),16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)]" />
      <Wrapper3>
        <path d={svgPaths.p327d2300} id="Icon" stroke="var(--stroke-0, #3D3A36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </Wrapper3>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#e1e1e1] content-stretch flex gap-[10px] h-[44px] items-center justify-center p-[10px] relative rounded-[1e+11px] shrink-0 w-[88px]">
      <div aria-hidden="true" className="absolute border border-[#a3a19e] border-solid inset-0 pointer-events-none rounded-[1e+11px] shadow-[25px_25px_10px_0px_rgba(0,0,0,0),16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)]" />
      <Wrapper>
        <path d={svgPaths.p18e0c400} id="Icon" stroke="var(--stroke-0, #3D3A36)" strokeLinecap="round" strokeWidth="2" />
      </Wrapper>
    </div>
  );
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className={clsx("-webkit-box basis-0 flex-col font-['Roboto:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[16px]", additionalClassNames)}>
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
      <Text1 text={text} additionalClassNames="text-[#5a3e26]" />
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

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
    <div className="bg-[#f7f2ed] h-[48px] relative rounded-[8px] shrink-0 w-full">
      <Wrapper6>
        <Text text={text} additionalClassNames="text-[#5a3e26]" />
      </Wrapper6>
      <div aria-hidden="true" className="absolute border border-[#a16f44] border-dashed inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

export default function Usecase() {
  return (
    <div className="bg-white relative size-full" data-name="_Usecase 1">
      <div className="absolute content-stretch flex flex-col items-start left-[147px] top-[242px] w-[694px]" data-name="Contact">
        <ContactForm>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Name_Input">
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
            <InputText text="NOMBRE" />
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Email_Input">
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
            <InputText text="EMAIL" />
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Phone_Input">
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
            <InputText text="TELÉFONO" />
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Subject_Input">
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
            <InputText text="ASUNTO" />
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Message_Input">
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content Label" />
            <Input4>
              <ContentPlaceholderText text="MENSAJE" />
              <div className="content-stretch flex items-end justify-end shrink-0 w-full" data-name="Content icon" />
            </Input4>
            <div className="content-stretch flex h-[20px] items-center justify-center shrink-0 w-full" data-name="Content Message" />
          </div>
          <div className="content-stretch flex gap-[20px] h-[44px] items-center justify-end relative shrink-0 w-[400px]" data-name="Content">
            <Button />
            <Button1 />
          </div>
        </ContactForm>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[1041px] top-[242px] w-[694px]" data-name="Contact">
        <ContactForm>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Name_Input">
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
            <InputText text="NOMBRE APELLIDO APELLIDO" />
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Email_Input">
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
            <InputText text="EMAIL" />
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Phone_Input">
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
            <InputText text="TELÉFONO" />
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Subject_Input">
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
            <InputText text="ASUNTO" />
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Message_Input">
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content Label" />
            <Input4>
              <ContentPlaceholderText text="MENSAJE" />
              <div className="content-stretch flex items-end justify-end shrink-0 w-full" data-name="Content icon" />
            </Input4>
            <div className="content-stretch flex h-[20px] items-center justify-center shrink-0 w-full" data-name="Content Message" />
          </div>
          <div className="content-stretch flex gap-[20px] h-[44px] items-center justify-end relative shrink-0 w-[400px]" data-name="Content">
            <Button />
            <div className="bg-[#4d4b4a] content-stretch flex gap-[10px] h-[44px] items-center justify-center p-[10px] relative rounded-[999px] shadow-[25px_25px_10px_0px_rgba(0,0,0,0),16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)] shrink-0 w-[88px]" data-name="Button">
              <Delete />
            </div>
          </div>
        </ContactForm>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[1935px] top-[242px] w-[694px]" data-name="Contact">
        <ContactForm>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Name_Input">
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
            <InputText text="NOMBRE APELLIDO APELLIDO" />
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Email_Input">
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
            <InputText text="DIRECCIÓN @HOST.COM" />
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Phone_Input">
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
            <InputText text="TELÉFONO" />
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Subject_Input">
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
            <InputText text="ASUNTO" />
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Message_Input">
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content Label" />
            <Input4>
              <ContentPlaceholderText text="MENSAJE" />
              <div className="content-stretch flex items-end justify-end shrink-0 w-full" data-name="Content icon" />
            </Input4>
            <div className="content-stretch flex h-[20px] items-center justify-center shrink-0 w-full" data-name="Content Message" />
          </div>
          <div className="content-stretch flex gap-[20px] h-[44px] items-center justify-end relative shrink-0 w-[400px]" data-name="Content">
            <Button />
            <div className="bg-[#4d4b4a] content-stretch flex gap-[10px] h-[44px] items-center justify-center p-[10px] relative rounded-[999px] shadow-[25px_25px_10px_0px_rgba(0,0,0,0),16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)] shrink-0 w-[88px]" data-name="Button">
              <Delete />
            </div>
          </div>
        </ContactForm>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[2829px] top-[242px] w-[694px]" data-name="Contact">
        <ContactForm>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Name_Input">
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
            <InputText text="NOMBRE APELLIDO APELLIDO" />
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Email_Input">
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
            <InputText text="DIRECCIÓN @HOST.COM" />
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Phone_Input">
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
            <InputText text="+36 999 000 000" />
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Subject_Input">
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
            <InputText text="ASUNTO" />
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Message_Input">
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content Label" />
            <Input4>
              <ContentPlaceholderText text="MENSAJE" />
              <div className="content-stretch flex items-end justify-end shrink-0 w-full" data-name="Content icon" />
            </Input4>
            <div className="content-stretch flex h-[20px] items-center justify-center shrink-0 w-full" data-name="Content Message" />
          </div>
          <div className="content-stretch flex gap-[20px] h-[44px] items-center justify-end relative shrink-0 w-[400px]" data-name="Content">
            <Button />
            <div className="bg-[#4d4b4a] content-stretch flex gap-[10px] h-[44px] items-center justify-center p-[10px] relative rounded-[999px] shadow-[25px_25px_10px_0px_rgba(0,0,0,0),16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)] shrink-0 w-[88px]" data-name="Button">
              <Delete />
            </div>
          </div>
        </ContactForm>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[3723px] top-[242px] w-[694px]" data-name="Contact">
        <ContactForm>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Name_Input">
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
            <InputText text="NOMBRE APELLIDO APELLIDO" />
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Email_Input">
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
            <InputText text="DIRECCIÓN @HOST.COM" />
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Phone_Input">
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
            <InputText text="+36 999 000 000" />
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Subject_Input">
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
            <InputText text="ASUNTO DEL MENSAJE" />
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Message_Input">
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content Label" />
            <Input4>
              <ContentPlaceholderText text="MENSAJE" />
              <div className="content-stretch flex items-end justify-end shrink-0 w-full" data-name="Content icon" />
            </Input4>
            <div className="content-stretch flex h-[20px] items-center justify-center shrink-0 w-full" data-name="Content Message" />
          </div>
          <div className="content-stretch flex gap-[20px] h-[44px] items-center justify-end relative shrink-0 w-[400px]" data-name="Content">
            <Button />
            <div className="bg-[#4d4b4a] content-stretch flex gap-[10px] h-[44px] items-center justify-center p-[10px] relative rounded-[999px] shadow-[25px_25px_10px_0px_rgba(0,0,0,0),16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)] shrink-0 w-[88px]" data-name="Button">
              <Delete />
            </div>
          </div>
        </ContactForm>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[4617px] top-[242px] w-[694px]" data-name="Contact">
        <ContactForm>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Name_Input">
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
            <InputText text="NOMBRE APELLIDO APELLIDO" />
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Email_Input">
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
            <InputText text="DIRECCIÓN @HOST.COM" />
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Phone_Input">
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
            <InputText text="+36 999 000 000" />
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Subject_Input">
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Label" />
            <InputText text="ASUNTO DEL MENSAJE" />
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content_Message" />
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Message_Input">
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content Label" />
            <Input4>
              <ContentPlaceholderText text="Lorem ipsum dolor sit amet consectetur. Ultricies porttitor semper dictum aliquam urna tempor consequat scelerisque. Eget eget vivamus feugiat amet in. Eget tristique orci ultrices nulla at aliquam maecenas. Vitae diam mi sagittis eget metus adipiscing. Facilisi ipsum nunc lorem fermentum vestibulum." />
              <div className="content-stretch flex items-end justify-end shrink-0 w-full" data-name="Content icon" />
            </Input4>
            <div className="content-stretch flex h-[20px] items-center justify-center shrink-0 w-full" data-name="Content Message" />
          </div>
          <div className="content-stretch flex gap-[20px] h-[44px] items-center justify-end relative shrink-0 w-[400px]" data-name="Content">
            <div className="bg-[#4d4b4a] content-stretch flex gap-[10px] h-[44px] items-center justify-center p-[10px] relative rounded-[1e+11px] shadow-[25px_25px_10px_0px_rgba(0,0,0,0),16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)] shrink-0 w-[88px]" data-name="Button">
              <Wrapper>
                <path d={svgPaths.p18e0c400} id="Icon" stroke="var(--stroke-0, #F7F2ED)" strokeLinecap="round" strokeWidth="2" />
              </Wrapper>
            </div>
            <div className="bg-[#4d4b4a] content-stretch flex gap-[10px] h-[44px] items-center justify-center p-[10px] relative rounded-[999px] shadow-[25px_25px_10px_0px_rgba(0,0,0,0),16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)] shrink-0 w-[88px]" data-name="Button">
              <Delete />
            </div>
          </div>
        </ContactForm>
      </div>
      <div className="absolute h-[730px] left-[5511px] top-[242px] w-[694px]" data-name="Contact">
        <ContactForm1>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Text Input">
            <div className="content-stretch flex h-[16px] items-center justify-center shrink-0 w-full" data-name="Content Label" />
            <Input />
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" />
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Text Input">
            <div className="content-stretch flex h-[16px] items-center justify-center shrink-0 w-full" data-name="Content Label" />
            <Input1 />
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" />
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Text Input">
            <div className="content-stretch flex h-[16px] items-center justify-center shrink-0 w-full" data-name="Content Label" />
            <Input2 />
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" />
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Text Input">
            <div className="content-stretch flex h-[16px] items-center justify-center shrink-0 w-full" data-name="Content Label" />
            <Input3 />
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" />
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Text Area">
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content Label" />
            <Input5>
              <ContentPlaceholder />
              <div className="content-stretch flex items-end justify-end relative shrink-0 w-full" data-name="Content icon">
                <Check1 />
              </div>
            </Input5>
            <div className="content-stretch flex h-[20px] items-center justify-center shrink-0 w-full" data-name="Content Message" />
          </div>
          <div className="content-stretch flex gap-[20px] h-[44px] items-center justify-end relative shrink-0 w-[400px]" data-name="Content">
            <div className="bg-[#295120] content-stretch flex gap-[10px] h-[44px] items-center justify-center p-[10px] relative rounded-[1e+11px] shadow-[25px_25px_10px_0px_rgba(0,0,0,0),16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)] shrink-0 w-[88px]" data-name="Button">
              <Send />
            </div>
            <Button1 />
          </div>
        </ContactForm1>
        <div className="absolute bg-[#295120] content-stretch flex flex-col h-[88px] items-center justify-center left-[510px] overflow-clip rounded-[22px] shadow-[0px_54px_15px_0px_rgba(0,0,0,0),0px_34px_14px_0px_rgba(0,0,0,0.02),0px_19px_12px_0px_rgba(0,0,0,0.07),0px_9px_9px_0px_rgba(0,0,0,0.12),0px_2px_5px_0px_rgba(0,0,0,0.14)] top-[642px] w-[184px]" data-name="Modal">
          <div className="h-[91px] relative shrink-0 w-full" data-name="Content_text">
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col items-center px-[7px] py-[23px] relative size-full">
                <div className="basis-0 flex flex-col font-['Roboto:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[14px] text-center text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="leading-[normal]">Mensaje enviado exitosamente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[730px] left-[6405px] top-[242px] w-[694px]" data-name="Contact">
        <ContactForm1>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Text Input">
            <div className="content-stretch flex h-[16px] items-center justify-center shrink-0 w-full" data-name="Content Label" />
            <Input />
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" />
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Text Input">
            <div className="content-stretch flex h-[16px] items-center justify-center shrink-0 w-full" data-name="Content Label" />
            <Input1 />
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" />
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Text Input">
            <div className="content-stretch flex h-[16px] items-center justify-center shrink-0 w-full" data-name="Content Label" />
            <Input2 />
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" />
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Text Input">
            <div className="content-stretch flex h-[16px] items-center justify-center shrink-0 w-full" data-name="Content Label" />
            <Input3 />
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" />
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[404px]" data-name="Text Area">
            <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Content Label" />
            <Input5>
              <ContentPlaceholder />
              <div className="content-stretch flex items-end justify-end relative shrink-0 w-full" data-name="Content icon">
                <Check1 />
              </div>
            </Input5>
            <div className="content-stretch flex h-[20px] items-center justify-center shrink-0 w-full" data-name="Content Message" />
          </div>
          <div className="content-stretch flex gap-[20px] h-[44px] items-center justify-end relative shrink-0 w-[400px]" data-name="Content">
            <div className="bg-[#295120] content-stretch flex gap-[10px] h-[44px] items-center justify-center p-[10px] relative rounded-[1e+11px] shadow-[25px_25px_10px_0px_rgba(0,0,0,0),16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)] shrink-0 w-[88px]" data-name="Button">
              <Send />
            </div>
            <Button1 />
          </div>
        </ContactForm1>
      </div>
    </div>
  );
}