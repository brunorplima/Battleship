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

   const { 
      currentShipSize,
      setCurrentShipSize,
      occupiedSquares,
      setOccupiedSquares,
      rotateDirection,
      gameStatus,
      hoverStyledSquares,
      setHoverStyledSquares
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
         }, {}))
      }
   }, [occupiedSquares]);

   useEffect(() => {
      if (!occupiedSquares.includes(props.id)) {
         if (hoverStyledSquares.includes(props.value)) {
            setSquareStyle(Object.assign({
               backgroundColor: 'rgb(181, 181, 255)'
            }, {}));
         }
         else {
            setSquareStyle(Object.assign({
               backgroundColor: 'white'
            }, {}));
         }
      }
   }, [hoverStyledSquares]);



   /**
    * The square click handle
    */
   function pickSquare() {
      if (!occupiedSquares.includes(props.id) && props.isMyBoard && gameStatus === GameStatus.placeShips && validateSquare()) {
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
            // props.setShipLocations([...props.shipLocations, ...occSqr]);
         }
      } else if (!props.isMyBoard && gameStatus === GameStatus.attack) {
         if (occupiedSquares.includes(props.id)) {
            setSquareStyle(Object.assign({
               backgroundColor: '#1da2d8'
            }, squareStyle))
            // setHasContent(true); 
         } else {
            setSquareStyle(Object.assign({
               backgroundColor: '#ccc'
            }, squareStyle))
         }
      }
   }

   function setHoverSquares() {
      const squares: number[] = [];
      if (validateSquare() && !occupiedSquares.includes(props.id) && currentShipSize) {
         if (rotateDirection === RotDirection.horizontal) {
            for (let i = 0; i < currentShipSize; i++) {
               squares.push(props.value + i);
            }
         }
         else {
            for (let i = 0; i < currentShipSize; i + 10) {
               console.log(i)
               squares.push(props.value + i);
            }
         }
      }
      setHoverStyledSquares(squares);
   }

   function resetHoverSquares() {
      setHoverStyledSquares([]);
   }

   /**
    * Validates the picked square.
    * It checks whether all the selected squares to place the ship are available to receive the ship.
    */
   function validateSquare(): boolean {
      const bools: boolean[] = [];
      if (rotateDirection === RotDirection.vertical) {
         for (let i = 1; i < currentShipSize; i++) {
            bools.push(props.value + i * 10 <= 100 && !occupiedSquares.includes(props.generateId(props.value + i * 10).id));
         }
         return !bools.includes(false);
      }
      else {
         for (let i = 1; i < currentShipSize; i++) {
            let digit = String(props.value);
            digit = digit.charAt(digit.length - 1);
            const digitNumber = Number(digit);
            bools.push(digitNumber + i <= 10 && digit !== '0' && !occupiedSquares.includes(props.generateId(props.value + i).id));
         }
         return !bools.includes(false);
      }
   }

   return (
      <>
         <Square
            id={props.id}
            x={props.x}
            y={props.y}
            pickSquare={pickSquare}
            hoverHandler={setHoverSquares}
            mouseOutHandler={resetHoverSquares}
            squareStyle={squareStyle}
            hasContent={!props.isMyBoard}
            hasShip={occupiedSquares.includes(props.id)}
         />
      </>
   )
}

export default SquareContainer
