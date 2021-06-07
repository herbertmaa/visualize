import Graph from "./components/Graphs";
import RandomSlider from "./components/RandomSlider/RandomSlider";
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { bubbleSort } from "./utils/sort";
import LinearProgressLabel from "./components/LinearProgressLabel/LinearProgressLabel";
import SortDropDown from "./components/SortDropDown/SortDropDown";

const App = () => {
  const generateRandomValues = (num) => {
    return Array.from({ length: num }, (element, index) => {
      return {
        x: index,
        y: Math.floor(Math.random() * 100),
      };
    });
  };

  const handleSortChange = (event, value) => {
    setSortMethod(event.target.value);
  };

  const handleChange = (event, value) => {
    if (value === numValues) return;
    setNumber(value);
    setProgress(0);
    setRandomValues(generateRandomValues(value));
    setColor("lightBlue");
    setSorting(false);
  };

  const [numValues, setNumber] = useState(50);
  const [randomData, setRandomValues] = useState(generateRandomValues(50));
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState(0.7);
  const [color, setColor] = useState("lightBlue");
  const [sorting, setSorting] = useState(false);
  const [sortMethod, setSortMethod] = useState(0);
  //0 is BubbleSort, 1 is MergeSort, 2 is SelectionSort, 3 is InsertionSort

  const timer = (ms) => new Promise((res) => setTimeout(res, ms));

  const callSortMethod = () => {};
  return (
    <div>
      <SortDropDown handleChange={handleSortChange}></SortDropDown>
      <Graph color={color} key="graphData" data={randomData} />
      <RandomSlider handleChange={handleChange} />
      <Button
        style={{ marginLeft: "50px" }}
        variant="contained"
        color="primary"
        onClick={async () => {
          if (sorting) return; // already sorting
          setSorting(true);
          const changes = await bubbleSort(randomData);
          const percentageChange = 100 / changes.length;
          for (let i = 0; i < changes.length; ++i) {
            setRandomValues([...changes[i]]);
            setTimeout(() => {
              setProgress((prevProgress) => {
                const newProgressValue = prevProgress + percentageChange;
                if (newProgressValue >= 99.75) setColor("lightGreen");
                return newProgressValue;
              });
            }, i * speed);
            await timer(speed);
          }
        }}
      >
        Sort me!
      </Button>
      <LinearProgressLabel value={progress} progress={progress} />
    </div>
  );
};

export default App;
