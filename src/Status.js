import React from 'react'
import { checkWin } from './helper'

export default function Status({correctLetters, wrongLetters, selectedWord, setPlayable, setButton}) {

  let message = '';

  if(checkWin(correctLetters, wrongLetters, selectedWord) === 'win'){
    console.log("SUU");
    message = 'WIN';
    setButton(true);
    setPlayable(false);
  }

  else if(checkWin(correctLetters, wrongLetters, selectedWord) === 'lose'){
    message = 'FALSE';
    setButton(true);
    setPlayable(false);
  }

  return (
    <div>
        {
            message !== '' && (
                <p style={{textAlign:"center"}}>{message}</p>
            )
        }
    </div>
  )
}
