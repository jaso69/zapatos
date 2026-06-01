/**
 * Estado global del carrito de compras usando nanostores
 * Compartido entre componentes Astro y React
 */
import { atom, computed } from 'nanostores';

export interface CartItem {
  id: number;
  nombre: string;
  slug: string;
  precio: number;
  imagen: string;
  talla: string;
  color: string;
  cantidad: number;
}

// Cargar carrito desde localStorage si existe
function loadCart(): CartItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

// Guardar carrito en localStorage
function saveCart(items: readonly CartItem[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('cart', JSON.stringify(items));
}

/** Store principal del carrito */
export const $cart = atom<CartItem[]>(loadCart());

// Sincronizar con localStorage en cada cambio
$cart.listen((items) => {
  saveCart(items);
  // Actualizar badge del carrito en el header
  if (typeof document !== 'undefined') {
    const badge = document.getElementById('cart-count');
    if (badge) {
      const total = items.reduce((sum, item) => sum + item.cantidad, 0);
      badge.textContent = String(total);
      badge.classList.toggle('hidden', total === 0);
      badge.classList.toggle('flex', total > 0);
    }
  }
});

/** Total de items en el carrito */
export const $cartCount = computed($cart, (items) =>
  items.reduce((sum, item) => sum + item.cantidad, 0),
);

/** Total del precio del carrito */
export const $cartTotal = computed($cart, (items) =>
  items.reduce((sum, item) => sum + item.precio * item.cantidad, 0),
);

/** Añadir producto al carrito */
export function addToCart(item: Omit<CartItem, 'cantidad'>) {
  const items = $cart.get();
  const existing = items.find(
    (i) => i.id === item.id && i.talla === item.talla && i.color === item.color,
  );

  if (existing) {
    $cart.set(
      items.map((i) =>
        i === existing ? { ...i, cantidad: i.cantidad + 1 } : i,
      ),
    );
  } else {
    $cart.set([...items, { ...item, cantidad: 1 }]);
  }
}

/** Eliminar producto del carrito */
export function removeFromCart(id: number, talla: string, color: string) {
  $cart.set(
    $cart.get().filter(
      (i) => !(i.id === id && i.talla === talla && i.color === color),
    ),
  );
}

/** Actualizar cantidad de un producto */
export function updateQuantity(id: number, talla: string, color: string, cantidad: number) {
  if (cantidad <= 0) {
    removeFromCart(id, talla, color);
    return;
  }

  $cart.set(
    $cart.get().map((i) =>
      i.id === id && i.talla === talla && i.color === color
        ? { ...i, cantidad }
        : i,
    ),
  );
}

/** Vaciar el carrito */
export function clearCart() {
  $cart.set([]);
}
