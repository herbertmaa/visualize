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
export { bubbleSort, mergeSort };
