import React, { useState } from "react";

function App() {

  const [show, setShow] = useState(true);
  const [rotateAngle, setRotateAngle] = useState(45);


  const changeAngle = (value) => {

    setRotateAngle(rotateAngle + value);

  };


  const toggleClick = () => {
    setShow(!show);
  };

  
    return (
      <div>
        <button className="math" onClick={(event) => {changeAngle(1); }}>Add</button>
        <button className="math" onClick={(event) => {changeAngle(-1); }}>Subtract</button>
        <button className="math" onClick={toggleClick}>
          { show ? "Hide number" : "Show number" }
        </button>
        { show ? <h2>{ rotateAngle }</h2> : null }
        <div className="circle"> 
          <div className="verticalLine">
          </div>
          <div className="movingLine" style={{transform: "rotate(" + rotateAngle + "deg)"}}>
            <div className="movingLineHandle"></div>
          </div>
        </div>
      </div>
    );
};

export default App;