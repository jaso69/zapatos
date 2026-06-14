import type { APIRoute } from 'astro';

const MEDUSA_API_URL = 'https://sanvin.rpg-docu.com';
const MEDUSA_PUBLISHABLE_KEY = 'pk_e7c79206b6937c1be93ad8f7763dfe53f95fd0243de68a6d0f569b07c563b11e';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { cartId, providerId } = await request.json();
    if (!cartId || !providerId) {
      return new Response(JSON.stringify({ error: 'Missing cartId or providerId' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Create payment collection if cart doesn't have one
    const cartResponse = await fetch(`${MEDUSA_API_URL}/store/carts/${cartId}`, {
      headers: {
        'x-publishable-api-key': MEDUSA_PUBLISHABLE_KEY,
        'Content-Type': 'application/json',
      },
    });
    const cartData = await cartResponse.json();
    const cart = cartData.cart;

    let paymentCollectionId = cart?.payment_collection?.id;

    if (!paymentCollectionId) {
      const createResponse = await fetch(`${MEDUSA_API_URL}/store/payment-collections`, {
        method: 'POST',
        headers: {
          'x-publishable-api-key': MEDUSA_PUBLISHABLE_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cart_id: cartId }),
      });
      const createData = await createResponse.json();
      paymentCollectionId = createData?.payment_collection?.id;
    }

    if (!paymentCollectionId) {
      return new Response(JSON.stringify({ error: 'Failed to create payment collection' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Initialize payment session
    const initResponse = await fetch(`${MEDUSA_API_URL}/store/payment-collections/${paymentCollectionId}/payment-sessions`, {
      method: 'POST',
      headers: {
        'x-publishable-api-key': MEDUSA_PUBLISHABLE_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ provider_id: providerId }),
    });

    if (!initResponse.ok) {
      const errorText = await initResponse.text();
      return new Response(JSON.stringify({ error: errorText }), {
        status: initResponse.status,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await initResponse.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to initiate payment' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
