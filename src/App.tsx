import React from 'react';
import './styles/App.css';
import { GameBoard } from './components/Index';

const App: React.FC = () => {
  return (
    <GameBoard
      rows={4} //Here You can change the number of rows
      cols={4} //Here You can change the number of columns
    />
  );
};

export default App;
