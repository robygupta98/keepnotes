import React from 'react';

function add(a,b) {
    return (a+b);
}
function sub(a,b) {
    return (a-b);
}
function div(a,b) {
    return (a/b).toFixed(2);
}
function mult(a,b) {
    return (a*b);
}

function Calculater() {
    return (
        <>
            <ul>
                <li>Sum of two no is {add(30, 3)}</li>
                <li>Sub of two no is {sub(30, 3)}</li>
                <li>Div of two no is {div(10, 3)}</li>
                <li>Mult of two no is {mult(30, 3)}</li>
            </ul>
        </>
    );
}

export default Calculater;