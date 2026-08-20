# Componentes para posts (guía de uso)

Elementos reutilizables para armar el contenido de los posts y entradas
del sitio (bitácora en `src/content/journal/`, descripciones de
`src/content/catalog/`, bloques de `src/content/about/` y los posts del
fanzine en `src/content/posts/`). Viven en `src/components/content/` y
están pensados para usarse **dentro del cuerpo de un `.md`/`.mdx`**, junto
con texto normal en Markdown.

## Cómo se usan

1. Tu archivo tiene que ser `.mdx` (no `.md` a secas) para poder importar
   y usar estos componentes — los `.md` sólo soportan Markdown plano.
2. Arriba del todo del archivo, después del frontmatter (`---`), importá
   los que vayas a usar:

   ```mdx
   ---
   title: 'Restauramos una Strat de los 90'
   date: 2026-06-01
   tag: 'Desde el taller'
   cover: '/img/strat-cover.jpg'
   ---

   import PostCover from '../../components/content/PostCover.astro';
   import ImageSide from '../../components/content/ImageSide.astro';
   import Quote from '../../components/content/Quote.astro';

   <PostCover variant="stamp" title="Restauración" tag="Strat '92" colorScheme="acido" />

   Llegó rota de un lado a otro...
   ```

3. La ruta de import (`../../components/content/...`) es la misma sin
   importar en qué colección estés (`journal`, `catalog`, `about`,
   `posts`) — todas viven un nivel adentro de `src/content/`.

Todo lo que sigue son ejemplos copiar/pegar. Los props sin `?` son
obligatorios.

---

## 1. Portadas de post (`PostCover`)

Título grande para abrir un post o una sección larga. 5 variantes:

```mdx
import PostCover from '../../components/content/PostCover.astro';

{/* Sticker: fondo punteado + título tipo calcomanía con sombra dura */}
<PostCover variant="sticker" title="Diario de taller" tag="Vol. 04" colorScheme="acido" />

{/* Stamp: sello de goma, borde doble, todo rotado */}
<PostCover variant="stamp" title="Restaurado" tag="Strat '92" />

{/* Tape: cinta pegada con bordes en zigzag */}
<PostCover variant="tape" title="Sesión en vivo" subtitle="Mayo 2026" colorScheme="rosa" />

{/* Xerox: fotocopiado con un "fantasma" del título detrás, fondo negro */}
<PostCover variant="xerox" title="Fierros y fuzz" tag="Zine" />

{/* Flyer: cartel de tocada, bloque diagonal partido a dos colores */}
<PostCover variant="flyer" title="16 de mayo" tag="Live" colorScheme="azul" />
```

Props: `title` (obligatorio), `subtitle?`, `tag?`, `variant?` (`sticker` |
`stamp` | `tape` | `xerox` | `flyer`, default `sticker`), `colorScheme?`
(`rosa` | `acido` | `azul` | `negro`).

---

## 2. Imágenes

```mdx
import ImageFull from '../../components/content/ImageFull.astro';
import ImageSide from '../../components/content/ImageSide.astro';
import PhotoOld from '../../components/content/PhotoOld.astro';
import Xerox from '../../components/content/Xerox.astro';
import Gallery from '../../components/content/Gallery.astro';
import BeforeAfter from '../../components/content/BeforeAfter.astro';
```

- **`ImageFull`** — foto grande a todo el ancho, tipo portada.
  ```mdx
  <ImageFull src="/img/telecaster-final.jpg" alt="Telecaster terminada" caption="Terminada, mayo 2026" />
  ```
- **`ImageSide`** — foto a la izquierda o derecha, el texto la rodea. Metela
  en medio de tus párrafos.
  ```mdx
  <ImageSide src="/img/pastilla.jpg" alt="Pastilla rebobinada" side="left" caption="Rebobinado a mano" />

  Acá seguís escribiendo el párrafo normal, que va a fluir al lado de la foto...
  ```
  Si necesitás cortar el flujo de texto después (por ejemplo antes de un
  `<Divider />` o un `<PostCover />`), agregá `<div style="clear:both" />`.
