import React from 'react';
import '../styles/codeSnippet/codeSnippet.css';

export const codeArea = (...argument) => {
    const copyTheText = () => {
      return navigator.clipboard.writeText(argument.join(" "));
    };

    return (
      <div className="code-area">
        <div>
          {argument.map((text, key) => {
            return <span key={key}>{text}</span>
          })}
        </div>
        <button onClick={copyTheText}>copy</button>
      </div>
    );
  };
