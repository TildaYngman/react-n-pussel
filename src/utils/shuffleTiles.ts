export const shuffleTiles = (
  tiles: number[],
  setTiles: React.Dispatch<React.SetStateAction<number[]>>,
  setNumberOfClicks: React.Dispatch<React.SetStateAction<number>>
): void => {
  const newTiles = [...tiles];
  for (let i = newTiles.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [newTiles[i], newTiles[randomIndex]] = [newTiles[randomIndex], newTiles[i]];
  }
  setNumberOfClicks(0);
  setTiles(newTiles);
};
