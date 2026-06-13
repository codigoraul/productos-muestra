// Post-build: convierte las rutas absolutas "/productos-muestra/..." del HTML
// en rutas relativas con "./" según la profundidad de cada página.
// Así la home usa ./_astro/... y las subpáginas usan ../_astro/... y todo
// funciona aunque el sitio se sirva desde un subdirectorio.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, relative, dirname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(fileURLToPath(import.meta.url));
const DIST = join(ROOT, '..', 'dist');
const BASE = '/productos-muestra/';

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

function relPrefix(htmlFile) {
  // profundidad = nº de carpetas entre el archivo y dist
  const rel = relative(DIST, dirname(htmlFile));
  const depth = rel === '' ? 0 : rel.split(sep).length;
  return depth === 0 ? './' : '../'.repeat(depth);
}

// Solo relativizamos rutas de ASSETS (archivos con extensión: .css, .js, .webp,
// .svg, .png, .jpg, etc.). Los enlaces de navegación (/productos-muestra/nosotros/)
// se dejan absolutos para que el menú siga funcionando.
const ASSET_RE = /\/productos-muestra\/([^"')\s]+\.[a-zA-Z0-9]+)/g;

let count = 0;
for await (const file of walk(DIST)) {
  if (!file.endsWith('.html')) continue;
  const prefix = relPrefix(file);
  let html = await readFile(file, 'utf8');
  const replaced = html.replace(ASSET_RE, (_m, assetPath) => `${prefix}${assetPath}`);
  if (replaced !== html) {
    await writeFile(file, replaced, 'utf8');
    count++;
  }
}
console.log(`relativize: ${count} HTML con assets relativizados (enlaces siguen absolutos)`);
