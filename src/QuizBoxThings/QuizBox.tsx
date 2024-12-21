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
    Correct:  number
  }
}
const QuizBox=({currentQuestion}: Props)=>{
  return <div className="card mt-4 w-50 p-3 mx-auto" style={{width: '18rem;'}}>

  <div className="card-body">
    <Question questionText={currentQuestion.Question}></Question>
    <h5 className="card-title">What has it gots in its pockets? Gollum wants to know</h5>
  </div>
  <ul className="list-group list-group-flush">
    <Answer answerText={currentQuestion.Answer1}></Answer>
    <Answer answerText={currentQuestion.Answer2}></Answer>
    <Answer answerText={currentQuestion.Answer3}></Answer>
    <Answer answerText={currentQuestion.Answer4}></Answer>
    <li className="list-group-item">a rock</li>
    <li className="list-group-item">a sword</li>
    <li className="list-group-item">the Birthday Ring</li>
    <li className="list-group-item">a picture of Gandalf</li>
  </ul>

</div>
}
    

export default QuizBox