import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Welcome from './Welcome.tsx'
import Start from './Start.tsx'
import QuizBox from './QuizBoxThings/QuizBox.tsx'
import Buttons from './Buttons.tsx'
import TestingQuiz from './TestingQuiz.tsx'
//next tasks:
//copy formatting for question and answer down into thir components, delete the duplication
//replace the text w <answer></answer> in quizbox
//pass current question down as props to quizbox and then its components, populate them

  //rework state so 'gamestarted' is just one part of an object
  //add a state for keeping track of score, should track right or wrong as selected for the questoin (later will be for each question)
  //question refactored entry 0 of an array of question objects, should still display in quiz box
  //quiz box should track which answer was clicked and display green if correct, red if wrong, and update score(just console log score as we go for now)
  //make list of 20 questions, w 'right' marked and each able to store if right or wrong or none was clicked
  //use forward and back buttons to move through the questions(but once they're wrong canot be altered)
  //at this point shouold move through questions,register right and wrong or none w color change
  //when question index =20, next button turns to 'see score'
  //make score and play again components
  //if next button (w its new text) clicked when indedx=20, stop displaying questions
  //then display score and play again components, populate score
  //make play again functionality work
function App() {

  const QuestionList=[{      
    Question: "what has it got in its pockets?",
    Answer1: "rope",
    Answer2: "orc blood",
    Answer3: "the birthday ring",
    Answer4: "your mom",
    Answered: false,
    AnsweredCorrectly: false,
    Correct:  3}]

  const [gameState,setGameState]=useState({
    CurrentQuestion: QuestionList[0],
    gameStarted: false,
    answerTracker:[0],
    currentQuestionNotAnswered: true,
    }
)

  const answerSelector = (key: number, correct: number) => 
    {console.log("Selected key:", key, "Correct key:", correct); 
      if (!gameState.currentQuestionNotAnswered) {return}
      else{
        setGameState(prevState => { const newTracker = prevState.answerTracker.map((value, index) => index === 0 ? (key === correct ? 1 : 2) : value ); 
          console.log("Updated answerTracker:", newTracker); 
          return { ...prevState, answerTracker: newTracker }; }); };
      }


  return (
    <div>
      <Welcome></Welcome>
      {!gameState.gameStarted &&<Start onClick={()=> setGameState({...gameState, gameStarted:true})}>Start</Start>}
      
      {gameState.gameStarted&&<QuizBox currentQuestion={gameState.CurrentQuestion} 
      answerTracker={gameState.answerTracker}
      {...(gameState.currentQuestionNotAnswered) ? {answerSelector}: {}}
      currentQuestionNotAnswered={gameState.currentQuestionNotAnswered}
      ></QuizBox>}



      {gameState.gameStarted&&<Buttons></Buttons>}

    </div>
  )
}

export default App

/*
<Previous></Previous>
<Next></Next>*/