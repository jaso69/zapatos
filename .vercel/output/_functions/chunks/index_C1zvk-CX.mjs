import { c as createComponent } from './astro-component_pxVsneAM.mjs';
import 'piccolore';
import { I as renderTemplate, u as maybeRenderHead, _ as addAttribute } from './sequence_C3O65D5N.mjs';
import { r as renderComponent } from './entrypoint_BEZGWQoG.mjs';
import { $ as $$MainLayout, a as $$Header, b as $$Footer, g as getTranslations } from './Footer_GgtG1gMF.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';

const images = [
  "/carrousel/z1.webp",
  "/carrousel/z2.webp",
  "/carrousel/z3.webp",
  "/carrousel/z4.webp",
  "/carrousel/z5.webp",
  "/carrousel/z6.webp",
  "/carrousel/z7.webp",
  "/carrousel/z8.webp",
  "/carrousel/z9.webp"
];
function Carousel() {
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef(null);
  useEffect(() => {
    if (!isPaused && !isHovering) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % images.length);
      }, 3e3);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, isHovering]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "relative w-full overflow-hidden bg-gradient-to-b from-[var(--color-surface)] to-[var(--color-bg)]",
      onMouseEnter: () => {
        setIsPaused(true);
        setIsHovering(true);
      },
      onMouseLeave: () => {
        setIsPaused(false);
        setIsHovering(false);
      },
      children: [
        /* @__PURE__ */ jsx("style", { children: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .carousel-track {
          animation: scroll 40s linear infinite;
        }
        .carousel-track:hover {
          animation-play-state: paused;
        }
        .carousel-item {
          transition: transform 0.5s ease, opacity 0.5s ease;
        }
        .carousel-item:hover {
          transform: scale(1.02);
        }
      ` }),
        /* @__PURE__ */ jsx("div", { className: "flex carousel-track", style: { width: "max-content" }, children: [...images, ...images].map((src, i) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "carousel-item flex-shrink-0 h-56 sm:h-64 md:h-80 lg:h-[26rem] w-auto px-2 md:px-3",
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src,
                alt: "",
                className: "h-full w-auto object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300",
                style: { width: "auto" }
              }
            )
          },
          i
        )) }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-2 py-4", children: images.map((_, i) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setActiveIndex(i),
            className: `w-2 h-2 rounded-full transition-all duration-300 ${i === activeIndex ? "bg-brand-600 w-6" : "bg-[var(--color-text-secondary)]/30 hover:bg-[var(--color-text-secondary)]/50"}`,
            "aria-label": `Ir a imagen ${i + 1}`
          },
          i
        )) }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 bottom-0 w-12 bg-gradient-to-r from-[var(--color-bg)] to-transparent pointer-events-none z-10" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-[var(--color-bg)] to-transparent pointer-events-none z-10" })
      ]
    }
  );
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const lang = Astro2.locals.lang || "es";
  const t = getTranslations(lang);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Sanvin | Calzado de Diseño" }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<section class="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden"> <!-- Background image --> <div class="absolute inset-0 z-0 bg-[var(--color-bg)]"> <div class="w-full h-full bg-cover bg-center opacity-20 dark:opacity-10" style="background-image: url('/backend-img.webp'); filter: blur(2px) saturate(0.8); opacity: 0.4;"></div> <div class="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)]/50 via-[var(--color-bg)]/70 to-[var(--color-bg)]"></div> </div> <!-- Contenido hero --> <div class="relative z-10 text-center px-4 pt-8 pb-12 md:pt-12 md:pb-16 max-w-4xl mx-auto"> <h1 class="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[var(--color-text)] leading-tight"> ${t.hero.title} </h1> <p class="mt-6 text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto"> ${t.hero.subtitle} </p> <!-- Botones CTA --> <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center"> <a href="/tienda" class="inline-flex items-center justify-center px-8 py-4 bg-brand-600 text-white font-medium text-sm uppercase tracking-wider rounded hover:bg-brand-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"> <span>${t.hero.ctaCollection}</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> <a href="/nosotros" class="inline-flex items-center justify-center px-8 py-4 border-2 border-[var(--color-text)] text-[var(--color-text)] font-medium text-sm uppercase tracking-wider rounded hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-all duration-300"> ${t.hero.ctaStory} </a> </div> </div> <!-- Indicador scroll --> <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[var(--color-text-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path> </svg> </div> </section> <div class="h-6 bg-[var(--color-bg)]"></div>  <section class="relative w-full overflow-hidden"> ${renderComponent($$result2, "Carousel", Carousel, {})} </section> <div class="h-8 bg-[var(--color-bg)]"></div>  <section class="py-16 md:py-24 bg-[var(--color-bg)] border-t border-b border-[var(--color-border)] animate-on-scroll"> <div class="max-w-3xl mx-auto px-4 text-center"> <div class="w-20 h-1 bg-brand-600 mx-auto rounded-full"></div> <p class="mt-8 text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed"> ${t.homepage.brandText1} </p> <p class="mt-6 text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed"> ${t.homepage.brandText2} </p> </div> </section> <div class="h-8 bg-[var(--color-bg)]"></div> <div class="h-8 bg-[var(--color-bg)]"></div>  <section class="py-16 md:py-24 animate-on-scroll"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-heading font-bold text-[var(--color-text)]"> ${t.featured.title} </h2> <p class="mt-4 text-[var(--color-text-secondary)]">${t.featured.subtitle}</p> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> ${[1, 2, 3].map((i) => renderTemplate`<div class="group"> <div class="aspect-square bg-[var(--color-surface)] rounded-lg overflow-hidden mb-4"> <div class="w-full h-full flex items-center justify-center text-[var(--color-text-secondary)]"> <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1"> <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> </div> </div> <h3 class="font-heading font-semibold text-lg text-[var(--color-text)] group-hover:text-brand-600 transition-colors"> ${t.shop.productModel} ${i} </h3> <p class="mt-1 text-brand-600 font-medium">89,99${t.common.price}</p> </div>`)} </div> <div class="text-center mt-12"> <a href="/tienda" class="inline-block px-8 py-3 border border-brand-600 text-brand-600 font-medium text-sm uppercase tracking-wider rounded hover:bg-brand-600 hover:text-white transition-colors"> ${t.featured.cta} </a> </div> </div> </section>  <section class="py-16 md:py-24 bg-[var(--color-bg)] border-t border-b border-[var(--color-border)] animate-on-scroll"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-heading font-bold text-[var(--color-text)]"> ${t.homepage.craftTitle} </h2> <div class="w-20 h-1 bg-brand-600 mx-auto mt-4 rounded-full"></div> <p class="mt-6 text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed"> ${t.homepage.craftSubtitle} </p> </div> <div class="max-w-3xl mx-auto"> <p class="text-lg font-medium text-[var(--color-text)] mb-4"> ${t.homepage.craftFeaturesTitle} </p> <ul class="space-y-2"> ${t.homepage.craftFeaturesList.map((feature) => renderTemplate`<li class="flex items-start gap-3 text-[var(--color-text-secondary)]"> <span class="text-brand-600 mt-1">·</span> <span>${feature}</span> </li>`)} </ul> <p class="mt-8 text-lg text-[var(--color-text-secondary)] leading-relaxed"> ${t.homepage.craftClosing} </p> </div> </div> </section> <div class="h-8 bg-[var(--color-bg)]"></div>  <section class="py-16 md:py-24 bg-[var(--color-bg)] animate-on-scroll"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-heading font-bold text-[var(--color-text)]">
Lo que dicen nuestros clientes
</h2> <div class="w-20 h-1 bg-brand-600 mx-auto mt-4 rounded-full"></div> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <div class="bg-[var(--color-surface)] rounded-lg p-8 text-center"> <div class="flex justify-center gap-1 mb-4"> ${[1, 2, 3, 4, 5].map(() => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-brand-500" viewBox="0 0 20 20" fill="currentColor"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg>`)} </div> <p class="text-[var(--color-text-secondary)] italic mb-6">"La calidad de los materiales es excepcional. Llevo mis Sanvin cada día a la oficina y siguen impecables después de meses de uso intensivo."</p> <div class="flex items-center justify-center gap-3"> <div class="w-10 h-10 rounded-full bg-brand-200 flex items-center justify-center text-brand-700 font-semibold">CR</div> <div class="text-left"> <p class="font-semibold text-[var(--color-text)]">Carlos Ruiz</p> <p class="text-sm text-[var(--color-text-secondary)]">Madrid</p> </div> </div> </div> <div class="bg-[var(--color-surface)] rounded-lg p-8 text-center"> <div class="flex justify-center gap-1 mb-4"> ${[1, 2, 3, 4, 5].map(() => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-brand-500" viewBox="0 0 20 20" fill="currentColor"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg>`)} </div> <p class="text-[var(--color-text-secondary)] italic mb-6">"Compré unos Oxford para mi boda y no dejé de recibir cumplidos. El servicio de personalización fue impecable."</p> <div class="flex items-center justify-center gap-3"> <div class="w-10 h-10 rounded-full bg-brand-200 flex items-center justify-center text-brand-700 font-semibold">JL</div> <div class="text-left"> <p class="font-semibold text-[var(--color-text)]">Javier López</p> <p class="text-sm text-[var(--color-text-secondary)]">Barcelona</p> </div> </div> </div> <div class="bg-[var(--color-surface)] rounded-lg p-8 text-center"> <div class="flex justify-center gap-1 mb-4"> ${[1, 2, 3, 4, 5].map(() => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-brand-500" viewBox="0 0 20 20" fill="currentColor"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg>`)} </div> <p class="text-[var(--color-text-secondary)] italic mb-6">"Por fin encontré zapatos cómodos desde el primer día. El proceso de compra fue excelente y el envío muy rápido."</p> <div class="flex items-center justify-center gap-3"> <div class="w-10 h-10 rounded-full bg-brand-200 flex items-center justify-center text-brand-700 font-semibold">RM</div> <div class="text-left"> <p class="font-semibold text-[var(--color-text)]">Roberto Martínez</p> <p class="text-sm text-[var(--color-text-secondary)]">Valencia</p> </div> </div> </div> </div> </div> </section>  <section class="py-16 md:py-20 bg-[var(--color-surface)] border-t border-[var(--color-border)] animate-on-scroll"> <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 class="text-2xl md:text-3xl font-heading font-bold text-[var(--color-text)]"> ${t.homepage.newsletterTitle} </h2> <p class="mt-4 text-[var(--color-text-secondary)]"> ${t.homepage.newsletterSubtitle} </p> <form class="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"${addAttribute(`event.preventDefault(); alert('${t.homepage.newsletterSuccess}');`, "onsubmit")}> <input type="email"${addAttribute(t.homepage.newsletterPlaceholder, "placeholder")} required class="flex-1 px-4 py-3 rounded border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent"> <button type="submit" class="px-6 py-3 bg-brand-600 text-white font-medium text-sm uppercase tracking-wider rounded hover:bg-brand-700 transition-colors"> ${t.homepage.newsletterButton} </button> </form> </div> </section> <div class="h-8 bg-[var(--color-bg)]"></div>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer" })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header" })}` })}`;
}, "/home/jose/Escritorio/zapatos/frontend/src/pages/index.astro", void 0);

const $$file = "/home/jose/Escritorio/zapatos/frontend/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
