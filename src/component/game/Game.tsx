import React, { useContext } from 'react';
import Context from '../../context/Context';
import BoardContainer from '../board/BoardContainer';
import ShipsMenuContainer from '../ships-menu/ShipsMenuContainer';
import { GameStatus } from '../../constants/constants';

const Game = () => {

   const { gameStatus, setGameStatus } = useContext(Context);

   return (
      <div className="App">
         <header className="App-header text-center">
            <h1>Battleship Game</h1>
         </header>

         <div className='side-menu'>
            {/* <h3>Menu</h3> */}
         </div>

         <div className='main-screen d-flex flex-column justify-content-center align-items-center'>
            {(gameStatus === GameStatus.attack) && <BoardContainer isMyBoard={false} />}
            {
               // (gameStatus === GameStatus.placeShips) &&
                  <BoardContainer 
                     isMyBoard={true}
                     style={gameStatus === GameStatus.placeShips ? {} : { width: '200px', height: '200px' }}
                  />
            }
         </div>

         <div className='menus'>
            <ShipsMenuContainer setGameStatus={setGameStatus} />
         </div>

      </div>
   )
}

export default Game
