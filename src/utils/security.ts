/**
 * Utilidades de seguridad para el formulario de contacto
 * Protege contra XSS, inyecciones y otros ataques
 */

/**
 * Sanitiza una cadena de texto eliminando caracteres peligrosos
 * @param input - Texto a sanitizar
 * @returns Texto sanitizado
 */
export function sanitizeInput(input: string): string {
  if (!input || typeof input !== 'string') {
    return '';
  }

  // Eliminar caracteres de control y caracteres peligrosos
  return input
    .replace(/[\x00-\x1F\x7F]/g, '') // Caracteres de control
    .replace(/[<>]/g, '') // Eliminar < y > para prevenir XSS
    .replace(/javascript:/gi, '') // Eliminar javascript: protocol
    .replace(/on\w+=/gi, '') // Eliminar event handlers (onclick, onerror, etc.)
    .trim();
}

/**
 * Sanitiza un email eliminando caracteres peligrosos pero manteniendo formato válido
 * @param email - Email a sanitizar
 * @returns Email sanitizado
 */
export function sanitizeEmail(email: string): string {
  if (!email || typeof email !== 'string') {
    return '';
  }

  // Permitir solo caracteres válidos para email
  return email
    .toLowerCase()
    .replace(/[^a-z0-9@._+-]/g, '')
    .trim();
}

/**
 * Sanitiza un teléfono eliminando caracteres no numéricos excepto + y espacios
 * @param phone - Teléfono a sanitizar
 * @returns Teléfono sanitizado
 */
export function sanitizePhone(phone: string): string {
  if (!phone || typeof phone !== 'string') {
    return '';
  }

  // Permitir solo números, +, espacios y guiones
  return phone
    .replace(/[^\d+\s-]/g, '')
    .trim();
}

/**
 * Valida y sanitiza el nombre
 * @param name - Nombre a validar
 * @returns Nombre validado y sanitizado o null si es inválido
 */
export function validateAndSanitizeName(name: string): string | null {
  const sanitized = sanitizeInput(name);
  
  if (sanitized.length < 2) {
    return null;
  }
  
  if (sanitized.length > 100) {
    return null;
  }

  // Permitir solo letras, espacios, guiones y apóstrofes
  if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/.test(sanitized)) {
    return null;
  }

  return sanitized;
}

/**
 * Valida y sanitiza el email
 * @param email - Email a validar
 * @returns Email validado y sanitizado o null si es inválido
 */
export function validateAndSanitizeEmail(email: string): string | null {
  const sanitized = sanitizeEmail(email);
  
  if (sanitized.length < 5) {
    return null;
  }
  
  if (sanitized.length > 254) {
    return null;
  }

  // Validación más estricta de email
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  if (!emailRegex.test(sanitized)) {
    return null;
  }

  // Prevenir emails peligrosos
  const dangerousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+=/i,
    /data:text\/html/i
  ];

  for (const pattern of dangerousPatterns) {
    if (pattern.test(sanitized)) {
      return null;
    }
  }

  return sanitized;
}

/**
 * Valida y sanitiza el teléfono
 * @param phone - Teléfono a validar
 * @returns Teléfono validado y sanitizado o null si es inválido
 */
export function validateAndSanitizePhone(phone: string): string | null {
  const sanitized = sanitizePhone(phone);
  const digitsOnly = sanitized.replace(/\D/g, '');

  // Permitir 9–20 dígitos (p. ej. móviles españoles 9 dígitos, internacional hasta 20)
  if (digitsOnly.length < 9) {
    return null;
  }

  if (digitsOnly.length > 20) {
    return null;
  }

  // Aceptar formato internacional: opcional +, dígitos, espacios y guiones
  if (!/^\+?[\d\s-]+$/.test(sanitized)) {
    return null;
  }

  return sanitized;
}

/**
 * Valida y sanitiza el asunto
 * @param subject - Asunto a validar
 * @returns Asunto validado y sanitizado o null si es inválido
 */
export function validateAndSanitizeSubject(subject: string): string | null {
  const sanitized = sanitizeInput(subject);
  
  if (sanitized.length < 3) {
    return null;
  }
  
  if (sanitized.length > 200) {
    return null;
  }

  return sanitized;
}

/**
 * Valida y sanitiza el mensaje
 * @param message - Mensaje a validar
 * @returns Mensaje validado y sanitizado o null si es inválido
 */
export function validateAndSanitizeMessage(message: string): string | null {
  const sanitized = sanitizeInput(message);
  
  if (sanitized.length < 10) {
    return null;
  }
  
  if (sanitized.length > 1000) {
    return null;
  }

  // Detectar intentos de inyección
  const dangerousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+=/i,
    /data:text\/html/i,
    /<iframe/i,
    /<object/i,
    /<embed/i,
    /eval\(/i,
    /expression\(/i
  ];

  for (const pattern of dangerousPatterns) {
    if (pattern.test(sanitized)) {
      return null;
    }
  }

  return sanitized;
}

/**
 * Rate limiting simple en el cliente
 */
class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  private readonly maxAttempts = 5;
  private readonly timeWindow = 60000; // 1 minuto

  canMakeRequest(identifier: string): boolean {
    const now = Date.now();
    const userAttempts = this.attempts.get(identifier) || [];
    
    // Eliminar intentos fuera de la ventana de tiempo
    const recentAttempts = userAttempts.filter(
      timestamp => now - timestamp < this.timeWindow
    );

    if (recentAttempts.length >= this.maxAttempts) {
      return false;
    }

    // Agregar nuevo intento
    recentAttempts.push(now);
    this.attempts.set(identifier, recentAttempts);
    
    return true;
  }

  reset(identifier: string): void {
    this.attempts.delete(identifier);
  }
}

export const rateLimiter = new RateLimiter();

/**
 * Obtiene un identificador único para el usuario (basado en IP aproximada o sesión)
 */
export function getUserIdentifier(): string {
  // En producción, esto debería usar una combinación de IP y otros factores
  // Por ahora, usamos sessionStorage como identificador básico
  if (typeof window !== 'undefined') {
    let identifier = sessionStorage.getItem('user_identifier');
    if (!identifier) {
      identifier = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('user_identifier', identifier);
    }
    return identifier;
  }
  return 'anonymous';
}
