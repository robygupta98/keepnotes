import React from 'react'
import { FirstName, LastName } from "../Context/SupperCom";

const CompC = () => {
    return (
        <>
            <FirstName.Consumer>
                {(fName) => {
                    return (
                        <LastName.Consumer>
                            {(lName) => {
                                return (
                                    < h1 > My name is dfgb {fName} {lName}</h1>
                                )
                            }}
                        </LastName.Consumer>
                    )
                }}
            </FirstName.Consumer>
        </>
    )
}

export default CompC
