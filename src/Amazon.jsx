import React from "react";
import Sdata from './Sdata';
import Card from './Card';

const Amazon=()=>{
    return (
      <Card
        key={Sdata[2].Id}
        imgsrc={Sdata[2].imgsrc}
        title={Sdata[2].title}
        sname={Sdata[2].sname}
        link={Sdata[2].links}
      />
    );
}

export default Amazon;