import type { APIRoute } from 'astro';

const MEDUSA_API_URL = 'https://sanvin.rpg-docu.com';
const MEDUSA_PUBLISHABLE_KEY = 'pk_e7c79206b6937c1be93ad8f7763dfe53f95fd0243de68a6d0f569b07c563b11e';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { cartId, optionId } = await request.json();
    if (!cartId || !optionId) {
      return new Response(JSON.stringify({ error: 'Missing cartId or optionId' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const response = await fetch(`${MEDUSA_API_URL}/store/carts/${cartId}/shipping-methods`, {
      method: 'POST',
      headers: {
        'x-publishable-api-key': MEDUSA_PUBLISHABLE_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ option_id: optionId }),
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
    return new Response(JSON.stringify({ error: 'Failed to add shipping method' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
