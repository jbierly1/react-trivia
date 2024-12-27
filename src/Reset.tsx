interface Props{
    gameResetter:()=>void
}

const Reset=({gameResetter}:Props)=>{
    return(<button type="button" className="btn btn-primary btn-lg" onClick={()=>gameResetter()}>PLAY AGAIN</button>)
}

export default Reset