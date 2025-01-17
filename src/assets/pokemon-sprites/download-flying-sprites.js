import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sprites = [
  {
    name: 'charizard-1',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif'
  },
  {
    name: 'dragonite-1',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/149.gif'
  },
  {
    name: 'pidgeot-1',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/18.gif'
  },
  {
    name: 'flygon-1',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/330.gif'
  },
  {
    name: 'salamence-1',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/373.gif'
  }
];

sprites.forEach(sprite => {
  const file = fs.createWriteStream(path.join(__dirname, `${sprite.name}.gif`));
  https.get(sprite.url, response => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${sprite.name}.gif`);
    });
  });
});
