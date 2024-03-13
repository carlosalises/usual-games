import React, { useState } from 'react'
import Card from './Card';
import './FourthGame.css'


export default function Cards() {

  const [cards, setCard] = useState( [
      {id : 1, status : ""},
      {id : 1, status : ""},
      {id : 2, status : ""},
      {id : 2, status : ""},
      {id : 3, status : ""},
      {id : 3, status : ""},
      {id : 4, status : ""},
      {id : 4, status : ""},
      {id : 5, status : ""},
      {id : 5, status : ""},
      {id : 6, status : ""},
      {id : 6, status : ""},
  ].sort(() => Math.random() - .5));


  const [startGame, setStartGame] = useState(false);
  const [canClick, setCanClick] = useState(true);
  const [prevNum, setPrevNum] = useState(-1);

  function checkPickResult(index) {

    if(cards[index].id === cards[prevNum].id){
        cards[index].status = 'correct';
        cards[prevNum].status = 'correct';
        setCard([...cards]);
        setCanClick(true);
    }else{
      cards[index].status = "wrong";
      cards[prevNum].status = "wrong";
      setCard([...cards]);
      setTimeout(() => {
        cards[index].status = "";
        cards[prevNum].status = "";
        setCard([...cards]);
        setCanClick(true);
      }, 1000);
    }
    setPrevNum(-1);
  }

  function onClickCard (index) {
    
    if(startGame){
        if(cards[index].status === '' && canClick){
          if(prevNum === -1){
            cards[index].status = 'active';
            setCard([...cards]);
            setPrevNum(index);
          }else {
            setCanClick(false);
            checkPickResult(index);      
          }
        }
    }

  }
  
  
  
  return (
    <div className='cards'>
        {cards.map((card, index)=>(
              <Card key={index} index={index} card={card} onClickCard={onClickCard}/>
        ))}
        {!startGame && (
          <button className='start-button' onClick={() => {setStartGame(true)}}>START</button>
        )
        }
    </div>
  )


}
