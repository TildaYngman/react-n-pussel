import React from 'react';
import { Tile } from '../Index'
import { BoardProps } from '../../types/types';
import { useStore } from '../../hooks/zustandStore';

const GameBoard: React.FC<BoardProps> = ({ cols, rows }) => {
  const { tiles, setTiles } = useStore((state) => ({
    tiles: state.tiles,
    setTiles: state.setTiles,
  }));
  return (
    <>
      <div className="board">
        {tiles.map((value, i) => (
          <Tile
            key={i}
            value={value}
            onClick={() => handleClick(value)}
          />
        ))}
      </div>
    </>
  );
};

export default GameBoard;
