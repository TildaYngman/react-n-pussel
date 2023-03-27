import React from 'react';
import {
  config,
  shuffleTiles,
  isAdjacentToEmptyTile,
  isSorted,
  generateTiles,
  swapTiles,
} from '../../utils/index';

import { Tile } from '../index';
import { useState, useEffect } from 'react';
import './gameBoard.css';

//Notes
//Overcomplicated how to keep the rows and cols in the ui and implemented useRef.
//Picking up the tiles and the board through the useRef and trying to alter the css through that.
//Eventually found a better solution of just using grid.

const GameBoard: React.FC = () => {
  const [tiles, setTiles] = useState<number[]>([]);
  const [numberOfClicks, setNumberOfClicks] = useState<number>(0);
  const [isWinning, setIsWinning] = useState<boolean>(false);

  useEffect(() => {
    generateTiles(setTiles);
  }, [config.rows, config.cols]);

  const handleClick = (i: number) => {
    const clickedTileIndex = tiles.indexOf(i);
    const emptyTileIndex = tiles.indexOf(0);
    const isAdjacent = isAdjacentToEmptyTile(clickedTileIndex, emptyTileIndex);

    if (isAdjacent) {
      swapTiles(emptyTileIndex, clickedTileIndex, setTiles, tiles, i);
    }

    if (clickedTileIndex !== emptyTileIndex) {
      setNumberOfClicks(numberOfClicks + 1);
    }
  };

  useEffect(() => {
    if (numberOfClicks !== 0) {
      const sorted = isSorted(tiles);
      if (sorted) {
        setIsWinning(true);
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
        <div className="win_message">
          {isWinning ? <h1>You won in {numberOfClicks} moves!</h1> : null}
        </div>
        <button
          onClick={() => shuffleTiles(tiles, setTiles, setNumberOfClicks, setIsWinning)}
        >
          Slumpa
        </button>
      </div>
    </>
  );
};

export default GameBoard;
