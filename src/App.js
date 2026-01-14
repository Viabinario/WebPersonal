import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { NavigationGrid, ZoomGridButton } from './components/NavigationComponents';
import { PresentacionSection } from './components/PresentacionSection';
import { SobreMiSection } from './components/SobreMiSection';
import { ContactoSection } from './components/ContactoSection';
import { CasosEstudioSection } from './components/CasosEstudioSection';
import imgProfilePhoto from "./assets/037303b6b1de60b5b46c711eb2f0e126520f42b0.png";
// Canvas dimensions (desktop)
const CANVAS_WIDTH = 2560;
const CANVAS_HEIGHT = 1664;
const SECTION_WIDTH = 1280;
const SECTION_HEIGHT = 832;
const sectionPositions = {
    'presentacion': { x: 0, y: 0 },
    'sobre-mi': { x: -SECTION_WIDTH, y: 0 },
    'casos-estudio': { x: 0, y: -SECTION_HEIGHT },
    'contacto': { x: -SECTION_WIDTH, y: -SECTION_HEIGHT },
};
export default function App() {
    const [activeSection, setActiveSection] = useState('presentacion');
    const [isZoomed, setIsZoomed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    const handleNavigate = (section) => {
        setActiveSection(section);
        setIsZoomed(false);
    };
    const handleToggleZoom = () => {
        setIsZoomed(!isZoomed);
    };
    const getCanvasTransform = () => {
        if (isMobile) {
            // Mobile: no transform, sections stack vertically
            return {
                transform: 'none',
                transformOrigin: '0 0',
            };
        }
        if (isZoomed) {
            // Show entire canvas - scale down to fit in viewport
            const scaleX = window.innerWidth / CANVAS_WIDTH;
            const scaleY = window.innerHeight / CANVAS_HEIGHT;
            const scale = Math.min(scaleX, scaleY) * 0.9; // 90% to add some padding
            // Center the scaled canvas
            const translateX = (window.innerWidth - CANVAS_WIDTH * scale) / 2;
            const translateY = (window.innerHeight - CANVAS_HEIGHT * scale) / 2;
            return {
                transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
                transformOrigin: '0 0',
            };
        }
        else {
            // Show active section
            const position = sectionPositions[activeSection];
            return {
                transform: `translate(${position.x}px, ${position.y}px)`,
                transformOrigin: '0 0',
            };
        }
    };
    // Calculate Profile_Photo position based on active section
    const getProfilePhotoPosition = () => {
        if (isMobile) {
            // Mobile: hide profile photo or position differently
            return {
                display: 'none',
            };
        }
        if (isZoomed || activeSection === 'presentacion') {
            return {
                left: `${SECTION_WIDTH / 2}px`,
                top: '30px',
                transform: 'translateX(-50%)',
            };
        }
        else if (activeSection === 'sobre-mi') {
            return {
                left: `${CANVAS_WIDTH - SECTION_WIDTH + 650}px`,
                top: '38px',
                transform: 'translateX(0)',
            };
        }
        else {
            return {
                left: `${SECTION_WIDTH / 2}px`,
                top: '30px',
                transform: 'translateX(-50%)',
                opacity: '0',
                pointerEvents: 'none',
            };
        }
    };
    const handleProfilePhotoClick = () => {
        if (isZoomed) {
            handleNavigate('presentacion');
        }
    };
    // Mobile layout: stacked sections
    if (isMobile) {
        return (_jsxs("div", { className: "w-full min-h-screen bg-[#f7f2ed]", children: [_jsx("div", { className: "sticky top-0 z-50 bg-[#f7f2ed] border-b-2 border-[#5a3e26] border-dashed", children: _jsx(NavigationGrid, { activeSection: activeSection, onNavigate: handleNavigate }) }), _jsxs("div", { className: "w-full", children: [activeSection === 'presentacion' && (_jsx("div", { className: "w-full min-h-screen", children: _jsx(PresentacionSection, { isZoomed: false, onNavigate: handleNavigate, activeSection: activeSection }) })), activeSection === 'sobre-mi' && (_jsx("div", { className: "w-full min-h-screen", children: _jsx(SobreMiSection, { isZoomed: false, onNavigate: handleNavigate, activeSection: activeSection }) })), activeSection === 'casos-estudio' && (_jsx("div", { className: "w-full min-h-screen", children: _jsx(CasosEstudioSection, { isZoomed: false, onNavigate: handleNavigate }) })), activeSection === 'contacto' && (_jsx("div", { className: "w-full min-h-screen", children: _jsx(ContactoSection, { isZoomed: false, onNavigate: handleNavigate }) }))] })] }));
    }
    // Desktop layout: original canvas design
    return (_jsxs("div", { className: "w-screen h-screen overflow-hidden bg-[#f7f2ed] relative", children: [_jsx(NavigationGrid, { activeSection: activeSection, onNavigate: handleNavigate }), _jsx(ZoomGridButton, { isZoomed: isZoomed, onToggleZoom: handleToggleZoom }), _jsx("div", { className: "absolute top-0 left-0 transition-transform duration-700 ease-in-out", style: getCanvasTransform(), children: _jsxs("div", { className: "w-[2560px] h-[1664px] grid grid-cols-2 grid-rows-2 relative", children: [_jsx("div", { className: "w-[1280px] h-[832px]", children: _jsx(PresentacionSection, { isZoomed: isZoomed, onNavigate: handleNavigate, activeSection: activeSection }) }), _jsx("div", { className: "w-[1280px] h-[832px]", children: _jsx(SobreMiSection, { isZoomed: isZoomed, onNavigate: handleNavigate, activeSection: activeSection }) }), _jsx("div", { className: "w-[1280px] h-[832px]", children: _jsx(CasosEstudioSection, { isZoomed: isZoomed, onNavigate: handleNavigate }) }), _jsx("div", { className: "w-[1280px] h-[832px]", children: _jsx(ContactoSection, { isZoomed: isZoomed, onNavigate: handleNavigate }) }), _jsx("div", { className: `absolute w-[184px] h-[184px] rounded-[22px] border-2 border-[#5a3e26] border-dashed overflow-hidden transition-all duration-700 ease-in-out z-10 ${isZoomed ? 'cursor-pointer hover:scale-105' : ''}`, style: getProfilePhotoPosition(), onClick: handleProfilePhotoClick, children: _jsx("img", { src: imgProfilePhoto, alt: "Profile", className: "w-full h-full object-cover" }) })] }) })] }));
}
