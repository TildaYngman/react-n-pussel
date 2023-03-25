import React from 'react';
import { TileProps } from '../../types/types';

const Tile: React.FC<TileProps> = ({ value, onClick }) => {
  return (
    <button
      className="tile"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Tile;
