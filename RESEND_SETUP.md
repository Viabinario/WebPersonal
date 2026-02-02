# Configuración del formulario de contacto con Resend

El formulario de contacto envía los mensajes por email usando [Resend](https://resend.com). El frontend hace POST a un endpoint; ese endpoint (en Vercel) usa la API de Resend para enviar el correo a tu bandeja.

---

## Paso 1: Cuenta en Resend

1. Entra en **https://resend.com** y crea una cuenta (o inicia sesión).
2. Verifica tu email si te lo piden.

---

## Paso 2: API Key de Resend

1. En el dashboard de Resend: **API Keys** (o **https://resend.com/api-keys**).
2. Pulsa **Create API Key**.
3. Pon un nombre (ej: `Web Personal Contacto`) y elige el permiso **Sending access**.
4. Copia la clave que empieza por `re_` (solo se muestra una vez).
5. Guárdala en un lugar seguro; la usarás en el Paso 5.

---

## Paso 3: Dominio (opcional para pruebas)

- **Probar rápido:** puedes usar el dominio de prueba de Resend (`onboarding@resend.dev`). No hace falta verificar dominio; el backend ya lo usa si no configuras `RESEND_FROM_EMAIL`.
- **Producción:** en Resend ve a **Domains**, añade tu dominio y sigue las instrucciones (registros DNS). Luego en el backend usa ese dominio en `RESEND_FROM_EMAIL` (ej: `Contacto <contacto@tudominio.com>`).

---

## Paso 4: Desplegar la API en Vercel

1. Sube el proyecto a **GitHub** (si aún no está).
2. Entra en **https://vercel.com**, inicia sesión y **Add New Project**.
3. Importa el repositorio de este proyecto.
4. En **Root Directory** deja el valor por defecto (raíz del repo).
5. En **Build and Output Settings**:
   - **Framework Preset:** Vite (o Other).
   - **Build Command:** `npm run build` (debe coincidir con el script de `package.json`).
   - **Output Directory:** `dist`.
6. No cambies aún las variables de entorno; las añadiremos en el Paso 5.
7. Pulsa **Deploy**. Cuando termine, tendrás una URL como `https://tu-proyecto.vercel.app`.
8. La ruta del formulario de contacto será: `https://tu-proyecto.vercel.app/api/contact`.

**Rama por defecto (main vs tu rama):** Vercel construye por defecto desde la rama **Production** (normalmente `main`). Si tu código está en otra rama:
- **Opción A – Usar tu rama como producción:** en Vercel → **Settings** → **Environments** (menú izquierdo). En esa página verás la sección **Production Branch**; ahí puedes elegir tu rama (ej. `dev`, `resend`) y pulsar **Save**. Los próximos deploys de producción usarán esa rama.
- **Opción B – Al crear el proyecto:** al importar el repo, tras elegir el repositorio puedes elegir la rama en el desplegable antes de **Deploy**. La rama que elijas será la **Production Branch** inicial.
- **Opción C – Merge a main:** haz merge de tu rama a `main` y empuja; Vercel desplegará automáticamente desde `main`.

**Si el build falla en Vercel:** el proyecto incluye un `vercel.json` que fija el comando de build (`npx vite build`) y la salida. Revisa el **mensaje de error completo** en **Deployments** → clic en el deployment fallido → **Building** (o **Logs**). Errores frecuentes:
- **`Permission denied` en vite:** el build usa `npx vite build` para evitar problemas de permisos en el binario. Si sigue fallando, en Vercel → **Settings** → **General** → **Build Command** pon `npx vite build`.
- **`npm install` falla:** comprueba que no haya dependencias que requieran compilación nativa o que fallen en Linux. Si usas `package-lock.json`, asegúrate de subirlo al repo.
- **Build command no encontrado:** en **Settings** → **General** → **Build & Development Settings**, pon **Build Command** = `npx vite build` y **Output Directory** = `dist`.
- **Node:** el proyecto pide Node >= 18. En **Settings** → **General** → **Node.js Version** puedes fijar **18.x** o **20.x**.

---

## Paso 5: Variables de entorno en Vercel

1. En Vercel: tu proyecto → **Settings** → **Environment Variables**.
2. Añade estas variables (sustituye los valores de ejemplo):

| Nombre               | Valor                    | Entorno   |
|----------------------|--------------------------|-----------|
| `RESEND_API_KEY`     | `re_xxxx...` (tu API key)| Production (y Preview si quieres) |
| `RESEND_TO_EMAIL`    | Tu email (ej: `tu@email.com`) | Production (y Preview) |
| `RESEND_FROM_EMAIL`  | (Opcional) Ej: `Contacto <contacto@tudominio.com>` | Production |
| `VITE_CONTACT_API_URL` | **Obligatorio si el sitio está en Vercel.** URL completa del API, ej: `https://tu-proyecto.vercel.app/api/contact` | Production (y Preview si quieres) |

- Si no pones `RESEND_FROM_EMAIL`, se usará `onboarding@resend.dev` (dominio de prueba de Resend).
- **`VITE_CONTACT_API_URL`:** Vite inyecta esta variable en **tiempo de build**. Si despliegas el frontend en el **mismo proyecto de Vercel**, añádela aquí con la URL de tu deployment: `https://[tu-dominio-vercel].vercel.app/api/contact`. Escribe **`https://`** con los dos puntos (no `https//`). Si la interfaz de Vercel añade automáticamente `https://` al valor, no lo repitas: el valor final debe ser una sola vez la URL completa (ej: `https://tu-proyecto.vercel.app/api/contact`).
3. Guarda y haz un **Redeploy** del proyecto para que las variables se apliquen (el build incluirá `VITE_CONTACT_API_URL` en el frontend).

---

## Paso 6: Variables en el frontend (.env)

El sitio que usa el formulario (por ejemplo en GitHub Pages o en otro despliegue) debe conocer la URL del endpoint.

1. En la **raíz del proyecto** (donde está el frontend), crea o edita el archivo **`.env`** (no lo subas a Git; ya está en `.gitignore`).
2. Añade una línea como esta, con la URL real de tu API en Vercel:

```env
VITE_CONTACT_API_URL=https://tu-proyecto.vercel.app/api/contact
```

Sustituye `tu-proyecto.vercel.app` por la URL que te dio Vercel en el Paso 4.

3. Reinicia el servidor de desarrollo (`npm run dev`) para que lea la nueva variable.
4. En producción (ej: GitHub Pages), configura la misma variable `VITE_CONTACT_API_URL` en el servicio que uses (por ejemplo, en GitHub Actions o en el panel de tu hosting) para que el build tenga la URL correcta.

---

## Paso 7: Probar el formulario

1. Ejecuta el frontend en local: `npm run dev`.
2. Abre la sección de Contacto, rellena el formulario y envía.
3. Comprueba la bandeja de entrada del email que pusiste en `RESEND_TO_EMAIL`.
4. Si algo falla, revisa la pestaña **Network** del navegador (request a `api/contact`) y los **Logs** de la función en Vercel (Project → Deployments → función → Logs).

---

## Resumen de archivos y flujo

- **Frontend:** `src/components/ContactoSection.tsx` hace POST a la URL definida en `VITE_CONTACT_API_URL` con los campos del formulario (nombre, email, teléfono, asunto, mensaje).
- **Backend:** `api/contact.ts` recibe el POST, valida los datos y usa el SDK de Resend para enviar un email a `RESEND_TO_EMAIL` con el contenido del formulario; el reply-to es el email del usuario.
- **Variables:**
  - En **.env** (frontend): `VITE_CONTACT_API_URL`.
  - En **Vercel** (backend): `RESEND_API_KEY`, `RESEND_TO_EMAIL`, y opcionalmente `RESEND_FROM_EMAIL`.

Si quieres usar otro backend (Netlify Functions, Cloudflare Workers, etc.), mantén el mismo contrato: POST JSON con `nombre`, `email`, `telefono`, `asunto`, `mensaje` y respuestas JSON en éxito/error; dentro de ese backend puedes llamar a la API de Resend de la misma forma.

---

## Solución de problemas

### "Campos incompletos" o "Teléfono inválido" con datos rellenados

- **Teléfono:** El formulario acepta **9–20 dígitos** (p. ej. móvil español `000 000 000`). Si antes pedía 10 dígitos, actualiza el código; la validación ya permite 9.
- **Nombre:** Mínimo 2 caracteres; solo letras, espacios, guiones y apóstrofes.
- **Asunto:** Mínimo 3 caracteres.
- **Mensaje:** Mínimo 10 caracteres.

Si un campo sigue fallando, el mensaje de error indica qué campo corregir (nombre, email, teléfono, asunto o mensaje).

### "Error de conexión"

1. **URL del API:** `VITE_CONTACT_API_URL` debe ser la URL **completa** de tu API en Vercel, por ejemplo:  
   `https://tu-proyecto.vercel.app/api/contact`  
   No uses una ruta relativa (`/api/contact`) si el sitio está en otro dominio (p. ej. GitHub Pages).
2. **Build:** La variable se inyecta en **tiempo de build**. Si usas GitHub Pages, configura `VITE_CONTACT_API_URL` en **GitHub → repo → Settings → Secrets and variables → Actions → Variables** y asegúrate de que el workflow de deploy hace el build con esa variable.
3. **API desplegada:** En Vercel, comprueba que el último deployment ha terminado bien y que en **Project → Settings → Environment Variables** tienes `RESEND_API_KEY` y `RESEND_TO_EMAIL` para el entorno de producción.
4. **CORS:** La API responde con `Access-Control-Allow-Origin: *`; si usas otro backend, debe permitir peticiones desde el origen de tu web.
5. **Red:** Abre la pestaña **Network** del navegador al enviar; si la petición a `api/contact` falla (timeout, 404, 502), revisa la URL y el estado del deployment en Vercel.
