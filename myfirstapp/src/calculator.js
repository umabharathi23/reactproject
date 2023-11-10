import React, { useState } from "react";

const Calculator = () => {
  const [output, setOutput] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      setOutput(eval(output))
    } else if (value === "C") {

      setOutput("");
    } else {
      setOutput((firstoutput) => firstoutput + value);
    }
  };

  return (
    <div>
      <table align="center" border={1} cellPadding={10} width={"500px"}>
        <tbody>
          <tr>
            <td colSpan={4} style={{ textAlign: "right" }}>
              {output}
            </td>
          </tr>
          <tr>
            <td onClick={() => handleButtonClick("9")}>9</td>
            <td onClick={() => handleButtonClick("8")}>8</td>
            <td onClick={() => handleButtonClick("7")}>7</td>
            <td onClick={() => handleButtonClick("+")}>+</td>
          </tr>
          <tr>
            <td onClick={() => handleButtonClick("6")}>6</td>
            <td onClick={() => handleButtonClick("5")}>5</td>
            <td onClick={() => handleButtonClick("4")}>4</td>
            <td onClick={() => handleButtonClick("-")}>-</td>
          </tr>
          <tr>
            <td onClick={() => handleButtonClick("3")}>3</td>
            <td onClick={() => handleButtonClick("2")}>2</td>
            <td onClick={() => handleButtonClick("1")}>1</td>
            <td onClick={() => handleButtonClick("*")}>*</td>
          </tr>
          <tr>
            <td onClick={() => handleButtonClick("0")}>0</td>
            <td onClick={() => handleButtonClick("C")}>C</td>
            <td onClick={() => handleButtonClick("=")}>=</td>
            <td onClick={() => handleButtonClick("/")}>/</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calculator;