import React, { useState } from 'react';
import Square from './Square';

import './square.css';

interface Props {
   id: string
}

const SquareContainer = (props: Props) => {

   const [isHidden, setIsHidden] = useState(true);


   function pickSquare() {
      if (isHidden) {
         setIsHidden(false);
      }
   }

   return (
      <>
         <Square
            id={props.id}
            pickSquare={pickSquare}
         />
      </>
   )
}

export default SquareContainer
