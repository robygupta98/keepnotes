import React from 'react';

//display image code ------------------------------------------------------------------------------------
function Imagedisplay() {
    const fname = "Roby";
    const lname = "Gupta";
    const img1 = "https://picsum.photos/200/300";
    const img2 = "https://picsum.photos/250/300";
    const img3 = "https://picsum.photos/300/300";
    const link = "https://www.thapatechnical.com";

    const heading = {
    color: '#fa9191',
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    textShadow: '0px 2px 4px #ffe9c5',
    margin: '50px',
    fontFamily: `'josefin sans', 'sans-serif'`,
    }

    return (
        <>
     <h1 style={heading}> My name is {`${fname} ${lname}`} </h1>
     <div className="img_div">
       <img src={img1} alt="random Image" />
       <img src={img2} alt="random Image" />
       <a href={link} target="_blank" >
         <img src={img3} alt="random Image" />
       </a>
     </div>
   </>
    );
}

export default Imagedisplay;