# NovaTech — Web de muestra (Astro)

Tienda de tecnología de demostración: diseño moderno con gradientes y glassmorphism, buscador en vivo, filtros por categoría, ordenación y carrito de compras con persistencia (localStorage).

## Cómo ejecutarla

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # genera el sitio estático en dist/
```

## Estructura

```
src/
├── data/products.js        ← CAPA DE DATOS (aquí se conecta WP headless)
├── layouts/Layout.astro    ← HTML base + estilos globales
├── components/
│   ├── Header.astro        ← logo, buscador, botón carrito
│   ├── Hero.astro
│   ├── ProductCard.astro
│   ├── CartDrawer.astro    ← panel lateral del carrito + toast
│   └── Footer.astro
└── pages/index.astro       ← página principal + JS (filtros, carrito)
```

## Conectar a WordPress headless

Los productos viven en `src/data/products.js` como datos locales. Para usar WP:

1. En WP instala **ACF** (campos: precio, etc.) y opcionalmente **WPGraphQL**, y crea un Custom Post Type `producto`.
2. Reemplaza el array por un fetch en `products.js` (hay un ejemplo comentado en el archivo) usando la REST API (`/wp-json/wp/v2/producto?_embed`) o WPGraphQL.
3. En `index.astro` cambia el import por `const products = await getProducts()` — Astro hace el fetch en build (SSG). Para contenido siempre fresco, usa `output: 'server'` con un adapter en `astro.config.mjs`.

El carrito y el buscador son client-side y funcionan igual con cualquier fuente de datos.
