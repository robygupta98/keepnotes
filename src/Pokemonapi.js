import React from "react";
import { useEffect, useState } from 'react/cjs/react.development';
import axios from "axios";

const Pokemonapi = () => {
    const [num,setNum]=useState("");
    const [name,setName]=useState("");
    const [move,setMove]=useState("");
    useEffect(()=>{
        async function getDate(){
            try{
            const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
           //const data=await res.JSON();
            //console.log(res.data);
            setName(res.data.name);
            setMove(res.data.moves.length);
            }
            catch(err){
                console.log(err);
            }
        }
        getDate();
    })
    return (
        <>
        <h2>You chose <span style={{color:"red"}}> {num} </span> value.</h2>
        <h2>My name is <span style={{color:"red"}}> {name} </span></h2>
        <h2>I have <span style={{color:"red"}}> {move} </span> moves</h2>
            <select value={num} onChange={(e)=>{setNum(e.target.value);}}>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">5</option>
                <option value="5">6</option>
            </select>
        </>
    )
}

export default Pokemonapi;