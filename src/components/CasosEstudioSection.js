import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState, useEffect } from 'react';
import imgPlaceholder from "../assets/ece298d0ec2c16f10310d45724b276a6035cb503.png";
import svgPaths from "../imports/svg-mfqfycxni5";
function CaseStudyCard({ title, date, description, image, isZoomed = false, onNavigate }) {
    const handleClick = (e) => {
        if (isZoomed && onNavigate) {
            e.stopPropagation();
            onNavigate();
        }
    };
    return (_jsxs("div", { className: `min-w-[280px] md:min-w-[400px] lg:min-w-[592px] max-w-[592px] h-auto min-h-[286px] lg:h-[286px] bg-[#b2b0ad] hover:bg-[#c5c3c0] rounded-[22px] p-3 md:p-4 lg:p-[12px] flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-[12px] transition-all duration-300 group ${isZoomed ? 'cursor-pointer hover:scale-105' : ''}`, onClick: handleClick, children: [_jsx("div", { className: "w-full md:w-[260px] h-[200px] md:h-[262px] lg:h-[262px] rounded-[12px] shadow-[25px_25px_10px_0px_rgba(0,0,0,0),16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)] overflow-hidden flex-shrink-0", children: _jsx("img", { src: image, alt: title, className: "w-full h-full object-cover" }) }), _jsxs("div", { className: "flex-1 flex flex-col gap-[12px]", children: [_jsxs("div", { className: "bg-[#f7f2ed] h-[96px] rounded-[12px] overflow-hidden", children: [_jsx("div", { className: "p-[14px_13px]", children: _jsx("p", { className: "font-['Roboto:Regular',sans-serif] text-[#5a3e26] text-[18px] leading-normal", children: title }) }), _jsxs("div", { className: "border-t border-[#b2b0ad] border-dashed flex", children: [_jsx("div", { className: "flex-1 p-[14px_12px]", children: _jsx("p", { className: "font-['Roboto:Regular',sans-serif] text-[#5a3e26] text-[16px] leading-normal", children: date }) }), _jsx("div", { className: "w-[182px] flex items-center gap-[2px] p-[2px]", children: [...Array(3).keys()].map((i) => (_jsx("div", { className: "w-[44px] h-[44px]", children: _jsx("svg", { className: "block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 44 44", children: _jsxs("g", { children: [_jsx("path", { d: svgPaths.p2cf4d4c0, fill: "#F4511E" }), _jsx("path", { d: svgPaths.p31705500, fill: "#FF8A65" }), _jsx("path", { d: svgPaths.p3120ab40, fill: "#29B6F6" }), _jsx("path", { d: svgPaths.p355a6400, fill: "#7C4DFF" }), _jsx("path", { d: svgPaths.p13498d00, fill: "#00E676" })] }) }) }, i))) })] })] }), _jsx("div", { className: "bg-[#f7f2ed] h-[94px] rounded-[12px] shadow-[25px_25px_10px_0px_rgba(0,0,0,0),16px_16px_9px_0px_rgba(0,0,0,0.02),9px_9px_8px_0px_rgba(0,0,0,0.07),4px_4px_6px_0px_rgba(0,0,0,0.12),1px_1px_3px_0px_rgba(0,0,0,0.14)] p-[11px_12px] overflow-hidden", children: _jsx("p", { className: "font-['Roboto:Regular',sans-serif] text-[#524e4a] text-[14px] leading-normal", children: description }) }), _jsx("div", { className: "bg-[#f7f2ed] rounded-[12px] p-[2px]", children: _jsxs("button", { className: "w-full bg-[#4d4b4a] rounded-[10px] h-[44px] flex items-center justify-center gap-[10px] px-[10px] hover:bg-[#3a3938] hover:scale-[1.02] transition-all duration-300 shadow-[0px_2px_4px_rgba(0,0,0,0.2)] hover:shadow-[0px_4px_8px_rgba(0,0,0,0.3)]", children: [_jsx("span", { className: "font-['Roboto:Bold',sans-serif] font-bold text-[#f7f2ed] text-[16px]", children: "VER CASO DE ESTUDIO" }), _jsx("div", { className: "w-[24px] h-[24px]", children: _jsx("svg", { className: "block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 24 24", children: _jsx("g", { children: _jsx("path", { d: svgPaths.p348d5ac0, stroke: "#F7F2ED", strokeLinejoin: "round", strokeWidth: "2" }) }) }) })] }) })] })] }));
}
export function CasosEstudioSection({ isZoomed = false, onNavigate }) {
    const scrollContainerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const caseStudies = [
        {
            title: 'Title',
            date: '12/2025',
            description: 'Lorem ipsum dolor sit amet consectetur. Egestas faucibus sit lacus odio vitae aliquet eleifend. At integer nulla leo id vel fusce scelerisque volutpat.',
            image: imgPlaceholder,
        },
        {
            title: 'Title',
            date: '12/2025',
            description: 'Lorem ipsum dolor sit amet consectetur. Egestas faucibus sit lacus odio vitae aliquet eleifend. At integer nulla leo id vel fusce scelerisque volutpat.',
            image: imgPlaceholder,
        },
        {
            title: 'Title',
            date: '12/2025',
            description: 'Lorem ipsum dolor sit amet consectetur. Egestas faucibus sit lacus odio vitae aliquet eleifend. At integer nulla leo id vel fusce scelerisque volutpat.',
            image: imgPlaceholder,
        },
    ];
    const handleMouseDown = (e) => {
        // Solo permitir drag con el botón izquierdo del mouse (button === 0)
        if (e.button !== 0 || !scrollContainerRef.current)
            return;
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
        // Prevenir selección de texto durante el drag
        e.preventDefault();
    };
    const handleMouseUp = () => {
        setIsDragging(false);
    };
    const handleMouseMove = (e) => {
        if (!isDragging || !scrollContainerRef.current)
            return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Speed multiplier
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };
    const handleMouseLeave = () => {
        setIsDragging(false);
    };
    useEffect(() => {
        // Manejar mouseup global para liberar el drag cuando se suelta fuera del contenedor
        const handleGlobalMouseUp = () => {
            setIsDragging(false);
        };
        window.addEventListener('mouseup', handleGlobalMouseUp);
        return () => {
            window.removeEventListener('mouseup', handleGlobalMouseUp);
        };
    }, []);
    const handleNavigateToSection = () => {
        if (isZoomed && onNavigate) {
            onNavigate('casos-estudio');
        }
    };
    return (_jsx("div", { className: "relative w-full h-full bg-[#f7f2ed] flex items-center justify-center p-4 md:p-8 lg:p-0", children: _jsx("div", { className: "w-full lg:absolute lg:bottom-[200px] lg:left-0 lg:right-0", children: _jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute left-0 top-0 bottom-0 w-0 border-l-2 border-[#7e5635] border-dashed z-10" }), _jsx("div", { className: "absolute right-0 top-0 bottom-0 w-0 border-r-2 border-[#7e5635] border-dashed z-10" }), _jsxs("div", { ref: scrollContainerRef, className: `overflow-x-auto overflow-y-hidden px-4 md:px-8 lg:px-[38px] py-[8px] ${!isZoomed ? 'cursor-grab active:cursor-grabbing' : ''}`, style: { scrollbarWidth: 'none', msOverflowStyle: 'none' }, onMouseDown: !isZoomed ? handleMouseDown : undefined, onMouseUp: !isZoomed ? handleMouseUp : undefined, onMouseMove: !isZoomed ? handleMouseMove : undefined, onMouseLeave: !isZoomed ? handleMouseLeave : undefined, children: [_jsx("style", { children: `
              .overflow-x-auto::-webkit-scrollbar {
                display: none;
              }
            ` }), _jsx("div", { className: "flex gap-[20px] w-max", children: caseStudies.map((study, index) => (_jsx(CaseStudyCard, { ...study, isZoomed: isZoomed, onNavigate: handleNavigateToSection }, index))) })] })] }) }) }));
}
