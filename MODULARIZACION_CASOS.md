# Modularización de Casos de Estudio

Los archivos `Case1.tsx` y `Case2.tsx` comparten elementos que, según la arquitectura del sitio, pertenecen a un nivel superior (común a todos los casos). Este documento describe la estrategia para modularizar y editar el contenido en un solo lugar.

## Problema

- **ProfilePhoto**, **BoxText**, **ContentBodySideLeft**, **ContentCenter**, **LogoSocialNetworks** (y variantes) se repiten de forma idéntica o casi idéntica en Case1 y Case2.
- El texto de presentación (Lorem ipsum en BoxText) y la foto de perfil son los mismos en ambos casos.
- Cualquier cambio (texto, foto, estilos de la barra de redes) obliga a tocar dos archivos.

## Solución: componentes compartidos

1. **Módulo `case-shared`** (`src/components/case-shared/`):
   - Contiene los componentes comunes a todos los casos: **ContentBodySideLeft**, **ProfilePhoto**, **ContentProfilePhoto**, **BoxText**, **ContentBoxText**, **ContentForm**, **ContentCenter**, **LogoSocialNetworks** (parametrizado con `src`), **BorderLogoSocialNetworkd**, **ContentIcon**, **ContentSocialButton**.
   - Importa **una sola vez** los assets compartidos (foto de perfil, logos de redes) desde `src/assets/`.
   - Expone un **único texto** de introducción (por ejemplo `CASE_INTRO_TEXT`) para BoxText, de modo que se edite en un solo sitio.

2. **Case1.tsx y Case2.tsx**:
   - Importan desde `case-shared` los componentes anteriores.
   - Solo definen lo **específico del caso**: imágenes del caso (case1-NN, case2-NN), flujo del use case, frames y contenido propio del proyecto.

3. **Edición única**:
   - **Foto de perfil:** cambiar en `case-shared` (o en el asset en `src/assets/`).
   - **Texto de la caja (BoxText):** editar `CASE_INTRO_TEXT` (o el contenido que use BoxText) en `case-shared`.
   - **Logos de redes:** cambiar assets o props en `case-shared`; los casos no tocan logos.
   - **Contenido propio de cada caso:** seguir editando solo en Case1 o Case2 (imágenes, pasos del caso, etc.).

## Estructura resultante

```
src/
  assets/                 # Assets globales (foto, logos) y por caso (case1/, case2/)
  components/
    case-shared/          # Componentes compartidos de los casos
      index.tsx           # Exporta ProfilePhoto, BoxText, ContentCenter, logos, etc.
    CasosEstudioSection.tsx
  imports/
    Case1.tsx             # Importa case-shared + solo lógica/imágenes del caso 1
    Case2.tsx             # Importa case-shared + solo lógica/imágenes del caso 2
```

## Beneficios

- **Una sola fuente de verdad** para perfil, texto de introducción y redes en los casos.
- **Menos duplicación** y archivos más cortos y fáciles de mantener.
- **Cambios centralizados:** actualizar texto o estilo común en `case-shared` y se refleja en todos los casos.

## Próximos pasos opcionales

- **Contenido por caso:** si en el futuro BoxText o la intro fueran distintas por caso, se puede pasar `introText` como prop desde Case1/Case2 al componente compartido.
- **Datos en JSON/constants:** mover textos (y enlaces de redes) a `src/data/case-content.ts` o similar para editar todo el contenido en un único archivo de datos.
