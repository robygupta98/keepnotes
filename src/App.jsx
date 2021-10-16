//import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
// import Imagedisplay from './Imagedisplay';
// import Greeding from './Greeding';
// import Calculater from './Calculater'
//import Card from './Card';
//import Sdata from './Sdata';
// import Netflix from './Netflix';
// import Amazone from './Amazon';
// import Eventhandling from './Eventhandling';
// import Forms from './Forms';
// import Loginform from './LoginForm';
// import Todolist from './Todolist';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import Accordian from './accordian/Accordian';
//import WebForm from './WebForm';
//import "./index.css";
import KeepNote from "./keepNote/KeepNote";
//import SupperCom from "./Context/SupperCom";
//import UseEffectHook from "./UseEffectHook";
//import LiveCovidCountry from "./LiveCovidTracker/LiveCovidCountry";
//import Pokemonapi from "./Pokemonapi";
// import Aboutus from "./Aboutus";
// import Contectus from "./Contectus";
// import Error from "./Error";
//const favSeries = "Amazon";

//const FavS = () => {
// if (favSeries == "Netflix") {
//  return (<Netflix/>);
// }
// else {
//   return (<Amazone/>);
// }
//}

const App = () => {
  // let [count,setCount]=useState(0);
  // const IncNum=()=>{
  //   setCount(count+1);
  // }
  // let newTime=new Date().toLocaleTimeString();
  // let [cTime,setTime]=useState(newTime);
  // const UpdateTime=()=>{
  //   newTime=new Date().toLocaleTimeString();
  //   setTime(newTime);
  // }
  // let Time=new Date().toLocaleTimeString();
  // const [cTime,Settime]=useState(Time);
  // const UpdateTime=()=>{
  //   Time=new Date().toLocaleTimeString();
  //     Settime(Time);
  //   }
  //   setInterval(UpdateTime,1000);

  return (<>
    {/* <Greeding /> */}
    {/* <Imagedisplay/> */}
    {/* <Calculater/> */}
    {/* {Sdata.map((val) => {
      return (
        <Card
          key={val.Id}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      );
    })} */}
    {/* <h1 className="heading_style">List of top 5 Netflix series in 2021.</h1> */}
    {/* <FavS/> */}
    {/* {favSeries == "Netflix" ? <Netflix/> : <Amazone/>} */}

    {/* <h1> {count} </h1>
    <button onClick={IncNum}> Click Me</button> */}
    {/* <h1> {cTime} </h1> */}
    {/* <button onClick={UpdateTime}> Get Time</button> */}
    {/* <h1> {cTime} </h1> */}
    {/* <Eventhandling/> */}
    {/* <Forms/> */}
    {/* <Loginform/> */}
    {/* <Todolist/> */}
    {/* <Accordian/> */}
    {/* <WebForm/> */}
    <KeepNote/>
    {/* <SupperCom/> */}
    {/* <UseEffectHook/> */}
    {/* <LiveCovidCountry/> */}
    {/* <Pokemonapi/> */}
      {/* <Switch>
        <Route exact path="/" component={Aboutus} />
        <Route exact path="/Contect" component={Contectus} />
        <Route component={Error} />
      </Switch> */}
  </>);
}

export default App;