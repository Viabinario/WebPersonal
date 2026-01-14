import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-44bf6176/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact form endpoint - save contact message
app.post("/make-server-44bf6176/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { nombre, email, telefono, asunto, mensaje } = body;

    // Validate required fields
    if (!nombre || !email || !telefono || !asunto || !mensaje) {
      return c.json({ error: "Todos los campos son requeridos" }, 400);
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return c.json({ error: "Email inválido" }, 400);
    }

    // Validate phone format
    const phoneRegex = /^\+\d{1,3}\s?\d{3}\s?\d{3}\s?\d{3}$/;
    if (!phoneRegex.test(telefono)) {
      return c.json({ error: "Teléfono inválido" }, 400);
    }

    // Create unique ID for the message
    const messageId = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Save to KV store
    await kv.set(messageId, {
      nombre,
      email,
      telefono,
      asunto,
      mensaje,
      fecha: new Date().toISOString(),
      leido: false
    });

    console.log(`Mensaje de contacto guardado: ${messageId}`);

    return c.json({ 
      success: true, 
      message: "Mensaje enviado exitosamente",
      id: messageId 
    });

  } catch (error) {
    console.error("Error al guardar mensaje de contacto:", error);
    return c.json({ 
      error: "Error al enviar el mensaje",
      details: error instanceof Error ? error.message : String(error)
    }, 500);
  }
});

// Get all contact messages
app.get("/make-server-44bf6176/contact/messages", async (c) => {
  try {
    const messages = await kv.getByPrefix("contact_");
    
    // Sort by date (newest first)
    const sortedMessages = messages.sort((a, b) => {
      const dateA = new Date(a.fecha || 0).getTime();
      const dateB = new Date(b.fecha || 0).getTime();
      return dateB - dateA;
    });

    return c.json({ 
      success: true, 
      messages: sortedMessages,
      count: sortedMessages.length
    });

  } catch (error) {
    console.error("Error al obtener mensajes:", error);
    return c.json({ 
      error: "Error al obtener mensajes",
      details: error instanceof Error ? error.message : String(error)
    }, 500);
  }
});

Deno.serve(app.fetch);