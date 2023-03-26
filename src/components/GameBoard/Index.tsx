import React from 'react';
import { config } from '../utils/utils';
// import { useStore } from '../../hooks/zustandStore';
import { Tile } from '../index';
import { useState, useEffect } from 'react';
import './index.css';

const GameBoard: React.FC = () => {
  // const { tiles, setTiles } = useStore((state) => ({
  //   tiles: state.tiles,
  //   setTiles: state.setTiles,
  // }));

  //Height and width of the board.
  //if width 100% / by number of cols set flex basis to 100%/number of cols

  const [tiles, setTiles] = useState<number[]>([]);

  // const randomize = () => {
  //   for (let i = newTiles.length - 1; i > 0; i--) {
  //     const randomIndex = Math.floor(Math.random() * (i + 1));
  //     [newTiles[i], newTiles[randomIndex]] = [
  //       newTiles[randomIndex],
  //       newTiles[i],
  //     ];
  //   }
  // }

  useEffect(() => {
    const generateTiles = (): void => {
      const tileCount = config.rows * config.cols;
      const newTiles = Array.from({ length: tileCount }, (_, i) => i + 1); //Array.from() creates a shallow array form an array or array like object. It takes two arguments the first one is the current elements value which doesent matter and the second one is the index.
      newTiles[tileCount - 1] = 0; // tile 0

      for (let i = newTiles.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [newTiles[i], newTiles[randomIndex]] = [
          newTiles[randomIndex],
          newTiles[i],
        ];
      }

      setTiles(newTiles);
    };
    generateTiles();
  }, [config.rows, config.cols]);

  const handleClick = (i: number) => {
    const clickedTileIndex = tiles.indexOf(i);
    const emptyTileIndex = tiles.indexOf(0);
    const emptyRow = Math.floor(emptyTileIndex / config.cols);
    const emptyCol = emptyTileIndex % config.cols; //calculates the index of the row and column where the 0 tile is
    const tileRow = Math.floor(clickedTileIndex / config.cols); //calculates the index of what row and colomn the clicked tile is in.
    const tileCol = clickedTileIndex % config.cols;
    const isAdjacent =
      Math.abs(emptyRow - tileRow) + Math.abs(emptyCol - tileCol) === 1;
    if (isAdjacent) {
      const newTiles = [...tiles];
      newTiles[emptyTileIndex] = i;
      newTiles[clickedTileIndex] = 0;
      setTiles(newTiles);
    }
  };

  return (
    <>
      <div className="game_board">
        {tiles.map((value, i) => (
          <Tile
            key={i}
            value={value}
            onClick={() => handleClick(value)}
          />
        ))}
      </div>
      <div className="randomize_btn_container">
        <button>Slumpa</button>
      </div>
    </>
  );
};

export default GameBoard;
