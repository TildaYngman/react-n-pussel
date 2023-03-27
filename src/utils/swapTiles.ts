export const swapTiles = (
  emptyTileIndex: number,
  clickedTileIndex: number,
  setTiles: React.Dispatch<React.SetStateAction<number[]>>,
  tiles: number[],
  i: number
) => {
  const newTiles = [...tiles];
  newTiles[emptyTileIndex] = i;
  newTiles[clickedTileIndex] = 0;
  setTiles(newTiles);
};
