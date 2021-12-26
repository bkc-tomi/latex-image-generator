import React, { useState } from 'react';
import Header from './components/header';
import {ResultLatex, ResultImage } from './components/result';
import Editor from './components/editor';
import * as htmlToImage from 'html-to-image';
import { Img } from './img/firstImg';

function App() {
  const [tex, setTex] = useState(`$a \\ne 0$のとき、2次方程式 \\(ax^2 + bx + c = 0\\) の解は
$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$`);
  const [texImg, setTexImg] = useState(Img);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "tex":
        // 内容の更新
        const newTex:string = event.target.value;
        setTex(newTex);

        // 画像の生成
        const elm = document.getElementById("result-view");
        if (elm) {
          htmlToImage.toPng(elm)
          .then(function(dataUrl) {
            setTexImg(dataUrl);
          })
          .catch(function (error) {
            console.error('oops, something went wrong!', error);
          });
        }
        break;
      default:
        console.log("入力は処理されていません。");
    }
  }

  return (
    <div className='w-screen h-screen bg-green-50 box-border'>
      <div className='h-16'>
        <Header />
      </div>
      <div 
        className='w-full p-2'
        style={{height: "calc(100% - 4rem)"}}
      >
        <div className={`
        w-full h-full
        grid grid-cols-1 divide-y divide-green-500
        md:grid-cols-2 md:divide-y-0 md:divide-x
        `}
        >
          <div 
            className='md:pr-2'
            id="editor-area"
          >
            <h2 className='font-bold'>ここに書きましょう：</h2>
            <Editor latex={ tex } setLatex={ handleChange } />
          </div>

          <div 
            className='md:pl-2'
            id="result-area"
          >
            <h2 className='font-bold'>結果がされます：</h2>
            <div 
              className='grid grid-rows-2'
              style={{height: "calc(100% - 4rem)"}}
            >
              <div>
                <ResultLatex latex={ tex } />
              </div>
              <div>
                <ResultImage texImg={ texImg } />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
