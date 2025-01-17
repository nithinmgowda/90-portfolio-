import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sprites = [
  {
    name: 'arcanine-1',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/59.gif'
  },
  {
    name: 'growlithe-1',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/58.gif'
  }
];

const downloadSprite = (sprite) => {
  const filePath = path.join(__dirname, `${sprite.name}.gif`);
  
  https.get(sprite.url, (response) => {
    const fileStream = fs.createWriteStream(filePath);
    response.pipe(fileStream);

    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`Downloaded ${sprite.name}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${sprite.name}:`, err);
  });
};

sprites.forEach(downloadSprite);
