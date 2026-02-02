/**
 * Copia las imágenes de case1 y case2 a nombres con numeración (case1-01.png, case2-01.png, etc.).
 * Ejecutar desde la raíz: node scripts/rename-case-assets.cjs
 */

const fs = require('fs');
const path = require('path');

const case1Map = [
  '0cb5ba6b2ea873b38f4fb0e296087fd701c72526.png',
  '289fbd019b173409a4a54cfddf2c36df34d8e847.png',
  '477ea164a5cd85cd1175fee9ae05517d0202a3da.png',
  '15d4206477f326d58f8ce141222ccf93c34eaa63.png',
  'd0db9f7aca1393f8907cbb789b6a56ae32d9d2ca.png',
  '0bc35c4b9f3daba82cacf71b0d7379d709c14413.png',
  'd0737a44ae884d3ea270d3dfa4e9b45c963d48cc.png',
  'c25e4b6d594805b2f57ce6b09d81c2d3a35f28fe.png',
  '5bdfed2add2a62eca1bd99338781e976848d3911.png',
  '8ed2a1829019b151334b99353eb38dd524f1770b.png',
  'a16c66b38cc3b3169dda3c893de90b9b8f9b03c5.png',
  '283cf19f427628fb4272a5f3dc0c54420d39661b.png',
  '240c2beb0e2aaad83905de3198e32fd8aa02f821.png',
  '15be92f9df216c1e9eaa4e93ca23dbc690f2f680.png',
  '5dce95db09187f33c12e81e89b9d1f43f8142990.png',
  'bd56b00d9181228cd976285a2bdb48029fbc2c13.png',
  '22cbd09facda3b5bf3e99427bd0e202c41810bef.png',
  '42232f63150389ad16f4b3882e980dc5c7310fe7.png',
  '2372bb62b683fecbca48e5f70b548cb98f549b7e.png',
  '3ad47dcca67b4d5c729c738310cbe59192f3b4ca.png',
  'ece298d0ec2c16f10310d45724b276a6035cb503.png',
  '63155354c9ce918ce5ba3fcc2dabea6015b44500.png',
  '3b5722f339203672f2716797bfd228374ce36fc1.png',
  '8c072013c44fc2067b0f90be76e3217d1e22a809.png',
  'a050004f2e51dd718d44da2eaae71d95f396be11.png',
  '3890ab73ef56dfb58a687dd9e63210efbd0dcb13.png',
  '77ae6d59dd76a3e4b6b73f39c38dcba805b21705.png',
  '189230297f564719c1984ba7327d259cc9644e1e.png',
  '3817f1ce994d4e7c500fff12619f0ebc4d11c71b.png',
  'a4b6186b7a260a3913120b522eb25cd63993b0a9.png',
  'e28ea558f5ccdf97b54eb6cf22e218692f75fb19.png',
  '5caf0c0a3c241eaaae32ccbd314a704c47ee0f58.png',
  'a15265dd33cc274a72d7fc6f9090e5f2fc49aa5c.png',
  'd8cfe4b75bb5ea536e017a0a50a82441062127c7.png',
];

const case2Map = [
  '4b573e21afe6cdd99fdd4542fb1398903cf6423f.png',
  '5f80c747774e6b16fd8869553786d315d9d962e5.png',
  '3c616711917c6a55573c42bd625cd5be8aa55904.png',
  '90cc5632b9cb9f7ac5fba4bd0ff6d5ffc5b311e1.png',
  '8d8063428b1e7afc0970195c3bba246eb8264bd6.png',
  'abd2a10b3c8f4c060fd1ab88afdf1785f4f3c305.png',
  'ba468e182eba4ace95d3dbd49728d39dc265b0ae.png',
  '262370f33fdb18c3314a879baa62857c01d665c9.png',
  'e8718fef9f082b4784f5a74300b19d93c44d785b.png',
  '841024dd03bdf305131c8c6b663d2e6101ad565f.png',
  '2090ed214d5de47d94895e0605343e1136cb5513.png',
  '0197bbb3199046e8c7694967517d19d1dd58b7fa.png',
  '5772c5fecf51ebcc8d59d9af81bfd893338c4a46.png',
  'ad8449f5f8b9ac936179acbab1fa0dd03d7b26b4.png',
  '8a952e3447011eff0513afc515043884e042907e.png',
  '95e68a68ed1b6c55bd4d2605f15e3d8450ec0102.png',
  '229fb914d3817be3474433bd2947a87d929eed06.png',
  '93f3ee62f0d53ca18878d1a612d8e1e9f59bef6d.png',
  '51e18f3e5a945d702bfef4b691262b6fd75dc1e9.png',
  'ac1ba506722b76a12ca2d61d8e8adca865ec60c7.png',
  '4bd7b4e9d7d7c1b8e03257d85c8b165da232d644.png',
  'a93044e6b30fb8b3c1ea51be774137e5c0612d33.png',
  '826db5610f6b29d0862b5312dc8ca2980976d756.png',
];

const root = path.join(__dirname, '..');
const case1Dir = path.join(root, 'src', 'assets', 'case1');
const case2Dir = path.join(root, 'src', 'assets', 'case2');

function pad(n) {
  return n < 10 ? '0' + n : String(n);
}

let ok = true;
case1Map.forEach((hash, i) => {
  const src = path.join(case1Dir, hash);
  const dest = path.join(case1Dir, `case1-${pad(i + 1)}.png`);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log('case1:', hash, '->', `case1-${pad(i + 1)}.png`);
  } else {
    console.error('No existe:', src);
    ok = false;
  }
});

case2Map.forEach((hash, i) => {
  const src = path.join(case2Dir, hash);
  const dest = path.join(case2Dir, `case2-${pad(i + 1)}.png`);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log('case2:', hash, '->', `case2-${pad(i + 1)}.png`);
  } else {
    console.error('No existe:', src);
    ok = false;
  }
});

if (ok) {
  console.log('\nHecho. Imports en Case1.tsx y Case2.tsx deben apuntar a case1-NN.png y case2-NN.png.');
} else {
  process.exit(1);
}
