/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

*/

function validatePIN (pin) {
  //return true or false
  if (!isNaN(pin)) {
    var number = pin.trim().split("").map(Number);
    var num = number.join("");
  console.log(num);
    if ((number.length == 4 || number.length == 6) && num >=0) {
      return true
    } else {
        return false
    }
  }
  else 
    return false;
}