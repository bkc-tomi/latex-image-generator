import React from "react";

type Props = {
    latex:string,
    setLatex: Function,
}

const Editor = ({ latex, setLatex }: Props) => {
    return (
        <div 
            className="box-border"
            style={{height: "calc(100% - 2rem)"}}
        >
            <textarea
                value={ latex }
                name="tex"
                className="w-full h-full bg-white-50 border box-border rounded"
                onChange={e => setLatex(e)}
            >
            </textarea>
        </div>
    )
}

export default Editor;