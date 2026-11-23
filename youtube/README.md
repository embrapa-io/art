# Canal do Embrapa I/O no YouTube

Imagens do canal [youtube.com/@embrapa-io](https://www.youtube.com/@embrapa-io). Para trocar: YouTube Studio →
Personalização → Branding.

| Arquivo | Uso | Medidas |
| --- | --- | --- |
| `banner-2560x1440.jpg` | imagem do banner | 2560×1440 (recomendado; mínimo 2048×1152, até 6 MB) |
| `foto-perfil-800x800.png` | foto do perfil | 800×800 (mínimo 98×98, até 4 MB) |

## Banner

Mesma composição do banner de 2023, sem o selo «Embrapa 50 anos»: a foto do trigal das capas dos vídeos, a marca
`#embrapa.io` e a tríade atual (Embrapa · Ministério da Agricultura e Pecuária · Governo Federal), em vetor e em
resolução maior. O YouTube mostra recortes diferentes do mesmo arquivo: a TV mostra tudo, o computador só a faixa
central de 2560×423 e o celular a área segura de 1546×423 no centro. Marca e tríade ficam inteiras dentro da área segura.

- `previa/banner-area-segura.jpg`: o banner com a área segura marcada.
- `previa/banner-faixa-computador.jpg`: o que aparece no computador.

## Foto do perfil

O mesmo `#` branco sobre o roxo `#5500AA` da versão de 2023, agora com o quadrado inteiro roxo. A versão anterior tinha
um círculo encostado nas bordas e os cantos brancos, e o recorte circular do YouTube deixava um fio branco em volta. O
`#` foi redesenhado em vetor (`fonte/assets/hash-perfil.svg`) com as medidas da versão anterior: barras de 37/512 da
largura, inclinação de 0,15, centrado. O ícone traçado da marca (`logo/brand/icone-hash*.svg`) tem os cantos internos
arredondados e não serve aqui.

- `previa/foto-perfil-recorte-circular.png`: como o YouTube mostra.

## Fontes e como gerar de novo

`fonte/banner.html` e `fonte/perfil.html` (HTML e CSS, com os arquivos em `fonte/assets/`) viram imagem no Chromium do
Playwright, em Docker (nada instalado no Mac), com a imagem de captura do repositório `youtube`:

```sh
cd art/youtube
docker run --rm --platform linux/arm64 -v "$PWD":/w -w /w/fonte tutorial-video-capture:1.61.1-2 node gerar.mjs
```

A foto do trigal, a marca branca e a tríade são as mesmas das capas dos vídeos (`youtube/splash/assets/`).

## Versões anteriores

`antigo/`: o banner (2048×1152, com o selo de 50 anos da Embrapa, de 2023) e a foto do perfil (512×512) que estavam no
canal até novembro de 2026, baixados do próprio canal.
