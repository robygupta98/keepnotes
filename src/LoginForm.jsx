import React, { useState } from 'react';

const LoginForm = () => {
    const [fullName, SetfullName] = useState({
        Fname: "",
        Lname: "",
        Email:"",
        Mobile:"",
    });
    const inputData = (e) => {
        // const value = e.target.value;
        // const name = e.target.name;
        const {value,name}=e.target;
        SetfullName((prevValue) => {
            return {
                ...prevValue,   // spread operator or Rest operator
                [name]:value,
            }
            // if (name === "Fname") {
            //     return{
            //     Fname : value,
            //     Lname : prevValue.Lname,
            //     Email : prevValue.Email,
            //     Mobile:prevValue.Mobile,
            //     };
            // }
            // else  if (name === "Lname") {
            //     return{
            //     Fname : prevValue.Fname,
            //     Lname : value,
            //     Email : prevValue.Email,
            //     Mobile:prevValue.Mobile,
            //     };
            // }
            // else  if (name === "Email") {
            //     return{
            //     Fname : prevValue.Fname,
            //     Lname : prevValue.Lname,
            //     Email : value,
            //     Mobile:prevValue.Mobile,
            //     };
            // }
            // else  if (name === "Mobile") {
            //     return{
            //     Fname : prevValue.Fname,
            //     Lname : prevValue.Lname,
            //     Email : prevValue.Email,
            //     Mobile:value,
            //     };
            // }
        });
    }
    const onSubmit = (e) => {
        e.preventDefault();
        // SetFname(name);
        // setLname(Lastname);
    }
    return (<>
        <form onSubmit={onSubmit}>
            <div>
                <h1> Hello {`${fullName.Fname} ${fullName.Lname}`}</h1>
                <p>{`${fullName.Email}`}</p>
                <p>{`${fullName.Mobile}`}</p>
                <input type="text" placeholder="Enter Your Name." name="Fname" onChange={inputData} id="txtFName" value={fullName.Fname} />
                <input type="text" placeholder="Enter Your Last Name." name="Lname" onChange={inputData} id="txtLName" value={fullName.Lname} />
                <input type="email" placeholder="Enter Your Email Address." name="Email" onChange={inputData} id="txtEmail" value={fullName.Email} />
                <input type="number" placeholder="Enter Your Mobile number." name="Mobile" onChange={inputData} id="txtMobile" value={fullName.Mobile} />
                <button type="submit">Login</button>
            </div>
        </form>
    </>);
}


export default LoginForm;