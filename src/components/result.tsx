import React from "react";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

type Props = {
    latex: string,
}

const Result = ({ latex }: Props) => {
    return (
        <div 
            className={`
            bg-white border text-2xl p-2 rounded
            `}
            style={{ height: "calc(100% - 2rem)"}}
        >
            <div id="result-view" className="hidden p-2 w-full">
                <Latex>
                    { latex }
                </Latex>
            </div>

            <img id="result-img" className="" />
        </div>
    )
}

export default Result;