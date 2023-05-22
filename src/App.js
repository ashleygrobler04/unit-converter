import InputForm from "./components/inputForm";
import Introduction from "./components/Introduction";
import React, { useState } from "react";
function App() {
  const [showIntro, setShowIntro] = useState(localStorage["intro"]);
  const handleNext = () => {
    localStorage.setItem("intro", "true");
    setShowIntro(true);
  };

  return (
    <div>
      {showIntro?(
      <div>
      <h1>Unit Converter</h1>
      <InputForm />
    </div>
      ):<Introduction next={handleNext}/>}
    </div>
  );
}

export default App;
