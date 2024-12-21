import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Welcome from './Welcome.tsx'
import Start from './Start.tsx'
import QuizBox from './QuizBoxThings/QuizBox.tsx'
import Buttons from './Buttons.tsx'

function App() {

  return (
    <div>
      <Welcome></Welcome>
      <Start></Start>
      <QuizBox></QuizBox>
      <Buttons></Buttons>

    </div>
  )
}

export default App

/*
<Previous></Previous>
<Next></Next>*/