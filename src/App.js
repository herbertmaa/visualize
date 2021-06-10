import Graph from "./components/Graphs";
import RandomSlider from "./components/RandomSlider/RandomSlider";
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import ResultsContainer from "./components/ResultsContainer/ResultsContainer";
import Grid from "@material-ui/core/Grid";

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

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
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

  const handleSortChange = (event, value) => {
    setSortMethod(event.target.value);
    if (sorting === true) {
      setRandomValues(originalData);
      setColor("lightBlue");
      setSorting(false);
      setProgress(0);
      setOpen(false);
    }
  };

  const getMethodName = (value) => {
    switch (value) {
      case 0:
        return "Bubble Sort";
      case 1:
        return "Merge Sort";
      case 2:
        return "Selection Sort";
      case 3:
        return "Insertion Sort";
      default:
        return "Undefined";
    }
  };
  const [numValues, setNumber] = useState(50);
  const [randomData, setRandomValues] = useState(generateRandomValues(50));
  const [originalData, setOriginalData] = useState(randomData);
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState(0.7);
  const [color, setColor] = useState("lightBlue");
  const [sorting, setSorting] = useState(false);
  const [sortMethod, setSortMethod] = useState(0);
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState(0);
  const [results, setResults] = useState([]);
  const [changeDisabled, setDisabled] = useState(false);
  //0 is BubbleSort, 1 is MergeSort, 2 is SelectionSort, 3 is InsertionSort

  const timer = (ms) => new Promise((res) => setTimeout(res, ms));

  const callSortMethod = async () => {
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
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      spacing={2}
    >
      <Grid style={{ marginLeft: "20px" }} item xs={5}>
        <SortDropDown
          isDisabled={changeDisabled}
          handleChange={handleSortChange}
        ></SortDropDown>
        <Graph color={color} key="graphData" data={randomData} />
        <RandomSlider handleChange={handleChange} />
        <Button
          style={{ marginLeft: "50px" }}
          variant="contained"
          color="primary"
          onClick={async () => {
            if (sorting) return; // already sorting
            setDisabled(true);
            setSorting(true);
            const changes = await callSortMethod();
            const percentageChange = 100 / changes.length;

            const startTime = Date.now();
            for (let i = 0; i < changes.length; ++i) {
              setRandomValues([...changes[i]]);
              setTimeout(() => {
                setProgress((prevProgress) => {
                  const newProgressValue = prevProgress + percentageChange;
                  if (newProgressValue >= 99.75) {
                    setColor("lightGreen");
                    setOpen(true);
                    console.log("Done sorting");
                  }
                  return newProgressValue;
                });
              }, i * speed);
              await timer(speed);
            }

            const delta = Date.now() - startTime; // in milliseconds
            setTime(delta);
            setDisabled(false);
            setResults((prevArr) => {
              return [
                ...prevArr,
                {
                  method: getMethodName(sortMethod),
                  time: delta,
                  numElements: numValues,
                },
              ];
            });
          }}
        >
          Sort me!
        </Button>
        <LinearProgressLabel value={progress} progress={progress} />
      </Grid>

      <Grid item xs={4}>
        <ResultsContainer children={results} />
      </Grid>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Your input was sorted in {time} ms! 🚀
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default App;
