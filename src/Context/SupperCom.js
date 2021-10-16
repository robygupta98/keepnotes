import React, { createContext } from 'react';
import CompA from "./CompA";
import "../Context/Context.css";

const FirstName = createContext();
const LastName = createContext();

const SupperCom = () => {
    return (
        <>
            <FirstName.Provider value={"Roby"}>
                <LastName.Provider value={"gupta"}>
                    <CompA />
                </LastName.Provider>
            </FirstName.Provider>
        </>
    )
};

export default SupperCom;
export { FirstName,LastName };
