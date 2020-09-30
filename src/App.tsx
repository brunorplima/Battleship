import React from 'react';
import BoardContainer from './component/board/BoardContainer'

import './App.css';

function App() {
  return (
    <div className='App-container d-flex justify-content-center'>
      <div className="App">
        <header className="App-header text-center">
          <h1>Battleship Game</h1>
        </header>
        
        <div className='side-menu'>
          <h3>Menu</h3>
        </div>

        <div className='main-screen d-flex justify-content-center align-items-center'>
          <BoardContainer />
        </div>
          
      </div>
    </div>
  );
}

export default App;
