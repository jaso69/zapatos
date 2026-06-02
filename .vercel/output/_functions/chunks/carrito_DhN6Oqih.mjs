import { c as createComponent } from './astro-component_pxVsneAM.mjs';
import 'piccolore';
import { I as renderTemplate, u as maybeRenderHead } from './sequence_C3O65D5N.mjs';
import { r as renderComponent } from './entrypoint_BEZGWQoG.mjs';
import { $ as $$MainLayout, g as getTranslations, a as $$Header, b as $$Footer } from './Footer_GgtG1gMF.mjs';

const $$Carrito = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Carrito;
  const lang = Astro2.locals.lang || "es";
  const t = getTranslations(lang);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": `${t.cart.title} | ZAPATOS` }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="py-12 md:py-16"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> <h1 class="text-3xl font-heading font-bold text-[var(--color-text)] mb-8"> ${t.cart.title} </h1> <!-- Contenido del carrito (se conectará con React + nanostores) --> <div id="cart-container"> <div class="text-center py-16 text-[var(--color-text-secondary)]"> <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto mb-4 text-[var(--color-border)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1"> <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path> </svg> <p class="text-lg">${t.cart.empty}</p> <a href="/tienda" class="inline-block mt-4 text-brand-600 font-medium hover:underline"> ${t.cart.explore} </a> </div> </div> </div> </section>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer" })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header" })}` })}`;
}, "/home/jose/Escritorio/zapatos/frontend/src/pages/carrito.astro", void 0);

const $$file = "/home/jose/Escritorio/zapatos/frontend/src/pages/carrito.astro";
const $$url = "/carrito";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Carrito,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
