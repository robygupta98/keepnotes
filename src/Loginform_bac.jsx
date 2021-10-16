import React from "react";
import { useState } from "react/cjs/react.development";


const Loginform = () => {
const [name,setName]=useState("");
const [Password,SetPassword]=useState("");
const [fullName,SetfullName]=useState("");
const [Pass,SetPasswordD]=useState("");

    const inputEvent=(event)=>{
        setName(event.target.value);
    }
    const inputEvent2=(e)=>{
        SetPassword(e.target.value);
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        SetfullName(name);
        SetPasswordD(Password);
    }
    return (<>
    <form onSubmit={onSubmit}>
        <div>
            <h1>Hello {fullName} {Pass}</h1>
            <input type="text" id="txtName" placeholder="Please Enter Your Name.." onChange={inputEvent} value={name} />
            <input type="text" id="txtPassword" placeholder="Please Enter Password.." onChange={inputEvent2} value={Password} />
            <button type="submit"> Click Me</button>
        </div>
        </form>
    </>);
}

export default Loginform;