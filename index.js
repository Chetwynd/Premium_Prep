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
      objChar[currentChar] = 1;
    }
    else
    {
      objChar[currentChar]++;
    }
    // Iterate all the counts and find the highest
    maxCharCount = Math.max(maxCharCount, objChar[currentChar]);
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

var testName = 'Check and log to the console the word in a text that has the most number of repeated characters.';

// Test 1
var test1 = findFirstWordWithMostRepeatedChars('Today is Tuesday, June 8th!');
assertEquals(test1, 'Today', testName);

// Test 2
var test2 = findFirstWordWithMostRepeatedChars('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.');
assertEquals(test2, 'typesetting', testName);

// Test 3
var test3 = findFirstWordWithMostRepeatedChars('There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.');
assertEquals(test3, 'passages', testName);


// Test 4
var test4 = findFirstWordWithMostRepeatedChars('Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.');
assertEquals(test4, '2000', testName);
