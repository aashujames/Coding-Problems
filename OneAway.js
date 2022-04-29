class Solution {
  oneaway(string1, string2) {
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
    let count = 0;
    for (let key1 in obj1) {
      let difference = 0;
      if (obj2[key1]) {
        difference = Math.abs(obj1[key1] - obj2[key1]);
        count += difference;
        if (count > 1) {
          return false;
        }
      } else {
        difference = obj1[key1] - 0;
        count += difference;

        if (count > 1) {
          return false;
        }
      }
    }
    return true;
  }
}

const oneaway = new Solution();
const ans = oneaway.oneaway("pale", "PALE");
console.log(ans);
