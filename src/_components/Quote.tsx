interface QuoteProps{
    title: string;
    body: string;
}

export function Quote({title,body}:QuoteProps){
    return(
        <>
            <div style={{border: '2px solid white', borderRadius: 10, padding: 20}}>
                <h2>{title}</h2>
                <br/>
                <p>- {body} -</p>
            </div>
        </>
    )
}