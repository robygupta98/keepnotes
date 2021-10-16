import React from 'react';

// show good morning ,afternoon, evening,and night---------------------------------------------------
function Greeding() {
  let curDate = new Date(2021, 7, 18, 15);
  curDate = curDate.getHours();
  let greeting = "";
  const cssStyle = {}
  if (curDate >= 1 && curDate < 12) {
    greeting = "Good Morning";
    cssStyle.color = "green";
  } else if (curDate >= 12 && curDate < 16) {
    greeting = "Good afternoon";
    cssStyle.color = "orange";
  } else if (curDate > 16 && curDate < 19) {
    greeting = "Good Evening";
    cssStyle.color = "#0f3457";
  }
  else {
    greeting = "Good Night";
    cssStyle.color = "black";
  }
  return (
    <>
      <div className="div">
        <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
      </div>
    </>
  );
}


export default Greeding;