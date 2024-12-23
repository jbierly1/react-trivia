import Question from './Question.tsx'
import Answer from './Answer.tsx'

interface Props{
  currentQuestion: {
    Question: string,
    Answer1: string,
    Answer2: string,
    Answer3: string,
    Answer4: string,
    Answered: boolean,
    AnsweredCorrectly: boolean,
    Correct:  number,
  },
  answerSelector?: (key: number, correct: number) => void,
  answerTracker: Array<number>,
  currentQuestionNotAnswered:boolean
}


const QuizBox=({currentQuestion, answerSelector}: Props)=>{
  return <div className="card mt-4 w-50 p-3 mx-auto" style={{width: '18rem;'}}>

  <div className="card-body">
    <Question questionText={currentQuestion.Question}></Question>
  </div>
  <ul className="list-group list-group-flush">
    <Answer answerKey={1} answerText={currentQuestion.Answer1} answerSelector={answerSelector} currentQuestion={currentQuestion}></Answer>
    <Answer answerKey={2} answerText={currentQuestion.Answer2} answerSelector={answerSelector} currentQuestion={currentQuestion}></Answer>
    <Answer answerKey={3} answerText={currentQuestion.Answer3} answerSelector={answerSelector} currentQuestion={currentQuestion}></Answer>
    <Answer answerKey={4} answerText={currentQuestion.Answer4} answerSelector={answerSelector} currentQuestion={currentQuestion}></Answer>
  </ul>

</div>
}
    

export default QuizBox