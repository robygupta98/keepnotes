import React from 'react';
import { useState } from 'react/cjs/react.development';
import "./Accordian.css";
import { questions } from "./api";
import MyAccordian from "./MyAccordian";

const Accordian = () => {
    const [data, SetData] = useState(questions);
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1>React interview Question</h1>
                    {
                        data.map((curElem) => {
                            return <MyAccordian key={curElem.id} {...curElem} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Accordian
