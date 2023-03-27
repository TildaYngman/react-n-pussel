import { config } from '../utils/config';

export const isAdjacentToEmptyTile = (
  tileIndex: number,
  emptyTileIndex: number
): boolean => {
  const emptyRow = Math.floor(emptyTileIndex / config.cols);
  const emptyCol = emptyTileIndex % config.cols;
  const tileRow = Math.floor(tileIndex / config.cols);
  const tileCol = tileIndex % config.cols;
  const isAdjacent =
    Math.abs(emptyRow - tileRow) + Math.abs(emptyCol - tileCol) === 1;
  return isAdjacent;
};
