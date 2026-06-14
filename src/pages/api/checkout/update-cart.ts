import type { APIRoute } from 'astro';

const MEDUSA_API_URL = 'https://sanvin.rpg-docu.com';
const MEDUSA_PUBLISHABLE_KEY = 'pk_e7c79206b6937c1be93ad8f7763dfe53f95fd0243de68a6d0f569b07c563b11e';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { cartId, email, shippingAddress, billingAddress } = await request.json();
    if (!cartId) {
      return new Response(JSON.stringify({ error: 'Missing cartId' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const body: any = {};
    if (email) body.email = email;
    if (shippingAddress) body.shipping_address = shippingAddress;
    if (billingAddress) body.billing_address = billingAddress;

    const response = await fetch(`${MEDUSA_API_URL}/store/carts/${cartId}`, {
      method: 'POST',
      headers: {
        'x-publishable-api-key': MEDUSA_PUBLISHABLE_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return new Response(JSON.stringify({ error: errorText }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to update cart' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
