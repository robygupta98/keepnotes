import React from 'react'

const MyAccordian = ({ id,question, answer }) => {
    return (
        <>
            <h4>Qus {id}. {question}</h4>
            <p>Ans {id}. {answer}</p>
        </>
    )
}

export default MyAccordian
