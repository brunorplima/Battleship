import React from 'react';
import Board from './Board';
import SquareContainer from '../square/SquareContainer';
import StaticSquare from '../square/StaticSquare';

import './board.css';

const BoardContainer = () => {

   function getBoardSquares(isStatic: boolean, isRow: boolean) {
      const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
      const squares = [];
      if (isStatic) {
         for (let i = 0; i < 10; i++) {
            squares.push(<StaticSquare content={isRow ? i+1 : letters[i]}/>);
         }
      } else {
         for (let i = 0; i < 100; i++) {
            const digit = getLastDigit(i+1);
            // const 
            let letter = letters[Math.floor(i / 10)]
            squares.push(<SquareContainer id={digit + letter}/>);
         }
      }
      return squares;
   }

   function getLastDigit(number: number) {
      const theNumber = String(number);
      const numberStr = theNumber.charAt(theNumber.length - 1) === '0' ? '10' : theNumber.charAt(theNumber.length - 1);
      return numberStr;
   }


   return (
      <div className='board-container'>
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
   )
}

export default BoardContainer
