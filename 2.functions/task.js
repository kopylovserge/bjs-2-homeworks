// Задание 1
function getArrayParams(arr) {
  let min = Infinity, max = -Infinity, sum = 0, avg;

  for (let value of arr) {
    if (value > max) {
      max = value;
    }
    if (value < min) {
      min = value;
    }
    sum += value;
  }

  avg = sum / arr.length;

  return { min: min, max: max, avg: Number(avg.toFixed(2)) };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let value of arr) {
    sum += value;
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);

  for (let i = 0; i < arrOfArr.length; i++) {
    let varTemp = func(arrOfArr[i]);
    if (varTemp > max) {
      max = varTemp;
    }
  }
  
  return max;
}

makeWork([[0, 0, 0], [-1, -100]], worker)

// Задание 3
function worker2(arr) {
  let maxmin = getArrayParams(arr);
  return Math.abs(maxmin.max - maxmin.min);
}
