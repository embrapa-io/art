# Embrapa I/O Forge

Identidade visual do Forge: a logo do Embrapa I/O sem alteração, seguida da palavra **forge** em letras robustas, com
o "r" desenhado como bigorna, o martelo batendo sobre ele e faíscas no roxo da marca.

## `logo/`

Lockup horizontal (logo do Embrapa I/O + forge) e a palavra isolada (`wordmark`), em SVG.

| Variante | Uso | Cores |
| --- | --- | --- |
| `light` | fundo claro | cinza `#373737` + roxo `#8001FF` |
| `dark` | fundo escuro | branco + faíscas `#B98AFF` |
| `mono-black` / `mono-white` | uma cor só | preto ou branco |

`png/` tem os lockups claro e escuro com 120 e 480 px de altura.

O "forge" tem a mesma altura-x do "embrapa". Como o martelo e as faíscas sobem um pouco acima dela, o SVG tem margem
extra no topo.

## `icon/`

- `detailed`: a partir de 192 px (tela inicial, materiais).
- `simple`: favicon e tamanhos pequenos.

Cores: `purple`, `gray`, `white` e `mono-black`.

## `web/`

Favicons, ícones do PWA e `manifest.webmanifest`, para copiar na raiz pública de `forge.embrapa.io`:

```html
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/manifest.webmanifest">
<meta name="theme-color" content="#8001FF">
```

## Cores

- Cinza do texto: `#373737`
- Roxo da marca: `#8001FF`
- Roxo claro (faíscas no escuro): `#B98AFF`

Desenhada com o Claude Design em 21/10/2026.
