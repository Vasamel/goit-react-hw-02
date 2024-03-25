import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Options from "./components/Options";
import Feedbacks from "./components/Feedbacks";
import Descriptions from "./components/Descriptions";

function App() {
  const [countGood, setCountGood] = useState(0);
  const [countNeytral, setCountNeytral] = useState(0);
  const [countBad, setCountBad] = useState(0);

  const incrementGood = () => {
    setCountGood(countGood + 1);
  };
  const incrementNeytral = () => {
    setCountNeytral(countNeytral + 1);
  };
  const incrementBad = () => {
    setCountBad(countBad + 1);
  };
  const totalFeedback = countGood + countNeytral + countBad;
  const positiveValue = Math.round(((countGood + countNeytral)/ totalFeedback) * 100);

  // const incrementTotal = () => {
  //   setCount(count + 1);
  // };

  return (
    <>
      <Descriptions />
      <Options
        goodFunc={incrementGood}
        neytralFunc={incrementNeytral}
        badFunc={incrementBad}
        resetFunc={() => console.log("test")}
      />
      <Feedbacks
        goodText={countGood}
        neytralText={countNeytral}
        badText={countBad}
        totalText={totalFeedback}
        positiveText={positiveValue}
      />
    </>
  );
}

export default App;
