import React from 'react'

export default function Word({selectedWord, correctLetters, playable}) {
  return (
    <div id='word'>
      {
        playable && (
          <div>
              {selectedWord.split("").map((letter, index) => (
                <span key={index}>{correctLetters.includes(letter) ? letter : "_"}</span>
              ))}
          </div>
        )
      }
 </div>
  )
}
