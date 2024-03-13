import React, {useEffect, useState } from 'react'
import './FifthGame.css'
import Square from './Square';

export default function Casillas() {

  const [moles, setMoles] = useState( [
    {status : ""},
    {status : ""},
    {status : ""},
    {status : ""},
    {status : ""},
    {status : ""},
    {status : ""},
    {status : ""},
    {status : ""},
    {status : ""},
    {status : ""},
    {status : ""},
  ]);

  const [score, setScore] = useState(0);
  const [gamesStarted, setGameStarted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if(gamesStarted){
        const random = Math.floor(Math.random() * moles.length);
        setMoleVisibility(random, 'active')
        setTimeout(() => {
            setMoleVisibility(random, '')
        }, 1000);
      }

    }, 2000);

    return () => {
      clearInterval(interval);
    }

  })


  function setMoleVisibility(index, isVisible) {
    setMoles((mole) => {
      const newMoles = [...mole];
      newMoles[index].status = isVisible;
      return newMoles;
    })
  }

  function hitMole(index) {
    setMoleVisibility(index, '');
    setScore((score) => score + 1);
  }



  return (
    <div>
      <h2 className='score'>SCORE {score}</h2>
      <div className='mole-board'> 
        {
          moles.map((mole, index) => (
            <Square key={index} mole={mole} index={index} hitMole={hitMole}/>
          ))}
        {
          !gamesStarted && (
            <button className='start-button' onClick={() => {setGameStarted(true)}}>START</button>
          )
        }
      </div>
    </div>
  )
}
  

