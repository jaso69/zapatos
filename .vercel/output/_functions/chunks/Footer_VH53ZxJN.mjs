import { c as createComponent } from './astro-component_pxVsneAM.mjs';
import 'piccolore';
import { J as createRenderInstruction, I as renderTemplate, bh as renderSlot, bi as renderHead, _ as addAttribute, u as maybeRenderHead } from './sequence_C3O65D5N.mjs';
import 'clsx';
import { r as renderComponent } from './entrypoint_D-24BTfx.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { atom } from 'nanostores';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const es = {
  nav: {
    home: "Inicio",
    shop: "Tienda",
    about: "Nosotros",
    contact: "Contacto"
  },
  hero: {
    title: "Zapatos artesanales hechos a mano en España",
    subtitle: "Calzado a medida que combina tradición, comodidad y elegancia atemporal.",
    ctaCollection: "Ver colección",
    ctaStory: "Nuestra historia"
  },
  featured: {
    title: "Destacados",
    subtitle: "Los favoritos de nuestros clientes",
    cta: "Ver toda la colección"
  },
  brand: {
    title: "Artesanía en cada paso",
    description1: "Más que una marca de zapatos, Sanvin representa un regreso a lo auténtico. Un compromiso con la artesanía española, la calidad duradera y el respeto por el cliente.",
    description2: "Porque sabemos que cuando inviertes en unos buenos zapatos, no estás comprando solo calzado: estás invirtiendo en comodidad diaria, imagen personal y piezas que perduran en el tiempo.",
    description3: "Descubre la diferencia de llevar zapatos hechos a mano en España."
  },
  shop: {
    title: "Nuestra Colección",
    subtitle: "Encuentra el par perfecto para ti",
    filterAll: "Todos",
    filterCasual: "Casual",
    filterFormal: "Formal",
    filterSport: "Deportivo",
    productModel: "Zapato Modelo",
    category: "Categoría",
    addToCart: "Añadir al carrito",
    freeShipping: "Envío gratuito",
    freeShippingCondition: "En pedidos +50€",
    returns: "Devoluciones",
    returnsDays: "30 días"
  },
  product: {
    size: "Talla",
    color: "Color",
    outOfStock: "Agotado"
  },
  cart: {
    title: "Tu carrito",
    empty: "Tu carrito está vacío",
    explore: "Explorar la tienda",
    checkout: "Finalizar compra",
    total: "Total",
    continueShopping: "Seguir comprando"
  },
  checkout: {
    title: "Finalizar compra",
    shippingTitle: "Datos de envío",
    shippingName: "Nombre completo",
    shippingEmail: "Email",
    shippingAddress: "Dirección",
    shippingCity: "Ciudad",
    shippingPostal: "Código postal",
    paymentTitle: "Método de pago",
    paymentCard: "Tarjeta de crédito/débito",
    paymentPaypal: "PayPal",
    orderSummary: "Resumen del pedido",
    orderTotal: "Total",
    confirmOrder: "Confirmar pedido"
  },
  about: {
    title: "Nuestra historia",
    subtitle: "Más que zapatos, creamos experiencias para cada paso de tu vida",
    traditionTitle: "Tradición y modernidad",
    traditionText1: "Fundada con la pasión por el calzado artesanal, nuestra marca nació del deseo de combinar técnicas tradicionales con diseño contemporáneo.",
    traditionText2: "Cada par de zapatos que creamos pasa por un meticuloso proceso de selección de materiales y confección manual, garantizando la más alta calidad en cada detalle.",
    qualityTitle: "Calidad Premium",
    qualityText: "Materiales seleccionados de los mejores proveedores para garantizar durabilidad y confort.",
    designTitle: "Diseño Artesanal",
    designText: "Cada par es elaborado con atención al detalle, combinando técnicas tradicionales con tendencias actuales.",
    sustainTitle: "Sostenibilidad",
    sustainText: "Comprometidos con prácticas responsables y producción sostenible para un futuro mejor."
  },
  contact: {
    title: "Contacto",
    subtitle: "¿Tienes alguna pregunta? Estamos aquí para ayudarte",
    formTitle: "Envíanos un mensaje",
    formName: "Nombre",
    formEmail: "Email",
    formSubject: "Asunto",
    formMessage: "Mensaje",
    formPlaceholderName: "Tu nombre",
    formPlaceholderEmail: "tu@email.com",
    formPlaceholderSubject: "¿En qué podemos ayudarte?",
    formPlaceholderMessage: "Escribe tu mensaje aquí...",
    formSubmit: "Enviar mensaje",
    infoTitle: "Información",
    address: "Dirección",
    addressValue: "Madrid, España",
    email: "Email",
    emailValue: "info@sanvinshoemakers.com",
    phone: "Teléfono",
    phoneValue: "+34 634 304 435",
    hours: "Horario",
    hoursWeekday: "Lunes a Viernes: 10:00 - 20:00",
    hoursSaturday: "Sábados: 10:00 - 14:00"
  },
  footer: {
    brandTagline: "Calzado de diseño con materiales de primera calidad. Cada par cuenta una historia.",
    navigation: "Navegación",
    copyright: "Todos los derechos reservados."
  },
  homepage: {
    brandText1: "Sanvin Shoemakers es una marca española especializada en la creación de zapatos artesanales hechos a mano. Nacida de la pasión por el calzado tradicional, cada par se confecciona con dedicación y maestría por artesanos con décadas de experiencia.",
    brandText2: "Utilizamos únicamente pieles de alta calidad de curtidores europeos y técnicas centenarias que garantizan durabilidad, confort y una elegancia atemporal. En Sanvin no fabricamos zapatos en serie: creamos calzado que se adapta a tu pie y a tu estilo de vida.",
    craftTitle: "Calzado Artesanal con Alma Española",
    craftSubtitle: "En Sanvin creemos que un buen zapato debe ser mucho más que bonito: debe ser cómodo desde el primer día, estar fabricado con materiales nobles y tener el carácter único que solo puede ofrecer la artesanía.",
    craftFeaturesTitle: "Nuestros zapatos destacan por:",
    craftFeaturesList: [
      "Construcción Goodyear y Blake Stitch cosidas a mano",
      "Pieles de plena flor de primera calidad",
      "Plantillas y forros de alto confort",
      "Suelas de cuero o goma antideslizante según modelo",
      "Posibilidad de personalización (tallas especiales, anchuras, colores y detalles)"
    ],
    craftClosing: "Desde Oxford clásicos, Derbys elegantes y Monk straps hasta zapatos más casuales y botines, cada modelo de Sanvin está pensado para acompañarte durante muchos años con estilo y distinción.",
    newsletterTitle: "Únete a nuestra newsletter",
    newsletterSubtitle: "Recibe exclusivas, novedades y ofertas especiales directamente en tu correo.",
    newsletterPlaceholder: "tu@email.com",
    newsletterButton: "Suscribirme",
    newsletterSuccess: "¡Gracias por suscribirte!"
  },
  common: {
    price: "€"
  }
};

