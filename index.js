// Skeleton

// FUNCTION DEFINITION(S)
function findMaxRepeatCountInWord(word) {
  // Break up individual words into individual letters.
  var objChar = {};// object to store each letter in the word
  var maxCharCount = 0;
  // Count the instances of each letter
  for(var index = 0; index < word.length; index++)
  {
    var currentChar = word[index];
    
    if(objChar[currentChar] === undefined)
    {
      obj[currentChar] = 1;
    }
    else
    {
      obj[currentChar]++;
    }
    // Iterate all the counts and find the highest
    maxCharCount = Math.max(maxCharCount, obj[currentChar]);
  }
  // Return this word's max repeat count
  return maxCharCount;
}

function findFirstWordWithMostRepeatedChars(text) {
  var maxRepeatCountOverall = 0;
  var wordWithMaxRepeatCount = '';

  // Break up input text into words (space-delimited).
  var textArray = text.split(' ');
  // For each word...
  for(var index = 0; index < textArray.length; index++)
  {
    var word = textArray[index];// current word in the textArray
    
    var repeatCountForWord = findMaxRepeatCountInWord(word)
    // If that max repeat count is higher than the overall max repeat count, then
    if(repeatCountForWord > maxRepeatCountOverall)
    {
      // update maxRepeatCountOverall
      maxRepeatCountOverall = repeatCountForWord;
      // update wordWithMaxRepeatCount  
      wordWithMaxRepeatCount = word;
    }
  }
  return wordWithMaxRepeatCount;
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
   console.log('FAILED. Expected ' + expected + ', but got ' + actual); 
 }
}

// TESTS CASES

// Test 1
var test1 = findFirstWordWithMostRepeatedChars('Today is Tuesday, June 8th!');
assertEquals(test1, 'Today', 'Check and log to the console the word in a text that has the most number of repeated characters.');

// Test 2
var test2 = findFirstWordWithMostRepeatedChars(text);
assertEquals(test2, expected, testName);

// Test 3
var test3 = findFirstWordWithMostRepeatedChars(text);
assertEquals(test3, expected, testName);
