import React from "react";
import Sdata from './Sdata';
import Card from './Card';

const Netflix=()=>{
    return (
      <Card
        key={Sdata[0].Id}
        imgsrc={Sdata[0].imgsrc}
        title={Sdata[0].title}
        sname={Sdata[0].sname}
        link={Sdata[0].links}
      />
    );
}

export default Netflix;








































