const en = {
  nav: {
    home: "Home",
    shop: "Shop",
    about: "About",
    contact: "Contact"
  },
  hero: {
    title: "Handcrafted shoes made by hand in Spain",
    subtitle: "Custom footwear that combines tradition, comfort, and timeless elegance.",
    ctaCollection: "View collection",
    ctaStory: "Our story"
  },
  featured: {
    title: "Featured",
    subtitle: "Our customers' favorites",
    cta: "View full collection"
  },
  brand: {
    title: "Craftsmanship in every step",
    description1: "More than a shoe brand, Sanvin represents a return to authenticity. A commitment to Spanish craftsmanship, lasting quality and respect for the customer.",
    description2: "Because we know that when you invest in good shoes, you're not just buying footwear: you're investing in daily comfort, personal image and pieces that last over time.",
    description3: "Discover the difference of wearing handcrafted shoes made in Spain."
  },
  shop: {
    title: "Our Collection",
    subtitle: "Find the perfect pair for you",
    filterAll: "All",
    filterCasual: "Casual",
    filterFormal: "Formal",
    filterSport: "Sport",
    productModel: "Shoe Model",
    category: "Category",
    addToCart: "Add to cart",
    freeShipping: "Free shipping",
    freeShippingCondition: "On orders +50€",
    returns: "Returns",
    returnsDays: "30 days"
  },
  product: {
    size: "Size",
    color: "Color",
    outOfStock: "Out of stock"
  },
  cart: {
    title: "Your cart",
    empty: "Your cart is empty",
    explore: "Explore the shop",
    checkout: "Checkout",
    total: "Total",
    continueShopping: "Continue shopping"
  },
  checkout: {
    title: "Checkout",
    shippingTitle: "Shipping information",
    shippingName: "Full name",
    shippingEmail: "Email",
    shippingAddress: "Address",
    shippingCity: "City",
    shippingPostal: "Postal code",
    paymentTitle: "Payment method",
    paymentCard: "Credit/Debit card",
    paymentPaypal: "PayPal",
    orderSummary: "Order summary",
    orderTotal: "Total",
    confirmOrder: "Confirm order"
  },
  about: {
    title: "Our story",
    subtitle: "More than shoes, we create experiences for every step of your life",
    traditionTitle: "Tradition & modernity",
    traditionText1: "Founded with a passion for artisanal footwear, our brand was born from the desire to combine traditional techniques with contemporary design.",
    traditionText2: "Every pair of shoes we create goes through a meticulous process of material selection and manual crafting, guaranteeing the highest quality in every detail.",
    qualityTitle: "Premium Quality",
    qualityText: "Materials selected from the best suppliers to guarantee durability and comfort.",
    designTitle: "Artisanal Design",
    designText: "Each pair is crafted with attention to detail, combining traditional techniques with current trends.",
    sustainTitle: "Sustainability",
    sustainText: "Committed to responsible practices and sustainable production for a better future."
  },
  contact: {
    title: "Contact",
    subtitle: "Have a question? We're here to help",
    formTitle: "Send us a message",
    formName: "Name",
    formEmail: "Email",
    formSubject: "Subject",
    formMessage: "Message",
    formPlaceholderName: "Your name",
    formPlaceholderEmail: "your@email.com",
    formPlaceholderSubject: "How can we help?",
    formPlaceholderMessage: "Write your message here...",
    formSubmit: "Send message",
    infoTitle: "Information",
    address: "Address",
    addressValue: "Madrid, Spain",
    email: "Email",
    emailValue: "info@sanvinshoemakers.com",
    phone: "Phone",
    phoneValue: "+34 634 304 435",
    hours: "Hours",
    hoursWeekday: "Monday to Friday: 10:00 - 20:00",
    hoursSaturday: "Saturdays: 10:00 - 14:00"
  },
  footer: {
    brandTagline: "Design footwear with premium materials. Every pair tells a story.",
    navigation: "Navigation",
    copyright: "All rights reserved."
  },
  homepage: {
    brandText1: "Sanvin Shoemakers is a Spanish brand specialized in the creation of handcrafted artisanal shoes. Born from the passion for traditional footwear, each pair is made with dedication and mastery by artisans with decades of experience.",
    brandText2: "We only use high-quality leathers from European tanners and centuries-old techniques that guarantee durability, comfort, and timeless elegance. At Sanvin we don't manufacture shoes in series: we create footwear that adapts to your foot and your lifestyle.",
    craftTitle: "Artisanal Footwear with a Spanish Soul",
    craftSubtitle: "At Sanvin we believe that a good shoe must be much more than beautiful: it must be comfortable from day one, made with noble materials and have the unique character that only craftsmanship can offer.",
    craftFeaturesTitle: "Our shoes stand out for:",
    craftFeaturesList: [
      "Goodyear and Blake Stitch hand-sewn construction",
      "First-quality full-grain leathers",
      "High-comfort insoles and linings",
      "Leather or non-slip rubber soles depending on model",
      "Customization options (special sizes, widths, colors and details)"
    ],
    craftClosing: "From classic Oxfords, elegant Derbies and Monk straps to more casual shoes and boots, every Sanvin model is designed to accompany you for many years with style and distinction.",
    newsletterTitle: "Join our newsletter",
    newsletterSubtitle: "Receive exclusives, news and special offers directly in your email.",
    newsletterPlaceholder: "your@email.com",
    newsletterButton: "Subscribe",
    newsletterSuccess: "Thanks for subscribing!"
  },
  common: {
    price: "€"
  }
};

