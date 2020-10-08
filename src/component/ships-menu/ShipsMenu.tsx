import React, { SyntheticEvent } from 'react';
import { RotDirection, GameStatus } from '../../constants/constants';
import MyButton from '../util/MyButton';
import destroyer from '../../images/destroyer.jpg';
import submarine from '../../images/submarine.jpg';
import cruiser from '../../images/cruiser.jpg';
import battleship from '../../images/battleship.jpg';
import carrier from '../../images/carrier.jpg';
import { BsArrowRight } from 'react-icons/bs';

interface Props {
   setCurrentShipSize: React.Dispatch<React.SetStateAction<number>>,
   rotateDirection: string,
   setRotateDirection: React.Dispatch<React.SetStateAction<string>>,
   setGameStatus: React.Dispatch<React.SetStateAction<string>>
}

const ShipsMenu = (props: Props) => {

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

   function chooseShip(e: SyntheticEvent, size: number): void {
      props.setCurrentShipSize(size);
   }

   function getRotateStyle() : any {
      if (props.rotateDirection === RotDirection.horizontal)  {
         return {
            transform: 'rotate(0)'
         }
      } else {
         return {
            transform: 'rotate(90deg)'
         }
      }
   }

   function handleRotate() {
      if (props.rotateDirection === RotDirection.horizontal)
         props.setRotateDirection(RotDirection.vertical)
      else
         props.setRotateDirection(RotDirection.horizontal)
   }

   return (
      <div className='ships-menu d-flex justify-content-around'>
         <div className='ships d-flex flex-column'>
            {
               getShips()
            }
         </div>
         <div className='rotate-btn d-flex flex-column align-items-center'>
            <div className='d-flex justify-content-around align-items-center'>
               <div className='rotate btn btn-primary' onClick={handleRotate}>Rotate</div>
               <div className='arrow-icon' style={getRotateStyle()}><BsArrowRight /></div>
            </div>
            <div className='rotate btn btn-success' onClick={() => props.setGameStatus(GameStatus.attack)}>Finish</div>
         </div>
      </div>
   )
}

const placeShipStyle = {
   backgroundColor: '#ccc'
}

export default ShipsMenu
