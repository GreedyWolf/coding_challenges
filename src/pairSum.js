/**
 * pairSum should take in an array of integers, and a sum.
 * It should return a boolean value representing whether or not 
 * any two integers adds up to the sum.
 *
 * For Example:
 *
 * pairSum([1,3,5,7], 9)   ===> false;
 * pairSum([1,3,5,7], 8)   ===> true;
 * pairSum([1,3,5,7], 14)  ===> false;
 * pairSum([0, 0, 1], 0)   ===> true;
 * 
 * What is the Time Complexity of your solution?
 * Can you do it in linear time?
 * 
 */

function pairSum(array, sum) {
  // Turn array into object of number frequency
  var objectify = array.reduce(function(accumulator, number) {
    accumulator[number] = accumulator[number] ? accumulator[number] + 1 : 1;
    return accumulator;
  }, {});

  // Iterate over array
  for (var i = 0; i < array.length; i++) {
    // Given current number, look for the other number that would add up to sum
    var other = sum - array[i];

    // Two Conditions
    // A. IF the other number exist
    //      AND
    // B. IF the other number is not the same as current number 
    //      OR 
    //    IF the other number has a property greater than 1
    if(objectify[other] && (objectify[other] > 1 || other !== array[i])) {
      return true;
    }
  };

  return false;
};