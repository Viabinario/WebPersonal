import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

const STORAGE_KEY = 'web-personal-locale';

export type Locale = 'es' | 'en';

function loadStoredLocale(): Locale {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === 'es' || v === 'en') return v;
  } catch (_) {}
  return 'es';
}

interface LocaleContextValue {
  locale: Locale;
  setLocale: (next: Locale) => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(loadStoredLocale);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (_) {}
  }, []);

  const value = useMemo(() => ({ locale, setLocale }), [locale, setLocale]);

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider');
  return ctx;
}

/** Switch ES | EN para colocar en la esquina superior derecha del cuadro de texto. Detiene propagación para no activar clics del cuadro. */
export function LangSwitch() {
  const { locale, setLocale } = useLocale();

  const handleClick = (e: React.MouseEvent, next: Locale) => {
    e.stopPropagation();
    e.preventDefault();
    setLocale(next);
  };

  return (
    <div
      className="absolute top-2 right-2 z-10 flex items-center gap-0 rounded-md border border-[#5a3e26]/30 bg-[#f7f2ed]/95 px-0.5 py-0.5 shadow-sm"
      role="group"
      aria-label="Idioma del cuadro"
    >
      <button
        type="button"
        onClick={(e) => handleClick(e, 'es')}
        className={`min-w-[28px] rounded px-1.5 py-1 text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5a3e26] focus-visible:ring-offset-1 ${locale === 'es' ? 'bg-[#5a3e26] text-white' : 'text-[#5a3e26] hover:bg-[#e8d8c9]'}`}
        aria-pressed={locale === 'es'}
        aria-label="Español"
      >
        ES
      </button>
      <button
        type="button"
        onClick={(e) => handleClick(e, 'en')}
        className={`min-w-[28px] rounded px-1.5 py-1 text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5a3e26] focus-visible:ring-offset-1 ${locale === 'en' ? 'bg-[#5a3e26] text-white' : 'text-[#5a3e26] hover:bg-[#e8d8c9]'}`}
        aria-pressed={locale === 'en'}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
