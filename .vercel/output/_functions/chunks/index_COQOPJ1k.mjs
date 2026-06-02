import { c as createComponent } from './astro-component_pxVsneAM.mjs';
import 'piccolore';
import { I as renderTemplate, u as maybeRenderHead, _ as addAttribute } from './sequence_C3O65D5N.mjs';
import { r as renderComponent } from './entrypoint_BEZGWQoG.mjs';
import { $ as $$MainLayout, g as getTranslations, a as $$Header, b as $$Footer } from './Footer_GgtG1gMF.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const lang = Astro2.locals.lang || "es";
  const t = getTranslations(lang);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": `${t.shop.title} | ZAPATOS` }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="py-12 md:py-16"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h1 class="text-3xl md:text-4xl font-heading font-bold text-[var(--color-text)]"> ${t.shop.title} </h1> <p class="mt-4 text-[var(--color-text-secondary)]">${t.shop.subtitle}</p> </div> <!-- Filtros (placeholder) --> <div class="flex flex-wrap gap-3 mb-8 justify-center"> <button class="px-4 py-2 bg-brand-600 text-white text-sm rounded-full font-medium"> ${t.shop.filterAll} </button> <button class="px-4 py-2 bg-[var(--color-surface)] text-[var(--color-text-secondary)] text-sm rounded-full font-medium hover:bg-[var(--color-border)] transition-colors"> ${t.shop.filterCasual} </button> <button class="px-4 py-2 bg-[var(--color-surface)] text-[var(--color-text-secondary)] text-sm rounded-full font-medium hover:bg-[var(--color-border)] transition-colors"> ${t.shop.filterFormal} </button> <button class="px-4 py-2 bg-[var(--color-surface)] text-[var(--color-text-secondary)] text-sm rounded-full font-medium hover:bg-[var(--color-border)] transition-colors"> ${t.shop.filterSport} </button> </div> <!-- Grid de productos (placeholder) --> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"> ${[1, 2, 3, 4, 5, 6, 7, 8].map((i) => renderTemplate`<a${addAttribute(`/tienda/producto-${i}`, "href")} class="group"> <div class="aspect-square bg-[var(--color-surface)] rounded-lg overflow-hidden mb-3"> <div class="w-full h-full flex items-center justify-center text-[var(--color-text-secondary)] group-hover:scale-105 transition-transform duration-300"> <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1"> <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> </div> </div> <h3 class="font-medium text-[var(--color-text)] group-hover:text-brand-600 transition-colors"> ${t.shop.productModel} ${i} </h3> <p class="text-sm text-[var(--color-text-secondary)] mt-1">${t.shop.category}</p> <p class="text-brand-600 font-semibold mt-1">89,99${t.common.price}</p> </a>`)} </div> </div> </section>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer" })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header" })}` })}`;
}, "/home/jose/Escritorio/zapatos/frontend/src/pages/tienda/index.astro", void 0);

const $$file = "/home/jose/Escritorio/zapatos/frontend/src/pages/tienda/index.astro";
const $$url = "/tienda";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
