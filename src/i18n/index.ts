import { atom } from 'nanostores';
import { es } from './es';
import { en } from './en';
import { de } from './de';
import type { Translations } from './es';

export type Language = 'es' | 'en' | 'de';

const translations: Record<Language, Translations> = {
  es,
  en,
  de,
};

const languageNames: Record<Language, string> = {
  es: 'Español',
  en: 'English',
  de: 'Deutsch',
};

function loadLanguage(): Language {
  if (typeof window === 'undefined') return 'es';
  const stored = localStorage.getItem('language') as Language;
  if (stored && translations[stored]) return stored;
  const browserLang = navigator.language.split('-')[0] as Language;
  if (translations[browserLang]) return browserLang;
  return 'es';
}

export const $language = atom<Language>(loadLanguage());

export function setLanguage(lang: Language) {
  $language.set(lang);
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  }
}

export function getTranslations(lang: Language): Translations {
  return translations[lang];
}

export function getLanguageName(lang: Language): string {
  return languageNames[lang];
}

export function getAllLanguages(): Language[] {
  return ['es', 'en', 'de'];
}

export { translations };