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
