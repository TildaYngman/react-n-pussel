import { config } from './config';

export const generateTiles = (
  setTiles: React.Dispatch<React.SetStateAction<number[]>>
): void => {
  const tileCount = config.rows * config.cols;
  const newTiles = Array.from({ length: tileCount }, (_, i) => i + 1); //Array.from() creates a shallow array form an array or array like object. It takes two arguments the first one is the current elements value which doesent matter and the second one is the index.
  newTiles[tileCount - 1] = 0; // tile 0

  for (let i = newTiles.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [newTiles[i], newTiles[randomIndex]] = [newTiles[randomIndex], newTiles[i]];
  }
  setTiles(newTiles);
};
