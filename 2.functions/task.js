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

  for (var i = 0; i < arrOfArr.length; i++) {
    if (func(arrOfArr[i]) > max) {
      max = func(arrOfArr[i]);
    }
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  let delta;
  let maxmin = getArrayParams(arr);
  delta = Math.abs(maxmin.max - maxmin.min)
  
  return delta;
}
