interface Props{
    questionText: string
    }

const Question=({questionText}: Props)=>{
    return <h5 className="card-title">{questionText}</h5>
}

export default Question