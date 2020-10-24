import React, { useState } from 'react';
import Board from './Board';
import SquareContainer from '../square/SquareContainer';
import StaticSquare from '../square/StaticSquare';

import './board.css';

interface Props {
   isMyBoard: boolean,
   style?: Object
}

const BoardContainer = ({ isMyBoard, style }: Props) => {
   const [shipLocations, setShipLocations] = useState<number[]>([]);

   function getBoardSquares(isStatic: boolean, isRow: boolean) {
      const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
      const squares = [];
      if (isStatic) {
         for (let i = 0; i < 10; i++) {
            squares.push(<StaticSquare key={'ss-' + i} content={isRow ? i+1 : letters[i]}/>);
         }
      } else {
         for (let i = 1; i <= 100; i++) {
            const { id, x, y } = generateId(i);
            squares.push(
               <SquareContainer 
                  key={id}
                  id={id}
                  x={x}
                  y={y}
                  value={i}
                  generateId={generateId}
                  shipLocations={shipLocations}
                  setShipLocations={setShipLocations}
                  isMyBoard={isMyBoard}
               />
            );
         }
      }
      return squares;
   }

   function generateId(i: number): {id:number, x:number, y:number} {
      const y = getLastDigit(i);
      const x = Math.ceil(i / 10);
      let id = '';
      if (y < 10) {
         id = `${x}0${y}`;
      } else {
         id = `${x}${y}`;
      }
      return {
         id: Number(id),
         x,
         y
      };
   }

   function getLastDigit(number: number) {
      const theNumber = String(number);
      const numberStr = theNumber.charAt(theNumber.length - 1) === '0' ? '10' : theNumber.charAt(theNumber.length - 1);
      return Number(numberStr);
   }


   return (
      <>
         <div className='owner-desc'>{isMyBoard ? 'Your fleet' : "Opponent's fleet"}</div>
         <div className='board-container' style={style}>
            <div></div>
            <div className='static-row'>
               {
                  getBoardSquares(true, true)
               }
            </div>
            <div className='static-column'>
               {
                  getBoardSquares(true, false)
               }
            </div>
            <Board getBoardSquares={getBoardSquares}/>
         </div>
      </>
   )
}

export default BoardContainer
