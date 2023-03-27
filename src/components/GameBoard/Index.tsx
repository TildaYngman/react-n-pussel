import React from 'react';
import { config } from '../utils/config';
import { shuffleTiles } from '../utils/shuffleTiles';
import { isAdjacentToEmptyTile } from '../utils/adjacentToEmptyTile';
import { isSorted } from '../utils/sortedArray';
// import { useStore } from '../../hooks/zustandStore';
import { Tile } from '../index';
import { useState, useEffect } from 'react';
import './index.css';

//Notes
//Overcomplicated how to keep the rows and cols in the ui and implemented useRef.
//Picking up the tiles and the board through the useRef and trying to alter the css through that.
//Eventually found a better solution of just using grid.

const GameBoard: React.FC = () => {
  const [tiles, setTiles] = useState<number[]>([]);
  const [numberOfClicks, setNumberOfClicks] = useState<number>(0);

//move the generateTiles to utils

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
    const isAdjacent = isAdjacentToEmptyTile(clickedTileIndex, emptyTileIndex);

    if (isAdjacent) {

      //make a swap tiles function and have it in utils
      const newTiles = [...tiles];
      newTiles[emptyTileIndex] = i;
      newTiles[clickedTileIndex] = 0;
      console.log(newTiles);
      setTiles(newTiles);
    }

    if (clickedTileIndex !== emptyTileIndex) {
      setNumberOfClicks(numberOfClicks + 1);
    }
  };

  useEffect(() => {
    console.log('clicks', numberOfClicks);
    if (numberOfClicks !== 0) {
      const sorted = isSorted(tiles);
      if (sorted) {
        console.log(`You won in ${numberOfClicks}`);
      }
    }
  }, [numberOfClicks]);

  return (
    <>
      <div className="game_board_container">
        <div
          className="game_board"
          style={{
            gridTemplateColumns: `repeat(${config.cols}, 1fr)`,
            gridTemplateRows: `repeat(${config.rows}, 1fr)`,
          }}
        >
          {tiles.map((value, i) => (
            <Tile
              key={i}
              value={value}
              onClick={() => handleClick(value)}
            />
          ))}
        </div>
      </div>
      <div className="randomize_btn_container">
        <button onClick={() => shuffleTiles(tiles, setTiles, setNumberOfClicks)}>
          Slumpa
        </button>
      </div>
    </>
  );
};

export default GameBoard;
