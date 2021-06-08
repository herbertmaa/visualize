/* Different types of sorting methods */

const bubbleSort = async (original) => {
  let arr = [...original];
  let sorted = false;

  let answers = [];

  while (!sorted) {
    let numSwaps = 0;
    for (let i = 0; i < arr.length - 1; ++i) {
      if (arr[i]["y"] > arr[i + 1]["y"]) {
        let temp = arr[i + 1]["y"];
        arr[i + 1]["y"] = arr[i]["y"];
        arr[i]["y"] = temp;
        numSwaps++;
        answers.push(JSON.parse(JSON.stringify(arr)));
      }
    }
    if (numSwaps === 0) sorted = true;
  }

  return answers;
};

const mergeSort = async (original) => {};

const insertionSort = async (original) => {
  let arr = [...original];
  let answers = [];

  for (let i = 1; i < arr.length; i++) {
    const key = arr[i]["y"];
    let j = i - 1;
    while (j >= 0 && key < arr[j]["y"]) {
      arr[j + 1]["y"] = arr[j]["y"];
      j--;
      answers.push(JSON.parse(JSON.stringify(arr)));
    }

    arr[j + 1]["y"] = key;
    answers.push(JSON.parse(JSON.stringify(arr)));
  }

  return answers;
};

const selectionSort = async (original) => {
  let arr = [...original];
  let answers = [];

  let sortedIndex = 0;
  while (sortedIndex < arr.length) {
    let min = Infinity;
    for (let i = sortedIndex; i < arr.length; i++) {
      if (arr[i]["y"] < min) {
        min = arr[i]["y"];
        arr[i]["y"] = arr[sortedIndex]["y"];
        arr[sortedIndex]["y"] = min;
        answers.push(JSON.parse(JSON.stringify(arr)));
      }
    }
    sortedIndex++;
  }
  console.log(answers);
  return answers;
};

export { bubbleSort, mergeSort, insertionSort, selectionSort };
