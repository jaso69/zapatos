/**
 * Cliente para la API de Strapi
 */

const STRAPI_URL = import.meta.env.STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = import.meta.env.STRAPI_API_TOKEN || '';

interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface StrapiImage {
  url: string;
  alternativeText: string | null;
  width: number;
  height: number;
  formats?: {
    thumbnail?: { url: string };
    small?: { url: string };
    medium?: { url: string };
    large?: { url: string };
  };
}

export interface Producto {
  id: number;
  documentId: string;
  nombre: string;
  slug: string;
  descripcion: string;
  precio: number;
  precioOferta?: number | null;
  tallas: string; // JSON string: ["38", "39", "40", ...]
  colores: string; // JSON string: ["Negro", "Marrón", ...]
  stock: number;
  destacado: boolean;
  imagenes: StrapiImage[];
  categoria?: Categoria;
}

export interface Categoria {
  id: number;
  documentId: string;
  nombre: string;
  slug: string;
  descripcion?: string;
}

export interface Pedido {
  id: number;
  documentId: string;
  productos: string; // JSON string del carrito
  total: number;
  estado: 'pendiente' | 'pagado' | 'enviado' | 'entregado' | 'cancelado';
  nombreCliente: string;
  emailCliente: string;
  direccionEnvio: string;
  metodoPago: 'stripe' | 'paypal';
  paymentId?: string;
}

async function fetchStrapi<T>(
  endpoint: string,
  params: Record<string, string> = {},
): Promise<StrapiResponse<T>> {
  const url = new URL(`/api${endpoint}`, STRAPI_URL);

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (STRAPI_TOKEN) {
    headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`;
  }

  const response = await fetch(url.toString(), { headers });

  if (!response.ok) {
    throw new Error(`Error fetching ${endpoint}: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

/** Obtener todos los productos */
export async function getProductos(filters?: Record<string, string>) {
  const params: Record<string, string> = {
    'populate': '*',
    ...filters,
  };
  return fetchStrapi<Producto[]>('/productos', params);
}

/** Obtener un producto por slug */
export async function getProductoBySlug(slug: string) {
  return fetchStrapi<Producto[]>('/productos', {
    'filters[slug][$eq]': slug,
    'populate': '*',
  });
}

/** Obtener productos destacados */
export async function getProductosDestacados() {
  return fetchStrapi<Producto[]>('/productos', {
    'filters[destacado][$eq]': 'true',
    'populate': '*',
  });
}

/** Obtener todas las categorías */
export async function getCategorias() {
  return fetchStrapi<Categoria[]>('/categorias', {
    'populate': '*',
  });
}

/** Crear un pedido */
export async function crearPedido(pedido: Omit<Pedido, 'id' | 'documentId'>) {
  const url = new URL('/api/pedidos', STRAPI_URL);
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (STRAPI_TOKEN) {
    headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`;
  }

  const response = await fetch(url.toString(), {
    method: 'POST',
    headers,
    body: JSON.stringify({ data: pedido }),
  });

  if (!response.ok) {
    throw new Error(`Error creating pedido: ${response.status}`);
  }

  return response.json();
}

/** Obtener URL completa de imagen de Strapi */
export function getStrapiImageUrl(url: string): string {
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
}
