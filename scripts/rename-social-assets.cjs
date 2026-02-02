/**
 * Renombra las imágenes de redes sociales a social-01.png ... social-05.png
 * Orden: LinkedIn, GitHub, Behance, Notion, YouTube
 * Ejecutar desde la raíz del proyecto: node scripts/rename-social-assets.cjs
 */

const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, '..', 'src', 'assets');
const SOCIAL_DIR = path.join(ASSETS_DIR, 'social');

const OLD_TO_NEW = [
  ['eb32313f181d7f397e280d071d68cd4848de3309.png', 'social-01.png'], // LinkedIn
  ['ba860023c4945015a1341b916ead911ab33959ca.png', 'social-02.png'], // GitHub
  ['ce87b991d33908119ebd53423d76d4d176fa3dd6.png', 'social-03.png'], // Behance
  ['f4070059249511aee028c2a23241923404682ade.png', 'social-04.png'], // Notion
  ['2a49aaca2afd902bddff6a117e6ba2b56e221665.png', 'social-05.png'], // YouTube
];

if (!fs.existsSync(SOCIAL_DIR)) {
  fs.mkdirSync(SOCIAL_DIR, { recursive: true });
}

for (const [oldName, newName] of OLD_TO_NEW) {
  const srcPath = path.join(ASSETS_DIR, oldName);
  const destPath = path.join(SOCIAL_DIR, newName);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copiado: ${oldName} → social/${newName}`);
  } else {
    console.warn(`No encontrado: ${srcPath}`);
  }
}

console.log('Listo. Actualiza los imports en case-shared y luego borra los archivos antiguos en src/assets/ si lo deseas.');
