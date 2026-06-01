import { translations, type Language } from './index';
import type { Translations } from './es';

export function getTranslations(lang: Language): Translations {
  return translations[lang];
}

export function t(key: string, lang: Language): string {
  const trans = translations[lang];
  const keys = key.split('.');
  let value: any = trans;
  for (const k of keys) {
    value = value?.[k];
  }
  return typeof value === 'string' ? value : key;
}