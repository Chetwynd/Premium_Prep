//Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

function findPairForSum(integers, target) 
{
  // your solution here
  var integerPairArray = [];
  // first have the first element as one of the pairs
  var firstInteger = integers[0];
  // will store the sum of integers
  var sum = 0;
    // iterate through the remaining elements
  for(var index = 1; index < integers.length; index++)
  {
   // add each to the first element and compare the result with the target
    sum = firstInteger + integers[index];
      // if true then return the pair in an array
   if(sum === target)
   {
     integerPairArray.push(firstInteger, integers[index]);
     break;
   }
   // if the end of the array is reached and there is no result
   if(index === integers.length - 1 && sum !== target)
   {
     // remove the first element from the array
     integers.shift();
      // repeat the loop
     integerPairArray = findPairForSum(integers, target);
   }   
  }
  return integerPairArray;
}

// example
var pair = findPairForSum([3, 34, 4, 12, 5, 2], 17);
console.log(pair); // --> [12, 5]