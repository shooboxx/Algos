/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

*/

function maskify(cc) {
  var cardNum = cc.split("").map(String);
  console.log(cardNum);
  for (var i = 0; i< cardNum.length-4; i++) {
    cardNum[i] = "#";
  }
return cardNum.join("");

}
console.log(maskify("152324231"));