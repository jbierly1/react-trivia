import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Welcome from './Welcome.tsx'
import Start from './Start.tsx'
import QuizBox from './QuizBoxThings/QuizBox.tsx'

function App() {

  return (
    <div className="mx-auto mw-25">
      <Welcome></Welcome>
      <Start></Start>
      <QuizBox></QuizBox>

    </div>
  )
}

export default App

/*
<Previous></Previous>
<Next></Next>*/