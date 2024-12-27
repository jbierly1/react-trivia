import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Welcome from './Welcome.tsx'
import Start from './Start.tsx'
import QuizBox from './QuizBoxThings/QuizBox.tsx'
import Buttons from './Buttons.tsx'
import TestingQuiz from './TestingQuiz.tsx'
import FinalScreen from './FinalScreen.tsx'
//next tasks:
//make colors change based on correct or incorrect answer, and stay rendered that way based on status of 'answered' for that question

function App() {

  const QuestionList=[{      
    Question: "what has it got in its pockets?",
    Answer1: "rope",
    Answer2: "orc blood",
    Answer3: "the birthday ring",
    Answer4: "your mom",
    Correct:  3},
  {   Question: "Axolotls are from what country?",
    Answer1: "France",
    Answer2: "Mexico",
    Answer3: "China",
    Answer4: "Ukraine",
    Correct:  2

  },
  {Question: "Axolotls have how many gills?",
  Answer1: "6",
  Answer2: "5",
  Answer3: "3",
  Answer4: "2",
  Correct:  1},
  {Question: "Pikachu is what type?",
    Answer1: "fire",
    Answer2: "water",
    Answer3: "earth",
    Answer4: "electric",
    Correct:  4},
    {Question: "A first computer program in any language is?",
      Answer1: "Hello Bob",
      Answer2: "Hello world",
      Answer3: "Hello weirdo",
      Answer4: "Thank you next",
      Correct:  2},
      {Question: "Dori comes with",
        Answer1: "Gandalf",
        Answer2: "Larry the Cucumber",
        Answer3: "Nori",
        Answer4: "Balin",
        Correct:  3},
        {Question: "Deadpool loves?",
          Answer1: "Tacos",
          Answer2: "Ice Cream",
          Answer3: "Orange Juice",
          Answer4: "Chimichangas",
          Correct:  4},
          {Question: "Gandalf is a?",
            Answer1: "Grey Wizard then White",
            Answer2: "Purple Wizard then Teal",
            Answer3: "Brown Wizard then Turquoise",
            Answer4: "Polite House Guest",
            Correct:  1},
            {Question: "Spiderman is really?",
              Answer1: "Uncle Ben",
              Answer2: "Miles Morales or Peter Parker",
              Answer3: "Batman",
              Answer4: "Green Lantern",
              Correct:  2},
              {Question: "What state is Chicago in?",
                Answer1: "Illinois",
                Answer2: "Georgia",
                Answer3: "Nebraska",
                Answer4: "Maine",
                Correct:  1},
                {Question: "Python is a ___ language?",
                  Answer1: "Low level",
                  Answer2: "symbolic compiled",
                  Answer3: "High level interpreted",
                  Answer4: "Type controlled C-type",
                  Correct:  3},
                  {Question: "Pigs cannot?",
                    Answer1: "Fly",
                    Answer2: "Eat",
                    Answer3: "Breath",
                    Answer4: "oink",
                    Correct:  1},
                    {Question: "The president of China is?",
                      Answer1: "Justin Trudeau",
                      Answer2: "Deng Xiaoping",
                      Answer3: "Xi Jinping",
                      Answer4: "Mao Zedong",
                      Correct:  3},
                      {Question: "A how many nation army couldn't hold me back?",
                        Answer1: "1",
                        Answer2: "4",
                        Answer3: "80000000",
                        Answer4: "7",
                        Correct:  4},
                        {Question: "Do you mean to say it is a good morning or that you wish I should have one?",
                          Answer1: "Both, I guess, or neither, or...",
                          Answer2: "Shut up Gandalf",
                          Answer3: "I need a snack",
                          Answer4: "no adventures thank you",
                          Correct:  1},
                          {Question: "2+2 is?",
                            Answer1: "5",
                            Answer2: "4",
                            Answer3: "400",
                            Answer4: "97",
                            Correct:  2},
                            {Question: "Santa lives at the?",
                              Answer1: "West Pole",
                              Answer2: "South Pole",
                              Answer3: "North Pole",
                              Answer4: "McDonalds",
                              Correct:  3},
                              {Question: "What is NOT a type of berry?",
                                Answer1: "Straw",
                                Answer2: "Hay",
                                Answer3: "Blue",
                                Answer4: "Goose",
                                Correct:  2},
                                {Question: "Superman is really?",
                                  Answer1: "me",
                                  Answer2: "Lois Lane",
                                  Answer3: "Clark Kent",
                                  Answer4: "Perry White",
                                  Correct:  3},
                                  {Question: "Thou shalt not?",
                                    Answer1: "Pass",
                                    Answer2: "Smile",
                                    Answer3: "Eat with tail",
                                    Answer4: "Be seen in public",
                                    Correct:  1},
]

  const [gameState,setGameState]=useState({
    CurrentQuestion: 0,
    gameStarted: false,
    answerTracker:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    answersClicked:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    score: 0,
    gameEnded:false
    }
)
  const initialState = {
    CurrentQuestion: 0,
    gameStarted: false,
    answerTracker:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    answersClicked:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    score: 0,
    gameEnded:false
  }

  const answerSelector = (key: number, correct: number) => 
    {
        setGameState(prevState => { const newTracker = prevState.answerTracker.map((value, index) => index === gameState.CurrentQuestion ? (key === correct ? 1 : 2) : value );
          const newanswersClicked = prevState.answersClicked.map((value, index)=> index === gameState.CurrentQuestion ? key:value)
          const newScore= key === correct ? prevState.score+1:prevState.score
          console.log("Updated answerTracker:", newTracker); 
          return { ...prevState, answerTracker: newTracker, answersClicked: newanswersClicked, score:newScore}; });
      }

    const currentQuestionUpdater = (prevOrNext: number) =>
      {setGameState(prevState => 
        {const newCurrentQuestion= prevOrNext === 0 ? prevState.CurrentQuestion-1: prevState.CurrentQuestion +1
          const didWeEnd= newCurrentQuestion>19? true:false
          console.log(didWeEnd)
          return {...prevState, CurrentQuestion: newCurrentQuestion, gameEnded: didWeEnd}
  })

    }

    const gameResetter = () =>{
      console.log('fired')
      setGameState(initialState)
    }


  return (
    <div>
      {!gameState.gameStarted&&!gameState.gameEnded&&<Welcome></Welcome>}
      {!gameState.gameStarted &&!gameState.gameEnded&&<Start onClick={()=> setGameState({...gameState, gameStarted:true})}>Start</Start>}
      {gameState.gameEnded&&<FinalScreen gameScore={gameState.score} gameResetter={gameResetter}></FinalScreen>}
      {gameState.gameStarted&&!gameState.gameEnded&&<QuizBox currentQuestion={QuestionList[gameState.CurrentQuestion]} 
      {...(gameState.answerTracker[gameState.CurrentQuestion] ==0 ? {answerSelector} : {})}
      answered={gameState.answerTracker[gameState.CurrentQuestion]}
      clicked = {gameState.answersClicked[gameState.CurrentQuestion]}
      gameScore={gameState.score}

      ></QuizBox>}



      {gameState.gameStarted&&<Buttons currentQuestionUpdater = {currentQuestionUpdater} currentQuestion={gameState.CurrentQuestion} gameEnded={gameState.gameEnded}></Buttons>}

    </div>
  )
}

export default App

/*
<Previous></Previous>
<Next></Next>*/