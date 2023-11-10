import React, { useState } from 'react';

function Color() {
  // State to track the background color
  const [backgroundColor, setBackgroundColor] = useState('#3499db');

  // Function to change the background color
  const changeColor = () => {
    // Generate a random color (you can customize this logic)
    const randomColor = '#' + Math.floor(Math.random()*1677215).toString(16);
    setBackgroundColor(randomColor);
  };

  return (
    <div>
      <div style={{ backgroundColor: backgroundColor , height:"1500px",width:"1700px" }} > <button onClick={changeColor}>click here</button>
      </div>
    </div>
  );
}

export default Color;