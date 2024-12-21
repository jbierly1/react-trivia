interface Props{
    children: string;
    onClick: () => void;
}

function Start({children, onClick}: Props){
    return <div className='mx-auto w-25 p-3 mx-auto' style={{width: '18rem;'}}
    onClick={onClick}><button type="button" className="btn btn-primary">{children}</button></div>
}

export default Start