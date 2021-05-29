// FUNCTION DEFINITION(S)

// USE THIS FUNCTION TO GENERATE A RANDOM NUMBER
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decorateClassListWithAges(classList) {
  // creates an object for each string in the input array, with an age of 10 or 11
  
  //edge case
  if(classList === undefined || classList === null || classList.length === 0 || !Array.isArray(classList))
  {
    return [];
  }
  
  // accumulator
  var arrayObjectClassListWithAges = [];
  
  // iterate over the array
  for(var index = 0; index < classList.length; index++)
  {
    var currentName = classList[index];
    
    // get a random age between 10 and 11
    var minAge = 10;
    var maxAge = 11;
    
    var currentAge = getRandomIntInclusive(minAge,maxAge);
    
    // create a new object to store each key-value pair
    var newObject = {name: currentName, age: currentAge};
    
    // assign each element of the array as a key along with
    // a random age as the value in an object
    // newObject['name'] = currentName;
    // newObject['age'] = currentAge;
    
    // add each object to the arrayObjectClassListWithAges array
    arrayObjectClassListWithAges.push(newObject);
  }
  // returns an array of these objects
  return arrayObjectClassListWithAges;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEquals(actual, expected, testName)
{
  if(actual === expected)
  {
    console.log('Passed');
  }
  else
  {
    console.log('FAILED [' + testName + 'Expected ' + expected + ', but got ' + actual);
  }
}
// TESTS CASES

// Test Case 1
assertEquals(decorateClassListWithAges([]), [], 'Empty array will return an empty array.');

// Test Case 2
assertEquals(decorateClassListWithAges(null), [], 'A value of "null" will return an empty array.');

// Test Case 3
assertEquals(decorateClassListWithAges(undefined), [], 'A value of "undefined" will return an empty array.');

// Test Case 4
assertEquals(decorateClassListWithAges(1), [], 'A value of 1 will return an empty array.');


// Test Case 5

var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
"Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
"Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];

var classListWithAges = [{"name":"Joe","age":11},{"name":"Jack","age":10},
{"name":"John","age":11},{"name":"Fred","age":11},{"name":"Frank","age":11},
{"name":"Barry","age":11},{"name":"Larry","age":11},{"name":"Mary","age":11},
{"name":"Harry","age":11},{"name":"Farrell","age":10},{"name":"Susan","age":10},
{"name":"Monica","age":11},{"name":"Keira","age":10},{"name":"Caroline","age":10},
{"name":"Harriet","age":11},{"name":"Erica","age":11},{"name":"Luann","age":10},
{"name":"Cheryl","age":11},{"name":"Beth","age":10},{"name":"Rupa","age":11},
{"name":"Linda","age":10},{"name":"Allison","age":10},{"name":"Nancy","age":10},
{"name":"Dora","age":10}]

var testName = 'Classlist should give the expected output!';

assertEquals(decorateClassListWithAges(undefined), classListWithAges, testName);

// // Test Case 6
// assertEquals(1, expected, testName);