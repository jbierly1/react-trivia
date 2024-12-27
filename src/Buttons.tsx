import Previous from './Previous.tsx'
import Next from './Next.tsx'

interface Props{
    currentQuestionUpdater: (prevOrNext: number)=> void
    currentQuestion: number
    gameEnded: boolean
}


const Buttons=({currentQuestionUpdater, currentQuestion, gameEnded}: Props)=>{
    return <div className="container position-relative mt-3 w-50 p-3 mx-auto">
    <Previous currentQuestionUpdater={currentQuestionUpdater} usable={currentQuestion===0? false:true}></Previous>
    <Next currentQuestionUpdater={currentQuestionUpdater} usable={gameEnded? false:true}></Next>
    </div>
}


export default Buttons