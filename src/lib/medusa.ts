const MEDUSA_API_URL = 'https://sanvin.rpg-docu.com';
const MEDUSA_PUBLISHABLE_KEY = 'pk_e7c79206b6937c1be93ad8f7763dfe53f95fd0243de68a6d0f569b07c563b11e';

export interface MedusaImage {
  id: string;
  url: string;
  rank: number;
}

export interface MedusaOption {
  id: string;
  title: string;
  values: Array<{
    id: string;
    value: string;
  }>;
}

export interface MedusaPrice {
  id: string;
  currency_code: string;
  amount: number;
  min_quantity?: number | null;
  max_quantity?: number | null;
}

export interface MedusaVariant {
  id: string;
  title: string;
  sku?: string;
  options: Array<{
    id: string;
    value: string;
    option_id: string;
    option?: {
      id: string;
      title: string;
    };
  }>;
  prices: MedusaPrice[];
}

export interface MedusaProduct {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  handle: string;
  thumbnail?: string;
  images: MedusaImage[];
  options: MedusaOption[];
  variants: MedusaVariant[];
  collection?: {
    id: string;
    title: string;
  };
  created_at: string;
  price?: {
    amount: number;
    currency_code: string;
  };
}

function transformImageUrl(url: string): string {
  if (!url) return url;
  return url.replace('http://localhost:9000', MEDUSA_API_URL);
}

function getProductPrice(product: any): { amount: number; currency_code: string } | undefined {
  if (!product.variants || product.variants.length === 0) return undefined;
  const prices = product.variants
    .flatMap((v: any) => v.prices || [])
    .filter((p: any) => p && typeof p.amount === 'number');
  if (prices.length === 0) return undefined;
  const minPrice = prices.reduce((min: any, p: any) => (p.amount < min.amount ? p : min), prices[0]);
  return {
    amount: minPrice.amount,
    currency_code: minPrice.currency_code?.toUpperCase() || 'EUR',
  };
}

export function formatPrice(amount: number, currency: string): string {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: currency,
  }).format(amount);
}

export async function getProducts(limit = 999): Promise<MedusaProduct[]> {
  try {
    const response = await fetch(
      `${MEDUSA_API_URL}/store/products?limit=${limit}&fields=*variants,*variants.prices,*options,*images,*collection`,
      {
        headers: {
          'x-publishable-api-key': MEDUSA_PUBLISHABLE_KEY,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      console.error('Failed to fetch products:', response.status);
      return [];
    }

    const data = await response.json();
    const products: MedusaProduct[] = data.products || [];

    return products.map((product) => {
      const price = getProductPrice(product);
      return {
        ...product,
        price,
        thumbnail: product.thumbnail ? transformImageUrl(product.thumbnail) : null,
        images: (product.images || [])
          .sort((a, b) => a.rank - b.rank)
          .map((img) => ({
            ...img,
            url: transformImageUrl(img.url),
          })),
      };
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function getProductByHandle(handle: string): Promise<MedusaProduct | null> {
  try {
    const response = await fetch(
      `${MEDUSA_API_URL}/store/products?handle=${handle}&fields=*variants,*variants.prices,*options,*images,*collection`,
      {
        headers: {
          'x-publishable-api-key': MEDUSA_PUBLISHABLE_KEY,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      console.error('Failed to fetch product:', response.status);
      return null;
    }

    const data = await response.json();
    const products: MedusaProduct[] = data.products || [];

    if (products.length === 0) return null;

    const product = products[0];
    const price = getProductPrice(product);
    return {
      ...product,
      price,
      thumbnail: product.thumbnail ? transformImageUrl(product.thumbnail) : null,
      images: (product.images || [])
        .sort((a, b) => a.rank - b.rank)
        .map((img) => ({
          ...img,
          url: transformImageUrl(img.url),
        })),
    };
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

// ==================== CART API ====================

export interface MedusaCartItem {
  id: string;
  title: string;
  subtitle?: string;
  thumbnail?: string;
  quantity: number;
  unit_price: number;
  product?: MedusaProduct;
  variant?: MedusaVariant;
}

export interface MedusaCart {
  id: string;
  items: MedusaCartItem[];
  total: number;
  subtotal: number;
  tax_total: number;
  shipping_total: number;
  discount_total: number;
  currency_code: string;
  item_total: number;
  email?: string;
}

const commonHeaders = {
  'x-publishable-api-key': MEDUSA_PUBLISHABLE_KEY,
  'Content-Type': 'application/json',
};

export async function createCart(): Promise<MedusaCart | null> {
  try {
    const response = await fetch(`${MEDUSA_API_URL}/store/carts`, {
      method: 'POST',
      headers: commonHeaders,
      body: JSON.stringify({}),
    });
    if (!response.ok) {
      console.error('Failed to create cart:', response.status);
      return null;
    }
    const data = await response.json();
    return data.cart || null;
  } catch (error) {
    console.error('Error creating cart:', error);
    return null;
  }
}

export async function getCart(cartId: string): Promise<MedusaCart | null> {
  try {
    const response = await fetch(`${MEDUSA_API_URL}/store/carts/${cartId}`, {
      headers: commonHeaders,
    });
    if (!response.ok) {
      console.error('Failed to get cart:', response.status);
      return null;
    }
    const data = await response.json();
    return data.cart || null;
  } catch (error) {
    console.error('Error getting cart:', error);
    return null;
  }
}

export async function addToCart(
  cartId: string,
  variantId: string,
  quantity: number = 1,
  metadata?: Record<string, any>
): Promise<MedusaCart | null> {
  try {
    const body: any = { variant_id: variantId, quantity };
    if (metadata) body.metadata = metadata;
    const response = await fetch(`${MEDUSA_API_URL}/store/carts/${cartId}/line-items`, {
      method: 'POST',
      headers: commonHeaders,
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      console.error('Failed to add to cart:', response.status);
      return null;
    }
    const data = await response.json();
    return data.cart || null;
  } catch (error) {
    console.error('Error adding to cart:', error);
    return null;
  }
}

export async function updateCartItem(
  cartId: string,
  itemId: string,
  quantity: number
): Promise<MedusaCart | null> {
  try {
    const response = await fetch(`${MEDUSA_API_URL}/store/carts/${cartId}/line-items/${itemId}`, {
      method: 'POST',
      headers: commonHeaders,
      body: JSON.stringify({ quantity }),
    });
    if (!response.ok) {
      console.error('Failed to update cart item:', response.status);
      return null;
    }
    const data = await response.json();
    return data.cart || null;
  } catch (error) {
    console.error('Error updating cart item:', error);
    return null;
  }
}

export async function removeCartItem(
  cartId: string,
  itemId: string
): Promise<MedusaCart | null> {
  try {
    const response = await fetch(`${MEDUSA_API_URL}/store/carts/${cartId}/line-items/${itemId}`, {
      method: 'DELETE',
      headers: commonHeaders,
    });
    if (!response.ok) {
      console.error('Failed to remove cart item:', response.status);
      return null;
    }
    const data = await response.json();
    return data.parent || null;
  } catch (error) {
    console.error('Error removing cart item:', error);
    return null;
  }
}
