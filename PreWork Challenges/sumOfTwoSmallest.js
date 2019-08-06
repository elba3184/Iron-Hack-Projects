/*Elba Chimilio
*The sumTwoSmallestNumbers function returns the sum of the two lowest 
* positive numbers given an array of minimum 4 integers. No floats or 
* empty arrays will be passed.
*/

/*Function takes in an array of numbers,
* Uses for-loop to create an ascending sorted version of the original array
* And finally adds the sum of the first two indices which in the ascending
* Array would be the first two values. 
* Returns the int sum.
*/
function sumTwoSmallestNumbers(numbers){
    var sum = 0;
    for (i = 0; i < numbers.length; i++) {
        var ascendingArr = numbers[i];
        for (j = i - 1; j >= 0 && (numbers[j] > ascendingArr); j--) {
            numbers[j+1] = numbers[j];
        }
        numbers[j+1] = ascendingArr;
    } 
    sum = numbers[0] + numbers[1];
    return sum;
}
  
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); // 13 , "Sum should be 13");
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])); // 6 , "Sum should be 6");
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7])); // 10 , "Sum should be 10");
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1])); //  24 , "Sum should be 24");
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4])); //  16 , "Sum should be 16");
console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])); // 3453455