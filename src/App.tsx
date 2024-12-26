import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Welcome from './Welcome.tsx'
import Start from './Start.tsx'
import QuizBox from './QuizBoxThings/QuizBox.tsx'
import Buttons from './Buttons.tsx'
import TestingQuiz from './TestingQuiz.tsx'
//next tasks:
//make colors change based on correct or incorrect answer, and stay rendered that way based on status of 'answered' for that question

function App() {

  const QuestionList=[{      
    Question: "what has it got in its pockets?",
    Answer1: "rope",
    Answer2: "orc blood",
    Answer3: "the birthday ring",
    Answer4: "your mom",
    Correct:  3}]

  const [gameState,setGameState]=useState({
    CurrentQuestion: 0,
    gameStarted: false,
    answerTracker:[0],
    answersClicked:[0]
    }
)

  const answerSelector = (key: number, correct: number) => 
    {
        setGameState(prevState => { const newTracker = prevState.answerTracker.map((value, index) => index === gameState.CurrentQuestion ? (key === correct ? 1 : 2) : value );
          const newanswersClicked = prevState.answersClicked.map((value, index)=> index === gameState.CurrentQuestion ? key:value)
          console.log("Updated answerTracker:", newTracker); 
          return { ...prevState, answerTracker: newTracker, answersClicked: newanswersClicked}; }); ;
      }


  return (
    <div>
      <Welcome></Welcome>
      {!gameState.gameStarted &&<Start onClick={()=> setGameState({...gameState, gameStarted:true})}>Start</Start>}
      
      {gameState.gameStarted&&<QuizBox currentQuestion={QuestionList[gameState.CurrentQuestion]} 
      {...(gameState.answerTracker[gameState.CurrentQuestion] ==0 ? {answerSelector} : {})}
      answered={gameState.answerTracker[gameState.CurrentQuestion]}
      clicked = {gameState.answersClicked[gameState.CurrentQuestion]}
      ></QuizBox>}



      {gameState.gameStarted&&<Buttons></Buttons>}

    </div>
  )
}

export default App

/*
<Previous></Previous>
<Next></Next>*/