import React, { SyntheticEvent, useState, useEffect } from 'react';
import './css/my-button.css';

interface Props {
   elClassName: string,
   content?: string,
   imgUrl?: string
   size: number,
   clickFunc: Function
}

const MyButton = ({ elClassName, content, imgUrl, size, clickFunc }: Props) => {

   const [isDisabled, setIsDisabled] = useState(false);
   
   let style: any = isDisabled ? {
      marginTop: '.5rem',
      width: '120px',
      cursor: 'not-allowed'
   } :
   {
      marginTop: '.5rem',
      width: '120px'
   }

   useEffect(() => {
      
   }, [isDisabled]);

   function handleClick(e: SyntheticEvent) {
      clickFunc(e, size);
      setIsDisabled(true);
   }

   return (
      <button className='btn btn-light' style={style} onClick={e => handleClick(e)} disabled={isDisabled}>
         {
            content && content
         }
         {
            imgUrl && <img className='button-image' src={imgUrl} alt='Ship' />
         }
         {
            (!content && !imgUrl) && size 
         }
      </button>
   )
}

export default MyButton
