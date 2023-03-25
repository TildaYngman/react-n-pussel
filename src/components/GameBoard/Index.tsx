import React from 'react';
import { TileProps } from '../../types/types';

const GameBoard: React.FC<TileProps> = ({ value, onClick }) => {
  return (
    <button
      className="tile"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default GameBoard;

 