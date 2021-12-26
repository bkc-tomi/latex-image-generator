import React from "react";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

const Header = () => {
    const latex = `$\\LaTeX$ Image Generator`;
    return (
        <div className="bg-green-500 w-screen h-16">
            <h1 className="text-xl md:text-3xl font-serif font-bold text-white p-2">
                <Latex>
                    { latex }
                </Latex>
            </h1>
        </div>
    );
}

export default Header;