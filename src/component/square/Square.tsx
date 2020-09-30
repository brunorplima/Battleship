import React from 'react'

interface Props {
   id: string,
   pickSquare: Function
}

const Square = ({ id }: Props) => {
   return (
      <div className='board-item d-flex justify-content-center align-items-center'>
         {/* {id} */}
      </div>
   )
}

export default Square
