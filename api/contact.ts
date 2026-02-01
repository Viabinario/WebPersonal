/**
 * Endpoint del formulario de contacto con Resend.
 * Desplegar en Vercel (o compatible) y configurar:
 *   RESEND_API_KEY, RESEND_FROM_EMAIL, RESEND_TO_EMAIL
 */
import { Resend } from 'resend';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
};

interface ContactBody {
  nombre?: string;
  email?: string;
  telefono?: string;
  asunto?: string;
  mensaje?: string;
}

function jsonResponse(body: object, status: number, headers = CORS_HEADERS) {
  return new Response(JSON.stringify(body), { status, headers: { ...headers, 'Content-Type': 'application/json' } });
}

export async function POST(request: Request): Promise<Response> {

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
  const toEmail = process.env.RESEND_TO_EMAIL;
  if (!apiKey) {
    console.error('RESEND_API_KEY no configurado');
    return jsonResponse({ error: 'Error al enviar el mensaje' }, 500);
  }
  if (!toEmail) {
    console.error('RESEND_TO_EMAIL no configurado');
    return jsonResponse({ error: 'Error al enviar el mensaje' }, 500);
  }
  const resend = new Resend(apiKey);

  let body: ContactBody;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: 'Cuerpo inválido' }, 400);
  }

  const { nombre, email, telefono, asunto, mensaje } = body;
  if (!nombre || !email || !telefono || !asunto || !mensaje) {
    return jsonResponse({ error: 'Todos los campos son requeridos' }, 400);
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(String(email))) {
    return jsonResponse({ error: 'Email inválido' }, 400);
  }

  const html = `
    <h2>Nuevo mensaje de contacto</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(String(nombre))}</p>
    <p><strong>Email:</strong> ${escapeHtml(String(email))}</p>
    <p><strong>Teléfono:</strong> ${escapeHtml(String(telefono))}</p>
    <p><strong>Asunto:</strong> ${escapeHtml(String(asunto))}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${escapeHtml(String(mensaje)).replace(/\n/g, '<br>')}</p>
  `;

  const { data, error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    subject: `Contacto: ${String(asunto).slice(0, 60)}`,
    html,
    replyTo: String(email),
  });

  if (error) {
    console.error('Resend error:', error);
    return jsonResponse({ error: 'Error al enviar el mensaje' }, 500);
  }

  return jsonResponse({ success: true, message: 'Mensaje enviado correctamente', id: data?.id }, 200);
}

export async function OPTIONS(): Promise<Response> {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
  return text.replace(/[&<>"']/g, (c) => map[c] ?? c);
}
