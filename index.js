// Skeleton

// FUNCTION DEFINITION(S)
function findMaxRepeatCountInWord(word) 
{
  // Break up individual words into individual letters.
  var characterArray = word.split('');
  
  // Object to keep track of each character count
  var countObject = {};
  
  // keep track of the max count
  var maxCount = 0;
  
  // Count the instances of each letter
  for(var index = 0; index < characterArray.length; index++)
  {
   var currentCharacter = characterArray[index];

  // Iterate all the counts and find the highest 
   if(countObject[currentCharacter] === undefined)
   {
     countObject[currentCharacter] = 1;
   }
   else
   {
     countObject[currentCharacter]++;
   }
   if(countObject[currentCharacter] > maxCount)
   {
     maxCount = countObject[currentCharacter];
   }
  }

  // Return this word's max repeat count
    return maxCount;
}

function findFirstWordWithMostRepeatedChars(text) {
  var maxRepeatCountOverall = 0;
  var wordWithMaxRepeatCount = '';

  // Break up input text into words (space-delimited).
  // For each word...
    var repeatCountForWord = findMaxRepeatCountInWord(word)
    // If that max repeat count is higher than the overall max repeat count, then
      // update maxRepeatCountOverall
      // update wordWithMaxRepeatCount

  return wordWithMaxRepeatCount;
}

// ASSERTION FUNCTION(S) TO BE USED

// TESTS CASES