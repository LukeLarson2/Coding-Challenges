/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

const twoSum = function (nums, target) {
  let j = 1;
  let i = 0;
  let result = [];
  while (i < nums.length) {
    const sum = nums[i] + nums[j];
    if (sum === target) {
      result.push(i, j);
      break;
    } else if (sum !== target && j >= nums.length - 1) {
      i++;
      j = i + 1;
    } else {
      j++;
    }
  }
  return result;
};
