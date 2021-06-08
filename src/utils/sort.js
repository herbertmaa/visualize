/* Different types of sorting methods */

const bubbleSort = (original) => {
  let arr = JSON.parse(JSON.stringify(original));
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

const mergeSort = (original) => {
  const mergeHelper = (arr, l, m, r, answers) => {
    const n1 = m - l + 1;
    const n2 = r - m;

    const copy = JSON.parse(JSON.stringify(arr));

    // Create temp arrays
    const L = [];
    const R = [];

    // Copy data to temp arrays L[] and R[]
    for (let i = 0; i < n1; i++) {
      L[i] = copy[l + i];
    }
    for (let j = 0; j < n2; j++) {
      R[j] = copy[m + 1 + j];
    }

    let leftIndex = 0;
    let rightIndex = 0;
    let k = l;

    while (leftIndex < n1 && rightIndex < n2) {
      if (L[leftIndex]["y"] < R[rightIndex]["y"]) {
        arr[k]["y"] = L[leftIndex]["y"];
        leftIndex++;
      } else {
        arr[k]["y"] = R[rightIndex]["y"];
        rightIndex++;
      }
      k++;
    }

    while (leftIndex < n1) {
      arr[k]["y"] = L[leftIndex]["y"];
      leftIndex++;
      k++;
    }

    while (rightIndex < n2) {
      arr[k]["y"] = R[rightIndex]["y"];
      rightIndex++;
      k++;
    }

    answers.push(JSON.parse(JSON.stringify(arr)));
  };
  const sorter = (arr, l, r, answers) => {
    if (l < r) {
      const m = Math.floor((l + r) / 2);
      sorter(arr, l, m, answers);
      sorter(arr, m + 1, r, answers);
      mergeHelper(arr, l, m, r, answers);
    }
  };

  let arr = JSON.parse(JSON.stringify(original));
  let answers = [];

  sorter(arr, 0, arr.length - 1, answers);
  return answers;
};

const insertionSort = (original) => {
  let arr = JSON.parse(JSON.stringify(original));
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

const selectionSort = (original) => {
  let arr = JSON.parse(JSON.stringify(original));
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
  return answers;
};

export { bubbleSort, mergeSort, insertionSort, selectionSort };
