import React, { useState } from 'react'
import './style/SecondGame.css'

const turns = {
    TURN_X : 'X',
    TURN_O : 'O',
}

const winnerCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
  

export default function SecondGame() {

  const [board, setBoard] = useState(Array(9).fill(null))  
  const [turn, setTurn] = useState(turns.TURN_X);
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    
    if(board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === turns.TURN_X ? turns.TURN_O : turns.TURN_X;
    setTurn(newTurn);

    const gameWinner = checkWinner(newBoard);
    if(gameWinner){
      setWinner(gameWinner);
    }else if(checkEndGame(newBoard))
    {
      setWinner(false)
    }

  }

  const checkWinner = (board) => {
    for(let combo of winnerCombos){
      const [a, b, c] = combo;
      if(board[a] && board[a] === board[b] && board[a] === board[c]){
        return board[a];
      }
    }
  }

  const checkEndGame = (newBoard) => {
    return newBoard.every((casilla) => casilla !== null);
  }


  const Casilla = ({index, children}) => {

    const casillaClick = () => {
        updateBoard(index);
    }

    return(
        <div onClick={casillaClick} className='casilla' key={index}>
            <span>{children}</span>
        </div>
    )
  }

  return (
    <article>
        <div className="board">
           {board.map((_, index) => {
                return (
                    <Casilla key={index} index={index}>{board[index]}</Casilla>
                )
           })}
        </div>
        {winner !== null && (
          <div>
            {
              winner ? (
                  <h3>EL GANADOR ES {winner}</h3>
              ): (
                  <h3>EMPATE</h3>
              )
            }
          </div>
        )}
    </article>
  )
}
