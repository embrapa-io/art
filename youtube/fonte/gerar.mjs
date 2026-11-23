// Gera o banner e a foto do perfil do canal a partir de banner.html e perfil.html, no Chromium do Playwright.
// Uso (Docker, imagem de captura do repositório youtube; nada instalado no Mac), da pasta art/youtube:
//   docker run --rm --platform linux/arm64 -v "$PWD":/w -w /w/fonte tutorial-video-capture:1.61.1-2 node gerar.mjs
// Saída em art/youtube/: banner-2560x1440.jpg, foto-perfil-800x800.png e as prévias dos recortes do YouTube.
import { createRequire } from 'node:module';
import path from 'node:path';

const require = createRequire('/opt/capture/');
const { chromium } = require('playwright');
const aqui = path.dirname(new URL(import.meta.url).pathname);
const saida = path.join(aqui, '..');

const browser = await chromium.launch();
const foto = async (html, w, h, arquivo, tipo, busca = '') => {
  const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
  await page.goto(`file://${path.join(aqui, html)}${busca}`);
  await page.waitForFunction(() => [...document.images].every((i) => i.complete && i.naturalWidth > 0));
  await page.screenshot({ path: path.join(saida, arquivo), type: tipo, ...(tipo === 'jpeg' ? { quality: 93 } : {}) });
  await page.close();
  console.log(arquivo);
};
await foto('banner.html', 2560, 1440, 'banner-2560x1440.jpg', 'jpeg');
await foto('banner.html', 2560, 1440, 'previa/banner-area-segura.jpg', 'jpeg', '?guia');
await foto('perfil.html', 800, 800, 'foto-perfil-800x800.png', 'png');
await browser.close();
