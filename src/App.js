import React, { useState } from "react"
import Square from "./components/Square"
import "./App.css"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const [treasureLocation, setTreasureLocation] = useState(Math.floor(Math.random() * board.length))

  const [bombLocation, setBombLocation] = useState(Math.floor(Math.random() * board.length))

  const handleGamePlay = (clickedSquare) => {
    //  make a copy of the board in state so we can modify it in this method
    let updateBoard = [...board]
    if (clickedSquare === treasureLocation) {
      updateBoard[clickedSquare] = '🍍'
      setBoard(updateBoard)
    }
    else if (clickedSquare === bombLocation) {
      updateBoard[clickedSquare] = '🐍'
      setBoard(updateBoard)    }
    else {
      updateBoard[clickedSquare] = '🌴'
      setBoard(updateBoard)
    }
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className = "board-game">
        {board.map((square, index) => {
          return (
          <Square square = {square}
                  index = {index}
                  key = {index}
                  handleGamePlay = {handleGamePlay}
                  />
          )
        })}
      </div>
    </>
  )
}

export default App
