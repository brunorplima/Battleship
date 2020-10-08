import React, { useState, useContext, useEffect } from 'react';
import context from '../../context/Context';
import Square from './Square';
import { GameStatus, RotDirection } from '../../constants/constants';

import './square.css';

interface Props {
   id: number,
   x: number,
   y: number,
   value: number,
   generateId: Function,
   shipLocations: number[],
   setShipLocations: Function,
   isMyBoard: boolean
}

const SquareContainer = (props: Props) => {

   const [squareStyle, setSquareStyle] = useState({});
   const [hasContent, setHasContent] = useState(false);

   const { 
      currentShipSize,
      setCurrentShipSize,
      occupiedSquares,
      setOccupiedSquares,
      rotateDirection,
      gameStatus
   } = useContext(context);

   useEffect(() => {
      if (currentShipSize) {
         setSquareStyle({
            ...squareStyle,
            cursor: 'pointer'
         })
      }
   }, [currentShipSize]);

   useEffect(() => {
      if (occupiedSquares.includes(props.id) && props.isMyBoard) {
         setSquareStyle(Object.assign({
            backgroundColor: 'rgb(51, 51, 255)'
         }, squareStyle))
      }
   }, [occupiedSquares]);

   useEffect(() => {

   }, [gameStatus]);


   function pickSquare() {
      if (!occupiedSquares.includes(props.id) && props.isMyBoard && gameStatus === GameStatus.placeShips) {
         const occSqr = occupiedSquares;
         const tests: boolean[] = [];
         for (let i = 0; i < currentShipSize; i++) {
            const j = i * 10;
            const { id } = props.generateId(rotateDirection === RotDirection.vertical ? props.value + j : props.value + i);
            occSqr.push(id);
            tests.push(!occupiedSquares.includes(props.generateId(rotateDirection === RotDirection.vertical ? props.value + j : props.value + i)));
         }
         if (!tests.includes(false)) {
            setOccupiedSquares([...occSqr]);
            setCurrentShipSize(0);
            props.setShipLocations([...props.shipLocations, ...occSqr]);
         }
      } else if (!props.isMyBoard && gameStatus === GameStatus.attack) {
         if (occupiedSquares.includes(props.id)) {
            setSquareStyle(Object.assign({
               backgroundColor: '#1da2d8'
            }, squareStyle))
            setHasContent(true); 
         } else {
            setSquareStyle(Object.assign({
               backgroundColor: '#ccc'
            }, squareStyle))
         }
      }
   }

   return (
      <>
         <Square
            id={props.id}
            x={props.x}
            y={props.y}
            pickSquare={pickSquare}
            squareStyle={squareStyle}
            hasContent={!props.isMyBoard}
            hasShip={occupiedSquares.includes(props.id)}
         />
      </>
   )
}

export default SquareContainer
