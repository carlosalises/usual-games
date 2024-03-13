import React, {useState } from 'react'
import './style/FirstGame.css'

export default function FirstGame() {

  const [gamePreview, setGamePreview] = useState(true);
  const [game, setGame] = useState(false);
  const [result, setResult] = useState(false);
  const [pickScene, setPickScene] = useState(false);
  const [enableButton, setEnableButton] = useState(true);
  
  const [imagePickYou, setImagePickYou] = useState("");
  const [imagePickMachine, setImagePickMachine] = useState("");
  const [resultGame, setResultGame] = useState("");


  const gamePicks = {
    STONE : 'STONE', 
    PAPER : 'PAPER', 
    SCISSORS : 'SCISSORS'
  };

  const startGame = () => {
    setEnableButton(false);
    setResult(false);
    setGamePreview(false);
    setGame(true);
    setPickScene(true);
  }


  const chooseOption = (userOption) => {
    const machinePick = IAItemSelection();
    checkResult(userOption, machinePick);
  }
  
  const checkResult = (userOption, machinePick) => {
    
      setPickScene(false);
      setResult(true);
      setEnableButton(true);
      
      setImagePickYou("/images/first-game/"+ userOption +".png");
      setImagePickMachine( "/images/first-game/"+ machinePick +".png");

      if(userOption === machinePick){
        setResultGame("TIE");
      }else{
        if (userOption === gamePicks.STONE) {
          setResultGame(machinePick === gamePicks.PAPER ? "YOU LOSE" : "YOU WIN");
      } else if (userOption === gamePicks.PAPER) {
          setResultGame(machinePick === gamePicks.SCISSORS ? "YOU LOSE" : "YOU WIN");
      } else if (userOption === gamePicks.SCISSORS) {
          setResultGame(machinePick === gamePicks.STONE ? "YOU LOSE" : "YOU WIN");
      }
      }
  }

  const IAItemSelection = () => {
    const statusKeys = Object.keys(gamePicks);
    const randomIndex = Math.floor(Math.random() * statusKeys.length);
    return gamePicks[statusKeys[randomIndex]];
  }


  return (

    <article className='general-game'>

      {gamePreview && (
        <div className='game-preview'>
            <img src="/images/first-game/STONE.png" alt="stone"></img>
            <img src="/images/first-game/PAPER.png" alt="paper"></img>
            <img src="/images/first-game/SCISSORS.png" alt="stone"></img>
        </div>
      )}
      
      {game && (
        <div>
          <h1>ESCOGE UNO</h1>
          {pickScene && (
            <div className='game-content'>
                <button onClick={() => chooseOption(gamePicks.STONE)}>
                  <img src="/images/first-game/STONE.png" alt="stone"></img>
                </button>
                <button onClick={() => chooseOption(gamePicks.PAPER)}>
                  <img src="/images/first-game/PAPER.png" alt="paper"></img>
                </button>
                <button onClick={() => chooseOption(gamePicks.SCISSORS)}>
                  <img src="/images/first-game/SCISSORS.png" alt="scissors"></img>
                </button>
            </div>
          )}
          {result && (
            <div className='result'>
              <div>
                <img src={imagePickYou} alt=""></img>
                <img src={imagePickMachine} alt=""></img>
              </div>
              <p>{resultGame}</p>
            </div>
          )}
        </div>
      )}
      { enableButton === true && (
        <button className='start-button' onClick={startGame}>START GAME</button>
      )
      }
     
    </article>
            


  )
}
