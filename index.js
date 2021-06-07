/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
 // first convert our array to a string
    var numsString = nums.join('');
    console.log(numsString);
 // do a split on the string with '0' as the separator
    var numsSplitArray = numsString.split('0');
    console.log(numsSplitArray);
 // now iterate through the array to see which string has the max length
    var maxConsecutiveOnes = 0;
    
    for(var index = 0; index < numsSplitArray.length; index++)
    {
      var currentIndexLength = numsSplitArray[index].length;

      maxConsecutiveOnes = Math.max(maxConsecutiveOnes, currentIndexLength);
    }
   return  maxConsecutiveOnes;
};

nums = findMaxConsecutiveOnes([1,0,1,1,0,1]);

console.log(nums);

