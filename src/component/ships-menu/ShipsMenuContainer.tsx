import React, { useContext } from 'react';
import context from '../../context/Context';
import ShipsMenu from './ShipsMenu';

import './ships-menu.css';

const ShipsMenuContainer = ({ setGameStatus } : any) => {

   const { setCurrentShipSize, rotateDirection, setRotateDirection } = useContext(context);

   return (
      <div className='ships-menu-container'>
         <h4>Select a ship</h4>
         <ShipsMenu 
            setCurrentShipSize={setCurrentShipSize}
            rotateDirection={rotateDirection}
            setRotateDirection={setRotateDirection}
            setGameStatus={setGameStatus}
         />
      </div>
   )
}

export default ShipsMenuContainer
