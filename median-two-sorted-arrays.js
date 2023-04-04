/* Given two sorted arrays nums1 and nums2 of size m and n respectively, 
return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).
*/

const findMedianSortedArrays = function (nums1, nums2) {
  const arrSort = nums1.concat(nums2).sort((a, b) => a - b);
  if (arrSort.length % 2 === 1) {
    const midIndex = Math.floor(arrSort.length / 2);
    return arrSort[midIndex];
  } else {
    const midLow = arrSort[arrSort.length / 2 - 1];
    const midHigh = arrSort[arrSort.length / 2];
    const calcMedian = (midLow + midHigh) / 2;
    return calcMedian;
  }
};
