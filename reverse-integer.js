/* Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the 
value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
*/

const reverse = function (x) {
  let isPos = true;
  if (x < 0) {
    isPos = false;
  }
  const strNum = Math.abs(x).toString();
  let result = "";
  for (let i = strNum.length - 1; i >= 0; i--) {
    if (strNum[strNum.length - 1] === 0) {
      continue;
    } else {
      result += strNum[i];
    }
  }
  if (isPos === true && result < Math.pow(2, 31) - 1) {
    return result;
  } else if (isPos === false && -result > Math.pow(-2, 31)) {
    return -result;
  } else {
    return 0;
  }
};
