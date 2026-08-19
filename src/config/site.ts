// ─────────────────────────────────────────────────────────────────────────
// Configuración central del sitio y del tema.
// Esto reemplaza el panel "Theme settings" de Ghost: acá se tocan colores,
// tipografía, textos del footer y redes sociales sin tener que ir a buscar
// clases CSS por todos lados.
// ─────────────────────────────────────────────────────────────────────────

export const site = {
  title: 'La Jirafa Eléctrica',
  tagline: 'Fanzine digital de Bujía Project Music',
  description:
    'Fanzine punk/DIY de reparación y construcción de instrumentos — Bujía Project Music (Ripper), Texcoco.',
  lang: 'es',
  locale: 'es_MX',
};

export const social = {
  instagram: '',
  whatsapp: '',
  discord: '',
  email: '',
};

// ─────────────────────────────────────────────────────────────────────────
// Config del sitio del TALLER (Bujía Project Music) — header y elementos
// comunes de las páginas de taller/servicios, separado del fanzine.
// Todo lo que aparece en el header (logo, redes, menú, botón de cuenta,
// íconos del header fijo) se controla desde acá, sin tocar el componente.
// ─────────────────────────────────────────────────────────────────────────
export const taller = {
  logo: {
    // Si `image` tiene un path (relativo a /public, ej. "/img/logo.svg"),
    // se usa esa imagen. Si se deja vacío, se usa `text` con el estilo
    // "cursiva en óvalo" del diseño como placeholder.
    text: 'Bujía',
    image: '',
    alt: 'Bujía Project Music',
    href: '/',
    // Color del óvalo y del texto placeholder (independiente del --accent
    // del resto del sitio). No aplica si `image` está seteado.
    color: '#ff5b52',
  },

  // Redes sociales que aparecen como íconos en el header completo.
  // `name` debe existir en <Icon /> (facebook | instagram | whatsapp).
  social: [
    { name: 'facebook', href: 'https://facebook.com/', label: 'Facebook' },
    { name: 'instagram', href: 'https://instagram.com/', label: 'Instagram' },
    { name: 'whatsapp', href: 'https://wa.me/', label: 'WhatsApp' },
  ] as { name: 'facebook' | 'instagram' | 'whatsapp'; href: string; label: string }[],

  // Ítems del menú principal (barra tipo píldora / menú fijo al hacer scroll).
  nav: [
    { label: 'Home', href: '/taller' },
    { label: 'Nosotros', href: '/taller/nosotros' },
    { label: 'Servicios', href: '/taller/servicios' },
    { label: 'Archive', href: '/taller/archive' },
  ],

  // Buscador (ícono de lupa) en el header completo.
  search: {
    enabled: true,
  },

  // Botón/link de cuenta ("UNIRSE") en el header completo.
  account: {
    enabled: true,
    label: 'Unirse',
    href: '/taller/unirse',
  },

  // Íconos del header FIJO que aparece al scrollear hacia abajo
  // (reemplaza al header completo mientras se navega la página).
  fixedHeader: {
    home: { enabled: true, href: '/taller' },
    share: { enabled: true },
    search: { enabled: true },
  },
};

// Los 4 esquemas de color punk (rosa / ácido / azul / negro) que ya usás
// en los snippets de Ghost para los títulos de sección tipo sticker.
// Cambiá los hex acá y se propagan a todo el sitio (--ink / --accent / --paper
// de cada esquema están definidos en src/styles/tokens.css).
export const colorSchemes = {
  rosa: {
    ink: '#1a1a1a',
    accent: '#ff2f92',
    paper: '#fff0f6',
  },
  acido: {
    ink: '#1a1a1a',
    accent: '#d4ff2f',
    paper: '#f7ffe0',
  },
  azul: {
    ink: '#1a1a1a',
    accent: '#2f6bff',
    paper: '#eaf1ff',
  },
  negro: {
    ink: '#ffffff',
    accent: '#ffcc00',
    paper: '#111111',
  },
} as const;

export type ColorSchemeName = keyof typeof colorSchemes;

// Colores base del sitio (fuera del contenido de los posts): equivalen a
// background_color / main_color del package.json del theme Xoxo original.
export const baseTheme = {
  background: '#fff5cf',
  main: '#ffcc00',
  ink: '#000000',
};

// Tipografía. bodyFont es Space Mono como en el theme actual; headFont queda
// separado por si en algún volumen querés un display distinto.
export const fonts = {
  body: '"Space Mono", ui-monospace, monospace',
  head: '"Space Mono", ui-monospace, monospace',
};

// Tamaño de página para exportar volúmenes a PDF (mismo formato que ya
// definiste en Code Injection: 5.5in x 8.5in, cero márgenes horizontales).
export const printPage = {
  width: '5.5in',
  height: '8.5in',
};
