# Seguridad del Formulario de Contacto

Este documento describe las medidas de seguridad implementadas en el formulario de contacto para proteger contra ataques comunes.

## 🔒 Medidas de Seguridad Implementadas

### 1. **Protección contra XSS (Cross-Site Scripting)**

- **Sanitización de entrada**: Todos los campos se sanitizan antes de ser procesados
- **Eliminación de caracteres peligrosos**: Se eliminan caracteres de control, etiquetas HTML (`<`, `>`), y protocolos peligrosos (`javascript:`)
- **Detección de event handlers**: Se eliminan handlers de eventos maliciosos (`onclick`, `onerror`, etc.)
- **Validación de patrones peligrosos**: Se detectan y bloquean intentos de inyección de código

**Archivo**: `src/utils/security.ts`

### 2. **Validación y Sanitización de Datos**

#### Nombre
- Longitud: 2-100 caracteres
- Solo permite letras, espacios, guiones y apóstrofes
- Sanitización completa de caracteres especiales

#### Email
- Longitud: 5-254 caracteres (estándar RFC 5321)
- Validación con regex mejorada
- Sanitización de caracteres no válidos
- Detección de patrones peligrosos en emails

#### Teléfono
- Longitud: 10-20 caracteres
- Formato internacional flexible: `+### ### ### ###`
- Solo permite números, `+`, espacios y guiones
- Validación de formato internacional

#### Asunto
- Longitud: 3-200 caracteres
- Sanitización completa

#### Mensaje
- Longitud: 10-1000 caracteres (aumentado de 300)
- Detección de intentos de inyección:
  - `<script>`, `<iframe>`, `<object>`, `<embed>`
  - `javascript:`, `data:text/html`
  - `eval()`, `expression()`
  - Event handlers maliciosos

### 3. **Rate Limiting (Límite de Intentos)**

- **Máximo 5 intentos por minuto** por usuario
- Identificación basada en sesión del navegador
- Prevención de ataques de fuerza bruta y spam
- Reset automático después de envío exitoso

**Implementación**: `src/utils/security.ts` - Clase `RateLimiter`

### 4. **Protección contra Ataques de Tiempo**

- **Timeout de 10 segundos** en las peticiones HTTP
- Prevención de ataques de denegación de servicio (DoS)
- Manejo adecuado de errores de timeout

### 5. **Manejo Seguro de Errores**

- **No exposición de información sensible**: Los errores del servidor no se muestran al usuario
- Mensajes genéricos y seguros para el usuario
- Logging detallado solo en consola (desarrollo)
- Validación de tipo de respuesta del servidor

### 6. **Validación en Múltiples Capas**

1. **Cliente (Frontend)**:
   - Validación en tiempo real
   - Sanitización antes del envío
   - Límites de longitud en inputs HTML

2. **Servidor (Backend)**:
   - Validación adicional en Supabase Edge Functions
   - Sanitización en el servidor

### 7. **Prevención de Doble Envío**

- Estado `isSubmitting` previene múltiples envíos simultáneos
- Botón deshabilitado durante el envío
- Indicador visual de estado de carga

### 8. **Límites de Longitud en HTML**

Todos los campos tienen atributos `maxLength`:
- Nombre: 100 caracteres
- Email: 254 caracteres
- Teléfono: 20 caracteres
- Asunto: 200 caracteres
- Mensaje: 1000 caracteres

### 9. **Autocompletado Seguro**

- Campos de email y teléfono usan `autoComplete` apropiado
- Mejora la experiencia del usuario sin comprometer seguridad

## 🛡️ Protecciones Específicas

### Contra Inyección SQL
- **No aplicable directamente**: Supabase usa consultas parametrizadas
- Los datos se sanitizan antes de llegar a la base de datos

### Contra CSRF (Cross-Site Request Forgery)
- Supabase maneja tokens de autenticación
- Validación de origen en el servidor

### Contra Ataques de Denegación de Servicio (DoS)
- Rate limiting en el cliente
- Timeout en peticiones
- Validación de tamaño de datos

### Contra Inyección de Código
- Sanitización estricta de todos los campos
- Detección de patrones peligrosos
- Validación de tipos de datos

## 📋 Checklist de Seguridad

- ✅ Sanitización de entrada
- ✅ Validación de longitud
- ✅ Validación de formato
- ✅ Rate limiting
- ✅ Timeout en peticiones
- ✅ Manejo seguro de errores
- ✅ Prevención de doble envío
- ✅ Límites HTML
- ✅ Detección de XSS
- ✅ Detección de inyección de código

## 🔍 Pruebas de Seguridad Recomendadas

1. **Prueba de XSS**: Intentar inyectar `<script>alert('XSS')</script>` en cualquier campo
2. **Prueba de Rate Limiting**: Intentar enviar más de 5 formularios en un minuto
3. **Prueba de Longitud**: Intentar enviar datos excesivamente largos
4. **Prueba de Caracteres Especiales**: Intentar enviar caracteres de control y especiales
5. **Prueba de Timeout**: Simular una conexión lenta o interrumpida

## 📝 Notas Importantes

- La sanitización se realiza **antes** de enviar datos al servidor
- El servidor debe tener validación adicional (ya implementada en Supabase Functions)
- Los logs de error no deben exponerse en producción
- El rate limiting es básico; para producción, considerar implementación en el servidor

## 🚀 Mejoras Futuras Recomendadas

1. **CAPTCHA**: Agregar reCAPTCHA v3 para protección adicional contra bots
2. **Honeypot**: Campo oculto para detectar bots
3. **Validación de IP**: Rate limiting basado en IP en el servidor
4. **CSP Headers**: Content Security Policy headers en el servidor
5. **HTTPS obligatorio**: Asegurar que todas las comunicaciones sean HTTPS

## 📚 Referencias

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [OWASP XSS Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
- [Supabase Security](https://supabase.com/docs/guides/platform/security)
