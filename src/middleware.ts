import { defineMiddleware } from 'astro:middleware';
import type { Language } from '../i18n';

const validLanguages: Language[] = ['es', 'en', 'de'];

export const onRequest = defineMiddleware(async (context, next) => {
  const langCookie = context.cookies.get('language')?.value as Language;
  const langFromHeader = context.request.headers.get('accept-language')?.split(',')[0]?.split('-')[0] as Language;
  const pathLang = context.url.pathname.split('/')[1] as Language;

  let lang: Language = 'es';

  if (langCookie && validLanguages.includes(langCookie)) {
    lang = langCookie;
  } else if (pathLang && validLanguages.includes(pathLang)) {
    lang = pathLang;
  } else if (langFromHeader && validLanguages.includes(langFromHeader)) {
    lang = langFromHeader;
  }

  context.locals.lang = lang;

  const response = await next();
  return response;
});