class Solution {
  strcompression(str) {
    const arr = str.split("");
    let result = "";
    let count = 1;
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        result += arr[i];
      } else if (arr[i] === arr[i - 1]) {
        count += 1;
        if (i === arr.length - 1) {
          result += count;
        }
      } else {
        result += count;
        result += arr[i];
        count = 1;
        if (i === arr.length - 1) {
          result += count;
        }
      }
    }
    if (result.length < str.length) {
      return result;
    } else {
      return str;
    }
  }
}

const strcompression = new Solution();
const ans = strcompression.strcompression("abcdeeeeeeeef");
console.log(ans);
