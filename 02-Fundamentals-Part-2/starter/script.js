'use strict';
let str = '';
function printForecast(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`... ${arr[i]} C in ${i + 1} days`);
    str = str + `... ${arr[i]} C in ${i + 1} days`;
  }
}
let temp = [17, 21, 23];
printForecast(temp);
console.log(str);
