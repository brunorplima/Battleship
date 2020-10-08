import React from 'react';
import { GiSinkingShip } from 'react-icons/gi';
import { IoIosClose } from 'react-icons/io';


interface Props {
   id: number,
   x: number,
   y: number,
   pickSquare: Function,
   squareStyle: Object,
   hasContent: boolean,
   hasShip: boolean
}

const Square = (props: Props) => {
   return (
      <div 
         className='board-item d-flex justify-content-center align-items-center'
         style={props.squareStyle}
         onClick={() => props.pickSquare()}
      >
         {props.hasContent ? props.hasShip ? <GiSinkingShip /> : <IoIosClose /> : null}
      </div>
   )
}

export default Square
