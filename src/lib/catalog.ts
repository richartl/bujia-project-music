import type { CollectionEntry } from 'astro:content';

// Categorías del catálogo (productos y servicios) agrupadas para mostrar
// como secciones separadas por tag, en vez de una sola grilla mezclada.
const CATEGORY_LABELS: Record<CollectionEntry<'catalog'>['data']['category'], string> = {
  producto: 'Productos',
  servicio: 'Servicios',
};

export function groupCatalogItems(items: CollectionEntry<'catalog'>[]) {
  return (Object.keys(CATEGORY_LABELS) as Array<keyof typeof CATEGORY_LABELS>)
    .map((key) => ({
      key,
      label: CATEGORY_LABELS[key],
      items: items.filter((item) => item.data.category === key),
    }))
    .filter((group) => group.items.length > 0);
}
