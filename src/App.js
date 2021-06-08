import Graph from "./components/Graphs";
import RandomSlider from "./components/RandomSlider/RandomSlider";
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import {
  bubbleSort,
  mergeSort,
  selectionSort,
  insertionSort,
} from "./utils/sort";
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

  const handleChange = (event, value) => {
    if (value === numValues) return;
    setNumber(value);
    setProgress(0);

    const rand = generateRandomValues(value);
    setRandomValues(rand);
    setOriginalData(rand);
    setColor("lightBlue");
    setSorting(false);
  };

  const [numValues, setNumber] = useState(50);
  const [randomData, setRandomValues] = useState(generateRandomValues(50));
  const [originalData, setOriginalData] = useState(randomData);
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState(0.7);
  const [color, setColor] = useState("lightBlue");
  const [sorting, setSorting] = useState(false);
  const [sortMethod, setSortMethod] = useState(0);
  //0 is BubbleSort, 1 is MergeSort, 2 is SelectionSort, 3 is InsertionSort

  const handleSortChange = (event, value) => {
    setSortMethod(event.target.value);
    if (sorting === true) {
      setRandomValues(originalData);
      setColor("lightBlue");
      setSorting(false);
      setProgress(0);
    }
  };

  const timer = (ms) => new Promise((res) => setTimeout(res, ms));

  const callSortMethod = () => {
    switch (sortMethod) {
      case 0:
        return bubbleSort(randomData);
      case 1:
        return mergeSort(randomData);
      case 2:
        return selectionSort(randomData);
      case 3:
        return insertionSort(randomData);
      default:
        return [];
    }
  };

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
          const changes = await callSortMethod();
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
