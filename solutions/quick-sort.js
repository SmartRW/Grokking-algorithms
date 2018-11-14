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

const getRandomIndex = coll => Math.floor(Math.random() * (coll.length - 1));

const qSort = (coll) => {
  if (coll.length < 2) {
    return coll;
  }
  const pivotIndex = getRandomIndex(coll);
  const pivot = coll[pivotIndex];
  const beforePivot = [];
  const afterPivot = [];
  coll.forEach((item, index) => {
    if (index !== pivotIndex) {
      if (item > pivot) {
        afterPivot.push(item);
      } else {
        beforePivot.push(item);
      }
    }
  });
  return [...qSort(beforePivot), pivot, ...qSort(afterPivot)];
};

console.log(areArraysEqual(qSort(arr), sorted));
