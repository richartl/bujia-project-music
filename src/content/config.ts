import { defineCollection, z } from 'astro:content';

// Colección "posts": cada volumen del fanzine (o cualquier entrada de blog)
// es un archivo .mdx acá adentro. El frontmatter reemplaza los campos que
// antes venían de Ghost (title, tags, feature_image, etc).
const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // Número de volumen del fanzine. Opcional: posts que no son parte de
    // un volumen (ej. un post suelto) pueden omitirlo.
    volume: z.number().int().positive().optional(),
    date: z.date(),
    updated: z.date().optional(),
    // true = layout de fanzine (sin título/imagen default, todo lo controla
    // el propio MDX vía <Portada>, <SectionTitle>, etc — igual que el tag
    // #fanzine en Ghost). false = post normal tipo blog.
    fanzine: z.boolean().default(false),
    colorScheme: z.enum(['rosa', 'acido', 'azul', 'negro']).default('negro'),
    tags: z.array(z.string()).default([]),
    description: z.string().optional(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    author: z.string().default('Ripper'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
