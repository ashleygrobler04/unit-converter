import React, { useState } from "react";
const convert = require("convert-units");

const InputForm = () => {
  const [input, setInput] = useState(0);
  const [inputFrom, setInputFrom] = useState("");
  const [inputTo, setInputTo] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      setOutput(`${input} ${inputFrom} = ${convert(input).from(inputFrom).to(inputTo)}${inputTo}`);
    } catch (e) {
      setOutput(
        `Error: Please make sure you perform the correct conversion.\nError message: ${e}`
      );
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleInputFromChange = (event) => {
    setInputFrom(event.target.value);
  };

  const handleInputToChange = (event) => {
    setInputTo(event.target.value);
  };

  const lst = convert().possibilities();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="enter a value"
          min={0}
          step={0.01}
          onChange={handleInputChange}
        />
        <label>
          Convert from?
          <select onChange={handleInputFromChange}>
            {lst.map((v) => (
              <option key={v}>{v}</option>
            ))}
          </select>
        </label>
        <label>
          Convert to?
          <select onChange={handleInputToChange}>
            {lst.map((v) => (
              <option key={v}>{v}</option>
            ))}
          </select>
        </label>
        <input type="submit" value="Done" />
      </form>
      <p>{output}</p>
    </div>
  );
};
export default InputForm;
