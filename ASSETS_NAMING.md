# Nomenclatura de imágenes de Casos de Estudio

Las imágenes de los casos de estudio siguen una numeración consistente para facilitar su identificación y mantenimiento.

## Convención

- **Caso 1:** `case1-01.png` … `case1-34.png` (dos dígitos, orden de aparición en el caso).
- **Caso 2:** `case2-01.png` … `case2-23.png`.
- **Carpetas:** `src/assets/case1/` y `src/assets/case2/`.
- **Originales (lightbox):** Si existe `public/originals/case1-NN.png` o `case2-NN.png`, el modal de detalle cargará esa versión en alta resolución.

## Caso 1 – Mapeo (nombre anterior → nuevo)

| Nº | Nuevo nombre   | Nombre/variable en código (referencia) |
|----|----------------|----------------------------------------|
| 01 | case1-01.png   | MacBook Air                            |
| 02 | case1-02.png   | iPad Pro                               |
| 03 | case1-03.png   | iPhone 16 Pro Max                      |
| 04 | case1-04.png   | ContentImage (portada)                  |
| 05 | case1-05.png   | ContentImage1                           |
| 06 | case1-06.png   | Visual Roadmap Design                   |
| 07 | case1-07.png   | ContentImage2                           |
| 08 | case1-08.png   | ContentImage3                           |
| 09 | case1-09.png   | ContentImage4                           |
| 10 | case1-10.png   | Estructura de encuesta                  |
| 11 | case1-11.png   | Image12                                 |
| 12 | case1-12.png   | ContentImage5                           |
| 13 | case1-13.png   | Personas                                |
| 14 | case1-14.png   | Arquetipo                               |
| 15 | case1-15.png   | User adulto mayor                       |
| 16 | case1-16.png   | Mapa empatía                            |
| 17 | case1-17.png   | Business Model Canvas                   |
| 18 | case1-18.png   | Value Proposition Kora                  |
| 19 | case1-19.png   | PoV                                     |
| 20 | case1-20.png   | MoSCoW Kora                             |
| 21 | case1-21.png   | ContentImage6                           |
| 22 | case1-22.png   | Idea estructura 1                       |
| 23 | case1-23.png   | Card sorting                            |
| 24 | case1-24.png   | Arquitectura                            |
| 25 | case1-25.png   | Wireframe                               |
| 26 | case1-26.png   | Visual                                  |
| 27 | case1-27.png   | Idea estructura 2                       |
| 28 | case1-28.png   | Style / color                           |
| 29 | case1-29.png   | Fonts                                   |
| 30 | case1-30.png   | Grid style                              |
| 31 | case1-31.png   | Variables                               |
| 32 | case1-32.png   | Com img                                 |
| 33 | case1-33.png   | Prototype                               |
| 34 | case1-34.png   | Testeo                                  |

## Caso 2 – Mapeo (nombre anterior → nuevo)

| Nº | Nuevo nombre   | Nombre/variable en código (referencia) |
|----|----------------|----------------------------------------|
| 01 | case2-01.png   | ContentImage (portada)                  |
| 02 | case2-02.png   | Design Sprint                           |
| 03 | case2-03.png   | Sprint Question                         |
| 04 | case2-04.png   | Brainstorming                           |
| 05 | case2-05.png   | HMW                                     |
| 06 | case2-06.png   | User Persona                            |
| 07 | case2-07.png   | Acciones                                |
| 08 | case2-08.png   | Logo                                    |
| 09 | case2-09.png   | Moodboard                               |
| 10 | case2-10.png   | Lightning Demos                         |
| 11 | case2-11.png   | Crazy 8                                 |
| 12 | case2-12.png   | Decision 2                              |
| 13 | case2-13.png   | C8                                      |
| 14 | case2-14.png   | Ideas 2                                 |
| 15 | case2-15.png   | Storyboard                              |
| 16 | case2-16.png   | Prototipado                             |
| 17 | case2-17.png   | Colores/tipo                            |
| 18 | case2-18.png   | Components                              |
| 19 | case2-19.png   | Arquitectura 2                          |
| 20 | case2-20.png   | Interfaz                                |
| 21 | case2-21.png   | Mock test                               |
| 22 | case2-22.png   | Testing / feedback                      |
| 23 | case2-23.png   | Futuribles                              |

## Cómo se aplicó la nomenclatura

1. **Script de copia:** `scripts/rename-case-assets.cjs` copia cada archivo con hash a su nombre numerado (`case1-01.png` … `case2-23.png`) en `src/assets/case1/` y `src/assets/case2/`.
2. **Imports:** En `src/imports/Case1.tsx` y `Case2.tsx` los imports apuntan a esos nombres (`case1-NN.png`, `case2-NN.png`). Las variables en código (ej. `imgContentImage`) se mantienen.
3. **Originales:** Si tenías `public/originals/` con archivos por hash, renómbralos al nuevo esquema (ej. `0bc35c4b...png` → `case1-06.png`) para que el lightbox cargue la versión en alta resolución.
4. **Limpieza opcional:** Tras comprobar que todo funciona, puedes borrar los archivos con hash en `src/assets/case1/` y `case2/` (quedan los `case1-NN.png` y `case2-NN.png`).

## Uso de originales (lightbox)

Para que una imagen se abra en alta resolución en el modal al hacer clic:

1. Coloca una copia en alta resolución en `public/originals/` con el **mismo nombre** que en assets (ej. `case1-06.png`, `case2-01.png`).
2. El lightbox cargará primero la de `originals/` y, si falla, usará la de `assets/`.

Ejemplo: si en el caso 1 la imagen 06 es “Visual Roadmap Design”, pon la versión grande en `public/originals/case1-06.png`.
