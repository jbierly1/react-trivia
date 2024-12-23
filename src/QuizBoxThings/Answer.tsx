interface Props{
    answerText: string
    answerSelector?: (key: number, correct: number) => void,
    answerKey: number
    currentQuestion: {
        Question: string,
        Answer1: string,
        Answer2: string,
        Answer3: string,
        Answer4: string,
        Answered: boolean,
        AnsweredCorrectly: boolean,
        Correct:  number,
      }
    }

const Answer=({answerText, answerSelector, currentQuestion, answerKey}: Props)=>{
    return <li className="list-group-item" onClick= {answerSelector ?()=> answerSelector(answerKey, currentQuestion.Correct): undefined}>{answerText}</li>
    }
export default Answer

//next step make right or wrong answer visible with green or red

//then have a score which is being updated

//then make the onclick only work once