export function checkWin (correctLetters, wrongLetters, word) {

    let status = 'win';

    word.split('').forEach((letter) =>{
      if(!correctLetters.includes(letter))
      {
        status = '';
      }
    })
      
    if(wrongLetters.length === 5){
      status = 'lose';
    }

    return status;

  }