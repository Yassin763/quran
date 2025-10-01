
function Prayer({name , time}) {
    
    return ( 
        <>
        <div className="prayer">
            <p className="prayer-name">{name}</p>
            <p className="prayer-time">{time}</p>
        </div>
        </>
     );
}

export default Prayer;