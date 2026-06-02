import { c as createComponent } from './astro-component_pxVsneAM.mjs';
import 'piccolore';
import { I as renderTemplate, u as maybeRenderHead } from './sequence_C3O65D5N.mjs';
import { r as renderComponent } from './entrypoint_D-24BTfx.mjs';
import { $ as $$MainLayout, g as getTranslations, a as $$Header, b as $$Footer } from './Footer_VH53ZxJN.mjs';

const $$Checkout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Checkout;
  const lang = Astro2.locals.lang || "es";
  const t = getTranslations(lang);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": `${t.checkout.title} | ZAPATOS` }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="py-12 md:py-16"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> <h1 class="text-3xl font-heading font-bold text-[var(--color-text)] mb-8"> ${t.checkout.title} </h1> <!-- Checkout form (se conectará con React + Stripe/PayPal) --> <div id="checkout-container"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12"> <!-- Datos de envío --> <div> <h2 class="text-xl font-heading font-semibold mb-6 text-[var(--color-text)]">${t.checkout.shippingTitle}</h2> <form class="space-y-4"> <div> <label class="block text-sm font-medium text-[var(--color-text)] mb-1">${t.checkout.shippingName}</label> <input type="text" class="w-full px-4 py-2 border border-[var(--color-border)] rounded bg-[var(--color-bg)] text-[var(--color-text)] focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"> </div> <div> <label class="block text-sm font-medium text-[var(--color-text)] mb-1">${t.checkout.shippingEmail}</label> <input type="email" class="w-full px-4 py-2 border border-[var(--color-border)] rounded bg-[var(--color-bg)] text-[var(--color-text)] focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"> </div> <div> <label class="block text-sm font-medium text-[var(--color-text)] mb-1">${t.checkout.shippingAddress}</label> <input type="text" class="w-full px-4 py-2 border border-[var(--color-border)] rounded bg-[var(--color-bg)] text-[var(--color-text)] focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"> </div> <div class="grid grid-cols-2 gap-4"> <div> <label class="block text-sm font-medium text-[var(--color-text)] mb-1">${t.checkout.shippingCity}</label> <input type="text" class="w-full px-4 py-2 border border-[var(--color-border)] rounded bg-[var(--color-bg)] text-[var(--color-text)] focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"> </div> <div> <label class="block text-sm font-medium text-[var(--color-text)] mb-1">${t.checkout.shippingPostal}</label> <input type="text" class="w-full px-4 py-2 border border-[var(--color-border)] rounded bg-[var(--color-bg)] text-[var(--color-text)] focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"> </div> </div> </form> <!-- Método de pago --> <h2 class="text-xl font-heading font-semibold mt-8 mb-6 text-[var(--color-text)]">${t.checkout.paymentTitle}</h2> <div class="space-y-3"> <label class="flex items-center gap-3 p-4 border border-[var(--color-border)] rounded cursor-pointer hover:border-brand-600 transition-colors"> <input type="radio" name="payment" value="stripe" checked class="text-brand-600"> <span class="font-medium text-[var(--color-text)]">${t.checkout.paymentCard}</span> <span class="text-xs text-[var(--color-text-secondary)] ml-auto">Stripe</span> </label> <label class="flex items-center gap-3 p-4 border border-[var(--color-border)] rounded cursor-pointer hover:border-brand-600 transition-colors"> <input type="radio" name="payment" value="paypal" class="text-brand-600"> <span class="font-medium text-[var(--color-text)]">${t.checkout.paymentPaypal}</span> </label> </div> </div> <!-- Resumen del pedido --> <div> <h2 class="text-xl font-heading font-semibold mb-6 text-[var(--color-text)]">${t.checkout.orderSummary}</h2> <div class="bg-[var(--color-surface)] rounded-lg p-6"> <p class="text-[var(--color-text-secondary)] text-center py-8">
El resumen se cargará con los datos del carrito
</p> <div class="border-t border-[var(--color-border)] pt-4 mt-4"> <div class="flex justify-between font-semibold text-lg text-[var(--color-text)]"> <span>${t.checkout.orderTotal}</span> <span>0,00${t.common.price}</span> </div> </div> <button class="mt-6 w-full py-3 bg-brand-600 text-white font-medium text-sm uppercase tracking-wider rounded hover:bg-brand-700 transition-colors"> ${t.checkout.confirmOrder} </button> </div> </div> </div> </div> </div> </section>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer" })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header" })}` })}`;
}, "/home/jose/Escritorio/zapatos/frontend/src/pages/checkout.astro", void 0);

const $$file = "/home/jose/Escritorio/zapatos/frontend/src/pages/checkout.astro";
const $$url = "/checkout";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Checkout,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
