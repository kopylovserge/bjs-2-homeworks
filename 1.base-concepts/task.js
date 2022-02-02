"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant;
  discriminant = b ** 2 - 4 * a * c;
  let x1, x2;

  if (discriminant === 0) {
    x1 = -b / (2 * a);
  } else if (discriminant > 0) {
    x1 = (-b + Math.sqrt(discriminant) ) / (2 * a);
    x2 = (-b - Math.sqrt(discriminant) ) / (2 * a);
  }

  if (x1 !== undefined) { arr.push(x1); }
  if (x2 !== undefined) { arr.push(x2); }

  console.log(discriminant);
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь. 

  return totalAmount;
}
