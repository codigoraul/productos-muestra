// ============================================================
// CAPA DE DATOS — Demo con datos locales
// ------------------------------------------------------------
// Para conectar a WordPress headless, reemplaza este array por
// un fetch a la REST API de WP o a WPGraphQL. Ejemplo:
//
// export async function getProducts() {
//   const res = await fetch('https://tu-wp.com/wp-json/wp/v2/producto?_embed&per_page=50');
//   const data = await res.json();
//   return data.map(p => ({
//     id: p.id,
//     nombre: p.title.rendered,
//     precio: Number(p.meta.precio),
//     imagen: p._embedded['wp:featuredmedia']?.[0]?.source_url,
//     ...
//   }));
// }
// ============================================================

const img = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=80`;

export const products = [
  { id: 1,  nombre: 'Auriculares Aurora Pro',   categoria: 'Audio',      precio: 139990, precioAnterior: 189990, rating: 4.8, reviews: 1243, badge: '-25%',
    imagen: img('1505740420928-5e560c06d30e'),
    galeria: [img('1505740420928-5e560c06d30e'), img('1484704849700-f032a568e944'), img('1546435770-a3e426bf472b'), img('1618366712932-609919271aca')],
    descripcion: 'Cancelación activa de ruido, 40 horas de batería y sonido Hi-Res certificado. Diseñados para quienes exigen la mejor experiencia de audio en cualquier lugar.' },
  { id: 2,  nombre: 'Smartwatch Nebula X',      categoria: 'Relojes',    precio: 219990, precioAnterior: null,   rating: 4.7, reviews: 876,  badge: 'Nuevo',
    imagen: img('1523275335684-37898b6baf30'),
    galeria: [img('1523275335684-37898b6baf30'), img('1508685096489-7aacd43bd3b1'), img('1434493789847-2f02dc6ca35d'), img('1579586337278-3befd40fd17a')],
    descripcion: 'Pantalla AMOLED siempre activa, GPS de doble banda y monitoreo de salud 24/7 con electrocardiograma y oxígeno en sangre.' },
  { id: 3,  nombre: 'Teclado Mecánico Prism',   categoria: 'Gaming',     precio: 109990, precioAnterior: 134990, rating: 4.9, reviews: 2105, badge: 'Top ventas',
    imagen: img('1587829741301-dc798b83add3'),
    galeria: [img('1587829741301-dc798b83add3'), img('1616588589676-62b3bd4ff6d2'), img('1541140532-d3a3ac71bf7e'), img('1593642632559-0c6d3fc62b89')],
    descripcion: 'Switches hot-swap, retroiluminación RGB por tecla y estructura de aluminio aeronáutico. La herramienta definitiva para gaming y productividad.' },
  { id: 4,  nombre: 'Mouse Quantum Glide',      categoria: 'Gaming',     precio: 74990,  precioAnterior: null,   rating: 4.6, reviews: 654,  badge: null,
    imagen: img('1527814050087-3793815479db'),
    galeria: [img('1527814050087-3793815479db'), img('1612287230202-1ff1d85d1bdf'), img('1563203369-26f2e4a5ccf7'), img('1593640408182-41280deee285')],
    descripcion: 'Sensor óptico de 26.000 DPI, solo 59 gramos de peso y batería de 90 horas. Precisión profesional para esports.' },
  { id: 5,  nombre: 'Dron AeroVision 4K',       categoria: 'Cámaras',    precio: 469990, precioAnterior: 569990, rating: 4.5, reviews: 432,  badge: '-17%',
    imagen: img('1473968512647-3e447244af8f'),
    galeria: [img('1473968512647-3e447244af8f'), img('1508614589041-895b88991e3e'), img('1486611367184-b91f20c8f3b2'), img('1534278854415-3ed11e5a75e5')],
    descripcion: 'Cámara 4K HDR estabilizada en 3 ejes, 34 minutos de vuelo y sistema inteligente de evasión de obstáculos.' },
  { id: 6,  nombre: 'Altavoz Pulse 360',        categoria: 'Audio',      precio: 84990,  precioAnterior: null,   rating: 4.4, reviews: 980,  badge: null,
    imagen: img('1545454675-3531b543be5d'),
    galeria: [img('1545454675-3531b543be5d'), img('1608043152269-423dbba4e7e1'), img('1547891654-e656f6800d66'), img('1558618666-fcd25c85cd64')],
    descripcion: 'Sonido envolvente de 360°, resistencia al agua IP67 y 20 horas de reproducción. Perfecto para casa o exterior.' },
  { id: 7,  nombre: 'Cargador GaN Hyper 100W',  categoria: 'Accesorios', precio: 54990,  precioAnterior: 69990,  rating: 4.7, reviews: 1530, badge: '-20%',
    imagen: img('1498049794561-7780e7231661'),
    galeria: [img('1498049794561-7780e7231661'), img('1588359348347-9bc6cbbb689e'), img('1605464575587-e4db8edb46c8'), img('1583863788434-7fc7b18e8ec8')],
    descripcion: 'Tecnología GaN de última generación: 3 puertos USB-C y 1 USB-A para cargar tu portátil, tablet y móvil a la vez.' },
  { id: 8,  nombre: 'Monitor Curvo Galaxy 34"', categoria: 'Gaming',     precio: 619990, precioAnterior: null,   rating: 4.8, reviews: 312,  badge: 'Nuevo',
    imagen: img('1527443224154-c4a3942d3acf'),
    galeria: [img('1527443224154-c4a3942d3acf'), img('1593305841991-05c297ba4575'), img('1547082299-de196ea013d6'), img('1587202372775-e229f172b9d7')],
    descripcion: 'Panel UltraWide QHD de 34 pulgadas, 165 Hz de refresco, 1 ms de respuesta y certificación HDR400.' },
  { id: 9,  nombre: 'Hub USB-C Orbit 9 en 1',   categoria: 'Accesorios', precio: 42990,  precioAnterior: null,   rating: 4.3, reviews: 765,  badge: null,
    imagen: img('1498050108023-c5249f4df085'),
    galeria: [img('1498050108023-c5249f4df085'), img('1601737487795-dab272f52420'), img('1583864697784-a0efc8379f70'), img('1588539463788-0dbdc5e9c7e4')],
    descripcion: 'HDMI 4K a 60 Hz, Ethernet Gigabit, lector SD/microSD y carga pass-through de 100W en un diseño ultracompacto.' },
  { id: 10, nombre: 'Lámpara Smart Lumen',      categoria: 'Smart Home', precio: 37990,  precioAnterior: 47990,  rating: 4.5, reviews: 1102, badge: '-20%',
    imagen: img('1507473885765-e6ed057f782c'),
    galeria: [img('1507473885765-e6ed057f782c'), img('1558618666-fcd25c85cd64'), img('1507643153783-fe553c17bfc2'), img('1524484485831-a92ffc0de03f')],
    descripcion: '16 millones de colores, control por voz compatible con Alexa y Google Home, y escenas programables desde la app.' },
  { id: 11, nombre: 'SSD Portátil Nova 2TB',    categoria: 'Accesorios', precio: 169990, precioAnterior: null,   rating: 4.9, reviews: 540,  badge: 'Top ventas',
    imagen: img('1518770660439-4636190af475'),
    galeria: [img('1518770660439-4636190af475'), img('1601737487795-dab272f52420'), img('1496181133206-80ce9b88a853'), img('1563203369-26f2e4a5ccf7')],
    descripcion: 'Velocidades de hasta 2000 MB/s, conexión USB-C 3.2 y resistencia a caídas de 3 metros. Tus datos, seguros y rápidos.' },
  { id: 12, nombre: 'Gafas VR Horizon One',     categoria: 'Gaming',     precio: 379990, precioAnterior: null,   rating: 4.6, reviews: 289,  badge: 'Nuevo',
    imagen: img('1593508512255-86ab42a8e620'),
    galeria: [img('1593508512255-86ab42a8e620'), img('1622979135225-d2ba269cf1ac'), img('1617802690992-ab3ddb8bf50d'), img('1559163499-413811bdf30b')],
    descripcion: 'Resolución 4K por ojo, tracking inside-out sin sensores externos y audio espacial integrado. La nueva realidad.' }
];

export const categories = ['Todos', ...new Set(products.map(p => p.categoria))];

// Categorías con imagen y descripción (para la página /categorias)
export const categoryInfo = [...new Set(products.map(p => p.categoria))].map((nombre) => {
  const items = products.filter((p) => p.categoria === nombre);
  return { nombre, imagen: items[0].imagen, count: items.length, descripcion: {
    'Audio': 'Auriculares y altavoces con sonido de alta fidelidad',
    'Relojes': 'Relojes y dispositivos inteligentes para tu día a día',
    'Gaming': 'Periféricos y equipos para llevar tu juego al siguiente nivel',
    'Cámaras': 'Drones y cámaras para capturar cada momento',
    'Accesorios': 'Complementos esenciales para tu ecosistema tech',
    'Smart Home': 'Convierte tu casa en un hogar inteligente',
  }[nombre] ?? '' };
});

export const PLACEHOLDER = 'https://placehold.co/900x700/e2e8f0/64748b?text=Producto';
