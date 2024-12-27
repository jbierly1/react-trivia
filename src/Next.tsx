interface Props{
    currentQuestionUpdater:(prevOrNext: number)=>void
    usable:boolean
}


const Next=({currentQuestionUpdater,usable}: Props)=>{
    const classer=usable? "btn btn-primary position-absolute bottom-0 end-0": "btn btn-secondary position-absolute bottom-0 end-0"
    const clickHandler=usable? ()=>currentQuestionUpdater(0):undefined
    return <button type="button" className={classer} onClick={()=>currentQuestionUpdater(1)}>Next</button>
}

export default Next