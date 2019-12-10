/*
Accepts two arrays, merge them together and then sort them

*/

//Simple method
function mergeArrays(arr1, arr2) {
    var newArr = [];
    newArr.push(...arr1, ...arr2);
    return newArr.sort();;
}
console.log(mergeArrays([1, 3, 5], [6,1,9]));

// Sorting from scratch using loops
function mergeArr (arr1, arr2) {
    var mergeArr = [];
    for (var i = 0; i<arr1.length; i++) {
        mergeArr.push(arr1[i]);
    }
    for (var i = 0; i<arr2.length; i++) {
        mergeArr.push(arr2[i]);
    }
    for (var i = 1; i < mergeArr.length; i++) {
        for (var j = 0; j < i; j++){
            if (mergeArr[i] < mergeArr[j]) {
                var num = mergeArr[i];
                mergeArr[i] = mergeArr[j];
                mergeArr[j] = num;
            }
        }
    }
    return mergeArr;
}

console.log(mergeArr ([1, 3, 5], [1, 7, 9]));

