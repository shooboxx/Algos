/*
    Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. 
    Bob observed that one number usually differs from the others in evenness. 
    Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

    Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

*/



function iqTest(numbers){
  // ...
  nums = numbers.split(" ").map(Number);
  var even = [], odd = [];
  console.log(nums);
  for (var i = 0; i<nums.length; i++) {
    if (nums[i]%2==0) {
      even.push(nums[i]);
    } else {
      odd.push(nums[i]);
    }
  }
  
  
  if (even.length == 1)
    return nums.indexOf(even[0])+1;
  else
    return nums.indexOf(odd[0])+1;
}

console.log(iqTest("1 9 3 5 2 3"))