- **`PhotoOld`** — sepia, viñeta, cinta en las esquinas, para fotos de
  archivo o de hace años.
  ```mdx
  <PhotoOld src="/img/taller-2019.jpg" alt="El taller en 2019" caption="El local, 2019" tilt={2} />
  ```
- **`Xerox`** — foto fotocopiada: blanco y negro de alto contraste, grano y
  sello de "COPIA".
  ```mdx
  <Xerox src="/img/ampli.jpg" alt="Ampli desarmado" caption="Antes de abrirlo" />
  ```
- **`Gallery`** — grilla de fotos tipo "tiradas en la mesa", cada una con
  su propia inclinación.
  ```mdx
  <Gallery images={[
    { src: '/img/proceso-1.jpg', alt: 'Cortando el cuerpo' },
    { src: '/img/proceso-2.jpg', alt: 'Lijando', caption: 'Tres horas de lija' },
    { src: '/img/proceso-3.jpg', alt: 'Pintado' },
  ]} />
  ```
- **`BeforeAfter`** — dos fotos lado a lado con etiquetas, para
  reparaciones/restauraciones.
  ```mdx
  <BeforeAfter before="/img/antes.jpg" after="/img/despues.jpg" alt="Guitarra restaurada" />
  ```

Ya existe además **`Polaroid`** (en `src/components/Polaroid.astro`,
usado en los posts del fanzine) si querés el look clásico de foto
Polaroid con marco blanco:

```mdx
import Polaroid from '../../components/Polaroid.astro';

<Polaroid src="/img/taller-1.jpg" alt="Rebobinando una pastilla" caption="Marzo 2026" tilt={-4} />
```

---

## 3. Encabezados (h2/h3/h4)

No hace falta ningún componente — escribí `##`, `###` o `####` normal en
Markdown y ya salen con estilo punk (siempre que estén dentro de
`.post-body`, que es como se renderizan todos los posts/fichas del
sitio):

```md
## Este es un h2

Se ve grande, en mayúsculas, con la tipografía Anton y una línea gruesa abajo.

### Este es un h3

Sale como un sticker chico con fondo de acento, levemente inclinado.

#### Este es un h4

Sale chico, en mayúsculas, con un `//` al principio (estilo comentario de código).
```

---

## 4. Columnas (`Columnas`)

Ya existía (`src/components/Columnas.astro`), reusalo para cortar un
bloque de texto en 2 o 3 columnas y después seguir en una sola columna
normal — simplemente cerrá el tag y seguís escribiendo abajo:

```mdx
import Columnas from '../../components/Columnas.astro';

<Columnas n={2}>
Acá va el texto que querés en 2 columnas. Podés escribir varios
párrafos normales adentro del bloque.

Este es otro párrafo, sigue dentro de las columnas.
</Columnas>

Y acá ya seguís en una sola columna, como cualquier párrafo normal.
```

Usá `n={3}` para 3 columnas. En mobile siempre cae a 1 columna sola.

---

## 5. Videos (`VideoOldTV`, `VideoCinema`)

Para meter un iframe de YouTube. Pasale sólo el ID del video (lo que
sigue a `v=` en la URL de YouTube), no la URL completa.

```mdx
import VideoOldTV from '../../components/content/VideoOldTV.astro';
import VideoCinema from '../../components/content/VideoCinema.astro';

{/* Tele vieja: marco grueso, antena, perillas, brillo CRT */}
<VideoOldTV id="dQw4w9WgXcQ" title="Tributo a Lagwagon en el taller" />

{/* Cine viejo: perforaciones de rollo a los costados + claqueta arriba */}
<VideoCinema id="dQw4w9WgXcQ" title="Sesión en vivo" clap="Toma 1" />
```

---

## 6. Separadores (`Divider`)

```mdx
import Divider from '../../components/content/Divider.astro';

