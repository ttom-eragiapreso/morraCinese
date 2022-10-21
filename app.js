console.log("App loaded");

const choices = ["sasso", "forbice", "carta"];
let winner;
let userScore = 0;
let aiScore = 0;
let isGameOver = false;


function play(userChoice){

  let aiChoice = choices[getRandomNumber(choices.length)];

  console.log(`Il punteggio prima del round è di Utente: ${userScore}, e AI: ${aiScore}`)

    if(!isUserChoiceValid(userChoice)) {
      alert("Devi scegliere tra carta forbice o sasso")
      return
    }


    checkWinner(userChoice, aiChoice);

    checkGameOver(userScore, aiScore);









  function checkWinner(userChoice, aiChoice){
    console.log(userChoice, aiChoice)
    if(userChoice === aiChoice) console.log("pareggio");

    if(userChoice === "sasso"){
      if(aiChoice === "forbice"){
        console.log("User Wins")
        userScore++
      }else if(aiChoice === "carta"){
        console.log("Ai Wins")
        aiScore++
      }
    }

    if(userChoice === "forbice"){
      if(aiChoice === "sasso"){
        console.log("AI Wins")
        aiScore++
      }else if(aiChoice === "carta"){
        console.log("User Wins")
        userScore++
      }
    }

    if(userChoice === "carta"){
      if(aiChoice === "forbice"){
        console.log("AI Wins")
        aiScore++
      }else if(aiChoice === "sasso"){
        console.log("User Wins")
        userScore++
      }
    }

  console.log(`Il punteggio dopo questo round è di Utente: ${userScore}, e AI: ${aiScore}`)
  }


  function checkGameOver(userScore, aiScore){
    if(userScore === 2) {
      winner = "User";
      isGameOver = true;
    }else if(aiScore === 2){
      winner = "AI";
      isGameOver = true;
    }
  }

  function getRandomNumber(max){
    return Math.floor(Math.random() * max)
  }

  function isUserChoiceValid(userChoice){
    return choices.includes(userChoice)
  }
}


while(!isGameOver){
  play(prompt("Scegli tra carta, forbice e sasso"))
}

console.log(`Il vincitore è ${winner}`)