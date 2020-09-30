import React from 'react';

import './board.css';



const Board = ({ getBoardSquares }: any) => {
   return (
      <div className='board'>
         {getBoardSquares(false)}
      </div>
   )
}

export default Board
