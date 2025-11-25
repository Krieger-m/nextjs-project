import ReactMarkdown from "react-markdown";
interface RichTextProps{
    body: string;
}

export function RichText({body}:RichTextProps){
    return (
        <>
        <div style={{whiteSpace:'pre-line', marginTop: 60, marginBottom: 60,marginRight: 40,
            marginLeft: 40}}>
            <ReactMarkdown>{body}</ReactMarkdown>
        </div>
        </>
    )
}