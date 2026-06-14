import { useState, useEffect } from 'react';
import { $language, setLanguage, getLanguageName, getAllLanguages, type Language } from '../../i18n';

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<Language>('es');

  useEffect(() => {
    const stored = localStorage.getItem('language') as Language;
    if (stored && ['es', 'en', 'de'].includes(stored)) {
      setCurrentLang(stored);
    }
  }, []);

  const handleSelect = (lang: Language) => {
    setLanguage(lang);
    setCurrentLang(lang);
    setIsOpen(false);

    document.cookie = `language=${lang}; path=/; max-age=31536000`;
    window.location.reload();
  };

  const languages = getAllLanguages();

  return (
    <div className="relative">
<button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Cambiar idioma"
        aria-expanded={isOpen}
        className="flex items-center gap-1 p-2 min-w-[44px] min-h-[44px] text-[var(--color-text-secondary)] hover:text-brand-600 transition-colors rounded-full hover:bg-[var(--color-surface)]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
        <span className="text-xs font-medium uppercase">{currentLang}</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-1 py-1 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg shadow-lg z-50 min-w-[140px]">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => handleSelect(lang)}
                aria-label={`Cambiar a ${getLanguageName(lang)}`}
                className={`w-full px-4 py-2 text-left text-sm hover:bg-[var(--color-surface)] transition-colors flex items-center gap-3 ${
                  lang === currentLang ? 'text-brand-600 font-medium' : 'text-[var(--color-text)]'
                }`}
              >
                <span className="w-6 text-center text-xs font-bold text-[var(--color-text-secondary)]">{lang.toUpperCase()}</span>
                <span>{getLanguageName(lang)}</span>
                {lang === currentLang && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}