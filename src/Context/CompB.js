import React from 'react';
import { FirstName, LastName } from "../Context/SupperCom";
import { useContext } from 'react/cjs/react.development';

const CompB = () => {
    const fName=useContext(FirstName);
    const lName=useContext(LastName);
    return (
       <>
           <h1> My name is {fName} {lName}</h1>
       </>
    )
}

export default CompB
