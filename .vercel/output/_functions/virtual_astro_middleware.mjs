import { d as defineMiddleware, s as sequence } from './chunks/sequence_DGgjSAjV.mjs';
import 'piccolore';
import 'clsx';

const validLanguages = ["es", "en", "de"];
const onRequest$1 = defineMiddleware(async (context, next) => {
  const langCookie = context.cookies.get("language")?.value;
  const langFromHeader = context.request.headers.get("accept-language")?.split(",")[0]?.split("-")[0];
  const pathLang = context.url.pathname.split("/")[1];
  let lang = "es";
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

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
