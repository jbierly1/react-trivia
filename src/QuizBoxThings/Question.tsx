interface Props{
    questionText: string
    }

const Question=({questionText}: Props)=>{
    return <div>{questionText}</div>
}

export default Question