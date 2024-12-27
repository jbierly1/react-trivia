import Previous from './Previous.tsx'
import Next from './Next.tsx'

interface Props{
    currentQuestionUpdater: (prevOrNext: number)=> void
    currentQuestion: number
}


const Buttons=({currentQuestionUpdater, currentQuestion}: Props)=>{
    return <div className="container position-relative mt-3 w-50 p-3 mx-auto">
    <Previous currentQuestionUpdater={currentQuestionUpdater} usable={currentQuestion===0? false:true}></Previous>
    <Next currentQuestionUpdater={currentQuestionUpdater}></Next>
    </div>
}


export default Buttons