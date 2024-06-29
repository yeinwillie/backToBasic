import { useState } from 'react';
import './App.css'

const TURNS = {
  X:'X',
  O:'O'
};


const Square = ({children, isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}` 
 
  const handlerClick = ()  => {
    updateBoard(index)
  }

  return (
    <div onClick={handlerClick} className={className}>
      {children}
    </div>
  )
}




function App() {

const [board, setBoard] = useState(Array(9).fill(null))

const [turn, setTurn] = useState(TURNS.X)



const updateBoard = (index) => {
  // evitar que se actualice la posicion si ya esta llena
  if (board[index]) return 
  // actualizar el tablero
  const newBoard = [...board]  // spread para no mutar el estado y afectar el renderizado
  newBoard[index] = turn
  setBoard(newBoard)
  // cambiar el turno al hacer click en un cuadro
  const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
  setTurn(newTurn)

}


  return (
    <main className='board'>
      
      <h1>Tic Tac Toe</h1>
      <section className='game'>
        {
          board.map((_, index)=>{
            return(
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
                >
                {board[index]} 
                  
                </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>

        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
        
      </section>
    </main>
 
  )
}

export default App