const de = {
  nav: {
    home: "Startseite",
    shop: "Shop",
    about: "Über uns",
    contact: "Kontakt"
  },
  hero: {
    title: "Handgefertigte Schuhe aus Spanien",
    subtitle: "Maßschuhe, die Tradition, Komfort und zeitlose Eleganz vereinen.",
    ctaCollection: "Kollektion ansehen",
    ctaStory: "Unsere Geschichte"
  },
  featured: {
    title: "Empfohlen",
    subtitle: "Die Favoriten unserer Kunden",
    cta: "Gesamte Kollektion ansehen"
  },
  brand: {
    title: "Handwerk bei jedem Schritt",
    description1: "Mehr als eine Schuhmarke steht Sanvin für eine Rückkehr zur Echtheit. Ein Bekenntnis zum spanischen Handwerk, dauerhafter Qualität und Respekt vor dem Kunden.",
    description2: "Denn wir wissen, dass man, wenn man in gute Schuhe investiert, nicht nur Schuhe kauft: man investiert in täglichen Komfort, persönliches Auftreten und Stücke, die über die Zeit bleiben.",
    description3: "Entdecken Sie den Unterschied, handgefertigte Schuhe aus Spanien zu tragen."
  },
  shop: {
    title: "Unsere Kollektion",
    subtitle: "Finden Sie das perfekte Paar für Sie",
    filterAll: "Alle",
    filterCasual: "Casual",
    filterFormal: "Formell",
    filterSport: "Sport",
    productModel: "Schuh Modell",
    category: "Kategorie",
    addToCart: "In den Warenkorb",
    freeShipping: "Kostenloser Versand",
    freeShippingCondition: "Bei Bestellungen +50€",
    returns: "Rückgabe",
    returnsDays: "30 Tage"
  },
  product: {
    size: "Größe",
    color: "Farbe",
    outOfStock: "Nicht verfügbar"
  },
  cart: {
    title: "Ihr Warenkorb",
    empty: "Ihr Warenkorb ist leer",
    explore: "Shop entdecken",
    checkout: "Zur Kasse",
    total: "Gesamt",
    continueShopping: "Weiter einkaufen"
  },
  checkout: {
    title: "Zur Kasse",
    shippingTitle: "Versandinformationen",
    shippingName: "Vollständiger Name",
    shippingEmail: "E-Mail",
    shippingAddress: "Adresse",
    shippingCity: "Stadt",
    shippingPostal: "Postleitzahl",
    paymentTitle: "Zahlungsmethode",
    paymentCard: "Kredit-/Debitkarte",
    paymentPaypal: "PayPal",
    orderSummary: "Bestellübersicht",
    orderTotal: "Gesamt",
    confirmOrder: "Bestellung bestätigen"
  },
  about: {
    title: "Unsere Geschichte",
    subtitle: "Mehr als Schuhe - wir schaffen Erlebnisse für jeden Schritt Ihres Lebens",
    traditionTitle: "Tradition & Moderne",
    traditionText1: "Mit einer Leidenschaft für handwerkliches Schuhwerk gegründet, entstand unsere Marke aus dem Wunsch, traditionelle Techniken mit zeitgenössischem Design zu verbinden.",
    traditionText2: "Jedes Paar Schuhe, das wir kreieren, durchläuft einen sorgfältigen Prozess der Materialauswahl und manuellen Fertigung, um höchste Qualität in jedem Detail zu garantieren.",
    qualityTitle: "Premium Qualität",
    qualityText: "Materialien von den besten Lieferanten für Langlebigkeit und Komfort.",
    designTitle: "Handwerkliches Design",
    designText: "Jedes Paar wird mit Liebe zum Detail gefertigt, traditionelle Techniken mit aktuellen Trends kombiniert.",
    sustainTitle: "Nachhaltigkeit",
    sustainText: "Engagiert für verantwortungsvolle Praktiken und nachhaltige Produktion für eine bessere Zukunft."
  },
  contact: {
    title: "Kontakt",
    subtitle: "Haben Sie eine Frage? Wir sind hier um zu helfen",
    formTitle: "Schreiben Sie uns",
    formName: "Name",
    formEmail: "E-Mail",
    formSubject: "Betreff",
    formMessage: "Nachricht",
    formPlaceholderName: "Ihr Name",
    formPlaceholderEmail: "ihre@email.com",
    formPlaceholderSubject: "Wie können wir helfen?",
    formPlaceholderMessage: "Schreiben Sie hier Ihre Nachricht...",
    formSubmit: "Nachricht senden",
    infoTitle: "Information",
    address: "Adresse",
    addressValue: "Madrid, Spanien",
    email: "E-Mail",
    emailValue: "info@sanvinshoemakers.com",
    phone: "Telefon",
    phoneValue: "+34 634 304 435",
    hours: "Öffnungszeiten",
    hoursWeekday: "Montag bis Freitag: 10:00 - 20:00",
    hoursSaturday: "Samstag: 10:00 - 14:00"
  },
  footer: {
    brandTagline: "Design-Schuhwerk mit Premium-Materialien. Jedes Paar erzählt eine Geschichte.",
    navigation: "Navigation",
    copyright: "Alle Rechte vorbehalten."
  },
  homepage: {
    brandText1: "Sanvin Shoemakers ist eine spanische Marke, die sich auf die Herstellung von handgefertigten Schuhen spezialisiert hat. Aus der Leidenschaft für traditionelles Schuhwerk geboren, wird jedes Paar mit Hingabe und Meisterschaft von Schuhmachern mit jahrzehntelanger Erfahrung gefertigt.",
    brandText2: "Wir verwenden nur hochwertige Leder aus europäischer Gerberei und jahrhundertealte Techniken, die Langlebigkeit, Komfort und zeitlose Eleganz garantieren. Bei Sanvin stellen wir keine Schuhe in Serie her: wir schaffen Schuhe, die sich an Ihren Fuß und Ihren Lebensstil anpassen.",
    craftTitle: "Handgefertigtes Schuhwerk mit spanischer Seele",
    craftSubtitle: "Bei Sanvin sind wir der Meinung, dass ein guter Schuh viel mehr als nur schön sein muss: Er muss vom ersten Tag an bequem sein, aus edlen Materialien gefertigt und den einzigartigen Charakter haben, den nur handwerkliches Können bieten kann.",
    craftFeaturesTitle: "Unsere Schuhe zeichnen sich aus durch:",
    craftFeaturesList: [
      "Goodyear- und Blake-Stitch handgenähte Konstruktion",
      "Hochwertiges Vollnarbenleder",
      "Komfort-Einlegesohlen und Futter",
      "Leder- oder rutschfeste Gummisohlen je nach Modell",
      "Möglichkeit zur Personalisierung (Sondergrößen, Breiten, Farben und Details)"
    ],
    craftClosing: "Von klassischen Oxfords, eleganten Derbys und Monk-Strap-Schuhen bis hin zu lässigeren Schuhen und Stiefeln ist jedes Sanvin-Modell dafür konzipiert, Sie viele Jahre lang mit Stil und Eleganz zu begleiten.",
    newsletterTitle: "Abonniere unseren Newsletter",
    newsletterSubtitle: "Erhalte Exklusives, Neuigkeiten und Sonderangebote direkt per E-Mail.",
    newsletterPlaceholder: "ihre@email.com",
    newsletterButton: "Abonnieren",
    newsletterSuccess: "Danke fürs Abonnieren!"
  },
  common: {
    price: "€"
  }
};

