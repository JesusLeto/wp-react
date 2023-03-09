import React from "react";
import "./style.scss";

interface AppProp {
    message: string
}

const App = ({message}: AppProp) => {
    return (
        <div className="App">
            <div className="block">
                <h1>Red {message}</h1>
            </div>
            <div>
                <h1>{message}</h1>
            </div>
        </div>
    )
}

export default App