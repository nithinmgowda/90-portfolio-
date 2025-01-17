import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sprites = [
  {
    name: 'pikachu-1',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif'
  },
  {
    name: 'charmander-1',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif'
  },
  {
    name: 'bulbasaur-1',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif'
  },
  {
    name: 'squirtle-1',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif'
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
