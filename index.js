function addFullNameProp(obj)
{
  var firstName = obj.firstName;
  var lastName = obj[lastName];

  if (firstName && lastName) 
  {
    obj['fullName'] = firstName + ' ' + lastName;
  }

  return obj;
}

function assertObjectsEqual(actual,expected, testName)
{
  if(actual === expected)
  {
    console.log('Passed');
  }
  else 
  {
    console.log('FAILED [' + testName + '] Expected ' + expected + ' but got ' + actual);
  }
}

var newObject = {
    firstName: 'Johnny',
    lastName: 'Walker'
};

// Test Cases

var object = {}

// Test Case 1
var output1 = addFullNameProp({});

assertObjectsEqual(output1, {} , '');

// Test Case 2
var output2 = addFullNameProp([]);

assertObjectsEqual(output2 , {} , '');

// Test Case 3
var output3 = addFullNameProp(newObject);

assertObjectsEqual(output3, {firstName: 'Johnny', lastName: 'Walker', fullName: 'Johnny Walker'}, '');
// Test Case 4
var output4 = addFullNameProp(null);

assertObjectsEqual(output4, {}, '');
