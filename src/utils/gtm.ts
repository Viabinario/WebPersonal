/**
 * Carga Google Analytics (gtag.js) solo cuando el usuario ha dado su consentimiento.
 * Equivalente al snippet oficial "Google tag (gtag.js)" inyectado en el head.
 */

export const GA_MEASUREMENT_ID = 'G-NXG7HG7DRM';

const GTAG_SCRIPT_URL = 'https://www.googletagmanager.com/gtag/js';

export function loadGoogleAnalytics(measurementId: string): void {
  if (typeof window === 'undefined' || !measurementId.trim()) return;
  if (window.__GA_LOADED__) return;

  (window as unknown as { dataLayer: unknown[] }).dataLayer = (window as unknown as { dataLayer?: unknown[] }).dataLayer ?? [];

  const gtag = (...args: unknown[]) => {
    (window as unknown as { dataLayer: unknown[] }).dataLayer.push(args);
  };
  (window as unknown as { gtag: typeof gtag }).gtag = gtag;

  const script = document.createElement('script');
  script.async = true;
  script.src = `${GTAG_SCRIPT_URL}?id=${measurementId}`;
  const first = document.getElementsByTagName('script')[0];
  first?.parentNode?.insertBefore(script, first);

  gtag('js', new Date());
  gtag('config', measurementId);

  (window as unknown as { __GA_LOADED__?: boolean }).__GA_LOADED__ = true;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __GA_LOADED__?: boolean;
  }
}
