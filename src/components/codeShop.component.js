import React, { useState } from 'react';
import '../styles/codeShop/codeShop.css';


function CodeShop() {

    const [codeArea, setCodeArea] = useState("");
    const [codeResult, setCodeResult] = useState({
        success: null,
        erorr: {
            name: null,
            message: null
        }
    });

    const onCodeAreaChange = e => {
        setCodeArea(e.target.value);
    };

    const executeCodeArea = () => {
        try {
            let result = eval(codeArea);
            setCodeResult({
                erorr: {
                    name: null,
                    message: null
                },
                success: result
            });
        } catch (err) {
            setCodeResult({
                success: null,
                erorr: {
                    name: err.name,
                    message: err.message
                }
            });
        } 
    };

    const codeAreaInput = () => {
        return (
            <div className="code-area-input">
                <textarea 
                    placeholder="your code goes here...." 
                    spellCheck="false"
                    value={codeArea}
                    onChange={onCodeAreaChange}
                />
            </div>
        );
    };

    const codeAreaResult = () => {
        return (
            <div className="code-area-result">
                {codeResult.success ? (
                    <div className="success">
                        <span>{codeResult.success}</span>
                    </div>
                ) : (
                    <div className="error">
                        <span>{codeResult.erorr.name}</span>
                        <span>{codeResult.erorr.message}</span>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="work-shop">
            {codeAreaInput()}
            {codeAreaResult()}
            <button onClick={executeCodeArea}>run my code</button>
        </div>
    );
};

export default CodeShop;