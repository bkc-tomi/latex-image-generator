import React from "react";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

type Props = {
    latex: string,
}

const ResultLatex = ({ latex }: Props) => {
    return (
        <div>
            <h3 className="text-xl font-bold">
                <Latex>$\LaTeX$</Latex>表示
            </h3>
            <div 
                className={`
                bg-white border text-2xl p-2 rounded
                `}
            >
                <div id="result-view" className="p-2 w-full">
                    <Latex>
                        { latex }
                    </Latex>
                </div>

            </div>
        </div>
    )
}

type ImgProps = {
    texImg: string,
}

const ResultImage = ({texImg}: ImgProps) => {
    return (
        <div>
            <h3 className="text-xl font-bold">
                画像表示
            </h3>
            <div className="bg-white border text-2xl p-2 rounded">
                <img src={ texImg } id="result-img" alt="latex_image" />
            </div>
        </div>
    )
}

export {ResultLatex, ResultImage };