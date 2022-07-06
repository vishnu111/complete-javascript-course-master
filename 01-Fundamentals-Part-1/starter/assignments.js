const dolphinsMatch1 = 109;
const dolphinsMatch2 = 95;
const dolphinsMatch3 = 106;
const koalaMatch1 = 109;
const koalaMatch2 = 95;
/**const koalaMatch3 = 106;
const dolphinsAvg = (dolphinsMatch1 + dolphinsMatch2 + dolphinsMatch3) / 3;
const koalaAvg = (koalaMatch1 + koalaMatch2 + koalaMatch3) / 3;
if (dolphinsAvg > koalaAvg) {
  if (dolphinsAvg > 100) console.log(`Dolphins arw winners`);
  else console.log(`Dolphins score is not more than 100`);
} else if (dolphinsAvg === koalaAvg) {
  if (dolphinsAvg > 100 && koalaAvg > 100) console.log(`both are winners`);
  else
    console.log(
      `though they have same score, they both could not cross 100. So, no winners`
    );
} else {
  if (koalaAvg > 100) console.log(`Koalas are the winners`);
  else console.log(`Dolphins score is not more than 100`);
}
*/
//If the tip is in between 50 and 300 then 15% tip, or 20% for anything else.
const bill = 275;
console.log(`The bill is: ${bill}, the tip is ${(bill * 15) / 100} `);
