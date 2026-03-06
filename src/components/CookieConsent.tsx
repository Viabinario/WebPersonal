import { useState, useEffect } from 'react';

const STORAGE_KEY = 'cookie-consent';

export type ConsentStatus = 'accepted' | 'rejected' | null;

export function getStoredConsent(): ConsentStatus {
  if (typeof window === 'undefined') return null;
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === 'accepted' || v === 'rejected') return v;
  } catch {
    // ignore
  }
  return null;
}

function setStoredConsent(value: 'accepted' | 'rejected'): void {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // ignore
  }
}

interface CookieConsentProps {
  /** Llamado cuando el usuario acepta (ya se guarda en localStorage aquí). Usar para cargar GTM. */
  onAccept?: () => void;
  /** Llamado cuando el usuario rechaza (ya se guarda en localStorage aquí). */
  onReject?: () => void;
}

/**
 * Banner de consentimiento de cookies. Solo se muestra si no hay decisión previa guardada.
 * Al aceptar se guarda en localStorage y se notifica al padre (p. ej. para cargar GTM).
 */
export function CookieConsent({ onAccept, onReject }: CookieConsentProps) {
  const [visible, setVisible] = useState<boolean | null>(null);

  useEffect(() => {
    setVisible(getStoredConsent() === null);
  }, []);

  const handleAccept = () => {
    setStoredConsent('accepted');
    setVisible(false);
    onAccept?.();
  };

  const handleReject = () => {
    setStoredConsent('rejected');
    setVisible(false);
    onReject?.();
  };

  if (visible !== true) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentimiento de cookies"
      className="fixed bottom-0 left-0 right-0 z-[100] px-4 py-4 md:px-6 md:py-5 bg-[#f7f2ed]/70 border-t-2 border-[#5a3e26] border-dashed shadow-[0_-4px_20px_rgba(90,62,38,0.12)]"
    >
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="font-['Roboto',sans-serif] text-[#5a3e26] text-sm md:text-base leading-relaxed">
          Utilizamos cookies y herramientas similares (p. ej. Google Tag Manager) para analizar el uso del sitio y mejorar tu experiencia. Puedes aceptar o rechazar el uso de cookies analíticas.
        </p>
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handleAccept}
            className="px-4 py-2.5 rounded-xl border-2 border-[#5a3e26] border-solid bg-[#5a3e26] text-white font-['Roboto',sans-serif] text-sm font-medium hover:bg-[#6a4e36] transition-colors"
          >
            Aceptar
          </button>
          <button
            type="button"
            onClick={handleReject}
            className="px-4 py-2.5 rounded-xl border-2 border-[#5a3e26] border-dashed bg-transparent text-[#5a3e26] font-['Roboto',sans-serif] text-sm font-medium hover:bg-[#e8d8c9] transition-colors"
          >
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
}
