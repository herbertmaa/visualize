import Graph from "./components/Graphs";
import RandomSlider from "./components/RandomSlider/RandomSlider";
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { bubbleSort } from "./utils/sort";

const App = () => {
  const generateRandomValues = (num) => {
    return Array.from({ length: num }, (element, index) => {
      return {
        x: index,
        y: Math.floor(Math.random() * 100),
      };
    });
  };

  const handleChange = (event, value) => {
    if (value === numValues) return;
    setNumber(value);
    setRandomValues(generateRandomValues(value));
  };

  const [numValues, setNumber] = useState(50);
  const [randomData, setRandomValues] = useState(generateRandomValues(50));

  const timer = (ms) => new Promise((res) => setTimeout(res, ms));

  return (
    <div>
      <Graph key="graphData" data={randomData} />
      <RandomSlider handleChange={handleChange} />
      <Button
        variant="contained"
        color="primary"
        onClick={async () => {
          let changes = await bubbleSort(randomData);
          for (let i = 0; i < changes.length; ++i) {
            setRandomValues([...changes[i]]);
            await timer(50);
          }
        }}
      >
        Sort me!
      </Button>
    </div>
  );
};

export default App;
