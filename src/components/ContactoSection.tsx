import { useState, useRef } from 'react';
import svgPaths from "../imports/svg-pj45jcyo5z";
import svgPathsSuccess from "../imports/svg-ug55i8e7pd";
import svgPathsError from "../imports/svg-nd4dsni8hv";
import { contactApiUrl, contactEmail } from '../utils/contactApi';
import {
  validateAndSanitizeName,
  validateAndSanitizeEmail,
  validateAndSanitizePhone,
  validateAndSanitizeSubject,
  validateAndSanitizeMessage,
  rateLimiter,
  getUserIdentifier
} from '../utils/security';

interface ContactoSectionProps {
  isZoomed?: boolean;
  onNavigate?: (section: 'presentacion' | 'sobre-mi' | 'contacto' | 'casos-estudio') => void;
}

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  asunto: string;
  mensaje: string;
}

interface FormTouched {
  nombre: boolean;
  email: boolean;
  telefono: boolean;
  asunto: boolean;
  mensaje: boolean;
}

interface HoverStates {
  nombre: boolean;
  email: boolean;
  telefono: boolean;
  asunto: boolean;
  mensaje: boolean;
}

export function ContactoSection({ isZoomed = false, onNavigate }: ContactoSectionProps) {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const [touched, setTouched] = useState<FormTouched>({
    nombre: false,
    email: false,
    telefono: false,
    asunto: false,
    mensaje: false
  });

  const [hover, setHover] = useState<HoverStates>({
    nombre: false,
    email: false,
    telefono: false,
    asunto: false,
    mensaje: false
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState<{field: string, message: string} | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rateLimitError, setRateLimitError] = useState(false);
  const [copied, setCopied] = useState(false);
  const submitTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const copyFeedbackRef = useRef<NodeJS.Timeout | null>(null);

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!contactEmail) return;
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      if (copyFeedbackRef.current) clearTimeout(copyFeedbackRef.current);
      copyFeedbackRef.current = setTimeout(() => {
        setCopied(false);
        copyFeedbackRef.current = null;
      }, 2000);
    } catch {
      setErrorModal({ field: 'general', message: 'No se pudo copiar al portapapeles.' });
    }
  };


  const handleClick = () => {
    if (isZoomed && onNavigate) {
      onNavigate('contacto');
    }
  };

  const validateEmail = (email: string): boolean => {
    const sanitized = validateAndSanitizeEmail(email);
    return sanitized !== null;
  };

  const validatePhone = (phone: string): boolean => {
    const sanitized = validateAndSanitizePhone(phone);
    return sanitized !== null;
  };

  const isFieldValid = (field: keyof FormData): boolean => {
    const value = formData[field];
    if (!value || value.trim() === '' || value === 'NOMBRE' || value === 'EMAIL' || value === 'TELÉFONO' || value === 'ASUNTO' || value === 'MENSAJE') {
      return false;
    }

    if (field === 'email') {
      return validateEmail(value);
    }

    if (field === 'telefono') {
      return validatePhone(value);
    }

    return value.trim().length > 0;
  };

  const allFieldsValid = (): boolean => {
    return (
      isFieldValid('nombre') &&
      isFieldValid('email') &&
      isFieldValid('telefono') &&
      isFieldValid('asunto') &&
      isFieldValid('mensaje')
    );
  };

  const handleFieldChange = (field: keyof FormData, value: string) => {
    // Limitar longitud de campos según tipo
    let maxLength = 1000;
    switch (field) {
      case 'nombre':
        maxLength = 100;
        break;
      case 'email':
        maxLength = 254;
        break;
      case 'telefono':
        maxLength = 20;
        break;
      case 'asunto':
        maxLength = 200;
        break;
      case 'mensaje':
        maxLength = 1000; // Aumentado de 300 a 1000 pero con validación estricta
        break;
    }

    if (value.length > maxLength) {
      return;
    }
    
    setFormData(prev => ({ ...prev, [field]: value }));
    setTouched(prev => ({ ...prev, [field]: true }));
    
    // Limpiar errores de rate limiting cuando el usuario modifica el formulario
    if (rateLimitError) {
      setRateLimitError(false);
    }
    
    // Clear error modal if this field is being corrected
    if (errorModal && errorModal.field === field) {
      // Check if the new value would make the field valid
      if (field === 'email' && validateEmail(value)) {
        setErrorModal(null);
      } else if (field === 'telefono' && validatePhone(value)) {
        setErrorModal(null);
      } else if (field !== 'email' && field !== 'telefono' && value.trim().length > 0) {
        setErrorModal(null);
      }
    }
  };

  const handleFieldBlur = (field: keyof FormData) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    
    if (touched[field] && formData[field] && !isFieldValid(field)) {
      let message = '';
      switch(field) {
        case 'nombre':
          message = 'Ingresar nombre completo';
          break;
        case 'email':
          message = 'Ingresar email válido';
          break;
        case 'telefono':
          message = 'Ingresar teléfono válido';
          break;
        case 'asunto':
          message = 'Ingresar asunto';
          break;
        case 'mensaje':
          message = 'Ingresar mensaje';
          break;
      }
      setErrorModal({ field, message });
    }
  };

  const handleSend = async () => {
    // Prevenir múltiples envíos simultáneos
    if (isSubmitting) {
      return;
    }

    setTouched({
      nombre: true,
      email: true,
      telefono: true,
      asunto: true,
      mensaje: true
    });

    // Validación básica de campos
    if (!allFieldsValid()) {
      const fields: (keyof FormData)[] = ['nombre', 'email', 'telefono', 'asunto', 'mensaje'];
      for (const field of fields) {
        if (!isFieldValid(field)) {
          let message = '';
          switch(field) {
            case 'nombre':
              message = 'Ingresar nombre completo (mín. 2 caracteres)';
              break;
            case 'email':
              message = 'Ingresar email válido';
              break;
            case 'telefono':
              message = 'Ingresar teléfono válido (9–20 dígitos, ej: 000 000 000)';
              break;
            case 'asunto':
              message = 'Ingresar asunto (mín. 3 caracteres)';
              break;
            case 'mensaje':
              message = 'Ingresar mensaje (mín. 10 caracteres)';
              break;
          }
          setErrorModal({ field, message });
          break;
        }
      }
      return;
    }

    // Rate limiting
    const userIdentifier = getUserIdentifier();
    if (!rateLimiter.canMakeRequest(userIdentifier)) {
      setRateLimitError(true);
      setErrorModal({ 
        field: 'general', 
        message: 'Demasiados intentos. Por favor, espera un momento antes de intentar nuevamente.' 
      });
      return;
    }

    // Sanitizar y validar todos los campos
    const sanitizedNombre = validateAndSanitizeName(formData.nombre);
    const sanitizedEmail = validateAndSanitizeEmail(formData.email);
    const sanitizedTelefono = validateAndSanitizePhone(formData.telefono);
    const sanitizedAsunto = validateAndSanitizeSubject(formData.asunto);
    const sanitizedMensaje = validateAndSanitizeMessage(formData.mensaje);

    // Indicar qué campo falla tras sanitización para que el usuario sepa qué corregir
    const sanitizeErrors: { field: keyof FormData; message: string }[] = [];
    if (!sanitizedNombre) sanitizeErrors.push({ field: 'nombre', message: 'Nombre: solo letras, espacios, guiones o apóstrofes (mín. 2 caracteres).' });
    if (!sanitizedEmail) sanitizeErrors.push({ field: 'email', message: 'Email: formato válido (ej: nombre@dominio.com).' });
    if (!sanitizedTelefono) sanitizeErrors.push({ field: 'telefono', message: 'Teléfono: 9–20 dígitos, opcional + al inicio (ej: 612 345 678 o +34 612 345 678).' });
    if (!sanitizedAsunto) sanitizeErrors.push({ field: 'asunto', message: 'Asunto: mínimo 3 caracteres, sin caracteres especiales.' });
    if (!sanitizedMensaje) sanitizeErrors.push({ field: 'mensaje', message: 'Mensaje: mínimo 10 caracteres, máximo 1000.' });
    if (sanitizeErrors.length > 0) {
      setErrorModal({ field: sanitizeErrors[0].field, message: sanitizeErrors[0].message });
      return;
    }

    setIsSubmitting(true);
    setRateLimitError(false);

    // Enviar datos al endpoint de contacto (Resend u otro backend)
    if (!contactApiUrl || !contactApiUrl.startsWith('http')) {
      setErrorModal({
        field: 'general',
        message: 'El formulario no está configurado (falta URL del API). Configura VITE_CONTACT_API_URL en el build y vuelve a desplegar.'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const sanitizedData = {
        nombre: sanitizedNombre,
        email: sanitizedEmail,
        telefono: sanitizedTelefono,
        asunto: sanitizedAsunto,
        mensaje: sanitizedMensaje
      };

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch(contactApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sanitizedData),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      // Verificar si la respuesta es JSON válido
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        await response.text(); // Consumir la respuesta
        throw new Error('Respuesta inválida del servidor');
      }

      if (!response.ok) {
        let serverMessage = 'Error al enviar mensaje. Por favor, intenta nuevamente más tarde.';
        try {
          const errBody = await response.json();
          if (errBody && typeof errBody.error === 'string') serverMessage = errBody.error;
        } catch {
          // Respuesta no es JSON (p. ej. página de error del hosting)
        }
        console.error('Error al enviar formulario', response.status, serverMessage);
        setErrorModal({ field: 'general', message: serverMessage });
        setIsSubmitting(false);
        return;
      }

      // Parsear JSON solo si la respuesta es exitosa
      await response.json();

      // Éxito - resetear rate limiter
      rateLimiter.reset(userIdentifier);
      
      setShowSuccessModal(true);
      
      // Reset form after successful submission
      if (submitTimeoutRef.current) {
        clearTimeout(submitTimeoutRef.current);
      }
      
      submitTimeoutRef.current = setTimeout(() => {
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          asunto: '',
          mensaje: ''
        });
        setTouched({
          nombre: false,
          email: false,
          telefono: false,
          asunto: false,
          mensaje: false
        });
        setShowSuccessModal(false);
        setIsSubmitting(false);
      }, 3000);

    } catch (error) {
      setIsSubmitting(false);

      if (error instanceof Error) {
        if (error.name === 'AbortError' || error.name === 'TimeoutError') {
          setErrorModal({
            field: 'general',
            message: 'Tiempo de espera agotado. Comprueba tu conexión y que la API (Vercel/Resend) esté activa.'
          });
        } else if (error.message?.includes('fetch') || error.message?.includes('NetworkError') || (error instanceof TypeError && error.message?.toLowerCase().includes('fetch'))) {
          setErrorModal({
            field: 'general',
            message: 'No se pudo conectar con el servidor. Comprueba tu conexión, que VITE_CONTACT_API_URL apunte a tu API en Vercel (ej: https://tu-proyecto.vercel.app/api/contact) y que la API esté desplegada con RESEND_API_KEY y RESEND_TO_EMAIL.'
          });
        } else {
          setErrorModal({
            field: 'general',
            message: 'Error de conexión o respuesta inválida. Comprueba que la URL del API sea correcta y que el servidor responda con JSON.'
          });
        }
      } else {
        setErrorModal({
          field: 'general',
          message: 'Error inesperado. Por favor, intenta nuevamente más tarde.'
        });
      }
      console.error('Error al enviar formulario:', error);
    }
  };

  const handleDelete = () => {
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      asunto: '',
      mensaje: ''
    });
    setTouched({
      nombre: false,
      email: false,
      telefono: false,
      asunto: false,
      mensaje: false
    });
    setShowSuccessModal(false);
    setErrorModal(null);
  };

  const getInputBackgroundColor = (field: keyof FormData): string => {
    if (touched[field] && formData[field]) {
      if (hover[field]) {
        return isFieldValid(field) ? '#d0f5c8' : '#ffc0c0';
      }
      return isFieldValid(field) ? '#dcffd4' : '#ffcece';
    }
    return hover[field] ? '#ebe3da' : '#f7f2ed';
  };

  const getInputBorderColor = (field: keyof FormData): string => {
    if (touched[field] && formData[field]) {
      return isFieldValid(field) ? '#3a6e2e' : '#b33838';
    }
    return '#a16f44';
  };


  const getSendButtonColor = (): string => {
    if (allFieldsValid()) return '#4d4b4a'; // Gris cuando está válido
    
    const hasErrors = Object.keys(touched).some(key => {
      const field = key as keyof FormData;
      return touched[field] && formData[field] && !isFieldValid(field);
    });
    
    if (hasErrors) return '#ffcece';
    return '#e1e1e1';
  };

  const getSendButtonBorderColor = (): string => {
    if (allFieldsValid()) return '#5a3e26'; // Borde oscuro cuando está válido
    
    const hasErrors = Object.keys(touched).some(key => {
      const field = key as keyof FormData;
      return touched[field] && formData[field] && !isFieldValid(field);
    });
    
    if (hasErrors) return '#6f1818';
    return '#a3a19e';
  };

  const getSendIconColor = (): string => {
    if (allFieldsValid()) return 'white'; // Blanco cuando está válido
    
    const hasErrors = Object.keys(touched).some(key => {
      const field = key as keyof FormData;
      return touched[field] && formData[field] && !isFieldValid(field);
    });
    
    if (hasErrors) return '#6F1818';
    return '#3D3A36';
  };

  const getDeleteButtonColor = (): string => {
    const hasErrors = Object.keys(touched).some(key => {
      const field = key as keyof FormData;
      return touched[field] && formData[field] && !isFieldValid(field);
    });
    
    if (hasErrors) return '#912727';
    if (allFieldsValid()) return '#4d4b4a';
    return '#e1e1e1';
  };

  const getDeleteButtonBorderColor = (): string => {
    const hasErrors = Object.keys(touched).some(key => {
      const field = key as keyof FormData;
      return touched[field] && formData[field] && !isFieldValid(field);
    });
    
    if (hasErrors) return 'white';
    if (allFieldsValid()) return '#5a3e26';
    return '#a3a19e';
  };

  const getDeleteIconColor = (): string => {
    const hasErrors = Object.keys(touched).some(key => {
      const field = key as keyof FormData;
      return touched[field] && formData[field] && !isFieldValid(field);
    });
    
    if (hasErrors || allFieldsValid()) return 'white';
    return '#3D3A36';
  };

  const copyButtonBaseClass =
    'flex items-center justify-center gap-2 h-[48px] w-[320px] min-w-[320px] px-4 rounded-[16px] border border-dashed font-["Roboto:Regular",sans-serif] text-[14px] shadow-[16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200';
  const copyButtonClass = copied
    ? `${copyButtonBaseClass} border-[#3A6E2E] bg-[#3A6E2E] text-white focus-visible:ring-[#3A6E2E]`
    : `${copyButtonBaseClass} border-[#5a3e26] bg-[#e5e2de] text-[#5a3e26] hover:bg-[#d9d5d0] focus-visible:ring-[#5a3e26]`;

  return (
    <div className="w-full min-h-screen max-w-full bg-[#f7f2ed] flex items-center justify-center p-4 md:p-6 lg:p-0 lg:min-h-[832px]">
      {/* Contenedor de la sección: espacio menú | zona central (texto + botón copiar) | formulario */}
      <div className="relative w-full h-full flex flex-col items-center justify-center gap-6 py-8 lg:flex-row lg:items-start lg:gap-0 lg:py-0">
        {/* Espacio reservado al menú principal (38 + 184 ≈ 222px) para que la zona central quede entre menú y formulario */}
        <div className="hidden lg:block w-0 lg:w-[222px] lg:shrink-0" aria-hidden />
        {/* Zona central: texto y botón copiar; en lg, 18px por debajo del borde superior del formulario */}
        <div className="relative shrink-0 w-full flex flex-col items-center justify-center gap-[62px] lg:flex-1 lg:min-w-0 lg:justify-start lg:pt-[18px]">
          <p className="text-[#362517] font-['Roboto:Regular',sans-serif] text-[14px] text-left max-w-[420px]">
            Puedes escribirme a través del formulario, o bien, si lo prefieres, escribirme desde tu gestor de correos, presiona abajo para copiar mi dirección:
          </p>
          <button
            type="button"
            onClick={handleCopyEmail}
            disabled={!contactEmail}
            aria-label={contactEmail ? (copied ? 'Se ha copiado en el portapapeles' : 'Copiar dirección de correo electrónico al portapapeles') : 'Correo no configurado'}
            title={contactEmail ? (copied ? 'Se ha copiado en el portapapeles' : 'Copiar dirección de correo electrónico') : 'Configura VITE_CONTACT_EMAIL en .env'}
            className={copyButtonClass}
          >
            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span>{copied ? 'Se ha copiado en el portapapeles' : 'Copiar dirección de correo electrónico'}</span>
          </button>
        </div>

        {/* Contenedor del formulario: ancho fijo 400px, margen derecho en lg */}
        <div className="relative w-full max-w-[400px] shrink-0 lg:mr-[min(38px,5vw)]">
          <div 
            className={`bg-[#e5e2de] flex flex-col gap-[10px] px-[10px] py-[22px] relative rounded-[22px] shadow-[16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)] w-full ${isZoomed ? 'cursor-pointer hover:scale-105 transition-transform duration-300' : ''}`}
            onClick={handleClick}
            aria-label={isZoomed ? "Hacer clic para navegar a la sección de Contacto" : undefined}
            title={isZoomed ? "Hacer clic para navegar a la sección de Contacto" : undefined}
            role={isZoomed ? "button" : undefined}
            tabIndex={isZoomed ? 0 : undefined}
          >
          {/* Contenedor de campos - gap-[5px] entre campos, w-full para ocupar todo el ancho */}
          <div className="flex flex-col gap-[5px] w-full">
            {/* Name Input */}
            <div className="flex flex-col gap-[4px] w-full">
              <div 
                className="h-[48px] rounded-[8px] w-full relative transition-colors duration-200"
                style={{ backgroundColor: getInputBackgroundColor('nombre') }}
                onMouseEnter={() => setHover(prev => ({ ...prev, nombre: true }))}
                onMouseLeave={() => setHover(prev => ({ ...prev, nombre: false }))}
              >
                <div className="flex items-center overflow-clip rounded-[inherit] h-full w-full">
                  <div className="flex gap-[14px] items-center px-[12px] py-[6px] w-full h-full">
                    <input
                      type="text"
                      value={formData.nombre}
                      onChange={(e) => handleFieldChange('nombre', e.target.value)}
                      onBlur={() => handleFieldBlur('nombre')}
                      placeholder="NOMBRE"
                      maxLength={100}
                      className="flex-1 font-['Roboto:Regular',sans-serif] font-normal text-[14px] tracking-[2.8px] bg-transparent outline-none text-[#362517] placeholder:text-[#5a3e26]"
                      onClick={(e) => !isZoomed && e.stopPropagation()}
                    />
                    {touched.nombre && formData.nombre && isFieldValid('nombre') && (
                      <div className="w-[24px] h-[24px]">
                        <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <path d={svgPathsSuccess.p26ebff00} stroke="#3A6E2E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                    )}
                    {touched.nombre && formData.nombre && !isFieldValid('nombre') && (
                      <div className="w-[24px] h-[24px]">
                        <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <path d={svgPathsError.p13b00a00} stroke="#B33838" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px] border border-dashed" style={{ borderColor: getInputBorderColor('nombre') }} />
              </div>
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-[4px] items-start w-full">
              <div 
                className="h-[48px] rounded-[8px] w-full relative transition-colors duration-200"
                style={{ backgroundColor: getInputBackgroundColor('email') }}
                onMouseEnter={() => setHover(prev => ({ ...prev, email: true }))}
                onMouseLeave={() => setHover(prev => ({ ...prev, email: false }))}
              >
                <div className="flex items-center overflow-clip rounded-[inherit] h-full w-full">
                  <div className="flex gap-[14px] items-center px-[12px] py-[6px] w-full h-full">
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleFieldChange('email', e.target.value)}
                      onBlur={() => handleFieldBlur('email')}
                      placeholder="EMAIL (dirección@host)"
                      maxLength={254}
                      autoComplete="email"
                      className="flex-1 font-['Roboto:Regular',sans-serif] font-normal text-[14px] tracking-[2.8px] bg-transparent outline-none text-[#362517] placeholder:text-[#5a3e26]"
                      onClick={(e) => !isZoomed && e.stopPropagation()}
                    />
                    {touched.email && formData.email && isFieldValid('email') && (
                      <div className="w-[24px] h-[24px]">
                        <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <path d={svgPathsSuccess.p26ebff00} stroke="#3A6E2E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                    )}
                    {touched.email && formData.email && !isFieldValid('email') && (
                      <div className="w-[24px] h-[24px]">
                        <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <path d={svgPathsError.p13b00a00} stroke="#B33838" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px] border border-dashed" style={{ borderColor: getInputBorderColor('email') }} />
              </div>
            </div>

            {/* Phone Input */}
            <div className="flex flex-col gap-[4px] w-full">
              <div 
                className="h-[48px] rounded-[8px] w-full relative transition-colors duration-200"
                style={{ backgroundColor: getInputBackgroundColor('telefono') }}
                onMouseEnter={() => setHover(prev => ({ ...prev, telefono: true }))}
                onMouseLeave={() => setHover(prev => ({ ...prev, telefono: false }))}
              >
                <div className="flex items-center overflow-clip rounded-[inherit] h-full w-full">
                  <div className="flex gap-[14px] items-center px-[12px] py-[6px] w-full h-full">
                    <input
                      type="tel"
                      value={formData.telefono}
                      onChange={(e) => handleFieldChange('telefono', e.target.value)}
                      onBlur={() => handleFieldBlur('telefono')}
                      placeholder="TELÉFONO (+99 999 999 999)"
                      maxLength={20}
                      autoComplete="tel"
                      className="flex-1 font-['Roboto:Regular',sans-serif] font-normal text-[14px] tracking-[2.8px] bg-transparent outline-none text-[#362517] placeholder:text-[#5a3e26]"
                      onClick={(e) => !isZoomed && e.stopPropagation()}
                    />
                    {touched.telefono && formData.telefono && isFieldValid('telefono') && (
                      <div className="w-[24px] h-[24px]">
                        <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <path d={svgPathsSuccess.p26ebff00} stroke="#3A6E2E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                    )}
                    {touched.telefono && formData.telefono && !isFieldValid('telefono') && (
                      <div className="w-[24px] h-[24px]">
                        <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <path d={svgPathsError.p13b00a00} stroke="#B33838" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px] border border-dashed" style={{ borderColor: getInputBorderColor('telefono') }} />
              </div>
            </div>

            {/* Subject Input */}
            <div className="flex flex-col gap-[4px] w-full">
              <div 
                className="h-[48px] rounded-[8px] w-full relative transition-colors duration-200"
                style={{ backgroundColor: getInputBackgroundColor('asunto') }}
                onMouseEnter={() => setHover(prev => ({ ...prev, asunto: true }))}
                onMouseLeave={() => setHover(prev => ({ ...prev, asunto: false }))}
              >
                <div className="flex items-center overflow-clip rounded-[inherit] h-full w-full">
                  <div className="flex gap-[14px] items-center px-[12px] py-[6px] w-full h-full">
                    <input
                      type="text"
                      value={formData.asunto}
                      onChange={(e) => handleFieldChange('asunto', e.target.value)}
                      onBlur={() => handleFieldBlur('asunto')}
                      placeholder="ASUNTO"
                      maxLength={200}
                      className="flex-1 font-['Roboto:Regular',sans-serif] font-normal text-[14px] tracking-[2.8px] bg-transparent outline-none text-[#362517] placeholder:text-[#5a3e26]"
                      onClick={(e) => !isZoomed && e.stopPropagation()}
                    />
                    {touched.asunto && formData.asunto && isFieldValid('asunto') && (
                      <div className="w-[24px] h-[24px]">
                        <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <path d={svgPathsSuccess.p26ebff00} stroke="#3A6E2E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                    )}
                    {touched.asunto && formData.asunto && !isFieldValid('asunto') && (
                      <div className="w-[24px] h-[24px]">
                        <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <path d={svgPathsError.p13b00a00} stroke="#B33838" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px] border border-dashed" style={{ borderColor: getInputBorderColor('asunto') }} />
              </div>
            </div>

            {/* Message Input */}
            <div className="flex flex-col gap-[4px] w-full">
              <div 
                className="rounded-[8px] w-full relative transition-colors duration-200"
                style={{ backgroundColor: getInputBackgroundColor('mensaje') }}
                onMouseEnter={() => setHover(prev => ({ ...prev, mensaje: true }))}
                onMouseLeave={() => setHover(prev => ({ ...prev, mensaje: false }))}
              >
                <div className="overflow-clip rounded-[inherit] w-full">
                  <div className="flex flex-col gap-[2px] items-start p-[12px] w-full relative">
                    <div className="flex h-[180px] items-start w-full relative">
                      <textarea
                        value={formData.mensaje}
                        onChange={(e) => handleFieldChange('mensaje', e.target.value)}
                        onBlur={() => handleFieldBlur('mensaje')}
                        placeholder="MENSAJE (mín. 10, máx. 1000 caracteres)"
                      maxLength={1000}
                        className="flex-1 font-['Roboto:Regular',sans-serif] font-normal text-[16px] bg-transparent outline-none resize-none w-full h-full text-[#362517] placeholder:text-[#5a3e26]"
                        onClick={(e) => !isZoomed && e.stopPropagation()}
                      />
                      {touched.mensaje && formData.mensaje && isFieldValid('mensaje') && (
                        <div className="absolute bottom-0 right-0 w-[24px] h-[24px]">
                          <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <path d={svgPathsSuccess.p26ebff00} stroke="#295120" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </svg>
                        </div>
                      )}
                    </div>
                    {/* Character Counter */}
                    <div className="absolute bottom-0 left-3 text-[10px] font-['Roboto:Regular',sans-serif] text-[#5a3e26]">
                      {formData.mensaje.length}/1000
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px] border border-dashed" style={{ borderColor: getInputBorderColor('mensaje') }} />
              </div>
            </div>

            {/* Buttons */}
            <div className="h-[44px] relative shrink-0 w-full flex items-center justify-between pt-[10px]">
              <button 
                onClick={(e) => { e.stopPropagation(); handleDelete(); }}
                aria-label="Borrar todos los campos del formulario"
                title="Borrar todos los campos del formulario"
                className="relative flex gap-[10px] h-[44px] items-center justify-center p-[10px] rounded-full w-[88px] shadow-[25px_25px_10px_0px_rgba(0,0,0,0),16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)] border border-solid group overflow-visible transition-all duration-300"
                style={{ 
                  backgroundColor: getDeleteButtonColor(),
                  borderColor: getDeleteButtonBorderColor()
                }}
              >
                {/* Borde difuminado en hover */}
                <div 
                  className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: '0 0 0 1px rgba(90, 62, 38, 0.2), 0 0 6px 2px rgba(90, 62, 38, 0.12), 0 0 12px 4px rgba(90, 62, 38, 0.06), 0 0 20px 6px rgba(90, 62, 38, 0.03)',
                  }}
                />
                <div className="w-[24px] h-[24px] relative z-10">
                  <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p327d2300} stroke={getDeleteIconColor()} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); handleSend(); }}
                disabled={isSubmitting}
                aria-label={isSubmitting ? "Enviando mensaje..." : "Enviar mensaje de contacto"}
                title={isSubmitting ? "Enviando mensaje..." : "Enviar mensaje de contacto"}
                className="relative flex gap-[10px] h-[44px] items-center justify-center p-[10px] rounded-full w-[88px] shadow-[25px_25px_10px_0px_rgba(0,0,0,0),16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)] border border-solid disabled:opacity-50 disabled:cursor-not-allowed group overflow-visible transition-all duration-300"
                style={{ 
                  backgroundColor: getSendButtonColor(),
                  borderColor: getSendButtonBorderColor()
                }}
              >
                {/* Borde difuminado en hover */}
                <div 
                  className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none disabled:opacity-0"
                  style={{
                    boxShadow: '0 0 0 1px rgba(90, 62, 38, 0.2), 0 0 6px 2px rgba(90, 62, 38, 0.12), 0 0 12px 4px rgba(90, 62, 38, 0.06), 0 0 20px 6px rgba(90, 62, 38, 0.03)',
                  }}
                />
                <div className="w-[24px] h-[24px] relative z-10">
                  <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p18e0c400} stroke={getSendIconColor()} strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          
            {/* Borde del formulario */}
            <div className="absolute inset-0 rounded-[22px] pointer-events-none">
              <div aria-hidden="true" className="absolute border border-[#5a3e26] border-dashed inset-0 rounded-[22px]" />
            </div>
          </div>

          {/* Success Modal */}
          {showSuccessModal && (
            <div className="absolute left-0 right-0 mx-auto bottom-full mb-[5px] bg-[#295120] flex items-center justify-center h-[48px] overflow-clip rounded-[16px] shadow-[0px_54px_15px_0px_rgba(0,0,0,0),0px_34px_14px_0px_rgba(0,0,0,0.02),0px_19px_12px_0px_rgba(0,0,0,0.07),0px_9px_9px_0px_rgba(0,0,0,0.12),0px_2px_5px_0px_rgba(0,0,0,0.14)] w-full px-[7px]">
              <p className="font-['Roboto:Regular',sans-serif] font-normal text-[14px] text-center text-white leading-normal">
                Mensaje enviado exitosamente
              </p>
            </div>
          )}

          {/* Error Modal */}
          {errorModal && (
            <div className="absolute left-0 right-0 mx-auto bottom-full mb-[5px] bg-[#4d0d0d] flex items-center justify-center h-[48px] overflow-clip rounded-[16px] shadow-[0px_54px_15px_0px_rgba(0,0,0,0),0px_34px_14px_0px_rgba(0,0,0,0.02),0px_19px_12px_0px_rgba(0,0,0,0.07),0px_9px_9px_0px_rgba(0,0,0,0.12),0px_2px_5px_0px_rgba(0,0,0,0.14)] w-full px-[7px]">
              <p className="font-['Roboto:Regular',sans-serif] font-normal text-[14px] text-center text-white leading-normal">
                {errorModal.message}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}