function addFullNameProp(obj)
{
  // edge case
  if(obj === undefined || typeof obj !== 'object' || Array.isArray(obj) || obj === null)
  {
    return {};
  }
  var firstName = obj.firstName;
  var lastName = obj['lastName'];
  
  if(firstName && lastName)
    obj['fullName'] = firstName + ' ' + lastName;

  return obj;
}

function assertObjectsEqual(actual,expected, testName)
{
  var actualString = JSON.stringify(actual);
  var expectedString = JSON.stringify(expected);
  
  if(actualString === expectedString)
  {
    console.log('Passed');
  }
  else 
  {
    console.log('FAILED [' + testName + '] Expected ' + expectedString + ' but got ' + actualString);
  }
}

var newObject = {
    firstName: 'Johnny',
    lastName: 'Walker'
};

// Test Cases

var expectedObject = {
    firstName: 'Johnny',
    lastName: 'Walker',
    fullName: 'Johnny Walker'
};

// Test Case 1
var output1 = addFullNameProp({});

assertObjectsEqual(output1, {} , 'It takes an empty object, {}, as input and returns an empyt object');

// Test Case 2
var output2 = addFullNameProp([]);

assertObjectsEqual(output2 , {} , 'It takes an empty array, [], as input and returns an empyt object');

// Test Case 3
var output3 = addFullNameProp(newObject);

assertObjectsEqual(output3, expectedObject, 'It takes an object , newObject , and adds the fullName property to it');

// Test Case 4
var output4 = addFullNameProp(null);

assertObjectsEqual(output4, {}, "It takes in 'null' , as input and returns an empyt object");
