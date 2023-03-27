import React from 'react';
import { TileProps } from '../../types/types';
import './tile.css';

const Tile: React.FC<TileProps> = ({ value, onClick }) => {
  const isEmptyTile = value === 0;

  return (
    <div
      className={`tile ${isEmptyTile ? 'empty' : ''}`}
      onClick={onClick}
    >
      {isEmptyTile ? '' : value}
    </div>
  );
};

export default Tile;
