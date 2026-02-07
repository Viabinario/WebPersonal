# Imágenes originales para el lightbox (contenido legible)

Las imágenes que se muestran en los casos de estudio (Case1, Case2) pueden abrirse ampliadas en un lightbox. Para que el contenido sea **legible** (texto, diagramas, etc.), aquí puedes colocar versiones en **alta resolución o tamaño original** de las mismas imágenes.

## Convención

- **Mismo nombre de archivo** que en `src/assets/`.
- Ejemplo: si en el caso se usa `src/assets/ece298d0ec2c16f10310d45724b276a6035cb503.png`, la versión legible debe llamarse:
  - `public/originals/ece298d0ec2c16f10310d45724b276a6035cb503.png`

Al hacer clic en una imagen del caso, el lightbox intenta cargar primero la imagen desde `originals/`. Si existe, se muestra esa (más legible). Si no existe, se muestra la imagen del caso.

## Cómo añadir imágenes originales

1. Copia las imágenes originales (alta resolución o tamaño completo) a esta carpeta.
2. Nómbralas exactamente igual que en `src/assets/` (el nombre viene del hash del asset, p. ej. `037303b6b1de60b5b46c711eb2f0e126520f42b0.png`).
3. No hace falta modificar código: el lightbox las usará automáticamente.
