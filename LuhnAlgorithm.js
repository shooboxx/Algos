/*
    Implement the Luhn Algorithm, which is used to help validate credit card numbers.
    - Given a positive integer of up to 16 digits, return true if it is a valid credit card number, and false if it is not.
    -  if there are an even number of digits, double every other digit starting with the first; 
            if there are an odd number of digits, double every other digit starting with the second:
    - If a resulting number is greater than 9, replace it with the sum of its own digits
    - Sum all of the final digits:
    - Finally, take that sum and divide it by 10. If the remainder equals zero, the original credit card number is valid.
*/

function validate(n){
  
var num = n.toString().split('').map(Number);
var added = 0;

  for (var i =0; i<num.length; i++) {
    //if Odd nummber of digets
    if (num.length%2 != 0) {
        //If current place is odd, then multiply current digit by  2
      if (i%2!= 0) {
        num[i] *= 2;
        //If current diget is greater than 9, add two digets together
        if (num[i]>9) {
          [a,b]=num[i].toString().split("").map(Number);
          num[i]=a+b;
        }
      } 
    // if even number of digets
    } else {
        //If current place is even, then multiply current digit by  2
        if (i%2 == 0 || i==0) {
          num[i] *= 2;
          //If current diget is greater than 9, add two digets together
          if (num[i]>9) {
            [a,b]=num[i].toString().split("").map(Number);
            num[i]=a+b;
          }
        }
    }
    added += num[i];
  }
  return added%10 == 0;
}

console.log(validate(1242));