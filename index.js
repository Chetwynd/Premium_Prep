// Skeleton

// FUNCTION DEFINITION(S)
function findLongestPalindrome(sentence) {
 
  // split sentence into words
  var words = sentence.split(' ');
  //console.log(words);
  var wordsAccumulator = [];
  // iterate words and collect the palindromes
  for(var index = 0; index < words.length; index++)
  {
    var currentWord = words[index];

    if(isPalindrome(currentWord))
    {
      wordsAccumulator.push(currentWord);
    }
  }
  // sort the list of palindromes by word length
  wordsAccumulator.sort(sortAscendingByLength);
  // return the largest item in the sorted list
  return wordsAccumulator[wordsAccumulator.length - 1];
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}

function reverseString(string)
{
 var splitStringArray = string.split('');
 // Do a reverse on the array
 splitStringArray.reverse();
 
 // Do a join to get back a string
 var reverseString = splitStringArray.join('').toLowerCase();
 
 return reverseString;
}

function isPalindrome(word) 
{
  // hint: you can detect palindromes by comparing a string to its reverse
  return word.toLowerCase() === reverseString(word);
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
var testName = 'Find the longest Palindrome in the sentence.'
var sentence1 = 'Madam on no pets';
var sentence2 = 'Was it a car or a cat I saw';
var sentence3 = 'Step on no Racecar';
var sentence4 = 'I did did I';

// Test 1
var actual1 = findLongestPalindrome(sentence1);
assertEquals(actual1, 'Madam', testName);

// Test 2
var actual2 = findLongestPalindrome(sentence2);
assertEquals(actual2, 'I', testName);

// Test 3
var actual3 = findLongestPalindrome(sentence3);
assertEquals(actual3, 'Racecar', testName);

// Test 4
var actual4 = findLongestPalindrome(sentence4);
assertEquals(actual4, 'did', testName);
