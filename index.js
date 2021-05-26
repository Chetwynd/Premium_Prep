// FUNCTION DEFINITION(S)
function map(array, callbackFunction)
{
  if(array === undefined || array.length === 0)
  {
    return undefined;
  }
  
  var sum = 0;

  for (var i = 0; i < array.length; i++) 
  {
    var element = array[i];
    
    sum += callbackFunction(element);
  }
  return sum;
}

function cubeAll(numbers) {
  return map(numbers, function(n) {
    return n * n * n;
  });
}

// ASSERTION FUNCTION(S) TO BE USED
function assertArraysEqual(expected, actual, testName)
{
  if(actual === expected)
  {
    console.log("Passed");
  }
  else
  {
    console.log("FAILED. [" + testName + "]. Expected " + expected + " but got " + actual);  
  }
}

// TESTS CASES

// Test 1
assertArraysEqual(99, cubeAll([2,3,4]), 'Get the sum of the cube of 2, 3 and 4');
// 2 ** 3 + 3 ** 3 + 4 ** 3 = 8 + 27 + 64 = 99


// Test 2
assertArraysEqual(485, cubeAll([8,-3]), 'Get the sum of the cube of 8 and -3');
// 8 ** 3 + -3 ** 3 = 512 + -27  = 485


// Test 3
assertArraysEqual(0, cubeAll([0]), 'Get the cube of 0');
// 0

// Test 4
assertArraysEqual(undefined, cubeAll([]), 'Get the cube of []');
// undefined
