import React, { useContext, SyntheticEvent } from 'react';
import context from '../../context/Context';
import ShipsMenu from './ShipsMenu';
import { RotDirection, GameStatus } from '../../constants/constants';
import MyButton from '../util/MyButton';
import destroyer from '../../images/destroyer.jpg';
import submarine from '../../images/submarine.jpg';
import cruiser from '../../images/cruiser.jpg';
import battleship from '../../images/battleship.jpg';
import carrier from '../../images/carrier.jpg';

import './ships-menu.css';

const ShipsMenuContainer = ({ setGameStatus } : any) => {

   const { setCurrentShipSize, rotateDirection, setRotateDirection, gameStatus, occupiedSquares } = useContext(context);


   /**
    * It returns the 5 buttons containing each ship option
    */
   function getShips() : React.ReactElement[] {
      const buttons: React.ReactElement[] = [];
      const sizes = [2, 3, 3, 4, 5];
      const ships = [destroyer, submarine, cruiser, battleship, carrier];
      let count = 1;
      for (const _size of sizes) {
         buttons.push((
            <div key={'ship' + count}>
               <MyButton 
                  elClassName='myButton'
                  size={_size}
                  clickFunc={chooseShip}
                  imgUrl={ships[count - 1]}
               ></MyButton>
            </div>
         ));
         count++;
      }
      return buttons;
   }
   /**
    * Sets the number of the choosen ship's size.
    * With this information it's possible to make square validations
    * 
    * @param size    the size of the choosen ship
    */
   function chooseShip(e: SyntheticEvent, size: number): void {
      setCurrentShipSize(size);
   }


   /**
    * Changes the orientation of the ships to be placed onto the board
    */
   function getRotateStyle() : any {
      if (rotateDirection === RotDirection.horizontal)  {
         return {
            transform: 'rotate(0)'
         }
      } else {
         return {
            transform: 'rotate(90deg)'
         }
      }
   }

   /**
    * It changes the rotateDirection app context
    */
   function handleRotate() {
      if (rotateDirection === RotDirection.horizontal)
         setRotateDirection(RotDirection.vertical);
      else
         setRotateDirection(RotDirection.horizontal);
   }

   function handleFinishButton() {
      if (occupiedSquares.length === 17) {
         setGameStatus(GameStatus.attack);
      } else {
         alert('Set up your fleet first');
      }
   }

   return (
      <>
         {
            gameStatus === GameStatus.placeShips &&
            <div className='ships-menu-container'>
               <h4>Select a ship</h4>
               <ShipsMenu 
                  setGameStatus={setGameStatus}
                  getShips={getShips}
                  getRotateStyle={getRotateStyle}
                  handleRotate={handleRotate}
                  handleFinishButton={handleFinishButton}
               />
            </div>
         }
      </>
   )
}

export default ShipsMenuContainer
