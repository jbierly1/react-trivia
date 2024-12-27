interface Props{
    currentQuestionUpdater:(prevOrNext: number)=>void
}


const Next=({currentQuestionUpdater}: Props)=>{
    return <button type="button" className="btn btn-primary position-absolute bottom-0 end-0" onClick={()=>currentQuestionUpdater(1)}>Next</button>
}

export default Next