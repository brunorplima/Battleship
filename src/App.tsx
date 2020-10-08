import React, { useState } from 'react';
import BoardContainer from './component/board/BoardContainer';
import ShipsMenuContainer from './component/ships-menu/ShipsMenuContainer';
import context from './context/Context';
import { RotDirection, GameStatus } from './constants/constants';

import './App.css';

function App() {

   const [rotateDirection, setRotateDirection] = useState<string>(RotDirection.horizontal);
   const [gameStatus, setGameStatus] = useState<string>(GameStatus.placeShips);
   const [currentShipSize, setCurrentShipSize] = useState(0);
   const [occupiedSquares, setOccupiedSquares] = useState<number[]>([]);


   const value = {
      currentShipSize,
      setCurrentShipSize,
      occupiedSquares,
      setOccupiedSquares,
      rotateDirection,
      setRotateDirection,
      gameStatus,
      setGameStatus
   }

   return (
      <context.Provider value={value}>
         <div className='App-container' style={{backgroundImage: 'url(./images/battleship-bg1.jpg)'}}>
            <div className='app-bg-overlay d-flex justify-content-center'>
               <div className="App">
                  <header className="App-header text-center">
                     <h1>Battleship Game</h1>
                  </header>

                  <div className='side-menu'>
                     {/* <h3>Menu</h3> */}
                  </div>

                  <div className='main-screen d-flex justify-content-center align-items-center'>
                     {(gameStatus === GameStatus.placeShips) && <BoardContainer isMyBoard={true}/>}
                     {(gameStatus === GameStatus.attack) && <BoardContainer isMyBoard={false} />}
                  </div>

                  <div className='menus'>
                     <ShipsMenuContainer setGameStatus={setGameStatus} />
                  </div>

               </div>
            </div>
         </div>
      </context.Provider>
   );
}

export default App;
