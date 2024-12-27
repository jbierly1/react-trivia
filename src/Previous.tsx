interface Props{
    currentQuestionUpdater:(prevOrNext: number)=>void
    usable: boolean
}


const Previous=({currentQuestionUpdater, usable}: Props)=>{
    const classer=usable? "btn btn-primary position-absolute bottom-0 start-0": "btn btn-secondary position-absolute bottom-0 start-0"
    const clickHandler=usable? ()=>currentQuestionUpdater(0):undefined
    return (
    <button type="button" className={classer} onClick={clickHandler}>Prev</button>
)
}

export default Previous;