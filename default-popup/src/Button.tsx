import React from 'react';
import { createWatchCompilerHost } from 'typescript';

const clickAction = () => {
    chrome.runtime.sendMessage(
        { type: "hello" },
        function (response) {
            console.log(response);
        });
}

const Button: React.FC = () => {

    return (
        <><button onClick={clickAction}>ใในใ</button></>
    )
}

export default Button