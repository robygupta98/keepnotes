import React from "react";
import { useState } from "react/cjs/react.development";


const Eventhandling = () => {
    const purple = "yellow";
    const [Name, setName] = useState('Click Me');
    const [bg, setBg] = useState(purple);
    const bgChange = () => {
        let newBg = "#34495e";
        setBg(newBg);
        setName("Welcome");
    }
    const DbbgChange = () => {
        let newBg = "yellow";
        setBg(newBg);
        setName("Click Me");
    }
    return (<>
        <div style={{ backgroundColor: bg }}>
            <button onClick={bgChange} onDoubleClick={DbbgChange}> {Name}</button>
        </div>
    </>);
}

export default Eventhandling;