const translations = {
  es,
  en,
  de
};
const languageNames = {
  es: "Español",
  en: "English",
  de: "Deutsch"
};
function loadLanguage() {
  if (typeof window === "undefined") return "es";
  const stored = localStorage.getItem("language");
  if (stored && translations[stored]) return stored;
  const browserLang = navigator.language.split("-")[0];
  if (translations[browserLang]) return browserLang;
  return "es";
}
const $language = atom(loadLanguage());
function setLanguage(lang) {
  $language.set(lang);
  if (typeof window !== "undefined") {
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
  }
}
function getTranslations(lang) {
  return translations[lang];
}
function getLanguageName(lang) {
  return languageNames[lang];
}
function getAllLanguages() {
  return ["es", "en", "de"];
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title, description = "Tienda de zapatos de diseño Sanvin" } = Astro2.props;
  const brandTitle = title.includes("Sanvin") ? title : `Sanvin | ${title}`;
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><meta charset="utf-8"><link rel="icon" type="image/webp" href="/logo.webp"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"', '><meta name="generator"', "><title>", "</title><script>\n      (function() {\n        const stored = localStorage.getItem('theme');\n        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;\n        if (stored === 'dark' || (!stored && prefersDark)) {\n          document.documentElement.classList.add('dark');\n        }\n      })();\n    <\/script>", '</head> <body class="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-200"> <div class="w-full max-w-7xl mx-auto"> ', ' <main class="flex-1"> ', " </main> ", " </div> ", " </body> </html>"])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), brandTitle, renderHead(), renderSlot($$result, $$slots["header"]), renderSlot($$result, $$slots["default"]), renderSlot($$result, $$slots["footer"]), renderScript($$result, "/home/jose/Escritorio/zapatos/frontend/src/layouts/MainLayout.astro?astro&type=script&index=0&lang.ts"));
}, "/home/jose/Escritorio/zapatos/frontend/src/layouts/MainLayout.astro", void 0);

