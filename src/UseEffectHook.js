import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const [Num,setNum]=useState(0);
    useEffect(()=>{
        //alert("I m Click");
        document.title=`You click me ${Num} time.`;
    },[Num])
    return (
        <button onClick={()=>{setNum(Num+1)}}>Click Me {Num}</button>
    )
}

export default UseEffectHook
