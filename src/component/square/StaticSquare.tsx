import React from 'react';

interface Props {
   content: number | string
}

const StaticSquare = ({ content }: Props ) => {
   return (
      <div className='board-item d-flex justify-content-center align-items-center static-square'>
         {content}
      </div>
   )
}

export default StaticSquare;
