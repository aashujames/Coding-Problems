class Solution {
  permutation(string1, string2) {
    let obj1 = {},
      obj2 = {};
    for (const i of string1) {
      if (!obj1[i]) {
        obj1[i] = 1;
      } else {
        obj1[i] += 1;
      }
    }

    for (const j of string2) {
      if (!obj2[j]) {
        obj2[j] = 1;
      } else {
        obj2[j] += 1;
      }
    }

    for (let key1 in obj1) {
      for (let key2 in obj2) {
        if (key1 === key2) {
          if (obj1[key1] !== obj2[key2]) {
            return false;
          }
        }
      }
    }
    return true;
  }
}

const permutation = new Solution();
const ans = permutation.permutation("abbacde", "abcbade");
console.log(ans);
