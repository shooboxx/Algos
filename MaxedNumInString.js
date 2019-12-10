/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.

*/
// With Max and min function
function maxAndMin(numbers) {
    var numArr = numbers.split(" ").map(Number);
    return Math.max(...numArr) + " " + Math.min(...numArr);
};

console.log(maxAndMin("1 3 5 9 10 14 3 5 2"));


// Without Max and Min function
function highAndLow(numbers){
  // ...
  var singleNumbers = numbers.split(" "),
    numbersArr = [],
    
    for (var i = 0; i<singleNumbers.length; i++) {
      numbersArr.push(Number(singleNumbers[i]));
    };
    for (var j = 1; j<numbersArr.length; j++) {
      for (var k = 0; k<numbersArr.length; k++) {
        if (numbersArr[j] < numbersArr[k]) {
          var num = numbersArr[j];
          numbersArr[j] = numbersArr[k];
          numbersArr[k] = num;
        }
      }
    }
  return numbersArr[0] + " " + numbersArr[numbersArr.length-1]
};


console.log(highAndLow("1 3 5 9 10 14 3 5 2"));
