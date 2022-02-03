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

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let loanBody = amount - contribution;  // тело кредита
  
  function alertNan(n, nameVar) {
    if (isNaN(parseFloat(n)) || isNaN(n - 0)) {
      return `Параметр "${nameVar}" содержит неправильное значение "${n}"`;
    } else {
      return true;
    }
  }

  function monthDiff(dateFrom, dateTo) {
    return dateTo.getMonth() - dateFrom.getMonth() + (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
  }

  let percentLog = alertNan(percent, 'Процентная ставка');
  let contributionLog = alertNan(contribution, 'Начальный взнос');
  let amountLog = alertNan(amount, 'Общая стоимость');

  if (percentLog !== true) {
    totalAmount = percentLog;
    return totalAmount;
  } else if (contributionLog !== true) {
    totalAmount = contributionLog;
    return totalAmount;
  } else if (amountLog !== true) {
    totalAmount = amountLog;
    return totalAmount;
  } else {
    
    percent = parseFloat(percent);
    const p = percent / 12 / 100;
    contribution = parseFloat(contribution);
    amount = parseFloat(amount);

    let numberOfMonths = monthDiff(new Date(), new Date(date));  // количество месяцев
    let payment = loanBody * (p + (p / (((1 + p) ** numberOfMonths) - 1)));  // платеж
    // totalAmount = Math.floor((payment * numberOfMonths + contribution) * 100) / 100 ;  // платеж * кол-во месяцев + Начальный взнос
    totalAmount = +(payment * numberOfMonths).toFixed(2) ;  // платеж * кол-во месяцев + Начальный взнос

    console.log(totalAmount);
    return totalAmount;
  }


}
