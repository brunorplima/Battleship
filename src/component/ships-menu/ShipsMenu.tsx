import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

interface Props {
   setGameStatus: React.Dispatch<React.SetStateAction<string>>,
   getShips: Function,
   getRotateStyle: Function,
   handleRotate: Function,
   handleFinishButton: Function
}

const ShipsMenu = (props: Props) => {


   return (
      <div className='ships-menu d-flex justify-content-around'>
         <div className='ships d-flex flex-column'>
            {
               props.getShips()
            }
         </div>
         <div className='rotate-btn d-flex flex-column align-items-center'>
            <div className='d-flex justify-content-around align-items-center'>
               <div className='rotate btn btn-primary' onClick={() => props.handleRotate()}>Rotate</div>
               <div className='arrow-icon' style={props.getRotateStyle()}><BsArrowRight /></div>
            </div>
            <div 
               className='rotate btn btn-success'
               onClick={() => props.handleFinishButton()}
            >
               Finish
            </div>
         </div>
      </div>
   )
}

export default ShipsMenu