<Divider variant="zigzag" />  {/* dientes de sierra, como el header */}
<Divider variant="dashed" />  {/* línea punteada gruesa */}
<Divider variant="stars" />   {/* ✦ ✦ ✦ */}
<Divider variant="tape" />    {/* tira de cinta de color */}
```

---

## 7. Citas y notas (`Quote`, `Note`)

```mdx
import Quote from '../../components/content/Quote.astro';
import Note from '../../components/content/Note.astro';

<Quote cite="Ale, cliente del taller">
Quedó sonando mejor que nueva.
</Quote>

<Note variant="note">
Este circuito lo armamos con partes recicladas de tres pedales rotos.
</Note>

<Note variant="warning">
Ojo: este circuito lleva 18V, no 9V.
</Note>

<Note variant="tip" title="Tip del taller">
Si tu pastilla suena apagada, probá primero limpiando los contactos.
</Note>
```

`Note` acepta `title?` para reemplazar la etiqueta default ("Nota" /
"Ojo" / "Tip" según `variant`).

---

## 8. Portadas dentro de una página suelta (`PageCover`)

Para páginas sueltas tipo "Nosotros" — la página en sí se ve como
cualquier otra del sitio (título arriba, contenido en columna de
lectura, dentro de `.container`), **no** toma el formato de fanzine.
`PageCover` es un bloque más dentro de ese contenido: una tarjeta con
foto de fondo y título encima, con el mismo borde/radio que el resto de
tarjetas del sitio (no se sale del ancho de la página). Se puede meter
una o varias veces entre los párrafos para separar secciones.

```mdx
import PageCover from '../../components/content/PageCover.astro';

{/* cover: banner grande, para abrir la página o una sección larga */}
<PageCover
  variant="cover"
  src="/img/taller-fachada.jpg"
  alt="Fachada del taller"
  tag="Bujía Project Music"
  title="Quiénes somos"
/>

{/* band: franja más chica y centrada, para cortar el texto a la mitad */}
<PageCover
  variant="band"
  src="/img/banco-de-trabajo.jpg"
  alt="Banco de trabajo del taller"
  title="Hecho a mano, sin atajos"
  colorScheme="acido"
/>

{/* insert: recuadro tipo foto pegada, un poco rotado, con caption chico */}
<PageCover
  variant="insert"
  src="/img/detalle-pastilla.jpg"
  alt="Detalle de una pastilla rebobinada"
  tag="Desde el taller"
  title="Lo que hacemos"
/>
```

Props: `src` y `alt` (obligatorios), `title?`, `tag?`, `subtitle?`,
`variant?` (`cover` | `band` | `insert`, default `cover`), `colorScheme?`
(`rosa` | `acido` | `azul` | `negro`), `overlay?` (boolean, default
`true` — apagalo si la foto ya es oscura y no necesita el degradé).

---

## Dónde se pueden usar

Cualquier colección de contenido (necesita ser `.mdx`, no `.md`):

- `src/content/posts/` — posts del fanzine
- `src/content/journal/` — bitácora del taller (se ve en `/archive`)
- `src/content/catalog/` — descripción larga de productos/servicios (se
  ve en `/catalogo/[slug]`)
- `src/content/about/` — bloques "¿Qué es...?" del home
- `src/content/pages/` — páginas sueltas del sitio (Nosotros, Privacidad,
  etc). Cada archivo `.mdx` de acá se sirve desde su `.astro`
  correspondiente en `src/pages/` vía `PageLayout` (ver
  `src/pages/nosotros.astro` como ejemplo). Para agregar otra página
  suelta en MDX: creá el `.mdx` acá, y en su `.astro` reemplazá el
  contenido fijo por `getEntry('pages', 'slug-del-archivo')` +
  `<PageLayout>` como en `nosotros.astro`.
