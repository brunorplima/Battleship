import React, { createContext } from 'react'

interface Context {
   currentShipSize: number,
   setCurrentShipSize: React.Dispatch<React.SetStateAction<number>>
   occupiedSquares: number[],
   setOccupiedSquares: React.Dispatch<React.SetStateAction<number[]>>
   rotateDirection: string,
   setRotateDirection: React.Dispatch<React.SetStateAction<string>>
   gameStatus: string,
   setGameStatus: React.Dispatch<React.SetStateAction<string>>
}
const appContext: Context = {
   currentShipSize: 0,
   setCurrentShipSize: () => {},
   occupiedSquares: [],
   setOccupiedSquares: () => {},
   rotateDirection: '',
   setRotateDirection: () => {},
   gameStatus: '',
   setGameStatus: () => {}
}

const context = createContext(appContext);

export default context;
