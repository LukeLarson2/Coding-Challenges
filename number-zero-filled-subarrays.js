/* Given an integer array nums, return the number of subarrays filled with 0.
A subarray is a contiguous non-empty sequence of elements within an array.
*/

var zeroFilledSubarray = function (nums) {
  let result = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count++;
      result += count;
    } else {
      count = 0;
    }
  }
  return result;
};
