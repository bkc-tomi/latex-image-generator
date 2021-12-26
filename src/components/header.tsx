import React from "react";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import Img from "../img/GitHub-Mark-Light-32px.png";

const Header = () => {
    const latex = `$\\LaTeX$ Image Generator`;
    return (
        <div className="bg-green-500 w-screen h-16 flex justify-between">
            <h1 className="text-xl md:text-3xl font-serif font-bold text-white p-2">
                <Latex>
                    { latex }
                </Latex>
            </h1>
            <div className="w-16 h-16 flex justify-center items-center">
                <a
                    href="https://github.com/bkc-tomi/latex-image-generator"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={ Img } alt="github link" />
                </a>
            </div>
        </div>
    );
}

export default Header;