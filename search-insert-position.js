// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    } else if (target > nums[nums.length - 1]) {
      return nums.length;
    } else if (target < nums[0]) {
      return 0;
    } else if (nums[i] !== target && target < nums[i + 1] && target > nums[i]) {
      return i + 1;
    }
  }
};
