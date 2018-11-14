const arr = [5, 12, 7, 32, -12, 0.3, 0, 4, -1.75, 100, 99, 5, 5, 0];
const sorted = arr.slice().sort((a, b) => a - b);

const areArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const iter = (i) => {
    if (i === arr1.length) {
      return true;
    }
    if (arr1[i] !== arr2[i]) {
      return false;
    }
    return iter(i + 1);
  };
  return iter(0);
};

const selectionSort = (coll) => {
  const result = coll.slice();
  let minNum;
  let swap;
  const iter = (items) => {
    if (items.length < 2) {
      return items;
    }
    const [head, ...tail] = items;
    minNum = head;
    tail.forEach((element, i) => {
      if (element < minNum) {
        swap = element;
        tail[i] = minNum;
        minNum = swap;
      }
    });
    return [minNum, ...iter(tail)];
  };
  return iter(result);
};

console.log(areArraysEqual(selectionSort(arr), sorted));
