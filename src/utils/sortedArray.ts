export const isSorted = (tiles: number[]): boolean => {
  return tiles.every((value, index) => {
    if (index === tiles.length - 1) {
      return value === 0; // last tile should be 0
    } else {
      return value === index + 1; // all other tiles should be in ascending order
    }
  });
};
