import React from "react";
import { useState } from "react/cjs/react.development";


const Forms = () => {
const [name,setName]=useState();
const [fullName,SetfullName]=useState();

    const inputEvent=(event)=>{
        setName(event.target.value);
    }
    const onSubmit=()=>{
        SetfullName(name);
    }
    return (<>
        <div>
            <h1>Hello {fullName}</h1>
            <input type="text" id="txtName" placeholder="Please Enter Your Name.." onChange={inputEvent} />
            <button onClick={onSubmit}> Click Me</button>
        </div>
    </>);
}

export default Forms;