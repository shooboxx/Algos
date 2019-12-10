
/*  
Accepts a string and reverses it

*/
/* Using reverse method ES6 */

function reverseMethod(string) {
    return [...string].reverse().join('');
};
console.log(reverseMethod('Hello there'));

/* Input a string and reverse it*/

function reverse(string) {
    var strArr = string.split("");
    var newString = [];
    for (var i = strArr.length-1; i>=0; i--) {
        newString.push(strArr[i])
    }
    return newString.join('');
};
console.log(reverse('Hello there'));