import React, { useState } from 'react';
import context from './context/Context';
import { RotDirection, GameStatus } from './constants/constants';
import Game from './component/game/Game';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

import './App.css';

function App() {

   const [rotateDirection, setRotateDirection] = useState<string>(RotDirection.horizontal);
   const [gameStatus, setGameStatus] = useState<string>(GameStatus.placeShips);
   const [currentShipSize, setCurrentShipSize] = useState(0);
   const [occupiedSquares, setOccupiedSquares] = useState<number[]>([]);
   const [hoverStyledSquares, setHoverStyledSquares] = useState<number[]>([]);


   const value = {
      currentShipSize,
      setCurrentShipSize,
      occupiedSquares,
      setOccupiedSquares,
      rotateDirection,
      setRotateDirection,
      gameStatus,
      setGameStatus,
      hoverStyledSquares,
      setHoverStyledSquares
   }

   return (
      <context.Provider value={value}>
         <div className='App-container' style={{backgroundImage: 'url(./images/battleship-bg1.jpg)'}}>
            <div className='app-bg-overlay d-flex justify-content-center'>
               <Game/>
            </div>
         </div>
      </context.Provider>
   );
}

export default App;
