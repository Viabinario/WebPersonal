/**
 * Carga Google Tag Manager solo cuando el usuario ha dado su consentimiento.
 * Se inyecta el mismo snippet oficial de GTM en el head.
 */

export const GTM_CONTAINER_ID = 'GTM-WH95JPVX';

const GTM_SCRIPT_URL = 'https://www.googletagmanager.com/gtm.js';

export function loadGTM(containerId: string): void {
  if (typeof window === 'undefined' || !containerId.trim()) return;
  if (window.__GTM_LOADED__) return;

  (window as unknown as { dataLayer: unknown[] }).dataLayer = (window as unknown as { dataLayer?: unknown[] }).dataLayer ?? [];
  (window as unknown as { dataLayer: unknown[] }).dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js',
  });

  const script = document.createElement('script');
  script.async = true;
  script.src = `${GTM_SCRIPT_URL}?id=${containerId}`;
  const first = document.getElementsByTagName('script')[0];
  first?.parentNode?.insertBefore(script, first);

  (window as unknown as { __GTM_LOADED__?: boolean }).__GTM_LOADED__ = true;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    __GTM_LOADED__?: boolean;
  }
}
