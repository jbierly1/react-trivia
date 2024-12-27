interface Props{
    gameScore: number
}

const Score = ({gameScore}:Props)=>{
    return <div className='position-absolute top-0 end-0 m-1'><h2 className="badge bg-info">Score: {gameScore.toString()}</h2></div>

}

export default Score