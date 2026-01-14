import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import svgPaths from "../imports/svg-pj45jcyo5z";
import svgPathsSuccess from "../imports/svg-ug55i8e7pd";
import svgPathsError from "../imports/svg-nd4dsni8hv";
import { projectId, publicAnonKey } from '../utils/supabase/info';
export function ContactoSection({ isZoomed = false, onNavigate }) {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: ''
    });
    const [touched, setTouched] = useState({
        nombre: false,
        email: false,
        telefono: false,
        asunto: false,
        mensaje: false
    });
    const [hover, setHover] = useState({
        nombre: false,
        email: false,
        telefono: false,
        asunto: false,
        mensaje: false
    });
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [errorModal, setErrorModal] = useState(null);
    // Calculate vertical position for error modals based on field
    const getErrorModalTopPosition = (field) => {
        const paddingTop = 22; // pt-[22px]
        const inputHeight = 48;
        const gap = 2; // gap-[2px] between inputs
        const fieldGap = 4; // gap-[4px] within each field container
        switch (field) {
            case 'nombre':
                return paddingTop + 20; // Centered with first input
            case 'email':
                return paddingTop + (inputHeight + gap + fieldGap) + 20;
            case 'telefono':
                return paddingTop + 2 * (inputHeight + gap + fieldGap) + 20;
            case 'asunto':
                return paddingTop + 3 * (inputHeight + gap + fieldGap) + 20;
            case 'mensaje':
                return paddingTop + 4 * (inputHeight + gap + fieldGap) + 60; // mensaje is taller
            default:
                return paddingTop;
        }
    };
    const handleClick = () => {
        if (isZoomed && onNavigate) {
            onNavigate('contacto');
        }
    };
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const validatePhone = (phone) => {
        const phoneRegex = /^\+\d{1,3}\s?\d{3}\s?\d{3}\s?\d{3}$/;
        return phoneRegex.test(phone);
    };
    const isFieldValid = (field) => {
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
    const allFieldsValid = () => {
        return (isFieldValid('nombre') &&
            isFieldValid('email') &&
            isFieldValid('telefono') &&
            isFieldValid('asunto') &&
            isFieldValid('mensaje'));
    };
    const handleFieldChange = (field, value) => {
        // Limit mensaje to 300 characters
        if (field === 'mensaje' && value.length > 300) {
            return;
        }
        setFormData(prev => ({ ...prev, [field]: value }));
        setTouched(prev => ({ ...prev, [field]: true }));
        // Clear error modal if this field is being corrected
        if (errorModal && errorModal.field === field) {
            // Check if the new value would make the field valid
            if (field === 'email' && validateEmail(value)) {
                setErrorModal(null);
            }
            else if (field === 'telefono' && validatePhone(value)) {
                setErrorModal(null);
            }
            else if (field !== 'email' && field !== 'telefono' && value.trim().length > 0) {
                setErrorModal(null);
            }
        }
    };
    const handleFieldBlur = (field) => {
        setTouched(prev => ({ ...prev, [field]: true }));
        if (touched[field] && formData[field] && !isFieldValid(field)) {
            let message = '';
            switch (field) {
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
        setTouched({
            nombre: true,
            email: true,
            telefono: true,
            asunto: true,
            mensaje: true
        });
        if (!allFieldsValid()) {
            const fields = ['nombre', 'email', 'telefono', 'asunto', 'mensaje'];
            for (const field of fields) {
                if (!isFieldValid(field)) {
                    let message = '';
                    switch (field) {
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
                    break;
                }
            }
            return;
        }
        // Send data to Supabase
        try {
            const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-44bf6176/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${publicAnonKey}`
                },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            if (!response.ok) {
                console.error('Error al enviar formulario:', result);
                setErrorModal({
                    field: 'general',
                    message: result.error || 'Error al enviar mensaje'
                });
                return;
            }
            console.log('Mensaje enviado exitosamente:', result);
            setShowSuccessModal(true);
            // Reset form after successful submission
            setTimeout(() => {
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
            }, 3000);
        }
        catch (error) {
            console.error('Error de red al enviar formulario:', error);
            setErrorModal({
                field: 'general',
                message: 'Error de conexión'
            });
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
    const getInputBackgroundColor = (field) => {
        if (touched[field] && formData[field]) {
            if (hover[field]) {
                return isFieldValid(field) ? '#d0f5c8' : '#ffc0c0';
            }
            return isFieldValid(field) ? '#dcffd4' : '#ffcece';
        }
        return hover[field] ? '#ebe3da' : '#f7f2ed';
    };
    const getInputBorderColor = (field) => {
        if (touched[field] && formData[field]) {
            return isFieldValid(field) ? '#3a6e2e' : '#b33838';
        }
        return '#a16f44';
    };
    const getFormBackgroundColor = () => {
        const hasErrors = Object.keys(touched).some(key => {
            const field = key;
            return touched[field] && formData[field] && !isFieldValid(field);
        });
        if (hasErrors)
            return '#ffcece';
        if (allFieldsValid())
            return '#e5e2de';
        return '#e5e2de';
    };
    const getSendButtonColor = () => {
        if (allFieldsValid())
            return '#4d4b4a'; // Gris cuando está válido
        const hasErrors = Object.keys(touched).some(key => {
            const field = key;
            return touched[field] && formData[field] && !isFieldValid(field);
        });
        if (hasErrors)
            return '#ffcece';
        return '#e1e1e1';
    };
    const getSendButtonBorderColor = () => {
        if (allFieldsValid())
            return '#5a3e26'; // Borde oscuro cuando está válido
        const hasErrors = Object.keys(touched).some(key => {
            const field = key;
            return touched[field] && formData[field] && !isFieldValid(field);
        });
        if (hasErrors)
            return '#6f1818';
        return '#a3a19e';
    };
    const getSendIconColor = () => {
        if (allFieldsValid())
            return 'white'; // Blanco cuando está válido
        const hasErrors = Object.keys(touched).some(key => {
            const field = key;
            return touched[field] && formData[field] && !isFieldValid(field);
        });
        if (hasErrors)
            return '#6F1818';
        return '#3D3A36';
    };
    const getDeleteButtonColor = () => {
        const hasErrors = Object.keys(touched).some(key => {
            const field = key;
            return touched[field] && formData[field] && !isFieldValid(field);
        });
        if (hasErrors)
            return '#912727';
        if (allFieldsValid())
            return '#4d4b4a';
        return '#e1e1e1';
    };
    const getDeleteButtonBorderColor = () => {
        const hasErrors = Object.keys(touched).some(key => {
            const field = key;
            return touched[field] && formData[field] && !isFieldValid(field);
        });
        if (hasErrors)
            return 'white';
        if (allFieldsValid())
            return '#5a3e26';
        return '#a3a19e';
    };
    const getDeleteIconColor = () => {
        const hasErrors = Object.keys(touched).some(key => {
            const field = key;
            return touched[field] && formData[field] && !isFieldValid(field);
        });
        if (hasErrors || allFieldsValid())
            return 'white';
        return '#3D3A36';
    };
    return (_jsx("div", { className: "w-full min-h-screen lg:w-[1280px] lg:h-[832px] bg-[#f7f2ed] flex items-center justify-center p-4 md:p-6 lg:p-8", children: _jsxs("div", { className: "relative flex items-center", children: [_jsxs("div", { className: `rounded-[22px] w-full max-w-[490px] relative shadow-[25px_25px_10px_0px_rgba(0,0,0,0),16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)] ${isZoomed ? 'cursor-pointer hover:scale-105 transition-transform duration-300' : ''}`, style: { backgroundColor: getFormBackgroundColor() }, onClick: handleClick, children: [_jsxs("div", { className: "flex flex-col gap-[2px] items-center pb-6 md:pb-8 lg:pb-[32px] pt-4 md:pt-6 lg:pt-[22px] px-4 md:px-12 lg:px-[100px]", children: [_jsx("div", { className: "flex flex-col gap-[4px] items-start w-full max-w-[404px] mb-[2px]", children: _jsxs("div", { className: "h-[48px] rounded-[8px] w-full relative transition-colors duration-200", style: { backgroundColor: getInputBackgroundColor('nombre') }, onMouseEnter: () => setHover(prev => ({ ...prev, nombre: true })), onMouseLeave: () => setHover(prev => ({ ...prev, nombre: false })), children: [_jsx("div", { className: "flex items-center overflow-clip rounded-[inherit] h-full w-full", children: _jsxs("div", { className: "flex gap-[14px] items-center px-[12px] py-[6px] w-full h-full", children: [_jsx("input", { type: "text", value: formData.nombre, onChange: (e) => handleFieldChange('nombre', e.target.value), onBlur: () => handleFieldBlur('nombre'), placeholder: "NOMBRE", className: "flex-1 font-['Roboto:Regular',sans-serif] font-normal text-[14px] tracking-[2.8px] bg-transparent outline-none text-[#362517] placeholder:text-[#5a3e26]", onClick: (e) => !isZoomed && e.stopPropagation() }), touched.nombre && formData.nombre && isFieldValid('nombre') && (_jsx("div", { className: "w-[24px] h-[24px]", children: _jsx("svg", { className: "block w-full h-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 24 24", children: _jsx("path", { d: svgPathsSuccess.p26ebff00, stroke: "#3A6E2E", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) })), touched.nombre && formData.nombre && !isFieldValid('nombre') && (_jsx("div", { className: "w-[24px] h-[24px]", children: _jsx("svg", { className: "block w-full h-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 24 24", children: _jsx("path", { d: svgPathsError.p13b00a00, stroke: "#B33838", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) }))] }) }), _jsx("div", { "aria-hidden": "true", className: "absolute inset-0 pointer-events-none rounded-[8px] border border-dashed", style: { borderColor: getInputBorderColor('nombre') } })] }) }), _jsx("div", { className: "flex flex-col gap-[4px] items-start w-full max-w-[404px] mb-[2px]", children: _jsxs("div", { className: "h-[48px] rounded-[8px] w-full relative transition-colors duration-200", style: { backgroundColor: getInputBackgroundColor('email') }, onMouseEnter: () => setHover(prev => ({ ...prev, email: true })), onMouseLeave: () => setHover(prev => ({ ...prev, email: false })), children: [_jsx("div", { className: "flex items-center overflow-clip rounded-[inherit] h-full w-full", children: _jsxs("div", { className: "flex gap-[14px] items-center px-[12px] py-[6px] w-full h-full", children: [_jsx("input", { type: "email", value: formData.email, onChange: (e) => handleFieldChange('email', e.target.value), onBlur: () => handleFieldBlur('email'), placeholder: "EMAIL (direcci\u00F3n@host)", className: "flex-1 font-['Roboto:Regular',sans-serif] font-normal text-[14px] tracking-[2.8px] bg-transparent outline-none text-[#362517] placeholder:text-[#5a3e26]", onClick: (e) => !isZoomed && e.stopPropagation() }), touched.email && formData.email && isFieldValid('email') && (_jsx("div", { className: "w-[24px] h-[24px]", children: _jsx("svg", { className: "block w-full h-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 24 24", children: _jsx("path", { d: svgPathsSuccess.p26ebff00, stroke: "#3A6E2E", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) })), touched.email && formData.email && !isFieldValid('email') && (_jsx("div", { className: "w-[24px] h-[24px]", children: _jsx("svg", { className: "block w-full h-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 24 24", children: _jsx("path", { d: svgPathsError.p13b00a00, stroke: "#B33838", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) }))] }) }), _jsx("div", { "aria-hidden": "true", className: "absolute inset-0 pointer-events-none rounded-[8px] border border-dashed", style: { borderColor: getInputBorderColor('email') } })] }) }), _jsx("div", { className: "flex flex-col gap-[4px] items-start w-full max-w-[404px] mb-[2px]", children: _jsxs("div", { className: "h-[48px] rounded-[8px] w-full relative transition-colors duration-200", style: { backgroundColor: getInputBackgroundColor('telefono') }, onMouseEnter: () => setHover(prev => ({ ...prev, telefono: true })), onMouseLeave: () => setHover(prev => ({ ...prev, telefono: false })), children: [_jsx("div", { className: "flex items-center overflow-clip rounded-[inherit] h-full w-full", children: _jsxs("div", { className: "flex gap-[14px] items-center px-[12px] py-[6px] w-full h-full", children: [_jsx("input", { type: "tel", value: formData.telefono, onChange: (e) => handleFieldChange('telefono', e.target.value), onBlur: () => handleFieldBlur('telefono'), placeholder: "TEL\u00C9FONO (+### ### ### ###)", className: "flex-1 font-['Roboto:Regular',sans-serif] font-normal text-[14px] tracking-[2.8px] bg-transparent outline-none text-[#362517] placeholder:text-[#5a3e26]", onClick: (e) => !isZoomed && e.stopPropagation() }), touched.telefono && formData.telefono && isFieldValid('telefono') && (_jsx("div", { className: "w-[24px] h-[24px]", children: _jsx("svg", { className: "block w-full h-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 24 24", children: _jsx("path", { d: svgPathsSuccess.p26ebff00, stroke: "#3A6E2E", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) })), touched.telefono && formData.telefono && !isFieldValid('telefono') && (_jsx("div", { className: "w-[24px] h-[24px]", children: _jsx("svg", { className: "block w-full h-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 24 24", children: _jsx("path", { d: svgPathsError.p13b00a00, stroke: "#B33838", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) }))] }) }), _jsx("div", { "aria-hidden": "true", className: "absolute inset-0 pointer-events-none rounded-[8px] border border-dashed", style: { borderColor: getInputBorderColor('telefono') } })] }) }), _jsx("div", { className: "flex flex-col gap-[4px] items-start w-full max-w-[404px] mb-[2px]", children: _jsxs("div", { className: "h-[48px] rounded-[8px] w-full relative transition-colors duration-200", style: { backgroundColor: getInputBackgroundColor('asunto') }, onMouseEnter: () => setHover(prev => ({ ...prev, asunto: true })), onMouseLeave: () => setHover(prev => ({ ...prev, asunto: false })), children: [_jsx("div", { className: "flex items-center overflow-clip rounded-[inherit] h-full w-full", children: _jsxs("div", { className: "flex gap-[14px] items-center px-[12px] py-[6px] w-full h-full", children: [_jsx("input", { type: "text", value: formData.asunto, onChange: (e) => handleFieldChange('asunto', e.target.value), onBlur: () => handleFieldBlur('asunto'), placeholder: "ASUNTO", className: "flex-1 font-['Roboto:Regular',sans-serif] font-normal text-[14px] tracking-[2.8px] bg-transparent outline-none text-[#362517] placeholder:text-[#5a3e26]", onClick: (e) => !isZoomed && e.stopPropagation() }), touched.asunto && formData.asunto && isFieldValid('asunto') && (_jsx("div", { className: "w-[24px] h-[24px]", children: _jsx("svg", { className: "block w-full h-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 24 24", children: _jsx("path", { d: svgPathsSuccess.p26ebff00, stroke: "#3A6E2E", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) })), touched.asunto && formData.asunto && !isFieldValid('asunto') && (_jsx("div", { className: "w-[24px] h-[24px]", children: _jsx("svg", { className: "block w-full h-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 24 24", children: _jsx("path", { d: svgPathsError.p13b00a00, stroke: "#B33838", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) }))] }) }), _jsx("div", { "aria-hidden": "true", className: "absolute inset-0 pointer-events-none rounded-[8px] border border-dashed", style: { borderColor: getInputBorderColor('asunto') } })] }) }), _jsx("div", { className: "flex flex-col gap-[4px] items-start w-full max-w-[404px] mb-[2px]", children: _jsxs("div", { className: "rounded-[8px] w-full relative transition-colors duration-200", style: { backgroundColor: getInputBackgroundColor('mensaje') }, onMouseEnter: () => setHover(prev => ({ ...prev, mensaje: true })), onMouseLeave: () => setHover(prev => ({ ...prev, mensaje: false })), children: [_jsx("div", { className: "overflow-clip rounded-[inherit] w-full", children: _jsxs("div", { className: "flex flex-col gap-[2px] items-start p-[12px] w-full relative", children: [_jsxs("div", { className: "flex h-[180px] items-start w-full relative", children: [_jsx("textarea", { value: formData.mensaje, onChange: (e) => handleFieldChange('mensaje', e.target.value), onBlur: () => handleFieldBlur('mensaje'), placeholder: "MENSAJE (m\u00E1x. 300 caracteres)", className: "flex-1 font-['Roboto:Regular',sans-serif] font-normal text-[16px] bg-transparent outline-none resize-none w-full h-full text-[#362517] placeholder:text-[#5a3e26]", onClick: (e) => !isZoomed && e.stopPropagation() }), touched.mensaje && formData.mensaje && isFieldValid('mensaje') && (_jsx("div", { className: "absolute bottom-0 right-0 w-[24px] h-[24px]", children: _jsx("svg", { className: "block w-full h-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 24 24", children: _jsx("path", { d: svgPathsSuccess.p26ebff00, stroke: "#295120", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) }))] }), _jsxs("div", { className: "absolute bottom-0 left-0 text-[10px] font-['Roboto:Regular',sans-serif] text-[#5a3e26]", children: [formData.mensaje.length, "/300"] })] }) }), _jsx("div", { "aria-hidden": "true", className: "absolute inset-0 pointer-events-none rounded-[8px] border border-dashed", style: { borderColor: getInputBorderColor('mensaje') } })] }) }), _jsxs("div", { className: "flex gap-4 md:gap-5 lg:gap-[20px] h-[44px] items-center justify-end w-full max-w-[400px] mt-[4px]", children: [_jsx("button", { onClick: (e) => { e.stopPropagation(); handleSend(); }, className: "flex gap-[10px] h-[44px] items-center justify-center p-[10px] rounded-full w-[88px] shadow-[25px_25px_10px_0px_rgba(0,0,0,0),16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)] border border-solid", style: {
                                                backgroundColor: getSendButtonColor(),
                                                borderColor: getSendButtonBorderColor()
                                            }, children: _jsx("div", { className: "w-[24px] h-[24px]", children: _jsx("svg", { className: "block w-full h-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 24 24", children: _jsx("path", { d: svgPaths.p18e0c400, stroke: getSendIconColor(), strokeLinecap: "round", strokeWidth: "2" }) }) }) }), _jsx("button", { onClick: (e) => { e.stopPropagation(); handleDelete(); }, className: "flex gap-[10px] h-[44px] items-center justify-center p-[10px] rounded-full w-[88px] shadow-[25px_25px_10px_0px_rgba(0,0,0,0),16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)] border border-solid", style: {
                                                backgroundColor: getDeleteButtonColor(),
                                                borderColor: getDeleteButtonBorderColor()
                                            }, children: _jsx("div", { className: "w-[24px] h-[24px]", children: _jsx("svg", { className: "block w-full h-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 24 24", children: _jsx("path", { d: svgPaths.p327d2300, stroke: getDeleteIconColor(), strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) }) })] })] }), _jsx("div", { "aria-hidden": "true", className: "absolute border border-[#5a3e26] border-dashed inset-0 pointer-events-none rounded-[22px]" })] }), showSuccessModal && (_jsx("div", { className: "absolute left-full ml-4 lg:left-[510px] top-1/2 transform -translate-y-1/2 bg-[#295120] flex flex-col h-[88px] items-center justify-center overflow-clip rounded-[22px] shadow-[0px_54px_15px_0px_rgba(0,0,0,0),0px_34px_14px_0px_rgba(0,0,0,0.02),0px_19px_12px_0px_rgba(0,0,0,0.07),0px_9px_9px_0px_rgba(0,0,0,0.12),0px_2px_5px_0px_rgba(0,0,0,0.14)] w-[184px]", children: _jsx("div", { className: "flex flex-col items-center px-[7px] py-[23px] w-full h-full", children: _jsx("p", { className: "font-['Roboto:Regular',sans-serif] font-normal text-[14px] text-center text-white leading-normal", children: "Mensaje enviado exitosamente" }) }) })), errorModal && (_jsx("div", { className: "absolute left-full ml-4 lg:left-[510px] bg-[#4d0d0d] flex flex-col h-[88px] items-center justify-center overflow-clip rounded-[22px] shadow-[0px_54px_15px_0px_rgba(0,0,0,0),0px_34px_14px_0px_rgba(0,0,0,0.02),0px_19px_12px_0px_rgba(0,0,0,0.07),0px_9px_9px_0px_rgba(0,0,0,0.12),0px_2px_5px_0px_rgba(0,0,0,0.14)] w-[184px]", style: { top: `${getErrorModalTopPosition(errorModal.field)}px` }, children: _jsx("div", { className: "flex flex-col items-center px-[7px] py-[23px] w-full h-full", children: _jsx("p", { className: "font-['Roboto:Regular',sans-serif] font-normal text-[14px] text-center text-white leading-normal", children: errorModal.message }) }) }))] }) }));
}
