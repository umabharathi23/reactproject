import React, { useState } from 'react';

function ColorChangingButton() {
  // State to track the background color
  const [backgroundColor, setBackgroundColor] = useState('#3498db');

  // Function to change the background color
  const changeColor = () => {
    // Generate a random color (you can customize this logic)
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setBackgroundColor(randomColor);
  };

  return (
    <div>
      <button
        style={{ backgroundColor: backgroundColor }}onClick={changeColor}>
        Click here to change color
      </button>
    </div>
  );
}

export default ColorChangingButton;