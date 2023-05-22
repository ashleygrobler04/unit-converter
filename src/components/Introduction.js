const Introduction = (props) => {
  return (
    <div>
      <h1>First time use</h1>
      <p>
        How to use
        <br />
      </p>
        <ol>
          <li>Simply enter a numeric value. Decimal values may be included.</li>
          <li>
            Use the first drop-down item to select the unit you'd like to
            convert from.
          </li>
          <li>
            Use the other drop-down item to select the unit you're converting
            to.
          </li>
          <li>
            Click the "Done" button and you should see your results appear.
          </li>
          <li>
            Please note that some units can't be converted between. For example
            centimeters to killograms. In that case you will be notified.
          </li>
        </ol>
      <button onClick={props.next}>Next</button>
    </div>
  );
};

export default Introduction;
