import Score from './QuizBoxThings/Score.tsx'
import Reset from './Reset.tsx'

interface Props{
    gameScore: number,
    gameResetter: ()=>void
}

const FinalScreen=({gameScore, gameResetter}:Props)=>{
    return (<div className="card mt-4 w-50 p-3 mx-auto" style={{width: '18rem;'}}>
        <h1>Game Complete</h1>
        <Score gameScore={gameScore}></Score>
        <Reset gameResetter={gameResetter}></Reset>
    </div>)
}

export default FinalScreen