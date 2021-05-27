// Skeleton

// FUNCTION DEFINITION(S)
function average(numbers)
{
  // edge case
  if(numbers === undefined || numbers === null || !Array.isArray(numbers) || numbers.length === 0)
  {
    return undefined;
  }
  // uses sum function
  var average = sum(numbers) / numbers.length;
  // returns the average of an array of numbers
  return average;
}

function sum(numbers) 
{
  // returns the sum of an array of numbers
  // accumulator
  var sum = 0;
  // iterate
  for(var index = 0; index < numbers.length; index++)
  {
    sum += numbers[index];
  }
  return sum;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertAverageEquals(actual, expected, testName)
{
  if(actual === expected)
  {
    console.log('Passed');
  }
  else
  {
    console.log('FAILED. [' + testName + '] Expected ' + expected + ' , but got ' + actual);  
  }
}

// TESTS CASES

// Test Case 1
var output1 = average([2,4,8,9,12]);
var expected1 = 7;
//
assertAverageEquals(output1, expected1, 'The average of 2,4,8,9 and 12 is 7');

// Test Case 2
var output2 = average(0);
var expected2 = undefined;
//
assertAverageEquals(output2, expected2, 'The average of 0 is undefined');

// Test Case 3
var output3 = average([]);
var expected3 = undefined;
//
assertAverageEquals(output3, expected3, 'The average of [] is undefined');

// Test Case 4
var output4 = average(null);
var expected4 = undefined;
//
assertAverageEquals(output4, expected4, "The average of 'null' is undefined");

// Test Case  5
var output5 = average([2,-4,8,-9,12]);
var expected5 = 1.8;
//
assertAverageEquals(output5, expected5, 'The average of 2,-4,8,-9 and 12 is 1.8');

// Test Case  6
var output6 = average([0]);
var expected6 = 0;
//
assertAverageEquals(output5, expected5, 'The average of 0 is 0');



