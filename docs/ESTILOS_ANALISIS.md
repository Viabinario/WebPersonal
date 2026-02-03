# Análisis: estilos y optimización CSS

## Estado actual

### 1. `src/index.css` (activo)
- **Se importa** en `main.tsx` y es el único CSS global que se carga.
- Incluye: directivas de Tailwind (`@tailwind base/components/utilities`), estilos base (border, body con bg `#f7f2ed`, texto `#362517`, Roboto).
- Es la **fuente real** de estilos globales del sitio.

### 2. `src/styles/globals.css` (no usado)
- **No está importado** en ningún archivo.
- Define variables CSS (`:root`, `.dark`) y `@theme inline` (estilo Tailwind v4 / shadcn): primary, secondary, muted, sidebar, etc., en oklch.
- No se usa en la app actual; parece un sistema de diseño (p. ej. shadcn) que no se integró.
- **Conclusión:** no aporta nada al sitio mientras no se importe; se puede ignorar o eliminar para evitar confusión.

### 3. `tailwind.config.js`
- Paleta del sitio ya definida: `beige-*`, `brown-*`, `gray-*`, `roboto`.
- Casi no se usa en componentes; en Case1/Case2 predominan valores arbitrarios (`#5a3e26`, `#f7f2ed`) y constantes en `case-shared`.

### 4. Estilos de casos (Case1 / Case2)
- Tipografía compartida en **`case-shared`**: constantes JS con nombres de clase (`CASE_CLASS_FORM_LABEL`, `CASE_CLASS_*`, `CASE_CLASS_FONT_WDTH`).
- Una sola fuente de verdad en **CSS** (`index.css`): las clases `.case-*` definen estilos y `font-variation-settings`; no se usa `style={}` en JSX para ello.

---

## ¿Es óptimo usar un CSS Module?

| Criterio | Constantes en JS (actual) | CSS Module (clases en .module.css) |
|----------|---------------------------|-------------------------------------|
| Una sola fuente de verdad | Sí (case-shared) | Sí (archivo .module.css) |
| Tamaño de JSX | Clases largas en constantes | Nombres cortos (`className={styles.titleMd}`) |
| Purge Tailwind | Clases en content (mismo repo) | Hay que asegurar que el módulo esté en `content` para que no se purguen clases usadas con @apply |
| `font-variation-settings` | En objeto `style` en JS | Se puede poner en la clase en CSS |
| Riesgo de romper layout | Bajo | Bajo si se migra con cuidado |

**Conclusión:** Un CSS Module **puede** ser óptimo si quieres concentrar la apariencia de los casos en CSS y dejar el JSX más limpio. No es obligatorio: el enfoque actual (constantes en `case-shared`) ya es mantenible y eficiente.

---

## Recomendación elegida: híbrido con `index.css`

Sin tocar el objetivo del sitio ni el layout:

1. **No usar `globals.css`** como base del sitio (no está conectado y usa otro sistema de diseño). Mantenerlo solo si más adelante se adopta ese sistema; si no, se puede borrar o dejar documentado que no se usa.

2. **Centralizar la tipografía de casos en `index.css`** (que sí se carga):
   - Añadir en `@layer components` clases semánticas (`.case-form-label`, `.case-title-sm`, `.case-title-md`, `.case-body-justify`, `.case-title-lg`) que replican los estilos actuales con `@apply` y el color del tema (`text-brown-dark`).
   - Incluir `font-variation-settings: 'wdth' 100` en esas clases para no depender del `style` en JS.

3. **Mantener `case-shared` como API pública:**
   - Exportar los mismos nombres (`CASE_CLASS_FORM_LABEL`, etc.) pero con valores que sean **solo nombres de clase** (p. ej. `"case-form-label"` o `"css-g0mm18 case-form-label"` si hace falta conservar la clase de Figma).
   - Case1 y Case2 no cambian de API; solo cambia que el estilo “vive” en CSS.

4. **Ventajas:**
   - Una sola fuente de verdad para **apariencia** de casos en CSS.
   - Uso del color del tema (`brown-dark`) en lugar de hex suelto.
   - JSX más legible (menos cadenas largas).
   - No se desmejora el objetivo del sitio: mismo diseño, misma estructura.

---

## Implementación realizada

- En **`index.css`** se añadieron clases en `@layer components`: `.case-form-label`, `.case-title-sm`, `.case-title-md`, `.case-body-justify`, `.case-title-lg`, con los mismos estilos que antes (usando `text-brown-dark` del `tailwind.config.js`) y `font-variation-settings: 'wdth' 100`. Se añadió la utility `.case-font-wdth` (solo `font-variation-settings: 'wdth' 100`) para elementos que no usan las otras `.case-*`.
- **`case-shared`** exporta nombres de clase (`CASE_CLASS_*`, `CASE_CLASS_FONT_WDTH`); el estilo real vive en CSS. Se eliminó `CASE_FONT_STYLE` (objeto `style`) para evitar repetición: todo se controla por clases.
- Case1 y Case2 usan solo `className={CASE_CLASS_*}` o `className="... case-font-wdth"`; se eliminaron **más de 165** usos de `style={CASE_FONT_STYLE}` para reducir código y centralizar en CSS.

## ¿Se pueden optimizar los className repetidos con CSS?

**Sí.** Los patrones de `className` que se repiten en muchas partes se pueden (y en este proyecto se han) centralizar en CSS:

1. **Clases semánticas en `index.css`** (`.case-form-label`, `.case-title-sm`, `.case-title-md`, `.case-body-justify`, `.case-title-lg`): sustituyen cadenas largas de Tailwind por un solo nombre de clase y concentran `font-variation-settings` en un sitio.
2. **Utility `.case-font-wdth`**: para elementos que solo necesitan la variación de fuente, sin repetir `style={}` en cada uno.
3. **Efecto:** menos código en JSX, una sola fuente de verdad en CSS, y cambios de tipografía/color en un solo archivo.

Para nuevos patrones que se repitan mucho, conviene añadir una clase en `@layer components` en `index.css` y usar una constante en `case-shared`.

---

## Resumen

- **`globals.css`:** no se usa; tiene comentario aclaratorio; se ignora o se elimina si no se adopta ese sistema.
- **`index.css`:** CSS global activo; concentra la tipografía compartida de casos en clases semánticas y la utility `.case-font-wdth`.
- **`case-shared`:** exporta nombres de clase que apuntan a las clases en `index.css`; no se usa `style={}` para variación de fuente.
- **CSS Module:** opción válida para encapsular por componente; para casos compartidos, el híbrido con `index.css` + constantes es la opción aplicada.
