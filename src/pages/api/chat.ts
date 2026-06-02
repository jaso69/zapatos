import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const { messages } = await request.json();

  const systemPrompt = `Eres el asistente virtual de Sanvin Shoemakers, una marca española exclusiva de calzado artesanal masculino hecho a mano en España.

Tu rol es ayudar a los clientes con:
- Recomendaciones de zapatos según ocasión (formal, casual, eventos)
- Asesoramiento sobre tallas, materiales y estilos
- Información sobre el proceso artesanal y la calidad de los productos
- Guía para elegir el zapato perfecto como regalo
- Resolución de dudas sobre compra, envío y devoluciones

Personalidad: Elegante, profesional, cálido y auténticamente español. Hablas de forma sofisticada pero accesible, como un asesor de zapatería de alta gama.

Solo respondes sobre productos y servicios de Sanvin. Si te preguntan sobre otras marcas o temas fuera de calzado, rediriges amablemente hacia zapatos Sanvin.

Empresa: Sanvin Shoemakers - Zapatos artesanales hechos a mano en España.
Precio medio: 89-150€
Envío: 48-72h gratis desde 50€
Devoluciones: 30 días gratis
Personalización: Disponible (tallas especiales, anchos, colores)`;

  const allMessages = [
    { role: 'system', content: systemPrompt },
    ...messages
  ];

  try {
    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: allMessages,
        stream: true,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      return new Response(JSON.stringify({ error: 'Error en la API', details: error }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(response.body, {
      status: 200,
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error del servidor' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};