function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("es");
  useEffect(() => {
    const stored = localStorage.getItem("language");
    if (stored && ["es", "en", "de"].includes(stored)) {
      setCurrentLang(stored);
    }
  }, []);
  const handleSelect = (lang) => {
    setLanguage(lang);
    setCurrentLang(lang);
    setIsOpen(false);
    document.cookie = `language=${lang}; path=/; max-age=31536000`;
    window.location.reload();
  };
  const languages = getAllLanguages();
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        className: "flex items-center gap-1 p-2 text-[var(--color-text-secondary)] hover:text-brand-600 transition-colors rounded-full hover:bg-[var(--color-surface)]",
        "aria-label": "Cambiar idioma",
        children: [
          /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" }) }),
          /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase", children: currentLang })
        ]
      }
    ),
    isOpen && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "fixed inset-0 z-40",
          onClick: () => setIsOpen(false)
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute right-0 mt-1 py-1 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg shadow-lg z-50 min-w-[140px]", children: languages.map((lang) => /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => handleSelect(lang),
          className: `w-full px-4 py-2 text-left text-sm hover:bg-[var(--color-surface)] transition-colors flex items-center gap-3 ${lang === currentLang ? "text-brand-600 font-medium" : "text-[var(--color-text)]"}`,
          children: [
            /* @__PURE__ */ jsx("span", { className: "w-6 text-center text-xs font-bold text-[var(--color-text-secondary)]", children: lang.toUpperCase() }),
            /* @__PURE__ */ jsx("span", { children: getLanguageName(lang) }),
            lang === currentLang && /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4 ml-auto", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" }) })
          ]
        },
        lang
      )) })
    ] })
  ] });
}

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Header;
  const lang = Astro2.locals.lang || "es";
  const t = getTranslations(lang);
  const currentPath = Astro2.url.pathname;
  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/tienda", label: t.nav.shop },
    { href: "/nosotros", label: t.nav.about },
    { href: "/contacto", label: t.nav.contact }
  ];
  return renderTemplate`${maybeRenderHead()}<header id="main-header" class="bg-[var(--color-bg)] border-b border-[var(--color-border)] sticky top-0 z-50 transition-all duration-200"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex items-center justify-between h-16 md:h-20"> <!-- Logo --> <a href="/" class="flex items-center"> <img src="/logo.webp" alt="Sanvin" class="h-10 md:h-12 w-auto dark:brightness-0 dark:invert transition-[filter] duration-200"> </a> <!-- Navigation desktop --> <nav class="hidden md:flex items-center gap-8"> ${navLinks.map(({ href, label }) => renderTemplate`<a${addAttribute(href, "href")}${addAttribute([
    "text-sm font-medium uppercase tracking-wider transition-colors duration-200",
    currentPath === href ? "text-brand-600" : "text-[var(--color-text-secondary)] hover:text-brand-600"
  ], "class:list")}> ${label} </a>`)} </nav> <!-- Selector de idioma + Tema + Carrito + Menú móvil --> <div class="flex items-center gap-2"> ${renderComponent($$result, "LanguageSelector", LanguageSelector, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/jose/Escritorio/zapatos/frontend/src/components/layout/LanguageSelector.tsx", "client:component-export": "default" })} <!-- Botón tema --> <button id="theme-toggle" class="p-2 text-[var(--color-text-secondary)] hover:text-brand-600 transition-colors rounded-full hover:bg-[var(--color-surface)]" aria-label="Cambiar tema"> <svg id="icon-sun" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path> </svg> <svg id="icon-moon" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path> </svg> </button> <!-- Botón carrito --> <a href="/carrito" class="relative p-2 text-[var(--color-text-secondary)] hover:text-brand-600 transition-colors rounded-full hover:bg-[var(--color-surface)]" aria-label="Ver carrito"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path> </svg> <span id="cart-count" class="hidden absolute -top-1 -right-1 bg-brand-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
0
</span> </a> <!-- Botón menú móvil --> <button id="mobile-menu-btn" class="md:hidden p-2 text-[var(--color-text-secondary)] hover:text-brand-600 transition-colors rounded-full hover:bg-[var(--color-surface)]" aria-label="Abrir menú"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </div> </div> <!-- Menú móvil --> <div id="mobile-menu" class="hidden md:hidden border-t border-[var(--color-border)]"> <nav class="px-4 py-4 space-y-3"> ${navLinks.map(({ href, label }) => renderTemplate`<a${addAttribute(href, "href")}${addAttribute([
    "block text-sm font-medium uppercase tracking-wider py-2",
    currentPath === href ? "text-brand-600" : "text-[var(--color-text-secondary)]"
  ], "class:list")}> ${label} </a>`)} </nav> </div> </header> ${renderScript($$result, "/home/jose/Escritorio/zapatos/frontend/src/components/layout/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/jose/Escritorio/zapatos/frontend/src/components/layout/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Footer;
  const lang = Astro2.locals.lang || "es";
  const t = getTranslations(lang);
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-[var(--color-surface)] text-[var(--color-text)] transition-colors duration-200"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <!-- Marca --> <div> <img src="/logo.webp" alt="Sanvin" class="h-10 mb-4 dark:brightness-0 dark:invert transition-[filter] duration-200"> <p class="text-sm leading-relaxed text-[var(--color-text-secondary)]"> ${t.footer.brandTagline} </p> </div> <!-- Enlaces --> <div> <h4 class="text-sm font-semibold uppercase tracking-wider text-[var(--color-text)] mb-4"> ${t.footer.navigation} </h4> <ul class="space-y-2"> <li><a href="/" class="text-sm text-[var(--color-text-secondary)] hover:text-brand-600 transition-colors">${t.nav.home}</a></li> <li><a href="/tienda" class="text-sm text-[var(--color-text-secondary)] hover:text-brand-600 transition-colors">${t.nav.shop}</a></li> <li><a href="/nosotros" class="text-sm text-[var(--color-text-secondary)] hover:text-brand-600 transition-colors">${t.nav.about}</a></li> <li><a href="/contacto" class="text-sm text-[var(--color-text-secondary)] hover:text-brand-600 transition-colors">${t.nav.contact}</a></li> </ul> </div> <!-- Contacto --> <div> <h4 class="text-sm font-semibold uppercase tracking-wider text-[var(--color-text)] mb-4"> ${t.contact.title} </h4> <ul class="space-y-2 text-sm text-[var(--color-text-secondary)]"> <li>${t.contact.emailValue}</li> <li>${t.contact.phoneValue}</li> <li>${t.contact.addressValue}</li> </ul> </div> </div> <div class="mt-10 pt-8 border-t border-[var(--color-border)] text-center text-xs text-[var(--color-text-secondary)]">
&copy; ${currentYear} Sanvin. ${t.footer.copyright} </div> </div> </footer>`;
}, "/home/jose/Escritorio/zapatos/frontend/src/components/layout/Footer.astro", void 0);

export { $$MainLayout as $, $$Header as a, $$Footer as b, getTranslations as g };
