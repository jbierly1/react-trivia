import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Welcome from './Welcome.tsx'
import Start from './Start.tsx'
import QuizBox from './QuizBoxThings/QuizBox.tsx'
import Buttons from './Buttons.tsx'

function App() {

  const [gameStarted,setGameStarted]=useState(false)
  return (
    <div>
      <Welcome></Welcome>
      {!gameStarted &&<Start onClick={()=> setGameStarted(true)}>Start</Start>}
      {gameStarted&&<QuizBox></QuizBox>}
      {gameStarted&&<Buttons></Buttons>}

    </div>
  )
}

export default App

/*
<Previous></Previous>
<Next></Next>*/