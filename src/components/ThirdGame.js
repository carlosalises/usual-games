import Figure from '../Figure';
import '../components/style/ThirdGame.css'
import {useEffect, useState } from 'react';
import Word from './Word';
import Status from '../Status';

const words = ['CABRA', 'PIZZA', 'ORDENADOR', 'FARMACIA'];
let word = words[Math.floor(Math.random()*words.length)];


export default function ThirdGame() {
  
  
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [buttonGame, setButtonGame] = useState(true);
  const [playable, setPlayable] = useState(false);

  useEffect(() => {
    
    const handleKeyDown = (event) => {

      const validKeys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const {key} = event;
      const letter = key.toUpperCase();


        
        if(playable === true){
          if(validKeys.includes(letter)){
            if (word.includes(letter)) {
              if(!correctLetters.includes(letter)){
                setCorrectLetters(currentLetters => [...currentLetters, letter])
              }
            }else{
              if(!word.includes(event.key.toUpperCase()))
                if(!wrongLetters.includes(letter)){
                  setWrongLetters(wrongLetters => [...wrongLetters, letter]);
                }
            }
          }
        }
        
        
    
    };


    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };

  }, [correctLetters, wrongLetters, playable]);

  
  function startGame(){
    setCorrectLetters([]);
    setPlayable(true);
    setWrongLetters([]);
    setButtonGame(false);
    word = words[Math.floor(Math.random()*words.length)];
  }


  return (
    <article className='content'>
        <Figure wrongLetters={wrongLetters}/>
        <div className='wrong-letters'>
          {
            wrongLetters.map((letter, index) => (
              <span key={index}>{letter} </span>
            ))
          }
        </div>
       <Word selectedWord={word} correctLetters={correctLetters} playable={playable} />
       <Status correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={word} setPlayable={setPlayable} setButton={setButtonGame}/>
       {buttonGame && (
         <button onClick={() => {
          startGame();
        }} className='start-button'>START</button>
       )
       }
    </article>
  )
}
