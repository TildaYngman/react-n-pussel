import React from 'react';
import { TileProps } from '../../types/types';
import './tile.css';

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
